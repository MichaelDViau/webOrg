export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Studio photography used across the homepage and About page. */
const photoFiles = {
  teamAtWork: {
    src: "/photos/team-at-work.webp",
    width: 1920,
    height: 826,
  },
  planningSession: {
    src: "/photos/planning-session.webp",
    width: 1920,
    height: 1280,
  },
  openOffice: {
    src: "/photos/open-office.webp",
    width: 1100,
    height: 1466,
  },
  meetingRoom: {
    src: "/photos/meeting-room.webp",
    width: 1920,
    height: 749,
  },
} satisfies Record<string, Omit<Photo, "alt">>;

export type PhotoKey = keyof typeof photoFiles;

/** Combines the shared image files with the alt text for one language. */
export function buildPhotos(alts: Record<PhotoKey, string>): Record<PhotoKey, Photo> {
  const entries = Object.entries(photoFiles) as [PhotoKey, Omit<Photo, "alt">][];
  return Object.fromEntries(entries.map(([key, file]) => [key, { ...file, alt: alts[key] }])) as Record<PhotoKey, Photo>;
}
