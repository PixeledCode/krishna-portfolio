export interface Homepage {
  linkedIn: string;
  email: string;
  headingText: string;
  credits: string;
  _updatedAt: string;
  projectTitle: string;
  _type: string;
  projectCards: ProjectCard[];
  _id: string;
  _rev: string;
  projectText: string;
  title: string;
  _createdAt: string;
  footerText: string;
}

interface ProjectCard {
  _key: string;
  title: string;
  brand: string;
  tags: string[];
  image: Image;
}

export interface Image {
  _type: string;
  asset: Asset;
}

interface Asset {
  _type: string;
  _ref: string;
}
