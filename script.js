// Open Sidebar
function openMenu() {
    document.getElementById("sidebar").style.left = "0";
}

// Close Sidebar
function closeMenu() {
    document.getElementById("sidebar").style.left = "-300px";
}

// Gallery Upload Preview
function previewImage(event) {
    const image = document.getElementById("galleryPreview");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = "block";
}

// Admission Selection
function showShift() {
    let course = document.getElementById("course").value;
    let shift = document.getElementById("shift").value;

    document.getElementById("result").innerHTML =
        "Selected Course: <b>" + course +
        "</b><br>Shift: <b>" + shift + "</b>";
}
