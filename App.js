
// Generate Random No
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}



window.onload = function () {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let quote = document.getElementById("Quote");
            let author = document.getElementById("author");
            let i = randomIntFromInterval(1, 1000);
            quote.innerText = data[i].text;
            author.innerText = " - " + data[i].author;
            console.log(data[i]);
        });

}
setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("Time").innerHTML = date.toLocaleTimeString();
    document.getElementById("Month").innerHTML = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}

