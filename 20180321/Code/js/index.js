//搜索框搜索对象转换
var getEleById = function(id) {
    return document.getElementById(id);
};

var topInit = getEleById("goods"); //顶部已选项初始值
var botInit = getEleById("shop"); //底部可选项初始值
var selectList = getEleById("selected");
var typeArr = ["宝贝", "店铺"]; //类型数组初始值

var changeType = function() {
    //让顶部可选项永远保持是类型数组的第一项
    topInit.innerHTML = typeArr.reverse()[0];
    //让顶部可选项永远保持是类型数组的第二项
    botInit.innerHTML = typeArr[1];
};

selectList.onclick = changeType;