# Event Planner

A modern event planning web application built with **Next.js**, **Neon Auth**, **Neon Postgres**, **Prisma**, and **shadcn/ui**.

Event Planner makes it easy to create events, share invitations, and manage RSVP responses from one place.

## Preview

![Event Planner Home Page](public/home-preview.png)

## Features

- Create and manage events
- User authentication with Neon Auth
- Share unique event invitation links
- RSVP management
- Track attendee responses
- Responsive landing page and navigation
- Modern light UI built with shadcn/ui
- PostgreSQL database with Prisma ORM

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Authentication:** Neon Auth
- **Database:** Neon Postgres
- **ORM:** Prisma
- **UI:** shadcn/ui
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Project Structure

```text
event-planner/
├── app/
├── components/
├── lib/
├── prisma/
├── public/
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/inoka-madhuwanthi/event-planner.git
cd event-planner
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file and add the required Neon and database environment variables.

> Never commit `.env.local` or other files containing secrets to GitHub.

### 4. Generate Prisma Client

```bash
npx prisma generate
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Application Flow

```text
Landing Page
     │
     ├── Sign Up
     │
     └── Sign In
            │
            ▼
       Dashboard
            │
            ├── Create Event
            │
            ├── Manage Events
            │
            └── Track RSVPs
```

## Authentication

Authentication is handled using **Neon Auth**. Authenticated users can access their dashboard and manage their events.

## Database

The application uses **Neon Postgres** with **Prisma ORM** for database access and data management.

## Development

Run the development server:

```bash
npm run dev
```

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Future Improvements

- Email invitations
- Calendar integration
- Event reminders
- Real-time RSVP updates
- Event image uploads
- Advanced attendee management
- Event analytics

## License

This project is for learning and development purposes.
