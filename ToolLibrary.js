//es6 过滤数组重复项
//let arr = [1,2,3,4,4,32,4];
//let set = new Set(arr);
//let newArr = Array.from(set);//通过Array.from的方法将set 结构转成数组。

let newSet = (arr) => {
	let set = new Set(arr);
	let newArr = Array.from(set);
	return newArr
}


//es5的方法 过滤数组重复项
//var r,
//arr  = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
//r = arr.filter((element,index,self)=>{
//	return self.indexOf(element) === index;
//})
//element 数组元素
//index数组下标
//self数组
let filterArr = (arr)=>{
	let r ;
	r = arr.filter((element,index,self)=>{
		return  self.indexOf(element) === index;
	})
	return r
}
