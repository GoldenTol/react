import {useState} from 'react' ;
import {createContext} from 'react' ;
import Mart from './components/Mart' ;

// AppContext는 컨텍스트 객체로써, export 키워드로 인하여 외부에서 참조가 가능합니다.
export const AppContext = createContext();

function App(){
	const [mode, setMode] = useState(''); /* L(엘마트) H(에이치 마트)*/
	
	const MartSelection = (event) => {
		var target_value = event.target.value ;
		console.log('event.target.value : ' + target_value) ;
		
		if(target_value==='-'){
			alert('마트를 선택해 주셔야 합니다.') ;
			return ;			
		}else{
			setMode(target_value);
		}
	}
	
	const ProductList = {
		man:[
			{name:'셔츠', price:50000}, {name:'청바지', price:70000}
		], 
		woman:[
			{name:'블라우스', price:100000}, {name:'원피스', price:200000}
		]
	};
	

	const [items, setItems] = useState(ProductList);
	
	/* 상품 추가 기능을 호출하였을 때 실행이 됩니다. */
	const AddNewProduct = (who, newProduct) => {
		/* who는 man 또는 woman 중 하나, newProduct는 신규 상품 */
		
		console.log('AddNewProduct called');
		console.log('newProduct');		
		console.log(newProduct);
		
		if(who==='man'){
			setItems({...items, man:[...items.man, newProduct]});
			
		}else if(who==='woman'){
			setItems({...items, woman:[...items.woman, newProduct]});
		}
		
		console.log(newProduct.name  + '이(가) 추가되었습니다.') ;
	};
	
	return(
		<div style={{position:'absolute', top:'5%', left:'5%'}}>
			<h1>마트 유형 선택</h1>
			<AppContext.Provider value={{items, AddNewProduct}}>
				<select onChange={MartSelection}>
					<option value="-">마트를 선택해 주세요.</option>
					<option value="L">엘마트</option>
					<option value="H">에이치마트</option>
				</select>
				<Mart mode={mode}/>
			</AppContext.Provider>
		</div>
	);
}

export default App ;