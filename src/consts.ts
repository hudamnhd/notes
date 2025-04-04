import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Huda",
  EMAIL: "muhamadhuda519@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 10,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal blog and portfolio built with Astro Nano.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/hudamnhd",
  },
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/hudamnhd",
  },
  {
    NAME: "github",
    HREF: "https://github.com/hudamnhd"
  }
];
