function sendMail(contactForm) {
    emailjs.send("gmail", "conor", {
        "from_name": this.name.value,
        "from_email": this.emailaddress.value,
        "project_request": this.projectsummary.value
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
console.log("hello");