import LMartFashion from './LMartFashion';

function App({floor, items}){		
	console.log('this floor : ' + floor);
	console.log('items');
	console.log(items);
	
	return(
		<div>
			<h1>L 마트</h1>
			<LMartFashion floor={floor} items={items} />
		</div>
	);
}

export default App ;