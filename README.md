Work in progress: detect if @font-face is supported

# Smallest TTF

For this check I need a webfont with just one single glyph. I tried to get the smallest possible TTF font by following these steps:

1. Produce an SVG file with a 10:1 rectangle
2. Create a font set via Icomoon.io. I set the glyph to "space" as this is a required character anyway, so we don't take up extra space.
3. I remove all excess TTF metadata, like version, fontname etc. so only the bare minimum is left.

The resulting file size is 784 bytes. Pretty sweet!
