import {Table} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';

function App(props){
    var contents = props.contents; /* 상품 여러개 */
 
    /* 테이블의 행(tr)을 클릭했습니다.*/
    const onClickToContent = props.onClickToContent;
 
    const ClickItem = (event) => {
       console.log('Content-ClickItem-called');
 
       // /* event.target : 이벤트를 발생시킨 요소(태그) */
       // for(const val in event.target){ /* 요소가 가지고 있는 속성 출력 */
       //    console.log(val);
       // }
 
       /* parentNode : 해당 요소의 부모 */
       const parentNodeId = event.target.parentNode.id;
       //console.log(parentNodeId);
 
       onClickToContent(parentNodeId);
    }
 

    /* map 함수 적절히 사용 */
    function getProductList(item, index){
        let hangul = ''; // 한글이름

        // 차후 한글이름과 영문이름을 가진 객체를 사용하여 수정 예정
        switch(item.category){
            case 'master':
                hangul = '주인장';
                break;
            case 'bread':
                hangul = '빵';
                break;
            case 'beverage':
                hangul = '음료수';
                break;
            case 'cake':
                hangul = '케이크';
                break;
        }

        const trtag = <tr id={item.id} key={index}>
            <td onClick={ClickItem}>{item.name}</td>
            <td onClick={ClickItem} align="right">{item.price.toLocaleString()}원</td>
            <td onClick={ClickItem}>{hangul}</td>
        </tr>;
        return trtag;

    }

    /* map 함수 적절히 사용 */
    // function getProductList(item, index){
    //     const trtag = 
    //     <tr id={item.id} key={index}>
    //         <td onClick={ClickItem}>{item.name}</td>
    //         <td onClick={ClickItem} align='right'>{item.price.toLocaleString()}원</td>
    //         <td onClick={ClickItem}>{item.category==='bread' ? '빵' : '음료수'}</td>
    //     </tr>;
        
    //     return trtag;
    // }

    const ProductList = () => {
        const dataList = contents.map(getProductList);
        return <tbody>{dataList}</tbody>
     };  

    /* 컬럼별 정렬 기능 */
    var onOrderByClick = props.onOrderByClick;
    var orderInfo = props.orderInfo; /* 넘겨받은 정렬정보 */

     /* 드롭다운 버튼을 클릭했을 시, App컴포넌트에게 정렬 방식을 알려주는 함수 입니다. */
   const ClickButtonGroup = (event) => {
    console.log('Content-ClickButtonGroup-called');
    event.preventDefault();
    let target_id = event.target.id;
    console.log('event.target.id : ' + target_id);

    if(target_id==='asc' || target_id==='desc'){ /* 정렬 방식을 클릭함 */
       onOrderByClick(orderInfo.column, target_id);
    }else{
       onOrderByClick(target_id, orderInfo.ordering);
    }
 }

 return (
    <div>
       <Table>
          <tbody>
             <tr>
                <td width="10%" valign="middle">
                   <Dropdown>
                      <Dropdown.Toggle variant="info" id="dropdown-basic">
                         정렬할 컬럼
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                         <Dropdown.Item id="name" onClick={ClickButtonGroup}>이름</Dropdown.Item>
                         <Dropdown.Item id="price" onClick={ClickButtonGroup}>가격</Dropdown.Item>
                         <Dropdown.Item id="category" onClick={ClickButtonGroup}>카테고리</Dropdown.Item>
                      </Dropdown.Menu>
                   </Dropdown>
                </td>
                <td valign="middle">
                   <Dropdown>
                      <Dropdown.Toggle variant="info" id="dropdown-basic">
                            정렬 방식
                      </Dropdown.Toggle>
                         
                      <Dropdown.Menu>
                         <Dropdown.Item id="asc" onClick={ClickButtonGroup}>오름차순</Dropdown.Item>
                         <Dropdown.Item id="desc" onClick={ClickButtonGroup}>내림차순</Dropdown.Item>
                      </Dropdown.Menu>
                   </Dropdown>
                </td>
                <td valign="middle">
                   <ListGroup horizontal>
                      <ListGroup.Item>
                         정렬할 컬럼 : {orderInfo.column}
                      </ListGroup.Item>
                      <ListGroup.Item>
                         정렬 방식 : {orderInfo.ordering==='asc'?'오름차순':'내림차순'}
                      </ListGroup.Item>
                   </ListGroup>
                </td>
             </tr>
          </tbody>
       </Table>
       
       <Table striped bordered hover size="sm">
          <thead>
             <tr>
                <th>이름</th>
                <th>가격</th>
                <th>카테고리</th>
             </tr>
          </thead>
          {ProductList()}
       </Table>

    </div>
 );
}
export default App