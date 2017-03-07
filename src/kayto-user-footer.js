(function (document) {
    'use strict';

    function ready () {
        var styleView = document.createElement('style');
        styleView.setAttribute('data-comment', 'required styles for kayto script');
        styleView.textContent = '//css-string-here';
        document.body.appendChild(styleView);
    }

    document.addEventListener('DOMContentLoaded', ready);
}(document));
