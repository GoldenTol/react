import LMartFashion from './LMartFashion';

function App({floor, items, pushData}){		
	console.log('this floor : ' + floor);
	console.log('items');
	console.log(items);
	
	return(
		<div>
			<h1>L 마트</h1>
			<LMartFashion floor={floor} items={items} pushData={pushData}/>
		</div>
	);
}

export default App ;