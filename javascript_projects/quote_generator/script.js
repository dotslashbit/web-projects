const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// let apiQuotes = [];

function showLoadingSpinner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote
async function newQuote(apiQuote) {
    showLoadingSpinner();
    const apiUrl = "https://stoic-quotes.com/api/quote";
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        console.log(apiQuote);
        // newQuote(apiQuote);
    } catch (error) {
        // catch error here
    }
    const quote = apiQuote;
    console.log(quote);
    // check if author is available or not
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    //check quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

// Get Quotes From API
async function getQuotes() {
    showLoadingSpinner();
    const apiUrl = "https://stoic-quotes.com/api/quote";
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        console.log(apiQuote);
        newQuote(apiQuote);
    } catch (error) {
        // catch error here
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On load
getQuotes();
