import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { v4 as uuidv4 } from "uuid";

const scopes = require("./scopes.json");
const redirect_uri = "https://twitchscopes.com/auth";
const client_id = "2didsk5u5vofme0jg633hlrncou75l";

export default function Home() {
  const [selectedScopes, setSelectedScopes] = useState(() => new Set());
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const myuuid = uuidv4().replace("-", "");

  function handleChange(event) {
    const scope = event.target.value;
    setSelectedScopes((current) => {
      const next = new Set(current);
      if (event.target.checked) {
        next.add(scope);
      } else {
        next.delete(scope);
      }
      return next;
    });
    setShowEmptyMessage(false);
  }

  function requestToken() {
    if (selectedScopes.size === 0) {
      setShowEmptyMessage(true);
      return;
    }

    // Keep the catalogue order from scopes.json so the URL is deterministic.
    const scopeString = scopes
      .filter((scopeObject) => selectedScopes.has(scopeObject.scope))
      .map((scopeObject) => scopeObject.scope)
      .join(" ");
    const encodedScopes = encodeURIComponent(scopeString);

    window.open(
      `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${encodedScopes}&state=${myuuid}`
    );
    window.location.reload();
  }

  const selectedCount = selectedScopes.size;
  const isSelectionEmpty = selectedCount === 0;

  return (
    <div className={styles.page}>
      <Head>
        <title>Twitch Scopes Authorizer</title>
        <meta
          name="description"
          content="Pick the Twitch API scopes your app needs and generate an OAuth access token."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Twitch OAuth helper</p>
          <h1 className={styles.title}>Twitch Scopes</h1>
          <p className={styles.description}>
            Pick the scopes your app needs, authorize with Twitch, and copy the
            access token. Read the{" "}
            <a
              href="https://dev.twitch.tv/docs/authentication/scopes"
              target="_blank"
              rel="noreferrer"
            >
              scope docs
            </a>{" "}
            if you are not sure which ones to choose.
          </p>
        </header>

        <section className={styles.panel} aria-labelledby="scopes-heading">
          <div className={styles.panelHeader}>
            <h2 id="scopes-heading" className={styles.panelTitle}>
              Twitch API scopes
            </h2>
            <p className={styles.panelHint}>
              Click a row to toggle it. Descriptions list the API calls each
              scope unlocks.
            </p>
          </div>

          <ul className={styles.scopeList}>
            {scopes.map((scopeObject) => {
              const inputId = `scope-${scopeObject.scope}`;
              const isSelected = selectedScopes.has(scopeObject.scope);

              return (
                <li key={scopeObject.scope} className={styles.scopeItem}>
                  <label
                    htmlFor={inputId}
                    className={`${styles.scopeRow} ${
                      isSelected ? styles.scopeRowSelected : ""
                    }`}
                  >
                    <input
                      id={inputId}
                      className={styles.checkbox}
                      type="checkbox"
                      value={scopeObject.scope}
                      checked={isSelected}
                      onChange={handleChange}
                    />
                    <span className={styles.scopeBody}>
                      <span className={styles.scopeTopLine}>
                        <code className={styles.codePill}>
                          {scopeObject.scope}
                        </code>
                        {isSelected ? (
                          <span className={styles.selectedTag}>
                            <span aria-hidden="true">✓</span> Selected
                          </span>
                        ) : null}
                      </span>
                      <span className={styles.scopeDescription}>
                        {scopeObject.description}
                      </span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </section>

        <div className={styles.actions}>
          <p className={styles.count} aria-live="polite">
            {selectedCount} {selectedCount === 1 ? "scope" : "scopes"} selected
          </p>

          <button
            type="button"
            className={`${styles.authorizeButton} ${
              isSelectionEmpty ? styles.authorizeButtonIdle : ""
            }`}
            onClick={requestToken}
          >
            Authorize Application
          </button>

          {showEmptyMessage ? (
            <p className={styles.errorMessage} role="alert">
              Select at least one scope before you authorize.
            </p>
          ) : null}
        </div>

        <aside className={styles.note} aria-label="Scope warning">
          <strong className={styles.noteTitle}>Request only what you need</strong>
          <p className={styles.noteText}>
            An application must request only the scopes required by the APIs it
            calls. Asking for more than your app uses can get its API access
            suspended.
          </p>
        </aside>

        <p className={styles.meta}>
          Built for the{" "}
          <a
            href="https://github.com/Daeshan-B/JavaBits"
            target="_blank"
            rel="noreferrer"
          >
            JavaBits
          </a>{" "}
          project, a Java API for Twitch chat bots. Source on{" "}
          <a
            href="https://github.com/Daeshan-B/Twitch-Scopes"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </main>
    </div>
  );
}
