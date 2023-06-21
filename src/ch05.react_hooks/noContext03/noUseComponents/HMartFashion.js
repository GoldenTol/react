function App({floor, items, pushData}){
	console.log('HMartFashion called');

	const AddProudct = (event) => {
		var target_value = event.target.value;

		if(target_value==='-'){
			alert('항목을 선택해 주셔야 합니다.') ;
			return ;

		}else if(target_value==='man'){
			pushData(target_value, {name:'남성품목', price:50000});

		}else if(target_value==='woman'){
			pushData(target_value, {name:'여성품목', price:100000});
		};
	}

	return(
		<div>
			<h2>H 패션관 {floor}층</h2>
			<div>
				<select onChange={AddProudct}>
					<option value="-">항목을 선택해 주세요.</option>
					<option value="man">남성복</option>
					<option value="woman">여성복</option>
				</select>
			</div>
			<div>
				<h4>남성복</h4>
				<table border="1">
					<thead>
						<tr>
							<th>이름</th>
							<th>가격</th>
						</tr>
					</thead>
					<tbody>
						{items.man.map((item, index) => {
							return(
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.price}</td>
								</tr>
							);
						})}

					</tbody>
				</table>
			</div>
			<div>
				<h4>여성복</h4>
				<table border="1">
					<thead>
						<tr>
							<th>이름</th>
							<th>가격</th>
						</tr>
					</thead>
					<tbody>
						{items.woman.map((item, index) => {
							return(
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.price}</td>
								</tr>
							);
						})}


					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App ;
