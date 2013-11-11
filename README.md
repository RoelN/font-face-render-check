# @Font-face render check

Detect if @font-face is supported by actually trying to render a test icon. This avoids false positives given by Internet Explorer when downloading fonts is disabled in the security settings.

Works on modern browsers. IE8 and below are not yet supported by this check.

Inspired and partly based on [the solution by Paul Irish](http://www.paulirish.com/2009/font-face-feature-detection/).

## The super small font file

For this check I need a TTF webfont with just one single glyph. I tried to get the smallest possible file by following these steps:

1. Produce an SVG file with a 10:1 rectangle
2. Create a font set via Icomoon.io. I set the glyph to the space character as this is a required character anyway, so we'll actually have one single glyph in the font.
3. I remove all excess TTF metadata, like version, fontname etc. so only the bare minimum is left.

The resulting file size is 784 bytes. Pretty sweet!
