// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {useState} from 'react';
import {Card} from 'react-bootstrap';

import Top from './components/Top';
import Bottom from './components/Bottom';
import Content from './components/content';
import Display from './components/Display';


function App() {
  const title = 'React 맛집';
  const comment = '(~˙∇˙)~📣 어서오세요~~ 맛있는 빵과 음료수가 많이 있습니다.';
  const message = '카운터에서 주문해 주시고, 즐거운 시간 되시길 바랍니다.';

  const [products, setProducts] = useState([
    {id:1, name:'프렌치바게트', price:1000, category:'bread', stock:111, image:'french_baguette_01.png', description:'프렌치 바게트는 프랑스 원산지의 긴 빵으로, 바삭하고 겉은 바삭하고 속은 쫄깃한 식감이 특징입니다.'},
    {id:2, name:'크루아상', price:2000, category:'bread', stock:222, image:'croissant_01.png', description:'크루아상은 프랑스 원산지의 유명한 빵 중 하나로, 살짝 말린 것처럼 바삭하면서도 안은 부드럽고 촉촉한 식감이 특징입니다.'},
    {id:3, name:'에스프레소', price:3000, category:'beverage', stock:333, image:'coffee02.jpg', description:'에스프레소는 이탈리아 원산지의 진한 맛과 향이 특징인 커피 음료입니다. 강한 압력으로 갈아넣은 커피 가루에 뜨거운 물을 빠르게 통과시켜 추출하는 과정으로 만들어집니다. 대개는 작은 컵에 1oz(30ml)정도로 내려지며, 일반적으로는 추가적인 우유나 설탕 등의 첨가물 없이 마시는 것이 일반적입니다.'},
    {id:4, name:'아메리카노', price:4000, category:'beverage', stock:444, image:'coffee01.png', description:'아메리카노는 이탈리아 원산지의 커피 음료로, 에스프레소에 뜨거운 물을 추가하여 만든 커피 음료입니다. 에스프레소의 농도를 조절하면서 물을 천천히 추가하므로, 쌉쌀하고 적당한 쓴맛이 있으면서도 묽지 않고 부드러운 맛을 느낄 수 있습니다.'}
  ]);

  /* mode : 현재 상태의 모드 지정 */
  /* insert, update, delete, read, detail ...etc */
  const [mode, setMode] = useState('');
  
  /* selectedId : 선택된 <tr> 태그의 인덱스 번호 */
  /* 최초 시작시 1번 품목이 선택되었다고 가정합니다. */
  const [selectedId, setSelectedId] = useState(1);

  const ClickArrived = (id, event) => {
    console.log('App-ClickArrived-called');
    console.log('선택된 아이디 : ' + id);
    setSelectedId(Number(id)); /* 선택 항목 변경됨 */
    setMode('detail'); /* 상세 보기 모드로 변경함 */
  }

  /* 모드에 따라서 화면을 서로 다르게 보여 주는 함수 */
  const getContent = () => {
    
    console.log('App-getContent-called');
    console.log('current mode : [' + mode + ']');

    if(mode==='detail'){
      var mycontent = getReadContent();
      return <Display selectedProduct={mycontent}></Display>;

    }else if(mode===''){

    }else if(mode===''){

    }
  }

  const getReadContent = () => {
    /* 선택된 id와 동일한 항목만 필터링 합니다. */
    const selectedProduct= products.filter(product => product.id===selectedId);
    /* 선택된 요소가 객체를 저장하고 있는 배열입니다. */
    /* 1개만 존재하므로, [0]을 붙여서 객체로 반환합니다. */
    return selectedProduct[0];
  }

  return (
      <Card>
        <Card.Header>
          <Top title={title} comment={comment} />
        </Card.Header>
        <Card.Body>
          <Content contents={products} onClickToContent={ClickArrived} />
        </Card.Body>

        <Card.Body>
          {getContent()}
        </Card.Body>
        <Card.Footer>
        <Bottom message={message} comment={comment} />
        </Card.Footer>
      </Card>
  );
}

export default App;
