import LFashion from './LFashion';
import HFashion from './HFashion';

function App({mode}){	
	console.log('mode : ' + mode) ;

	var gotopage = null ;
	
	if(mode==='L'){
		gotopage = <LFashion floor={3}/> ;
		
	}else if(mode==='H'){
		gotopage = <HFashion floor={5}/> ;
	}

	return(
		<div>
			{gotopage}
		</div>
	);
}

export default App ;