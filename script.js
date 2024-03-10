var currentStep = 0;
var tabs = document.querySelectorAll('.tab');

function showStep(step) {
    tabs.forEach(function (tab) {
        tab.style.display = 'none';
    });
    tabs[step].style.display = 'block';
}

function nextStep() {
    if (currentStep < tabs.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function dubllNextStep() {
    if (currentStep < tabs.length - 1) {
        currentStep++;
        currentStep++;
        showStep(currentStep);
    }
}

function dubll2NextStep() {
    if (currentStep < tabs.length - 1) {
        currentStep++;
        currentStep++;
        currentStep++;
        showStep(currentStep);
    }
}


function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

function dubllPrevStep() {
    if (currentStep > 0) {
        currentStep--;
        currentStep--;
        showStep(currentStep);
    }
}

function dubll2PrevStep() {
    if (currentStep > 0) {
        currentStep--;
        currentStep--;
        currentStep--;
        showStep(currentStep);
    }
}

showStep(currentStep);

document.getElementById('multi-step-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    var data = {};
    formData.forEach(function (value, key) {
        data[key] = value;
    });
    console.log(data);
    // ارسال اطلاعات به سرور
    setTimeout(function () {
        window.location.href = '';
    }, 5000);
});

// toggle step 2

let check = true;
document.getElementById('toggle').addEventListener('change', function () {
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2')
    if (this.check) {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
        this.check = false;

    } else {
        page1.classList.remove('hidden');
        page2.classList.add('hidden');
        this.check = true;

    }
});

// selected item step 2
function addToggleClickListeners(classname) {
    var elements = document.getElementsByClassName(classname);
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            this.classList.toggle("selected");
            this.disabled = !this.disabled;
        });
    }
}

addToggleClickListeners("box-step2");

//selected item step 3
function addClickListener(checkId, divId) {
    document.getElementById(checkId).addEventListener("click", function () {
        var myDiv = document.getElementById(divId);
        myDiv.classList.toggle("selected");
        myDiv.disabled = !myDiv.disabled;
    });
}
addClickListener("check1", "myDiv1");
addClickListener("check2", "myDiv2");
addClickListener("check3", "myDiv3");



//next y & m
document.getElementById("toggle").addEventListener("change", function () {
    var isMonthly = this.querySelector('.toggle-input').checked;
    var monthlyElements = document.querySelectorAll('[id*="mo"], [id*="monthly"]');
    var yearlyElements = document.querySelectorAll('[id*="yr"], [id*="yearly"]');

    if (isMonthly) {
        monthlyElements.forEach(function (element) {
            element.style.display = "block";
        });
        yearlyElements.forEach(function (element) {
            element.style.display = "none";
        });
    } else {
        monthlyElements.forEach(function (element) {
            element.style.display = "none";
        });
        yearlyElements.forEach(function (element) {
            element.style.display = "block";
        });
    }
});


