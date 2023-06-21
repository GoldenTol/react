import {Component} from 'react' ;
import Bread from './components/BreadList02';
import Coffee from './components/CoffeeList02';


class App extends Component{ //클래스형 컴포넌트에는 프롭스 생성자
	render(){
		return(
			<div>
				<Bread/>
				<Coffee/>
			</div>
		);
	}
} 

export default App ;