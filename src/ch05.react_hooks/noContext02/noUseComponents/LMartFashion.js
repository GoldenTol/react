function App({floor, items}){		
	console.log('LMartFashion called');
	
	
	return(
		<div>
			<h2>L 패션관 {floor}층</h2>
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