import {InputGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function App(props){
    const onSubmitCategoryAdd = props.onSubmitCategoryAdd;
    
    const SubmitCategory = (event) => {
        console.log('CreateCategory-SubmitCategory-called');
        let form_object = event.target;
        onSubmitCategoryAdd(form_object);
    }

    return(
        <div>
            <h2>카테고리 추가하기</h2>
            <form action="#" method="post" onSubmit={SubmitCategory}>
                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>영문이름</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='key'
                        placeholder="이름을 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                    />
                </InputGroup>

                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>한글이름</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='value'
                        placeholder="이름을 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                    />
                </InputGroup>
            
                <Button type="submit" value="카테고리 추가">카테고리 추가</Button>{''}
            </form>
        </div>
    );
}
export default App;