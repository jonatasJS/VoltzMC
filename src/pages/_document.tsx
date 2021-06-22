import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props): React.ReactElement =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            rel="shortcut icon"
            href="/favicon.png"
            type="image/png"
          />
          <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css"/>
          <styles>
           /*!
           * pace.js v1.2.4 | Default theme
           * https://github.com/CodeByZach/pace/
           * Licensed MIT © HubSpot, Inc.
           */
          .pace{-webkit-pointer-events:none;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.pace-inactive{display:none}.pace .pace-progress{background:rgb(255, 170, 0);;position:fixed;z-index:2000;top:0;right:100%;width:100%;height:2px}
          </styles>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://www.paypalobjects.com/api/checkout.js" />
        </body>
      </Html>
    );
  }
}
