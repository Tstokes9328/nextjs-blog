import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        //create an instance of server style sheet
        const sheet = new ServerStyleSheet();
        //retrieve styles from the components in the page
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        //extract styles as <style> tag
        const styleTags = sheet.getStyleElement();
        //pass styleTags as props
        return {...page, styleTags};
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="A blog app created with NextJS" />
                    <meta name="keywords" content="nextjs next seo react blog hacker news hooks" />
                    <meta name="author" content="Tayte Stokes" />
                    {/* Styled Components */}
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
};

export default MyDocument;