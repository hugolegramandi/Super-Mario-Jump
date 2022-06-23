const currentLevel = "Level 01"

document.querySelector("#title").textContent = "Super Mario Jump"
document.querySelector("#level").textContent = currentLevel

const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario")
    }, 500);
}

const loopGame = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "")

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `$(pipePosition)px`;

    mario.style.animation = "none"
    mario.style.bottom = `$(marioPosition)px`;

    mario.src = "./assets/images/mario-game-over.png"
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";
    document.querySelector("#title").textContent = "Game Over"
    document.querySelector("#level").textContent = "Recorde: " + currentLevel



    clearInterval(loopGame)

    }

}, 10);

document.addEventListener("keydown", jump)
document.addEventListener("touchstart", jump)