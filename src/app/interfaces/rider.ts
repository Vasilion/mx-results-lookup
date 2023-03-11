export interface Racer {
    name: string;
    slug: string;
    state: string;
    city: string;
}

export interface RacerProfile{
    birthdate: string;
    city: string;
    firstName: string;
    lastName: string;
    homeTown: string;
    amaNumber: string;
    slug: string;
    state: string;
    class: string;
    raceResults: RaceResult[];
}

export interface RaceResult{
    class: string;
    position: number;
    dateString: string;
}