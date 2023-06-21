function App({floor, items}){		
	console.log('HMartFashion called');	
	
	return(
		<div>
			<h2>H 패션관 {floor}층</h2>
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
									<th>{item.name}</th>
									<th>{item.price}</th>
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
									<th>{item.name}</th>
									<th>{item.price}</th>
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