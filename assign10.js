function onSubmitHandler(ev) {
    ev.preventDefault();

    var book = document.getElementById("book-input").value;
    var shirt = document.getElementById("shirt-input").value;
    var brecelet = document.getElementById("brecelet-input").value;

    var bookChkBox = document.getElementById("book-check");
    var shirtChkBox = document.getElementById("shirt-check");
    var breceletChkBox = document.getElementById("brecelet-check");

    var total = 0;
    var concession = 0;

    if (bookChkBox.checked == true) {
        total = (parseInt(book) + total )*20;
    } 

    if (shirtChkBox.checked == true) {
        total = (parseInt(shirt) + total)*20;
    }

    if (breceletChkBox.checked == true) {
        total = (parseInt(brecelet) + total)*10;
    }

    if (total >= 500) {
        concession =  (total/100) * 30;
        document.getElementById("concession-h").innerHTML = "Congratulations You Got discount. Your concessioned Bill is : " + (total - concession) ;
    }
    document.getElementById("output-h").innerHTML = total;
}