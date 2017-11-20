define([], function() {
    'use strict';

    return {
        boot: function(el, context, config, mediator) {
            var html = '<style>' + 
            '.immersive-main-media__headline-container, .article__header-info {' + 
            '       display: none;' +
            '}' +
            '.tonal--tone-feature .tonal__main .drop-cap, .tonal--tone-feature .tonal__main .element-pullquote cite {' +
            '   color: #fff200' +
            '}' +
            '.content--immersive-article .in-body-link--immersive {' +
                'color: #222;' +
                'border-bottom-color: #ffb000;' +
            '}' +
            '</style>';

            el.innerHTML = html;
        }
    };
});
