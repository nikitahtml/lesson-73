import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/:message', (req: Request, res: Response) => {
    const { message } = req.params;
    res.send(message);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
