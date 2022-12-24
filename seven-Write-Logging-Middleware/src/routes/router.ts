import express from 'express';
import logger from './logger/logger';

const router = express.Router();

router.get('/', logger, (req, res) => {
    res.send('Main server route.');
})

router.get('/birds', logger, (req, res) => {
    res.send('Birds Home Page');
});

router.get('/fish', (req, res) => {
    res.send('Fish Home Page');
})

export default router;