import { nextI18n, Link, withNamespaces } from "../i18n";

export default withNamespaces(["common"])(({ t }) => (
  <>
    <ul>
      <li>
        <Link href="/"><a>{t("menu.index")}</a></Link>
      </li>
      <li>
        <Link href="/about"><a>{t("menu.about")}</a></Link>
      </li>
      <li>
        <Link language={nextI18n.getLanguage() === "en" ? "ru" : "en"}><a>{t("menu.toggleLanguage")}</a></Link>
      </li>
    </ul>
      <hr />
  </>
));
