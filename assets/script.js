button = document.getElementById('btn-submit')
button.addEventListener("click", submit)

const returnNome = document.getElementById("returnNome")
const returnIdade = document.getElementById("returnIdade")
const returnSkills = document.getElementById("returnSkills")

returnUsuario = document.getElementById('returnUsuario')
returnIdadeUsuario = document.getElementById('returnIdadeUsuario')
returnSkillsUsuario = document.getElementById('returnSkillsUsuario')
returnUsuarioCadastrado = document.getElementById('btn-submit') 

function submit() {
    nome = document.getElementById('inputNome').value
    idade = document.getElementById('inputIdade').value
    skills = document.getElementById('inputSkills').value

    returnTitle.innerHTML = 'Usuário Cadastrado!'

    returnNome.innerHTML = 'Nome:'
    returnNomeUsuario.innerHTML = nome

    returnIdade.innerHTML = 'Idade:'
    returnIdadeUsuario.innerHTML = idade + ' Anos'

    returnSkills.innerHTML = 'Skills:'
    returnSkillsUsuario.innerHTML = skills
}