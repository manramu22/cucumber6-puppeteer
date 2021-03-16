const reporter = require('cucumber-html-reporter')
const cur_date = (new Date()).toISOString().slice(0,19).replace(/-/g,"_").replace("T", "_").replace(/:/g,"_")
const reportName = "Cucumber6_"+cur_date+".html"
const options = {
    theme: 'hierarchy',
    jsonFile: 'cucumber_report.json',
    output: 'results/'+reportName,
    reportSuiteAsScenarios: true,
    launchReport: false,
    scenarioTimeStamp: true
}
reporter.generate(options)