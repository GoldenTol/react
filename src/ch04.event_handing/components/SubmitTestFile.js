function App(){
	const ChangeTest = (event) => {
		const where = event.target.value;
		console.log('event.target.value : ' + where);
		document.getElementById('myform').action = where;
	}
	
	const SubmitTest = (event) => {
		var evt_array = [];
		for(const evt in event){
			evt_array.push(evt);
		}
		console.log(evt_array);
		
		console.log('event.type : ' + event.type);
		
		var go = document.getElementById('go').checked;
		console.log('go : ' + go);
		
		if(go == true){
			alert('액션 페이지로 이동합니다.');
		}else{
			alert('액션 페이지로 이동하지 않습니다.');
			event.preventDefault(); // 이벤트 전파 방지
		}
	}
	
	
	return(
		<div>
			<h2>Submit Test ᕦ( ᐛ )ᕡ</h2>
			<form id = "myform" onSubmit = {SubmitTest} action = "">
				<select onChange={ChangeTest}>
					<option value = "http://www.naver.com">네이버</option>
					<option value = "http://www.daum.net">다음</option>
				</select>
				&nbsp;&nbsp;&nbsp;
				<input type = "Checkbox" value = "Submit" name = "go" id = "go" />이동하기
				&nbsp;&nbsp;&nbsp;
				<input type = "submit" value = "Submit" />
			</form>
		</div>
	);
}

export default App;