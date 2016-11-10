/**
 * Created by Administrator on 2016/11/10.
 */
var oBtns = document.getElementsByTagName('button');

var views = document.getElementsByTagName('div');

var router = new Router();
// Array.prototype.forEach.call(views, function(value, index, allArray){
//     router.addStatus(value.id);
// });
var obj = {};
for(var i=0;i<oBtns.length;i++){
    obj[oBtns[i].id] = views[i].id;
    hideAll()
}
//隐藏所有视图
function hideAll(){
    Array.prototype.forEach.call(views, function(value, index, allArray){
        value.style.display='none';
    });
}
//给button按钮绑定视图跳转事件
Array.prototype.forEach.call(oBtns, function(value, index, allArray){
    return (function(){
        value.addEventListener("click",function(){
            hideAll()
            router.addStatus(obj[value.id]);
            // router.watchState();
        },false)
    })()
});
var goBtn = document.getElementById('go');
//跳转都某一视图
goBtn.onclick = function(){
    hideAll()
    router.to('div2');

}
window.addEventListener('popstate', function(){
    //当使用pushState或者replaceState的时候无法触发此事件
    console.log(console.log(window.history));
});

window.onload = function(){
    //刷新页面回到首页
    console.log('loading...');
    router.to('/');
}