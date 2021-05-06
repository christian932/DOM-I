const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const navItems = document.querySelectorAll('nav a');
const nav1 = navItems[0].textContent = (siteContent["nav"]["nav-item-1"]);
const nav2 = navItems[1].textContent = (siteContent["nav"]["nav-item-2"]);
const nav3 = navItems[2].textContent = (siteContent["nav"]["nav-item-3"]);
const nav4 = navItems[3].textContent = (siteContent["nav"]["nav-item-4"]);
const nav5 = navItems[4].textContent = (siteContent["nav"]["nav-item-5"]);
const nav6 = navItems[5].textContent = (siteContent["nav"]["nav-item-6"]);

const head = document.querySelector('h1').textContent = (siteContent['cta']['h1']);

const button = document.querySelector('button').textContent = (siteContent["cta"]['button']);

const buttonPic = document.querySelector('#cta-img').src = (siteContent['cta']['img-src']);

const topSection = document.querySelectorAll('.top-content .text-content');

const top1 = topSection[0].children;
const top2 = topSection[1].children;

const featureH = top1[0].textContent = (siteContent['main-content']['features-h4']);
const featuresP = top1[1].textContent = (siteContent['main-content']['features-content']);

const aboutH = top2[0].textContent = (siteContent['main-content']['about-h4']);
const aboutP = top2[1].textContent = (siteContent['main-content']['about-content']);

const middlePic = document.querySelector('#middle-img').src = (siteContent['main-content']['middle-img-src']);

const bottomSection = document.querySelectorAll('.bottom-content .text-content');

const bottom1 = bottomSection[0].children;
const bottom2 = bottomSection[1].children;
const bottom3 = bottomSection[2].children;

const servicesH = bottom1[0].textContent = (siteContent['main-content']['services-h4']);
const servicesP = bottom1[1].textContent = (siteContent['main-content']['services-content']);

const productH = bottom2[0].textContent = (siteContent['main-content']['product-h4']);
const productP = bottom2[1].textContent = (siteContent['main-content']['product-content']);

const visionH = bottom3[0].textContent = (siteContent['main-content']['vision-h4']);
const visionP = bottom3[1].textContent = (siteContent['main-content']['vision-content']);

const contactH = document.querySelector('.contact h4').textContent = (siteContent['contact']['contact-h4']);

const contactSection = document.querySelectorAll('.contact p');
const contactAddress = contactSection[0].textContent = (siteContent['contact']['address']);
const contactNumb = contactSection[1].textContent = (siteContent['contact']['phone']);
const contactMail = contactSection[2].textContent = (siteContent['contact']['email']);

const footer = document.querySelector('footer p').textContent = (siteContent['footer']['copyright']);

let nav = document.querySelector('nav');
function addNav(linkName) {
  let newLink = document.createElement('a')
  newLink.textContent = (linkName)
  nav.appendChild(newLink)
}

addNav('Get Started');

navItems.forEach(item => {
  item.style.color = 'green';
})