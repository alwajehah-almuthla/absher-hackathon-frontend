import ky from "ky";

export const apiClient = ky.create({
  prefixUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333"
      : "https://api.absher-hackathon.com",
  headers: {
    "Content-Type": "application/json",
  },
});
