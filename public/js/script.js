function copyURL() {
    var option = document.getElementById("linkType").value
    var link = window.location.host + `/#` + window.location.hash.slice(1);
    console.log(link)
    if (option == "full") {
        navigator.clipboard.writeText(link)
        var text = "Link copied to clipboard!"
        snackbar(text)
    } else if (option == "short") {
        shortLink = "http://tinyurl.com/create.php?url=" + link
        console.log(shortLink)
        //window.open(link)
        var text = "Click <a href=" + shortLink + ' target="_blank">here</a>' + " to generate a shortlink."
        snackbar(text)
    }
}
function downloadBIN() {
    snackbar("Downloading...")
}

function snackbar(label) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML = label;
    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}