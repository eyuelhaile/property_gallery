import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Apartment for Sale, Bole, Addis Ababa, Ethiopia"
          />
          <meta property="og:site_name" content="apartment.sale.vercel.app" />
          <meta
            property="og:description"
            content="Apartment for Sale, Bole, Addis Ababa, Ethiopia"
          />
          <meta property="og:title" content=" Bole Rwanda, Next to Embassy of Somalia" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content=" Bole Rwanda, Next to Embassy of Somalia" />
          <meta
            name="twitter:description"
            content="Apartment for Sale, Bole, Addis Ababa, Ethiopia"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
