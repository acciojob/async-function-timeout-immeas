//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function() {
    const message = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);

    if (!message || isNaN(delay) || delay < 0) {
        alert("Please enter a valid message and delay.");
        return;
    }

    await delayMessage(delay);
    document.getElementById("output").innerText = message;
});

function delayMessage(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

