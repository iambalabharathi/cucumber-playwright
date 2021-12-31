const cucumberJunitConvert = require('cucumber-junit-convert');

const args = process.argv;

const options = {
  inputJsonFile: 'reports/report.json',
  outputXmlFile: `reports/${args[2]}.xml`,
};

cucumberJunitConvert.convert(options);
