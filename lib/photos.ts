export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/** Studio photography used across the homepage, About and Contact pages. */
export const photos = {
  teamAtWork: {
    src: "/photos/team-at-work.webp",
    alt: "Designers and developers working side by side at a long desk in a bright office",
    width: 1920,
    height: 826,
  },
  documentReview: {
    src: "/photos/document-review.webp",
    alt: "Two colleagues reviewing a project plan together at a meeting table",
    width: 1920,
    height: 1280,
  },
  planningSession: {
    src: "/photos/planning-session.webp",
    alt: "A small team going over project documents with a client at a shared table",
    width: 1920,
    height: 1280,
  },
  openOffice: {
    src: "/photos/open-office.webp",
    alt: "People at their desks in an open-plan office with monitors and plants",
    width: 1100,
    height: 1466,
  },
  meetingRoom: {
    src: "/photos/meeting-room.webp",
    alt: "Three people in a meeting room discussing a project over laptops and printed notes",
    width: 1920,
    height: 749,
  },
} satisfies Record<string, Photo>;
