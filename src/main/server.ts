import express from 'express';
import Middleware from 'i18next-http-middleware';
import i18next from '../config/i18n.js';
import { competitionRoutes } from '../infrastructure/web/express/routes/competition.routes.js';
import { errorHandler } from '../infrastructure/web/middleware/errorHandler.js';

const app = express();
app.use(express.json());

app.use(Middleware.handle(i18next));

app.use('/competitions', competitionRoutes);

app.use(errorHandler);

app.listen(3333, () => console.log('Server is running on port 3333'));