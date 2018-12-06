//兼容addEventListener函数
function addEventListener(ele,event,fn){
    if(ele.addEventListener){
        ele.addEventListener(event,fn,false);
    }else{
        ele.attachEvent('on'+event,fn.bind(ele));
    }
}

//兼容removeEventListener函数
function removeEventListener(ele,event,fn){
    if(ele.removeEventListener){
        ele.removeEventListener(event,fn,false);
    }else{
        ele.detachEvent('on'+event,fn.bind(ele));
    }
}

module.exports = {
    addEventListener,
    removeEventListener
};