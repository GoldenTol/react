function App(){
	console.log('함수 만들기 예시');
	
	console.log('일반적 함수 생성 방식');
	
	function jegob01(a, b){
		return (a*a) + (b*b);
	}
	var su01 = 2;
	var su02 = 3;
	var message = `jugob01(${su01}, ${su02}) 실행결과 : `;
	console.log(message + jegob01(su01, su02));
	
	console.log('\n함수 표현식');
	const jegob02 = function(a, b){return (a*a) + (b*b)};
	
	var su03 = 4;
	var su04 = 5;
	var message = `jugob02(${su03}, ${su04}) 실행결과 : `;
	console.log(message + jegob02(su03, su04));
	
	function myFunction01(x, y){
		console.log('x = ' + x);
		// 매개 변수에 값 할당이 안되면 정의 되지 않은 undefined가 됩니다.
		console.log('y = ' + y);
		return (x * y);
	}
	console.log('myFunction01(4) 실행결과 : ' + myFunction01(4));
	console.log('결과인 NaN A Number의 줄임말입니다.\n');
	
	function myFunction02(x, y = 2){
		console.log('자바 스크립트 함수는 기본 값을 가질 수 있습니다.');
		return (x * y);
	}
	console.log('myFunction02(4) 실행결과 : ' + myFunction02(4));
	
	return(
		<div>안녕하세요.</div>
	);
}

export default App;