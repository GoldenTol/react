*********************************************************************
단계01. 콤보 박스 구현하기
*********************************************************************
App
	기본 화면 구성
	MartSelection 함수 정의
	Mart 컴포넌트에 mode 프롭스 넘기기

Mart
	넘겨진 prop 데이터를 처리합니다.
*********************************************************************
단계02.
*********************************************************************
App
	ProductList, items 변수 정의
	Mart 컴포넌트에 items 프롭스 넘기기
Mart
	넘겨진 prop 데이터를 처리합니다.
	mode 프롭스에 따라서 패션관 층수(floor) 변수를 분기 처리

LFashionNo, HFashionNo
	컴포넌트 신규 생성
------------------------------------------------------
Content

------------------------------------------------------
App

------------------------------------------------------
Display

------------------------------------------------------
App.css 파일에 관련 스타일 추가하기
*********************************************************************
단계03. 신규 항목 생성 기능
*********************************************************************
생성 버튼 클릭하기 기능
App
	ModeSelected 함수 정의 후 Bottom과 연동하기
		id="get_insert"가 넘어옴
------------------------------------------------------
Bottom
	props로 넘어 오는 onClickToBottom 항목을 변수에 저장
	Button에 id, onClick 속성 추가
	ClickMenu 함수 구현
------------------------------------------------------
App
	getContent() 함수의 if(mode==='get_insert') 구현
------------------------------------------------------
CreateContent(등록하기 컴포넌트)
	props로 넘어 오는 onSubmitInsert 항목을 변수에 저장
	폼 양식의 onSubmit 이벤트 구현
	SubmittedData 함수 구현
------------------------------------------------------
App
	item 변수 선언(인서트될 데이터 정보가 들어감)
	InsertedData 함수 구현
	getContent() 함수의 if(mode==='post_insert') 구현
*********************************************************************
단계04. 항목 수정 기능
------------------------------------------------------
App
	getContent() 함수의 if(mode==='get_update') 구현
------------------------------------------------------
UpdateContent(수정하기 컴포넌트)
	props로 넘어 오는 formData와 onSubmitUpdate 항목을 각각 변수에 저장
	폼 양식의 요소들에 value 속성에 값을 대입
	onSubmit 이벤트에 SubmittedData 연동하기
------------------------------------------------------
App
	UpdatedData 함수 구현
	수정된 행을 제외한 나머지 요소를 구하기 위한 ExceptUpdatedRow 함수 구현
*********************************************************************
단계05. 항목 삭제 기능, 카테고리 추가 기능
------------------------------------------------------
App
	getContent() 함수의 if(mode==='get_delete') 구현
	category 스테이트 변수 정의
	getContent() 함수의 if(mode==='get_category_add') 구현
------------------------------------------------------
CreateCategory
	신규 생성
*********************************************************************
상품 예시
	const [products, setProducts] = useState([
		{id:1, name:"프렌치 바게트", price:1000, category:'bread', stock:111, image:'french_baguette_01.png', description:"프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다."},
		{id:2, name:"크로와상", price:2000, category:'bread', stock:222, image:'croissant_02.png', description:"프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다."},
		{id:3, name:"아메리카노", price:3000, category:'beverage', stock:333, image:'americano01.png', description:"에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다."},
		{id:4, name:"카푸치노", price:4000, category:'beverage', stock:444, image:'cappuccino01.png', description:"스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다."}
	]);

	const [products, setProducts] = useState([
		{id:1, name:"프렌치 바게트", description:"프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다."},
		{id:2, name:"크로와상", description:"프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다."},
		{id:3, name:"브리오슈", description:"프랑스의 전통적인 달콤한 빵으로, 기름과 계란이 많이 들어가서 부드럽고 고소한 맛과 부드러운 식감이 특징입니다."},
		{id:4, name:"치아바타", description:"빵 자체는 비교적 폭이 넓은 직사각형 모양을 띠며, 바삭하면서도 촉촉하고 부드러운 식감이 특징입니다."}
	]);

	const coffeelist = [
		{id:1, name:"아메리카노", description:"에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다."},
		{id:2, name:"카푸치노", description:"스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다."},
		{id:3, name:"에스프레소", description:"이탈리아에서 탄생한 진한 맛의 커피 음료입니다. 뜨거운 물을 고압으로 강제로 통과시켜 만들어지는데, 이 때문에 일반적인 커피보다 맛이 진하고 향도 풍부합니다."},
		{id:4, name:"카페 모카", description:"초콜릿 시럽을 더해 부드러운 달콤한 맛을 더해주며, 에스프레소와 스팀밀크로 인해 진한 커피 향이 살아나는 것이 특징입니다."},
		{id:5, name:"바닐라 라떼", description:"스팀밀크에 바닐라 시럽을 더해서 만든 커피 음료입니다. 부드러운 스팀밀크와 달콤한 바닐라 시럽이 조화를 이루며, 쓴 커피 향을 중화시켜 부드러운 맛을 느낄 수 있습니다."}
	];
