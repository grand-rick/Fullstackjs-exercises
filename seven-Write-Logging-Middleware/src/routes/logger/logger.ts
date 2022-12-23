import {Request, Response, NextFunction} from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
    if (req.path === '/' || req.path === '/birds') {
        console.log(`${req.ip} - ${req.protocol} - ${req.hostname} - ${req.method} ${req.path} was visited`);
    }
    next();
}

export default logger;