let promotion = new Array ("Offer1", "Offer2", "Offer3");
let random = Math.floor(Math.random() * 3);


document.querySelector("video").onended = function changeVideo() {
    const video = document.querySelector("video");
    video.autoplay
    video.innerHTML = "<source src=\"https://courses.cs.cityu.edu.hk/cs2204/example/video/nature.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.";
    video.load();
};

timeout(random, promotion);

function timeout() {
    setTimeout(function () {
        changeText(random, promotion);
        random = (random + 1) % 2;
        timeout();
    }, 3000);
}

function changeText(index, texts) {
    const text = texts[index];
    document.querySelector("#promotionText").innerHTML = text;
}



function checkSubmission(form) {
    var alertMessage = "";
    if (form["date"].value === "") {
        alertMessage = "Choose a date. ";
    }
    if (form["time"].value === "") {
        alertMessage += "Choose a time slot. "
    }
    if (form["noGuests"].value === "") {
        alertMessage += "Select a number of guests."
    }
    document.querySelector("#errorMessage").innerHTML = alertMessage;
    if (alertMessage !== "") {
        return false;
    }
    let result = reserve(form["date"].value, form["time"].value, form["noGuests"].value)
    if (result === true) {
        alert("Reservation done. Thank You");
    } else {
        alert("No table is available for the date and time.");
    }
    return false;
}

function reserve(date, time, noGuests) {
    const random = Math.round(Math.random());
    if (random == 0) {
        return true;
    }
    return false;
}