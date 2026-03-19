// Section toggle function
function showSection(id) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.classList.remove("section-active"));
    sections.forEach(section => section.classList.add("hidden-section"));

    const activeSection = document.getElementById(id);
    activeSection.classList.add("section-active");
    activeSection.classList.remove("hidden-section");
}