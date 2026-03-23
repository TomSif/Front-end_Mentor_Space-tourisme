export interface ImagePngWebp {
  png: string;
  webp: string;
}

export interface ImageTech {
  portrait: string;
  landscape: string;
}

export interface Destination {
  name: string;
  images: ImagePngWebp;
  description: string;
  distance: string;
  travel: string;
}

export interface Crew {
  name: string;
  images: ImagePngWebp;
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: ImageTech;
  description: string;
}

export interface SpaceData {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}
