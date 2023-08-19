const express = require('express');
const app = express();
const path = require('path');
const port = 5000;





app.use(express.static(path.join(__dirname, '')));



app.get('/hello', (req, res) => {
    const language = req.query.language;
    let message = '';

    switch (language) {
        case 'English':
            message = 'Hello world';
            break;
        case 'French':
            message = 'Bonjour le monde';
            break;
        case 'Hindi':
            message = 'Namastey sansar';
            break;
        case 'German':     
            message = 'Hallo Welt';
            break;
        case 'Spanish':
            message = 'Hola Mundo';
            break;
        case 'Italian':
            message = 'Ciao mondo';
            break;
        default:
            message = 'Language not supported';
    }

    res.send(message);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
