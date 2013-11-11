# @Font-face render check

Detect if @font-face is supported by actually trying to render a test icon. This avoids false positives given by Internet Explorer when downloading fonts is disabled in the security settings.

Works on modern browsers. IE8 and below are not yet supported by this check.

Inspired and partly based on [the solution by Paul Irish](http://www.paulirish.com/2009/font-face-feature-detection/).

## Usage

Because Webkit and Gecko load data-uris asynchronously, there is a small delay before @font-face support can be determined. There are two ways to call the check:

1. Add a class to the HTML tag

If you call <code>fontFaceCheck.support();</code>, either a <code>fontfacerender</code> or a <code>no-fontfacerender</code> class will be added to the HTML tag

2. Catch the result in a variable

Use a callback function to grab the test result: <code>fontFaceCheck.support( function(isSupported) { alert(isSupported) } );</code>

## The super small font file

For this check I needed a TTF webfont with just one single glyph. I tried to get the smallest possible file by following these steps:

1. Produce an SVG file with a 10:1 rectangle
2. Create a font set via Icomoon.io. I originally set the glyph to the space character as this is a required character anyway, so we'd actually have one single glyph in the font. But this glyph doesn't render in my Chrome on Windows 7 (it does on Linux Mint), so I use another font where the test icon is set to the dash.
3. I remove all excess TTF metadata, like version, fontname etc. so only the bare minimum is left.

The resulting file size is 836 bytes. (The space-only one is 784 bytes.) Pretty sweet!
