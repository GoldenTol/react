import {Component} from 'react' ;

class App extends Component{ //클래스형 컴포넌트에는 프롭스 생성자
	render(){
		const breadlist=[
			{id:1, name:"프렌치바게트", description:"프렌치 바게트는 프랑스의 전통적인 빵으로, 길쭉하고 납작한 형태를 가지며 바삭하고 겉은 바삭한 외피와 안은 부드러운 식감이 특징입니다."},
			{id:2, name:"크로와상", description:"크로와상은 프랑스의 	전통적인 베이커리 제품으로, 말레이지안(팥)크림이나 초콜릿 크림, 과일잼 등 다양한 종류의 필링이 들어있는 삼각형 모양의 빵입니다."},
			{id:3, name:"브리오슈", description:"브리오슈(Brioche)는 프랑스의 전통적인 달콤하고 부드러운 효모식빵입니다."},
			{id:4, name:"치아바타", description:"치아바타(Ciabatta)는 이탈리아의 전통적인 빵으로, 외관적으로는 길쭉하고 폭이 좁은 타원형 모양을 가지며, 바삭하고 부드러운 식감이 특징입니다."}
		];
		
		const tr_data = breadlist.map(one =>
			<tr key={one.id}>
				<td align = "center">{one.id}</td>
				<td>{one.name}</td>
				<td>{one.description}</td>
			</tr>
		);
		
		return(
			<div align="left">
				<table border="1">
					<thead>
						<tr>
							<td>아이디</td>
							<td>이름</td>
							<td>세부설명</td>
						</tr>
					</thead>
					<tbody>
						{tr_data}
					</tbody>
				</table>
			</div>
		);
	}
} 

export default App ;