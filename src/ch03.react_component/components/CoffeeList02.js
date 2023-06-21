import {Component} from 'react' ;
import TableHeader from './TableHeader02';

class App extends Component{ //클래스형 컴포넌트에는 프롭스 생성자
	render(){
		const coffeelist=[
			{id:1, name:"에스프레소", description:"에스프레소는 강한 향과 맛을 가진 이탈리아식 커피 음료입니다. 보통은 30ml 정도의 작은 잔에 담겨져 있으며, 높은 압력을 가해 추출된 커피입니다. "},
			{id:2, name:"아메리카노", description:"아메리카노는 에스프레소에 뜨거운 물을 추가한 커피 음료입니다. 보통 에스프레소 한잔에 뜨거운 물을 1:1 비율로 추가하여 만들어지며, 에스프레소의 진한 맛과 향을 유지하면서도 물의 얇은 맛을 더해주기 때문에 커피 초보자들도 쉽게 즐길 수 있는 커피 음료입니다."},
			{id:3, name:"카페라떼", description:"카페라떼는 에스프레소와 스팀밀크, 그리고 조금의 거품이 올려진 우유를 섞어 만든 커피 음료입니다. 보통은 에스프레소 한잔에 우유를 2:1 정도의 비율로 섞어 만들어지며, 에스프레소의 진한 맛과 향을 유지하면서도, 우유의 부드러운 맛과 향이 더해져 부드럽고 고소한 맛을 느낄 수 있습니다."},
			{id:4, name:"카푸치노", description:"카푸치노는 에스프레소와 스팀밀크, 그리고 거품이 올려진 우유를 섞어 만든 커피 음료입니다. 에스프레소 한잔에 우유를 1:1 정도의 비율로 섞어 만들어지며, 에스프레소의 진한 맛과 향과 스팀밀크의 고소한 맛이 조화롭게 어우러져 부드럽고 진한 맛을 느낄 수 있습니다."},
			{id:5, name:"카라멜마끼아또", description:"카라멜 마끼아또는 에스프레소, 스팀밀크, 카라멜 시럽을 섞어 만든 커피 음료입니다. 일반적으로 에스프레소 한잔에 스팀밀크를 1:1 비율로 섞고, 거기에 카라멜 시럽을 넣어 만들어지며, 스팀밀크와 카라멜의 달콤하고 부드러운 맛과 에스프레소의 진한 맛과 향이 조화롭게 어우러져, 커피의 쓴 맛이 조금 중화되어 부드러운 맛을 느낄 수 있습니다."}
		];
		
		const tr_data = coffeelist.map(one =>
			<tr key={one.id}>
				<td align = "center">{one.id}</td>
				<td>{one.name}</td>
				<td>{one.description}</td>
			</tr>
		);
		
		return(
			<div align="left">
				<table border="1">
					<TableHeader/>
					<tbody>
						{tr_data}
					</tbody>
				</table>
			</div>
		);
	}
} 

export default App ;