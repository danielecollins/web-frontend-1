let options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    time: "long"
};

let timeOptions = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit" 
};

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("date-last-modified").textContent = new Date(document.lastModified).toLocaleDateString("en-US", options);
document.getElementById("time-last-modified").textContent = new Date(document.lastModified).toLocaleTimeString("en-US", timeOptions);