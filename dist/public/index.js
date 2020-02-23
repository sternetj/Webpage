function setDimensions() {

    var height = getHeight(); //Get Height of window
    var width = getWidth(); //Get Width of window

    //set height of image [need to do this differently
    element = document.getElementById('resumeImage');
    element.style.height = (0.70 * (height) + "px");
    element.style.padding = (((0.15 * (height)) / 2) + "px 0px " + ((0.15 * (height)) / 2) + "px 0px");
}
function makeStars() {
    (function printMsg() {
        // get background section
        var node = document.getElementById("background");

        // create the stars with random locations
        var code = "<div id=\"Stars\">";
        var height = getHeight();
        var numStars = 40;
        for (var i = 1; i < numStars + 1; i++) {
            var y = Math.floor((Math.random() * (height*0.75)) + 0);
            var x = Math.floor((Math.random() * 101) + 0);
            code += "<img class=\"star\" id=\"star" + i + "\" src=\"Images/Star.png\" style=\"position:absolute;z-index:-2;left:" + x + "%;top:" + y + "px;\" alt=\"star\" />";
        }
        code += "</div>"
        // add stars to background
        node.innerHTML += code;

        // create random timing delays for stars so they arent all in sync
        code = "<script>$(document).ready(function () {";
        for (var i = 1; i < numStars + 1; i++) {
            code += "$('#star" + i + "').addClass(\"twinkle\").delay(" + Math.floor((Math.random() * 250) + 0) + ").queue(function (next) {"
        }
        for (var i = 1; i < numStars + 1; i++) {
            code += "});"
        }
        code += "});</sc" + 'ript>';
        document.write(code); // add script to document
    })();
}
function getWidth() {
    var width = 0;
    var body = window.document.body;
    if (window.innerWidth) {
        width = window.innerWidth;
    } else if (body.parentElement.clientWidth) {
        width = body.parentElement.clientWidth;
    } else if (body && body.clientWidth) {
        width = body.clientWidth;
    }
    return width;
}
function getHeight() {
    var height = 0;
    var body = window.document.body;
    if (window.innerHeight) {
        height = window.innerHeight;
    } else if (body.parentElement.clientHeight) {
        height = body.parentElement.clientHeight;
    } else if (body && body.clientHeight) {
        height = body.clientHeight;
    }
    return height;
}
