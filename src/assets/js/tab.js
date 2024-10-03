document.addEventListener("DOMContentLoaded", function () {

    const facilitiesLink = document.getElementById("facilities-link");
    const evacuationLink = document.getElementById("evacuation-link");

    const facilitiesSection = document.getElementById("facilities");
    const evacuationSection = document.getElementById("evacuation");

    facilitiesLink.addEventListener("click", function (e) {
        e.preventDefault();
        facilitiesLink.style.display = "block";
        evacuationLink.style.display = "none";
    });

    evacuationLink.addEventListener("click", function (e) {
        e.preventDefault();
        facilitiesLink.style.display = "block";
        evacuationLink.style.display = "none";
    });
});