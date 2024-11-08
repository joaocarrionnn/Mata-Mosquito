
let body = document.querySelector("body")


let clicou = false
let score = 0
let vidas = 3


let img  = document.createElement("img")
img.src = "img/Design_sem_nome-removebg-preview (1).png"
img.style.position = "absolute"
img.style.transform = `scale(0.3)`




function geraPosicao(){
    let y = Math.random() * (window.innerHeight * 0.70)
    let x = Math.random() * (window.innerWidth * 0.70)

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}

img.addEventListener("click",function(){
    clicou = true
    img.remove()
    
})

function alteraTamanhoMosquito(){
    //numero * (max - min) + min
   let numeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2
    img.style.transform = `scale(${numeroAleatorio + 0.4})`
}

setInterval(function(){
    geraPosicao()
    alteraTamanhoMosquito()

    body.appendChild(img)

    if(!clicou){
    }

    clicou = false

    if(clicou == false){
        vidas = vidas  - 1

        if(vidas == 2){
            let gorro3 = document.getElementById("gorro-3")
            gorro3.src = "img/gorro_vazio.png"
        }

        else if(vidas == 1){
            let gorro2 = document.getElementById("gorro-2")
            gorro2.src = "img/gorro_vazio.png"
        }

        else if(vidas == 0){
            let gorro1 = document.getElementById("gorro-1")
            gorro1.src = "img/gorro_vazio.png"
            
            window.location.href = "../fronteEndi/gameOver.html";
            localStorage.setItem('pontuacao' , score)
        }
    }
}, 2000)

//isso adiciona um elemento no body [h1 , p , div , etc]

