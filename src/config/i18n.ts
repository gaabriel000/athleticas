import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import * as Middleware from 'i18next-http-middleware';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


i18next
  .use(Backend)
  .use(Middleware.LanguageDetector)
  .init({
    fallbackLng: 'pt-BR',
    ns: ['translation'],
    defaultNS: 'translation',

    backend: {
      loadPath: path.join(__dirname, '../../locales/{{lng}}/{{ns}}.json'),
    },

    detection: {
      order: ['header', 'querystring', 'cookie'],
      caches: ['cookie'],
    },
  });

export default i18next;