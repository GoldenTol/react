import {useState} from 'react' ;
import LFashion from './LFashion';
import HFashion from './HFashion';
//import {useEffect} from 'react' ;

function App({mode, items}){
	console.log('MartNo mode : ' + mode) ;
	console.log('items') ;
	console.log(items) ;
	
	/* 마트별 패션관 위치 */
	const [floor, setFloor] = useState(0); 
	

	var gotopage = null ; /* 이동할 컴포넌트 */
	if(mode==='L'){
		//setFloor(3);
		gotopage = <LFashion floor={3} items={items}/>;
	}else if(mode==='H'){
		//setFloor(5);
		gotopage = <HFashion floor={5} items={items}/>;
	}
	
	console.log('fashion floor : ' + floor) ;	
	
	return(
		<div>
			{gotopage}
		</div>
	);
}

export default App ;