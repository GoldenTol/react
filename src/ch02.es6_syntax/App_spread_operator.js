function App(){
	console.log('\n전개 연산자 실습');
	console.log('\nES5 방식의 코딩 방법');
	console.log('\n배열 요소 합치기');
	
	var arr01 = ['김의찬', '이기현'];
	var arr02 = ['강유리', '심수현'];
	var merge01 = [arr01[0], arr01[1], arr02[0], arr02[1]];
	var merge02 = arr01.concat(arr02);
	var merge03 = [].concat(arr01, arr02);
	console.log('merge01 : ' + merge01);
	console.log('merge02 : ' + merge02);
	console.log('merge03 : ' + merge03);
	
	console.log('\n배열 슬라이싱');
	var slice01 = arr01[0];
	var slice02 = arr01[1];
	var slice03 = arr01[2] || '한아름';
	console.log('slice01 : ' + slice01);
	console.log('slice02 : ' + slice02);
	console.log('|| 연산자는 추출할 요소가 없을 때 대체 값을 지정해 줍니다.');
	console.log('slice03 : ' + slice03);
	
	console.log('\nES6 방식의 코딩 방법');
	var arr03 = ['사과', '오렌지'];
	var arr04 = ['복숭아', '키위'];
	
	console.log('\n전개 연산자(... 기호)는 배열의 요소를 쭈욱 나열시키는 역할');
	var merge04 = [...arr03, ...arr04];
	console.log('merge04 : ' + merge04);
	
	var arr05 = ['라면', '우동', '짜장면', '파스타', '칼국수', '잔치국수'];
	var [food01, food02, food03 = 'nofood', ...others] = arr05;
	console.log('food01 : ' + food01);
	console.log('food02 : ' + food02);
	console.log('food03 : ' + food03);
	console.log('others : ' + others);
	
	console.log('\n함수 내에서 전개 연산자 사용하기');
	function printFood(args){ // arguments
		var [first, second, ...others] = args;
		console.log('첫번째 음식 : ' + first);
		console.log('두번째 음식 : ' + second);
		console.log('나머지 음식 : ' + others);
	}
	printFood(arr05); /* 함수 호출 */
	
	console.log('\n객체 내의 특정 속성 덮어쓰기(오버라이딩)');
	const myCar = {brand:'현대', model:'소나타', color:'흰색'};
	console.log(myCar);
	
	const myUpdateCar = {type:'중형', year:2021, color:'흰색'};
	console.log(myUpdateCar);
	
	const myCarInfo = {...myCar, ...myUpdateCar};
	console.log(myCarInfo);
	
	return(
		<div>안녕하세요.</div>
	);
}

export default App;