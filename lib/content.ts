export const LOREM_SHORT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
export const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
export const LOREM_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export type Scene =
  | "gathering"
  | "walk"
  | "celebration"
  | "workshop"
  | "portrait"
  | "community"
  | "story";

export type Tone = "coral" | "lavender" | "pink" | "blush" | "plum";

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/gallery", label: "Gallery" },
];

export type PhiliaEvent = {
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  place: string;
  scene: Scene;
  tone: Tone;
};

export const UPCOMING_EVENTS: PhiliaEvent[] = [
  {
    title: "Monthly Gathering",
    date: "Saturday, October 24",
    day: "24",
    month: "Oct",
    time: "6:00 PM",
    place: "Lorem ipsum venue",
    scene: "gathering",
    tone: "coral",
  },
  {
    title: "Walking and Running Club",
    date: "Saturday, November 7",
    day: "07",
    month: "Nov",
    time: "8:30 AM",
    place: "Lorem ipsum park",
    scene: "walk",
    tone: "lavender",
  },
  {
    title: "Holiday Tea",
    date: "Sunday, December 13",
    day: "13",
    month: "Dec",
    time: "2:00 PM",
    place: "Lorem ipsum venue",
    scene: "celebration",
    tone: "pink",
  },
];

export const MORE_EVENTS: PhiliaEvent[] = [
  {
    title: "Story Circle",
    date: "Thursday, November 19",
    day: "19",
    month: "Nov",
    time: "7:00 PM",
    place: "Lorem ipsum venue",
    scene: "story",
    tone: "plum",
  },
  {
    title: "Monthly Gathering",
    date: "Saturday, November 21",
    day: "21",
    month: "Nov",
    time: "6:00 PM",
    place: "Lorem ipsum venue",
    scene: "gathering",
    tone: "blush",
  },
  {
    title: "Walking and Running Club",
    date: "Saturday, December 5",
    day: "05",
    month: "Dec",
    time: "8:30 AM",
    place: "Lorem ipsum park",
    scene: "walk",
    tone: "coral",
  },
];

export const PROGRAMS = [
  {
    title: "Monthly Gatherings",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    scene: "gathering" as Scene,
    tone: "coral" as Tone,
    label: "Dinner gathering photograph",
  },
  {
    title: "Walking and Running Club",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    scene: "walk" as Scene,
    tone: "lavender" as Tone,
    label: "Walk or 5K photograph",
  },
  {
    title: "Story-Centered Engagement",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    scene: "story" as Scene,
    tone: "pink" as Tone,
    label: "Storytelling circle photograph",
  },
];

export const COMING_PROGRAMS = [
  { title: "Workshops", text: LOREM_SHORT },
  { title: "Interest-Based Clubs", text: LOREM_SHORT },
  { title: "Mentorship", text: LOREM_SHORT },
];

export const VALUES = [
  { icon: "heart", title: "Relational", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "globe", title: "Culturally Responsive", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "door", title: "Accessible and Consistent", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: "seedling", title: "Sustainable", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
] as const;

export const TEAM = [
  { name: "Lorem Ipsum", role: "Founder and Executive Director", tone: "coral" as Tone },
  { name: "Dolor Sitamet", role: "Board Chair", tone: "lavender" as Tone },
  { name: "Consectetur Elit", role: "Programs Lead", tone: "pink" as Tone },
  { name: "Adipiscing Sed", role: "Community Lead", tone: "blush" as Tone },
];

export const BOARD = [
  { name: "Dolor Sitamet", role: "Chair", tone: "lavender" as Tone },
  { name: "Tempor Incidid", role: "Vice Chair", tone: "coral" as Tone },
  { name: "Magna Aliqua", role: "Treasurer", tone: "pink" as Tone },
  { name: "Veniam Nostrud", role: "Secretary", tone: "blush" as Tone },
  { name: "Ullamco Laboris", role: "Member", tone: "plum" as Tone },
  { name: "Commodo Consequat", role: "Member", tone: "lavender" as Tone },
];

export const PARTNERS = [
  "Echo Collective",
  "Release Inc.",
  "Femi’s Heart Foundation",
  "Little Stars Foundation",
  "Omaha Welcomes the Stranger",
  "Heartland Kids Against Hunger",
];

export const COUNTRIES: { name: string; lat: number; lon: number }[] = [
  { name: "Botswana", lat: -22.3, lon: 24.7 },
  { name: "Burkina Faso", lat: 12.2, lon: -1.6 },
  { name: "El Salvador", lat: 13.8, lon: -88.9 },
  { name: "Kenya", lat: 0.2, lon: 37.9 },
  { name: "Liberia", lat: 6.4, lon: -9.4 },
  { name: "Malawi", lat: -13.3, lon: 34.3 },
  { name: "Mexico", lat: 23.6, lon: -102.5 },
  { name: "Namibia", lat: -22.6, lon: 17.1 },
  { name: "Panama", lat: 8.5, lon: -80.8 },
  { name: "Poland", lat: 51.9, lon: 19.1 },
  { name: "South Africa", lat: -30.6, lon: 22.9 },
  { name: "Zambia", lat: -13.1, lon: 27.8 },
  { name: "Zimbabwe", lat: -19.0, lon: 29.2 },
];

export const V2_COUNTRIES: { name: string; lat: number; lon: number }[] = [
  ...COUNTRIES,
  { name: "Austria", lat: 47.5, lon: 14.6 },
  { name: "Germany", lat: 51.2, lon: 10.4 },
  { name: "Greece", lat: 39.1, lon: 21.8 },
  { name: "Hungary", lat: 47.2, lon: 19.5 },
  { name: "Israel", lat: 31.0, lon: 34.9 },
  { name: "Japan", lat: 36.2, lon: 138.3 },
  { name: "South Korea", lat: 36.5, lon: 127.9 },
].sort((a, b) => a.name.localeCompare(b.name));

export const ORIGIN = { name: "Omaha", lat: 41.26, lon: -95.93 };

export const STORIES = [
  { name: "Lorem I.", theme: "Belonging", quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.", tone: "coral" as Tone },
  { name: "Dolor S.", theme: "Friendship", quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.", tone: "lavender" as Tone },
  { name: "Amet C.", theme: "Being seen", quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", tone: "pink" as Tone },
];

export type GalleryCategory = "Dinners" | "Workshops" | "Walks" | "Community events";

export const GALLERY: { label: string; category: GalleryCategory; scene: Scene; tone: Tone; shape: "wide" | "tall" | "square" }[] = [
  { label: "Dinner gathering", category: "Dinners", scene: "gathering", tone: "coral", shape: "wide" },
  { label: "Paint night", category: "Workshops", scene: "workshop", tone: "lavender", shape: "tall" },
  { label: "Walking club", category: "Walks", scene: "walk", tone: "pink", shape: "square" },
  { label: "Holiday tea", category: "Community events", scene: "celebration", tone: "blush", shape: "square" },
  { label: "Brunch", category: "Dinners", scene: "gathering", tone: "lavender", shape: "tall" },
  { label: "5K morning", category: "Walks", scene: "walk", tone: "coral", shape: "wide" },
  { label: "Picnic", category: "Community events", scene: "community", tone: "pink", shape: "square" },
  { label: "Story circle", category: "Workshops", scene: "story", tone: "plum", shape: "square" },
  { label: "Galentines", category: "Community events", scene: "celebration", tone: "pink", shape: "wide" },
  { label: "Women’s conference", category: "Workshops", scene: "workshop", tone: "coral", shape: "square" },
  { label: "Graduation celebration", category: "Community events", scene: "celebration", tone: "lavender", shape: "tall" },
  { label: "Shared table", category: "Dinners", scene: "gathering", tone: "blush", shape: "square" },
];
