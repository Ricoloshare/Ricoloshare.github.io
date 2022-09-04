$(".el").mousedown(function (e) {
    e.stopPropagation();

    e = e || window.event
    //鼠标相对于盒子的位置
    const object_el = e.target;
    const offsetX = e.clientX - object_el.offsetLeft;
    const offsetY = e.clientY - object_el.offsetTop;
    console.log(object_el)
    //鼠标移动
    document.onmousemove = function (e) {
        e.stopPropagation();
        e = e || window.event
        object_el.style.left = e.clientX - offsetX + "px";
        object_el.style.top = e.clientY - offsetY + "px";
    }
    //鼠标抬起
    document.onmouseup = function (e) {
        e.stopPropagation();
        document.onmousemove = null;
        document.onmouseup = null;
        if (e.target.releaseCapture) {
            e.target.releaseCapture(); //释放全局捕获   
        }
    }
    return false; //标准浏览器的默认行为
})
$(".word1").mousedown(function (e) {
    e.stopPropagation();
    e = e || window.event
    //鼠标相对于盒子的位置
    const object_el = e.target;
    const offsetX = e.clientX - object_el.offsetLeft;
    const offsetY = e.clientY - object_el.offsetTop;
    //鼠标移动
    document.onmousemove = function (e) {
        e.stopPropagation();
        e = e || window.event
        object_el.style.left = e.clientX - offsetX + "px";
        object_el.style.top = e.clientY - offsetY + "px";
    }
    //鼠标抬起
    document.onmouseup = function (e) {
        e.stopPropagation();
        document.onmousemove = null;
        document.onmouseup = null;
        if (e.target.releaseCapture) {
            e.target.releaseCapture(); //释放全局捕获   
        }
    }
    return false; //标准浏览器的默认行为
})
$(".word2").mousedown(function (e) {
    e = e || window.event
    e.stopPropagation();
    //鼠标相对于盒子的位置
    const object_el = e.target;
    const offsetX = e.clientX - object_el.offsetLeft;
    const offsetY = e.clientY - object_el.offsetTop;
    //鼠标移动
    document.onmousemove = function (e) {
        e.stopPropagation();
        e = e || window.event
        object_el.style.left = e.clientX - offsetX + "px";
        object_el.style.top = e.clientY - offsetY + "px";
    }
    //鼠标抬起
    document.onmouseup = function (e) {
        e.stopPropagation();
        document.onmousemove = null;
        document.onmouseup = null;
        if (e.target.releaseCapture) {
            e.target.releaseCapture(); //释放全局捕获   
        }
    }
    return false; //标准浏览器的默认行为
})