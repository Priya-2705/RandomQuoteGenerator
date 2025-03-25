const quotes = [
    "Friends are the family we choose.",
    "My purpose: to lift your spirit and to motivate you.",
    "Kindness is one thing you can’t give away. It always comes back.",
    "Great things happen to those who don't stop believing, trying, learning, and being grateful.",
    "Try to be a rainbow in someone else’s cloud.",
    "Sometimes, when things are falling apart, they may actually be falling into place.",
    "Fight for the things that you care about, but do it in a way that will lead others to join you.",
    "Happiness is not by chance but by choice.",
    "Extraordinary things are always hiding in places people never think to look.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe in yourself and all that you are. Know that there is something inside you greater than any obstacle.",
    "Do what you love, and you’ll never work a day in your life.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Dream big and dare to fail.",
    "Act as if what you do makes a difference. It does.",
    "Difficult roads often lead to beautiful destinations.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Opportunities don’t happen, you create them.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Every day may not be good, but there is something good in every day.",
    "You are braver than you believe, stronger than you seem, and smarter than you think.",
    "Believe you can, and you're halfway there.",
    "Start where you are. Use what you have. Do what you can.",
    "It always seems impossible until it's done.",
    "When you can't find the sunshine, be the sunshine.",
    "Doubt kills more dreams than failure ever will.",
    "You have within you right now, everything you need to deal with whatever the world throws at you.",
    "A positive mindset brings positive things.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Be so happy that when others look at you, they become happy too.",
    "Little things make big days.",
    "Happiness is not something ready-made. It comes from your own actions."
];

const usedIndices = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    if(usedIndices.size == quotes.length) {
        usedIndices.clear();
    }

    while(true) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        
        if(usedIndices.has(randomIndex)) continue

        const quote = quotes[randomIndex];
        quoteElement.innerHTML = quote;
        usedIndices.add(randomIndex);
        break;
    }
}