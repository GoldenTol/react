import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';

function App(props){
	const command = props.command;

	const base_url = 'http://localhost:8989/item/';

	const url = base_url + command;

	/* 수신받은 데이터 */
	const [receivedData, setReceivedData] = useState(null);

	/* 데이터 로딩 중이면 true입니다. */
	const [loading, setLoading] = useState(false);

	/* 오류 발생 시 정보가 들어있는 예외 객체 */
	const [error, setError] = useState(null);

   	useEffect(() => {
		const fetchData = async () => {
			try{
				/* state initialize(state 초기화) */
				setReceivedData(null);
				setError(null);
				setLoading(true);
				
				const response = await axios.get(url);

				setReceivedData(response.data);

				console.log('response.data');
				console.log(response.data);
				
			}catch(err){
				setError(err)

			}/* end try...catch*/
			setLoading(false);

		}/* end fetchData*/
		fetchData(); /* called fetchData function */

   	}, []); /* end useEffect */

	if(loading) return <div>데이터 로딩 중 입니다.</div>
	if(error) return <div></div>
	if(!receivedData) return null;

	if(command==='' || command===null){return null;}

	return (
		<div>
			<Table>
				<tbody>
					<tr>
						<td width="40%">
							<Table striped hover bordered>
								<tbody>
								<tr>
									<td>아이디</td>
									<td>{receivedData.id}</td>
								</tr>
								<tr>
									<td>이름</td>
									<td>{receivedData.name}</td>
								</tr>
								<tr>
									<td>단가</td>
									<td>{receivedData.price}</td>
								</tr>
								<tr>
									<td>분류</td>
									<td>{receivedData.category}</td>
								</tr>
								<tr>
									<td>재고</td>
									<td>{receivedData.stock}</td>
								</tr>
								</tbody>
							</Table>
						</td>
						<td>
							<img src={'/images/' + receivedData.image} alt={receivedData.name} width="210" height="210"/>
						</td>
						<td>
							<p style={{paddingTop:'10px'}}>
								{receivedData.description}
							</p>
						</td>
					</tr>
				</tbody>
			</Table>
      	</div>
   	);
}
export default App;