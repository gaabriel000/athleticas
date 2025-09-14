import { v4 as uuidv4 } from 'uuid';

export enum CompetitionStatus {
    PLANNED = "PLANNED",
    ONGOING = "ONGOING",
    FINISHED = "FINISHED",
}

export interface CompetitionProps {
    id?: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: CompetitionStatus;
}

export class Competition {
    private readonly props: CompetitionProps;

    private constructor(props: CompetitionProps) {
        this.props = {
            ...props,
            id: props.id ?? uuidv4(),
        };
    }

    public static create(props: Omit<CompetitionProps, "id" | "status">): Competition {
        const competition = new Competition({
            ...props,
            status: CompetitionStatus.PLANNED,
        });

        return competition;
    }

    public get id(): string {
        return this.props.id!;
    }

    public get name(): string {
        return this.props.name;
    }

    public get description(): string {
        return this.props.description;
    }

    public get startDate(): Date {
        return this.props.startDate;
    }

    public get endDate(): Date {
        return this.props.endDate;
    }

    public get status(): CompetitionStatus {
        return this.props.status;
    }

    public startCompetition(): void {
        this.props.status = CompetitionStatus.ONGOING;
    }

    public finishCompetition(): void {
        this.props.status = CompetitionStatus.FINISHED;
    }

    public updateDetails(details: {
        name?: string;
        description?: string;
        location?: string;
    }): void {
        this.props.name = details.name ?? this.props.name;
        this.props.description = details.description ?? this.props.description;
    }
}
