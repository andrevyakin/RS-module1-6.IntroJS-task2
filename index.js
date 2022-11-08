let correctAnswers = 0;
let incorrectAnswers = 0;

const question1 = Number(prompt("Сколько будет 2 + 2?").trim());
const answer1 = 4;
comparison(question1, answer1);

const question2 = Number(prompt("Сколько будет 2 * 2").trim());
const answer2 = 4;
comparison(question2, answer2);

const question3 = Number(prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?").trim());
const answer3 = 1;
comparison(question3, answer3);

const question4 = Number(prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?").trim());
const answer4 = 12;
comparison(question4, answer4);

const question5 = Number(prompt("Сколько будет 2 + 2 * 2?").trim());
const answer5 = 6;
comparison(question5, answer5);

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);

function comparison(question, answer) {
    if (isNaN(question)) {
        alert("Ответ должен быть числом. Ответ Неверный");
        incorrectAnswers++;
    }
    if (question === answer) {
        alert("Ответ Верный");
        correctAnswers++;
    } else {
        alert("Ответ Неверный");
        incorrectAnswers++;
    }
}
