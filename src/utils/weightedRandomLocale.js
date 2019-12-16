import {Locales} from '../constants/faker-locales';

export const LocaleShortcodes = Object.values(Locales);

const LocaleKeys = Object.keys(Locales);
const NumLocales = LocaleKeys.length;

export function getWeightedRandomLocale() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.75) {
    return Locales.ENGLISH;
  }
  return Locales[LocaleKeys[Math.floor(Math.random() * NumLocales)]];
}
