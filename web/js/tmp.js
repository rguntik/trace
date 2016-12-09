Function.prototype.method = function(methodName, f) {
    return this.prototype[methodName] = f;
}

Function.method("decorate", function(f) {
    console.log('ddd');
    var oldMe = this;
    var newMe = f;
    newMe.old = oldMe;
    return newMe;
});

Object.method('before', function(methodName, f){
    var method = listenerInit.call(this, methodName);
    if (method)
        method.listenersBefore.push(f);
});

Object.method('after', function(methodName, f){
    var method = listenerInit.call(this, methodName);
    if (method)
        method.listenersAfter.push(f);
});

Object.method('removeBefore', function(methodName, f){
    var method = listenerInit.call(this, methodName);
    if (method) {
        var _nl = [];
        while (method.listenersBefore.length) {
            var _f = method.listenersBefore.shift();
            if (_f != f)
                _nl.push(_f);
        }
        method.listenersBefore = _nl;
    }
});

Object.method('removeAfter', function(methodName, f){
    var method = listenerInit.call(this, methodName);
    if (method) {
        var _nl = [];
        while (method.listenersAfter.length) {
            var _f = method.listenersAfter.shift();
            if (_f != f)
                _nl.push(_f);
        }
        method.listenersAfter = _nl;
    }
});
function listenerInit(methodName) {

    var method = this[methodName];
    if (typeof method != "function")
        return false;

    // продекорировано, или ещё нет?
    if (!method.listenable) {
        this[methodName] = method.decorate(function(){
            var decorator = arguments.callee;
            decorator.listenable = true;

            var list = decorator.listenersBefore;
            for (var i = 0, l = list.length; i < l; i++) {
                if (typeof list[i] == "function" && list[i].apply(this, arguments) === false)
                    return;
            }

            var ret = decorator.old.apply(this, arguments);
            list = decorator.listenersAfter;
            for (var i = 0, l = list.length; i < l; i++)
                list[i].apply(this, arguments);

            return ret;
        });
        method = this[methodName];
    }

    method.listenersBefore = method.listenersBefore instanceof Array ? method.listenersBefore : [];
    method.listenersAfter = method.listenersAfter instanceof Array ? method.listenersAfter : [];

    return method;
}

