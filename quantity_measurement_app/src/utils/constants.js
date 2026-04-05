const envApiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
const normalizedEnvApiBaseUrl = envApiBaseUrl ? envApiBaseUrl.replace(/\/+$/, '') : '';
const devFallbackApiBaseUrl = 'http://localhost:8080';

export const API_BASE_URL = normalizedEnvApiBaseUrl || (import.meta.env.DEV ? devFallbackApiBaseUrl : '');

export const MEASUREMENT_TYPES = [
  {
    id: 'LENGTH',
    name: 'Length',
    icon: '📏',
    description: 'Convert and calculate length measurements',
    units: ['FEET', 'INCHES', 'YARDS', 'CENTIMETERS'],
    supportsArithmetic: true
  },
  {
    id: 'WEIGHT',
    name: 'Weight',
    icon: '⚖️',
    description: 'Convert and calculate weight measurements',
    units: ['KILOGRAM', 'GRAM', 'POUND'],
    supportsArithmetic: true
  },
  {
    id: 'VOLUME',
    name: 'Volume',
    icon: '🧪',
    description: 'Convert and calculate volume measurements',
    units: ['LITER', 'MILLILITER', 'GALLON'],
    supportsArithmetic: true
  },
  {
    id: 'TEMPERATURE',
    name: 'Temperature',
    icon: '🌡️',
    description: 'Convert temperature measurements',
    units: ['CELSIUS', 'FAHRENHEIT'],
    supportsArithmetic: false
  }
];

export const OPERATIONS = {
  COMPARE: { name: 'Compare', icon: '⚖️', requiresTwoInputs: true },
  CONVERT: { name: 'Convert', icon: '🔄', requiresTwoInputs: false },
  ADD: { name: 'Add', icon: '➕', requiresTwoInputs: true },
  SUBTRACT: { name: 'Subtract', icon: '➖', requiresTwoInputs: true },
  DIVIDE: { name: 'Divide', icon: '➗', requiresTwoInputs: true }
};

export const UNIT_DISPLAY_NAMES = {
  FEET: 'Feet',
  INCHES: 'Inches',
  YARDS: 'Yards',
  CENTIMETERS: 'Centimeters',
  KILOGRAM: 'Kilogram',
  GRAM: 'Gram',
  POUND: 'Pound',
  LITER: 'Liter',
  MILLILITER: 'Milliliter',
  GALLON: 'Gallon',
  CELSIUS: 'Celsius',
  FAHRENHEIT: 'Fahrenheit'
};
