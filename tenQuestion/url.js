var url =
    'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled';


function parseUrl(url) {
    let search = url.slice(url.indexOf('?') + 1);
    let temp = search.split('&');
    let ans = {};
    temp.map(item => {
        if (item.indexOf('=') < 0) {
            ans[item] = true;
        } else {
            let index = item.indexOf('=');
            let pre = item.slice(0, index);
            let after = item.slice(index + 1);
            if (!ans[pre]) {
                ans[pre] = decodeURIComponent(after);
            } else {
                ans[pre] = [ans[pre]].concat(after);
            }

        }
    })
    console.log(ans)
}

parseUrl(url)