import {Table} from 'react-bootstrap';

function App(props){
	const contents = props.contents;
	const onClickItem = props.onClickItem;

	function getProductList(item, index){
		let categoryName = '';

		if(item.category==='BREAD'){
			categoryName = '빵';
		}else if(item.category==='BEVERAGE'){
			categoryName = '음료수';
		}else if(item.category==='CAKE'){
			categoryName = '케이크';
		}else{ // WINE
			categoryName = '와인';
		}

		const trtag = 
			<tr key={index}>
				<td align="center">
					<a href="#" onClick={ItemClicked} id={item.id}>
						{item.name}
					</a>
				</td>
				<td align="right">
					{item.price.toLocaleString()}
				</td>
				<td align="center">
					{categoryName}
				</td>
			</tr>

		return trtag;
	}
	
	const ProductList = () => {
		const dataList = contents.map(getProductList);

		return <tbody>{dataList}</tbody>
	};

	const ItemClicked = (event) => {
		console.log('SpringContent11 - ItemClicked - called');
		event.preventDefault();
		const target_id = event.target.id;
		onClickItem(target_id);
	}

	return(
		<div>
			<Table hover striped bordered>
				<thead>
					<tr>
						<td align="center">이름</td>
						<td align="center">가격</td>
						<td align="center">카테고리</td>
					</tr>
				</thead>
				{ProductList()}
			</Table>
		</div>
	);
}

export default App;