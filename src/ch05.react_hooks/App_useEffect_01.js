import './../App.css';
import {useState, useEffect} from 'react';

function App(){
    const [count, setCount] = useState(0);
    const [image, setImage] = useState('/images/brioche_01.png');
	console.log('');

    const interval = 1000;
    const array = ['brioche_01.png', 'ciabatta_02.png', 'croissant_02.png', 'french_baguette_01.png']

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count +1);

            const randomIndex = Math.floor(array.length * Math.random());
            const randomImage = array[randomIndex];
            setImage(`/images/${randomImage}`);

        }, interval);
    });
	
	return(
		<div>
			<h2>(~˙∇˙)~📣 방가방가~~ ✧*˳٩(ˊᗜˋ*)و✧*˳</h2>
            <br/>
			<h1>카운터 : {count} </h1>
            <div>
                <img src={image} width="300" height="300" />
            </div>
            <h2>ᕦ( ᐛ )ᕡ</h2>
		</div>
	);
}

export default App;