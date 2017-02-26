Typograf.addRule({
    name: 'common/space/bracket',
    handler: function(text) {
        return text
            .replace(/(\() +/g, '(')
            .replace(/ +\)/g, ')');
    }
});
