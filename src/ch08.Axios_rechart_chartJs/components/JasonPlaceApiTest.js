import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';

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

				const url = 'https://jsonplaceholder.typicode.com/users';
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

	const CustomerList = () => {
		const UserList = receivedData.map(onedata => (
			<ListGroup.Item as="li" key={onedata.id}>
				{onedata.username}({onedata.name})
			</ListGroup.Item>
		));

		return <ListGroup as="ol" numbered>{UserList}</ListGroup>;
	};

	const TableHeader = () => {
		let name = <th>이름</th>;
		let email = <th>이메일</th>;
		let city = <th>도시</th>;
		let company = <th>회사명</th>;
		let zipcode = <th>우편 번호</th>;
		let website = <th>웹사이트</th>;
		let trTag = <tr>{name}{email}{city}{company}{zipcode}{website}</tr>;

		return <thead>{trTag}</thead>;
	};

	const TableContent = () => {
		const UserList = receivedData.map(onedata => (
			<tr key={onedata.id}>
				<td>{onedata.username}</td>
				<td>{onedata.email}</td>
				<td>{onedata.address.city}</td>
				<td>{onedata.company.name}</td>
				<td>{onedata.address.zipcode}</td>
				<td>{onedata.website}</td>
			</tr>
		));

		return <tbody>{UserList}</tbody>;
	};

	
	return (
		<div>
			<CustomerList/>
			<hr/>
			<Table>
				<TableHeader/>
				<TableContent/>
			</Table>
		</div>
	);
}
export default App;