const toggle = () =>{
    const btn = document.querySelector('#close-toggle');
    btn.addEventListener('click', () => {
        console.log("clicked")
        const pane = document.querySelector('nav');
        pane.classList.toggle("hide")
    });
}
function setCodeUrl() {
    document.getElementById("short-link").submit();
    document.getElementById("url").value = window.location.href;
}
function copyURL() {
    var link = window.location.host + `/#` + window.location.hash.slice(1);
    console.log(link)
    navigator.clipboard.writeText(link)
    var text = "Link copied to clipboard!"
    snackbar(text)
}
function duplicate() {
    var link = `new#` + window.location.hash.slice(1);
    console.log(link)
    window.open(link);
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
if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
document.addEventListener("DOMContentLoaded", function() {
    toggle()
});