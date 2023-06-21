function App(){
	console.log('\n객체 확장 표현식');
	console.log('기존 객체 방식을 간결하고, 동적으로 생성할 수 있도록 만든 기능');
	var name = '박기현';
	var korean = 60;
	var english = 80;
	
	console.log('\nES5 방식');
	console.log('{key01:value01, key02:value02}');
	var student05 = {name:name, korean:korean, english:english};
	console.log(student05);
	
	var firstname = 'gildong';
	var combined05 = {}; // empty Object
	combined05['hong' + firstname] = '홍길동'; // setter
	console.log(combined05);
	console.log('typeof(combined05) : ' + typeof(combined05));
	console.log('JSON.stringify(combined05) : ' + JSON.stringify(combined05));
	console.log('getter : ' + combined05['hong gildong']);
	
	console.log('\n함수 리스트 작성시 function 키워드를 사용합니다.');
	var functionList05 = {
		sayHello:function(name){console.log('안녕하세요. ' + name + '씨');},
		goodLuck:function(){return '행운을 빕니다. ^^';}
	};
	
	functionList05.sayHello('이아현');
	console.log(functionList05.goodLuck());
	
	console.log('\nES6 방식');
	console.log('key를 생략하면 변수의 이름이 자동으로 key가 됩니다.');
	var student06 = {name, korean, english};
	console.log(student06);
	
	console.log('\nkey 프로퍼피를 동적으로 생성시  대괄호를 사용합니다.');
	var combined06 = {['hong' + firstname]:'홍만식'};
	console.log('combined06');
	console.log(combined06);
	
	console.log('\n함수 리스트 작성시 function 키워드를 사용하지 않습니다.');
	var functionList6  = {
		korean,
		sayHello(name){console.log('방가방가요 ~(^◡^)~ ' + name + '님');},
		goodBye(){return '바바이. ~(¯◡¯)~';}
	};
	
	console.log('국어 점수 : ' + functionList6.korean);
    functionList6.sayHello('노영민');
    console.log(functionList6.goodBye());

	
	return(
		<div>App_object_extension_expression.js</div>
	);
}

export default App;