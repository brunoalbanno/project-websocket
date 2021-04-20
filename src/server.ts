import express from 'express';
const app = express();

app.get('/', (req, res) => {
    return res.send('Olá NWL #05!')
});

app.post('/', (req, res) => {
    return res.send('Usuário salvo com sucesso!')
});

app.listen(3333, () => {
    console.log('Server is running on port 3333.')
});