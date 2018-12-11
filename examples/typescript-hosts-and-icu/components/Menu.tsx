import { nextI18n, Link, withNamespaces } from "../i18n";

const handleToggleLanguageClick = () =>
  nextI18n.changeLanguage(nextI18n.getLanguage() === "en" ? "ru" : "en");

export default withNamespaces(["common"])(({ t }) => (
  <>
    <ul>
      <li>
        <Link href="/">{t("menu.index")}</Link>
      </li>
      <li>
        <Link href="/about">{t("menu.about")}</Link>
      </li>
      <li>
        <a
          style={{ borderBottom: "1px dotted" }}
          onClick={handleToggleLanguageClick}
        >
          {t("menu:toggleLanguage")}
        </a>
      </li>
      <hr />
    </ul>
  </>
));
