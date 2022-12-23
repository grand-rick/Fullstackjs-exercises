import express from 'express';
import router from './routes/router';

const  app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})