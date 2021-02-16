$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/nitip/OneDrive/Desktop/Selenium/Guru99/src/main/java/Features/login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add new customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC2"
    }
  ]
});
formatter.step({
  "name": "click on New Customer",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_New_Customer()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.findElement(org.openqa.selenium.By)\" because \"this.driver\" is null\r\n\tat StepDefinitions.OrangeCRMSteps.click_on_New_Customer(OrangeCRMSteps.java:57)\r\n\tat ✽.click on New Customer(file:/C:/Users/nitip/OneDrive/Desktop/Selenium/Guru99/src/main/java/Features/login.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on customer name",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_customer_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on gender",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_gender()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on date of birth",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_date_of_birth()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on address",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on city page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_city_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on state page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_state_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on PIN page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_PIN_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on telephone number",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_telephone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Email",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_Email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on submit",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.click_on_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate the outcomes2",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeCRMSteps.validate_the_outcomes2()"
});
formatter.result({
  "status": "skipped"
});
});