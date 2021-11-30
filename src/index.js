const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!');

// Navigation Bar
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach(link => link.classList.add('italic'));
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];


// IMAGE LOGO
const logo = document.querySelector('#logo-img');
logo.src = siteContent["images"]["logo-img"];

// Call to Action
const ctaTitle = document.querySelector('.cta-text h1');
ctaTitle.textContent = siteContent["cta"]["h1"];
// CTA Button
const button = document.querySelector('.cta-text button');
button.textContent = siteContent["cta"]["button"];
//CTA Image
const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent["images"]["cta-img"];

//Main content - Top
const topHeaders = document.querySelectorAll('.top-content .text-content h4');
const topParagraphs = document.querySelectorAll('.top-content .text-content p');
topHeaders[0].textContent = siteContent["main-content"]["features-h4"];
topHeaders[1].textContent = siteContent["main-content"]["about-h4"];
topParagraphs[0].textContent = siteContent["main-content"]["features-content"];
topParagraphs[1].textContent = siteContent["main-content"]["about-content"];

//Middle Image
const midImage = document.querySelector('#middle-img');
midImage.src = siteContent["images"]["accent-img"];

//Main content - Bot
const botHeaders = document.querySelectorAll('.bottom-content .text-content h4');
const botParagraphs = document.querySelectorAll('.bottom-content .text-content p');
botHeaders[0].textContent = siteContent["main-content"]["services-h4"];
botHeaders[1].textContent = siteContent["main-content"]["product-h4"];
botHeaders[2].textContent = siteContent["main-content"]["vision-h4"];
botParagraphs[0].textContent = siteContent["main-content"]["services-content"];
botParagraphs[1].textContent = siteContent["main-content"]["product-content"];
botParagraphs[2].textContent = siteContent["main-content"]["vision-content"];

// Contact Section
const contact = document.querySelector('.contact h4');
const info = document.querySelectorAll('.contact p')
contact.textContent = siteContent["contact"]["contact-h4"];
info[0].textContent = siteContent["contact"]["address"];
info[1].textContent = siteContent["contact"]["phone"];
info[2].textContent = siteContent["contact"]["email"];

// footer 
const footer = document.querySelector('footer a');
footer.textContent = siteContent["footer"]["copyright"];

