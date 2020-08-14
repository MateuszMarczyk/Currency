const xhr = new XMLHttpRequest();

xhr.addEventListener("load", function() {
    if (xhr.status === 200) {
        console.log("Wynik połączenia:");
        alert(xhr.response);
        let currencyValue = xhr.response;
        alert(currencyValue);
        const myObj = JSON.parse(xhr.response);
        console.log(myObj);
        alert(myObj.rates[0].mid);  
       let euroRate = myObj.rates[0].mid;
       
        document.getElementById("plnInput").addEventListener("input", function(e){
            let euroValue = e.target.value;
            document.getElementById('eurOutput').innerHTML = euroValue/euroRate;
            document.getElementById('usdOutput').innerHTML = euroValue/4;
            document.getElementById('rubOutput').innerHTML = euroValue/5;
                    })      
    }
});


xhr.addEventListener("error", function() {
    alert("Niestety nie udało się nawiązać połączenia");
});

xhr.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json", true);
xhr.send();





