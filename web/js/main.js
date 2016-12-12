$(document).ready(function () {
    $('div.title').on('click', function (e) {
        if ($(e.target).hasClass('title')) {
            $(this).toggleClass('show-desc');
        }
    });

    var $openButtons = $('.open-list button');
    var $blockTitle = $('#trace-body .title');
    $openButtons.each(function (i) {
        this.treeParent = $(this).parents('li').eq(0);
    });

    $openButtons.on('closeList', function (e) {
        $(this).addClass('open-active');
        this.treeParent.addClass('closed');

    }).on('openList', function (e) {
        $(this).removeClass('open-active');
        this.treeParent.removeClass('closed');
    }).on('click', function (e) {
        if ($(this).hasClass('open-active')) {
            $(this).trigger('openList');
        } else {
            $(this).trigger('closeList');
        }
    });

    var $traceButtons = $("#trace-buttons button");
    $traceButtons.on('click', function (e) {
        var index = $traceButtons.index($(this));
        switch (index) {
            case 0:
                $openButtons.trigger('openList');
                break;
            case 1:
                $blockTitle.addClass('show-desc');
                break;
            case 2:
                $openButtons.trigger('closeList');
                break;
            case 3:
                $blockTitle.removeClass('show-desc');
                break;
        }
    });
});

function parentClassSwither($child, $parent, className, childClassName) {
    $child.on('click', function () {
        var method = $parent.hasClass(className) ? 'remove' : 'add';
        $parent[method + 'Class'](className);
        $child[method + 'Class'](childClassName);
        console.log(method);
        console.log(className);
        console.log(childClassName);
    });
}

function addRgLogerBeforeRun(object, func) {
    object[func] = object[func].decorate(function () {
        console.log(arguments.callee.old.toSource());
        console.log(arguments);
        arguments.callee.old.apply(this, arguments);
    });
}

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

