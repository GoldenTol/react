import './../App.css' ; /* 스타일 지정 */
import {Component} from 'react';
import StateManager from './components/StateManager';

class App extends Component{
	render(){ //화면에 나오게끔 그림을 만들어주는 역할
		return(
			<div>
				<StateManager/>
			</div>
		);
	}
}

export default App;