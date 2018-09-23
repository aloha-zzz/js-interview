function Car (){
    let Engine = () => {
        this.run = 'i am engine'
    }
    let Tires = () => {
        this.run = 'i am tires'
    }

    this.engine = new Engine();
    this.tires = new Tires();
}
/**
 * 没有engine, tires 构造函数
 * 1.难以测试
 * 2. engine 如果加参数 new engine 也要加。 耦合
 * 3.
 */



function Car (Engine, Tires){
   
    this.engine = new Engine();
    this.tires = new Tires();
}