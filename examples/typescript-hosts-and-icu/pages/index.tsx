import { withNamespaces, Trans } from "../i18n";
import Menu from "../components/Menu";

export default withNamespaces(["index"])(({ t }) => (
  <>
    <Menu />
    <h1>{t("pageHeader")}</h1>
    <Trans i18nKey="message" />
  </>
));
