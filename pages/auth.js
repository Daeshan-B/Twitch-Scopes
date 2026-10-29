import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function readAccessToken(hash) {
  const cleanHash = (hash || "").replace(/^#/, "");
  if (!cleanHash) {
    return "";
  }

  for (const part of cleanHash.split("&")) {
    const separator = part.indexOf("=");
    if (separator === -1) {
      continue;
    }

    if (part.slice(0, separator) === "access_token") {
      const value = part.slice(separator + 1);
      try {
        return decodeURIComponent(value);
      } catch {
        return value;
      }
    }
  }

  return "";
}

export default function Auth() {
  const [token, setToken] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => {
    setToken(readAccessToken(window.location.hash));
  }, []);

  useEffect(() => {
    return () => clearTimeout(copyTimer.current);
  }, []);

  async function copyToken() {
    try {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setCopyFailed(false);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>Twitch Scopes — Access Token</title>
        <meta
          name="description"
          content="Copy the OAuth access token returned by Twitch after you authorize your app's scopes."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Twitch OAuth helper</p>
          <h1 className={styles.title}>Your access token</h1>
          <p className={styles.description}>
            Keep this token private. It grants the scopes you selected until it
            expires.
          </p>
        </header>

        <section className={styles.panel} aria-labelledby="token-heading">
          <div className={styles.panelHeader}>
            <h2 id="token-heading" className={styles.panelTitle}>
              OAuth access token
            </h2>
          </div>

          <div className={styles.panelBody}>
            {token === null ? (
              <p className={styles.muted}>Reading the token from the URL…</p>
            ) : null}

            {token === "" ? (
              <p className={styles.emptyState}>
                No token found in the URL. Head back to the scope picker,
                choose your scopes, and authorize again.
              </p>
            ) : null}

            {token ? (
              <>
                <code className={styles.token}>{token}</code>
                <div className={styles.copyRow}>
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={copyToken}
                  >
                    {copied ? "Copied ✓" : "Copy token"}
                  </button>
                  <span
                    className={styles.status}
                    role="status"
                    aria-live="polite"
                  >
                    {copied ? "Token copied to your clipboard." : null}
                    {copyFailed
                      ? "Could not copy — select the token manually."
                      : null}
                  </span>
                </div>
              </>
            ) : null}
          </div>
        </section>

        <Link href="/">
          <a className={styles.backLink}>← Back to the scope picker</a>
        </Link>
      </main>
    </div>
  );
}
