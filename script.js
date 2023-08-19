function getHelloMessage() {
    const language = document.getElementById('language').value;
    fetch(`http://localhost:5000/hello?language=${language}`)
        .then(response => response.text())
        .then(message => {
            document.getElementById('result').textContent = message;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'An error occurred';
        });
}
