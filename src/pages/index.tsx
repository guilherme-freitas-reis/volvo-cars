import Head from "next/head";
import ProductList from "../components/ProductList";

import styles from "./index.module.css";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Volvo Cars</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ProductList />
      </main>
    </>
  );
}
