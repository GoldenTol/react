import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';

function App(props){
    return(
        <div>
            {props.message}
            <br/>
            <br/>
            <div className="d-flex justify-content-start">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">생성</Button>{''}
                    <Button variant="secondary">수정</Button>{''}
                    <Button variant="secondary">삭제</Button>{''}
                    <Button variant="secondary">카테고리 추가</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
export default App;