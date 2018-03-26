//用对象字面量来封装获取标签的相关方法
var $ = {
    name: "获取元素的方法",
    //通过id值获取标签
    byId: function(id) {
        return document.getElementById(id);
    },

    //通过class获取标签
    byClass: function(className) {
        return document.getElementsByClassName(className);
    },

    //通过标签名获取标签
    byTag: function(tagName) {
        return document.getElementsByTagName(tagName);
    }
};

//动态给网址导航栏各分栏列表项分配宽度
var aListWrapper = $.byClass("site-list");
for (var i = 0, len = aListWrapper.length; i < len; i++) {
    var aSiteList = aListWrapper[i].children[1]; //获取无序列表
    var liLen = aSiteList.children.length; //存储无序列表的列表项数目
    if (liLen > 27) { //列表项的数目大于27
        var liL = aSiteList.children;
        for (var j = 0, mosLen = liL.length; j < mosLen; j++) {
            liL[j].style.width = "24%";
        }
    } else if (liLen <= 27 && liLen > 12) { //列表项的数目大于12且小于或等于27
        var liM = aSiteList.children;
        for (var k = 0, morLen = liM.length; k < morLen; k++) {
            liM[k].style.width = "33%";
        }
    } else { //列表项的数目小于或等于12
        var liS = aSiteList.children;
        for (var m = 0, sLen = liS.length; m < sLen; m++) {
            liS[m].style.width = "49%";
        }
    }
}

//搜索框搜索对象转换

var topInit = $.byId("goods"); //顶部已选项初始值
var botInit = $.byId("shop"); //底部可选项初始值
var selectList = $.byId("selected");
var typeArr = ["宝贝", "店铺"]; //类型数组初始值

var changeType = function() {
    //让顶部可选项永远保持是类型数组的第一项
    topInit.innerHTML = typeArr.reverse()[0];
    //让顶部可选项永远保持是类型数组的第二项
    botInit.innerHTML = typeArr[1];
};

selectList.onclick = changeType;

//回到顶部

var backTopBtn = $.byId("go_top");

var backTop = function() {
    var top = document.body.scrollTop || document.documentElement.scrollTop; //获取滚动条距离,后者是为了兼容IE
    scrollBy(0, -top); //让滚动条距离为0，实现回到顶部
};

backTopBtn.onclick = backTop;

//窗口大小监听事件
var backTopBar = $.byId("back-top-bar");
onresize = function() {
    var thisWidth = document.body.clientWidth; //实时可视窗口宽度
    if (thisWidth < 1700) {
        backTopBar.style.right = 100 + "px";
        backTopBar.style.top = 700 + "px";
    } else {
        backTopBar.style.right = 320 + "px";
        backTopBar.style.top = 730 + "px";
    }
};