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
          <script data-ad-client="ca-pub-4515639184646084" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>
          
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4515639184646084" crossOrigin="anonymous" />
          
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css" />
          <link
            rel="shortcut icon"
            href="/favicon.png"
            type="image/png"
          />
          <script data-pace-options='{ "ajax": false }' src="/script/pace.min.js"></script>
          {/*<script src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"></script>*/}
          {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pace-js@latest/pace-theme-default.min.css"/> */}
          <link rel="stylesheet" href="/style/pace.min.css"/>
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
          
           <script>
            setTimeout(() => {
              window.addEventListener( 'load', () => {
                (adsbygoogle = window.adsbygoogle || []).push({});
              });
            }, 10000);
          </script>
        </body>
      </Html>
    );
  }
}


/*
<script id="navegg" type="text/javascript">
            (function(n,v,g){
              let o="Navegg";if(!n[o]){
              let a=v.createElement('script');a.src=g;b=document.getElementsByTagName('script')[0];
              let b.parentNode.insertBefore(a,b);n[o]=n[o]||function(parms){
              n[o].q=n[o].q||[];n[o].q.push([this, parms])};}})
            (window, document, 'https://tag.navdmp.com/universal.min.js');
            window.naveggReady = window.naveggReady||[];
            window.nvg77017 = new Navegg({
              acc: 77017
            });
          </script>
*/
