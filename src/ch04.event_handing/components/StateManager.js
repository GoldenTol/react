import {Component} from 'react';

/*
생성자 내에서 state 정의
필요한 위치에서 {}(중괄호)를 사용하여 참조
함수 changeInfo 정의
생성자 내에서 함수 바인딩(이벤트와 함수를 연동시키는 일)
onXXX 이벤트 props로 연동 (여기선 onClick)
버튼 클릭 테스트하기
n초 있다가 자동으로 갱신(setTimeout 함수 사용)
*/

class App extends Component{
	constructor(props){
		super(props);
		
		/* second는 타이머가 동작할 시간 */
		this.state={name:'이순철', age:20, second:3000} 
		
		this.bindingTest = this.changeInfo.bind(this);
		
		/*setTimeout(function,milisecond);*/
		setTimeout(this.bindingTest,this.state.second);
	}
	
	changeInfo(){
		const addage = 10;
		const {age} = this.state;
		console.log('age : ' + age);
		
		/* state값 변경*/
		this.setState({name:'이철식', age: addage+age}); 
	}
	
	render(){
		return(
			<div>
				{this.state.second/1000}초 후에 데이터 변경이 이루어 집니다.
				<button onClick={this.bindingTest}>클릭</button>
				<br/>
				<table border="1">
					<tbody>
						<tr>
							<td>이름</td>
							<td>{this.state.name}</td>
						</tr>
						<tr>
							<td>나이</td>
							<td>{this.state.age}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;