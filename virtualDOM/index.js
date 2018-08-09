function Element({ tagName, props, children }) {
    if (!(this instanceof Element)) {
        return new Element({tagName, props, children})
    }

    this.tagName = tagName;
    this.props = props || {};
    this.children = children || [];
}

Element.prototype.render = function () {
    console.log(this.tagName)
    let ele = document.createElement(this.tagName);
    let props = this.props;
    for(let i in props) {
        ele.setAttribute(i, props[i]);
    }

    this.children.forEach(item => {
        let child
        if(item instanceof Element){
            child = item.render();
        } else {
            child = document.createTextNode(item);
        }
        console.log(ele)
        ele.appendChild(child);
    }) 
    return ele
}


var elem = Element({
    tagName: 'ul',
    props: {'class': 'list'},
    children: [
        Element({tagName: 'li', children: ['item1']}),
        Element({tagName: 'li', children: ['item2']})
    ]
});
document.querySelector('body').appendChild(elem.render());
