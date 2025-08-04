# Transport Route Optimizer

A modern, real-time transport route optimization system that helps find optimal routes between stations using advanced graph algorithms and real-time traffic data.

![Homepage](https://raw.githubusercontent.com/dolphine1/task2/main/assets/images/ui/homepage.png)

## Features

-  **Interactive Route Visualization** - Visual representation of routes using Leaflet maps
-  **Real-time Optimization** - Dynamic route calculation with traffic considerations
-  **Station Management** - Comprehensive station data with capacity and operating hours
-  **Multiple Route Options** - Compare different route alternatives
-  **Live Data Updates** - Real-time traffic and route information
-  **Supabase Integration** - Reliable data storage and retrieval

## Screenshots

### Route Optimization Interface
![Optimal Route Finder](https://raw.githubusercontent.com/dolphine1/task2/main/assets/images/ui/optimalRouteFinder.png)

### Route Selection Process
![Step 1 Route Selection](https://raw.githubusercontent.com/dolphine1/task2/main/assets/images/ui/step1routeSelection.png)

### Multiple Route Options
![Route Options](https://raw.githubusercontent.com/dolphine1/task2/main/assets/images/ui/routeOptions.png)

### Route Comparison
![Route Option 2](https://raw.githubusercontent.com/dolphine1/task2/main/assets/images/ui/routeOption2.png)


## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Project Structure

```
├── pages/
│   ├── index.vue                 # Homepage
│   └── routes/
│       └── optimizer.vue         # Main route optimization interface
├── components/
│   └── routes/
│       └── RouteVisualizer.client.vue  # Map visualization component
├── composables/
│   └── useRouteOptimization.ts   # Route optimization logic
├── server/api/
│   ├── routes.get.ts            # Routes API endpoint
│   └── stations.get.ts          # Stations API endpoint
├── types/
│   ├── transport.ts             # Transport-related type definitions
│   └── google-maps.d.ts         # Google Maps type declarations
└── utils/
    ├── TransportGraph.ts        # Graph algorithms for route optimization
    ├── db.ts                    # Database utilities
    └── supabase.ts              # Supabase configuration
```

## API Endpoints

- `GET /api/stations` - Retrieve all stations with coordinates and metadata
- `GET /api/routes` - Get route information and real-time updates

## Environment Setup

Create a `.env` file with your Supabase credentials:

```bash
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```
