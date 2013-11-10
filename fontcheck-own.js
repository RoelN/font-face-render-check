-     // Needs to run when document has loaded!
-     me.hasIcons = function() {
  -       var tempElm = document.createElement("span"),
  -           iconWidth;
  -
  -       // Put test icon (e999) in container to see if it renders
  -       tempElm.innerHTML = "&#xe999;";
  -       tempElm.id = "has_icons_check";
  -       document.body.appendChild(tempElm);
  -       iconWidth = tempElm.offsetWidth;
  -       document.body.removeChild(tempElm);
  -
  -       // If no icon font, width should be 0 or 1em (20px). With icon fonts it should be 200px.
  -       // This extra wide icon accounts for cross-browser rounding differences in offsetWidth and
  -       // most CTRL+/CTRL- zoom levels.
  -       if (iconWidth >= 100)
  -       {
    -        return true;
    -       }
    -       return false;
}
