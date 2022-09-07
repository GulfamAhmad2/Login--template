const down = document.querySelector('.drop-dwon'),
arrow = document.querySelector('.down'),
cross = document.querySelector('.cross'),
email = document.querySelector('.email'),
pass = document.querySelector('.password'),
eye = document.querySelector('.eye')

down.addEventListener('click', (e) =>{
    down.classList.toggle('active')
})
cross.addEventListener('click', (e) =>{
    email.value = "";   
})
eye.addEventListener('click', (e) =>{
    if(pass.type === "password"){
        pass.type = "text"
        eye.classList.replace("fa-eye-slash", "fa-eye")
    }else{
        pass.type = "password";
        eye.classList.replace("fa-eye","fa-eye-slash")
    }
})