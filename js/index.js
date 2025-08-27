// login button
document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 8801745213215;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    
    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);
    
    if (mobileNumber === mobileNumberValueConverted && pinNumber === pinNumberValueConverted) {
        window.location.href = "./home.html";
    }
    else {
        alert("Invalid Credentials!");
        
    }
    
})