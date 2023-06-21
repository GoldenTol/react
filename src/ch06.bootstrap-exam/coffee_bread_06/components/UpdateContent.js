import {useState} from 'react';
import {InputGroup} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function App(props){
    const [formData, setFormData] = useState(props.formData); /* fromData : 이전에 넣었던 데이터 값 */

    const onSubmitUpdate = props.onSubmitUpdate;

    const InputChange = (event) => {
        const {name, value} = event.target; /* 현재 편집 중인 폼 양식 */

        /* 
        prevState : 이전 상태 정보 
        입력 양식의 값이 변경될 때마다 실행이 됩니다.
        */
        setFormData(prevState => ({...prevState, [name]:value}));
    }

    const SubmitedData = (event) => {
        event.preventDefault();
        onSubmitUpdate(formData); /* 수정된 폼 양식들의 정보를 다시 반환해 줍니다. */
    }

    const categories = props.categories;
   
   /* 넘겨받은 카테고리 정보를 이용하여 동적으로 콤보 박스를 생성합니다. */
   /* 사용자가 수정한 카테고리 정보(formData.category)와 해당 카테고리의 영문이름(item.key)이 동일하면 선택되도록 설정합니다. */
   const cateList = categories.map((item, index) => 
      <option key={index} value={item.key} selected={formData.category===item.key}>{item.value}</option>
   );

    return(
        <div>
            <h2>수정하기</h2>
            <form action="#" method="post" onSubmit={SubmitedData}> 
                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>아이디</InputGroup.Text>
                    <input type="hidden" name="id" value={formData.id} />
                    <Form.Control   
                        type='text'
                        name='id'
                        placeholder="아이디를 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                        onChange={InputChange}
                        value={formData.id}
                        disabled
                    />
                </InputGroup>

                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>이름</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='name'
                        placeholder="이름을 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                        onChange={InputChange}
                        value={formData.name}
                    />
                </InputGroup>
                
                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" aria-label="카테고리 선택" style={{margin: '0px'}}>카테고리</InputGroup.Text>
                    <Form.Select name='category' aria-label="Default select example" onChange={InputChange}>
                        <option>카테고리를 선택해주세요.</option>
                        <option value="bread" selected={formData.category==='bread'}>빵</option>
                        <option value="beverage" selected={formData.category==='beverage'}>음료수</option>
                        <option value="cake" selected={formData.category==='cake'}>케이크</option>
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>가격</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='price'
                        placeholder="가격을 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                        onChange={InputChange}
                        value={formData.price}
                    />
                </InputGroup>

                <InputGroup className="mb-3" style={{ height: '40px' }}>
                    <InputGroup.Text id="basic-addon1" style={{margin: '0px'}}>재고</InputGroup.Text>
                    <Form.Control   
                        type='text'
                        name='stock'
                        placeholder="재고를 입력해주세요."
                        aria-describedby="basic-addon1"                           
                        style={{ height: '100%' }} 
                        onChange={InputChange}
                        value={formData.stock}
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
                        onChange={InputChange}
                        value={formData.image}
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
                        aria-describedby="inputGroup-sizing-sm" 
                        onChange={InputChange}
                        value={formData.description}
                    />
                </InputGroup>
                <br/>
                <Button type="submit" value="수정">수정</Button>{''}
            </form>
        </div>
    );
}
export default App;