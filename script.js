document.addEventListener("DOMContentLoaded", () => {
    const quoteDisplay = document.getElementById("quoteDisplay");
    const newQuoteBtn = document.getElementById("newQuote");
    const addQuoteBtn = document.getElementById("addQuoteBtn");
    const newQuoteText = document.getElementById("newQuoteText");
    const newQuoteCategory = document.getElementById("newQuoteCategory");
});
    // Predefined quotes array
    const quotes = [
        { text: "The best way to predict the future is to create it.", category: "Motivation" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" },
        { text: "Do what you can, with what you have, where you are.", category: "Perseverance" },
    ];

    // Function to display a random quote
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        document.getElementById("quoteDisplay").innerHTML = `<p><strong>${quote.text}</strong> <br> <em>- ${quote.category}</em></p>`;
    }

    //Function to create the add quote form
    function createAddQuoteForm() {
        const formContainer = document.getElementById("formContainer");
        formContainer.innerHTML = `
        <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
        <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
        <button onclick="addQuote()">Add Quote</button> `;
    }

    // Function to add a new quote
    function addQuote() {
        const newQuoteText = document.getElementById("newQuoteText").value.trim();
        const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

        if (newQuoteText === "" || newQuoteCategory === "") {
            alert("Please enter both a quote and a category.");
            return;
        }

        quotes.push({ text: newQuoteText, category: newQuoteCategory });
        document.getElementById("newQuoteText").value = "";
        document.getElementById("newQuoteCategory").value ="";
        showRandomQuote();
    }
    document.addEventListener("DOMContentLoaded", () => {
        createAddQuoteForm();
        showRandomQuote();
    });
