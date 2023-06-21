import './../App.css';
import {useState} from 'react';

function App(){
	const [car, setCar] = useState({
			model : 'avante',
			year : 2020,
			color : 'white',
			image : 'avante.png'
	});
	
	const ChangeTest = (event) => {
		var target_id = event.target.id;
		console.log('event.target.id : ' + target_id);
		
		var target_value = event.target.value;
		console.log('event.target.value : ' + target_value);
		
		if(target_id === 'color'){
			setCar({...car, color:target_value});
			
		}else if(target_id === 'type'){
			setCar({...car, model:target_value, image:`${target_value}.png`});
			
		}else if(target_id === 'year'){
			setCar({...car, year:target_value});
		}
	} 
	
	// {}는 자바 스크립트 표현식, {{}}는 스타일 객체를 표현하는데 사용됩니다.
	
	return(
		<div>
			<h1>차 정보</h1>
			<p>
				차종은 이미지 변경이 되고, 색상은 설명 문구의 색상이 변경됩니다.
			</p>
			차종 변경 : &nbsp;
			<select onChange = {ChangeTest} id = "type">
				<option value = "avante">아반떼</option>
				<option value = "grandeur">그랜저</option>
				<option value = "sonata">소나타</option>
			</select>	
			<br/><br/>
			
			색상 변경 : &nbsp;
			<select onChange = {ChangeTest} id = "color">
				<option value = "white">흰색</option>
				<option value = "silver">은색</option>
				<option value = "black">검정색</option>
				<option value = "red">빨강색</option>
				<option value = "yellow">노랑색</option>
				<option value = "blue">파랑색</option>
			</select>	
			<br/><br/>
			
			생산년도 변경 : &nbsp;
			<select onChange = {ChangeTest} id = "year">
				<option value = "2020">2020</option>
				<option value = "2021">2021</option>
				<option value = "2022">2022</option>
				<option value = "2023">2023</option>
			</select>	
			<br/><br/>
			
			<p style = {{color:car.color}}>
				{car.color} 색상의 {car.year}년산 차종 "{car.model}"<br/>
			</p>
			<br/><br/>
			
			<img src={'/images/'+ car.image} alt="" width="120" height="120"/>
			
		</div>
    );
}

export default App;