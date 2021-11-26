export interface Pet {
    id: string;
    type: string;
    gender: string;
    name: string;
    age: string;
    color: string;
    history: string;
    profilePicture: string;
    gallery: string[];
    qualities: string[];
    specialNeeds: string;
    isSterilized: boolean;
    isDewormed: boolean;
    hasVirals: boolean;
    isHighlighted: boolean;
    hasDisability: boolean;
    inFoundationSince: Date;
    adoptedIn?: Date;
    location: string;
}