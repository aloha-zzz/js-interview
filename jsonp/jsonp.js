let xhr;
if(XMLHttpRequest){
    xhr = new XMLHttpRequest();
} else {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

/**
 * content-type 发送数据
 */
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.res)
    }
}