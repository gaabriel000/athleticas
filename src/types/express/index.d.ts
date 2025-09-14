import 'i18next';

declare module 'express-serve-static-core' {
  interface Request {
    language: string;
    languages: string[];
    i18n: import('i18next').i18n;
    t: import('i18next').TFunction;
  }
}