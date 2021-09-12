const body = document.getElementsByTagName("body")[0];
const sel = document.getElementById("sel");

function colorchenge(man) {
    if (man != "") {
        body.style.backgroundColor = man;
    }
}

function showp(i) {
    // console.log(i.nextSibling)
    let a = i.nextElementSibling;
    a.classList.toggle("active");
}