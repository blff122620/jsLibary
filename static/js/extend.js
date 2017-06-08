var extend = function() {
    var copy, name, options, src,copyIsArray,clone,
        target = arguments[0] || {},
        deep = false,
        i = 1;
    //这里判断第一个参数是不是deep复制
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[i] || {};
        i++;
    }
    if (i == arguments.length) {
        //啥也不做，如果没有需要扩展的对象出现的话
        return target;
    }

    for (; i < arguments.length; i++) {
        if ((options = arguments[i]) != null) {
            for (name in options) {
                src = target[name];
                copy = options[name];
                copyIsArray=Array.isArray(copy)
                if (deep && copy && (  copyIsArray || isPlainObject(copy) ) ) {
                    //深度拷贝
                    //首先杜绝循环引用
                    if(target === copy){
                        continue;
                    }
                    if(copyIsArray){
                        copyIsArray = false;
                        clone = src && Array.isArray(src) ? src : [];
                    }
                    else{
                        clone = src && isPlainObject(src) ? src : {};
                    }
                    target[name] = extend(deep,clone,copy);

                } 
                else if (copy !== undefined) {
                    //浅拷贝
                    target[name] = copy;
                }
            }
        }
    }
    /**
     * [isPlainObject 判定朴素对象]
     * @param  {[type]}  obj [description]
     * @return {Boolean}     [description]
     */
    function isPlainObject(obj){
        if(typeof obj === "object" && Object.prototype.isPrototypeOf(obj)){
            return true;
        }
        return false;
    }
    function isFunction(obj){
        var typeStr = Object.prototype.toString.call(obj);
        typeStr = typeStr.slice(8,-1);
        if(typeStr === "Function"){
            return true;
        }
        return false;
    }
    return target;
};
