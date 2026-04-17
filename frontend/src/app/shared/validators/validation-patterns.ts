/**
 * Application-wide validation patterns and constants
 *
 * This file contains reusable validation patterns that can be used
 * across the application for form validation and data validation.
 */

/**
 * Strict URL validation pattern that requires:
 * - HTTP and HTTPS protocols only
 * - Valid domain names with at least one dot (except localhost)
 * - IP addresses (IPv4)
 * - Port numbers
 * - Paths, query strings, and fragments
 * - Localhost for development
 */
export const STRICT_URL_PATTERN =
    /^https?:\/\/(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?|localhost|(?:\d{1,3}\.){3}\d{1,3})(?::\d+)?(?:\/[^\s]*)?$/i;

/**
 * Email validation pattern
 * Supports most common email formats including international domains
 */
export const EMAIL_PATTERN =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;

/**
 * Person name validation pattern
 * Allows letters (including accents) and spaces, with a minimum length
 */
export const PERSON_NAME_PATTERN = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,100}$/;

/**
 * City name validation pattern
 * Similar to person name but slightly shorter max length
 */
export const CITY_NAME_PATTERN = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,80}$/;

/**
 * Address validation pattern
 * Allows letters, numbers, spaces and common punctuation, with a minimum length
 */
export const ADDRESS_PATTERN = /^[a-zA-Z0-9À-ÖØ-öø-ÿ\s.,#-]{5,120}$/;

/**
 * Phone number validation pattern
 * Supports international formats with optional country codes
 */
export const PHONE_PATTERN = /^[\+]?[1-9][\d]{0,15}$/;

/**
 * Alphanumeric with spaces pattern
 * For names, titles, and general text fields
 */
export const ALPHANUMERIC_SPACES_PATTERN = /^[a-zA-Z0-9\s]+$/;

/**
 * Numeric pattern (integers only)
 */
export const NUMERIC_PATTERN = /^\d+$/;

/**
 * Decimal number pattern
 * Supports positive and negative decimal numbers
 */
export const DECIMAL_PATTERN = /^-?\d+(\.\d+)?$/;
