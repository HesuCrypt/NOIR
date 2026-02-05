export interface TeamMember {
  name: string;
  role: string;
  description: string;
  expertise?: string[];
  imagePlaceholder?: string;
  portfolioUrl?: string;
}

export interface Project {
  name: string;
  description: string;
  scope: string[];
  note?: string;
  url?: string;
}

export interface Service {
  title: string;
  description?: string;
}

export interface Value {
  title: string;
  description?: string;
}