# Race Tracker App

## Stack

- **NX monorepo**
- **TypeScript**
- **Tracking**: JIRA

### Backend (BE)

- **Express**
- **Validator**: Zod

#### Database (DB)

- **PostgreSQL**
  - **Prisma**

### Frontend (FE)

- **React**
  - For styling, a combination of **MUI** and **Tailwind** is suggested.
  - **State Management**: Redux is recommended for its versatility, even if the project isn't heavily reliant on state. Using Redux Toolkit (RTK) can simplify handling queries, authentication, and potential future features like infinite scroll. TypeScript should be used extensively, with type definitions (.d.ts files) to ensure consistency and ease collaboration, especially with new team members. Keeping types organized also facilitates synchronization between frontend and backend object structures for API requests. Git version control is advised, and setting up Continuous Integration/Continuous Deployment (CI/CD) with a free plan cloud provider such as CloudFlare or GitHub Pages would establish a development environment and a publicly accessible site. Integrating a domain and configuring security through Cloudflare to restrict access to authorized GitHub accounts during development is also recommended.

### Android

- **React Native**

### iOS

- **Swift**

## Project Overview

The Race Tracker App consists of three main components:

1. **Backend**: Handles the business logic and data management, including user authentication, race creation, and checkpoint generation.
2. **Admin (Web)**: Allows administrators to create races, generate checkpoints, and monitor race progress in real-time via a web interface.
3. **Mobile App (Android & iOS)**: Provides functionality for participants to scan QR codes at checkpoints during races, updating their location and progress in real-time.

## Features

- **Race Management**: Administrators can create and manage races, generating checkpoints visible on a map.
- **Real-time Tracking**: Participants can scan QR codes at checkpoints using the mobile app, updating their location and progress in real-time.
- **Public Race Tracking**: A public web interface allows spectators to track race progress in real-time.
- **QR Code Generation**: Each checkpoint is assigned a unique QR code for participants to scan.
- **Secure Authentication**: User authentication ensures only authorized individuals can create races or participate.
- **Cross-Platform Compatibility**: The app is designed to work seamlessly on both Android and iOS devices.
- **Comprehensive Backend**: Utilizes Express.js with Prisma ORM for efficient database management and Express-validator for input validation.
- **Modern Frontend**: Implements React with Redux for state management, offering a responsive and intuitive user experience.
- **Scalability**: Built as a monorepo using NX, enabling scalability and maintainability as the project grows.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Floriian/racetracker.git
   ```

2. Install dependencies:

   ```bash
   cd race-tracker-app
   npm install
   ```

## Usage

- **Backend**: Run the backend server using `npm run start:api`.
- **Frontend**: Start the frontend development server with `npm run start:app`.
- **Mobile App**: For Android, use `react-native run-android`, and for iOS, use `react-native run-ios`.
- **Web Admin Interface**: Access the admin interface through a web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to suggest improvements or report bugs.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

### Hungarian version

# Versenykövető Alkalmazás

## Technológiai Alapok

- **NX monorepo**
- **TypeScript**
- **Követés**: JIRA

### Backend (BE)

- **Express**
- **Érvényesítő**: Zod

#### Adatbázis (DB)

- **PostgreSQL**
  - **Prisma**

### Frontend (FE)

- **React**
  - Stílusozáshoz ajánlott a **MUI** és **Tailwind** kombinációja.
  - **Állapotkezelés**: A Reduxot javasoljuk a sokoldalúsága miatt, még akkor is, ha a projekt nem nagyon támaszkodik az állapotra. A Redux Toolkit (RTK) használata egyszerűsítheti a lekérdezéseket, az azonosítást és a jövőbeli funkciókat, például a végtelen görgetést. A TypeScript-et nagyban ajánljuk, típusdefiníciók (.d.ts fájlok) segítségével, hogy biztosítsuk a konzisztenciát és megkönnyítsük a közös munkát, különösen az új csapattagokkal. A típusok rendezett tárolása továbbá segíti a frontend és a backend objektumstruktúrák szinkronizációját az API kérések során. A Git verziókezelést ajánlott használni, és folyamatos integrációt/folyamatos szállítást (CI/CD) beállítani egy ingyenes tervezetű felhőszolgáltatónál, mint például a CloudFlare vagy a GitHub Pages, ami lehetővé teszi egy fejlesztési környezet és egy nyilvánosan elérhető weboldal létrehozását. Egy domain integrálása és a biztonság beállítása a Cloudflare segítségével, hogy csak az engedélyezett GitHub-fiókokkal legyen hozzáférhető az oldal fejlesztés közben, szintén ajánlott.

### Android

- **React Native**

### iOS

- **Swift**

## Projekt Áttekintés

A Versenykövető Alkalmazás három fő összetevőből áll:

1. **Backend**: Kezeli a vállalkozás logikáját és az adatkezelést, beleértve a felhasználói hitelesítést, versenyek létrehozását és ellenőrzőpontok generálását.
2. **Adminisztráció (Web)**: Lehetővé teszi az adminisztrátoroknak, hogy versenyeket hozzanak létre, ellenőrzőpontokat generáljanak, és valós időben kövessék a verseny előrehaladását egy webes felületen keresztül.
3. **Mobilalkalmazás (Android & iOS)**: Funkciókat biztosít a résztvevőknek, hogy QR-kódokat olvassanak be ellenőrzőpontoknál a versenyek során, valós időben frissítve a helyüket és előrehaladásukat.

## Funkciók

- **Versenykezelés**: Az adminisztrátorok létrehozhatnak és kezelhetnek versenyeket, térképen látható ellenőrzőpontokkal.
- **Valós idejű követés**: A résztvevők beolvashatják a QR-kódokat az ellenőrzőpontoknál a mobilalkalmazás segítségével, valós időben frissítve a helyüket és előrehaladásukat.
- **Nyilvános Versenykövetés**: Egy nyilvános webes felület lehetővé teszi a nézők számára, hogy valós időben kövessék a verseny előrehaladását.
- **QR-kód generálása**: Minden ellenőrzőpontot egyedi QR-kódhoz rendelnek a résztvevők beolvasására.
- **Biztonságos Hitelesítés**: A felhasználói hitelesítés biztosítja, hogy csak az engedélyezett személyek hozzáférhessenek a versenyek létrehozásához vagy részvételéhez.
- **Platformfüggetlenség**: Az alkalmazás tervezése úgy történik, hogy tökéletesen működjön mind az Android, mind az iOS eszközökön.
- **Átfogó Backend**: Az Express.js-t használja a Prisma ORM hatékony adatbáziskezeléséhez és az Express-validator-t a bemenetek érvényesítéséhez.
- **Modern Frontend**: A React-et implementálja a Redux állapotkezeléssel, ami egy responszív és intuitív felhasználói élményt nyújt.
- **Skálázhatóság**: Az NX segítségével készült monorepo lehetővé teszi a projekt skálázhatóságát és karbantarthatóságát, ahogy növekszik a projekt.

## Telepítés

1. Klónozza a repository-t:

   ```bash
   git clone https://github.com/Floriian/racetracker.git
   ```

2. Telepítse a függőségeket:

   ```bash
   cd race-tracker-app
   npm install
   ```

## Használat

- **Backend**: Indítsa el a backend szervert a `npm run start:api` paranccsal.
- **Frontend**: Indítsa el a frontend fejlesztői szerverét a `npm run start:app` paranccsal.
- **Mobilalkalmazás**: Android esetén használja a `react-native run-android` parancsot, iOS esetén pedig a `react-native run-ios` parancsot.
- **Webes Admin Felület**: A webes admin felületet egy webböngészőn keresztül érheti
