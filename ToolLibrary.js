//es6 过滤数组重复项
//示例代码
//let arr = [1,2,3,4,4,32,4];
//let set = new Set(arr);
//let newArr = Array.from(set);//通过Array.from的方法将set 结构转成数组。

let newSet = (arr) => {
	let set = new Set(arr);
	let newArr = Array.from(set);
	return newArr
}

//es5的方法 过滤数组重复项
//示例代码
//var r,
//arr  = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
//r = arr.filter((element,index,self)=>{
//	return self.indexOf(element) === index;
//})
//element 数组元素
//index数组下标
//self数组
let filterArr = (arr) => {
	let r;
	r = arr.filter((element, index, self) => {
		return self.indexOf(element) === index;
	})
	return r
}

//示例代码
//var hash = {};
//let arr = [{"name":"小黄"},{"name":"小黄"},{"name":"小l"},{"name":"小l"},{"name":"小l"},{"name":"小x"},{"name":"小m"},{"name":"小h"}];
//arr = arr.reduce((container,item)=>{
//	hash[item.name] ? "":hash[item.name]
//})
//过滤数组对象重复项
//arr 数字
//name 过滤的字母
let ArrObjReduce = (arr,name) => {
	let hash = {}
	arr = arr.reduce((container, item) => {
		hash[item[name]] ? "" : hash[item[name]] = true && container.push(item);
		return container
	}, [])
	return arr
}

//时间锉转换成时间
//转换成 2015/7/18 下午4:50:43 格式：
let timeFile = (tm) => {
	var tt = new Date(tm).toLocaleString();
	return tt;
}
//.转换成 2015-7-18  下午4:50:43格式：
let timeFileT = (tm) => {
	var tt = new Date(tm).toLocaleString().replace(/\//g, "-");
	return tt;
}

//加零函数
let = addZero = (m) => {
	return m < 10 ? '0' + m : m
};
//时间锉转成时间
let getDate = (timeFile) => {
	//timeFile是整数，否则要parseInt转换  
	var time = new Date(timeFile.length > 10 ? timeFile.length * 1000 : timeFile);
	var y = time.getFullYear();
	var m = time.getMonth() + 1;
	var d = time.getDate();
	var h = time.getHours();
	var mm = time.getMinutes();
	var s = time.getSeconds();
	return y + '-' + addZero(m) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(mm) + ':' + addZero(s);
};
//移动端适配rem
//传入对象(document, window)适配750的ps图
let mobRem = (doc, win) => {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth >= 750) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			}
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
};

//判断是什么浏览器类型
let getExplorer = () => {
	var browser = 0;
	var explorer = window.navigator.userAgent;
	if(explorer.indexOf("MSIE") >= 0) {
		browser = 'ie';
	} else if(explorer.indexOf("Firefox") >= 0) {
		browser = 'firefox';
	} else if(explorer.indexOf("Chrome") >= 0) {
		browser = 'chrome';
	} else if(explorer.indexOf("Opera") >= 0) {
		browser = 'opera';
	} else if(explorer.indexOf("Safari") >= 0) {
		browser = 'safari';
	}
	return browser;
}
//判断ie浏览器
let outIe = (window) => {
	var theUA = window.navigator.userAgent.toLowerCase();
	if((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
		var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
		if(ieVersion < 9) {
			var str = "你的浏览器版本太低了,已经和时代脱轨了 :(";
			var str2 = "推荐使用:<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:blue;'>谷歌</a>," +
				"<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%81%AB%E7%8B%90%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:blue;'>火狐</a>," + "<a href='https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=baidu&wd=IE11%E6%B5%8F%E8%A7%88%E5%99%A8&oq=%25E8%25B0%25B7%25E6%25AD%258C%25E6%25B5%258F%25E8%25A7%2588%25E5%2599%25A8&rsv_pq=b8d4119a000161bd&rsv_t=0381F7aojF2j91S6s6MfveyLP4BVXVQe7l814Y8JTEWpexCGFl94WjX9F7s&rqlang=cn&rsv_enter=0&rsv_sug3=12&rsv_sug1=9&rsv_sug7=100&prefixsug=I%2526gt%253B11%25E6%25B5%258F%25E8%25A7%2588%25E5%2599%25A8&rsp=3&inputT=19433&rsv_sug4=19435' target='_blank' style='color:blue;'>IE</a>," +
				"其他双核极速模式";
			document.writeln("<pre style='text-align:center;color:red;background-color:#ccc; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234'>" +
				"<h2 style='padding-top:200px;margin:0'><strong>" + str + "<br/></strong></h2><h2>" +
				str2 + "</h2><h2 style='margin:0'><strong>如果你的使用的是IE浏览器，请升级到IE9及以上版本<br/></strong></h2></pre>");
			document.execCommand("Stop");
		};
	}
}
//正则匹配 //匹配成功返回true
//正则去掉两段的空格
let trims = (str) => { 
	return str.replace(/(^\s*)|(\s*$)/g, ""); 
}
//验证只能输入数字
let isNumber = (str) => {
	var reg = /^[0-9]*$/;
	return reg.test(str);
}
//邮箱验证
let isEmail = (str) => {
	var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return reg.test(str);
}
//手机验证
let isPhone = (str) => {
	var reg = /^1(3|4|5|7|8)\d{9}$/;
	return reg.test(str);
}
//电话验证
let isTel = (str) => {
	var reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
	return reg.test(str);
}

//身份验证identity 15-18位
let identity = (str) => {
	let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return reg.test(str);
}
//验证邮编编号
let isPost = (str) => {
	var reg = /[1-9]{1}(\d+){5}/;
	return reg.test(str);
}
//验证年龄18-90
let isold = (str) => {
	var reg = /^(1[89]|[2-8][0-9]|90)$/;
	return reg.test(str);
}
//验证密码 (以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
let isPass = (str) => {
	var reg = /^[a-zA-Z]\w{5,17}$/;
	return reg.test(str);
}
//验证密码 强 (必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
let isPassT = (str) => {
	var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
	return reg.test(str);
}
//钱   
let isMony = (str) => {
	var reg = /^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/;
	return reg.test(str);
}
//验证qq好
let isQQ = (str) => {
	var reg = /[1-9][0-9]{4,}/;
	return reg.test(str);
}

//图片上传博客
//https://www.cnblogs.com/007sx/p/7583202.html


//数组的用法
//数组的增加
//ary.push()   向数组末尾添加元素，返回的是添加后新数组的长度，原有数组改变
//ary.unshift()  向数组开头添加元素，返回的是添加后新数组的长度，原有数组改变
// var ary=[1,2,3,4];
// var res=ary.unshift(6);
// console.log(res); ---->5   返回的是新数组的长度
//ary.splice(n,m,x)从索引n开始删除m个元素，把新增的元素X放在索引n的前面，把删除的元素当成一个新数组返回，原有数组改变。
//ary.splice(n,0,x)从索引n开始删除0个元素，把新增加的元素x放在索引n的前面，返回的是一个空数组，原有数组改变。
//ary.splice(n,m)从索引n开始删除m个元素，把删除的内容当做新数组返回，原有数组改变
//splice(0,0,x)----->unshift
//数组的删除
//ary.pop() 删除数组的最后一项，返回的是删除的那一项，原有数组改变
//ary.shift() 删除数组的的第一项，返回的是删除的那一项，原有数组改变
//var ary=[5,8,3,4,6];
//var res=ary.shift();
//console.dir(res);---->5 返回数组第一项
//删除数组最后一项的内容 ary.splice(ary.length-1,1)  //ary.length-1 数组最后一项的内容         ary.length-=1     ary.length--
//  var ary=[5,8,3,4,6];
//     ary.splice(ary.length-1,1);
//     ary.length-=1;
//    console.dir(ary);---->输出的是[5,8,3,4]
//数组的查询和复制
//
//slice(n,m)从索引n开始，找到索引m处，把找到的内容作为新的数组返回，原有数组不改变        
//slice(n-1,m)把数组的第n项到第m项提取出来
//slice(n) 从索引n开始查找到数组末尾
//slice(0) slice() 将原有数组复制一份 属于数组克隆  
//concat() 也可以实现数组克隆   
//concat的本意是实现数组的拼接 ary.concat(ary2) 把两个数组进行拼接
//数组的排列和排序
//reverse() 把数组倒过来排序，原有数组改变
//sort 可以实现由大到小或者由小到大的排序 但是直接写sort只能排序十以内的数字  ary.sort(function(a,b){return (a-b);})
//数组转化为字符串
//tostring把数组的每一项拿出来用逗号隔开，原有数组不变
//join("+")把数组的每一项拿出来用指定分隔符隔开

//vue 的生命周期
//beforeCreate: function() {
//	console.log("实例创建之前");
//},
//created: function() {
//	console.log("a is:" + this.a);
//	console.log("实例创建之后");
//},
//beforeMount: function() {
//	console.log("模板编译/挂载之前")
//},
//mounted: function() {
//	console.log("模板编译/挂载之后")
//},
//beforeupdated: function() {
//	console.log("实例更新之前")
//},
//updated: function() {
//	console.log("实例更新之后")
//},
//beforeDestory: function() {
//	console.log("组件销毁前调用")
//},
//destroyed: function() {
//	console.log("组件销毁后调用")
//}

//正则字符
//	字符	描述
//	\	将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，'n' 匹配字符 "n"。'\n' 匹配一个换行符。序列 '\\' 匹配 "\" 而 "\(" 则匹配 "("。
//	^	匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\n' 或 '\r' 之后的位置。
//	$	匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。
//	*	匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。
//	+	匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
//	?	匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 中的"do" 。? 等价于 {0,1}。
//	{n}	n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。
//	{n,}	n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。
//	{n,m}	m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。
//	?	当该字符紧跟在任何一个其他限制符 (*, +, ?, {n}, {n,}, {n,m}) 后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串 "oooo"，'o+?' 将匹配单个 "o"，而 'o+' 将匹配所有 'o'。
//	.	匹配除 "\n" 之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用象 '[.\n]' 的模式。
//	(pattern)	匹配 pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，在VBScript 中使用 SubMatches 集合，在JScript 中则使用 $0…$9 属性。要匹配圆括号字符，请使用 '\(' 或 '\)'。
//	(?:pattern)	匹配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用 "或" 字符 (|) 来组合一个模式的各个部分是很有用。例如， 'industr(?:y|ies) 就是一个比 'industry|industries' 更简略的表达式。
//	(?=pattern)	正向预查，在任何匹配 pattern 的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，'Windows (?=95|98|NT|2000)' 能匹配 "Windows 2000" 中的 "Windows" ，但不能匹配 "Windows 3.1" 中的 "Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。
//	(?!pattern)	负向预查，在任何不匹配 pattern 的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如'Windows (?!95|98|NT|2000)' 能匹配 "Windows 3.1" 中的 "Windows"，但不能匹配 "Windows 2000" 中的 "Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始
//	x|y	匹配 x 或 y。例如，'z|food' 能匹配 "z" 或 "food"。'(z|f)ood' 则匹配 "zood" 或 "food"。
//	[xyz]	字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。
//	[^xyz]	负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'。
//	[a-z]	字符范围。匹配指定范围内的任意字符。例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。
//	[^a-z]	负值字符范围。匹配任何不在指定范围内的任意字符。例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符。
//	\b	匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。
//	\B	匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。
//	\cx	匹配由 x 指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。
//	\d	匹配一个数字字符。等价于 [0-9]。
//	\D	匹配一个非数字字符。等价于 [^0-9]。
//	\f	匹配一个换页符。等价于 \x0c 和 \cL。
//	\n	匹配一个换行符。等价于 \x0a 和 \cJ。
//	\r	匹配一个回车符。等价于 \x0d 和 \cM。
//	\s	匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。
//	\S	匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。
//	\t	匹配一个制表符。等价于 \x09 和 \cI。
//	\v	匹配一个垂直制表符。等价于 \x0b 和 \cK。
//	\w	匹配包括下划线的任何单词字符。等价于'[A-Za-z0-9_]'。
//	\W	匹配任何非单词字符。等价于 '[^A-Za-z0-9_]'。
//	\xn	匹配 n，其中 n 为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，'\x41' 匹配 "A"。'\x041' 则等价于 '\x04' & "1"。正则表达式中可以使用 ASCII 编码。.
//	\num	匹配 num，其中 num 是一个正整数。对所获取的匹配的引用。例如，'(.)\1' 匹配两个连续的相同字符。
//	\n	标识一个八进制转义值或一个向后引用。如果 \n 之前至少 n 个获取的子表达式，则 n 为向后引用。否则，如果 n 为八进制数字 (0-7)，则 n 为一个八进制转义值。
//	\nm	标识一个八进制转义值或一个向后引用。如果 \nm 之前至少有 nm 个获得子表达式，则 nm 为向后引用。如果 \nm 之前至少有 n 个获取，则 n 为一个后跟文字 m 的向后引用。如果前面的条件都不满足，若 n 和 m 均为八进制数字 (0-7)，则 \nm 将匹配八进制转义值 nm。
//	\nml	如果 n 为八进制数字 (0-3)，且 m 和 l 均为八进制数字 (0-7)，则匹配八进制转义值 nml。
//	\un	匹配 n，其中 n 是一个用四个十六进制数字表示的 Unicode 字符。例如， \u00A9 匹配版权符号 (?)