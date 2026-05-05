
function openSection(id) {
    var projects = document.getElementById("Projects");
    var projectsBtn = document.getElementById("ProjectsButton");    
    projects.style.height = (id === "Projects") ? "1000px" : "0px";
    projectsBtn.style.borderBottom = (id === "Projects") ? "5px solid purple" : "0px";
    projectsBtn.firstElementChild.style.fontWeight = (id === "Projects") ? "bold" : "normal";

    var education = document.getElementById("Education");
    var educationBtn = document.getElementById("EducationButton"); 
    education.style.height = (id === "Education") ? "1000px" : "0px";
    educationBtn.style.borderBottom = (id === "Education") ? "5px solid purple" : "0px";
    educationBtn.firstElementChild.style.fontWeight = (id === "Education") ? "bold" : "normal";

    var essays = document.getElementById("Essays");
    var essaysBtn = document.getElementById("EssaysButton");
    essays.style.height = (id === "Essays") ? "1000px" : "0px";
    essaysBtn.style.borderBottom = (id === "Essays") ? "5px solid purple" : "0px";
    essaysBtn.firstElementChild.style.fontWeight = (id === "Essays") ? "bold" : "normal";

    var libraries = document.getElementById("Libraries");
    var librariesBtn = document.getElementById("LibrariesButton");
    libraries.style.height = (id === "Libraries") ? "1000px" : "0px";
    librariesBtn.style.borderBottom = (id === "Libraries") ? "5px solid purple" : "0px";
    librariesBtn.firstElementChild.style.fontWeight = (id === "Libraries") ? "bold" : "normal";
}