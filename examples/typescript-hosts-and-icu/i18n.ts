import {
  createNextI18n,
  createNextI18nComponents,
} from "@next-i18n/based-on-host";
import * as ICU from "i18next-icu";
import en from "i18next-icu/locale-data/en";
import ru from "i18next-icu/locale-data/ru";

const icu = new ICU({
  formats: {
    number: {
      PRICE: {
        minimumFractionDigits: 2,
        useGrouping: false,
      },
    },
  },
});
icu.addLocaleData(en);
icu.addLocaleData(ru);

export const nextI18n = createNextI18n({
  fallbackLanguage: "en",
  use: [icu],
});

const {
  appI18nWrapper,
  Link,
  Trans,
  withNamespaces,
} = createNextI18nComponents(nextI18n);

export { appI18nWrapper, Link, Trans, withNamespaces };
