const comments = []

var userOk = false
var emailOk = false
var commentOk = false

const user = document.getElementById(`name`)

user.addEventListener('input', (e)=>{
    if (user.value.trim() != '') {
        document.getElementById('name').style.borderColor='green'
        userOk = true
    } else {
        document.getElementById('name').style.borderColor='red'
        userOk = false
    }
})

const email = document.getElementById(`email`)

email.addEventListener(`input`, (e)=>{
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email.value.trim())) {
        document.getElementById('email').style.borderColor='green'
        emailOk = true
    } else {
        document.getElementById('email').style.borderColor='red'
        emailOk = false
    }
})

const comment = document.getElementById(`comment`)

comment.addEventListener(`input`, (e)=>{
    if (comment.value.trim() != '') {
        document.getElementById('comment').style.borderColor='green'
        commentOk = true
    } else {
        document.getElementById('comment').style.borderColor='red'
        emailOk = false
    }
})

const btnAgregar = document.getElementById('btnAdd')

btnAgregar.addEventListener('click',(e)=>{
    if (userOk && emailOk && commentOk) {
        const user = document.getElementById(`name`).value.trim()
        const email = document.getElementById(`email`).value.trim()
        const comment = document.getElementById(`comment`).value.trim()
        const newComment = {
            user,
            email,
            comment
        }
        comments.push(newComment)
        showComments()
        limpiar();
    } else {
        alert(`Datos invalidos`)
        limpiar()
    }
})

const showComments = ()=>{
    const commentsList = document.getElementById(`comment-list`)
    commentsList.innerHTML = ''

    comments.forEach((comment)=>{
        const li = document.createElement(`li`)
        li.textContent = `${comment.user} (${comment.email}) : ${comment.comment}`
        commentsList.appendChild(li)
    })
}
const limpiar = ()=>{
    document.getElementById(`name`).value = ''
    document.getElementById(`email`).value = ''
    document.getElementById(`comment`).value = ''
    document.getElementById(`name`).style.borderColor="grey"
    document.getElementById(`email`).style.borderColor="grey"
    document.getElementById(`comment`).style.borderColor="grey"
    userOk = false
    emailOk = false
    commentOk =  false
}