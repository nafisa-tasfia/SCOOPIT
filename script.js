let totalChecks = 0;
let supportedChecks = 0;
let contradictedChecks = 0;

function verifyClaim() {
    const claim = document.getElementById("claim").value.trim();
    const result = document.getElementById("result");

    if (claim === "") {
        result.innerHTML = "<p>Please enter a claim first.</p>";
        return;
    }

    let status = "";
    let message = "";

    const text = claim.toLowerCase();

    if (
        text.includes("earth is flat") ||
        text.includes("sun revolves around earth") ||
        text.includes("humans have 3 lungs")
    ) {
        status = "Contradicted";
        message = "This claim conflicts with established scientific facts.";
        contradictedChecks++;
    } 
    else if (
        text.includes("earth revolves around the sun") ||
        text.includes("water boils at 100") ||
        text.includes("humans need oxygen")
    ) {
        status = "Supported";
        message = "This claim is consistent with established scientific facts.";
        supportedChecks++;
    } 
    else {
        status = "Needs Verification";
        message = "No matching evidence found in the prototype database. Further fact-checking is required.";
    }

    totalChecks++;

    result.innerHTML = `
        <h3>${status}</h3>
        <p>${message}</p>
        <p><strong>Note:</strong> This is a sample rule-based check, not live AI verification.</p>
    `;

    document.getElementById("total").textContent = totalChecks;
    document.getElementById("supported").textContent = supportedChecks;
    document.getElementById("false").textContent = contradictedChecks;
}
