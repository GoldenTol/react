import './../App.css';
import {useState, useEffect} from 'react';

function App(){
    const [count, setCount] = useState(1);
    const [twoTimes, setTwoTimes] = useState(0);
    const [su01, setSu01] = useState(0);

    const [imageIdx, setImageIdx] = useState(0);
    const [image, setImage] = useState('');

    const interval = 1000;
    const array = ['brioche_01.png', 'ciabatta_02.png', 'croissant_02.png', 'french_baguette_01.png']

    useEffect(() => {
        setTwoTimes(() => 2*count);
        setSu01(() => 3*count+1);

        let changeImg = '/images/' + array[imageIdx];
        setImage(changeImg);

        setImageIdx(imageIdx + 1);
        console.log('현재 이미지 인덱스 : ' + imageIdx);

        if(imageIdx == (array.length-1)){setImageIdx(0);}

    }, [count]);
	
	return(
		<div>
			<h2>(~˙∇˙)~📣 방가방가~~ ✧*˳٩(ˊᗜˋ*)و✧*˳</h2>
            <br/>
			<h1>카운터 : {count} </h1>
            <h1>2배수 : {twoTimes} </h1>
            <h1>y = 3 * x + 1 : {su01} </h1>
            <button onClick={() => {setCount((colunt) => count+1)}}>+1 증가</button>
            <div>
                <img src={image} width="300" height="300" />
            </div>
            <h2>ᕦ( ᐛ )ᕡ</h2>
		</div>
	);
}

export default App;