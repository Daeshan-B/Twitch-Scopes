# 🎮 Twitch Scopes

[![Twitch Scopes](https://img.shields.io/badge/🎮_Twitch-Scopes-9146FF?style=for-the-badge&logo=twitch&logoColor=white)](https://github.com/Daeshan-B/Twitch-Scopes)
[![Made for Twitch](https://img.shields.io/badge/🎥_Made_for-Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white)](https://dev.twitch.tv/docs/authentication/scopes)
[![Next.js](https://img.shields.io/badge/⚛️_Next.js-12.2.3-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/docs)
[![OAuth](https://img.shields.io/badge/🔐_OAuth-Implicit_Grant-9146FF?style=for-the-badge&logo=twitch&logoColor=white)](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow)
[![Status](https://img.shields.io/badge/✅_Status-Active-2ea043?style=for-the-badge)](https://github.com/Daeshan-B/Twitch-Scopes)

A small, friendly site that turns a list of Twitch API scopes into an OAuth
access token you can test with right away.

## Quick start

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), pick your scopes, and hit
**Authorize Application**.

> If `npm ci` says the lockfile is out of sync, run `npm install` once and try
> again.

## How it works

This app uses Twitch's **implicit grant** flow, so there is no client secret and
no server-side token exchange:

1. You select scopes and the browser opens
   `https://id.twitch.tv/oauth2/authorize` with `response_type=token`.
2. Twitch sends you back to `/auth` with the token in the URL fragment, e.g.
   `#access_token=...&scope=chat%3Aread`.
3. `/auth` reads that fragment in the browser and shows the token with a copy
   button. The token never reaches a server.

The page that handles the hand-off lives in `pages/auth.js`; the picker is
`pages/index.js`.

## Pick only what you need

Request only the scopes your app actually calls — Twitch can suspend API access
for apps that ask for more than they use.

## Links

- [Twitch authentication docs](https://dev.twitch.tv/docs/authentication/)
- [Scopes reference](https://dev.twitch.tv/docs/authentication/scopes)
- [Source on GitHub](https://github.com/Daeshan-B/Twitch-Scopes)
