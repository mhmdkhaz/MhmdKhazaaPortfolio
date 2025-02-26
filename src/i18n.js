import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Language detection
import HttpBackend from "i18next-http-backend"; // Load translation files

i18n
  .use(HttpBackend) // Load translation files dynamically
  .use(LanguageDetector) // Detect language and store it in localStorage or cookies
  .use(initReactI18next) // Pass i18n to React
  .init({
    fallbackLng: "en", // Default language if detection fails
    debug: true, // Enable debugging
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
    detection: {
      order: [
        "localStorage",
        "cookie",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ], // Language detection order
      caches: ["localStorage", "cookie"], // Where to store the language
    },
    backend: {
      loadPath: "/translation/{{lng}}.json", // Load translation files
    },
  });

export default i18n;
