/**
 * api.js
 *
 * API For encoding and decoding URL hash objects
 *
 * Created by Jacob Strieb
 * July 2020
 */


/*******************************************************************************
 * Global Variables
 ******************************************************************************/

const LATEST_API_VERSION = "0.2.0";

var apiVersions = {};

/*******************************************************************************
 * API Version 0.2.0 (Latest)
 ******************************************************************************/

apiVersions["0.2.0"] = {

  VERSION: "0.2.0",

  /* Return a link to view the page */
  getViewLink: function (pageData) {
    var urlData = pageData;

    const hashObject = b64.encode(JSON.stringify(urlData));
    return window.location.protocol + window.location.hostname + ((location.port != '')? ":" + location.port : "") + `/#${hashObject}`;
  },

  /* Return the page data from the object */
  decode: function (urlData) {
    return urlData.body;
  },

}