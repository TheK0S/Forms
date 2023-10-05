const sections = document.querySelectorAll('.section')
const navButtons = document.querySelectorAll('.nav-link');

// Add event handler for nav buttons
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        //reset all buttons
        navButtons.forEach(btn=>{
            btn.classList.remove('active');
        })

        //Making the button active
        button.classList.add('active');

        //Determine which section to show and show it
        const targetId = "f" + button.getAttribute('data-index');
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
    });
});



//Exercise 1 =======================================================================
const loginF1 = document.getElementById('login');
const passwordF1 = document.getElementById('password');
const btnF1 = document.getElementById('btnF1');
const outputF1 = document.getElementById('outputF1');
const remember = document.getElementById('remember');

btnF1.onclick = function() {
    outputF1.innerHTML = '';

    if(loginF1.value.length < 3 || passwordF1.value.length < 3){
        outputF1.innerHTML = `<span style="color:red;">Login or password is too short</span>`
        return;
    }

    if(remember.checked){
        outputF1.innerText = `Hello, ${loginF1.value}! I am remembered you`
    }else{
        outputF1.innerText = `Hello, ${loginF1.value}! I didn't remember you`
    }        
};


//Exercise 2 =======================================================================
const emailF2 = document.getElementById('emailF2');
const loginF2 = document.getElementById('loginF2');
const passwordF2 = document.getElementById('passwordF2');
const repeatPasswordF2 = document.getElementById('repeatPasswordF2');
const btnF2 = document.getElementById('btnF2');
const outputF2 = document.getElementById('outputF2');

btnF2.addEventListener('click', function(){
    outputF2.innerHTML = '';
    outputF2.innerText = '';
    
    if(passwordF2.value !== repeatPasswordF2.value){
        outputF2.innerHTML = `<span class="alarm">Passwords are different</span>`
        return;
    }

    if(emailF2.value.length < 3 || loginF2.value.length < 3 || passwordF2.value.length < 3){
        outputF2.innerHTML = `<span class="alarm">Login or password is too short</span>`
        return;
    }

    outputF2.innerText = `A confirmation letter has been sent to the ${emailF2.value} address`
});


//Exercise 3 =======================================================================
const countries = [
    {
        name: 'Ukraine',
        cities: ['Kyiv', 'Dnipro', 'lviv', 'Odessa', 'Donezk', 'Chernigiv', 'Poltava'],
    },
    {
        name: 'USA',
        cities: ['Vashington', 'New York', 'Los Angeles', 'Chikago', 'Miamy', 'Florida', 'Detroit'],
    },
    {
        name: 'England',
        cities: ['London', 'Manchester', 'Liverpool', 'Oksford', 'Kembridge', 'Lids', 'Birmingam'],
    },
    {
        name: 'Poland',
        cities: ['Varshava', 'Krakov', 'Poznan', 'Katovice', 'Gdansk', 'Vrotslav', 'Lublin'],
    },
    {
        name: 'Germany',
        cities: ['Berlin', 'Bremen', 'Munchen', 'Gamburg', 'Drezden', 'Leipzig', 'Shtudgart'],
    },
]

const firstNameF3 = document.getElementById('firstNameF3');
const lastNameF3 = document.getElementById('lastNameF3');
const birthdayF3 = document.getElementById('birthdayF3');
const genderF3 = document.getElementsByName('genderF3');
const countrySelect = document.getElementById('countrySelect');
const citySelect = document.getElementById('citySelect');
const skillsCheckbox = document.getElementById('chekboxSkills').querySelectorAll('input');
const btnF3 = document.getElementById('btnF3');
const outputF3 = document.getElementById('outputF3');

citySelect.disabled = true;

countrySelect.onchange = () => {
    if(countrySelect.value === ''){
        citySelect.disabled = true;
        return;
    }    

    let currentCountry = countries.find(country => country.name === countrySelect.value)
    citySelect.innerHTML = `<option selected></option>`
    citySelect.disabled = false;

    currentCountry.cities.forEach(city => {
        citySelect.innerHTML += `<option value="${city}">${city}</option>`
    })
}

function isValidateF3 () {
    if(firstNameF3.value.length < 3){
        outputF3.innerHTML = `<p class="alarm">First name is too short</p>`;
        return false;
    }
    if(lastNameF3.value.length < 3){
        outputF3.innerHTML = `<p class="alarm">Last name is too short</p>`;
        return false;
    }
    if(birthdayF3.valueAsDate === null){
        outputF3.innerHTML = `<p class="alarm">Incorect birthday date</p>`;
        return false;
    }
    if(!genderF3[0].checked && !genderF3[1].checked){
        outputF3.innerHTML = `<p class="alarm">No gender selected</p>`;
        return false;
    }
    if(countrySelect.value === ""){
        outputF3.innerHTML = `<p class="alarm">No country selected</p>`;
        return false;
    }
    if(citySelect.value === ""){
        outputF3.innerHTML = `<p class="alarm">No city selected</p>`; 
        return false;
    }

    return true;
}

btnF3.onclick = () => {
    outputF3.innerHTML = '';
    if(!isValidateF3()) return;

    let genderSelected = genderF3[0].checked? 'Male' : 'Female';
    let skillsSelected = [];
    skillsCheckbox.forEach(checkbox => {
        if(checkbox.checked) skillsSelected.push(checkbox.getAttribute('data-text'));
    });

    outputF3.innerHTML = `
        <div class="row mb-3">
            <div class="col-sm-2 col-form-label">First name</div>
            <div class="col-sm-10"">
                <p class="form-control">${firstNameF3.value}</p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-2 col-form-label">Last name</div>
            <div class="col-sm-10"">
                <p class="form-control">${lastNameF3.value}</p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-2 col-form-label">Birthday</div>
            <div class="col-sm-10"">
                <p class="form-control">${birthdayF3.value}</p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-2 col-form-label">Gender</div>
            <div class="col-sm-10"">
                <p class="form-control">${genderSelected}</p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-2 col-form-label">Country</div>
            <div class="col-sm-10"">
                <p class="form-control">${countrySelect.value}</p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-2 col-form-label">City</div>
            <div class="col-sm-10"">
                <p class="form-control">${citySelect.value}</p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-sm-2 col-form-label">Skills</div>
            <div class="col-sm-10"">
                <p class="form-control">${skillsSelected}</p>
            </div>
        </div>
    `
}

//Exercise 4 =======================================================================
const btnF4 = document.getElementById('btnF4');
const rColor = document.getElementById('red');
const gColor = document.getElementById('green');
const bColor = document.getElementById('blue');
const outputF4 = document.getElementById('outputF4');


btnF4.onclick = () => {
    //Validation red
    let R = parseInt(rColor.value);
    R = isNaN(R) || R < 0? 0: R > 255? 255 : R;
    //Validation green
    let G = parseInt(gColor.value);
    G = isNaN(G) || G < 0? 0: G > 255? 255 : G;
    //Validation blue
    let B = parseInt(bColor.value);
    B = isNaN(B) || B < 0? 0: B > 255? 255 : B;

    //Print result
    outputF4.innerHTML += `
        <div class="cc-wrap col-md-4">
            <div class="cc-item">
                <div class="cc-item__square" style="background-color: rgb(${R}, ${G}, ${B});"></div>
                <div class="cc-item__text">RGB (${R},${G},${B})</div>
            </div>
        </div>
    `
}

//Exercise 5 =======================================================================


const btnF5 = document.getElementById('btnF5');
const outputF5 = document.getElementById('outputF5');
const questionF5 = document.getElementById('questionF5');
const correctAnswerF5 = document.getElementById('correctAnswerF5');
const wrongAnswerF5 = document.getElementById('wrongAnswerF5');
const alarmsOutputF5 = document.getElementById('alarmsOutputF5');
const questions = [];

function printQuestions(){
    outputF5.innerHTML = '';

    if(questions.length === 0) return;

    questions.map((q)=>{
        outputF5.innerHTML += `
            <div class="shadow mb-3 p-3 rounded">
                <div class="row mb-3">
                <div class="col-sm-2 col-form-label">Question</div>
                    <div class="col-sm-10"">
                        <p class="form-control">${q.question}</p>
                    </div>
                </div>
                <div class="row mb-3">
                <div class="col-sm-2 col-form-label">Correct answer</div>
                    <div class="col-sm-10"">
                        <p class="form-control">${q.correctAnswer}</p>
                    </div>
                </div>
                <div class="row mb-3">
                <div class="col-sm-2 col-form-label">Wrong answer</div>
                    <div class="col-sm-10"">
                        <p class="form-control">${q.wrongAnswer}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

btnF5.onclick = () => {
    alarmsOutputF5.innerHTML = '';
    if(questionF5.value.length < 1){
        alarmsOutputF5.innerHTML += `<p>Question field is empty</p>`
        return;
    }
    if(correctAnswerF5.value.length < 1){
        alarmsOutputF5.innerHTML += `<p>Correct answer field is empty</p>`
        return;
    }
    if(wrongAnswerF5.value.length < 1){
        alarmsOutputF5.innerHTML += `<p>Wrong answer field is empty</p>`
        return;
    }

    questions.push({
        question: questionF5.value,
        correctAnswer: correctAnswerF5.value,
        wrongAnswer: wrongAnswerF5.value,
    });

    printQuestions();

    //Прокручивам вниз чтобы не терять из виду кнопку Add
    btnF5.scrollIntoView({behavior: 'smooth'});
}







// function calcFontSize(maxWidth, maxFontSize, minWidth, minFontSize){
//     widthRange = maxWidth- minWidth;
//     fsRange = maxFontSize - minFontSize;

//     let percentCurrentOfMaxWidth = (window.innerWidth - minWidth) * 100 / widthRange;
//     let fs = fsRange * percentCurrentOfMaxWidth / 100 + minFontSize;

//     return fs;
// }


// console.log(calcFontSize(1000, 32, 320, 20));

// const main = document.getElementById('main');
// const hdr = document.getElementById('header');
// const p = document.getElementById('par');

// function handleResize(){
//     let fs = calcFontSize(1000, 32, 320, 20);
//     main.style.fontSize = `${fs}px`;
//     hdr.style.fontSize = fs;
//     p.style.fontSize = fs;
// }
// handleResize();

// window.addEventListener("resize", handleResize);


// const field = document.querySelector('.main__printField');
// const fullBtn = document.getElementById('fullDate');
// const dateBtn = document.getElementById('date');
// const timeBtn = document.getElementById('time');
// let mode = '';

// setInterval(()=> {
//     field.textContent = format(mode)
// }
// , 1000);




// fullBtn.onclick = bindMode('full');
// dateBtn.onclick = bindMode('date');
// timeBtn.onclick = bindMode('time');


// function bindMode(name) {
//     return function(){
//         mode = name;
//         field.textContent = format(mode)
//     }
// }

// function format (formatMode) {
//     const now = new Date();

//     switch (formatMode) {
//         case 'full':
//             return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        
//         case 'date':
//             return now.toLocaleDateString();
    
//         default:
//             return now.toLocaleTimeString();
//     }
// }




// const wrapList = document.querySelector(".wrapList");
// const refreshBtn = document.getElementById('refreshBtn');

// async function start(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users", { method: 'GET'});
//         data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// function getCarouselItemTemplate(item){
//     return (`
//     <div class="item">
//         ${Object.keys(item).map((key)=>{
//             return `
//                 <p><b>${key}:</b> ${item[key]}</p>
//             `
//         })}
//     </div>
//     `).replace(/,/g, '')
// }

// function render (){
//     wrapList.innerHTML = '';
//     data.map((item)=>{
//         wrapList.innerHTML += getCarouselItemTemplate(item);
//     })
// }



// refreshBtn.onclick = () => {
//     start();
//     setTimeout(render, 200);
// }



