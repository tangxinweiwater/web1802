
//功能：与后端交互，从后端获取数据
//参数：
// 请求地址（url）
// 请求方式:
// 请求参数：（前端传给后端的数据）
// 是否异步

//返回值：无

function ajax1802(url,type,data,isAsync,func){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、设置请求参数
	let urlStr=url;
	if(type.toLowerCase()=="get" && data!=""){
		urlStr = urlStr+"?"+data;
	}
	xhr.open(type,urlStr,isAsync);
	
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func(xhr.responseText);			
		}
	}		
	//4、发送请求
	if(type.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	}else{
		xhr.send();
	}
}
