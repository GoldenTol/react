import {useContext} from 'react' ;
import {AppContext} from './../App_useContext' ;

function App({floor}){
	console.log('HMartFashion Component');
	
	const {items, AddNewProduct} = useContext(AppContext);
	
	const manClothes = ['세미정장', '블랙진', '반바지'] ;
	const womanClothes = ['스키니진', '투피스', '오프숄드'] ;
	const prices = [10000, 150000, 200000];	
	
	const AddProduct = (event) => {
		console.log('AddProduct called');
		var target_id = event.target.value;
		console.log('event.target.id : ' + target_id);
		
		if(target_id==='-'){
			alert('품목을 선택해 주셔야 합니다.');
			return ;
		}
		
		var newItem = '' ; /* 신규 상품 */
		
		if(target_id==='man'){
			newItem = {
				name:manClothes[Math.floor(manClothes.length * Math.random())],
				price:prices[Math.floor(prices.length * Math.random())]
			};
			
		}else if(target_id==='woman'){
			newItem = {
				name:womanClothes[Math.floor(womanClothes.length * Math.random())],
				price:prices[Math.floor(prices.length * Math.random())]
			};			
		}
		AddNewProduct(target_id, newItem) ;		
	}
	
	return(
		<div>
			<h3>H 패션관 {floor}층</h3>
			<div>
				<select onChange={AddProduct}>
					<option value="-">항목을 선택해 주세요.</option>
					<option id="man" value="man">남성복</option>
					<option id="woman" value="woman">여성복</option>
				</select>
			</div>
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





