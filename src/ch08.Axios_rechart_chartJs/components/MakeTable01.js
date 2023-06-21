import './mystyle.css';
import {Table} from 'react-bootstrap';

function App(props){
	console.log('props.sendData');
	console.log(props.sendData);

    const TableList = () => {
        const UserList = props.sendData.map(onedata => (
            <tr key={onedata.id}>
                <td>{onedata.id}</td>
                <td>{onedata.name}</td>
                <td className="number">{onedata.kor}</td>
                <td className="number">{onedata.eng}</td>
                <td className="number">{onedata.math}</td>
                <td className="number">{onedata.kor + onedata.eng + onedata.math}</td>
            </tr>
        ));
        return <tbody>{UserList}</tbody>
    }

	return (
        <>
            <h3>학생들 성적표</h3>
            <Table striped hover bordered>
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>국어</th>
                        <th>영어</th>
                        <th>수학</th>
                        <th>총점</th>
                    </tr>
                </thead>
                <TableList/>
            </Table>
        </>
	);
}
export default App;