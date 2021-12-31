# osp-ui-js-framework

A starter repo for writing E2E tests based on Cucumber(7) with Playwright using Typescript.

## **Usage**

Create a repo based on this template and start writing your tests.

## **To Run 🏁**

All tests

```bash
$ npm run test
```

Run a single feature

```bash
npm run test <feature name>
```

## **Browser Options**

By default we will use chromium.

You can define an envrionment variable called `BROWSER` and
set the name of the browser.

Available options: `chromium, firefox, webkit`

```
$ export BROWSER=firefox
$ npm run test
```

## **Reporter**

The last reporter/formatter found on the cucumber-js command-line wins:

```text
--format summary --format @cucumber/pretty-formatter --format cucumber-console-formatter
```

In [cucumber.js](cucumber.js) file, modify the options.

### To check for typescript, linting and gherkin errors

```bash
$ npm run build
```

### To view Steps Usage

```bash
$ npm run steps-usage
```

### To view the html report of the last run

```bash
$ npm run report
```

### To get XML report of last run

```bash
$ npm run report-xml
```

## **What's inside**

- Typescript setup for writing steps with eslint/typescript and prettier
- Launching of Playwright browser before running all tests
- Launching new context and page for each scenario
- Running feature with video recording option
- Report generated with last good image attached
- Utilies function to help you with writing steps
- VScode configuration to debug a single feature or an only scenario (run when located on the feature file)

## **Debugging Features**

### From CLI

- `npm run debug` - headful mode with APIs enables both APIs and debug options
- `npm run api` - headless mode with debug apis
- `npm run video` - headless mode vith video
