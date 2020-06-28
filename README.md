# Akamai Identity Cloud Next.js Supper Simple Sample Application
This sample demonstrates the integration of Akamai Identity Cloud and a simple
Next.js application.

# Prerequisites
- Mac or Windows PC
- Chrome Browser
- Node.js & Node Package Manager
- Akamai Identity Cloud Hosted Login Instance

**You must contact Akamai representative to deploy the instance.**

# Project Set-up
## Install Dependencies
Use npm to install the project dependencies.

```console
$ npm install
```
## Modify enviromental parameters
Modify environmental parameters on index.js & redirect_uri.js . The only
parameters that you need to modify is just 2.
- authority : Open ID Connect Provider URL
- client_id : Akamai Identity Cloud Hosted Login OIDC Client ID

**You must contact Akamai representative to find out those parameters.**

```jsx
const settings = {
  authority: `https://v1.api.us.janrain.com/xxxx/login`,
  client_id: "xxxx",
}
```

## Deploy the applicat
Use npm to run your test.

```console
$ npm run dev
```

You can start playing to access `http://localhost:3000` with you Chrome!

# Issue Reporting
If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker.