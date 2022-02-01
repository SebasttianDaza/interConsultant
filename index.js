
const btn = document.getElementById('btn');
const div = document.querySelector("#navegation .list");
const icon = document.getElementById("icon");

btn.addEventListener('click', () => {
    div.classList.toggle("show");
    if (icon.classList.contains("bi-list")) {
      icon.classList.remove("bi-list");
      icon.classList.add("bi-list-nested");
    } else {
        icon.classList.remove("bi-list-nested");
        icon.classList.add("bi-list");
    }
})

