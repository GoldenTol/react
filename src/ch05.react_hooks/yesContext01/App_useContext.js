import {useState} from 'react' ;
import Mart from './components/Mart' ;

function App(){
	const [mode, setMode] = useState(''); /* L(엘마트) H(에이치 마트)*/
	
	const MartSelection = (event) => {
		var target_value = event.target.value ;
		console.log('event.target.value : ' + target_value) ;
		
		if(target_value==='-'){
			alert('마트를 선택해 주셔야 합니다.') ;
			return ;			
		}else{
			setMode(target_value);
		}
	}
	
	return(
		<div style={{position:'absolute', top:'5%', left:'5%'}}>
			<h1>마트 유형 선택</h1>
			<select onChange={MartSelection}>
				<option value="-">마트를 선택해 주세요.</option>
				<option value="L">엘마트</option>
				<option value="H">에이치마트</option>
			</select>
			<Mart mode={mode}/>
		</div>
	);
}

export default App ;