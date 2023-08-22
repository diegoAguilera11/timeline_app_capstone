export interface Event {
  id: string;
  name: string;
  date: string;
  members: { name: string }[];
  results: { tag: string; result: string }[];
  links: { url: string; alias: string }[];
}

export const example: Event = {
  id: "default",
  name: "Example Event",
  date: "2023-08-20",
  members: [{ name: "Member 1" }, { name: "Member 2" }],
  results: [{ tag: "Tag 1", result: "Result 1" }, { tag: "Tag 2", result: "Result 2" }],
  links: [{ url: "https://example.com", alias: "Example Website" }],
};