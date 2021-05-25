import { GA_TRACKING_ID } from '@lib/gtag';
import { getCssString } from '@theme/config';
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React, { Fragment } from 'react';

export default class Document extends NextDocument<{ isProduction: boolean }> {
  static async getInitialProps(ctx: DocumentContext) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      const isProduction = process.env.NODE_ENV === 'production';

      return {
        ...initialProps,
        isProduction,
      };
    } finally {
      // Do nothing
    }
  }

  render() {
    const { isProduction } = this.props;

    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;900&display=swap"
            media="print"
            // @ts-ignore
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;900&display=swap"
            />
          </noscript>

          {isProduction && (
            <Fragment>
              <link rel="icon" href="/favicon.ico" />
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </Fragment>
          )}

          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssString() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
