import cors from 'cors';

const corsOptions = {
    origin: 'http://127.0.0.1:5000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

export default cors(corsOptions)