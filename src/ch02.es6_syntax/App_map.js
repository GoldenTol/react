function App(){
	console.log('\n배열 관련 map 함수');
	const numbers = [4, 9, 16, 25];
	
	function multiply(num){
		console.log('호출됨');
		return 10 * num;
	}
	
	const result01 = numbers.map(multiply);
	console.log(result01);
	
	console.log('\n비어 있는 배열도 호출이 되나요?');
	const result02 = [].map(multiply);
	console.log(result02);
	
	console.log('\nmap()과 화살표 함수의 조합');
	const twotimes = n => 2 * n;
	const twotimes_result = numbers.map(twotimes);
	console.log(twotimes_result);
	
	console.log('\n자바 스크립트 Math 객체 사용하기');
	const rootValue = numbers.map(Math.sqrt);
	console.log(rootValue);
	
	const foods = ['라면', '우동', '짜장면', '파스타', '칼국수', '잔치국수'];
	const foodResult = foods.map(one => '맛있는 ' + one + '~~좋아요.');
	console.log(foodResult);
	
	const words = ['love', 'peach', 'hello', 'sea', 'identification'];
	console.log('\n각 단어들의 문자열 길이');
	console.log(words.map(one => one.length));
	
	var min_length = []; // empty Array
	const mylength = 4;
	console.log('\n문자열 길이가 ' + mylength + '이하인 단어들');
	words.map(one => {
		if(one.length <= mylength){
			min_length.push(one);
		}
	});
	console.log(min_length);
	
	console.log('\nmap() 함수를 사용한 Component화');
	const WinterItems = () => {
		const names = ['눈사람', '눈오리', '눈썰매', '눈싸움'];
		const nameList = names.map((name, index) => <li>{name}</li>);
		return <ul>{nameList}</ul>;
	};
	
	const persons = [
		{firstname : "민정", lastname : "김", age : 10},
		{firstname : "효리", lastname : "이", age : 40},
		{firstname : "지영", lastname : "강", age : 20}
	];
	
	const Hello = () => {
		return <h1>방가방가~~ ✧*˳٩(ˊᗜˋ*)و✧*˳</h1>;
	};
	
	function getPersonInfo(item){
		const info = <li>{item.lastname} {item.firstname}님, 나이 : {item.age}세</li>;
		return info;
	}
	
	const CustomerList = () => {
		const personList = persons.map(getPersonInfo);
		return <ol>{personList}</ol>;
	};
	
	return(
		<div>
			<h2>겨울놀이</h2>
			<WinterItems></WinterItems>
			<h2>환영인사</h2>
			<Hello/>
			<CustomerList/>
		</div>
	);
}

export default App;
