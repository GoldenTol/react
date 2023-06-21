function App(){
	const ClickEvent01 = () => { //()안에 아무것도 없으면 매개 변수가 없어서 바로 밑에 대입해주면 끝
		console.log('안녕하세요~~ 여러분');
	}
	
	const ClickEvent02 = (param) => { 
		var result = `반갑습니다~~ ${param}님`;
		console.log(result);
	}
	
	const ClickEvent03 = (su01, su02) => { 
		var result = `${su01} 더하기 ${su02}는 ${su01+su02}입니다.`;
		console.log(result);
	}
	
	const ClickEvent04 = (param, event) => { 
		/* event는 이벤트 객체라고 합니다. */
		console.log('파라미터 정보 : ' + param);
		
		/* 해당 이벤트가 보유하고 있는 프로퍼티 목록을 저장할 배열 */
		var evt_array = [];
		
		for(const evt in event){
			evt_array.push(evt);
			
		}
		
		console.log(evt_array);
		console.log('이벤트 타입 : ' + event.type);
	}
	
	return (
		<div>
			<h2>클릭 이벤트</h2>
			<button onClick={ClickEvent01}>매개 변수 0개</button> 
			<br/>
			<button onClick={() => ClickEvent02('김규식')}>매개 변수 1개</button>
			<br/>
			<button onClick={() => ClickEvent03(14, 5)}>매개 변수 2개</button>
			<br/>
			<button onClick={(event) => ClickEvent04('hello', event)}>send event object</button>
		</div>
	);
}

export default App;
