import {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component{
	render(){
		// 여러 개의 프로퍼티를 구조 분해 할당하여 각각의 변수에 대입해 줍니다.
		const {isCheck, members, address, array, node, func, salary} = this.props;
		
		// 블리언 타입과 삼항 연산자 사용
		const message = this.props.isCheck ? '놀러 갑시다.' : '열심히 일 합니다.';
		return(
			<table border = '1'>
				<tbody>
					<tr>
						<th>항목(props)</th>
						<th>값 출력</th>
					</tr>
					<tr>
						<td>진위형 변수</td>
						<td>{String(isCheck)}</td>
					</tr>
					<tr>
						<td>결과 메세지</td>
						<td>{message}</td>
					</tr>
					<tr>
						<td>객체(이름, 나이)</td>
						<td>{String(Object.entries(members))}</td>
					</tr>
					<tr>
						<td>주소(String)</td>
						<td>{address}</td>
					</tr>
					<tr>
						<td>급여(number)</td>
						<td>{salary}</td>
					</tr>
					<tr>
						<td>배열</td>
						<td>{array}</td>
					</tr>
					<tr>
						<td>노드(태그)</td>
						<td>{node}</td>
					</tr>
					<tr>
						<td>함수</td>
						<td>{String(func)}</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

// 값이 넘어오지 않는 경우 프로퍼티의 기본 값을 지정할 때 사용합니다.
App.defaultProps = {
	salary : 1234
	
}

// 해당 props의 데이터 타입을 지정합니다.
// members는 이름과 나이를 가지고 있는 객체 형태로 넘겨 주어야 합니다.
// node는 html 태그를 의미합니다.
// array는 숫자 형식의 배열입니다.
// address는 문자열로, 필수 입력 사항입니다.
// 다음은 필수 사항을 입력하지 않았을 때 보이는 경고 메시지 입니다.
// Warning: Failed prop type: The prop `address` is marked as required
//     in `ChildComponent`, but its value is `undefined`.

App.propTypes = {
   isCheck:PropTypes.bool,
   members:PropTypes.shape({
      name:PropTypes.string,
      age:PropTypes.number
   }),
   address:PropTypes.string.isRequired,
   salary:PropTypes.number,
   array:PropTypes.arrayOf(PropTypes.number),
   node:PropTypes.node,
   func:PropTypes.func
}

export default App;