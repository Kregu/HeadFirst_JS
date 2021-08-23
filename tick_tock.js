var tik = true;

function ticker() {
    if (tik) {
        console.log("Tick");
        tik = false;
    } else {
        console.log("Tock");
        tik = true;
    }
}

setInterval(ticker, 1000)

