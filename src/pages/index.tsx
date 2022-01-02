import FrontPage from './FrontPage';
import Head from 'next/head';

const VERSION: string = '1.4.0';

function HomePage() {
  return (
    <>
      <Head>
        <title>Enrique Casillas</title>
        <meta
          name="Enrique Casillas' personal website"
          content="Contains projects and social media links from Enrique Casillas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FrontPage version={VERSION} />
    </>
  );
}

export default HomePage;
