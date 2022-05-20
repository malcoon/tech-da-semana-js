// Obter dados
const returnPerfil = document.getElementById("returnPerfil")
const returnNome = document.getElementById("returnNome")
const returnAbout = document.getElementById("returnAbout")
const returnSkills = document.getElementById("returnSkills")
const returnGithub = document.getElementById("returnGithub")
const returnTwitter = document.getElementById("returnTwitter")
const returnInstagram = document.getElementById("returnInstagram")
const returnLinkedin = document.getElementById("returnLinkedin")

function submit() {
    nome = document.getElementById('inputNome').value
    about = document.getElementById('inputAbout').value
    skills = document.getElementById('inputSkills').value
    github = document.getElementById('inputGithub').value
    twitter = document.getElementById('inputTwitter').value
    instagram = document.getElementById('inputInstagram').value
    linkedin = document.getElementById('inputLinkedin').value
    perfil = document.getElementById('inputPerfil').value
    
    // returnTitle.innerHTML = 'Usuário Cadastrado!'

    returnPerfilUsuario = `${perfil}`

    returnNomeUsuario.innerHTML = `${nome}`
    returnSkillsUsuario.innerHTML = `${skills}`

    returnAbout.innerHTML = 'About:'
    returnAboutUsuario.innerHTML = `${about}`

    returnGithub.innerHTML = 'Redes Sociais:'
    returnGithubUsuario.innerHTML = `<a href="${github}" target="_blank"><i class="fa-brands fa-github"></i></a> 
                                     <a href="${twitter}" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                                     <a href="${instagram}" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                     <a href="${linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>`
}

button = document.getElementById('btn-submit').addEventListener("click", submit)

// Importar imagem do PC
let openFile = function(event) {
    let input = event.target;

    let reader = new FileReader()
    reader.onload = function(){
      let dataURL = reader.result
      let returnPerfil = document.getElementById('returnPerfilUsuario')
      returnPerfil.src = dataURL
    };
    reader.readAsDataURL(input.files[0]);
  };

// Mostrar nome do arquivo carregado
let input = document.getElementById('inputPerfil')
let fileName = document.getElementById('fileName')

input.addEventListener('change', function(){
    fileName.textContent = this.files[0].name
})

// Mostrar dados
const obterDados = document.querySelector('.resultCard')

document.querySelector('#obterDados').onclick = () => {
    obterDados.classList.toggle('active')
    window.scrollTo({top: 0, behavior: 'smooth'});
}

document.querySelector('.close').onclick = () => {
    obterDados.classList.remove('active');
}