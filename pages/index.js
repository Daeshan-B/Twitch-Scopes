import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
const scopes = require("./scopes.json");
const redirect_uri = 'https://twitchscopes.com/auth'
const client_id = '2didsk5u5vofme0jg633hlrncou75l'

export default function Home() {
  let scopeSet = new Set([]);

  function handleChange(event) {
    let scope = event.target.value;
    if (event.target.checked) {
      scopeSet.add(scope);
      console.log("Added Scope - " + scope);
      console.log("Current Scopes");
      console.log(scopeSet);
    } else {
      scopeSet.delete(scope);
      console.log("Removed Scope- " + scope);
      console.log("Current Scopes");
      console.log(scopeSet);
    }
  }

  function requestToken() {
    if (scopeSet.size === 0) {
      alert("No scopes have been selected. Please try again!");
      return;
    }

    let scopeString = "";
    let count = 0;
    scopeSet.forEach((scope) => {
      count++;
      if (count == scopeSet.size) {
        scopeString += scope;
      } else {
        scopeString += scope + " ";
      }

      console.log(scopeString);
    });
    const encodedScopes = encodeURIComponent(scopeString);
    
    window.open(
      `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${encodedScopes}&state=c3ab8aa609ea11e793ae92361f002671`
    );
    window.location.reload();
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Twitch Scopes Authorizer</title>
        <meta name="description" content="A Twitch.tv application authorization token generator." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Twitch Scopes</a>
        </h1>

        <p className={styles.description}>
          Get started by selecting the scopes you wish to use. <br></br>
          Visit <a href="https://dev.twitch.tv/docs/authentication/scopes">
            dev.twitch.tv</a> for more on scopes and how to use them.
            <br></br>
            This site was created in part of the <a href="https://github.com/Daeshan-B/JavaBits">JTA</a>. A Java API for Twitch.tv chat bots.
        </p>
        <h1>Twitch API Scopes</h1>

        <div>
          <table className="styled-table">
            <thead>
              <tr>
                <th scope="col">Active</th>
                <th scope="col">Scope</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {scopes.map((scopeObject, i) => {
                return (
                  <tr key={scopeObject + i}>
                    <td>
                      <input
                        type="checkbox"
                        value={scopeObject.scope}
                        onChange={handleChange}
                      />
                    </td>
                    <td>{scopeObject.scope}</td>
                    <td>{scopeObject.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="button-div">
            <button type="button" className="button-5" onClick={requestToken}>
              Authorize Application
            </button>
          </div>
          <p className="p-note">
            NOTE: An application must request only the scopes required by the
            APIs that their app calls.
            <br></br>If you request more scopes than is required to support your
            app’s functionality, Twitch may suspend your application’s access to
            the Twitch API.
          </p>
        </div>
      </main>
    </div>
  );
}
