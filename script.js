
var sections = ["Projects", "Education", "Essays"];
var buttons = ["ProjectsButton", "EducationButton", "EssaysButton"];

function openSection(id) {
    for(let i = 0; i < 3; i++) {
	var section = document.getElementById(sections[i]);
	section.style.visibility = "hidden";
	section.style.height = "0px";
	section.style.transition = "max-height 0s";
	section.style.maxHeight = "0px";
	var button = document.getElementById(buttons[i]);
	button.style.borderBottom = "0px";
	button.style.fontWeight = "normal";
    }

    var section = document.getElementById(sections[id]);
    section.style.visibility = "visible";
    section.style.height = "100%";
    section.style.transition = "max-height 1s";
    section.style.maxHeight = "5000px";
    section.parentNode.insertBefore(section, section.parentNode.firstChild);
    var button = document.getElementById(buttons[id]);
    button.style.borderBottom = "5px solid purple";
    button.style.fontWeight = "bold";
}
