import Table from 'react-bootstrap/Table';

function App(props){
    var contents = props.contents;

    function getProductList(item, index){
        const trtag = 
        <tr key={index}>
            <td>{item.name}</td>
            <td align='right'>{item.price.toLocaleString()}원</td>
            <td>{item.category==='bread' ? '빵' : '음료수'}</td>
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