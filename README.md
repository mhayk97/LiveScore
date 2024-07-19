# Live Score Application

This project is a Live Score application built with React, Next.js, and styled-components. The application fetches match data, displays a list of matches, and provides filtering functionality to view different match statuses (All, Result, Live, Upcoming, Canceled).

## Features

- Fetch match data from an API
- Display a list of matches with details
- Filter matches by status (All, Result, Live, Upcoming, Canceled)
- Navigate to match details page on clicking a match card

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **Next.js**: React framework for server-side rendering and generating static websites
- **Styled-components**: Library for styling React components using tagged template literals
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript

## Notes

- There is no calls to real API (All data is mocked , therefore there is no pagination functionality and etc)

## Installation

1. Clone the repository:

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The application should now be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`/components`**: Contains reusable React components
- **`/hooks`**: Contains custom React hooks
- **`/styles`**: Contains styled-components theme and global styles
- **`/pages`**: Contains Next.js pages
- **`/mock`**: Contains mock data and mock fetcher function
- **`/types`**: Contains TypeScript types and interfaces
- **`/constants`**: Contains application constants

## Custom Hooks

- **`useListFilter`**: Manages filter state and filtering logic for matches.

## API Integration

- **`fetchMatches`**: Simulates fetching match data from an API using a mock fetcher function.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```
