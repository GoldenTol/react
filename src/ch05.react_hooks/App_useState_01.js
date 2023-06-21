import './../App.css';
import {useState} from 'react';
/* useState Hook을 사용하겠습니다. */

function App(){
	/* color state의 초기 값은 yellow이고, 값을 변경하고자 할 때는 setColor()를 사용하시면 됩니다. */
	// const [변수, 메소드] = useState('초기 값 변수');
	const [color, setColor] = useState('yellow');
	const [image, setImage] = useState('brioche_01.png');
	const [bread, setBread] = useState('brioche');
	
	const ClickEvent = () => {
		console.log('현재 색상 : ' + color);
		console.log('현재 빵 : ' + bread);

		if(color == 'red'){
			setColor('orange');
			setBread('brioche01');
			setImage('brioche_01.png');
			
		}else if(color == 'orange'){
			setColor('yellow');
			setBread('brioche02');
			setImage('brioche_02.png');
			
		}else if(color == 'yellow'){
			setColor('green');
			setBread('ciabatta02');
			setImage('ciabatta_02.png');
			
		}else if(color == 'green'){
			setColor('blue');
			setBread('ciabatta03');
			setImage('ciabatta_03.png');
			
		}else if(color == 'blue'){
			setColor('navy');
			setBread('croissant01');
			setImage('croissant_01.pngg');
			
		}else if(color == 'navy'){
			setColor('purple');
			setBread('croissant02');
			setImage('croissant_02.png');
			
		}else if(color == 'purple'){
			setColor('red');
			setBread('frenchBaguette01');
			setImage('french_baguette_01.png');
		}
	
	return(
		<div>
			<h1>My favorite color is {color}!</h1>
			<font color={color}><b>글자 색상</b></font>
			<br/><br/>
			<button type="button" onClick={ClickEvent}>
			클릭 시 이미지 변경 및 {color}색상으로 변경
			</button>
			
			<br/><br/>
			<span>{bread}</span>
            <img src={'/images/'+ image} alt={bread} width="300" height="300"/>
		</div>
    );
}

export default App;