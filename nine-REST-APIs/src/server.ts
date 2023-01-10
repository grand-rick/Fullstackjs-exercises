import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import articles_routes from './handlers/articles';

const app: express.Application = express();
const port: number = 3000;

const corsOptions = {
    origin: 'https://someotherdomain.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan('common'));

articles_routes(app);

app.get('/', (req: Request, res: Response) => {
    res.send('This is the homepage');
});

app.get('/test-cors', cors(corsOptions), (req: Request, res: Response) => {
    res.json({msg: 'This is CORS-enabled with a middle ware'});
} )

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})