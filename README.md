<h1 align="center">@twilio-labs/sketch-twilio-ipsum</h1>
<p align="center">A realistic fake data populator for Sketch</p>
<p align="center">
<a href="https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md"><img alt="Code of Conduct" src="https://img.shields.io/badge/%F0%9F%92%96-Code%20of%20Conduct-blueviolet.svg?style=flat-square"></a> 
<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" /></a>
</p>
<hr>

## Installation

1. [Download the Sketch plugin](https://github.com/twilio-labs/sketch-twilio-ipsum/releases/download/v1.0.1/twilio-ipsum.sketchplugin.zip) zip file
2. Unzip the file `twilio-ipsum.sketchplugin.zip`
3. Double-click the extracted `twilio-ipsum.sketchplugin` file and it should install into Sketch.
4. Now you should see a new option for `Twilio Ipsum` in your data menu, located in `Layer / Data` with all the different types of mock realistic data you can use when you have a text layer selected. You can also right-click on text layers and pull up the same menu under Data.

![Using the data from the layer menu](https://github.com/twilio-labs/sketch-twilio-ipsum/blob/master/readme-images/layer-menu.png)

![Twilio Ipsum Sketch plugin preview](https://github.com/twilio-labs/sketch-twilio-ipsum/blob/master/readme-images/preview.png)

## About

- This is a [Sketch](https://www.sketch.com/) plugin that provides realistic and internationalized (i18n) data directly into your mockups.
- 75% of the time, the data shows up as English. The other 25% of the time it generates in [one of our other locales](https://github.com/twilio-labs/sketch-twilio-ipsum#list-of-supported-locales)
- If you would like to force a locale, simply append your layer name with the follow text: `|locale`. For example, for french you can do `cool-layer|fr`. i.e.:

![How to set a locale](https://github.com/twilio-labs/sketch-twilio-ipsum/blob/master/readme-images/locale.png)

## List of supported locales

```
GERMAN: 'de',
ENGLISH: 'en',
SPANISH: 'es',
FARSI: 'fa',
FRENCH: 'fr',
ITALIAN: 'it',
JAPANESE: 'ja',
KOREAN: 'ko',
NORWEGIAN: 'nb_NO',
NEPALI: 'nep',
DUTCH: 'nl',
POLISH: 'pl',
PORTUGESE: 'pt_PT',
RUSSIAN: 'ru',
SLOVAK: 'sk',
SWEDISH: 'sv',
TURKISH: 'tr',
UKRAINIAN: 'uk',
VIETNAMESE: 'vi',
CHINESE_CHINA: 'zh_CN',
CHINESE_TAIWAN: 'zh_TW'
```

> [More info about using the Data tool in Sketch](https://www.sketch.com/docs/data/#adding-new-data-sources). Hope you enjoy this nifty plugin!

## Contributing

This project welcomes contributions from the community.

## Code of Conduct

Please be aware that this project has a [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md). The tl;dr is to just be excellent to each other ❤️

## Maintainers

This project is maintained by the [design systems team](https://github.com/orgs/twilio-labs/teams/design-systems).

## Prior Art

- [Data Populator](https://www.datapopulator.com/)
- [Sketch Data Faker](https://github.com/paintedbicycle/sketch-data-faker)

---

## Dev stuff

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

This plugin makes extensive use of Sketch's [Data Supplier API](https://developer.sketch.com/reference/api/#data-supplier).

### Prerequisites

- [Sketch](https://www.sketch.com/)

### Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

### Debugging

To view the output of your `console.log`, you have a few different options:

- Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
- Open `Console.app` and look for the sketch logs
- Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file

Skpm provides a convenient way to do the latter:

```bash
skpm log
```

The `-f` option causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input

### Workflow

- Clone the repo
- Use `yarn build` to compile any changes. The plugin is built into the package's root directory.
- Double click the plugin to install it in Sketch.
- With Sketch in focus, from the toolbar select Plugins -> Manage Plugins. From there you will be able to toggle the plugin on and off and make sure it was installed.

### Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

You will need to specify a `repository` in the `package.json`:

```diff
...
+ "repository" : {
+   "type": "git",
+   "url": "git+https://github.com/ORG/NAME.git"
+  }
...
```
