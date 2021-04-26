  



//Slider

const slide = document.getElementById('slide')
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg' ]

addEventListener('load', () => {
  const fragment = document.createDocumentFragment()
  for (const image of images) {
    const img = document.createElement('IMG')
    img.setAttribute('src', `./img/${image}`)
    img.classList.add('slide__img')

    img.addEventListener('animationstart', (e) => {
      e.target.style.zIndex = 2
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.style.zIndex = 1
      } else {
        slide.firstElementChild.style.zIndex = 1
      }
    })

    img.addEventListener('animationend', (e) => {
      e.target.removeAttribute('style')
      e.target.classList.remove('slide__img--animate')
      if (e.target.nextElementSibling) {
        e.target.nextElementSibling.classList.add('slide__img--animate')
      } else {
        slide.firstElementChild.classList.add('slide__img--animate')
      }
    })

    fragment.appendChild(img)
  }

  slide.appendChild(fragment)

  slide.firstElementChild.classList.add('slide__img--animate')
})


$(document).ready(function () {
  
  
  //SCROLL DE NAVBAR
  $(window).scroll(function () {

        var sc = $(window).scrollTop();
        if (sc > 100) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });

    $(".nav__hamburger").click(function () {
        $(".full-nav").addClass("open");

    });


});