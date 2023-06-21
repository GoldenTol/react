import {useContext} from 'react' ;
import {AppContext} from './../App_useContext';

function App({floor}){
	console.log('LMartFashion Component');
	
	// AppContext에 저장되어 있는 items를 좀 사용할께요.
	const {items} = useContext(AppContext);
	
	
	return(
		<div>
			<h3>L 패션관({floor}층)</h3>
			<div>
				<h3>남성복</h3>
				<ol>
					{items.man.map((item, index)=>{
						return(
							<li key={item.index}>{item.name} : {item.price}원</li>
						);
					})}
				</ol>
			</div>
			<hr/>
			<div>
				<h3>여성복</h3>
				<ul>
					{items.woman.map((item, index)=>{
						return(
							<li key={item.index}>{item.name} : {item.price}원</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App ;







