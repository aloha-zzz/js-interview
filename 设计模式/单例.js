const getSingle = function (fn){
	let result;
	return function (){
		return result || (result = fn.apply(this, arguments));
	};
};
// 创建登录模态框
const createLoginLayer = function (){
	const div = document.createElement('div');
	div.innerHTML = '我是登录模态框';
	document.body.appendChild(div);
	return div;
};
// 为登录模态框使用单例模式
const createSingleLoginLoyer = getSingle(createLoginLayer);
const loginLayer1 = createSingleLoginLoyer(); // 第一个登录模态框
const loginLayer2 = createSingleLoginLoyer(); // 还是第一个登录模态框
console.log(loginLayer1 === loginLayer2); // true

// 惰性单例

const createLoginLayer = (function (){
	let div;
	return function (){
		if (!div) {
			div = document.createElement('div');
			div.innerHTML = '我是登录模态框';
		}
		return div;
	};
})();

// 在点击按钮时才创建节点（惰性）
document.getElementById('login-btn').onclick = function (){
	var loginLayer = createLoginLayer();
	loginLayer.style.display = 'block';
};

