function App(){
	console.log('\nforEach 함수 사용하기');
	
	var total =0;
	const numarray = [10, 20, 30];
	numarray.forEach(totalSum);
	
	// val은 요소 1개의 값을 말합니다.
	function totalSum(val){
		total += val;
	}
	
	console.log('총합 : ' + total);
	
	var fruits = ['사과', '오렌지', '바나나', '귤', '키위'];
	
	console.log('\n기존 for 구문 활용하기');
	for(let i=0; i<fruits.length; i++){
		console.log((i+1) + '번째 요소 : ' + fruits[i]);
	}
	console.log('\nforEach 구문 활용하기');
	fruits.forEach(item => {console.log(item);});
	
	console.log('\nforEach 구문과 함수의 콜라보');
	fruits.forEach(eachPrint);
	
	// item은 1개 요소의 현재 값을 말합니다. index는 해당 요소의 색인번호를 말합니다.
	function eachPrint(item, index){
		console.log(index + ':' + item);
	}
	
	return(
		<div>App_foreach.js</div>
	);
}

export default App;
