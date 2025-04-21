<a id="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#oríginis">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#project-preview">Project Preview</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#git-workflow-overview">Git Workflow Overview</a>
      <ul>
        <li>
          <a href="#main-branches">Main Branches</a>
        </li>
        <li>
          <a href="#branch-naming-conventions">Branch Naming Conventions</a>
        </li>
        <li><a href="#workflow">Workflow</a></li>
        <li><a href="#hotfix-on-production">Hotfix on Production</a></li>
        <li> <a href="#clean-up-local-branches-already-merged">Clean up local branches already merged</a> </li>
        <li> <a href="#git-workflow-diagram">Git Workflow Diagram</a></li>
      </ul>
    </li>
    <li> <a href="#deployment">Deployment</a> </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Oríginis

Oríginis is an interactive platform that lets you discover diverse cultures and learn local or ancient dialects through immersive experiences. Whether you're exploring the roots of a forgotten language or diving into regional traditions, Originis bridges the gap between modern learners and cultural heritage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Our app was built using Next.js, TypeScript, and Tailwind CSS, deployed with Vercel, and powered by Firebase for backend services.

* [![Next][Next.js]][Next-url]
* [![Firebase][Firebase.com]][Firebase-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
* [![Vercel][Vercel.com]][Vercel-url]
* ![Javascript]
* ![Typescript]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Preview
![home-page]
![dashboard-page]
![culture-page]
![lessons-page]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites
```bash
npm install npm@latest -g
```
### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/pablo_mds/originis.git
   ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Create `.env.local` inside root folder
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
4. Run Development Server
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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

### Hotfix on Production

* In case of a production issue, a hotfix branch is created from production, tested, and merged back into both production and master.

### Clean up local branches already merged 
This command deletes local branches that have already been merged into production, helping keep your workspace clean and up-to-date. It excludes main branches like production, master, and the currently active branch.

```sh 
git fetch -p && git branch --merged origin/production | grep -vE '^\*|production|master|main' | xargs -r git branch -d
```

### Git Workflow Diagram
![gitworkflowdiagram](https://i.postimg.cc/hG29JfxP/gitworkflow.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Deployment

Our application is currently deployed on Vercel, we have two environnements [Staging](https://originis-self-staging.vercel.app/) and [Production](https://originis-self.vercel.app/).

Staging is used as a pre-production branch. The goal is to ensure that new features don’t break anything when deployed, helping us keep the Production branch clean and stable.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Pablo Morais de Souza - moraisdesouzapablo@gmail.com - [LinkedIn](https://www.linkedin.com/in/pablomoraisdesouza/)

Justin Maltese - justinmaltese07@gmail.com - [LinkedIn](https://www.linkedin.com/in/justin-maltese-867605174/)

Project Link: [https://github.com/pablo_mds/originis](https://github.com/pablo_mds/originis)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[home-page]: ./screenshots/home-page.png
[dashboard-page]: ./screenshots/dashboard-page.png
[culture-page]: ./screenshots/culture-page.png
[lessons-page]: ./screenshots/lessons-page.png
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Firebase.com]: https://img.shields.io/badge/Firebase-039BE5?logo=Firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
[Vercel.com]: https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
[TailwindCSS]:https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[JavaScript]:https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000
[TypeScript]:https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff