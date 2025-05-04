document.addEventListener('DOMContentLoaded', function() {
    const countries = [
        'Россия', 'Беларусь', 'Казахстан', 'Украина', 'Армения', 
        'Азербайджан', 'Грузия', 'США', 'Германия', 'Франция', 
        'Италия', 'Испания', 'Великобритания', 'Китай', 'Япония'
    ];
    
    const countrySelect = document.getElementById('country');
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
    
    function showFrame(frameId) {
        document.querySelectorAll('.frame').forEach(frame => {
            frame.classList.add('invisible');
        });
        document.getElementById(frameId).classList.remove('invisible');
        
        const progress = {
            'frame_1': 0,
            'frame_2': 25,
            'frame_3': 50,
            'frame_4': 75,
            'frame_5': 100
        }[frameId];
        
        document.querySelector('.progress-fill').style.width = `${progress}%`;
        
        const stepIndex = {
            'frame_1': 0,
            'frame_2': 1,
            'frame_3': 2,
            'frame_4': 3,
            'frame_5': 4
        }[frameId];
        
        document.querySelectorAll('.step').forEach((step, index) => {
            if (index <= stepIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }
    
    document.querySelector('button[name="reg"]').addEventListener('click', function() {
        showFrame('frame_2');
    });
    
    document.getElementById('cancelPersonal').addEventListener('click', function() {
        showFrame('frame_1');
    });
    
    document.getElementById('backToPersonal').addEventListener('click', function() {
        showFrame('frame_2');
    });
    
    document.getElementById('backToPhone').addEventListener('click', function() {
        showFrame('frame_3');
    });
    
    document.getElementById('goToService').addEventListener('click', function() {
        alert('Перенаправление в сервис...');
    });
    
    const personalForm = document.getElementById('personalForm');
    const nextToPhoneBtn = document.getElementById('nextToPhone');
    
    function validatePersonalForm() {
        const inputs = personalForm.querySelectorAll('input[required], select[required]');
        let allFilled = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const passwordsMatch = password === confirmPassword && password.length >= 6;
        
        nextToPhoneBtn.disabled = !allFilled || !passwordsMatch;
    }
    
    personalForm.querySelectorAll('input, select').forEach(element => {
        element.addEventListener('input', validatePersonalForm);
    });
    
    document.getElementById('nextToPhone').addEventListener('click', function() {
        showFrame('frame_3');
    });
    
    const phoneInput = document.getElementById('phone');
    const sendCodeBtn = document.getElementById('sendCode');
    const nextToPaymentBtn = document.getElementById('nextToPayment');
    const verificationSection = document.getElementById('verificationSection');
    
    phoneInput.addEventListener('input', function() {
        const phoneNumber = phoneInput.value.replace(/\D/g, '');
        sendCodeBtn.disabled = phoneNumber.length < 11;
    });
    
    sendCodeBtn.addEventListener('click', function() {
        verificationSection.classList.remove('invisible');
        sendCodeBtn.classList.add('invisible');
        nextToPaymentBtn.classList.remove('invisible');
    });
    
    document.getElementById('verificationCode').addEventListener('input', function() {
        nextToPaymentBtn.disabled = this.value.length !== 4;
    });
    
    nextToPaymentBtn.addEventListener('click', function() {
        showFrame('frame_4');
    });
    
    const cardParts = document.querySelectorAll('.card-part');
    
    cardParts.forEach((part, index) => {
        part.addEventListener('input', function() {
            if (this.value.length === 4 && index < cardParts.length - 1) {
                cardParts[index + 1].focus();
            }
        });
    });
    
    document.getElementById('completeRegistration').addEventListener('click', function() {
        if (document.getElementById('terms').checked) {
            showFrame('frame_5');
        } else {
            alert('Пожалуйста, примите условия использования сервиса');
        }
    });
});