import LMartFashion from './LMartFashion' ;

function App({floor}){
	console.log('LFashion Component');
	
	return(
		<div>
			<h3>L 마트</h3>
			<LMartFashion floor={floor}/>
		</div>
	);
}

export default App ;