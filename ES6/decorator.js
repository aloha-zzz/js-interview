function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
/**
 * target   构造函数
 * name 属性名
 * descriptor 属性名对应的描述对象
 */
class Person {
    @readonly
    name() { return `${this.first} ${this.last}` }
}