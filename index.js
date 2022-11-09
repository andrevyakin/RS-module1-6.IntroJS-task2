const questionsAndAnswers = [
    ["Сколько будет 2 + 2?", 4],
    ["Сколько будет 2 * 2?", 4],
    ["У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?", 1],
    ["У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?", 12],
    ["Сколько будет 2 + 2 * 2?", 6]
];

let userAnswers = [];

questionsAndAnswers.forEach(i => {

    const answer = Number(prompt(i[0]).trim());

    if (!isNaN(answer) && answer === i[1]) {
        alert("Ответ Верный");
        userAnswers.push([answer, true]);
    } else {
        alert("Ответ Неверный");
        userAnswers.push([answer, false]);
    }
})

alert(`Конец теста!
Правильные ответы - ${userAnswers.filter(i => i[1] === true).length};
Неправильные ответы - ${userAnswers.filter(i => i[1] === false).length}.`);

let correctAnswers = [];
if (confirm("Показать правильные ответы?"))
    for (let i = 0; i < questionsAndAnswers.length; i++) {
        correctAnswers.push([
            ...questionsAndAnswers[i],
            ...userAnswers[i]]);
        correctAnswers[i][1] = `Правильный ответ ${correctAnswers[i][1]}.`;
        correctAnswers[i][2] = `${isNaN(correctAnswers[i][2]) ? "\nТы не ввел(а) число." : `\nТвой ответ ${correctAnswers[i][2]}.`} `;
        correctAnswers[i][3] = `Это ${correctAnswers[i][3] ? "правильно" : "не правильно"}.\n`;
    }

alert(correctAnswers.join(",").replaceAll(",", " "));


