
const square = document.getElementById("square1");
const rectangle = document.getElementById("rect1");
const circle = document.getElementById("circle1");
const triangle = document.getElementById("triangle1");
const diamond = document.getElementById("diamond1");
const sec1 = document.querySelector(".sec1");

function makeNoteDraggable(note) {
  let currentDraggedNote = null;
  let offsetX = 0, offsetY = 0;

  note.addEventListener("mousedown", (e) => {
    // Prevent dragging from input/textarea/button
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "BUTTON") return;
    currentDraggedNote = note;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    note.style.zIndex = 1000; // Bring to front
  });

  document.addEventListener("mousemove", (e) => {
    if (currentDraggedNote) {
      currentDraggedNote.style.left = e.pageX - offsetX + "px";
      currentDraggedNote.style.top = e.pageY - offsetY + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    if (currentDraggedNote) {
      currentDraggedNote.style.zIndex = 1; // Reset z-index
      currentDraggedNote = null;
    }
  });
}

function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}


function createNote(className) {
  const note = document.createElement("div");
  note.className = className;

  note.style.backgroundColor = getRandomColor();
  // Default content
  const content = document.createElement("div");
  content.className = "note-content";

  const heading = document.createElement("h4");
  heading.textContent = "Heading";

  const desc = document.createElement("p");
  desc.textContent = "Description";

  content.appendChild(heading);
  content.appendChild(desc);
  note.appendChild(content);

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "note-btn note-edit";
  editBtn.addEventListener("click", () => showPopup(note));

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "note-btn note-delete";
  deleteBtn.addEventListener("click", () => sec1.removeChild(note));

  note.appendChild(editBtn);
  note.appendChild(deleteBtn);

  sec1.appendChild(note);
  makeNoteDraggable(note);
}

square.addEventListener("click", () => createNote("square"));
rectangle.addEventListener("click", () => createNote("rectangle"));
circle.addEventListener("click", () => createNote("circle"));
triangle.addEventListener("click", () => createNote("triangle"));
diamond.addEventListener("click", () => createNote("diamond"));

function showPopup(targetNote) {
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";

  const popup = document.createElement("div");
  popup.className = "popup-box";

  // Get current heading and description
  const currentHeading = targetNote.querySelector(".note-content h4").textContent;
  const currentDesc = targetNote.querySelector(".note-content p").textContent;

  popup.innerHTML = `
    <h3>Edit Note</h3>
    <input type="text" placeholder="Enter heading" class="popup-heading" value="${currentHeading}"><br>
    <textarea placeholder="Enter description" class="popup-desc">${currentDesc}</textarea><br>
    <button class="popup-submit">Submit</button>
    <button class="popup-cancel">Cancel</button>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  popup.querySelector(".popup-submit").addEventListener("click", () => {
    const heading = popup.querySelector(".popup-heading").value;
    const desc = popup.querySelector(".popup-desc").value;
    targetNote.querySelector(".note-content h4").textContent = heading;
    targetNote.querySelector(".note-content p").textContent = desc;
    document.body.removeChild(overlay);
  });

  popup.querySelector(".popup-cancel").addEventListener("click", () => {
    document.body.removeChild(overlay);
  });
}