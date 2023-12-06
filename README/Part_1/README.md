### Part 1
> Set up and Navigation Bar
> Настройка и навигационная панель

![Part 1](/README/Part_1/Part_1.gif)

> Directory tree
> Деревом каталогов

![Alt Text](/README/Part_1/Part_1.png)


> HTML
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
        <!-- Navbar -->
        <nav class="flex flex-js-sb flex-ai-c">
            <!-- Logo -->                   
            <a href="/" class="header__logo">
                <img src="images/logo.jpg" alt="dev" width="50">
            </a>
            <!-- Menu -->
            <a href="#" class="header__menu hide-for-desktop">
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
    </header>
    <script src="/app/js/script.js"></script>
</body>
</html>

```

> compilation SCSS
> Компилация SCSS

```
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
  font-size: 1.125rem;
  color: hsl(233, 8%, 62%);
  line-height: 1.3;
  font-weight: 300;
}

a,
a:visited,
a:hover {
  text-decoration: none;
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
  padding: 0.675rem 2.1875rem;
  background: linear-gradient(to right, #656986, hsl(192, 70%, 51%));
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  color: hsl(0, 0%, 100%);
  font-weight: 400;
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

.header nav {
  padding: 1.0625rem 1.5rem;
  background-color: #f4f4f4;
}
.header__logo img {
  width: 3.8125rem;
  height: 2.375rem;
  border-radius: 1rem;
}
.header__menu {
  width: 30px;
  height: 25px;
  cursor: pointer;
  background: none;
  border: none;
}
.header__menu > span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #333;
  margin-bottom: 3px;
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
.header__links__cta {
  font-size: 0.875rem;
  color: hsl(0, 0%, 100%);
  transition: opacity 300ms ease-in-out;
}
.header__links__cta:hover {
  opacity: 0.75;
}

```