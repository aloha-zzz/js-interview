render('我是{{name}}，年龄{{age}}，性别{{sex}}', {
    name: '姓名',
    age: 18
})

function render(tpl, data) {
    tpl = tpl.replace(/\{\{(.+?)\}\}/g, function(m, m1) {
        console.log(m1)
        return data[m1]
    })
    console.log(tpl)
}
