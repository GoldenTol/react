import {useState} from 'react';
import {useEffect} from 'react';

import axios from 'axios';

import {Card} from 'react-bootstrap';

import Content from './SpringContent11';
import Bottom from './SpringBottom11';
import Top from './SpringTop11';

function App(){
	const title = '(~˙∇˙)~📣 React 맛집';
	const comment = 'ଘ(੭ˊ꒳ˋ)੭✧ 어서오십쇼';

   /* 수신받은 데이터 */
   const [receivedData, setReceivedData] = useState(null);

   /* 데이터 로딩 중이면 true입니다. */
   const [loading, setLoading] = useState(false);

   /* 오류 발생 시 정보가 들어있는 예외 객체 */
   const [error, setError] = useState(null);

   const [command, setCommand] = useState('');

   useEffect(() => {
      const fetchData = async () => {
         try{
            /* state initialize(state 초기화) */
            setReceivedData(null);
            setError(null);
            setLoading(true);

            const url = 'http://localhost:8989/item/list';
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
	  // command가 변경이 되면  화면을 리로드 시킵니다. (rendering)
   }, [command]); /* end useEffect */

   if(loading) return <div>데이터 로딩 중 입니다.</div>
   if(error) return <div>오류가 발생했습니다.</div>
   if(!receivedData) return null;

   const ItemClicked = (command, event) => {
	console.log('GetSpringFile11 - ItemClicked - called');

	//command는 사용자가 클릭한 상품의 id입니다.
	console.log('command : [' + command +']');
	setCommand(command);
   }

   return (
      <Card>
         <Card.Header>
			<Top title={title} comment={comment} />
         </Card.Header>

         <Card.Body>
            <Content contents={receivedData} onClickItem={ItemClicked} />
         </Card.Body>

         <Card.Footer>
            <Bottom command={command} />
         </Card.Footer>
      </Card>
   );
}
export default App;