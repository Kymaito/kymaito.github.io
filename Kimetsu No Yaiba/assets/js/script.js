const body = document.body;

const bg = document.getElementById("bg")

const allBg = [
    "./assets/img/bg01.png",
    "./assets/img/bg02.png",
    "./assets/img/bg03.png",
]

    let currentIndex = 0;

    setInterval(() => {
        let currentBg  = allBg[currentIndex];

        bg.style.background = `url(${currentBg})`;
        bg.style.backgroundSize = "cover";
        bg.style.backgroundRepeat = "no-repeat";
        bg.style.backgroundPosition = "center";

        setTimeout(() => {
            bg.style.opacity = 1;
        }, 1000)

        currentIndex =+ (currentIndex + 1 ) % allBg.length;
    }, 5000)

    let whois = document.getElementById("whois");
    let whatisit = document.getElementById("whatisit");
    let box = document.getElementById("right");
    let box2 = document.getElementById("left");

    whois.addEventListener("click", () => {
            box.style.display = "flex"
    })

    whatisit.addEventListener("click", () => {
            box2.style.display = "flex"
    })