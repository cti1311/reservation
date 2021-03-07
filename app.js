var today = new Date();
let logs = {
    b1: 0,
    b2: 0,
    b3: 0,
    b4: 0,
    b5: 0,
    b6: 0,
    b7: 0,
    b8: 0,
    b9: 0,
    b10: 0,
    b11: 0,
    b12: 0,
};
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
let maxdd = parseInt(dd) + 4;
let max = yyyy + "-" + mm + "-" + String(maxdd).padStart(2, "0");
console.log(dd);
console.log(maxdd);
today = yyyy + "-" + mm + "-" + dd;
let datepicker = document.getElementById("datepicker");
datepicker.value = today;
datepicker.min = today;
datepicker.max = max;

init();

datepicker.addEventListener("change", submitDate);

function scrolldiv() {
    var elem = document.querySelector(".reservation");
    elem.scrollIntoView();
}

function submitDate() {
    let item = JSON.parse(localStorage.getItem(datepicker.value));
    if (item == null) {
        localStorage.setItem(String(datepicker.value), JSON.stringify(logs));
    } else {
        for (var i in item) {
            if (item[i] != "0") {
                document.getElementById(String(i)).disabled = true;
            } else {
                document.getElementById(String(i)).disabled = false;
            }
        }
        
    }
    localStorage.setItem("date", datepicker.value);
}

function init(){
    if (localStorage.getItem("time") == null) {
        localStorage.setItem("time", "0");
    }
    submitDate();
}



function reset(){
    localStorage.clear();
    init();
}

function addGuest() {
    let guestNumber = document.getElementById("display");
    let currentNumberOfGuest = guestNumber.innerText;
    if (currentNumberOfGuest < 8) {
        guestNumber.innerText = String(parseInt(currentNumberOfGuest) + 1);
    }
}

function removeGuest() {
    let guestNumber = document.getElementById("display");
    let currentNumberOfGuest = guestNumber.innerText;
    if (currentNumberOfGuest > 1) {
        guestNumber.innerText = parseInt(currentNumberOfGuest) - 1;
    }
}

let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let btn3 = document.getElementById("b3");
let btn4 = document.getElementById("b4");
let btn5 = document.getElementById("b5");
let btn6 = document.getElementById("b6");
let btn7 = document.getElementById("b7");
let btn8 = document.getElementById("b8");
let btn9 = document.getElementById("b9");
let btn10 = document.getElementById("b10");
let btn11 = document.getElementById("b11");
let btn12 = document.getElementById("b12");

btn1.addEventListener("click", function () {
    timeBtn(btn1);
});
btn2.addEventListener("click", function () {
    timeBtn(btn2);
});
btn3.addEventListener("click", function () {
    timeBtn(btn3);
});
btn4.addEventListener("click", function () {
    timeBtn(btn4);
});
btn5.addEventListener("click", function () {
    timeBtn(btn5);
});
btn6.addEventListener("click", function () {
    timeBtn(btn6);
});
btn7.addEventListener("click", function () {
    timeBtn(btn7);
});
btn8.addEventListener("click", function () {
    timeBtn(btn8);
});
btn9.addEventListener("click", function () {
    timeBtn(btn9);
});
btn10.addEventListener("click", function () {
    timeBtn(btn10);
});
btn11.addEventListener("click", function () {
    timeBtn(btn11);
});
btn12.addEventListener("click", function () {
    timeBtn(btn12);
});

function timeBtn(btn) {
    let time = btn.innerText;
    localStorage.setItem("time", time);
}

function submit() {
    let id;
    let elem = document.getElementById("text");
    let instruction = elem.value;
    let selectedTime = localStorage.getItem("time");
    let selectedDate = localStorage.getItem("date");
    //let item = JSON.parse(localStorage.getItem(datepicker.value));

    let guestNumber = document.getElementById("display");
    let currentNumberOfGuest = guestNumber.innerText;

    if (selectedTime == '0') {
        alert("Please Select A Time");
    } else {
        switch (selectedTime) {
            case "16:00":
                id = "b1";
                break;
            case "16:30":
                id = "b2";
                break;
            case "17:00":
                id = "b3";
                break;
            case "17:30":
                id = "b4";
                break;
            case "18:00":
                id = "b5";
                break;
            case "18:30":
                id = "b6";
                break;
            case "19:00":
                id = "b7";
                break;
            case "19:30":
                id = "b8";
                break;
            case "20:00":
                id = "b9";
                break;
            case "20:30":
                id = "b10";
                break;
            case "21:00":
                id = "b11";
                break;
            case "21:30":
                id = "b12";
                break;
            default:
                id = "0";
        }
        let con = confirm(`Confirm your Resrvation for ${selectedDate} Time ${selectedTime} number of guest ${currentNumberOfGuest}`);
        if (con) {
            let obj = JSON.parse(localStorage.getItem(selectedDate));
            obj[id] = 1;
            localStorage.setItem(String(selectedDate), JSON.stringify(obj));
            document.getElementById(String(id)).disabled = true;

            
            submitDate()
        }

        localStorage.setItem("time", "0");
    }
}