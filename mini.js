// 🛠 Mini Project 1: Text Highlighter
const bgChangeBtn = document.getElementById('bg-change-btn');
const paragraphs = document.querySelectorAll('.box p');
console.log(paragraphs);
paragraphs.forEach(paragraph => {
    bgChangeBtn.addEventListener('click', () => {
        paragraph.style.backgroundColor = 'yellow';
        paragraph.style.color = 'black';
    });
});

// 🛠 Mini Project 2: Live Text Changer
const textInput = document.getElementById('text-input');
const textChangeBtn = document.getElementById('text-change-btn');
const liveText = document.getElementById('live-text');


textChangeBtn.addEventListener('click', () => {
    liveText.textContent = textInput.value;
});


// Mini Project 3: Color Switcher
const colorText = document.getElementById('color-text');
const redBtn = document.getElementById('red-btn');
const greenBtn = document.getElementById('green-btn');
const blueBtn = document.getElementById('blue-btn');
redBtn.addEventListener('click', () => {
    colorText.style.color = 'red';
});
greenBtn.addEventListener('click', () => {
    colorText.style.color = 'yellowgreen';
});
blueBtn.addEventListener('click', () => {
    colorText.style.color = 'blue';
});


// 🛠 Mini Project 4: Image Switcher
const imageSwitcher = document.getElementById('image-switcher');
const imageChangeBtn = document.getElementById('image-change-btn');

imageChangeBtn.addEventListener('click', () => {
    if (imageSwitcher.src.includes('a.jpg')) {
        imageSwitcher.src = 'b.jpg';
    } else {
        imageSwitcher.src = 'a.jpg';
    }
});



// 🛠 Mini Project 5: Click Counter
const counterBtn = document.getElementById('counter-btn');
const counter = document.getElementById('counter');

let count = 0;
counterBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});


// 🛠 Mini Project 6: Simple Login Alert 
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
loginBtn.addEventListener('click', () => {
    if (usernameInput.value && passwordInput.value) {
        alert(`Login Successful for user: ${usernameInput.value}`);
    } else {
        alert('Please fill in all fields');
    }
});
