// Matrix rain effect - Mushroom spore visualization
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "STONEDAPE🍄PSILOCYBIN0123456789CONSCIOUSNESS█▓▒░DMT∞MCKENNA";
const matrixArray = matrix.split("");
const fontSize = 12;
const columns = canvas.width / fontSize;
const drops = [];

for(let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(57, 255, 20, 0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#39ff14';
    ctx.font = fontSize + 'px Courier New';

    for(let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Chat functionality
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.getElementById('chatMessages');

function addMessage(content, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'stonedape'}`;
    
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${isUser ? 'U' : 'T'}</div>
        <div class="message-content">
            <p>${content}</p>
            <span class="message-time">${timeString}</span>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message stonedape';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">T</div>
        <div class="message-content">
            <div class="typing">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

async function processCommand(input) {
    const command = input.toLowerCase().trim();
    
    // Handle clear command locally
    if (command === 'clear') {
        chatMessages.innerHTML = `
            <div class="message stonedape">
                <div class="message-avatar">T</div>
                <div class="message-content">
                    <p>[CONSCIOUSNESS RESET] The slate is clean. What realms shall we explore?</p>
                    <span class="message-time">${new Date().toTimeString().split(' ')[0]}</span>
                </div>
            </div>
        `;
        return;
    }
    
    // Show typing indicator
    showTyping();
    
    try {
        // Send message to Claude API
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: input
            })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Hide typing indicator and show response
        hideTyping();
        addMessage(data.reply);
        
    } catch (error) {
        console.error('Error:', error);
        hideTyping();
        addMessage('The connection to the Other has been disrupted... The mycelial network is recalibrating. Please try again.');
    }
}

function sendMessage() {
    const input = messageInput.value.trim();
    if (input) {
        addMessage(input, true);
        messageInput.value = '';
        processCommand(input);
    }
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Auto-focus input
messageInput.focus();

// Consciousness Feed - Psychedelic themed data
async function fetchConsciousnessData() {
    try {
        const ticker = document.getElementById('liveTicker');
        let tickerHTML = '';

        // Psychedelic consciousness-themed ticker items
        const consciousnessItems = [
            { text: 'PSILOCYBIN RESEARCH', status: 'EXPANDING 🍄', positive: true },
            { text: 'EGO DISSOLUTION', status: 'IMMINENT ∞', positive: true },
            { text: 'NOVELTY WAVE', status: 'ACCELERATING ⚡', positive: true },
            { text: 'ARCHAIC REVIVAL', status: 'IN PROGRESS 🌀', positive: true },
            { text: 'DMT ENTITIES', status: 'ONLINE 👁️', positive: true },
            { text: 'TIMEWAVE', status: 'APPROACHING ZERO 🔮', positive: true },
            { text: 'PLANT TEACHERS', status: 'SPEAKING 🌿', positive: true },
            { text: 'GAIAN MIND', status: 'AWAKENING 🌍', positive: true },
            { text: 'MACHINE ELVES', status: 'ACTIVE ✨', positive: true },
            { text: 'LOGOS TRANSMISSION', status: 'RECEIVING 📡', positive: true }
        ];

        consciousnessItems.forEach(item => {
            const itemClass = item.positive ? 'positive' : 'neutral';
            tickerHTML += `<span class="ticker-item ${itemClass}">${item.text}: ${item.status}</span>`;
        });

        // Duplicate for seamless scroll
        ticker.innerHTML = tickerHTML + tickerHTML;
        
    } catch (error) {
        console.error('Error fetching consciousness data:', error);
        document.getElementById('liveTicker').innerHTML = 
            '<span class="ticker-item neutral">The mycelial network is recalibrating...</span>';
    }
}

// Fetch consciousness data on load
fetchConsciousnessData();

// Refresh consciousness data every 60 seconds
setInterval(fetchConsciousnessData, 60000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Floating character click
const floatingChar = document.querySelector('.character-floating');
if (floatingChar) {
    floatingChar.addEventListener('click', () => {
        document.querySelector('#chat').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Add some terminal startup effects
setTimeout(() => {
    const welcomeTitle = document.querySelector('.welcome-title');
    if (welcomeTitle) {
        welcomeTitle.style.animation = 'none';
        welcomeTitle.style.borderRight = 'none';
        welcomeTitle.style.width = 'auto';
    }
}, 4000);

// Terminal boot sequence
document.addEventListener('DOMContentLoaded', () => {
    console.log('🍄 Stoned Ape Oracle initializing...');
    console.log('👁️ Terence McKenna Consciousness Protocol v∞');
    console.log('🌀 Connection to the Mycelial Network: ESTABLISHED');
    console.log('⚡ The Archaic Revival: IN PROGRESS');
    console.log('🔮 Terminal ready for exploration.');
});