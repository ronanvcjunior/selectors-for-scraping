const needle = require("needle");
const fs = require("fs");
const cheerio = require("cheerio");

async function selectorElement() {
  const response = await needle(
      "get", 
      "https://reactnativetutorial.net/css-selectors/", 
      {decode_response: true}
    );

  if (response.statusCode === 200) {
    fs.writeFileSync("./test.html", response.body);
    const $ = cheerio.load(response.body);
    const theText = $("h1").text();
    console.log(theText);
  } else {
    console.error(`Request failed with status code ${response.statusCode}`);
  }
}

async function selectorMultipleElements() {
  const response = await needle(
      "get", 
      "https://reactnativetutorial.net/css-selectors/lesson2.html", 
      {decode_response: true}
    );

  if (response.statusCode === 200) {
    fs.writeFileSync("./test.html", response.body);
    const $ = cheerio.load(response.body);
    $("h2").each((index, element) => {
      console.log($(element).text());
    });
  } else {
    console.error(`Request failed with status code ${response.statusCode}`);
  }
}

async function selectorID() {
  const response = await needle(
      "get", 
      "https://reactnativetutorial.net/css-selectors/lesson3.html", 
      {decode_response: true}
    );

  if (response.statusCode === 200) {
    fs.writeFileSync("./test.html", response.body);
    const $ = cheerio.load(response.body);
    const theText = $("#red").text()
    console.log(theText);
  } else {
    console.error(`Request failed with status code ${response.statusCode}`);
  }
}

async function selectorMultipleID() {
  const response = await needle(
      "get", 
      "https://reactnativetutorial.net/css-selectors/lesson4.html", 
      {decode_response: true}
    );

  if (response.statusCode === 200) {
    fs.writeFileSync("./test.html", response.body);
    const $ = cheerio.load(response.body);
    $("#red").each((index, element) => {
      console.log($(element).text());
    });
  } else {
    console.error(`Request failed with status code ${response.statusCode}`);
  }
}

async function selectorClass() {
  const response = await needle(
      "get", 
      "https://reactnativetutorial.net/css-selectors/lesson5.html", 
      {decode_response: true}
    );

  if (response.statusCode === 200) {
    fs.writeFileSync("./test.html", response.body);
    const $ = cheerio.load(response.body);
    $(".red").each((index, element) => {
      console.log($(element).text());
    });
  } else {
    console.error(`Request failed with status code ${response.statusCode}`);
  }
}

async function selectorAttribute() {
  const response = await needle(
      "get", 
      "https://reactnativetutorial.net/css-selectors/lesson6.html", 
      {decode_response: true}
    );

  if (response.statusCode === 200) {
    fs.writeFileSync("./test.html", response.body);
    const $ = cheerio.load(response.body);
    const theText = $("[data-customer='22293']").text()
    console.log(theText);
  } else {
    console.error(`Request failed with status code ${response.statusCode}`);
  }
}

async function selectorMultipleAttribute() {
  const response = await needle(
      "get", 
      "https://reactnativetutorial.net/css-selectors/lesson6.html", 
      {decode_response: true}
    );

  if (response.statusCode === 200) {
    fs.writeFileSync("./test.html", response.body);
    const $ = cheerio.load(response.body);
    $("[data-customer='22293']").each((index, element) => {
      console.log($(element).text());
    });
  } else {
    console.error(`Request failed with status code ${response.statusCode}`);
  }
}

selectorMultipleAttribute();