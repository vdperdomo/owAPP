 
import * as Localization from 'expo-localization';
import i18n, { translations } from 'i18n-js';
import {es} from './es';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    es: es
};

// Set the locale once at the beginning of your app.
i18n.locale = 'es';
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true; 

export default i18n;
