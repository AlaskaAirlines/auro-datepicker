<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:markdownDocs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/README.md`
and copied to `./componentDocs/README.md` each time the the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Datepicker

The `<auro-datepicker>` element allows users to select a date, either with text input or by displaying a calendar. The `<auro-datepicker>` element is the combination of [auro-dropdown](http://auro.alaskaair.com/components/auro/dropdown), [auro-input](http://auro.alaskaair.com/components/auro/input), and Auro's extension of [Lion calendar](https://lion-web.netlify.app/components/calendar/overview/).

## UI development browser support

For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

## Install

[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-datepicker/testPublish.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-datepicker/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-datepicker?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-datepicker)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-datepicker?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
[![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@aurodesignsystem/auro-datepicker?style=for-the-badge)](https://snyk.io/test/npm/@aurodesignsystem/auro-datepicker?tab=issues)

```shell
$ npm i @aurodesignsystem/auro-datepicker
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Peer dependencies

The following Auro peer dependencies must be included.

```shell
$ npm i @alaskaairux/auro-icon
$ npm i @aurodesignsystem/auro-calendar
$ npm i @aurodesignsystem/auro-dropdown
$ npm i @aurodesignsystem/auro-input
$ npm i @aurodesignsystem/webcorestylesheets
```

### Design Token CSS Custom Property dependency

The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://auro.alaskaair.com/support/custom-properties) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Auro Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the `<auro-datepicker>` component.

```js
import "@aurodesignsystem/auro-datepicker";
```

**Reference component in HTML**

```html
<auro-datepicker>
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

## Install bundled assets from CDN

In cases where the project is not able to process JS assets, there are pre-processed assets available for use.

### Bundle example code

```html
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/design-tokens@latest/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://unpkg.com/@alaskaairux/webcorestylesheets@latest/dist/bundled/essentials.css" />
<script src="https://unpkg.com/@aurodesignsystem/auro-datepicker@latest/dist/auro-datepicker__bundled.js" type="module"></script>
```

### Peer dependencies

The following Auro peer dependencies must be included.

```html
<script src="https://unpkg.com/@alaskaairux/auro-icon@latest/dist/auro-icon__bundled.js" type="module"></script>
<script src="https://unpkg.com/@aurodesignsystem/auro-calendar@latest/dist/auro-calendar__bundled.js" type="module"></script>
<script src="https://unpkg.com/@aurodesignsystem/auro-dropdown@latest/dist/auro-dropdown__bundled.js" type="module"></script>
<script src="https://unpkg.com/@aurodesignsystem/auro-input@latest/dist/auro-input__bundled.js" type="module"></script>
```

## auro-datepicker use cases

The `<auro-datepicker>` element should be used in situations where users may:

* select a single date
* select a starting date and an ending date (with two separate datepickers)

## API Code Examples

### Default auro-datepicker

```html
<auro-datepicker>
  <span slot="label">Choose a date</span>
</auro-datepicker>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open a shell session to run the **dev server**.

```shell
$ npm run dev
```

Open [localhost:8000](http://localhost:8000/)

If running separate sessions is preferred, please run the following commands in individual terminal shells.

```shell
$ npm run build:watch

$ npm run serve
```

### API generation

The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

### Testing

Automated tests are required for every Auro component. See `.\test\auro-datepicker.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

### Bundled assets

Bundled assets are only generated in the remote and not merged back to this repo. To review and/or test a bundled asset locally, run `$ npm run bundler` to generate assets.

### Demo deployment

To deploy a demo version of the component for review, run `npm run build:demo` to create a `./build` directory that can be pushed to any static server.

