function App(){
	console.log('\n구조 분해 할당');
	var members = ['이경철', '서유진'];
	var element01 = members[0];
	var element02 = members[1];
	
	console.log('ES5 element01 : ' + element01);
	console.log('ES5 element02 : ' + element02);
	
	// members[2] 요소가 없으므로 undefined가 출력됨
	var element03 = members[2];
	console.log('ES5 element03 : ' + element03);
	
	// ||기호를 사용하여 기본 값을 지정할 수 있습니다.
	var element03_2 = members[2] || '윤기선';
	console.log('ES5 element03_2 : ' + element03_2);
	
	var members2 = ['황보람', '신수경'];
	console.log('\nES6 members2 : ' + members2);
	
	var [element04, element05, element06 = '유미리'] = members2;
	console.log('ES6 element04 : ' + element04);
	console.log('ES6 element05 : ' + element05);
	console.log('ES6 element06 : ' + element06);
	
	console.log('\nswapping 기법');
	var temp = element02;
	element02 = element01;
	element01 = temp;
	
	console.log('ES6 element01 : ' + element01);
	console.log('ES6 element02 : ' + element02);
	
	// 파이썬 : (element04, element05) = (element05, element04)
	[element04, element05] = [element05, element04]
	console.log('ES6 element04 : ' + element04);
	console.log('ES6 element05 : ' + element05);
	
	console.log('\n객체 다루기');
	var obj5 = {name5:'강유철', age5:30};
	var name = obj5.name5;
	var age = obj5.age5;
	var address = obj5.address5 || '서울시 마포구 합정동';
	
	console.log('ES5 name : ' + name);
	console.log('ES5 age : ' + age);
	console.log('ES5 address : ' + address);
	
	console.log('\n구조 분해를 이용한 값 할당하기');
	console.log('주의) 변수의 이름이 동일해야 합니다.');
	var obj6 = {name6:'서유진', age6:20};
	const {name6, age6} = obj6;
	console.log('ES6 name : ' + name6);
	console.log('ES6 age : ' + age6);
	
	// 자바에서 가변 매개변수일 때 ... 사용
	console.log('\n...는 전개 연산자(spread operator)');
	var members3 = ['이경철', '서유진', '강유철', '신수경', '임희춘'];
	var [onehuman, second, ...humans] = members3;
	
	console.log('ES6 onehuman : ' + onehuman);
	console.log('ES6 second : ' + second);
	console.log('ES6 humans : ' + humans);
	
	console.log('\n객체를 사용한 전개 연산자');
	var {...humanInfo} = {'name':'이경철', 'age':30, 'address':'금천구 가산동'};
	console.log("humanInfo['name'] : " + humanInfo['name']);
	console.log("humanInfo['age'] : " + humanInfo['age']);
	console.log("humanInfo['address'] : " + humanInfo['address']);
	console.log("humanInfo['gender'] : " + humanInfo['gender']);

	return(
		<div>안녕하세요.</div>
	);
}

export default App;