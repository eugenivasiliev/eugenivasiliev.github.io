
function openSection(id) {
    var projects = document.getElementById("Projects");
    var projectsBtn = document.getElementById("ProjectsButton");
    projects.style.maxHeight = (id === "Projects") ? "5000px" : "0px";
    projectsBtn.style.borderBottom = (id === "Projects") ? "5px solid purple" : "0px";
    projectsBtn.firstElementChild.style.fontWeight = (id === "Projects") ? "bold" : "normal";

    var education = document.getElementById("Education");
    var educationBtn = document.getElementById("EducationButton"); 
    education.style.maxHeight = (id === "Education") ? "5000px" : "0px";
    educationBtn.style.borderBottom = (id === "Education") ? "5px solid purple" : "0px";
    educationBtn.firstElementChild.style.fontWeight = (id === "Education") ? "bold" : "normal";

    var essays = document.getElementById("Essays");
    var essaysBtn = document.getElementById("EssaysButton");
    essays.style.maxHeight = (id === "Essays") ? "5000px" : "0px";
    essaysBtn.style.borderBottom = (id === "Essays") ? "5px solid purple" : "0px";
    essaysBtn.firstElementChild.style.fontWeight = (id === "Essays") ? "bold" : "normal";
}