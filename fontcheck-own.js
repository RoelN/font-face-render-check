var isFontFaceSupported = (function(){

    var doc = document,
        body = doc.body || doc.documentElement.appendChild(doc.createElement("fontface")),
        tempElm = doc.createElement("span"),
        tempStyle = doc.createElement("style"),
        iconRatio;

    tempStyle.textContent = "@font-face{font-family:pixelambacht;src:url(data:font/opentype;base64,AAEAAAALAIAAAwAwT1MvMg6vDUoAAAC8AAAAYGNtYXAAFQDYAAABHAAAAFRnYXNw//8ABAAAAXAAAAAIZ2x5ZtsjclUAAAF4AAAALGhlYWQkQ2GxAAABpAAAADZoaGVhK8InwwAAAdwAAAAkaG10eCgAAAAAAAIAAAAACGxvY2EAFgAAAAACCAAAAAZtYXhwAAQAEwAAAhAAAAAgbmFtZf0RHiMAAAIwAAAAwHBvc3QAAwABAAAC8AAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAACAAIAPA/8D/wAPAAEAAAAAAAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAANAAEACAAAAAEAAQAAQAAACD//wAAACD////hAAEAAAAAAAQAIAAAAAQABAABAAAAIP//AAAAIP///+EAAQAAAAAAAAAB//8AAwABAAD/wCgAA8AABAAMuAAAjbgABI24Af+FESERIREoANgAA8D8AAQAAAAAAAEAAAABAACAAdOXXw889QALBAAAAAAAzqZ6AgAAAADOfaMyAAD/wCgAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAAKAAAAAAAKAAAAQAAAAAAAAAAAAAAAAAAAAIAAAAAKAAAAAAAAAAAFgAAAAEAAAACAAUAAQAAAAAAAgAAAAAAAAAAAAAADAAAAAAAAAAOALAAAQAAAAAAAQAAAAAAAQAAAAAAAgAAAAAAAQAAAAAAAwAAAAAAAQAAAAAABAAAAAAAAQAAAAAABQAAAAAAAQAAAAAABgAAAAAAAQAAAAAACgAAAAAAAwABBAkAAQACAAIAAwABBAkAAgACAAYAAwABBAkAAwACAAoAAwABBAkABAACAA4AAwABBAkABQAAAAAAAwABBAkABgAAAAAAAwABBAkACgAAAAAAAP7/AHL+/wBv/v8AZf7/AGwAAwAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAA==)}";
    doc.getElementsByTagName('head')[0].appendChild(tempStyle);

    // Put test icon in container to see if it renders
    tempElm.innerText = " ";
    tempElm.setAttribute("style", "font-family:pixelambacht;white-space:pre;");
    body.appendChild(tempElm);
    setTimeout(function(){
        iconRatio = tempElm.offsetWidth / tempElm.offsetHeight;
        console.log(iconRatio);
    }, 100);
    // body.removeChild(tempElm);


    // When font doesn't load, ratio will be less than or equal to 1. When
    // loaded, it will be 10. Check if it's more than 5 to account for
    // possible white space.
    if (iconRatio >= 5)
    {
        return true;
    }
    return false;

})();

console.log( isFontFaceSupported );
