const min = document.querySelector("#min");
const max = document.querySelector("#max");
const minSlider = document.querySelector("#minSlider");
const maxSlider = document.querySelector("#maxSlider");

minSlider.addEventListener("input", setMinSlider);
maxSlider.addEventListener("input", setMaxSlider);
min.addEventListener("input", setMin);
max.addEventListener("input", setMax);

function setMin() {
    if(parseInt(min.value) >= parseInt(maxSlider.value)){
        min.value = parseInt(maxSlider.value)-1;
    }
    minSlider.value = min.value;
}

function setMax() {
    if(parseInt(max.value) <= parseInt(minSlider.value)){
        max.value = parseInt(minSlider.value)+1;
    }
    maxSlider.value = max.value;
}

function setMinSlider() {
    if(parseInt(minSlider.value) >= parseInt(maxSlider.value)){
        minSlider.value = parseInt(maxSlider.value)-1;
    }
    min.value = minSlider.value;
}

function setMaxSlider() {
    if(parseInt(maxSlider.value) <= parseInt(minSlider.value)){
        maxSlider.value = parseInt(minSlider.value)+1;
    }
    max.value = maxSlider.value;
}

setMinSlider();
setMaxSlider();