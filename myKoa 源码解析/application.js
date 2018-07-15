let http = require('http');
let context = require('./context');
let request = require('./request');
let response = require('./response');

class Application {
    /**
     * 构造函数
     */
    constructor() {
        this.middlewares = [];
        this.context = context;
        this.request = request;
        this.response = response;
    }
    /**
     * 开启http server并传入callback
     */
    listen(...args) {
        let server = http.createServer(this.callback());
        server.listen(...args);
    }
    /**
     * 挂载回调函数
     * @param {Function} fn 回调处理函数
     */
    use(fn) {
        this.middlewares.push(fn)  ;
    }

    compose(middleware) {
        
        if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!') 
        for (const fn of middleware) {
          if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
        }
      
        /**
         * @param {Object} context
         * @return {Promise}
         * @api public
         */
      
        return function (context, next) {
          // last called middleware #
          let index = -1
          return dispatch(0)
          function dispatch (i) {
            if (i <= index) return Promise.reject(new Error('next() called multiple times')) 
            index = i //避免同一个中间件多次调用next
            let fn = middleware[i] //获得中间件函数
            if (i === middleware.length) fn = next  //递归出口,调用结束
            if (!fn) return Promise.resolve() 
            try {
              return Promise.resolve(fn(context, function next () {
                return dispatch(i + 1)
              }))
            } catch (err) {
              return Promise.reject(err)
            }
          }
        }

    }
    /**
     * 获取http server所需的callback函数
     * @return {Function} fn
     */
    callback() {
        return (req, res) => {
            let ctx = this.createContext(req, res);
            let respond = () => this.responseBody(ctx);
            this.callbackFunc(ctx).then(respond);
        };
    }

    createContext(req, res) {
        // 针对每个请求，都要创建ctx对象
        let ctx = Object.create(this.context);
        ctx.request = Object.create(this.request);
        ctx.response = Object.create(this.response);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res;
        return ctx;
    }
    responseBody(ctx) {
        let content = ctx.body;
        if (typeof content === 'string') {
            ctx.res.end(content);
        }
        else if (typeof content === 'object') {
            ctx.res.end(JSON.stringify(content));
        }
    }

}

module.exports = Application;
