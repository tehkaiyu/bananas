# It's Bananas

[![Build Status](http://img.shields.io/travis/tehkaiyu/bananas/master.svg?style=flat-square)](https://travis-ci.org/tehkaiyu/bananas)

> Static React website for "itsBananas" group, built with Gatsby and React.js

Hosted [here](http://itsbananas.club)

### Directory Layout

```
.
├── /public/                    # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # React.js-based web pages
│   ├── /compoenents/           # React components
│   ├── /layouts/               # Gatsby layouts
│   ├── /pages/                 # Website pages
│── gatsby-config.js            # Website configuration / settings
│── LICENSE.txt                 # License file
│── package.json                # Dev dependencies and NPM scripts
└── README.md                   # Project overview
```

### Getting Started

Clone the repo, install Node.js modules and run `npm run develop`:

```
$ npm i
$ npm run develop
```

Then open [http://localhost:8000/](http://localhost:8000/) in your browser.

### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```
$ npm test
```

### How to Deploy

```shell
$ npm run deploy       # Deploys the project to Surge.sh
```

Alternatively, you can build a production release to manually deploy to S3, Firebase, Netlify, and other static hosts. Simply run the command below and copy the generated `build` folder to your static host.

```shell
$ npm run build         # Build production release
```

Made with ♥
