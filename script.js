// Open Sidebar
function openMenu() {
    const sidebar =
        document.getElementById("sidebar");
    sidebar.style.left = "0px";
    sidebar.style.display = "block";
}
function closeMenu() {
    const sidebar =
        document.getElementById("sidebar");
    sidebar.style.left = "-300px";
}

// Close Sidebar

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
document.getElementById("admissionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_bgd6rvr", "template_02t7ckn", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value
    }).then(function() {
        alert("Admission Request Sent Successfully!");
    }).catch(function(error) {
        alert("Failed to Send!");
        console.log(error);
    });
});
