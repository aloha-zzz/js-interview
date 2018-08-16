

/**
 * content-type 发送数据格式
 * 
 */

// const url = 'http://localhost:3000/jsonp';

document.getElementById('button').onclick = function() {
    // xhr.open('GET', url)
    // xhr.send();
    let script = document.createElement('script');
    let url = 'http://localhost:3000/jsonp' + '?callback=hello' 
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script); 
}


function hello(res) {
    alert('hello' + res)
}


let file = document.getElementById('file')

document.getElementById('upload').onclick = function() {
    const fd = new FormData()
    fd.append('file', file.files[0])

    let xhr;
    if(XMLHttpRequest){
        xhr = new XMLHttpRequest();
    } else {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
    xhr.open('POST', 'http://localhost:3000/upload')
    // xhr.setRequestHeader('Content-Type','multipart/form-data')
    xhr.send(fd)
}

document.getElementById('send').onclick = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 ) {
            console.log(xhr.responseText)
        }
    }
}