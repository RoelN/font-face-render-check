# @Font-face render check

Detect if @font-face is supported by actually trying to render a test icon. This avoids false positives given by Internet Explorer when downloading fonts is disabled in the security settings. Use this if you want to be absolutely sure @font-face is supported, regardless of what the browser tells you.

Works on all modern desktop browsers, and even antique IEs. IE8 and below use an external font file, the rest don't need an additional HTTP request.

Inspired and partly based on [the solution by Paul Irish](http://www.paulirish.com/2009/font-face-feature-detection/).

Read more about it [here](http://pixelambacht.nl/2013/font-face-render-check/).

## Usage

Because Webkit and Gecko load data-uris asynchronously, there is a small delay before @font-face support can be determined. There are two ways to use the check:

### Let it add a class to the HTML tag...

If you call <code>fontFaceCheck.support();</code>, either a <code>fontfacerender</code> or a <code>no-fontfacerender</code> class will be added to the HTML tag.

### ...or catch the result in a variable

Use a callback function to grab the test result:

<code>fontFaceCheck.support( function(isSupported) { alert(isSupported) } );</code>