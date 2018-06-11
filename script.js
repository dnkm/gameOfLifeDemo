const body = document.querySelector("body");

function createDiv( {text, className, parent} ) {
    let div = document.createElement("div");
    div.innerText = text || "";
    div.className = className || "";
    if (!parent)
        parent = body;
    parent.appendChild(div);
    return div;
}


createDiv(
    {text: "Game of Life v3", className: "heading"}
);

createDiv({text: "test"});

let grid = createDiv({className: "grid"});

for(let i=0; i<100; i++) {
    let cell = createDiv({className:"cell", parent: grid})
    cell.addEventListener('click', function() {
        cell.classList.add("clicked");
    })
}