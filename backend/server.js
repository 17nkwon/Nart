import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
// connect accepts two parameters: address of mongoose database and the options
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/nart', {
    // gets rid of duplicated warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter)

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
