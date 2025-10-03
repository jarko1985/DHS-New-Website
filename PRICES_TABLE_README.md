# Prices Table Implementation

## Overview
This implementation creates a cryptocurrency prices table component that matches the design from the provided image. The component displays real-time cryptocurrency data with search, filtering, and pagination functionality.

## Files Created

### 1. API Route
- `src/app/api/prices_table/route.ts` - Fetches cryptocurrency data from CoinGecko API

### 2. UI Components
- `src/components/ui/select.tsx` - Custom select dropdown component
- `src/components/ui/skeleton.tsx` - Loading skeleton component
- `src/components/shared/PricesTable.tsx` - Main prices table component

### 3. Pages
- `src/app/[locale]/prices/page.tsx` - Prices page that renders the table

### 4. Translations
- Updated `messages/en.json` and `messages/ar.json` with prices table translations

## Features

### Design Implementation
- **Dark Theme**: Uses the specified color scheme with CSS variables
- **Exact Layout**: Matches the design from the image including:
  - Header with title and search/filter controls
  - Table with cryptocurrency data
  - Pagination controls
  - Hover effects and transitions

### Functionality
- **Real-time Data**: Fetches live cryptocurrency data from CoinGecko API
- **Search**: Filter cryptocurrencies by name, symbol, or any field
- **Sorting**: Click column headers to sort by different metrics
- **Pagination**: Navigate through pages of results (10 items per page)
- **Time Filter**: Dropdown to filter by time periods (All Time, 1 Hour, 24 Hours, 7 Days, 30 Days)
- **Favorites**: Star icons to mark favorite cryptocurrencies
- **Responsive**: Works on different screen sizes
- **Internationalization**: Supports English and Arabic languages
- **Loading States**: Shows skeleton loading while fetching data

### Color Scheme
The implementation uses the specified CSS variables:
- `--color-blue-whale: #0d1635` - Main background
- `--color-elf-green: #117f60` - Positive values (green)
- `--color-mercury: #e2dedc` - Text color
- `--color-blue: #0f1415` - Page background
- `--color-negative: #272c2d` - Negative values
- `--color-positive: #4b4f51` - Positive values
- `--color-warning: #6f7273` - Warning color
- `--color-ramp` - Gradient for special elements

## Setup

### Environment Variables
Create a `.env.local` file in the root directory and add:
```
NEXT_PUBLIC_COINGECKO_API_KEY=your_coingecko_api_key_here
```

Get your API key from: https://www.coingecko.com/en/api

### Usage
1. Navigate to `/prices` to view the cryptocurrency prices table
2. Use the search bar to filter cryptocurrencies
3. Use the dropdown to filter by time period
4. Click column headers to sort by different metrics
5. Use pagination controls to navigate through results
6. Click star icons to mark favorites

## API Integration
The component fetches data from the CoinGecko API with the following features:
- Caches data for 60 seconds to improve performance
- Handles API errors gracefully
- Formats large numbers (market cap, volume) with appropriate suffixes (K, M, B, T)
- Displays sparkline charts for 7-day price trends

## Responsive Design
- Mobile-friendly layout
- Horizontal scrolling for table on small screens
- Proper spacing and typography for different screen sizes
- Touch-friendly buttons and interactions
