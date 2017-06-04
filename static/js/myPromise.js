(function() {
    var fn = function(resolve, reject) {
        console.log('begin to execute!');
        var number = Math.random();
        if (number <= 0.5) {
            resolve('less than 0.5');
        } else {
            reject('greater than 0.5');
        }
    };

    var fn2 = function(resolve, reject) {
        resolve('less than 0.5');
        reject('greater than 0.5');

    };

    function MyPromise(fn) {
        this.value;
        this.status = "pending";
        this.resolveFunc = function() {};
        this.rejectFunc = function() {};
        fn(this.resolve.bind(this), this.reject.bind(this));
    }
    MyPromise.prototype.resolve = function(data) {
        var self = this;
        if (self.status == "pending") {
            self.value = data;
            setTimeout(function() {
                self.resolveFunc(self.value);
            }, 0);
            self.status = "resolved";
        }

    };
    MyPromise.prototype.reject = function(data) {
        var self = this;
        if (self.status == "pending") {
            self.value = data;
            setTimeout(function() {
                self.rejectFunc(self.value);
            }, 0);
            self.status = "rejected";
        }
    };

    MyPromise.prototype.then = function(resolveFunc, rejectFunc) {
        var self = this;
        return new MyPromise(function(resolveNext, rejectNext) {
            function resolveFuncWrap() {
                var result = resolveFunc(self.value);
                if (result instanceof MyPromise) {
                    result.then(resolveNext, rejectNext);
                } else {
                    resolveNext(result);
                }

            }

            function rejectFuncWrap() {
                var result = rejectFunc(self.value);
                if (result instanceof MyPromise) {
                    result.then(resolveNext, rejectNext);
                } else {
                    resolveNext(result);
                }
            }
            self.resolveFunc = resolveFuncWrap;
            self.rejectFunc = rejectFuncWrap;
        });


    };
    var p = new MyPromise(fn);
    p.then(function(data) {
        console.log("resolve:" + data);
        return "ok";
    }, function(data) {
        console.log("reject:" + data);
        return "不ok";
    }).then(function(data) {
        console.log("resolve:" + data);
        return new MyPromise(function(resolve, reject) { resolve(data) });
    }).then(function(data) { console.log("resolve3:" + data) });


}());
