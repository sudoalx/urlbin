/**
 * This code runs on the /new route to generate a URL from the textarea
 */

api = apiVersions[LATEST_API_VERSION]



/***
 * Helper functions
 ***/

/* Return the BIN string for the page */
function getBin(data) {
  // Generate an HTML page from the contents of each <textarea>
  var pageData =
`${data["code"]}`;

  return pageData;
}


/***
 * Button press functions
 ***/


/* Set the TinyUrl form hidden 'url' field to the view URL */
function setViewUrl() {
  var data = {
    "code" : document.getElementById("new-code").value
  };

  var binText = getBin(data);

	// Update the URL for the "Short Link" button
  document.getElementById("url").value = api.getViewLink(binText);
}


/* Set the TinyUrl form hidden 'url' field to the code URL */
function setCodeUrl() {
  document.getElementById("url").value = window.location.href;
}


/* Show a prompt with the HTML page data so the user can copy the code */
function showCopyCodePrompt() {
  var data = {
    "code" : document.getElementById("new-code").value
  };

  var binText = getBin(data);

  window.prompt("Copy to clipboard: ", binText)
}


/* Hide and show buttons based on checkbox state */
function hideButtons(box) {
  let buttons = document.querySelectorAll("button");
  if (box.checked) {
    buttons.forEach((button) => button.style.display = "none");
  } else {
    buttons.forEach((button) => button.style.display = "block");
  }
}



/***
 * Main procedure functions
 ***/

/* Run once when the page is loaded */
function initialize() {
  // Get page data from the URL and load it into the boxes
  if (window.location.hash) {
    var encoded = window.location.hash.slice(1);
    var json = b64.decode(encoded);
    var data = JSON.parse(json);

    document.getElementById("new-code").value = data["code"];
  }

  update();
}

/* Run each time a key is pressed on a text box */
function update() {
  var data = {
    "code" : document.getElementById("new-code").value
  };
  console.log(data)

  var binText = getBin(data);

  // Save encoded page data to the URL
  window.location.hash = "#" + b64.encode(JSON.stringify(data));

  // Update the URL for the "Get Link" button
  document.getElementById("getLinkLink").href = api.getViewLink(binText);
  console.log(document.getElementById("getLinkLink"))

  // Update the download link
  document.getElementById("downloadFile").href = `data:text/plain,${binText}`
}