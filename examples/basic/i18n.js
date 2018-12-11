const {
  createNextI18n,
  createNextI18nComponents,
} = require("@next-i18n/based-on-user");
//= require("@next-i18n/based-on-path");
//= require("@next-i18n/based-on-host");
//= require("@next-i18n/custom"); // ?

const nextI18n = createNextI18n({
  fallbackLanguage: "en",
});

const {
  appI18nWrapper,
  Link,
  Trans,
  withNamespaces,
} = createNextI18nComponents(nextI18n);

module.exports = {
  nextI18n,
  appI18nWrapper,
  Link,
  Trans,
  withNamespaces,
};
