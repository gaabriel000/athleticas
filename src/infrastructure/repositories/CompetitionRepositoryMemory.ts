import type { Competition } from '../../domain/entities/Competition.js';
import type { ICompetitionRepository } from '../../application/repositories/ICompetitionRepository.js';

export class CompetitionRepositoryMemory implements ICompetitionRepository {
  private competitions: Competition[] = [];

  async create(competition: Competition): Promise<void> {
    console.log('[RepositoryMemory] Saving competition:', competition.id);
    this.competitions.push(competition);
  }

  async findById(id: string): Promise<Competition | null> {
    console.log('[RepositoryMemory] Finding competition by id:', id);
    const competition = this.competitions.find((comp) => comp.id === id);
    return competition ?? null;
  }
}