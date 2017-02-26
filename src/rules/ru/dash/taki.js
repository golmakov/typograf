Typograf.addRule({
    name: 'ru/dash/taki',
    handler: function(text) {
        var re = new RegExp('(верно|довольно|опять|прямо|так|вс[её]|действительно|неужели)\\s(таки)' +
            this.getData('ru/dashAfter'), 'g');

        return text.replace(re, '$1-$2');
    }
});
