(()=>{
    var ndContainer = $$("#js-ul"),
        batchSize = 4,
        total = 19,
        batchCount = total / batchSize,
        batchDone = 0;
    if(!ndContainer){
        return;
    }
    function appendItems(container){
        const fragment = document.createDocumentFragment();
        for(let i=0; i<batchSize; i++){
            if(batchDone * batchSize + i == total){
                break;
            }
            const ndItem = document.createElement("li");
            ndItem.innerText = batchDone * batchSize + i+1;
            fragment.appendChild(ndItem);
            // ndItem.addEventListener("click",function(event){
            //     alert(this.innerText);
            // });
        }
        container.appendChild(fragment);
        batchDone += 1  ;
    }
    function addItem(){
        if(batchDone < batchCount){
            appendItems(ndContainer);
            requestAnimationFrame(addItem);
        }
        
    }
    addItem();
    ndContainer.addEventListener("click",function(event){
        if (event.target.tagName === 'LI') {
            console.log(event.target.innerHTML);
        }
        
    });

    //深度优先
    let ndRoot = $$("#js-root");
    function dfs(node){
        console.log("深度优先：" + node.tagName + " ." + node.className);
        let ndChild = getChild(node);
        if(ndChild.length == 0){
            return ;
        }
        ndChild.forEach(function(item){
            dfs(item);
        });
    }
    function getChild(node){
        let ndList = Array.prototype.slice.call(node.childNodes).filter(function(item){
            if(item.nodeType ==1){
                return item;
            }
        });
        return Array.prototype.slice.call(ndList);
    }
    dfs(ndRoot);

    //广度优先
    function bfs(node){
        let queue = [{node:node,level:1}];
        let level = 1;
        while(queue.length > 0){
            let ndShift = queue.shift();
            let ndSChilds = getChild(ndShift.node);
            console.log("广度优先：" + ndShift.node.tagName + " ." + ndShift.node.className + " level:" + ndShift.level);

            if(ndSChilds.length > 0){
                for(let i=0; i< ndSChilds.length; i++){
                    queue.push({node:ndSChilds[i],level:ndShift.level+1});
                }
            }
        }
    }
    bfs(ndRoot);
})();