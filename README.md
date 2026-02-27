# DCE Darbhanga Website Clone

This is a pixel-perfect clone of the Darbhanga College of Engineering website, built with **React, Vite, Tailwind CSS, Node.js, and Express**.

## Project Structure

- `client/`: Frontend application (React + Vite).
- `server/`: Backend API (Node.js + Express).

## Prerequisites

- Node.js (v18 or higher recommended)
- npm

## Setup & Running

### 1. Install Dependencies

Open a terminal in the root directory and run:

```bash
# Install Server Dependencies
cd server
npm install

# Install Client Dependencies
cd ../client
npm install
```

### 2. Run the Application

You need to run both the backend and frontend servers.

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
# Client runs on http://localhost:5173
```

## Features Implemented

- **Dynamic Navigation**: Multi-level dropdown menu driven by backend JSON data.
- **Responsive Design**: Fully responsive layout with mobile drawer menu.
- **Home Page**: Hero carousel, scrolling notice board, and news sections.
- **Generic Content System**: Any page slug can be served via the backend `pages.json` mapping.
- **Visual Fidelity**: Matches the color scheme and general layout of the original site (using placeholder assets).

## Notes

- Images are placeholders from `via.placeholder.com`.
- Not all pages have unique content; unpopulated pages fallback to a "Page Not Found" or generic template.hi
- 
