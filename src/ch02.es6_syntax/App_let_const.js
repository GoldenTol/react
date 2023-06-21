function App(){
	// let 키워드를 사용한 예시
	let su = 10;
	su += 3;
	console.log('su : ' + su);
	
	let str = 'hohoho';
	str = 'hahaha';
	console.log('str : ' + str);
	
	let arr = []; // empty array
	arr = [10, 20, 30];
	console.log('arr : ' + arr);
	
	let obj = {};
	obj = {name:'hong', password:'1234', age:30};
	console.log('obj : ');
	console.log(obj);
	
	// const 키워드를 사용한 예시
	const su2 = 10;
	console.log('su2 : ' + su2);
	
	return(
		<div>안녕하세요.</div>
	);
}
// 해당 앱을 외부에서 참조할 수 있도록 export 시켜주어야 합니다.
export default App;