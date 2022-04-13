import './style.css';
import {mainPageLoad} from './mainPage';
import {menuPageLoad} from './menuPage';
import {contactPageLoad} from './contactPage';


// Add menu items
let home = document.getElementById('home');
let menu = document.getElementById('menu');
let contact = document.getElementById('contact');

// Event listener to menu items
home.addEventListener('click', mainPageLoad);
menu.addEventListener('click', menuPageLoad);
contact.addEventListener('click', contactPageLoad);


// Main page on load
mainPageLoad()
