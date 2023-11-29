(function(){
    let countWords = function(text) {
        let wordRegex = /[a-zA-Zа-яА-Я0-9]/;
        let count = 0;
        let tokens = text.split(/\s+/);
        for(i in tokens) {
            if(tokens[i].match(wordRegex)) {
                count++;
            }
        }
        return count;
    }

    let countSpaces = function(text) {
        let matches = text.matchAll(/\s/g);
        let count = 0;
        for(let match of matches) {
            count++;
        }
        return count;
    }

    let changeButtonsStatus = function(enable) {
        let countButton = document.querySelector('#count-button');
        let resetButton = document.querySelector('#reset-button');
        if (enable) {
            countButton.removeAttribute('disabled');
            resetButton.removeAttribute('disabled');
        } else {
            countButton.setAttribute('disabled', 'disabled');
            resetButton.setAttribute('disabled', 'disabled');
        }
    }

    document.addEventListener('DOMContentLoaded', function(){
        let textArea = document.querySelector('#text');
<<<<<<< HEAD
        let result = document.querySelector('#result');
        let countButton = document.querySelector('#count-button');
        let resetButton = document.querySelector('#reset-button');

        countButton.addEventListener('click', function(){
=======
        let button = document.querySelector('#count-button');
        let result = document.querySelector('#result');
        button.addEventListener('click', function(){
>>>>>>> parent of bbf1b69 (reset button added)
            let text = textArea.value;
            let wordsCount = countWords(text);
            let withoutSpaces = text.length - countSpaces(text);
            result.innerHTML = '<b>Длина текста:</b> ' +
                text.length + ' символов<br>' +
                '<b>Без пробелов:</b> ' + withoutSpaces + '<br>' +
                '<b>Количество слов:</b> ' + wordsCount;
        });
<<<<<<< HEAD

        textArea.addEventListener('keyup', function(){
<<<<<<< HEAD
            changeButtonsStatus(textArea.value.length > 0);
        });

        resetButton.addEventListener('click', function(){
            textArea.value = '';
            changeButtonsStatus(false);
        });

parent of fe4e263 (button inactivation added)

            if (textArea.value.length > 0) {
                button.removeAttribute('disabled');
            } else {
                button.setAttribute('disabled', 'disabled');
            }
        });
 parent of bbf1b69 (reset button added)
    });
}());