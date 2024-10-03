export function formatCurrency(amount) {
  // Ensure amount is a string to safely use .replace
  const amountAsString = typeof amount === 'string' ? amount : amount.toString();
  const numericAmount = parseFloat(amountAsString.replace('₱ ', '').replace(/,/g, ''));
  return `₱ ${new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericAmount)}`;
}


// export function formatCurrency(amount) {
//     const numericAmount = parseFloat(amount.replace('₱ ', '').replace(/,/g, ''));
//     return `₱ ${new Intl.NumberFormat('en-US', {
//       style: 'decimal',
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     }).format(numericAmount)}`;
//   }
  