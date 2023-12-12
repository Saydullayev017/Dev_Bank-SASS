### Part 4
* [HTML code](#html-code)
* [CSS code](#css)
* [JavaScript code](#javascript)
> Responsive Hero
> Отзывчивый Hero

![Part 4](/README/Part_4/Part_4.gif)

> Directory tree
> Деревом каталогов

![Alt Text](/README/Part_4/Part_4.png)

### HTML code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/app/scss/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Roboto+Mono:wght@300;400&display=swap" rel="stylesheet">
    <title>SJ</title>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="overlay has-fade"></div>
        <!-- Navbar -->
        <nav class="container container--pall flex flex-js-sb flex-ai-c">
            <!-- Logo -->                   
            <a href="/" class="header__logo">
                <img src="images/logo.jpg" alt="dev" width="50">
            </a>
            <!-- Menu -->
            <a id="btnHumburger" href="#" class="header__toggle hide-for-desktop">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <!-- Header links -->
            <div class="header__links hide-for-mobile">
                <a href="http://">Home</a>
                <a href="http://">About</a>
                <a href="http://">Contact</a>
                <a href="http://">Blog</a>
                <a href="http://">Careers</a>
            </div>
            <!-- button -->
            <a href="#" class="button header__cta hide-for-mobile">Request Invite</a>
        </nav>
        <div class="header__menu has-fade">
            <a href="http://">Home</a>
            <a href="http://">About</a>
            <a href="http://">Contact</a>
            <a href="http://">Blog</a>
            <a href="http://">Careers</a>
        </div>
    </header>
    <!-- Section -->
    <section class="hero">
        <div class="container">
            <div class="hero__image"></div>
            <div class="hero__text container--pall">
                <h1>
                    Next Generation degetal banking
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius repellat perspiciatis, numquam corporis consectetur.</p>
                <a href="#" class="button hero__cta">
                    Request Invite
                </a>
            </div>
        </div>
    </section>
    <script src="/app/js/script.js"></script>
</body>
</html>
```
### CSS
> compilation SCSS
> Компилация SCSS

```
.has-fade {
  visibility: hidden;
}

@keyframes fade-in {
  from {
    visibility: hidden;
    opacity: 0;
  }
  1% {
    visibility: visible;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
}
.fade-in {
  animation: fade-in 200ms ease-in-out forwards;
}

@keyframes fade-out {
  from {
    opacity: 1;
    visibility: visible;
  }
  99% {
    visibility: visible;
    opacity: 0;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}
.fade-out {
  animation: fade-out 300ms ease-in-out forwards;
}

html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Public Sans", sans-serif;
  font-size: 0.875rem;
  color: hsl(233, 8%, 62%);
  line-height: 1.3;
  font-weight: 300;
}
@media (min-width: 64em) {
  body {
    font-size: 1.125rem;
  }
}
body.noscroll {
  overflow: hidden;
}

a,
a:visited,
a:hover {
  text-decoration: none;
}

.container {
  max-width: 69.375rem;
  margin: 0 auto;
}
.container--pall {
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
.container--px {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
.container--py {
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
}
.container--pt {
  padding-top: 2.25rem;
}
.container--pr {
  padding-right: 1.5rem;
}
.container--pb {
  padding-bottom: 2.25rem;
}
.container--pl {
  padding-left: 1.5rem;
}

h1, h2, h3 {
  margin-top: 0px;
}

.flex {
  display: flex;
}
.flex-js-sb {
  justify-content: space-between;
}
.flex-js-c {
  justify-content: center;
}
.flex-ai-c {
  align-items: center;
}

button,
.button {
  display: inline-block;
  padding: 0.675rem 2.1875rem;
  background: linear-gradient(to right, #656986, hsl(192, 70%, 51%));
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  color: hsl(0, 0%, 100%);
  font-weight: 400;
  font-size: 0.875rem;
  transition: opacity 300ms ease-in-out;
}
button:hover,
.button:hover {
  opacity: 0.75;
}

@media (max-width: 63.9375em) {
  .hide-for-mobile {
    display: none;
  }
}

@media (min-width: 64em) {
  .hide-for-desktop {
    display: none;
  }
}

.header.open .header__toggle > span:first-child {
  transform: rotate(45deg);
}
.header.open .header__toggle > span:nth-child(2) {
  opacity: 0;
}
.header.open .header__toggle > span:last-child {
  transform: rotate(-45deg);
}
.header .overlay {
  opacity: 0;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-image: linear-gradient(hsl(233, 26%, 24%), transparent);
}
.header nav {
  position: relative;
  background-color: hsl(0, 0%, 100%);
  padding-left: 1.0625rem;
  padding-right: 1.0625rem;
}
.header__logo img {
  width: 3.8125rem;
  height: 2.375rem;
  border-radius: 1rem;
}
.header__toggle {
  width: 30px;
  height: 25px;
  cursor: pointer;
  background: none;
  border: none;
}
.header__toggle > span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #333;
  margin-bottom: 3px;
  transition: all 300ms ease-in-out;
  transform-origin: 6px 1px;
}
.header__toggle:not(:last-child) {
  margin-bottom: 5px;
}
.header__menu {
  position: absolute;
  width: calc(100% - 3rem);
  left: 50%;
  transform: translateX(-50%);
  background: hsl(0, 0%, 100%);
  margin-top: 1.5rem;
  padding: 1.625rem;
  border-radius: 5px;
}
.header__menu a {
  display: block;
  padding: 0.625rem;
  text-align: center;
  color: hsl(233, 26%, 24%);
}
.header__links a {
  position: relative;
  font-size: 0.875rem;
  color: hsl(233, 8%, 62%);
  transition: color 300ms ease-in-out;
}
.header__links a:not(:last-child) {
  margin-right: 32px;
}
.header__links a::before {
  content: "";
  display: block;
  position: absolute;
  height: 5px;
  left: 0;
  right: 0;
  bottom: -30px;
  background: linear-gradient(to right, #656986, hsl(192, 70%, 51%));
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}
.header__links a:hover {
  color: hsl(233, 26%, 24%);
}
.header__links a:hover::before {
  opacity: 1;
}

.hero {
  background-color: hsl(0, 0%, 98%);
}
@media (min-width: 64em) {
  .hero .container {
    display: flex;
    align-items: center;
  }
}
.hero__image {
  position: relative;
  background-image: url(/images/bg-intro-mobile.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 17.5rem;
}
@media (min-width: 40em) {
  .hero__image {
    min-height: 25rem;
    background-position: center 60%;
  }
}
@media (min-width: 64em) {
  .hero__image {
    flex: 3;
    order: 2;
    height: 41rem;
    background: none;
  }
}
@media (min-width: 64em) {
  .hero__image::before {
    content: "";
    position: absolute;
    height: 100%;
    background-image: url(/images/bg-intro-desktop.svg);
    background-repeat: no-repeat;
    background-position: center bottom;
    width: 150%;
    background-size: 122%;
    background-position: 0% 83%;
  }
}
.hero__image::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(/images/image-mockups.png);
  background-size: 93%;
  background-repeat: no-repeat;
  background-position: center bottom;
}
@media (min-width: 40em) {
  .hero__image::after {
    background-size: 52%;
  }
}
@media (min-width: 64em) {
  .hero__image::after {
    width: 120%;
    height: 122%;
    background-size: 94%;
    background-position: center 150%;
    left: 22%;
  }
}
.hero__text {
  text-align: center;
}
@media (min-width: 64em) {
  .hero__text {
    flex: 2;
    order: 1;
    text-align: left;
  }
}
.hero__text h1 {
  font-weight: 300;
  font-size: 1.875rem;
  color: hsl(233, 26%, 24%);
  line-height: 1;
  margin-bottom: 1.5rem;
}
@media (min-width: 64em) {
  .hero__text h1 {
    font-size: 3.25rem;
  }
}
.hero__text p {
  line-height: 1.5;
  margin-bottom: 2.25rem;
}/*# sourceMappingURL=style.css.map */
```

### JavaScript
```
const btnHumburger = document.querySelector('#btnHumburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade')

btnHumburger.addEventListener('click', function() {
    console.log("Open Humburger")

    // содержит ли кнопка класс "open". Если содержит, то удаляет этот класс.
    if(header.classList.contains('open')) {
        body.classList.remove('noscroll')
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })

    }
    else {
        body.classList.add('noscroll')
        header.classList.add('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })

    }
})
```