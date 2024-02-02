document.addEventListener("DOMContentLoaded", init())

function init (){
    if (window.location.pathname.includes('index.html')) {
        toggleMenu()
        progressbar()
        typingMethod()
    }
}

function toggleMenu() {
    let menu = document.querySelector("#menu")
    let header = document.querySelector('header')
    menu.addEventListener("click", () => {
        header.classList.toggle('active')
        menu.classList.toggle('fa-times')
    })
    menu.onscroll = () => {
        header.classList.remove('active')
        menu.classList.remove('fa-times')
    }
    
}

function typingMethod () {
    var typed = new Typed(".text", {
        strings: ['Burden to the group', 'burden to the family', 'financially'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    var about = new Typed('#typed-text', {
        strings: ["student", "complainer", "lazy person", "demanding person"],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    });
}

function progressbar () {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach((progress) => {
        const percentage = parseInt(progress.querySelector('span').innerText, 10);
        const progressBar = progress.querySelector('.bar span');
        progressBar.style.width = `${percentage}%`;
    }
    )
}
// function doPost(e) {
//     var data = JSON.parse(e.postData.contents);
  
//     var recipientEmail = "alvaranalfren1@gmail.com"; // Replace with your Gmail address
  
//     var subject = "New Form Submission";
//     var body = "Name: " + data.name + "\nEmail: " + data.email + "\nNumber: " + data.number + "\nMessage: " + data.message;
  
//     MailApp.sendEmail({
//       to: recipientEmail,
//       subject: subject,
//       body: body,
//     });
  
//     return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
// }
  