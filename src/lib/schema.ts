export const rulesSchema = {
  devlanguage: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "C#", "Go", "Ruby", "Rust", "Kotlin", "Swift"],
  framework: {
    JavaScript: ["React", "Vue", "Next.js", "Angular", "Svelte", "Vite", "Express"],
    TypeScript: ["React", "Vue", "Next.js", "Angular", "Svelte", "NestJS", "Express"],
    Python: ["Django", "Flask", "FastAPI"],
    PHP: ["Laravel", "Symfony", "CodeIgniter"],
    Java: ["Spring", "Hibernate"],
    "C#": [".NET Core", "Blazor"],
    Go: ["Gin", "Echo"],
    Ruby: ["Ruby on Rails"],
    Rust: ["Rocket", "Actix"],
    Kotlin: ["Ktor", "Spring Boot"],
    Swift: ["Vapor"],
  },
  platform: ["Mobile", "Web", "Desktop", "Hybrid"],
  styling: ["TailwindCSS", "ShadCN", "Bootstrap", "Material-UI", "Bulma", "Chakra UI", "Foundation"],
  backendplatform: ["Firebase", "Supabase", "AWS Amplify", "Azure", "Google Cloud", "Heroku", "DigitalOcean"],
  statemanagement: {
    React: ["Redux", "Context API", "MobX", "Zustand", "Recoil"],
    "Next.js": ["Redux", "Context API", "MobX", "Zustand", "Recoil"],
    Vue: ["Vuex", "Pinia"],
    Angular: ["NgRx"],
    Svelte: ["Svelte Store"],
  },
  database: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Redis", "DynamoDB"],
  testing: ["Jest", "Mocha", "Pytest", "JUnit", "RSpec","Cypress", "Playwright", "Puppeteer", "Selenium", "Supertest", "TestCafe"],
  deployment: ["Vercel", "Netlify", "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
  ci_cd: ["GitHub Actions", "CircleCI", "Jenkins", "GitLab CI", "Travis CI"],
  logging: ["Winston", "Morgan", "Sentry", "Datadog", "ELK Stack"],
  auth: ["JWT", "OAuth 2.0", "Firebase Auth", "Auth0", "Supabase Auth"],
};

export type DevLanguage = (typeof rulesSchema.devlanguage)[number];
export type Framework = (typeof rulesSchema.framework)[keyof typeof rulesSchema.framework][number];
export type Platform = (typeof rulesSchema.platform)[number];
export type Styling = (typeof rulesSchema.styling)[number];
export type BackendPlatform = (typeof rulesSchema.backendplatform)[number];
export type StateManagement = (typeof rulesSchema.statemanagement)[keyof typeof rulesSchema.statemanagement][number];
export type Database = (typeof rulesSchema.database)[number];
export type Testing = (typeof rulesSchema.testing)[number];
export type Deployment = (typeof rulesSchema.deployment)[number];
export type CICD = (typeof rulesSchema.ci_cd)[number];
export type Logging = (typeof rulesSchema.logging)[number];
export type Auth = (typeof rulesSchema.auth)[number];

export interface CursorRoles {
  devLanguage: DevLanguage;
  framework?: Framework;
  platform: Platform;
  styling?: Styling[];
  backendPlatform?: BackendPlatform[];
  stateManagement?: StateManagement[];
  database?: Database[];
  testing?: Testing;
  deployment?: Deployment[];
  ci_cd?: CICD[];
  logging?: Logging[];
  auth?: Auth[];
  customRules?: Record<string, unknown>;
}
