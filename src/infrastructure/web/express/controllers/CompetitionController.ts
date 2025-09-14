import type { Request, Response, NextFunction } from 'express';
import type { CreateCompetitionUseCase } from '../../../../application/use_cases/CreateCompetition.js';

export class CompetitionController {
  constructor(private readonly createCompetitionUseCase: CreateCompetitionUseCase) {}

  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { name, description, startDate, endDate } = req.body;

      const competition = await this.createCompetitionUseCase.execute({
        name,
        description,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
      });

      const message = req.t('competition.created_success');
      return res.status(201).json({ message, competitionId: competition.id });
    } catch (error) {
      next(error);
    }
  }
}