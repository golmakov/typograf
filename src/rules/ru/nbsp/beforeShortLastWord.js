Typograf.rule({
    title: 'Неразрывный пробел перед последним коротким словом в предложении',
    name: 'ru/nbsp/beforeShortLastWord',
    sortIndex: 620,
    func: function(text, settings) {
        var len = settings.lengthLastWord,
            re = new RegExp(' ([а-яёА-ЯЁ]{1,' + len + '})(\\.|\\?|:|!|,)', 'g');

        return text.replace(re, '\u00A0$1$2');
    },
    settings: {
        lengthLastWord: 3
    }
});