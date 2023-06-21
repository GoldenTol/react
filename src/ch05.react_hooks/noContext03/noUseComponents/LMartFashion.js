
function App({floor, items, pushData}){		
	console.log('LMartFashion called');
	
	const manNames = ['세미 정장', '블랙진', '반바지'];
	const womanNames = ['스키니 진', '투피스', '오프숄드'];
	const prices = [10000, 15000, 20000];
	
	const AddProudct = (event) => {
		console.log('AddProudct called') ;
		var target_id = event.target.id ;
		console.log('event.target.id : ' + target_id) ;
		
		let newItem = '' ;
		
		if(target_id==='man'){
			newItem = {
				name:manNames[Math.floor(manNames.length*Math.random())], 
				price:prices[Math.floor(prices.length*Math.random())]
			} ;	
			
		}else if(target_id==='woman'){
			newItem = {
				name:womanNames[Math.floor(womanNames.length*Math.random())], 
				price:prices[Math.floor(prices.length*Math.random())]
			} ;	
		}
		pushData(target_id, newItem);
	}
	
	return(
		<div>
			<h2>L 패션관 {floor}층</h2>
			<div>
				<button id="man" onClick={AddProudct}>남성복 추가</button>
				<button id="woman" onClick={AddProudct}>여성복 추가</button>
			</div>
			<div>
				<h4>남성복</h4>
				<ol>
					{items.man.map((item, index) => {
						return(
							<li key={index}>{item.name} : {item.price}원</li>
						);
					})}
				</ol>				
			</div>
			<div>
				<h4>여성복</h4>
				<ul>
					{items.woman.map((item, index) => {
						return(
							<li key={index}>{item.name} : {item.price}원</li>
						);
					})}
				</ul>
			</div>			
		</div>
	);
}

export default App ;