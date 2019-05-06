import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="A blog app created with NextJS" />
                    <meta name="keywords" content="nextjs next seo react blog hacker news hooks" />
                    <meta name="author" content="Tayte Stokes" />
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