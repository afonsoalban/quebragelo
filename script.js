const easy = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n']

const hard = ['a', 'e', 'i', 'o', 'u']

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