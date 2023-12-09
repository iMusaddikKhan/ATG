function menuToggle() {
    const menu = document.querySelector('.menu')
    const menubtn = document.querySelector('#acc-create ')
    const menuli = document.querySelectorAll('.menu ul li')
    console.log(menuli)


    let flag = 0
    menubtn.addEventListener('click', function () {
        if (flag === 0) {

            menu.style.opacity = 1;
            flag = 1
        }
        else {
            menu.style.opacity = 0
            flag = 0
        }


    })

    menuli.forEach(function (li) {
        li.addEventListener('click', function () {
            flag = 0
            menu.style.opacity = 0
        })
    })
}
menuToggle()

function signup() {
    const firstName = document.querySelector('.FirstName')
    const lastName = document.querySelector('.LastName')
    const createAcc = document.querySelector(".create")
    const closeSignup = document.querySelector('#closeSignup')
    const signuppage = document.querySelector('#signup')
    const signupLi = document.querySelector('.signupLi')
    signupLi.addEventListener('click', function () {
        signuppage.style.display = "flex"
        signuppage.style.opacity = 1
    })
    closeSignup.addEventListener('click', function () {
        signuppage.style.display = "none"
        signuppage.style.opacity = 0;
    })
    createAcc.addEventListener('click', function () {
        if (firstName.value === "" || lastName.value === "") {
            alert("Please Enter Inormation")
        }
        else {
            signuppage.style.display = "none"
            signuppage.style.opacity = 0;
        }
    })
}

signup()

function login() {
    const emailinp = document.querySelector('.email')
    const passinp = document.querySelector('.pass')
    const loginLi = document.querySelector('.loginLi')
    const LoginBtn = document.querySelector('.login-buttons .create')
    const loginpage = document.querySelector("#Login")
    const closelogin = document.querySelector('#closelogin')
    loginLi.addEventListener('click', function () {
        loginpage.style.display = "flex"
        loginpage.style.opacity = 1
    })

    closelogin.addEventListener('click', function () {
        loginpage.style.display = "none"
        loginpage.style.opacity = 0;
    })

    LoginBtn.addEventListener('click', function () {
        if (emailinp.value === "" || passinp.value === "") {
            alert("Please Enter Inormation")
        }
        else {
            loginpage.style.display = "none"
            loginpage.style.opacity = 0;
        }
    })
}
login()


function JoinGroupPhone() {
    const joinBtn = document.querySelector("#phone-join-group")

    const menu = document.querySelector('.menu')
    const menuli = document.querySelectorAll('.menu ul li')
    console.log(menuli)


    let flag = 0
    joinBtn.addEventListener('click', function () {
        if (flag === 0) {

            menu.style.opacity = 1;
            menu.style.zIndex = 100;
            flag = 1
        }
        else {
            menu.style.opacity = 0
            flag = 0
        }


    })

    menuli.forEach(function (li) {
        li.addEventListener('click', function () {
            flag = 0
            menu.style.opacity = 0
        })
    })
}
JoinGroupPhone()

function loginsignupclosePhone() {
    const signuppage = document.querySelector('#signup')
    
    const loginpage = document.querySelector("#Login")
   const loginclosebtn = document.querySelector('#phone-login-close')
   const signupclosebtn = document.querySelector('#phone-signup-close')
    loginclosebtn.addEventListener('click', function () {
        loginpage.style.display = "none"
        loginpage.style.opacity = 0;
    })
  signupclosebtn.addEventListener('click', function () {
        signuppage.style.display = "none"
        signuppage.style.opacity = 0;
    })
}
loginsignupclosePhone()

