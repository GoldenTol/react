import {useContext} from 'react' ;
import {AppContext} from './../App_useContext' ;

function App({floor}){
	console.log('HMartFashion Component');
	
	const {items} = useContext(AppContext);
	
	return(
		<div>
			<h3>H 패션관 {floor}층</h3>
			<div>
				<h5>남성복</h5>
				<table>
					<thead>
						<tr>
							<th>이름</th>
							<th>가격</th>
						</tr>
					</thead>
					<tbody>
					{
						items.man.map((item, index) => (
							<tr key={item.index}>
								<td>{item.name}</td>
								<td>{item.price}</td>
							</tr>
						))
					}
					</tbody>
				</table>
			</div>
			<hr/>
			<div>
				<h5>여성복</h5>
				<table>
					<thead>
						<tr>
							<th>이름</th>
							<th>가격</th>
						</tr>
					</thead>
					<tbody>
					{
						items.woman.map((item, index) => (
							<tr key={item.index}>
								<td>{item.name}</td>
								<td>{item.price}</td>
							</tr>
						))
					}
					</tbody>
				</table>
			</div>			
		</div>
	);
}

export default App ;





