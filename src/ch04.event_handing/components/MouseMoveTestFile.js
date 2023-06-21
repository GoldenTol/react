/* MouseMove, MouseOver, MouseOut 등이 있습니다. */
function App(){
	const MouseMoveTest = (tag, event) => {
		console.log('a');
		
		var evt_array = [];
		
		for(const evt in event){
			evt_array.push(evt);
			
		}
		
		console.log(evt_array);
		
		const image_src = event.target.src;
		console.log('event.target.src : ' + image_src);
		
		const image_name = event.target.alt;
		console.log('image_name : ' + image_name);
		
		
		//document.getElementById('img_name').innerHTML = image_name;
		
		document.getElementById('image_target').src = image_src;
	}
	
	return (
		<div>
			<h2>MouseMove 이벤트</h2>
			<p>임의의 이미지에 마우스가 들어가면 큰 이미지 영역에 이미지가 보입니다.</p>
			<table>
				<tbody>
					<tr>
						<td width="100">
							<img onMouseMove={(event) => MouseMoveTest('img', event)} src="/images/french_baguette_01.png" 
							alt="프렌치 바게트" width="50" height="50"/>
						</td>
						<td width="400" rowSpan="4">
							<h4 id="img_name"></h4>
							<img id="image_target" src="" alt="NoImage" width="400" height="400"/>
						</td>
					</tr>
					<tr>
						<td width="100">
							<img onMouseMove={(event) => MouseMoveTest('img', event)} src="/images/croissant_01.png" alt="크로와상" width="50" height="50"/>
						</td>
					</tr>
					<tr>
						<td width="100">
							<img onMouseMove={(event) => MouseMoveTest('img', event)} src="/images/brioche_01.png" alt="브리오슈" width="50" height="50"/>
						</td>
					</tr>
					<tr>
						<td width="100">
							<img onMouseMove={(event) => MouseMoveTest('img', event)} src="/images/ciabatta_01.png" alt="치아바타" width="50" height="50"/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
export default App;