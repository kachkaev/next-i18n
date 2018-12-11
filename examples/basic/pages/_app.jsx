import App, { Container } from "next/app";
import { appI18nWrapper } from "../i18n";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default appI18nWrapper(MyApp);
