/**************   toggle icon navbar  ********************/

let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/**************   scroll selections active link  ********************/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a ');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        };
    });

    /***************  sticky navbar   ********** */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly > 100);

    /***************  remove toggle icon and navbar when click navbar link  (scroll) ***********/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*********      scroll reveal    *******************/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about , .project-box, .contact form', { origin: 'bottom' });


/********************    load button ********************/
$(document).ready(function(){
    $(".project-box").slice(0, 4).show(); // Show first 3 items
    $("#loadMore").on("click", function(e){
        e.preventDefault();
        $(".project-box:hidden").slice(0, 3).slideDown(); // Show next 3 hidden items
        if($(".project-box:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });
});

/********************    filter ********************/

window.onload = function() {
    showAllImages();
};

function showAllImages() {
    var x = document.getElementsByClassName("image");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "inline-block";
    }
}

function filterSelection(c) {
    var x, y, i, j;
    x = document.getElementsByClassName("image");
    y = document.getElementsByClassName("tab");

    for (j = 0; j < y.length; j++) {
        RemoveClass(y[j], "active");
        if (y[j].className.indexOf(c) > -1) {
            AddClass(y[j], "active");
        }
    }

    if (c == "all") {
        c = "";
    }

    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        x[i].style.display = "none"; // Hide all images
        if (x[i].className.indexOf(c) > -1 || c === "") {
            AddClass(x[i], "show");
            x[i].style.display = "inline-block"; // Show filtered images
        }
    }
}

function AddClass(element, name) {
    element.classList.add(name);
}

function RemoveClass(element, name) {
    element.classList.remove(name);
}


