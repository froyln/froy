const froyImg = document.getElementById("froyImg");
    
froyImg.addEventListener("mouseover", () => {
    froyImg.src = "logos/lentes.png"; // cambia esta ruta a la nueva imagen
});

froyImg.addEventListener("mouseout", () => {
    froyImg.src = "logos/froycaricatura.png"; // imagen original
});

let vermasboton = document.getElementById('vermasbotonid');

let verTexto = document.getElementById('ver-mas-publicaciones');

vermasboton.addEventListener('click', toggle);

function toggle() {
    verTexto.classList.toggle('show');
    if(verTexto.classList.contains('show')){
        vermasboton.innerHTML = "Ver Menos"
    }
    else{
        vermasboton.innerHTML = "Ver Mas"
    }
}

let imagenes_publicacion = document.getElementsByClassName('imagen-publicacion');

for (let i = 0; i < imagenes_publicacion.length; i++) {
    imagenes_publicacion[i].addEventListener('click', function () {
        old_img = i;
        this.classList.toggle('imagen-publicacion-expandir');
        // console.log("La imagen " + imagenes_publicacion[i].lookupNamespaceURI + " cambio de estado.");
    });
}      