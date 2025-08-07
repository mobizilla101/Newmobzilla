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
            print(f"❌ Error optimizing GLB: {e}")



# @receiver(post_save, sender=Scene)
# def optimize_glb(sender, instance, created, **kwargs):
#     if created and not instance.optimized_glb:
#         input_path = instance.original_glb.path

#         # Get optimized output path inside /media/optimized_3dmodels
#         original_filename = os.path.splitext(os.path.basename(input_path))[0]
#         output_filename = f'{original_filename}_opt.glb'

#         output_dir = os.path.abspath(
#             os.path.join(os.path.dirname(input_path), '..', 'optimized_3dmodels')
#         )
#         os.makedirs(output_dir, exist_ok=True)

#         output_path = os.path.join(output_dir, output_filename)

#         print("🟡 Starting compression...")
#         print("🟢 Input:", input_path)
#         print("🟢 Output:", output_path)

#         try:
#             # Full path to gltf-pipeline.cmd (get this via `where gltf-pipeline`)
#             gltf_pipeline_cmd = r'C:\Users\dell\AppData\Roaming\npm\gltf-pipeline.cmd'

#             # Build shell command string
#             command = (
#                 f'"{gltf_pipeline_cmd}" '
#                 f'-i "{input_path}" '
#                 f'-o "{output_path}" '
#                 f'--draco.compressionLevel=10'
#             )

#             print("🔧 Running command:")
#             print(command)

#             # Run the command using shell=True (required for .cmd on Windows)
#             result = subprocess.run(command, shell=True, capture_output=True, text=True)

#             if result.returncode != 0:
#                 print("🔴 Compression failed!")
#                 print(result.stderr)
#                 raise Exception("Compression failed")

#             print("✅ Compression successful!")
#             print(result.stdout)

#             # Save optimized file to Django model field
#             with open(output_path, 'rb') as f:
#                 instance.optimized_glb.save(output_filename, File(f), save=False)

#             instance.save()

#         except Exception as e:
#             print("❌ Error optimizing GLB:", str(e))
#             logger.error(f"GLB optimization failed: {str(e)}")
#             if os.path.exists(output_path):
#                 os.remove(output_path)



# from django.db import models
# from django.dispatch import receiver
# from django.db.models.signals import post_save
# from django.core.files import File
# import subprocess
# import os

# class Scene(models.Model):
#     name = models.CharField(max_length=50)
#     original_glb = models.FileField(upload_to='original_3dmodels/')
#     optimized_glb = models.FileField(upload_to='optimized_3dmodels/', blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.name

# @receiver(post_save, sender=Scene)
# def optimize_glb(sender, instance, created, **kwargs):
#     if created and not instance.optimized_glb:
#         input_path = instance.original_glb.path

#         # Get original filename
#         original_filename = os.path.splitext(os.path.basename(input_path))[0]
#         output_filename = f'{original_filename}_opt.glb'

#         # Define new output path inside 'optimized_3dmodels'
#         output_dir = os.path.join(os.path.dirname(input_path), '..', 'optimized_3dmodels')
#         output_dir = os.path.abspath(output_dir)
#         os.makedirs(output_dir, exist_ok=True)

#         output_path = os.path.join(output_dir, output_filename)

#         print("🟡 Starting compression...")
#         print("🟢 Input:", input_path)
#         print("🟢 Output:", output_path)

#         try:
#             # Run gltf-pipeline
#             subprocess.run([
#                 # 'gltf-pipeline',
#                 'C:\\Users\\dell\\AppData\\Roaming\\npm\\gltf-pipeline.cmd'
#                 '-i', input_path,
#                 '-o', output_path,
#                 '--draco.compressionLevel=10'
#             ], check=True)

#             # Save optimized file to model field
#             with open(output_path, 'rb') as f:
#                 instance.optimized_glb.save(output_filename, File(f), save=False)

#             instance.save()
#         except Exception as e:
#             print("🔴 Compression failed!")
#             print("Error optimizing GLB:", e)



# from django.db import models
# from django.dispatch import receiver
# from django.db.models.signals import post_save
# from django.core.files import File 
# import logging
# logger = logging.getLogger(__name__)
# import subprocess
# import os

# class Scene(models.Model):
#     name = models.CharField(max_length=50)
#     original_glb = models.FileField(upload_to='original_3dmodels/')
#     optimized_glb = models.FileField(upload_to='optimized_3dmodels/', blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.name
    
# @receiver(post_save, sender=Scene)
# def optimize_glb(sender, instance, created, **kwargs):
#     if created and not instance.optimized_glb:
#         print("🟡 Starting compression...") 
#         try:
#             # Get paths
#             input_path = instance.original_glb.path
#             output_dir = os.path.dirname(input_path)
#             output_path = os.path.join(
#                 output_dir,
#                 f'{os.path.splitext(os.path.basename(input_path))[0]}_opt.glb'
#             )
#             print(f"🟢 Input: {input_path}")
#             print(f"🟢 Output: {output_path}")
            
#             # Ensure output directory exists
#             os.makedirs(output_dir, exist_ok=True)
            
#             # print(f"🟢 Input: {input_path}")
#             # print(f"🟢 Output: {output_path}")
#             # Run compression
#             result = subprocess.run([
#                 # 'node',
#                 # 'C:\\Users\\dell\\AppData\\Roaming\\npm\\node_modules\\gltf-pipeline\\bin\\gltf-pipeline.js',
#                 # r'C:\\Program Files\\nodejs\\node.exe',
#                 # r'C:\\Users\\dell\\AppData\\Roaming\\npm\\gltf-pipeline.cmd',
#                 '-i', str(input_path),
#                 '-o', str(output_path),
#                 '--draco.compressionLevel=10'
#             ], check=True)

#                     # Check if command worked
#             if result.returncode == 0:
#                 print("✅ Compression successful!")
#                 print(f"Output: {result.stdout}")
#             else:
#                 print(f"🔴 Compression failed!")
#                 print(f"Error: {result.stderr}")
            
#             # if result.returncode != 0:
#             #     logger.error(f"glTF-pipeline failed: {result.stderr}")
#             #     return
                
#             # Verify output exists
#             # if not os.path.exists(output_path):
#             #     raise FileNotFoundError(f"glTF-pipeline didn't create {output_path}")
                
            
#             # Save optimized file
#             with open(output_path, 'rb') as f:
#                 instance.optimized_glb.save(
#                     os.path.basename(output_path),
#                     File(f)
#                 )
#             print("✅ Compression successful!")
                
#         except Exception as e:
#             logger.error(f"Error optimizing GLB: {str(e)}")
#             # Remove partially created files
#             if 'output_path' in locals() and os.path.exists(output_path):
#                 os.remove(output_path)
    
# # @receiver(post_save, sender=Scene)
# # def optimize_glb(sender, instance, created, **kwargs):
# #     if created and not instance.optimized_glb :
# #         input_path = instance.original_glb.path
# #         output_path = f'{os.path.splitext(input_path)[0]}_opt.glb'
        
# #         # Compress with Draco 
# #         try:
# #             subprocess.run([
# #                 r'C:\Program Files\nodejs\node.exe',
# #                 r'C:\Users\dell\AppData\Roaming\npm\node_modules\gltf-pipeline\bin\gltf-pipeline.js',
# #                 # 'C:\\Users\\dell\\AppData\\Roaming\\npm\\gltf-pipeline.cmd',
# #                 '-i', f'"{input_path}"',
# #                 '-o', f'"{output_path}"',
# #                 '--draco.compressionLevel=5'
# #             ], check=True, capture_output=True, text=True)
# #         except subprocess.CalledProcessError as e:
# #             print("ERROR OUTPUT:", e.stderr)
# #             print("STDOUT:", e.stdout)  # 👈 This will show the real error
# #             raise    
# #         # Save optimized file
# #         with open(output_path, 'rb') as f:
# #             instance.optimized_glb.save(
# #                 os.path.basename(output_path),
# #                 File(f)
# #             )
# #         instance.save()