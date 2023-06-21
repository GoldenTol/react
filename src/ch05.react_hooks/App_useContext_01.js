import './../App.css';
import {useState, useEffect} from 'react';

function App(){
    const [member, setMember] = useState('홍길동');
	
	return(
		<div>
			<h2>(~˙∇˙)~📣 방가방가~~</h2>
            <br/>
            <h1>{`안뇽안뇽~~  ${member} ᕦ( ᐛ )ᕡ`}</h1>
            <br/>
            <Child member={member} />
		</div>
	);
}

/* 함수형 컴포넌트에서 props는 매개변수 영역에 작성해주면 됩니다. */
function Child({member}){
    return(
        <div>
            <h1>여기는 Child ✧*˳٩(ˊᗜˋ*)و✧*˳</h1>
            <br/>
            <GrandChild member={member} />
        </div>
    );
}

function GrandChild({member}){
    return(
        <div>
            <h1>여기는 GrandChild ! ✧*˳٩(ˊᗜˋ*)و✧*˳</h1>
            <h1>{`작년에 왔던 ${member}아 빠이빠이야 ᕦ( ᐛ )ᕡ`}</h1>
        </div>
    );
}

export default App;