import {Component} from 'react' ;

/* TableHeader02 : 표 태그의 헤더 정보를 저장하고 있는 컴포넌트 */
class App extends Component{
	render(){
		return(
			<thead>
				<tr>
					<td>아이디</td>
					<td>이름</td>
					<td>세부설명</td>
				</tr>
			</thead>
		);
	}
} 

export default App ;