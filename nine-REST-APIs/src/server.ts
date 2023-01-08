import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import ArticleStore, {Article} from './models/article';

let article = new ArticleStore();

const app: express.Application = express();
const port: number = 3000;

const corsOptions = {
    origin: 'https://someotherdomain.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan('common'));


app.get('/', (req: Request, res: Response) => {
    res.send('This is the homepage');
});

app.get('/article', async (req: Request, res: Response) => {
    try {
        const article1: Article = await article.create({title: 'The rise of P.K the First', content: 'I AM THE GREATEST OF MY BLOODLINE!!'});

        const result = await article.index();
        console.log(result);
        res.send(result[0]);
    } catch (error) {
        console.log(error);
    }
});

app.get('/test-cors', cors(corsOptions), (req: Request, res: Response) => {
    res.json({msg: 'This is CORS-enabled with a middle ware'});
} )

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})