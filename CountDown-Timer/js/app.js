const endDate = "2023-09-28T22:00:00" // Used ISO 8601 format (YYYY-MM-DDTHH:mm:ss)


document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock () {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // Convert into Days
    inputs[0].value = Math.floor(diff/3600/24);
    // Convert into Hour
    inputs[1].value = Math.floor(diff/3600) % 24;
    inputs[2].value = Math.floor(diff/60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}
clock();