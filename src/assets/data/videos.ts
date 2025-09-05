export interface VideoData {
  title: string;
  description: string;
  videoLink: string;
  group: "Video Performances" | "Ensemble Performances";
  image?: string;
}

export const videosData: VideoData[] = [
  {
    "title": "Tennessee Whiskey (Saxophone Cover)",
    "description": "Solo tenor saxophone performance showcasing Jon's smooth tone and improvisational skills.",
    "videoLink": "https://www.youtube.com/results?search_query=jon+blanck+tennessee+whiskey+saxophone",
    "group": "Video Performances",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&h=360&fit=crop"
  },
  {
    "title": "Love Never Felt So Good (with Funkee Boy)",
    "description": "Featured saxophone performance in smooth jazz/pop context.",
    "videoLink": "https://www.youtube.com/results?search_query=funkee+boy+love+never+felt+so+good+jon+blanck",
    "group": "Video Performances",
    "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=640&h=360&fit=crop"
  },
  {
    "title": "Flashlight (with S.O.N.S. of Funk)",
    "description": "High-energy funk performance showcasing Jon's groove and versatility.",
    "videoLink": "https://www.youtube.com/results?search_query=sons+of+funk+flashlight+jon+blanck",
    "group": "Video Performances"
  },
  {
    "title": "Verve Jazz Ensemble",
    "description": "Chart-topping jazz ensemble featuring Jon as Music Director and featured soloist.",
    "videoLink": "https://www.youtube.com/results?search_query=verve+jazz+ensemble",
    "group": "Ensemble Performances",
    "image": "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=640&h=360&fit=crop"
  },
  {
    "title": "Moonlighters Big Band",
    "description": "Traditional big band performances showcasing Jon's section and solo work.",
    "videoLink": "https://www.youtube.com/results?search_query=moonlighters+big+band+jon+blanck",
    "group": "Ensemble Performances",
    "image": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&h=360&fit=crop"
  },
  {
    "title": "Jon Garcia & C.L.A.V.E.",
    "description": "Afro-Rican Jazz Quintet featuring Jon's Latin jazz expertise.",
    "videoLink": "https://www.youtube.com/results?search_query=jon+garcia+clave+afro+rican+jazz",
    "group": "Ensemble Performances"
  }
];
