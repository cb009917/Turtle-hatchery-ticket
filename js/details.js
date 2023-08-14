
var la,lc,fa,fc,i;
la =0;
lc=0;
fa=0;
fc=0;
i=0;
var count = 0;

 const buttons = document.querySelectorAll('#timeslots button');

let selectedTimeSlots = [];

let elementId = 0;

let timeRange = 0;
function handleClick(event) {
  const buttonText = event.target.textContent;
  elementId = event.target.id;
  const isPeakTime = elementId === "peak";
  event.target.style.backgroundColor = "#6ede8a";
  
  if (!selectedTimeSlots.includes(buttonText)) {
    selectedTimeSlots.push(buttonText);
  } else {
  
    selectedTimeSlots = selectedTimeSlots.filter((slot) => slot !== buttonText);
  }

  
  selectedTimeSlots.sort();

 
  timeRange = getTimeRanges(selectedTimeSlots);

 

    document.getElementById("summery_time").innerHTML =timeRange;
    
    localStorage.setItem("local_time", timeRange);

 
  let summerycount = ++count;
  document.getElementById("summery_duration").innerHTML = summerycount;

  localStorage.setItem("summery-duration-storate", summerycount);
}
document.getElementById("summery_time").innerHTML = localStorage.getItem("local_time");
document.getElementById("summery_duration").innerHTML = localStorage.getItem("summery-duration-storate");

function getTimeRanges(slots) {
  const ranges = [];
  let rangeStart, rangeEnd;

  for (let i = 0; i < slots.length; i++) {
    const slot = slots[i];
    const [startTime, endTime] = slot.split(" - ");

    if (!rangeStart) {
      rangeStart = startTime;
      rangeEnd = endTime;
    } else if (startTime === rangeEnd) {
      // Extend the range
      rangeEnd = endTime;
    } else {
      // Add the current range and start a new one
      ranges.push(rangeStart + " - " + rangeEnd);
      rangeStart = startTime;
      rangeEnd = endTime;
    }
  }

  if (rangeStart && rangeEnd) {
    // Add the last range
    ranges.push(rangeStart + " - " + rangeEnd);
  }

  return ranges;
}

// type of guest 

var cost_fc =0;
var cost_fa =0;
var cost_la = 0;
var cost_lc=0;
var cost_i=0;



buttons.forEach((button) => {
  button.addEventListener('click',handleClick);
});

function updatetotalprice(){
  let sum =cost_fa+ cost_fc+cost_la+cost_lc+cost_i;
  document.getElementById("total-price").innerHTML = sum;
  localStorage.setItem("sum-storage", sum + ".00" + "USD");
  }
  document.getElementById("total-price").innerHTML = localStorage.getItem("sum-storage");
 

function la_minus(){
document.getElementById("la_count").innerHTML = --la;
document.getElementById("la_cost").innerHTML =cost_la;
document.getElementById("la_cost").innerHTML ="Local Adult";

  if(elementId == "peak"){
    cost_la = la * 6
  }

  else{
  cost_la = la * 4;
  }

    document.getElementById("la-sum").innerHTML = cost_la;
    updatetotalprice();
}

// Local adults 
function la_add(){
    document.getElementById("la_count").innerHTML = ++la;
   
    if(elementId == "peak"){
      cost_la = la * 6
    }
  
    else{
    cost_la = la * 4;
    }
 
    document.getElementById("la_cost").innerHTML ="Local Adult";

    document.getElementById("la-sum").innerHTML = cost_la;
    updatetotalprice();

    localStorage.setItem("la-storage-cost","Local Adult" );
    localStorage.setItem("la-storage",cost_la);
    }

    document.getElementById("la_cost").innerText = localStorage.getItem("la-storage-cost");
    document.getElementById("la-sum").innerHTML =localStorage.getItem("la-storage");

//local children 

function lc_minus(){
    document.getElementById("lc_count").innerHTML = --lc;
    if(elementId == "peak"){
      cost_lc = lc * 3
    }
    else{
     cost_lc =   lc * 2;
    }
    document.getElementById("lc_cost").innerHTML ="Local Child";
    document.getElementById("lc-sum").innerHTML = cost_lc;
    }
function lc_add(){
    document.getElementById("lc_count").innerHTML = ++lc;
    if(elementId == "peak"){
      cost_lc = lc * 3
    }
    else{
     cost_lc =   lc * 2;
    }
    document.getElementById("lc_cost").innerHTML ="Local Child";
    document.getElementById("lc-sum").innerHTML = cost_lc;

    localStorage.setItem("lc-storage-cost","Local Child" );
    localStorage.setItem("lc-storage",cost_lc);
    
    updatetotalprice();
    }
    document.getElementById("lc_cost").innerText = localStorage.getItem("lc-storage-cost");
    document.getElementById("lc-sum").innerHTML = localStorage.getItem("lc-storage");

// foreign adults 

function fa_minus(){
document.getElementById("fa_count").innerHTML = --fa;
if(elementId == "peak"){
  cost_fa = fa * 13
}
else{
cost_fa =   fa * 10;
}

document.getElementById("fa_cost").innerHTML ="Foreign Adult";
document.getElementById("fa-sum").innerHTML = cost_fa;
}
function fa_add(){
    document.getElementById("fa_count").innerHTML = ++fa;
    if(elementId == "peak"){
      cost_fa = fa * 13
    }
    else{
    cost_fa =   fa * 10;
    }

    document.getElementById("fa_cost").innerHTML ="Foreign Adult";
    document.getElementById("fa-sum").innerHTML = cost_fa;
    
    localStorage.setItem("fa-storage-cost","Foreign Adult" );
    localStorage.setItem("fa-storage",cost_fa);
    updatetotalprice();
    }
    document.getElementById("fa_cost").innerText = localStorage.getItem("fa-storage-cost");
    document.getElementById("fa-sum").innerHTML = localStorage.getItem("fa-storage");

// foreigh children
function fc_minus(){
    document.getElementById("fc_count").innerHTML = --fc;
    if(elementId == "peak"){
      cost_fc = fc * 8
    }
    else{
     cost_fc =  fc * 5;
    }
    document.getElementById("fc_cost").innerHTML ="Foreign child";
    document.getElementById("fc-sum").innerHTML = cost_fc;
    }
    function fc_add(){
         document.getElementById("fc_count").innerHTML = ++fc;
         if(elementId == "peak"){
          cost_fc = fc * 8
        }
        else{
         cost_fc =  fc * 5;
        }
        document.getElementById("fc_cost").innerHTML ="Foreign child";
        document.getElementById("fc-sum").innerHTML = cost_fc;
        
        localStorage.setItem("fc-storage-cost","Foreign child" );
        localStorage.setItem("fc-storage",cost_fc);
       
         updatetotalprice();
        }
        document.getElementById("fc_cost").innerText = localStorage.getItem("fc-storage-cost");
         document.getElementById("fc-sum").innerHTML = localStorage.getItem("fc-storage");
         
    
function i_minus(){
     document.getElementById("i_count").innerHTML = --i;
    }
    function i_add(){
        document.getElementById("i_count").innerHTML = ++i;
        document.getElementById("i-sum").innerHTML ="Infant";
        document.getElementById("i-cost").innerHTML ="FREE";
        }

           
        

// dynamic calander



// calander

let choosen_date;

$(document).ready(function() {
  
    function generateCalendar() {
      var month = $(".month option:selected").attr("name");
      var year = $(".year option:selected").text();
  
      var daysInMonth = new Date(year, month, 0).getDate();
      var firstDay = new Date(year, month - 1, 1).getDay();
  
      var dateContainer = $(".date");
      dateContainer.empty();
  
      var dateRow = $("<div></div>").addClass("date__row");
  
      for (var i = 0; i < firstDay; i++) {
        dateRow.append("<div class='date__number'></div>");
      }
  
      for (var i = 1; i <= daysInMonth; i++) {
        var dateNumber = $("<div></div>")
          .addClass("date__number")
          .text(i);
  
        dateRow.append(dateNumber);
  
        if ((i + firstDay) % 7 === 0) {
          dateContainer.append(dateRow);
          dateRow = $("<div></div>").addClass("date__row");
        }
      }
  
      if (dateRow.children().length > 0) {
        dateContainer.append(dateRow);
      }
    }
  
 
    $(".month, .year").change(function() {
      generateCalendar();
    });
  
 
    $(document).on("click", ".date__number", function() {
      $(".date__number").removeClass("date__number--true");
      $(this).addClass("date__number--true");
  
      var day = $(this).text();
      var month = $(".month option:selected").attr("name");
      var year = $(".year option:selected").text();
      var month_name = $(".month option:selected").val();
  
 

    choosen_date = (day + " / " + month + " / " + year);
      document.getElementById("summery_date").innerHTML= choosen_date;
      document.getElementById("date").innerHTML=(month_name +  day)

      localStorage.setItem("local_date",choosen_date);
      localStorage.setItem("sidebox_local_month",month_name);
      localStorage.setItem("sidebox_local_date",day);
     
    });
    document.getElementById("summery_date").innerHTML = localStorage.getItem("local_date")
    
  
  
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
  
    $(".yer").each(function() {
      if (Number($(this).text()) === year) {
        $(this).prop("selected", true);
      }
    });
  
    $(".mon").each(function() {
      if ($(this).attr("name") === String(month)) {
        $(this).prop("selected", true);
      }
    });
  
    $(".date__number").each(function() {
      if (Number($(this).text()) === day) {
        $(this).addClass("date__number--true");
      }
    });
  

  
    // Generate the initial calendar
    generateCalendar();
    });

    
 const form = document.getElementById("form");
 const fullname = document.getElementById("fullname");
 const email = document.getElementById("email");
 const email2 = document.getElementById("email2");
 const number = document.getElementById("phone");
const form2 = document.getElementById("port");
const cardname = document.getElementById("card-name");
const cardnumber = document.getElementById("card-number");
const cvv = document.getElementById("cvv");
const experationdate = document.getElementById("Experation-Date");
 
 
function x() {

 form2.addEventListener("submit", (e) =>{
    if (document.querySelectorAll(".success").length !== 4){
    e.preventDefault();
    }
    else {
      window.location.href = "conformation.html"; 
  }

    validatecard();
 });
}

function y (){
 form.addEventListener("submit", (e) =>{
    if (document.querySelectorAll(".success").length !== 3){
        e.preventDefault();
    }
        else {
            window.location.href = "payment.html"; 
        }
    validateInputs();
 });
}
 
 const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
 const validateInputs = () => {
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const email2Value = email2.value.trim();
    const numberValue = number.value.trim();

    if(fullnameValue === "") {
        setError(fullname, "Fullname is required");
    }
    else{
        setSuccess(fullname);
    }


    if(emailValue === ""){
        setError(email, "Email is required");
    }
    else if(!isValidEmail(emailValue)){
        setError(email, "Provide a valid email address");
    }
    else{
        setSuccess(email);
    }
    if(email2Value === '') {
        setError(email2, 'Please confirm your password');
    } else if (email2Value !== emailValue) {
        setError(email2, "Email doesn't match");
    } else {
        setSuccess(email2);
    }

};

    // card validation

    const validatecard = () => {
        const cardnameValue = cardname.value.trim();
        const cardnumberValue = cardnumber.value.trim();
        const cvvValue = cvv.value.trim();
        const experationdateValue = experationdate.value.trim();
        

        if(cardnameValue === ""){
            setError(cardname, "Name is required");
        }
        else{
            setSuccess(cardname);
        }

        if(cardnumberValue === ""){
            setError(cardnumber, "Incomplete Field");
        }
        else if(cardnumberValue.length < 16){
            setError(cardnumber, "Invalid card number");
        }
        else{
            setSuccess(cardnumber);
        }
        if(cvvValue === ""){
          setError(cvv, "Incomplete Field")
        }
        else{
          setSuccess(cvv);
        }
        if(experationdateValue === ""){
          setError(experationdate, "Incomplete Field")
        }
        else{
          setSuccess(experationdate);
        }
        
    };




// user details
 
function detail(){
const fullname = document.getElementById("fullname").value;
const email = document.getElementById("email").value;
const number = document.getElementById("phone").value;
const gender = document.getElementById("gender").value;

localStorage.setItem("con_name_local", fullname);
localStorage.setItem("con_number_local", number);
localStorage.setItem("con_email_local", email);
localStorage.setItem("con_gender_local", gender);
 
}
  
function countrycode(){
  const phoneInputField = document.querySelector("#phone");
  const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
  }

  document.getElementById("pay-final").innerHTML = localStorage.getItem("sum-storage");
// conformatio page 

function coninfo(){
document.getElementById("name_storage").innerText= localStorage.getItem("con_name_local");
document.getElementById("email_storage").innerText= localStorage.getItem("con_email_local");
document.getElementById("number_storage").innerText= localStorage.getItem("con_number_local");
document.getElementById("gender_storage").innerText= localStorage.getItem("con_gender_local");
document.getElementById("con-time").innerText = localStorage.getItem("sidebox_local_date");
document.getElementById("con-month").innerText = localStorage.getItem("sidebox_local_month");

document.getElementById("ref").innerHTML =  parseInt(Math.random()*1000000);
}
