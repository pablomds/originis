# Oríginis

Oríginis is an interactive platform that lets you discover diverse cultures and learn local or ancient dialects through immersive experiences. Whether you're exploring the roots of a forgotten language or diving into regional traditions, Originis bridges the gap between modern learners and cultural heritage.

Features
* User Authentication: Secure sign-up and login processes to ensure user data protection.
* Multilingual Support : Supports internationalization (i18n) for seamless integration of multiple languages and dialects.
*  NLP-Powered Language Tools : Utilizes Natural Language Processing to provide smart translations, dialect detection, and context-aware suggestions.

## Project Preview
![homepage](./screenshots/home-page.png)
![dashboardpage](./screenshots/dashboard-page.png)
![culturepage](./screenshots/culture-page.png)
![lessonspage](./screenshots/lessons-page.png)

## Getting Started

### Step 1 : Create `.env.local` inside root folder
This .env file must have all thoses keys : 
```bash
NEXT_PUBLIC_URL=http://localhost:3000 
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY={"value":"-----BEGIN PRIVATE KEY-----\\n-----END PRIVATE KEY-----\n"}
```

### Step 2 : Install All Packages
Run one of thoses commands : 
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Step 3 : Run Development Server
Run one of thoses commands :

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Git Workflow Overview
### Main Branches:

* master (your staging branch, where all features go first)

* production (stable, live-ready code only)

### Branch Naming Conventions:

Branches are created from master using clear prefixes to indicate their purpose:

* `feature/xyz` – For new features

* `fix/xyz` – For bug fixes

* `chore/xyz` – For routine tasks like dependencies, cleanup, etc.

* `refactor/xyz` – For code refactoring without changing functionality

* `hotfix/xyz` – For urgent patches directly on production

* `docs/xyz` – For updates or additions to documentation

* `test/xyz` – For adding or updating test coverage

### Workflow:

#### Developer creates a feature branch from master.

    1) Work is done on the feature branch.

    2) A Pull Request (PR) is opened to merge into master.

    3) Vercel auto-deploys the branch and runs tests.

    4) If deployment fails, the developer is notified.

    5) After code review and successful deployment, the branch is merged into master.

    6) Once verified and stable, changes from master are merged into production.

### Situational : Hotfix :

* In case of a production issue, a hotfix branch is created from production, tested, and merged back into both production and master.

### Git Workflow Diagram
![gitworkflowdiagram](https://i.postimg.cc/hG29JfxP/gitworkflow.png)

## Deployement

Our application is currently deployed on Vercel, we have two environnements [Staging](https://originis-self-staging.vercel.app/) and [Production](https://originis-self.vercel.app/).

Staging is used as a pre-production branch. The goal is to ensure that new features don’t break anything when deployed, helping us keep the Production branch clean and stable.

## Learn More

Currently nothing to learn more about


