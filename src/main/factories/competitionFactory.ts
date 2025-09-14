import { CompetitionRepositoryMemory } from '../../infrastructure/repositories/CompetitionRepositoryMemory.js';
import { CreateCompetitionUseCase } from '../../application/use_cases/CreateCompetition.js';
import { CompetitionController } from '../../infrastructure/web/express/controllers/CompetitionController.js';

export const competitionControllerFactory = (): CompetitionController => {
  const competitionRepository = new CompetitionRepositoryMemory();
  const createCompetitionUseCase = new CreateCompetitionUseCase(competitionRepository);
  const competitionController = new CompetitionController(createCompetitionUseCase);

  return competitionController;
};