import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
// import ArticleStore, {Article} from './models/article';

// let article = new ArticleStore();

const app: express.Application = express();
const port: number = 3000;

app.use(bodyParser.json());

// const article1 = async () => {
//     try {
//         const article1: Article = await article.create({title: 'The rise of P.K the First', context: 'I AM THE GREATEST OF MY BLOODLINE!!'});

//         const result = await article.index();

//         return result[0];
//     } catch (error) {
//         console.log(error);
//     }
// }

app.get('/', async (req: Request, res: Response) => {
    res.send('This is the homepage');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})