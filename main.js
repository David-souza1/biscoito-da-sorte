const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click', handleClickReset)

let phrases = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.', 
    'Não há que ser forte. Há que ser flexível.',
    'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Quem quer colher rosas tem de estar preparado para suportar os espinhos',
    'se um amor verdadeiro pede chuva mande uma tempestade',
    'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
    'O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.',
    'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
    
];



function randomPhrases(items){
    let index = Math.floor( Math.random() * items.length ) ;
    
    return items[index];
}

document.querySelector('.bilhete p').innerText = randomPhrases(phrases)

function handleClick(event) {
    toggleScreen()
    
}

function handleClickReset(event) {
    toggleScreen()
}

function toggleScreen () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}