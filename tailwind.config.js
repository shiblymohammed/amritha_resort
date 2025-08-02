/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Core Heritage Neutrals (for backgrounds and subtle elements) ---
        'heritage-bg-primary': '#FBF9F6', // A very light, clean cream - excellent for main body background
        'heritage-bg-secondary': '#F5F0E6', // A slightly warmer, gentle off-white/light beige for alternating sections
        'heritage-bg-tertiary': '#EDE8DA', // A deeper, elegant beige for distinct sections or cards
        'heritage-bg-accent': '#DCD7C9', // A light, warm grey-beige for subtle contrast or footers

        // --- Text Colors ---
        'text-primary-title': '#3A4A3E', // Deep, sophisticated green/charcoal for main titles (e.g., 'kerala-forest' inspired)
        'text-secondary-title': '#607C6E', // Muted, earthy green for secondary titles and subheadings
        'text-description': '#5D5C50',
        'text-description-2': '#313f35',// Medium dark, slightly warm grey for main descriptions/body text // Medium dark, slightly warm grey for main descriptions/body text
        'text-description-3': '#435547', // Medium dark, slightly warm grey for main descriptions/body text // Medium dark, slightly warm grey for main descriptions/body text
        
        'text-more-description': '#7C7B6F', // Lighter, soft grey for secondary descriptions, captions, or less emphasis text

        // --- Border Colors ---
        'border-soft': '#D9D3C1', // A light, subtle border color for separation
        'border-accent': '#A09782', // A more pronounced border for interactive elements or highlights

        // --- Button Colors ---
        // Primary Button
        'button-primary-bg': '#7A6B5C', // Warm, muted sepia brown for primary action buttons (Muziris-inspired sepia)
        'button-primary-text': '#FBF9F6', // Text color for primary button
        'button-primary-hover-bg': '#5C4E42', // Darker sepia for hover state
        'button-primary-hover-text': '#FBF9F6',// Text color for primary button hover

        // Secondary Button (e.g., outline or lighter action)
        'button-secondary-bg': 'transparent', // Transparent background for outline button
        'button-secondary-border': '#7A6B5C', // Border color matching primary background
        'button-secondary-text': '#7A6B5C', // Text color matching primary background
        'button-secondary-hover-bg': '#F5F0E6',// Light background on hover
        'button-secondary-hover-border': '#5C4E42', // Darker border on hover
        'button-secondary-hover-text': '#5C4E42', // Darker text on hover

        // Accent Button (for specific highlights)
        'button-accent-bg': '#B07B5F', // A richer, warm terracotta/clay color
        'button-accent-text': '#FBF9F6', // Text color for accent button
        'button-accent-hover-bg': '#9C6A50',// Darker terracotta for hover state
        'button-accent-hover-text': '#FBF9F6', // Text color for accent button hover
      },
    },
  },
  plugins: [],
}




