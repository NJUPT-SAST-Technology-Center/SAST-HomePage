/*单个彩块移动 */
function move(object,time){
    obj = document.getElementById(object);
    obj.style.animation = obj.id +" "+time+" linear 1";
    obj.style.webkitAnimation = obj.id +" "+time+" linear 1"; /*Safri,Chrome*/
}

/*页面打开时彩块聚集 */
window.onload = function topBackground(){
    move('rectangle-1','1s');
    move('rectangle-2','1.2s');
    move('rectangle-3','1s');
    move('rectangle-4','1.5s');
    move('rectangle-5','1.45s');
    move('rectangle-6','1.2s');
}

/* 照片墙背景彩块发散 */
function pictureWallBackground(){
    move('rectangle-11','0.4s');
    move('rectangle-12','0.45s');
    move('rectangle-13','0.5s');
    move('rectangle-14','0.5s');
    move('rectangle-15','0.5s');
    move('rectangle-16','0.5s');
    move('rectangle-17','0.45s');
    move('rectangle-18','0.4s');
    move('rectangle-19','0.4s');
}