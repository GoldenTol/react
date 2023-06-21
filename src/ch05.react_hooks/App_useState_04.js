import './../App.css';
import {useState} from 'react';

function App(){
	const [members, setMembers] = useState([    
        {id:1, name:'김길선', age:22},
        {id:2, name:'임우경', age:45},
        {id:3, name:'황인태', age:60},
        {id:4, name:'윤철용', age:15}, 
    ]);

    const nameList = members.map(one => {
        return <li id={one.id} key={one.id} onDoubleClick = {() => RemoveSelectedRow(one.id)}>{one.name}({one.age})</li>
    });

    const [name, setName] = useState('');

    const NameChange = (event) => {
        const target_value = event.target.value;
        console.log(target_value);
        setName(target_value);
    }

    const ageList = members.map(one => {
        return <li key={one.id}>{one.name}({one.age})</li>
    });

    const [age, setAge] = useState();

    const AgeChange = (event) => {
        const target_value = event.target.value;
        console.log(target_value);
        setAge(target_value);
    }

    const [nextId, setNextId] = useState(5);

    const AddButtonClick = (event) => {
        const newMembers = members.concat({
            id:nextId, name:name, age:age
        });

        setMembers(newMembers);
        setName('');
        setAge(0);
        setNextId(nextId+1);
    }

    const RemoveSelectedRow = (id) => {
        const resultData = members.filter(one => one.id !== id);
        setMembers(resultData);
    }
	
	return(
		<div>
            이름 : &nbsp;&nbsp;<input value={name} onChange={NameChange} />
            <br/>
            나이 : &nbsp;&nbsp;<input value={age} onChange={AgeChange}/>
            <br/>
            <button onClick={AddButtonClick}>추가</button>
            <br/><br/>
            항목을 더블 클릭하면 요소가 삭제됩니다.
            <br/>
			<h4>회원 목록</h4>
            <ul>{nameList}</ul>
		</div>
    );
}

export default App;