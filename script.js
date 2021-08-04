const easy = [
    "Qual seu filme preferido?",
    "Qual foi o último filme que você viu e amou?",
    "Qual seu signo?",
    "Que músicas você ouve?",
    "Se pudesse ir pra qualquer lugar agora, aonde iria?",
    "Por que você escolheu trabalhar aqui?",
    "O que você acha de áudios do WhatsApp?",
    "Qual é a primeira rede social que você vê de manhã?",
    "Qual foi o último filme que você viu e odiou?",
    "Qual era seu desenho favorito na infância?",
    "Que série você jamais reveria?",
    "Que série você veria sempre?",
    "Que série você está vendo atualmente?",
    "O que você faria se achasse R$ 50 na rua?",
    "Você prefere passar muito frio ou muito calor?",
    "Como você gosta de aproveitar o seu tempo livre?",
    "Qual é o seu trabalho dos sonhos?",
    "Qual é a coisa mais importante que eu deveria saber sobre você?",
    "Qual foi a melhor coisa que aconteceu para você neste ano?",
    "Qual é a sua viagem dos sonhos?",
    "Qual é o livro mais marcante que você já leu?",
    "O que você gosta de fazer quando está tendo um dia ruim?",
    "Quais são as cinco músicas que mais te marcaram na vida?",
    "Se criassem um feriado em sua homenagem, o que as pessoas teriam que fazer nesse dia?",
    "Como seria um dia perfeito para você?",
    "Quais são os seus apps preferidos no celular?",
    "Se você tivesse um programa de TV, qual seria o tema dele?",
    "Qual a melhor receita que você sabe preparar?",
    "Qual foi a última viagem que você fez?",
    "Se você pudesse dominar qualquer habilidade, qual escolheria?",
    "Como você prefere gastar seu dinheiro: objetos ou experiências?",
    "Se você tivesse que escolher um país para viajar para sempre, qual seria?",
    "Entre o poder de voar e se tornar invisível, qual você escolheria?",
    "Praia ou interior?",
    "Assistir apenas seu filme favorito sem parar ou uma vez a cada dez anos?",
    "Uma música que não sai da sua playlist?"
]

const hard = [
    "Qual seu maior sonho?",
    "Do que você tem medo?",
    "Qual é o maior problema do Brasil hoje?",
    "Por que você escolheu essa profissão?",
    "Qual seu maior orgulho?",
    "Se você pudesse passar uma hora conversando com qualquer pessoa do mundo, quem seria? ",
    "Qual foi a experiência mais interessante que você já teve na vida?",
    "Qual é a primeira coisa que você faria se fosse eleito presidente?",
    "Se você pudesse voltar ao passado para mudar alguma coisa na sua vida, o que você escolheria?",
    "Qual foi a coisa mais bacana que alguém já disse sobre você?",
    "Que hábito você gostaria de mudar na sua vida?",
    "Se você pudesse viajar no tempo, ia preferir ir para o passado ou o futuro?",
    "Qual é a coisa que mais te deixa empolgado atualmente?",
    "Qual conselho você daria para você 10 anos atrás?",
    "O que significa sucesso para você?",
    "Três momentos marcantes da sua vida?",
    "Uma coisa importante que tem que me dizer sobre você?",
    "Quem é uma inspiração para você?",
    "Algo pelo qual você é grato/a em sua vida?",
    "Três qualidades e três defeitos?"
]

let questionCount = 0;

const newQuestion = () => {
    questionCount++;

    let question;

    if (questionCount % 5 === 0) {
        question = getQuestion(hard)[0]
    } else {
        question = getQuestion(easy)[0]
    }

    document.querySelector('h1').textContent = question; 
}

const getQuestion = (array) => {
    const questionIndex = random(array.length);
    return array.splice(questionIndex, 1);
}

const random = (max) => {
    return Math.floor(Math.random() * (max + 1));
}