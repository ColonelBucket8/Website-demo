const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!!!");
}

function scream() {
    console.log("AAAAAAHHHHH");
    console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked me')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!")
})

function twist() {
    console.log("TWIST")
}

function shout() {
    console.log("SHOUT")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = shout;
// tasButton.onclick = twist;

tasButton.addEventListener('click', twist, { once: true });
tasButton.addEventListener('click', shout);