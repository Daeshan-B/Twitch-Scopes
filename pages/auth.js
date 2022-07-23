import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Auth() {
  function getToken() {
    if (typeof window !== "undefined") {
      // Client-side-only code
      const hash = window.location.hash.substr(1);
      var result = hash.split("&").reduce(function (res, item) {
        var parts = item.split("=");
        res[parts[0]] = parts[1];
        return res;
      }, {});
      return result.access_token;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>JavaBits Authorizer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>oAuth Access Token</h1>
        <p>{getToken()}</p>
      </main>
    </div>
  );
}
