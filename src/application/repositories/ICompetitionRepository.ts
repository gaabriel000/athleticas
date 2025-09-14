import type { Competition } from '../../domain/entities/Competition.js';

export interface ICompetitionRepository {
  create(competition: Competition): Promise<void>;
  findById(id: string): Promise<Competition | null>;
}