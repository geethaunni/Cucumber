$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/SkyBlueElementPage.feature");
formatter.feature({
  "line": 3,
  "name": "Sky Blue Background Functinality",
  "description": "",
  "id": "sky-blue-background-functinality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Bluebackgroundpage"
    }
  ]
});
formatter.before({
  "duration": 2629029300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "1 User should be able to change the background color to skyblue",
  "description": "",
  "id": "sky-blue-background-functinality;1-user-should-be-able-to-change-the-background-color-to-skyblue",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "\"Set Skyblue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the button as \"Set Skyblue Background\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set Skyblue Background",
      "offset": 1
    }
  ],
  "location": "StepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 317288800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set Skyblue Background",
      "offset": 26
    }
  ],
  "location": "StepDefinition.i_click_on_the_button_as(String)"
});
formatter.result({
  "duration": 3099714200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 3049180900,
  "status": "passed"
});
formatter.before({
  "duration": 1534508000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "2 User should be able to change the background color to white",
  "description": "",
  "id": "sky-blue-background-functinality;2-user-should-be-able-to-change-the-background-color-to-white",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the button as \"Set White background\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "StepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 55384700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Set White background",
      "offset": 26
    }
  ],
  "location": "StepDefinition.i_click_on_the_button_as(String)"
});
formatter.result({
  "duration": 3102069300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 3049761900,
  "status": "passed"
});
});