function listToArray(list) {
    try{
        return [].slice.call(list, 0)
    }catch (e){
        var arr = [];
        for(var i = 0; i < list.length; i++){
            arr.push(list[i]);
        }
        return arr;
    }
}