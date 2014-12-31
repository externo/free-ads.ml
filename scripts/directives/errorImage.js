'use strict';

app.directive('errSrc', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('error', function() {
                attrs.$set('src', attrs.errSrc);
            });
        }
    }
});