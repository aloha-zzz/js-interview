var isValid = function (s) {
    let stack = [];
    let arr = s.split('');
    let left = '{[(';
    let bool = true;
    arr.forEach(item => {
        if (left.indexOf(item) > -1) {
            stack.push(item)
        } else {
            let pop = stack.pop();
            switch (item) {
                case ')':
                    if (pop !== '(') {
                        bool = false;
                        return;
                    }
                    break;
                case ']':
                    if (pop !== '[') {
                        bool = false;
                        return;
                    }
                    break;
                case '}':
                    if (pop !== '{') {
                        bool = false;
                        return;
                    }
                    break;
            }
        }
    })
    if (stack.length !== 0) {
        bool = false;
    }
    return bool
};