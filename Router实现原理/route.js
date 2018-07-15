function Router() {
    this.routes = {};
    this.currentUrl = ''; // history = []
  
}
Router.prototype.route = function (path, callback) {
    this.routes[path] = callback || function () {
        };
};
Router.prototype.refresh = function () {
    console.log('触发一次 hashchange，hash 值为', location.hash);
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]();
};
Router.prototype.init = function () {
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
};
window.Router = new Router();
window.Router.init();
/**
 *  前进后退  ---|
 *              |
 *              | => URL => callback 
 *              |   监听 popstate ,  hashChange load 变化事件
 *  Link,to js --
 */