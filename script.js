function toggleMenu() {
    let navbar = document.getElementById("navbar");
    let menu = document.getElementById("menu");

    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        navbar.style.display = "flex";
        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
}
window.addEventListener("resize",function(){
    let navbar = document.getElementById("navbar");
    let menu = document.getElementById("menu");
    if(window.innerWidth>500){
        navbar.style.display="";
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
})

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds=String(now.getSeconds()).padStart(2,"0");
    const day=String(now.getDay());
    const arr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    document.getElementById("time").textContent =
        `${hours}:${minutes}`;
    document.getElementById("ampm").textContent = ampm;
    document.getElementById("date").textContent =
        now.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric"
        });
    document.getElementById("terminal-date").textContent =`${arr[day]} ${hours}:${minutes}:${seconds}`
}

updateClock();
setInterval(updateClock, 30000);

const greetbox = document.getElementById("greet");
const hello = document.getElementById("hello");
let interval;
greetbox.addEventListener("mouseenter", () => {
    let count = 1;

    clearInterval(interval);

    interval = setInterval(() => {
        hello.textContent = "Hell" + "o".repeat(count) + "!";
        count++;

        if (count > 8) {
            clearInterval(interval);
        }
    }, 25);
});

greetbox.addEventListener("mouseleave", () => {
    clearInterval(interval);
    hello.textContent = "Hello!";
});

const heroName = document.querySelector(".hero-name");
const hero = document.querySelector(".hero");
const line1=document.querySelector(".line1");
const line2=document.querySelector(".line2");
line1.addEventListener("mouseenter", () => {
    line1.style.letterSpacing = "15px";
});

line1.addEventListener("mouseleave", () => {
    line1.style.letterSpacing = "5px";
});
line2.addEventListener("mouseenter", () => {
    line2.style.letterSpacing = "15px";
});

line2.addEventListener("mouseleave", () => {
    line2.style.letterSpacing = "5px";
});
hero.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);
    heroName.style.transform = `
        perspective(1500px)
        rotateX(${-y * 40}deg)
        rotateY(${x * 40}deg)
        scale3d(1.05,1.05,1.05)
    `;
});
hero.addEventListener("mouseleave", () => {
    heroName.style.transform = `
        perspective(1500px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1,1,1)
    `;
});
const surname = document.getElementById("surname");

const names = [
    "PINNAKA",   // English
    "పిన్నాక",   // Telugu
    "पिन्नाका"   // Hindi
];

let index = 0;

setInterval(() => {

    surname.classList.add("fade-out");

    setTimeout(() => {

        index = (index + 1) % names.length;
        surname.textContent = names[index];

        surname.classList.remove("fade-out");

    }, 500);

}, 2500);



