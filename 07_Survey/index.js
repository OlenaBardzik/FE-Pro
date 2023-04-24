const QUESTIONS = [
    {
        question: 'Скільки хромосом у здорової людини?',
        answer: '46',
        type: 'prompt',
    },
    {
        question: 'путін - ху~ло?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Скільки хромосом у путіна?',
        answer: '47',
        type: 'prompt',
    },
    {
        question: 'Скільки тупих вівць в московії (в млн.)?',
        answer: '144',
        type: 'prompt',
    },
    {
        question: 'Чи знесли пам"ятник Катерині ІІ в Одесі?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Скільки чорних пакетів виділяється на одного орка?',
        answer: '1',
        type: 'prompt',
    },
    {
        question: 'На скільки Ви оцінюєте роботу ЗСУ від 1 до 10?',
        answer: '10',
        type: 'prompt',
    },
    {
        question: 'Зі скількох позицій готувався напад на білорусь?',
        answer: '4',
        type: 'prompt',
    },
    {
        question: 'Чи треба палити сосійський прапор?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Чи підтримуєте Ви вихід іноземних компаній з московії?',
        answer: true,
        type: 'confirm',
    },
    {
        question: 'Чи вважаєте Ви сосію своєю домівкою?',
        answer: false,
        type: 'confirm',
    },
];

let mark = 0;

QUESTIONS.forEach(questionsItem => {
    const result = askQuestion(questionsItem);

    if (result === questionsItem.answer) {
       mark += 10;
    }
    // in case the answer is wrong user doesn't get any mark, that's why we can skip next step with "else"
});

showResult(mark);





function askQuestion (questionsItem) {
    switch (questionsItem.type) {
        case 'prompt':
            return askPrompt(questionsItem.question);
        case 'confirm':
            return askConfirm(questionsItem.question);
    }
}

function askPrompt (question) {
    return prompt(question);
}

function askConfirm (question) {
    return confirm(question);
}

function showResult (mark) {
    alert(`Your result = ${mark}`);
}