### Part 5
* [HTML code](#html-code)
* [CSS code](#css)
* [JavaScript code](#javascript)
> Footer

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
  
        <nav class="container container--pall flex flex-jc-sb flex-ai-c">
          <a href="/" class="header__logo">
            <img src="images/logo.svg" alt="Easybank" />
          </a>
  
          <a id="btnHamburger" href="#" class="header__toggle hide-for-desktop">
            <span></span>
            <span></span>
            <span></span>
          </a>
  
          <div class="header__links hide-for-mobile">
            <a href="#">Home</a><a href="#">About</a><a href="#">Contact</a
            ><a href="#">Blog</a><a href="#">Careers</a>
          </div>
  
          <a href="#" class="button header__cta hide-for-mobile"
            >Request Invite</a
          >
        </nav>
  
        <div class="header__menu has-fade">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Blog</a>
          <a href="">Careers</a>
        </div>
      </header>
  
      <section class="hero">
        <div class="container">
          <div class="hero__image"></div>
  
          <div class="hero__text container--pall">
            <h1>Next generation digital banking!!!!</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <a href="#" class="button hero__cta">Request Invite</a>
          </div>
        </div>
      </section>
  
      <section class="feature">
        <div class="feature__content container container--pall">
          <div class="feature__intro">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
  
          <div class="feature__grid">
            <div class="feature__item">
              <div class="feature__icon">
                <img src="/images/icon-online.svg" />
              </div>
              <div class="feature__title">Online Banking</div>
              <div class="feature__description">
                Our modern web and mobile applications allow you to keep track of
                your finances wherever you are in the world.
              </div>
            </div>
  
            <div class="feature__item">
              <div class="feature__icon">
                <img src="/images/icon-budgeting.svg" />
              </div>
              <div class="feature__title">Simple Budgeting</div>
              <div class="feature__description">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </div>
            </div>
  
            <div class="feature__item">
              <div class="feature__icon">
                <img src="/images/icon-onboarding.svg" />
              </div>
              <div class="feature__title">Fast Onboarding</div>
              <div class="feature__description">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </div>
            </div>
  
            <div class="feature__item">
              <div class="feature__icon"><img src="/images/icon-api.svg" /></div>
              <div class="feature__title">Open API</div>
              <div class="feature__description">
                Manage your savings, investments, pension, and much more from one
                account. Tracking your money has never been easier.
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="articles">
        <div class="article__content container container--pall">
          <h2>Latest Articles</h2>
  
          <div class="article__grid">
            <a href="#" class="article__item">
              <div
                class="article__image"
                style="background-image: url('/images/image-currency.jpg')"
              ></div>
              <div class="article__text">
                <div class="article__author">By Claire Robinson</div>
                <div class="article__title">
                  Receive money in any currency with no fees
                </div>
                <div class="article__description">
                  The world is getting smaller and we’re becoming more mobile. So
                  why should you be forced to only receive money in a single …
                </div>
              </div>
            </a>
  
            <a href="#" class="article__item">
              <div
                class="article__image"
                style="background-image: url('/images/image-restaurant.jpg')"
              ></div>
              <div class="article__text">
                <div class="article__author">By Wilson Hutton</div>
                <div class="article__title">
                  Treat yourself without worrying about money
                </div>
                <div class="article__description">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </div>
              </div>
            </a>
  
            <a href="#" class="article__item">
              <div
                class="article__image"
                style="background-image: url('/images/image-plane.jpg')"
              ></div>
              <div class="article__text">
                <div class="article__author">By Wilson Hutton</div>
                <div class="article__title">
                  Take your Easybank card wherever you go
                </div>
                <div class="article__description">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you …
                </div>
              </div>
            </a>
  
            <a href="#" class="article__item">
              <div
                class="article__image"
                style="background-image: url('/images/image-confetti.jpg')"
              ></div>
              <div class="article__text">
                <div class="article__author">By Claire Robinson</div>
                <div class="article__title">
                  Our invite-only Beta accounts are now live!
                </div>
                <div class="article__description">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site …
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
  
      <footer class="footer">
        <div class="container">
          <a class="footer__logo" href="#">
            <img src="/images/logo-dark.svg" />
          </a>
  
          <div class="footer__social">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <title>Facebook</title>
                <path
                  fill="#FFF"
                  d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                />
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                <title>YouTube</title>
                <path
                  fill="#FFF"
                  d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"
                />
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18">
                <title>Twitter</title>
                <path
                  fill="#FFF"
                  d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"
                />
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <title>Pinterest</title>
                <path
                  fill="#FFF"
                  d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"
                />
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20">
                <title>Instagram</title>
                <path
                  fill="#FFF"
                  d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"
                />
              </svg>
            </a>
          </div>
  
          <div class="footer__links col1">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
  
          <div class="footer__links col2">
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
  
          <div class="footer__cta">
            <a href="#" class="button">Request Invite</a>
          </div>
  
          <div class="footer__copyright">
            &copy; EasyBank. All Rights Reserved.
          </div>
        </div>
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
            >Frontend Mentor</a
          >. Coded by <a href="#">Coder Coder</a>.
        </div>
      </footer>
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
    visibility: visible;
    opacity: 1;
  }
  99% {
    visibility: visible;
    opacity: 0;
  }
  to {
    visibility: hidden;
    opacity: 0;
  }
}
.fade-out {
  animation: fade-out 200ms ease-in-out forwards;
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
  font-weight: 300;
  color: hsl(233, 8%, 62%);
  line-height: 1.3;
  overflow-x: hidden;
}
@media (min-width: 64em) {
  body {
    font-size: 1.125rem;
  }
}
body.noscroll {
  overflow: hidden;
}

h1,
h2,
h3 {
  font-weight: 300;
  line-height: 1.15;
  color: hsl(233, 26%, 24%);
  margin-top: 0px;
}

h1 {
  font-size: 2.31rem;
  margin-bottom: 1.5rem;
}
@media (min-width: 64em) {
  h1 {
    font-size: 3.25rem;
  }
}

h2 {
  font-size: 1.875rem;
  margin-bottom: 1.5625rem;
}
@media (min-width: 64em) {
  h2 {
    font-size: 2.25rem;
    margin-bottom: 2.25rem;
  }
}

p {
  line-height: 1.5;
  margin-bottom: 2.25rem;
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
  padding-top: 4.375rem;
  padding-right: 1.5rem;
  padding-bottom: 4.375rem;
  padding-left: 1.5rem;
}
@media (min-width: 64em) {
  .container--pall {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}
.container--py {
  padding-top: 4.375rem;
  padding-bottom: 4.375rem;
}
@media (min-width: 64em) {
  .container--py {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}
.container--px {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
.container--pt {
  padding-top: 4.375rem;
}
@media (min-width: 64em) {
  .container--pt {
    padding-top: 6rem;
  }
}
.container--pr {
  padding-right: 1.5rem;
}
.container--pb {
  padding-bottom: 4.375rem;
}
@media (min-width: 64em) {
  .container--pb {
    padding-bottom: 6rem;
  }
}
.container--pl {
  padding-left: 1.5rem;
}

.flex {
  display: flex;
}
.flex-jc-sb {
  justify-content: space-between;
}
.flex-jc-c {
  justify-content: center;
}
.flex-ai-c {
  align-items: center;
}

button,
.button {
  position: relative;
  display: inline-block;
  padding: 0.875rem 2.1875rem;
  background-image: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  color: hsl(0, 0%, 100%);
  font-weight: 400;
  font-size: 0.875rem;
  transition: opacity 300ms ease-in-out;
  overflow: hidden;
}
button::before,
.button::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.25);
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}
button:hover::before,
.button:hover::before {
  opacity: 1;
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

.header {
  position: relative;
  z-index: 1;
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
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: linear-gradient(hsl(233, 26%, 24%), transparent);
}
.header nav {
  position: relative;
  background-color: hsl(0, 0%, 100%);
  padding-top: 1.0625rem;
  padding-bottom: 1.0625rem;
}
.header__logo img {
  width: 8.8125rem;
  height: 1.375rem;
}
.header__toggle > span {
  display: block;
  width: 26px;
  height: 2px;
  background-color: hsl(233, 26%, 24%);
  transition: all 300ms ease-in-out;
  transform-origin: 3px 1px;
}
.header__toggle > span:not(:last-child) {
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
  color: hsl(233, 26%, 24%);
  text-align: center;
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
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
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
  background-image: url("/images/bg-intro-mobile.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 17.5rem;
}
@media (min-width: 40em) {
  .hero__image {
    min-height: 25rem;
    background-position: center 70%;
  }
}
@media (min-width: 64em) {
  .hero__image {
    flex: 3;
    order: 2;
    height: 41rem;
    background-image: none;
  }
}
@media (min-width: 64em) {
  .hero__image::before {
    content: "";
    position: absolute;
    height: 100%;
    background-image: url("/images/bg-intro-desktop.svg");
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
  width: 100%;
  height: 100%;
  background-image: url("/images/image-mockups.png");
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

.feature {
  background-color: hsl(220, 16%, 96%);
  text-align: center;
}
@media (min-width: 40em) {
  .feature {
    text-align: left;
  }
}
.feature__intro {
  margin-bottom: 3.75rem;
}
@media (min-width: 64em) {
  .feature__intro {
    width: 60%;
  }
}
@media (min-width: 40em) {
  .feature__grid {
    display: flex;
    flex-wrap: wrap;
  }
}
.feature__item {
  padding: 0.9375rem;
}
@media (min-width: 40em) {
  .feature__item {
    flex: 0 0 50%;
  }
}
@media (min-width: 64em) {
  .feature__item {
    flex: 1;
  }
}
.feature__icon {
  margin-bottom: 1.875rem;
}
@media (min-width: 64em) {
  .feature__icon {
    margin-bottom: 2.75rem;
  }
}
.feature__title {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.15;
  color: hsl(233, 26%, 24%);
  margin-bottom: 1rem;
}
@media (min-width: 64em) {
  .feature__title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
.feature__description {
  font-size: 0.875rem;
  line-height: 1.5;
}

.articles {
  background-color: hsl(0, 0%, 98%);
}

.article__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.875rem;
}
@media (min-width: 40em) {
  .article__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 64em) {
  .article__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.article__item {
  border-radius: 0.3125rem;
  overflow: hidden;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
  transition: all 150ms ease-in-out;
}
.article__item:hover {
  transform: scale(1.05);
}
.article__image {
  height: 12.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.article__text {
  padding: 1.875rem 1.875rem 2.5rem 1.875rem;
  color: hsl(233, 8%, 62%);
}
@media (min-width: 40em) {
  .article__text {
    padding: 1.875rem 1.5625rem;
  }
}
.article__author {
  font-size: 0.625rem;
  margin-bottom: 0.75rem;
}
.article__title {
  font-size: 1.0625rem;
  line-height: 1.2;
  color: hsl(233, 26%, 24%);
  margin-bottom: 0.5rem;
}
.article__description {
  font-size: 0.8125rem;
}

.footer {
  background-color: hsl(233, 26%, 24%);
  color: hsl(0, 0%, 100%);
  padding: 2.5rem;
  text-align: center;
}
@media (min-width: 64em) {
  .footer .container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 3fr;
    grid-template-rows: 1fr auto;
    grid-template-areas: "logo links1 links2 cta" "social links1 links2 copyright";
    gap: 1rem;
    justify-items: start;
  }
}
.footer a {
  color: hsl(0, 0%, 100%);
}
.footer__logo {
  display: inline-block;
}
@media (max-width: 63.9375em) {
  .footer__logo {
    margin-bottom: 1.875rem;
  }
}
@media (min-width: 64em) {
  .footer__logo {
    grid-area: logo;
  }
}
@media (max-width: 63.9375em) {
  .footer__social {
    margin-bottom: 1.875rem;
  }
}
@media (min-width: 64em) {
  .footer__social {
    grid-area: social;
    align-self: end;
  }
}
.footer__social a {
  display: inline-block;
  height: 1.25rem;
}
.footer__social a svg path {
  transition: fill 150ms ease-in-out;
}
.footer__social a:hover svg path {
  fill: hsl(136, 65%, 51%);
}
.footer__social a:not(:last-child) {
  margin-right: 1rem;
}
.footer__links {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9375rem;
}
@media (min-width: 64em) {
  .footer__links {
    justify-content: space-between;
    align-items: start;
  }
}
@media (min-width: 64em) {
  .footer__links.col1 {
    grid-area: links1;
  }
}
@media (max-width: 63.9375em) {
  .footer__links.col2 {
    margin-bottom: 1.875rem;
  }
}
@media (min-width: 64em) {
  .footer__links.col2 {
    grid-area: links2;
  }
}
.footer__links a {
  line-height: 2.25;
  transition: color 150ms ease-in-out;
}
.footer__links a:hover {
  color: hsl(136, 65%, 51%);
}
@media (min-width: 64em) {
  .footer__cta {
    grid-area: cta;
    text-align: right;
    justify-self: end;
  }
}
@media (max-width: 63.9375em) {
  .footer__cta a.button {
    margin-bottom: 1.875rem;
  }
}
.footer__copyright {
  font-size: 0.8125rem;
  color: hsl(233, 8%, 62%);
}
@media (min-width: 64em) {
  .footer__copyright {
    grid-area: copyright;
    align-self: end;
    justify-self: end;
  }
}
.footer .attribution {
  margin-top: 4rem;
  font-size: 0.875rem;
}/*# sourceMappingURL=style.css.map */
```

### JavaScript
```
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }  
});
```