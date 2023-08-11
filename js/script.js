const element= document.getElementById("my-button");
element.addEventListener("click",themeable );

function themeable() {
    const body = document.querySelector("body");

    if(body.classList.contains("default")){
           body.classList.remove("default");
           body.classList.add("green-theme");
    } else if(body.classList.contains("green-theme")){
           body.classList.remove("green-theme");
           body.classList.add("blue-theme");
    }
    else if(body.classList.contains("blue-theme")){
           body.classList.remove("blue-theme");
           body.classList.add("purple-theme");
    }
    else {
           body.classList.remove("purple-theme");
           body.classList.add("default");
    }
}