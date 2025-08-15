import { createSystem, defaultConfig } from '@chakra-ui/react';

export const sacredVultusTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        obsidian: {
          50: { value: '#1a1a1a' },
          100: { value: '#0f0f0f' },
          500: { value: '#0B0B0B' },
          900: { value: '#000000' }
        },
        spectral: {
          50: { value: '#ffffff' },
          100: { value: '#f9f9f9' },
          500: { value: '#F9F9F9' },
          900: { value: '#e0e0e0' }
        },
        gold: {
          50: { value: '#fef7e0' },
          100: { value: '#fde68a' },
          200: { value: '#fcd34d' },
          300: { value: '#fbbf24' },
          400: { value: '#f59e0b' },
          500: { value: '#D4AF37' },
          600: { value: '#b45309' },
          700: { value: '#92400e' },
          800: { value: '#78350f' },
          900: { value: '#451a03' }
        },
        neonGreen: {
          50: { value: '#f0fff4' },
          100: { value: '#dcfce7' },
          200: { value: '#bbf7d0' },
          300: { value: '#86efac' },
          400: { value: '#4ade80' },
          500: { value: '#00FF84' },
          600: { value: '#16a34a' },
          700: { value: '#15803d' },
          800: { value: '#166534' },
          900: { value: '#14532d' }
        },
        neonFuchsia: {
          50: { value: '#fdf4ff' },
          100: { value: '#fae8ff' },
          200: { value: '#f5d0fe' },
          300: { value: '#f0abfc' },
          400: { value: '#e879f9' },
          500: { value: '#FF00C8' },
          600: { value: '#c026d3' },
          700: { value: '#a21caf' },
          800: { value: '#86198f' },
          900: { value: '#701a75' }
        }
      }
    }
  }
});
