import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';

import Content from './BarChart01';
import MyTable from './MakeTable01';

function App(){
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

				const url = 'http://localhost:8989/thymeleaf/rest/ex03';
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
	if(error) return <div>오류가 발생했습니다.</div>
	if(!receivedData) return null;

	
	return (
		<div>
			<Content chartData ={receivedData}/>
            <MyTable sendData ={receivedData}/>
		</div>
	);
}
export default App;