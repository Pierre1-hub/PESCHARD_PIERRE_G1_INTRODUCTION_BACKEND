let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let errorContainer = document.querySelector('#errorContainer') // cela cherche le premier élément avec l'id errorContainer
    let errorList = document.querySelector('#errorList')// cela cherche le premier élément avec l'id errorList
    errorList.innerHTML = '' //cela vide l'errorList 

    let email = document.querySelector('#email')
    if(email.value == '') { //il vérifie si la case email est vide
        email.classList.add('error')
        email.classList.remove('success')

        let err = document.createElement('li') // cela rajoute un Li a la liste dans le message error
        err.innerText = "L'email est obligatoire"
        errorList.appendChild(err) // cela fais en sorte que ça devienne un "enfant"

    } else {
        email.classList.add('success')
        email.classList.remove('error')
    }

    let pseudo = document.querySelector('#pseudo')
    if(pseudo.value.length < 6) { // il vérifie sir le pseudo fais plus de 6 caractère 
        pseudo.classList.add('error')
        pseudo.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères"
        errorList.appendChild(err)

    } else {
        pseudo.classList.add('success')
        pseudo.classList.remove('error')
    }

    let password = document.querySelector('#password')
    let passCheck = new RegExp("^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?\":{}|]).{8,}$"); // il vérifie si il y a au moins 8 caractère, une majuscule et une caractère spécial

    if(password.value.length < 8 || passCheck.test(password.value) == false) { // il vérifie si le mot de passe fais plus de 8 caractère ET si il sont différents
        password.classList.add('error')
        password.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Le mot de passe doit faire 8 caractères minimum, contenir 1 majuscule, 1 caractère spécial"
        errorList.appendChild(err)

    } else {
        password.classList.add('success')
        password.classList.remove('error')
    }

    let password_2 = document.querySelector('#password2')
    if(password_2.value.length < 8 || passCheck.test(password_2.value) == false || password_2.value !== password.value) { // il vérifie si le mot de passe fais plus de 8 caractère ET si il sont différents
        password_2.classList.add('error')
        password_2.classList.remove('success')

        let err = document.createElement('li')
        err.innerText = "Les mots de passe ne correspondent pas"
        errorList.appendChild(err)

    } else {
        password_2.classList.add('success')
        password_2.classList.remove('error')
    }

    // affiche ou cache le container selon s'il y a des erreurs
    if(errorList.children.length > 0) {
        errorContainer.classList.add('visible')
    } else {
        errorContainer.classList.remove('visible')
    }
    let successContainer = document.querySelector('.message-success')
    successContainer.classList.remove('visible')

    if(
        pseudo.classList.contains('success') &&
        email.classList.contains('success') &&
        password.classList.contains('success') && //il vérifie si toutes les conditions contienne la class success
        password_2.classList.contains('success') 
    )
     {
        successContainer.classList.add('visible')
        console.log("jsp") 
    }else{
        console.log("JSPPP")
    }
})