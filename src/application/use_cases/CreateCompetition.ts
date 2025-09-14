import { Competition } from '../../domain/entities/Competition.js';
import type { ICompetitionRepository } from '../repositories/ICompetitionRepository.js';

export interface CreateCompetitionInputDTO {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

export class CreateCompetitionUseCase {
  constructor(private readonly competitionRepository: ICompetitionRepository) {}

  async execute(input: CreateCompetitionInputDTO): Promise<Competition> {
    const competition = Competition.create({
      name: input.name,
      description: input.description,
      startDate: input.startDate,
      endDate: input.endDate,
    });

    await this.competitionRepository.create(competition);

    return competition;
  }
}