function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Hello Apps Script')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function myFunction() {
  return 'Hello from Apps Script';
}

