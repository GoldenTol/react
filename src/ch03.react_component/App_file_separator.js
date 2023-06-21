import {Component} from 'react';
// import 컴포넌트이름 from '전체경로를 포함한 파일이름';
// '컴포넌트이름'은 개발자 임의로 명명이 가능합니다.
import Top from './components/Top01';
import Content from './components/Content01';
import Bottom from './components/Bottom01';

class App extends Component{
	render(){
		return(
			<div>
				<Top greeting = "인사말" welcome = "얄루~ 울희 빵집에 와줘서 고마워 ଘ(੭ˊ꒳ˋ)੭✧"/>
				<Content bread01 = "명란바게트" bread02 = "크로와상" bread03 = "뺑오쇼콜라" bread04 = "앙버터" bread05 = "작은메아리" bread06 = "튀김소보루"/>
				<Bottom goodbye = "맺음말" closing = "다음에 또 와~ ᕦ( ᐛ )ᕡ"/>
			</div>
		);
	}
}

export default App;