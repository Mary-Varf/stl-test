import Document, { Html, Head, Main, NextScript } from "next/document";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";
class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({        
        // eslint-disable-next-line react/display-name
        enhanceApp: (App: any) => (props: any) => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="serverSideStyles">{registry.toString()}</style>
        </>
      ),
    };
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="link to favicon" />
          <link href="link to font" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
