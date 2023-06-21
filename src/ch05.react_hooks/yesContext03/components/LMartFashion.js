import {useContext} from 'react' ;
import {AppContext} from './../App_useContext';

function App({floor}){
	console.log('LMartFashion Component');
	
	// AppContext에 저장되어 있는 items를 좀 사용할께요.
	const {items, AddNewProduct} = useContext(AppContext);
	
	const manClothes = ['세미정장', '블랙진', '반바지'] ;
	const womanClothes = ['스키니진', '투피스', '오프숄드'] ;
	const prices = [10000, 150000, 200000];
	
	const AddProduct = (event) => {
		console.log('AddProduct called');
		var target_id = event.target.id;
		console.log('event.target.id : ' + target_id);
		
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
			<h3>L 패션관({floor}층)</h3>
			<div>
				<button id="man" onClick={AddProduct}>남성복 추가</button>
				<button id="woman" onClick={AddProduct}>여성복 추가</button>
			</div>
			<div>
				<h3>남성복</h3>
				<ol>
					{items.man.map((item, index)=>{
						return(
							<li key={item.index}>{item.name} : {item.price}원</li>
						);
					})}
				</ol>
			</div>
			<hr/>
			<div>
				<h3>여성복</h3>
				<ul>
					{items.woman.map((item, index)=>{
						return(
							<li key={item.index}>{item.name} : {item.price}원</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App ;







