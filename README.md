# cucumber-playwright

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

## **What's inside**

- Typescript setup for writing steps with eslint/typescript and prettier
- Launching of Playwright browser before running all tests
- Launching new context and page for each scenario
- Running feature with video recording option
- Report generated with last good image attached
- Utilies function to help you with writing steps
- VScode configuration to debug a single feature or an only scenario (run when located on the feature file)

## **Kudos 👏🏼**

This repository is based on the [cucumber-typescript-starter](https://github.com/Tallyb/cucumber-playwright) repo.

## **Debugging Features**

### From CLI

- `npm run debug` - headful mode with APIs enables both APIs and debug options
- `npm run api` - headless mode with debug apis
- `npm run video` - headless mode vith video

## **In Visual Studio Code**

- Open the feature
- Select the debug options in the VSCode debugger
- Set breakpoints in the code

To stop the feature, you can add the `Then debug` step inside your feature. It will stop your debugger.
