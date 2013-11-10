var isFontFaceSupported = (function(){

    var doc = document,
        body = doc.body || doc.documentElement.appendChild(doc.createElement("fontface")),
        tempElm = doc.createElement("span"),
        tempStyle = doc.createElement("style"),
        iconRatio;

    var otfBase64 = "AAEAAAALAIAAAwAwT1MvMg6v/SkAAAC8AAAAYGNtYXDf7xCeAAABHAAAADxnYXNwAAAAEAAAAVgAAAAIZ2x5ZkVlV2AAAAFgAAAANGhlYWQkZSmBAAABlAAAADZoaGVhK8InxAAAAcwAAAAkaG10eCoAAAAAAAHwAAAADGxvY2EACgAaAAAB/AAAAAhtYXhwAAUABwAAAgQAAAAgbmFtZUQXtNYAAAIkAAABOXBvc3QAAwAAAAADYAAAACAAAwQAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAACDv/wPA/8D/wAPAAEAAAAAAAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACgAAAAGAAQAAQACACDv////AAAAIO//////4RADAAEAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAP/AKAADwAAEAAATIREhEQAoANgAA8D8AAQAAAAAAQAAAAEAAFmLTKJfDzz1AAsEAAAAAADOovKCAAAAAM6i8oIAAP/AKAADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAoAAAAAAAoAAABAAAAAAAAAAAAAAAAAAAAAwAAAAACAAAAKAAAAAAAAAAACgAaAAEAAAADAAUAAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAOAAAAAQAAAAAAAgAOAEcAAQAAAAAAAwAOACQAAQAAAAAABAAOAFUAAQAAAAAABQAWAA4AAQAAAAAABgAHADIAAQAAAAAACgAoAGMAAwABBAkAAQAOAAAAAwABBAkAAgAOAEcAAwABBAkAAwAOACQAAwABBAkABAAOAFUAAwABBAkABQAWAA4AAwABBAkABgAOADkAAwABBAkACgAoAGMAaQBjAG8AbQBvAG8AbgBWAGUAcgBzAGkAbwBuACAAMAAuADAAaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AbgBSAGUAZwB1AGwAYQByAGkAYwBvAG0AbwBvAG4ARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";

    tempStyle.textContent = "@font-face{font-family:testfont;src:url(data:font/opentype;base64,"+otfBase64+")}";
    doc.getElementsByTagName('head')[0].appendChild(tempStyle);

    // Put test icon in container to see if it renders
    tempElm.innerHTML = "&#xefff;";
    tempElm.setAttribute("style", "font-family:testfont;");
    body.appendChild(tempElm);
    // setTimeout(function(){
        iconRatio = tempElm.offsetWidth / tempElm.offsetHeight;
        console.log(iconRatio);
    // }, 100);
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