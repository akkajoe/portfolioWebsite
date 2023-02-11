let translateButton = document.getElementsByClassName('neonButton')[0];
let bubbleContent = document.getElementsByClassName('speechBubble')[0];
let marq = document.querySelector('marquee');

translateButton.onclick = function(){
    bubbleContent.removeChild(marq);
    translateButton.innerHTML = 'Yup, I know english now';
    translateButton.style.fontSize = '85px';
    let navbar = document.createElement('ul');
    let experience = document.createElement('li');
    let contact = document.createElement('li');
    experience.innerHTML = 'Experience';
    contact.innerHTML = 'Contact';
    bubbleContent.appendChild(navbar);
    navbar.appendChild(experience);
    navbar.appendChild(contact);
    navbar.style.display = 'block';
};