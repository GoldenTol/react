import HMartFashion from './HMartFashion' ; 

function App({floor, items, pushData}){		
	console.log('this floor : ' + floor);
	console.log('items');
	console.log(items);
	
	return(
		<div>
			<h1>H 마트</h1>
			<HMartFashion floor={floor} items={items} pushData={pushData} />
		</div>
	);
}

export default App ;