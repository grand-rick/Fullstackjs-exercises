import express, {Request, Response} from 'express';
import ArticleStore, {Article} from '../models/article';

const store = new ArticleStore();

const index = async (_req: Request, res: Response) => {
    try {
        const articles = await store.index();
        res.json(articles);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
};

const show = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const article = await store.show(id);
        res.json(article);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
};

const create = async (req: Request, res: Response) => {
      try {
        const article: Article = await store.create({title: req.body.title, content: req.body.content});
         res.json(article);
      } catch (err) {
         res.status(400);
         res.json(err);
      }
};

const update = async (req: Request, res: Response) => {
    try {
        const article: Article = await store.update({id: req.params.id, title: req.body.title, content: req.body.content});
        res.json(article);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const remove = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const article: Article = await store.delete(id);
        res.json(article);
    } catch (err) {
       res.status(400);
       res.json(err);
    }
};


const articles_routes = (app: express.Application) => {
    app.get('/article', index);
    app.get('/article/:id', show);
    app.post('/article', create);
    app.put('/article:id', update);
    app.delete('/articles/:id', remove);
};

export default articles_routes;