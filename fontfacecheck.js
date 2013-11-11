/**
 * fontFaceCheck v0.1
 * Roel Nieskens, November 11, 2013
 *
 * Released under the MIT License. http://www.opensource.org/licenses/mit-license.php
 *
 * http://www.pixelambacht/fontfacecheck
 *
 * Works for IE9+, Chrome 3.0+, Firefox 3.5+, Opera 12+
 *
 * TODO:
 * - Load external EOT for IE8 and older, since they don't support @font-face with data-uri
 *
 * Based on the work by Paul Irish: http://www.paulirish.com/2009/font-face-feature-detection/
 */
var fontFaceCheck = new function() {

    // Check @font-face support by trying to render our test icon
    this.support = function(callback) {
        var doc = document,
            body = doc.body || doc.documentElement.appendChild(doc.createElement("fontface")),
            tempElm = doc.createElement("span"),
            tempStyle = doc.createElement("style"),
            delayTime = 10,
            supported;

        tempStyle.textContent = "@font-face{font-family:pixelambacht;src:url(data:font/truetype;base64,AAEAAAALAIAAAwAwT1MvMghABuMAAAC8AAAAYGNtYXAAlQDaAAABHAAAAGRnYXNw//8ABAAAAYAAAAAIZ2x5Zv8nt3kAAAGIAAAATGhlYWQQRDZ2AAAB1AAAADZoaGVhFeIT5AAAAgwAAAAkaG10eBUAAAAAAAIwAAAADGxvY2EAEAAmAAACPAAAAAhtYXhwAAUAEwAAAkQAAAAgbmFtZf0RHiMAAAJkAAAAwHBvc3QAAwAAAAADJAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAACAALQHg/+D/4AHgACAAAAAAAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAPAAEACgAAAAGAAQAAQACACAALf//AAAAIAAt////4f/VAAEAAAAAAAAABAAoAAAABgAEAAEAAgAgAC3//wAAACAALf///+H/1QABAAAAAAAAAAAAAf//AAMAAQAAAAAAAAAAAAIADLgAAI24AASNuAH/hTE5AQAAAAABAAD/4BQAAeAABAAMuAAAjbgABI24Af+FESERIREUAOwAAeD+AAIAAAAAAAEAAAABAAC9n9JNXw889QALAgAAAAAAzqbp9AAAAADOfgvFAAD/4BQAAeAAAAAIAAIAAAAAAAAAAQAAAeD/4AAAFAAAAAAAFAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAQAAABQAAAAAAAAAABAAJgABAAAAAwAFAAEAAAAAAAIAAAAAAAAAAAAAAAwAAAAAAAAADgCwAAEAAAAAAAEAAAAAAAEAAAAAAAIAAAAAAAEAAAAAAAMAAAAAAAEAAAAAAAQAAAAAAAEAAAAAAAUAAAAAAAEAAAAAAAYAAAAAAAEAAAAAAAoAAAAAAAMAAQQJAAEAAgACAAMAAQQJAAIAAgAGAAMAAQQJAAMAAgAKAAMAAQQJAAQAAgAOAAMAAQQJAAUAAAAAAAMAAQQJAAYAAAAAAAMAAQQJAAoAAAAAAAD+/wBy/v8Ab/7/AGX+/wBsAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=)}";
        doc.getElementsByTagName("head")[0].appendChild(tempStyle);

        tempElm.innerText = "-";
        tempElm.setAttribute("style", "font-family:pixelambacht;position:fixed;visibility:hidden");
        body.appendChild(tempElm);
        // Use timeout because Gecko and Webkit load data-uri font asynchronously :(
        setTimeout(function(){
            supported = (tempElm.offsetWidth / tempElm.offsetHeight) >= 5;
            body.removeChild(tempElm);
            // When font doesn't load, ratio will be less than or equal to 1. When loaded, it will
            // be 10. Check if it's more than 5 to account for white space weirdness.
            if(callback) {
                callback(supported);
            } else  {
                var html = doc.getElementsByTagName("html")[0];
                html.className += supported ? "fontfacerender" : "no-fontfacerender";
            }
        }, delayTime);
    }
}