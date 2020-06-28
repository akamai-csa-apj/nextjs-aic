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

```jsx
const settings = {
  authority: `https://v1.api.us.janrain.com/xxxx/login`,
  client_id: "xxxx",
}
```
