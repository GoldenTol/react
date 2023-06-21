import {Table} from "react-bootstrap";

function App(props){
    const product = props.selectedProduct;
    console.log('product');
    console.log(product);

    return(
        <div className="table_padding">
            <Table>
                <tbody>
                    <tr>
                        <td width="40%">
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td >아이디</td>
                                        <td>{product.id}</td>
                                    </tr>

                                    <tr>
                                        <td>이름</td>
                                        <td>{product.name}</td>
                                    </tr>

                                    <tr>
                                        <td>가격</td>
                                        <td>{product.price}</td>
                                    </tr>

                                    <tr>
                                        <td>카테고리</td>
                                        <td>{product.category}</td>
                                    </tr>

                                    <tr>
                                        <td>재고</td>
                                        <td>{product.stock}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>

                        <td>
                            <img src={'/images/'+product.image} alt={product.name} width="210" height="210" />
                        </td>

                        <td>
                            <p className="description">
                                {product.description}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}
export default App;