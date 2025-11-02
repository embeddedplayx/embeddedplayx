// Types for the games data
export interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  genre: string[];
  releaseDate: string;
  developer: string;
  publisher: string;
  coverImage: string;
  screenshots: string[];
  features: string[];
  systemRequirements: {
    minimum: SystemRequirements;
    recommended: SystemRequirements;
  };
}

export interface SystemRequirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

// Types for the home content
export interface HomeContent {
  hero: {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
  };
  features: {
    id: string;
    title: string;
    text: string;
  }[];
}

// Types for pricing plans
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  features: string[];
  highlight: boolean;
  color: string;
}

// Types for user data
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  memberSince: string;
  subscription: {
    plan: string;
    status: string;
    renewalDate: string;
  };
  preferences: {
    theme: string;
    notifications: boolean;
    language: string;
  };
  gameLibrary: string[];
  achievements: {
    gameId: string;
    name: string;
    unlockedDate: string;
  }[];
}