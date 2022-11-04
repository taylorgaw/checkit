
export interface Spot {
    name: string;
    location: string;
    lat: number;
    long: number;
    recommendations?: string;
    tags?: string[];
}