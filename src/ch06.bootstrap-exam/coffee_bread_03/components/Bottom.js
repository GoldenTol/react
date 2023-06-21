import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';

function App(props){
    const onClickBottom = props.onClickBottom;

    const ClickMenu = (event) => {
        event.preventDefault(); /* 이벤트 전파 방지 */

        /* id 속성에 mode 정보가 들어 있습니다. */
        let target_id = event.target.id;
        onClickBottom(target_id);
    }

    return(
        <div>
            {props.message}
            <br/>
            <br/>
            <div className="d-flex justify-content-start">
                <ButtonGroup aria-label="Basic example">
                    <Button id="get_insert" variant="secondary" onClick={ClickMenu}>생성</Button>{''}
                    <Button id="get_update" variant="secondary" onClick={ClickMenu}>수정</Button>{''}
                    <Button id="get_delete" variant="secondary" onClick={ClickMenu}>삭제</Button>{''}
                    <Button id="get_category_add" variant="secondary" onClick={ClickMenu}>카테고리 추가</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
export default App;