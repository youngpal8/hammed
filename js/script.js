//document.getElementById('welcome').innerHTML='Welcome to my class';

// to change element font size
//document.getElementById('welcome').style.fontSize= '50px';
//document.getElementById('see').style.fontSize= '40px';
//document.getElementById('welcome').style.color= 'blue';
//document.getElementById('see').style.color= 'brown';

//button
//document.getElementById('increase').style.fontSize= '55px';
//document.getElementById('increase').style.borderRadius= '15px';

//table
//document.getElementById('ball').style.border= '1px';

//document.getElementById('demo').style.display= 'none';

//document.getElementById('change').style.backgroundColor= 'brown';

var fname = document.getElementById('fname')


function submit(){
    if (fname.value==""){
       document.getElementById('fnameerror').innerHTML = 'First Name Field cannot be empty';
    }
    else if(email.value ==""){
        document.getElementById('emailerror').innerHTML = 'Email field cannot be empty';
    }
    else{
        document.getElementById('success').innerHTML = 'Your form has been successfully submitted';
    }
    
//alert(fname.value)


//console.log(fname.value);
}
   
var fulln = document.getElementById('fulln');

var phonen = document.getElementById('phonen');

function proceed(){
    if (fulln.value==""){
        document.getElementById('fullerror').innerHTML = 'Full name field cannot be empty'
    }
    else if(phonen.value==""){
        document.getElementById('phoneerror').innerHTML = 'Phone number field cannot be empty'
    }
    else{
        document.getElementById('done').innerHTML = 'Application has been successfully submitted'
    }
}


//document.getElementById('demoo').innerHTML = 'Hello World';

function change(){
    document.getElementById('demoo').innerHTML = 'Hello World'
    
}


function color(){
    document.getElementById('colordiv').style.backgroundColor= 'blue'
}

//var phone = document.getElementById('phone')
function next(){
    var phone = document.getElementById('phone')
    if (phone.value.length<11){
        document.getElementById('errorSpan').innerHTML = 'Invalid Input';
    }
    else{
        document.getElementById('approved').innerHTML = 'Approved'
    }
}

function displayImage(imageSrc){
document.getElementById('mainImage').src = imageSrc
}

function toggleDiv(){
    if(document.getElementById('togglediv').style.display='block'){
        document.getElementById('togglediv').style.display ='none';
    }
else{
    document.getElementById('togglediv').style.display = 'block';
    }
}

function showDiv(){
    document.getElementById('togglediv').style.display='block'
}
document.getElementById('less').style.display='none'

function showMore(){
    document.getElementById('less').style.display='block';
}

function showLess(){
    document.getElementById('less').style.display='none'
}

document.getElementById('less').style.display = 'none';

function show(){
    var lessElement = document.getElementById('less');
    var showMoreLink = document.getElementById('showMore');

    lessElement.style.display = 'block';
    showMoreLink.style.display = 'none';

    lessElement.addEventListener('click', function() {
        lessElement.style.display = 'none';
        showMoreLink.style.display = 'inline'; //make sure it's inline to maintain layout
    })
}
   
