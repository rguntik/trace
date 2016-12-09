$(document).ready(function () {
    $('div.title').on('click', function (e) {
        console.log(e);
        console.log($(e.target));
        if ($(e.target).hasClass('title')) {
            $(this).toggleClass('show-desc');
        }
    });

    $('.open-list button').each(function (i) {
       parentClassSwither($(this), $(this).parents('li').eq(0), 'closed', 'open-active');
    });

    // $('#show-all').on('click', function () {
    //     $('.function-item').addClass('open');
    // });
    //
    // $('#hide-all').on('click', function () {
    //     $('.function-item').removeClass('open');
    // });
});

function parentClassSwither($child, $parent, className, childClassName) {
    $child.on('click', function () {
        var method = $parent.hasClass(className) ? 'remove' : 'add';
        $parent[method + 'Class'](className);
        $child[method + 'Class'](childClassName);
    });
}

function addRgLogerBeforeRun(object, func) {
    object[func] = object[func].decorate(function () {
        console.log(arguments.callee.old.toSource());
        console.log(arguments);
        arguments.callee.old.apply(this, arguments);
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////
Function.prototype.method = function(methodName, f) {
    return this.prototype[methodName] = f;
}

Function.method("decorate", function(f) {
    var oldMe = this;
    var newMe = f;
    newMe.old = oldMe;
    return newMe;
});

Function.method("before", function(f) {
    f();
    return this;
});

