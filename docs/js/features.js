window.addEventListener("load", featureshandler, true);
function featureshandler(){
    let params = new URL(document.location).searchParams;
    let game = params.get("game");

    let imageIndex = 1
    let maxIndex = 4
    let mainUrl = "assets/Lolhax/Doors"
    let extension = ".png"

    if (game == "doors"){
        imageIndex = 1
        maxIndex = 4
        mainUrl = "assets/Lolhax/Doors"
        extension = ".png"
    }

    if (game == "michaels-zombies"){
        imageIndex = 1
        maxIndex = 1
        mainUrl = "assets/Lolhax/Michael's Zombies/"
        extension = ".png"
    }


    let dropdown = document.querySelector('#lolhax-features');
    
    if (game != null) {
        dropdown.value = game;
    }
    dropdown.addEventListener('change', function() {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        window.location.href = document.location.origin + document.location.pathname +"?game="+selectedOption.value;
    });
    
    let forward_btn = document.querySelector("#forward_btn");
    let back_btn = document.querySelector("#back_btn");
    let image = document.querySelector("#lh-display");

    image.src = mainUrl + "/" + imageIndex + extension;

    if (imageIndex == maxIndex) {
        forward_btn.remove();
        back_btn.remove();
    }

    forward_btn.onclick = function() {
        imageIndex = imageIndex + 1;
        if (imageIndex > maxIndex) imageIndex = 1;
        image.src = mainUrl + "/" + imageIndex + extension;
    };

    back_btn.onclick = function() {
        imageIndex = imageIndex - 1;
        if (imageIndex < 1) imageIndex = maxIndex;
        image.src = mainUrl + "/" + imageIndex + extension;
    };
}