import { Router } from 'express';
import { competitionControllerFactory } from '../../../../main/factories/competitionFactory.ts';

const competitionRoutes = Router();
const competitionController = competitionControllerFactory();

competitionRoutes.post(
  '/',
  (req, res, next) => competitionController.create(req, res, next)
);

export { competitionRoutes };