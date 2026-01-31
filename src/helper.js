/**
 * Helper constants and utilities for the Divyagrah application.
 * This file maintains the design system's color palette and common utility functions.
 */

// Core Color Palette - Synchronized with App.css and index.css
export const COLORS = {
    // Brand Colors
    primary: '#D35400',       // Rich Saffron / Dark Orange
    primaryLight: '#E67E22',  // Lighter Saffron
    primaryDark: '#BF4A00',   // Hover state for primary
    secondary: '#8B0000',     // Deep Maroon / Ritual Red
    accent: '#F1C40F',        // Divine Gold

    // Backgrounds
    light: '#FFFAF4',         // Creamy Off-white
    bgCreamy: '#FFF9F3',      // Softer cream background

    // Text Colors
    textDark: '#2C3E50',      // Deep Slate for readability
    textMuted: '#5D4037',     // Wood-toned muted text
    textLight: '#FFFFFF',     // Pure white

    // States & Overlays
    accentGlow: 'rgba(211, 84, 0, 0.2)',
    success: '#27AE60',
    error: '#E74C3C',
    warning: '#F39C12',

    // Glassmorphism
    glassBg: 'rgba(255, 255, 255, 0.8)',
    glassBorder: 'rgba(255, 255, 255, 0.3)',
};

/**
 * Utility to get a color with custom opacity
 * @param {string} hex - Hex color code
 * @param {number} opacity - Opacity from 0 to 1
 * @returns {string} - rgba color string
 */
export const hexToRgba = (hex, opacity = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Returns a theme-consistent gradient string
 * @param {string} type - 'primary', 'secondary', or 'divine'
 * @returns {string} - CSS linear-gradient string
 */
export const getGradient = (type = 'primary') => {
    switch (type) {
        case 'primary':
            return `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`;
        case 'secondary':
            return `linear-gradient(135deg, ${COLORS.secondary}, #5D0000)`;
        case 'divine':
            return `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`;
        case 'gold':
            return `linear-gradient(135deg, ${COLORS.accent}, #D4AC0D)`;
        default:
            return `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})`;
    }
};

// Common Layout Constants
export const SHADOWS = {
    soft: '0 4px 15px rgba(0, 0, 0, 0.05)',
    medium: '0 10px 30px rgba(0, 0, 0, 0.1)',
    strong: '0 15px 45px rgba(0, 0, 0, 0.15)',
    divine: `0 10px 25px ${COLORS.accentGlow}`,
};

export const TRANSITIONS = {
    smooth: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    bounce: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};
