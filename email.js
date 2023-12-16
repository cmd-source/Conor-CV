function sendMail(contactForm) {
    emailjs.send("service_xup6ame","conor", {
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
    alert("Thanks for your email, well get back to you shortly")
    window.location.href = 'http://www.powerevolutionpro.com'; // Replace with your homepage URL

    return false;
}

document.getElementById("sub").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMail(contactForm);
    }
})
