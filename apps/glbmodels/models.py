from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.files import File
import subprocess
import os
import logging

logger = logging.getLogger(__name__)

class Scene(models.Model):
    name = models.CharField(max_length=50)
    original_glb = models.FileField(upload_to='original_3dmodels/')
    optimized_glb = models.FileField(upload_to='optimized_3dmodels/', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

@receiver(post_save, sender=Scene)
def optimize_glb(sender, instance, created, **kwargs):
    if created and not instance.optimized_glb:
        print("🟡 Starting compression...")
        try:
            input_path = instance.original_glb.path
            output_path = os.path.join(
                os.path.dirname(instance.original_glb.path).replace("original_3dmodels", "optimized_3dmodels"),
                f'{os.path.splitext(os.path.basename(input_path))[0]}_opt.glb'
            )

            print(f"🟢 Input: {input_path}")
            print(f"🟢 Output: {output_path}")
            print(f"🔧 Running command:")

            command = [
                "gltf-pipeline",
                "-i", input_path,
                "-o", output_path,
                "--draco.compressionLevel=10"
            ]
            print(" ".join(command))

            result = subprocess.run(
                command,
                capture_output=True,
                text=True,
                shell=True  # Needed for Windows .cmd files
            )

            if result.returncode != 0:
                print(f"🔴 Compression failed!")
                print(f"❗ stderr: {result.stderr}")
                print(f"❗ stdout: {result.stdout}")
                raise RuntimeError("Compression failed")

            print("✅ Compression successful!")

            with open(output_path, 'rb') as f:
                instance.optimized_glb.save(
                    os.path.basename(output_path),
                    File(f)
                )
            instance.save()

        except Exception as e:
            print(f" Error optimizing GLB: {e}")



