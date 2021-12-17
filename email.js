function sendMail(contactForm) {
    emailjs.send("service_9pkej9d","conor", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("success", response);
            },
            function (error) {
                console.log("failed", error);
            }
        );
    alert("Well get back to you shortly")
    return false;
}

document.getElementById("sub").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMail(contactForm);
    }
})
