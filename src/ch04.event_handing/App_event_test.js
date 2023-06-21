import './../App.css' ; /* 스타일 지정 */
import ClickTestComponent from './components/ClickTestFile';
import ChangeTestComponent from './components/ChangeTestFile';
import MouseTestComponent from './components/MouseMoveTestFile';
import KeyEventComponent from './components/KeyEventTestFile';
import SubmitTestComponent from './components/SubmitTestFile';


function App(){
	return (
		<div>
			<h1>React 함수형 이벤트</h1>
			<ClickTestComponent/>
			<hr/>
			<ChangeTestComponent/>
			<hr/>
			<MouseTestComponent/>
			<hr/>
			<KeyEventComponent/>
			<hr/>
			<SubmitTestComponent/>
			<hr/>
		</div>
	);
}

export default App;
