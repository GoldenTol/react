
/* public 폴더 하위에 images 폴더가 존재한 상태에서 테스트를 진행해야 합니다. */

function App(){
	const ChangeTest = (event) => {
		var evt_array = [];
		
		for(const evt in event){
			evt_array.push(evt);
			
		}
		
		console.log(evt_array);
		console.log('event.type : ' + event.type);
		
		/* event.target은 이벤트를 발생시킨 요소를 의미합니다. */
		console.log('event.target : ' + event.target);
		
		var evt_target = [];
		
		for(const item in event.target){
			evt_target.push(item);
		}
		console.log(evt_target);
		
		var target_id = event.target.id;
		
		console.log('event.target.id : ' + event.target.id);
		
		var target_value = event.target.value;
		console.log('target_value : ' + target_value);
		
		if(target_id === 'bread_select'){
			if(target_value != '-'){
				const image_url = '/images/' + target_value;
				document.getElementById('image01').src = image_url;
			}else{
				alert('보여줄 이미지를 선택하셔야 합니다.');
				document.getElementById('image01').src ='';
			}
		}
	}
	return (
		<div>
			<h2>Change 이벤트</h2>
			<input type="text" onChange={ChangeTest} id="input_box"/>
			<br/>
			<select onChange={ChangeTest} id="bread_select">
				<option value="-">항목을 선택해 주세요.</option>
				<option value="french_baguette_01.png">프렌치 바게트</option>
				<option value="croissant_01.png">크로와상</option>
				<option value="brioche_01.png">브리오슈</option>
				<option value="ciabatta_01.png">치아바타</option>
			</select>
			<br/>
			<img id="image01" src="" alt="NoImage" width="300" height="300"/>
		</div>
	);
}
export default App;