// myapp/static/myapp/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('my-button');
    
    button.addEventListener('click', function() {
        alert('Button clicked!');
        
        // Example AJAX call to Django view
        fetch('/api/data/')
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});