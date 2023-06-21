import './../App.css';
import {useState, createContext, useContext} from 'react';

const MyContext = createContext();

function App(){
    const [member, setMember] = useState('김철수');
	
	return(
		<MyContext.Provider value={member}>
			<h2>(~˙∇˙)~📣 방가방가~~</h2>
            <br/>
            <h1>{`안뇽안뇽~~  ${member} ᕦ( ᐛ )ᕡ`}</h1>
            <br/>
            <Child />
		</MyContext.Provider>
	);
}

/* 함수형 컴포넌트에서 props는 매개변수 영역에 작성해주면 됩니다. */
function Child(){
    return(
        <div>
            <h1>여기는 Child ✧*˳٩(ˊᗜˋ*)و✧*˳</h1>
            <br/>
            <GrandChild />
        </div>
    );
}

function GrandChild(){
    const member = useContext(MyContext);
    return(
        <div>
            <h1>여기는 GrandChild ! ✧*˳٩(ˊᗜˋ*)و✧*˳</h1>
            <h1>{`작년에 왔던 ${member}야 빠이빠이야 ᕦ( ᐛ )ᕡ`}</h1>
        </div>
    );
}

export default App;