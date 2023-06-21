function App(){
	console.log('\n배열 관련 reduce 함수');
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];
	const answer01 = numbers.reduce((total, currentValue) => total + currentValue, 0);
	console.log(answer01);
	
	function Hap(total, currentValue){
		console.log(total + '/' + currentValue);
		return total + currentValue;
	}
	
	var initValue = 0;
	const answer02 = numbers.reduce(Hap, initValue);
	console.log(answer02);
	
	console.log('\n배열 요소들 홀짝 판단하기');
	const array = [10, 15, 25, 30];
	const result = array.reduce((total, currentValue, currentIndex, arr) => {
		console.log('currentValue : ' + currentValue);
		console.log('currentValue % 2 : ' + currentValue % 2);
		console.log('currentIndex : ' + currentIndex);
		console.log('arr : ' + arr);
		
		// 0은 거짓이고, 0이 아니면 참입니다.
		total.push(currentValue % 2 ? '홀수' : '짝수');
		return total;
	}, []); // total 변수는 empty array로 정의합니다.
	
	console.log(result);
	
	console.log('\n원본 배열이 변경되나요?');
	console.log(array);
	
	const MakeTable = () => {
		const students = [
			{name : '이송민', age : 20, subject : '수학과', grade : 'A'},
			{name : '임한울', age : 30, subject : '국어국문학과', grade : 'B'},
			{name : '정소연', age : 40, subject : '전산학과', grade : 'C'},
		];
		const totalData = students.reduce((total, currentValue, currentIndex) => {
			let name = <td>{currentValue.name}</td>;
			let age = <td>{currentValue.age >= 25 ? 'old' : 'young'}</td>;
			let subject = <td>{currentValue.subject}</td>;
			let grade = <td>{currentValue.grade}</td>;
			
			let trTag = <tr key = {currentIndex}>{name}{age}{subject}{grade}</tr>;
			
			total.push(trTag);
			return total;
		}, []);
		
		console.log('\ntotalData');
		console.log(totalData);
		
		return <tbody>{totalData}</tbody>
	};
	
	const TableHeader = () => {
		let name = <td>이름</td>
		let age = <td>연령대</td>
		let subject = <td>학과</td>
		let grade = <td>등급</td>
		
		let trTag = <tr>{name}{age}{subject}{grade}</tr>;
		
		return <thead>{trTag}</thead>
	};
	
	return(
		<div>
			<h2>(๑˘ꇴ˘๑) ଘ(੭ˊ꒳ˋ)੭✧</h2>
			<h2>(~˙∇˙)~📣 방가방가~~ ✧*˳٩(ˊᗜˋ*)و✧*˳</h2>
			<h2>App_reduce.js ᕦ( ᐛ )ᕡ</h2>
			
			<table border = '1'>
			<TableHeader/>
			<MakeTable/>
			</table>
		</div>
	);
}

export default App;