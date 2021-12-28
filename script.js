var jogador, vencedor = null
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')
var jogadorDisplay = document.getElementById('jogador')
var display = document.getElementById('jogador').style.display
let msgVelha = document.getElementById('velha')
var quadrado = document.getElementsByClassName('quadrado')
var placarO = document.getElementById('scoreO')
var placarX = document.getElementById('scoreX')
var maisX = 0
var maisO = 0

mudarJogador('X') 

function escolherQuadrado(id) {
        
    if (vencedor !== null) {
        return
    }
        
    var quadrado = document.getElementById(id)
    if(quadrado.innerHTML !== '-') {
        return
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = 'rgba(0, 0, 0, 0.922)' 

    if(jogador === 'X') {
        jogador = 'O'
    } else {
        jogador = 'X'
    }

    mudarJogador(jogador)
    checaVencedor()
    }

function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checaVencedor() {
    var quadrado1 = document.getElementById(1)
    var quadrado2 = document.getElementById(2)
    var quadrado3 = document.getElementById(3)
    var quadrado4 = document.getElementById(4)
    var quadrado5 = document.getElementById(5)
    var quadrado6 = document.getElementById(6)
    var quadrado7 = document.getElementById(7)
    var quadrado8 = document.getElementById(8)
    var quadrado9 = document.getElementById(9)

    if(checaSequencia(quadrado1,quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1,quadrado2, quadrado3)
        mudarVencedor(quadrado1)
        return
    }
    if(checaSequencia(quadrado4,quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4,quadrado5, quadrado6)
        mudarVencedor(quadrado4)
        return
    }
    if(checaSequencia(quadrado7,quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7,quadrado8, quadrado9)
        mudarVencedor(quadrado7)
        return
    }
    if(checaSequencia(quadrado1,quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1,quadrado4, quadrado7)
        mudarVencedor(quadrado1)
        return
    }
    if(checaSequencia(quadrado2,quadrado5, quadrado8)) {
        mudaCorQuadrado(quadrado2,quadrado5, quadrado8)
        mudarVencedor(quadrado2)
        return
    }
    if(checaSequencia(quadrado3,quadrado6, quadrado9)) {
        mudaCorQuadrado(quadrado3,quadrado6, quadrado9)
        mudarVencedor(quadrado3)
        return
    }
    if(checaSequencia(quadrado1,quadrado5, quadrado9)) {
        mudaCorQuadrado(quadrado1,quadrado5, quadrado9)
        mudarVencedor(quadrado1)
        return
    }
    if(checaSequencia(quadrado3,quadrado5, quadrado7)) {
        mudaCorQuadrado(quadrado3,quadrado5, quadrado7)
        mudarVencedor(quadrado3)
        return
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor

    if (vencedor==='X') {
        placarX.innerHTML = maisX+=1
            document.getElementById('jogador').style.display = 'none'
    } if (vencedor==='O') {
        placarO.innerHTML = maisO+=1
            document.getElementById('jogador').style.display = 'none'
    }
}  
        
function mudarDisplay() {
    if (jogadorDisplay.style.display == 'none') { 
    jogadorDisplay.style.display = 'block'
    } else {
    jogadorDisplay.style.display = 'none'
    }
} 

var quad1 = document.getElementById('1') 
var quad2 = document.getElementById('2')
var quad3 = document.getElementById('3')
var quad4 = document.getElementById('4')
var quad5 = document.getElementById('5')
var quad6 = document.getElementById('6')
var quad7 = document.getElementById('7')
var quad8 = document.getElementById('8')
var quad9 = document.getElementById('9')

var empateTexto = document.getElementById('vence-velha')

function deuVelha() {

    if (quad1.innerHTML !== '-' && quad2.innerHTML !== '-' && quad3.innerHTML !== '-' && quad4.innerHTML !== '-' && quad5.innerHTML !== '-' && quad6.innerHTML !== '-' && quad7.innerHTML !== '-' && quad8.innerHTML !== '-' && quad9.innerHTML !== '-' && vencedor === null) {
    
    empateTexto.innerHTML = ('Deu velha!') 

    quad1.style.background = 'rgba(255, 198, 93, 0.856)'
    quad2.style.background = 'rgba(255, 198, 93, 0.856)'
    quad3.style.background = 'rgba(255, 198, 93, 0.856)'
    quad4.style.background = 'rgba(255, 198, 93, 0.856)'
    quad5.style.background = 'rgba(255, 198, 93, 0.856)'
    quad6.style.background = 'rgba(255, 198, 93, 0.856)'
    quad7.style.background = 'rgba(255, 198, 93, 0.856)'
    quad8.style.background = 'rgba(255, 198, 93, 0.856)'
    quad9.style.background = 'rgba(255, 198, 93, 0.856)'
    
    document.getElementById('jogador').style.display = 'none'
        
    } 
} (setInterval(deuVelha, 50))

function mudaCorQuadrado(quadrado1,quadrado2, quadrado3) {
        quadrado1.style.background = 'rgba(106, 255, 106, 0.856)'
        quadrado2.style.background = 'rgba(106, 255, 106, 0.856)'
        quadrado3.style.background = 'rgba(106, 255, 106, 0.856)'
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eIgual = false

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eIgual = true
    }
    return eIgual
}

function reiniciar() {
    vencedor = null
    vencedorSelecionado.innerHTML = ' '

    for(var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i) 
        quadrado.style.background = '#eee'
        quadrado.style.color = '#eee'
        quadrado.innerHTML = '-'
        empateTexto.innerHTML = 'Vencedor: '
    }

    mudarJogador('X')
    deuVelha()
    mudarDisplay()
}

function zerarPlacar() {
    maisX = maisX-=maisX
    maisO = maisO-=maisO
    placarX.innerHTML = maisX
    placarO.innerHTML = maisO

}