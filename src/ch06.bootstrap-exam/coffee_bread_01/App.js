// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {useState} from 'react';
import {Card} from 'react-bootstrap';

import Top from './components/Top';
import Bottom from './components/Bottom';
import Content from './components/content';


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

  return (
      <Card>
        <Card.Header>
          <Top title={title} comment={comment} />
        </Card.Header>
        <Card.Body>
          <Content contents={products} />
        </Card.Body>
        <Card.Footer>
        <Bottom message={message} comment={comment} />
        </Card.Footer>
      </Card>
  );
}

export default App;
