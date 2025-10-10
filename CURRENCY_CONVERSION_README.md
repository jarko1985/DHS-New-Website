# Currency Conversion System - Usage Guide

## Overview

This application includes a comprehensive currency conversion system that allows users to toggle between USD and AED currencies across the entire application. The conversion rate is: **1 USD = 3.6725 AED**.

## Features

- 🌍 **Global Currency Toggle**: Switch between USD and AED from the header
- 💾 **Persistent Preference**: User's currency preference is saved in localStorage
- 🎨 **Seamless UI**: Currency switcher matches the design of existing header components
- ⚡ **Real-time Conversion**: All prices update instantly when currency is changed
- 🔧 **Easy Integration**: Simple hook-based API for developers

## User Interface

### Currency Switcher Location
The currency switcher is located in the header navigation between:
- **Left**: User Avatar
- **Right**: Language Switcher

### How to Use
1. Click on either "USD" or "AED" button in the header
2. All prices throughout the application will immediately update
3. Your preference is automatically saved for future visits

## Developer Guide

### 1. Basic Usage

Import the `useCurrency` hook in any component:

```tsx
import { useCurrency } from '@/context/PriceConversionContext';

function MyComponent() {
  const { formatPrice, currency, convertPrice } = useCurrency();
  
  return (
    <div>
      {/* Format and display a price */}
      <p>{formatPrice(100)}</p>
      {/* Output: $100.00 or 367.25 AED */}
    </div>
  );
}
```

### 2. Available Hook Methods

#### `formatPrice(amount: number, showSymbol?: boolean): string`
Converts and formats a USD amount to the selected currency.

```tsx
const { formatPrice } = useCurrency();

formatPrice(1000)           // "$1,000.00" or "3,672.50 AED"
formatPrice(1000, false)    // "1,000.00" or "3,672.50"
formatPrice(1000, true)     // "$1,000.00" or "3,672.50 AED" (default)
```

#### `convertPrice(amount: number): number`
Returns the converted numeric value without formatting.

```tsx
const { convertPrice } = useCurrency();

convertPrice(100)  // 100 (if USD) or 367.25 (if AED)
```

#### `currency: Currency`
Returns the current currency ("USD" or "AED").

```tsx
const { currency } = useCurrency();

if (currency === 'USD') {
  // USD-specific logic
}
```

#### `setCurrency(currency: Currency): void`
Programmatically change the currency.

```tsx
const { setCurrency } = useCurrency();

setCurrency('AED');  // Switch to AED
```

#### `conversionRate: number`
The USD to AED conversion rate (3.6725).

```tsx
const { conversionRate } = useCurrency();

console.log(conversionRate); // 3.6725
```

### 3. Implementation Examples

#### Example 1: Simple Price Display
```tsx
import { useCurrency } from '@/context/PriceConversionContext';

export function ProductCard({ priceUSD }: { priceUSD: number }) {
  const { formatPrice } = useCurrency();
  
  return (
    <div className="product-card">
      <span className="price">{formatPrice(priceUSD)}</span>
    </div>
  );
}
```

#### Example 2: Table with Prices
```tsx
import { useCurrency } from '@/context/PriceConversionContext';

export function PriceTable({ items }: { items: Array<{name: string, price: number}> }) {
  const { formatPrice, currency } = useCurrency();
  
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price ({currency})</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{formatPrice(item.price)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

#### Example 3: Custom Formatting
```tsx
import { useCurrency } from '@/context/PriceConversionContext';

export function CompactPrice({ price }: { price: number }) {
  const { convertPrice, currency } = useCurrency();
  
  const converted = convertPrice(price);
  const symbol = currency === 'USD' ? '$' : 'AED';
  
  // Custom compact formatting
  const formatted = converted >= 1000000 
    ? `${(converted / 1000000).toFixed(2)}M`
    : converted >= 1000
    ? `${(converted / 1000).toFixed(2)}K`
    : converted.toFixed(2);
  
  return (
    <span>
      {currency === 'USD' ? `${symbol}${formatted}` : `${formatted} ${symbol}`}
    </span>
  );
}
```

### 4. Pages with Currency Conversion

The following pages have been updated to use currency conversion:

- ✅ `/dashboard` - Main dashboard
- ✅ `/dashboard/prices` - Price tables and crypto cards
- ✅ `/dashboard/assets` - Asset balances and tables
- ✅ `/dashboard/trade` - Trading interface (if applicable)
- ✅ `/dashboard/activities` - Activity lists (if applicable)

### 5. Components Using Currency Conversion

Updated components:
- `AssetsTable.tsx` - Asset balance table with USD/AED prices
- `BalanceCard.tsx` - Bitcoin balance card
- `WalletProgressCard.tsx` - Portfolio Allocation with Exchange and Funding balances
- `PricesTable.tsx` - Cryptocurrency prices table
- `CryptoCards.tsx` - Cryptocurrency cards display

### 6. Currency Symbol Positioning

Following international standards:
- **USD**: Symbol before amount → `$1,234.56`
- **AED**: Symbol after amount → `1,234.56 AED`

This is automatically handled by the `formatPrice` function.

### 7. Best Practices

1. **Always store prices in USD**: Keep all prices in your database/API in USD. Convert to AED only when displaying.

2. **Use formatPrice for display**: Always use the `formatPrice` hook for consistent formatting.

3. **Don't mix conversions**: Don't convert the same value multiple times.

❌ **Wrong**:
```tsx
const converted = convertPrice(price);
const formatted = formatPrice(converted); // Don't do this!
```

✅ **Correct**:
```tsx
const formatted = formatPrice(price); // formatPrice handles conversion internally
```

4. **Handle edge cases**: Always provide fallback values for null/undefined prices.

```tsx
const { formatPrice } = useCurrency();
const price = data?.price ?? 0;
return <span>{formatPrice(price)}</span>;
```

## Technical Details

### Context Provider
The `PriceConversionProvider` is wrapped around the entire application in `client-providers.tsx`:

```tsx
<PriceConversionProvider>
  {children}
</PriceConversionProvider>
```

### LocalStorage
User preference is stored with key: `preferredCurrency`

### Conversion Rate
- **Rate**: 1 USD = 3.6725 AED
- **Source**: Defined in `PriceConversionContext.tsx`
- **Update**: To change the rate, modify `USD_TO_AED_RATE` constant

## Translations

Currency switcher supports both English and Arabic:

**English**:
- USD → "USD"
- AED → "AED"

**Arabic**:
- USD → "دولار أمريكي"
- AED → "درهم إماراتي"

## Troubleshooting

### Currency not switching
1. Check if `PriceConversionProvider` is wrapping your component
2. Ensure you're using the `useCurrency` hook, not direct state

### Prices not formatted correctly
1. Verify you're passing a number, not a string
2. Check if the value is null/undefined
3. Use browser console to log the returned value

### LocalStorage not persisting
1. Check browser privacy settings
2. Ensure localStorage is not disabled
3. Verify there are no console errors

## Future Enhancements

Potential improvements:
- Add more currencies (EUR, GBP, etc.)
- Fetch live conversion rates from API
- Add currency conversion history
- Support for custom conversion rates per user

## Support

For issues or questions:
1. Check this documentation
2. Review the implementation examples
3. Check console for errors
4. Review the context file: `src/context/PriceConversionContext.tsx`

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Maintained by**: DHS Development Team

