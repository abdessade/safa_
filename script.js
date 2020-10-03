// ***********navbar****************
let lastScrolltop = 0;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    const Scrolltop = window.pageTOffset ||
        this.document.documentElement.scrollTop;
    if (scrollTop > lastScrolltop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0px";
    }
    lastScrolltop = scrollTop;
});
// ********counter*********
let compteur = 0;
$(window).scroll(function () {
    const top = $('.counter').offset().top -
        window.innerHeight;
    if (compteur == 0 && $(window).Scrolltop() > top) {
        $('.counter.value').each(function () {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animated({
                countNum: countTo
            },
                {
                    duration = 1000,
                    easing = '.swing',
                    stop: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        this.text(this.countNum);
                    }
                });
        });
        couter = 1;
    }
});


