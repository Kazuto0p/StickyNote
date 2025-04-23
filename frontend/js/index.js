let square = document.getElementById("square1");
let rectangle = document.getElementById("rect1");
let circle = document.getElementById("circle1");
let triangle = document.getElementById("triangle1");
let diamond = document.getElementById("diamond1");
let sec1 = document.querySelector(".sec1");

square.addEventListener("click", () => {
    console.log("Square clicked");
    const note = document.createElement("div");
    note.className = "square";
    note.id = "squ";

    note.addEventListener("click", () => {
        console.log("Square__ clicked");
        showPopup(note);
    });

    sec1.appendChild(note);
});

rectangle.addEventListener("click", () => {
    console.log("Rectangle clicked");
    const note = document.createElement("div");
    note.className = "rectangle";

    note.addEventListener("click", () => {
        console.log("Rectangle__ clicked");
        showPopup(note);
    });

    sec1.appendChild(note);
});

circle.addEventListener("click", () => {
    console.log("Circle clicked");
    const note = document.createElement("div");
    note.className = "circle";

    note.addEventListener("click", () => {
        console.log("Circle__ clicked");
        showPopup(note);
    });
    sec1.appendChild(note);
});

triangle.addEventListener("click", () => {
    console.log("Triangle clicked");
    const note = document.createElement("div");
    note.className = "triangle";

    note.addEventListener("click", () => {
        console.log("Triangle__ clicked");
        showPopup(note);
    });
    sec1.appendChild(note);
});

diamond.addEventListener("click", () => {
    console.log("Diamond clicked");
    const note = document.createElement("div");
    note.className = "diamond";

    note.addEventListener("click", () => {
        console.log("Diamond__ clicked");
        showPopup(note);
    });

    sec1.appendChild(note);
});

function showPopup(targetNote) {
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    const popup = document.createElement("div");
    popup.className = "popup-box";

    popup.innerHTML = `
        <h3>Edit Note</h3>
        <input type="text" placeholder="Enter heading" class="popup-heading"><br>
        <textarea placeholder="Enter description" class="popup-desc"></textarea><br>
        <button class="popup-submit">Submit</button>
        <button class="popup-cancel">Cancel</button>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    popup.querySelector(".popup-submit").addEventListener("click", () => {
        const heading = popup.querySelector(".popup-heading").value;
        const desc = popup.querySelector(".popup-desc").value;
        // Wrap content in .note-content for all shapes
        targetNote.innerHTML = `<div class="note-content"><h4>${heading}</h4><p>${desc}</p></div>`;
        document.body.removeChild(overlay);
    });

    popup.querySelector(".popup-cancel").addEventListener("click", () => {
        document.body.removeChild(overlay);
    });
}