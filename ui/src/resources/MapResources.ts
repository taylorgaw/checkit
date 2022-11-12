
export interface Spot {
    id: string;
    name: string;
    lat: number;
    lon: number;
    recommendations: string;
    visited: boolean;
    location?: string;
    tags?: string[];
    icon?: string;
    color?: string;
};

export interface MapLayer {
    id: string;
    name: string;
    spots: Spot[];
};

export interface UserMap {
    id: string;
    name: string;
    location: string;
    description: string;
    lat: number;
    lon: number;
    zoom: number;
    layers: MapLayer[];
    legend?: Legend[];
};

interface Legend {
    name: string;
    description: string;
    icon?: string;
};