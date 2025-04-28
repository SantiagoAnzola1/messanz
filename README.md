# Messanz 🚀

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![CI](https://img.shields.io/badge/build-passing-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)

A modern, real-time messaging platform for seamless group and private conversations.

---

## Description 📖

Messanz is a full-stack messaging application built with Next.js, TypeScript, and Prisma. It enables users to communicate in real time through group and private chats, with robust authentication, responsive design, and a scalable architecture. Messanz is ideal for teams, communities, or anyone needing a reliable chat solution.

---

## Preview 📸

- **Live Demo:** [Deployed on Vercel](https://your-vercel-link.vercel.app)
- **Screenshots:**  
  ![Screenshot Placeholder]()

---

## Technologies Used ⚙️

- **Next.js**: 15.2.4
- **TypeScript**
- **Tailwind CSS**
- **Prisma** (MongoDB)
- **Pusher** (Real-time messaging)
- **React**
- **ESLint & Prettier**
- **MongoDB** (Database)

---

## Prerequisites 🔧

- **Node.js**: >= 16.0.0
- **pnpm** or **bun**or **npm** or **Yarn**

### Required Environment Variables

Create a `.env` file at the project root with the following:

```env
DATABASE_URL=your-mongodb-connection-string
PUSHER_APP_ID=your-pusher-app-id
NEXT_PUBLIC_PUSHER_APP_KEY=your-pusher-public-key
PUSHER_SECRET=your-pusher-secret
NEXTAUTH_SECRET=your-nextauth-secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=cloudinary-name
GITHUB_SECRET=your-oauth-github-secret
GITHUB_ID=your-oauth-github-id
GOOGLE_CLIENT_SECRET=your-oauth-google-client-secret
GOOGLE_CLIENT_ID=your-oauth-google-client-id
```

---

## Installation and Setup 🛠️

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SantiagoAnzola1/messanz.git
   cd messanz
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   #or
   bun install
   #or
   pnpm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file at the project root.
   - Add all required variables as shown above.

4. **Run the development server:**
   ```bash
   pnpm run dev
   ```
   The app will be running at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts 📜

- `pnpm run dev` — Start the development server
- `pnpm run build` — Build the application for production
- `pnpm run start` — Start the production server
- `pnpm run lint` — Run the linter
- `pnpm run format` — Format the code using Prettier

---

## Features 🌟

- 🔒 Full authentication system (Sign Up, Sign In, Sign Out)
- 💬 Real-time group and private messaging
- 🗂️ Database operations (CRUD for users, conversations, messages)
- 🔐 Protected routes based on authentication state
- 🖼️ Optimized images using Next.js `next/image`
- ⚡ Server-side rendering (SSR) and Static Generation (SSG)
- 🔄 Incremental Static Regeneration (ISR)
- 🛠️ RESTful API endpoints under `/api`
- 📱 Responsive design with Tailwind CSS
- ♿ Accessibility best practices

---

## Project Structure 📂

```plaintext
.
├── app
│   ├── actions/                # Server-side data fetching and actions
│   │   ├── getConversationById.ts
│   │   ├── getConversations.ts
│   │   ├── getCurrentUser.ts
│   │   ├── getMessages.ts
│   │   ├── getSession.ts
│   │   └── getUsers.ts
│   ├── api/
│   │   ├── auth/               # Authentication API routes
│   │   ├── conversations/      # Conversation management API
│   │   ├── messages/           # Message management API
│   │   ├── pusher/             # Pusher authentication API
│   │   ├── register/           # User registration API
│   │   └── settings/           # User settings API
│   ├── components/             # Reusable UI components
│   │   ├── ActiveStatus.tsx
│   │   ├── Avatar.tsx
│   │   ├── AvatarGroup.tsx
│   │   ├── Button.tsx
│   │   ├── EmptyState.tsx
│   │   ├── LoadingModal.tsx
│   │   ├── Modal.tsx
│   │   ├── input/
│   │   └── sidebar/
│   ├── context/                # React context providers
│   ├── conversations/          # Conversation pages and logic
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── hooks/                  # Custom React hooks
│   ├── libs/                   # Utility libraries (Pusher, Prisma, etc.)
│   ├── types/                  # TypeScript type definitions
│   ├── users/                  # User pages and logic
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── site/
│       ├── page.tsx            # Home page
│       └── components/
├── prisma/                     # Prisma schema and migrations
├── public/                     # Static assets (images, etc.)
├── styles/                     # Additional global styles
├── .env.local.example          # Example environment variables
├── .gitignore
├── pnpm-lock.yaml
└── README.md
```

---

## Deployment 🌐

1. Push your code to GitHub.
2. Connect your repository to [Vercel](https://vercel.com).
3. Set up environment variables in the Vercel dashboard.
4. Trigger a deployment.

---

## Contributing 🤝

We welcome contributions! To get started:

1. **Fork** the repository.
2. **Create a new feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and write clear, descriptive commit messages.
4. **Push** the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**.

> **Coding Style:**
>
> - Use Prettier for code formatting (`pnpm run format`).
> - Follow ESLint rules (`pnpm run lint`).

---

## License 📄

This project is licensed under the [MIT License].
