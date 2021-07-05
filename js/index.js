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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav content
const navNames = document.querySelector('nav')

const navName1 = navNames.querySelector('a')
navName1.style.color = "green"
const navName2 = navName1.nextElementSibling
navName2.style.color = "green"
const navName3 = navName2.nextElementSibling
navName3.style.color = "green"
const navName4 = navName3.nextElementSibling
navName4.style.color = "green"
const navName5 = navName4.nextElementSibling
navName5.style.color = "green"
const navName6 = navName5.nextElementSibling
navName6.style.color = "green"

navName1.textContent = 'Services'
navName2.textContent = 'Product'
navName3.textContent = 'Vision'
navName4.textContent = 'Features'
navName5.textContent = 'About'
navName6.textContent = 'Contact'

const faq = document.createElement('a')
faq.textContent = "FAQ"
faq.href = '#'
document.querySelector('nav').appendChild(faq)
faq.style.color = "green"

const locations = document.createElement('a')
locations.textContent = "Locations"
locations.href = '#'
document.querySelector('nav').appendChild(locations)
locations.style.color = "green"    

//cta content
const ctaSelect = document.querySelector('.cta')

const h1Text = ctaSelect.querySelector('h1')
const buttonText = ctaSelect.querySelector('button')
const imgSource1 = ctaSelect.querySelector('#cta-img')

h1Text.textContent = 'DOM Is Awesome'
buttonText.textContent = 'Get Started'
imgSource1.src = "img/header-img.png"

//top content
const mainContentDiv = document.querySelector('.top-content .text-content')

const h4Content1 = mainContentDiv.querySelector('h4')
h4Content1.textContent = "Features"

const pContent = mainContentDiv.querySelector('p')
pContent.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const textContent2 = mainContentDiv.nextElementSibling

const h4Content2 = textContent2.querySelector('h4')
h4Content2.textContent = "About"

const pContent2 = textContent2.querySelector('p')
pContent2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const imgSource2 = document.querySelector('.middle-img')
imgSource2.src = "img/mid-page-accent.jpg"


//bottom content
const bottomContentDiv = document.querySelector('.bottom-content .text-content')

const h4Content3 = bottomContentDiv.querySelector('h4')
h4Content3.textContent = "Services"

const pContent3 = bottomContentDiv.querySelector('p')
pContent3.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const textContent3 = bottomContentDiv.nextElementSibling

const h4Content4 = textContent3.querySelector('h4')
h4Content4.textContent = "Products"

const pContent4 = textContent3.querySelector('p')
pContent4.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const textContent4 = textContent3.nextElementSibling

const h4Content5 = textContent4.querySelector('h4')
h4Content5.textContent = "Vision"

const pContent5 = textContent4.querySelector('p')
pContent5.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

//footer content
const h4ContactContent = document.querySelector('.contact h4')
h4ContactContent.textContent = "Contact"

const contactSibling = h4ContactContent.nextElementSibling
contactSibling.textContent = "123 Way 456 Street Somewhere, USA"

const contactSibling2 = contactSibling.nextElementSibling
contactSibling2.textContent = "1 (888) 888-8888"

const contactSibling3 = contactSibling2.nextElementSibling
contactSibling3.textContent = "sales@greatidea.io"

const footerContent = document.querySelector('footer p')
footerContent.textContent = "Copyright Great Idea! 2018"