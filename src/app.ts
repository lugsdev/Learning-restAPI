import 'dotenv/config';
import e from 'express';
import { router } from './routes';
import { connect } from './utils';
connect();

const port = process.env.PORT || 3000;

const app = e();

app.use(e.json());
app.use(router);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
