function sendMail(contactForm) {
    emailjs.send("gmail", "conor", {
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
    
}
