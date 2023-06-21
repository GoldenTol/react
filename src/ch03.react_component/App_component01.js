// react 모듈에서 Component 클래스를 가져 와서 좀 사용하겠습니다.
import {Component} from 'react';
import './ch03.App.css';

class App extends Component{
	render(){
		return(
			<div>
				<div>(~˙∇˙)~📣 방가방가~~ ✧*˳٩(ˊᗜˋ*)و✧*˳</div>
				<img src = "http://localhost:3000/쫄병스낵.jpg" width = "200" height = "200"/>
				<div>클래스 방식(간단 JSX 실습)</div>
			</div>
		);
	}
}

// class App extends Component의 App과 export default App;의 App : App 클래스의 이름과 동일해야 합니다.
export default App;