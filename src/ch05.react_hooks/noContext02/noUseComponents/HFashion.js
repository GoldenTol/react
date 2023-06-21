import HMartFashion from './HMartFashion' ; 

function App({floor, items}){		
	console.log('this floor : ' + floor);
	console.log('items');
	console.log(items);
	
	return(
		<div>
			<h1>H 마트</h1>
			<HMartFashion floor={floor} items={items} />
		</div>
	);
}

export default App ;