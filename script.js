const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {
    const tile = document.querySelectorAll('.tile');

    for (let i = 0; i < tile.length; i++) {
        tile[i].addEventListener("mouseover", () => {
            tile[i].classList.add("hover");
        });
    };
})

function grid(tiles) {
    for (i = 0; i < (tiles * tiles); i++) {
        const div = document.createElement('div');
        div.classList.add('tile');
        div.innerText = (i + 1);
        container.appendChild(div);
    }
}


grid(16);
// hover()
