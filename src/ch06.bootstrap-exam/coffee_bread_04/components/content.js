import Table from 'react-bootstrap/Table';

function App(props){
    var contents = props.contents; /* 상품 여러개 */

    /* 테이블의 행(tr)을 클릭했습니다. */
    const onClickToContent = props.onClickToContent;

    const ClickItem = (event) => {
        console.log('Content-ClickItem-called');

        /* event.target : 이벤트를 발생시킨 요소(태그) */
        // for(const val in event.target){ /* 요소가 가지고 있는 속성 출력 */
        //     console.log(val);
        // }

        /* parentNode : 해당 요소의 부모 요소 */
        const parentNodeId = event.target.parentNode.id;
        console.log(parentNodeId);

        onClickToContent(parentNodeId);
    }

    /* map 함수 적절히 사용 */
    function getProductList(item, index){
        const trtag = 
        <tr id={item.id} key={index}>
            <td onClick={ClickItem}>{item.name}</td>
            <td onClick={ClickItem} align='right'>{item.price.toLocaleString()}원</td>
            <td onClick={ClickItem}>{item.category==='bread' ? '빵' : '음료수'}</td>
        </tr>;
        
        return trtag;
    }

    const ProductList = () => {
        const dataList = contents.map(getProductList);
        return <tbody>{dataList}</tbody>
    }

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>price</td>
                        <td>category</td>
                    </tr>
                </thead>
                {ProductList()}
            </Table>
        </div>
    );
}
export default App;