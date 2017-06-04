(function(){
    var func1 = function(){
        for(var i=0; i<5; i++){
            setTimeout(function(){
                console.log((new Date()).getSeconds(),i);
            },1000);
        }
        console.log((new Date()).getSeconds(),i);
    };
    var func2 = function(){
        for(var i=0; i<5; i++){
            (function(j){
                setTimeout(function(){
                    console.log((new Date()).getSeconds(),j);
                },1000);
            }(i));
            
        }
        console.log((new Date()).getSeconds(),i);
    };
    // func2();
    var func3 = function(){
        
        for(var i=0; i<5; i++){
            output(i); 
        }
        console.log((new Date()).getSeconds(),i);
    };
    // func3();
    var func4 = function(){
        for(var i=0; i<5; i++){
            (function(j){
                setTimeout(function(){
                    console.log((new Date()).getSeconds(),j);
                },1000*i);
            }(i));
        }
        setTimeout(function(){
            console.log((new Date()).getSeconds(),i);
        },1000*i);
        
    };
    // func4();
    var func5 = function(){
        let output = (i,resolve) => {
            setTimeout(() => {
                    console.log((new Date()).getSeconds(),i);
                    resolve(i);
            },1000*i);
        };
        const tasks = [];

        for(var i=0; i<5; i++){
            tasks.push(new Promise((resolve) => {
                output(i,resolve);
                
            })); 
        }

        Promise.all(tasks).then(function(posts){
            setTimeout(()=>{console.log((new Date()).getSeconds(),i);},1000);
            
            console.log(posts);
        });
        
    };
    func5();
}());