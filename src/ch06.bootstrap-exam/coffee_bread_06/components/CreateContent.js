import {InputGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function App(props){
    const onSubmitInsert = props.onSubmitInsert;

    const SubmittedData = (event) => {
        console.log('CreateContent-SubmittedData-called');
        event.preventDefault();
        let form_object = event.target; /* 폼 객체 */
        onSubmitInsert(form_object);
    }

    const categories = props.categories;

    /* 넘겨 받은 카테고리 정보를 이용하여 동적으로 콤보 박스를 생성합니다. */
    const cateList = categories.map((item, index) => 
        <option key={index} value={item.key}>{item.value}</option>
    );

    return(
        <div>
            <h2>생성하기</h2>
            <form action="#" method="post" onSubmit={SubmittedData}>
                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>이름</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='name'
                        placeholder="이름을 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                    />
                </InputGroup>
                
                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>가격</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='price'
                        placeholder="가격을 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                    />
                </InputGroup>

                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" aria-label="카테고리 선택" style={{margin: '0px'}}>카테고리</InputGroup.Text>
                    <Form.Select name='category' aria-label="Default select example">
                        {cateList}
                    </Form.Select>
                </InputGroup>


                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>재고</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='stock'
                        placeholder="재고를 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                    />
                </InputGroup>

                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>이미지</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='image'
                        placeholder="이미지를 선택해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                    />
                </InputGroup>

                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>상세설명</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='description'
                        as="textarea"
                        placeholder="상세설명을 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                    />
                </InputGroup>
                <Button type="submit" value="생성">생성</Button>{''}
            </form>
        </div>
    );
}
export default App;