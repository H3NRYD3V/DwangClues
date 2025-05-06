function checkCode() {
    const input = document.getElementById("codeInput").value.trim().toLowerCase();
    const result = document.getElementById("result");
    if (input === "a2302t") {
        window.location.href = "page3.html";
    } else {
        result.textContent = "❌ ẹc ẹc ❌";
        result.style.color = "red";

        // Add vibration effect
        result.classList.add("vibrate");

        // Remove the class after the animation ends
        setTimeout(() => {
            result.classList.remove("vibrate");
        }, 300); // Match the duration of the animation
    }
}