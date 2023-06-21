// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {useState} from 'react';
import {Card} from 'react-bootstrap';

import Top from './components/Top';
import Bottom from './components/Bottom';
import Content from './components/content';
import Display from './components/Display';
import CreateContent from './components/CreateContent';
// import Display from './components/UpdateContent';
// import Display from './components/DeleteContent';
// import Display from './components/category_AddContent';


function App() {
  const title = 'React 맛집';
  const comment = '(~˙∇˙)~📣 어서오세요~~ 맛있는 빵과 음료수가 많이 있습니다.';
  const message = '카운터에서 주문해 주시고, 즐거운 시간 되시길 바랍니다.';

  const [products, setProducts] = useState([
    {id:0, name:'주인장', price:0, category:'bread', stock:0, image:'주인장.png', description:'주인장'},
    {id:1, name:'프렌치바게트', price:1000, category:'bread', stock:111, image:'french_baguette_01.png', description:'프렌치 바게트는 프랑스 원산지의 긴 빵으로, 바삭하고 겉은 바삭하고 속은 쫄깃한 식감이 특징입니다.'},
    {id:2, name:'크루아상', price:2000, category:'bread', stock:222, image:'croissant_01.png', description:'크루아상은 프랑스 원산지의 유명한 빵 중 하나로, 살짝 말린 것처럼 바삭하면서도 안은 부드럽고 촉촉한 식감이 특징입니다.'},
    {id:3, name:'에스프레소', price:3000, category:'beverage', stock:333, image:'coffee02.jpg', description:'에스프레소는 이탈리아 원산지의 진한 맛과 향이 특징인 커피 음료입니다. 강한 압력으로 갈아넣은 커피 가루에 뜨거운 물을 빠르게 통과시켜 추출하는 과정으로 만들어집니다. 대개는 작은 컵에 1oz(30ml)정도로 내려지며, 일반적으로는 추가적인 우유나 설탕 등의 첨가물 없이 마시는 것이 일반적입니다.'},
    {id:8, name:'아메리카노', price:4000, category:'beverage', stock:444, image:'coffee01.png', description:'아메리카노는 이탈리아 원산지의 커피 음료로, 에스프레소에 뜨거운 물을 추가하여 만든 커피 음료입니다. 에스프레소의 농도를 조절하면서 물을 천천히 추가하므로, 쌉쌀하고 적당한 쓴맛이 있으면서도 묽지 않고 부드러운 맛을 느낄 수 있습니다.'}
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

    }else if(mode==='get_insert'){ /* 생성 버튼을 눌렀습니다. */
      return <CreateContent onSubmitInsert={InsertedData} />;

    }else if(mode==='post_insert'){ /* 신규 상품을 상품 목록애 추가합니다. */
      const newProducts = products.concat(newItem);
      setProducts(newProducts);
      setMode('read');

    }else if(mode==='get_delete'){
    
    }else{
      return <div />
    }
  }

  const getReadContent = () => {
    /* 선택된 id와 동일한 항목만 필터링 합니다. */
    const selectedProduct= products.filter(product => product.id===selectedId);
    /* 선택된 요소가 객체를 저장하고 있는 배열입니다. */
    /* 1개만 존재하므로, [0]을 붙여서 객체로 반환합니다. */
    return selectedProduct[0];
  }

  const ModeSelected = (mode, event) => {
    console.log('App-ModeSelected-called');
    console.log('mode : '+mode);
    setMode(mode);
  }

  /* newItem : 생성 폼에서 넘어온 데이터를 저장하는 함수 */
  const [newItem, setNewItem] = useState(null);

  /* id가 가장 큰 값 찾기 함수 */
  // const GetMaxId = products.filter((item, index, arr) => {
  //   const maxValue = Math.max(...arr.map(one => one.id));
  //   return item.id = maxValue;
  // });

  const InsertedData = (formData, event) => {
    console.log('App-InsertedData-called');
    console.log('상품이름 : ' + formData.name.value);
    console.log('가격 : ' + formData.price.value);
    console.log('카테고리 : ' + formData.category.value);
    console.log('재고 : ' + formData.stock.value);
    console.log('이미지 : ' + formData.image.value);
    console.log('상세설명 : ' + formData.description.value);

    /* newId : 새 품목에 적용될 신규 아이디 */
    // const newId = GetMaxId + 1;
    const newId = products.length + 1;
    console.log('신규 아이디 : ' + newId);

    /* temp : 임시 변수 */
    const temp = [{id:newId, name:formData.name.value, price:formData.price.value, category:formData.category.value
      , stock:formData.stock.value, image:formData.image.value, description:formData.description.value}];


    setNewItem(temp);
    console.log('신규 품목 내용');
    console.log(newItem);
    setMode('post_insert');
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
        <Bottom message={message} onClickBottom={ModeSelected} />
        </Card.Footer>
      </Card>
  );
}

export default App;
