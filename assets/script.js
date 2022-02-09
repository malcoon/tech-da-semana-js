const returnNome = document.getElementById("returnNome")
const returnIdade = document.getElementById("returnIdade")
const returnSkills = document.getElementById("returnSkills")
const returnGithub = document.getElementById("returnGithub")
const returnTwitter = document.getElementById("returnTwitter")
const returnInstagram = document.getElementById("returnInstagram")
const returnLinkedin = document.getElementById("returnLinkedin")

returnUsuario = document.getElementById('returnUsuario')
returnIdadeUsuario = document.getElementById('returnIdadeUsuario')
returnSkillsUsuario = document.getElementById('returnSkillsUsuario')
returnGithubUsuario = document.getElementById('returnGithubUsuario')
returnTwitterUsuario = document.getElementById('returnTwitterUsuario')
returnInstagramUsuario = document.getElementById('returnInstagramUsuario')
returnLinkedinUsuario = document.getElementById('returnLinkedinUsuario')
returnUsuarioCadastrado = document.getElementById('btn-submit') 

function submit() {
    nome = document.getElementById('inputNome').value
    idade = document.getElementById('inputIdade').value
    skills = document.getElementById('inputSkills').value
    github = document.getElementById('inputGithub').value
    twitter = document.getElementById('inputTwitter').value
    instagram = document.getElementById('inputInstagram').value
    linkedin = document.getElementById('inputLinkedin').value

    returnTitle.innerHTML = 'Usuário Cadastrado!'

    returnNome.innerHTML = 'Nome:'
    returnNomeUsuario.innerHTML = nome

    returnIdade.innerHTML = 'Idade:'
    returnIdadeUsuario.innerHTML = idade + ' Anos'

    returnSkills.innerHTML = 'Skills:'
    returnSkillsUsuario.innerHTML = skills

    returnGithub.innerHTML = 'Redes Sociais:'
    returnGithubUsuario.innerHTML = `<a href="${github}" target="_blank"><i class="fa-brands fa-github"></i></a>, 
                                    <a href="${twitter}" target="_blank"><i class="fa-brands fa-twitter"></i></a>,
                                    <a href="${instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>,
                                    <a href="${linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`
}

button = document.getElementById('btn-submit')
button.addEventListener("click", submit)