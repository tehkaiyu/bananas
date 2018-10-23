[![Greenkeeper badge](https://badges.greenkeeper.io/its-bananas/website.svg)](https://greenkeeper.io/)
[![Dependency Status](https://david-dm.org/its-bananas/website/status.svg)](https://david-dm.org/its-bananas/website)
[![Build Status](https://travis-ci.org/its-bananas/website.svg?branch=master)](https://travis-ci.org/its-bananas/website)

# ItsBananas

> Static website to advertise the witches of "itsBananas"

Can be found at [http://itsbananas.club](http://itsbananas.club)

### Directory Layout

```
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

Clone the repo, install Node.js modules and run `npm run dev` to serve with hot reload at localhost:8000:

```shell
$ npm i
$ npm run dev
```

Then open [http://localhost:8000/](http://localhost:8000/) in your browser.

### Format

You can autoformat your code following eslint rules by running `npm run format`

### How to Deploy

```shell
$ npm run deploy           # Deploys the project to Surge.sh
```

Alternatively, you can build a production release to manually deploy to S3, Firebase, Netlify, and other static hosts. Simply run the command below and copy the generated `build` folder to your static host.

```shell
$ npm run build            # Build production release
```
