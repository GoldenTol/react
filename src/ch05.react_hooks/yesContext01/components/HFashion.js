import HMartFashion from './HMartFashion' ;

function App({floor}){
	console.log('HFashion Component');
	
	return(
		<div>
			<h3>H 마트</h3>
			<HMartFashion floor={floor}/>
		</div>
	);
}

export default App ;