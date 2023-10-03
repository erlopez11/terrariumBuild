const plant1 = document.getElementById('plant1');
const plant2 = document.getElementById('plant2');
const plant3 = document.getElementById('plant3');
const plant4 = document.getElementById('plant4');
const plant5 = document.getElementById('plant5');
const plant6 = document.getElementById('plant6');
const plant7 = document.getElementById('plant7');
const plant8 = document.getElementById('plant8');
const plant9 = document.getElementById('plant9');
const plant10 = document.getElementById('plant10');
const plant11 = document.getElementById('plant11');
const plant12 = document.getElementById('plant12');
const plant13 = document.getElementById('plant13');
const plant14 = document.getElementById('plant14');

// Function to Drag Element (Complete)

function dragElement(terrariumElement) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        console.log(pos1, pos2, pos3, pos4);

        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

//Event Listeners for Plant

dragElement(plant1);
dragElement(plant2);
dragElement(plant3);
dragElement(plant4);
dragElement(plant5);
dragElement(plant6);
dragElement(plant7);
dragElement(plant8);
dragElement(plant9);
dragElement(plant10);
dragElement(plant11);
dragElement(plant12);
dragElement(plant13);
dragElement(plant14);