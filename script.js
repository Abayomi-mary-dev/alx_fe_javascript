document.addEventListener("DOMContentLoaded", () => {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const newQuoteBtn = document.getElementById("newQuote");
    const addQuoteBtn = document.getElementById("addQuoteBtn");
    const newQuoteText = document.getElementById("newQuoteText");
    const newQuoteCategory = document.getElementById("newQuoteCategory");

    // Predefined quotes array
    let quotes = [
        { text: "The best way to predict the future is to create it.", category: "Motivation" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" },
        { text: "Do what you can, with what you have, where you are.", category: "Perseverance" },
    ];

    // Function to display a random quote
    function showRandomQuote() {
        if (quotes.length === 0) {
            quoteDisplay.innerText = "No quotes available.";
            return;
        }
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        quoteDisplay.innerHTML = `<strong>${quote.text}</strong> <br> <em>- ${quote.category}</em>`;
    }
    
     // Function to add a new quote
    function addQuote() {
        const quoteText = newQuoteText.value.trim();
        const quoteCategory = newQuoteCategory.value.trim();

        if (quoteText === "" || quoteCategory === "") {
            alert("Please enter both a quote and a category.");
            return;
        }

        // Add new quote to the array
        quotes.push({ text: quoteText, category: quoteCategory });

        // Clear input fields
        newQuoteText.value = "";
        newQuoteCategory.value = "";

        alert("Quote added successfully!");
    }

    // Event listeners
    newQuoteBtn.addEventListener("click", showRandomQuote);
    addQuoteBtn.addEventListener("click", addQuote);

    // Show an initial quote
    showRandomQuote();
});
