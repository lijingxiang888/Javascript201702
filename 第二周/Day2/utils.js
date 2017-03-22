function listToArray(list) {
    try{
        return [].slice.call(list, 0); // 如果不兼容则使用执行下面
    }catch (e){
        var arr = [];
        for(var i = 0; i < list.length; i++){
            arr.push(list[i]);
        }
        return arr;
    }
}