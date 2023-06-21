import {Component} from 'react' ;

//import 컴포넌트이름 from '전체경로포함한 파일이름';
//'컴포넌트이름'은 개발자 임의로 명명이 가능합니다.
import Top from './components/Top03';
import Content from './components/Content03';
import Bottom from './components/Bottom03';

class App extends Component{ //클래스형 컴포넌트에는 프롭스 생성자
	constructor(props){
		super(props);
		
		/* mode는 'bread', 'coffee' 중에서 택일 가능하다고 가정 */
		this.state = {
			mode:'coffee', 
			top:{greeting:"인사말", welcome_bread:"어서 오세요. (๑˘ꇴ˘๑)  저희 빵집을 방문해주셔서 감사합니다.", welcome_coffee:"어서 오세요. ଘ(੭ˊ꒳ˋ)੭✧ 저희 카페을 방문해주셔서 감사합니다."},
			content:{
				breadlist:[
					{id:1, name:"프렌치바게트", description:"프렌치 바게트는 프랑스의 전통적인 빵으로, 길쭉하고 납작한 형태를 가지며 바삭하고 겉은 바삭한 외피와 안은 부드러운 식감이 특징입니다."},
					{id:2, name:"크로와상", description:"크로와상은 프랑스의 	전통적인 베이커리 제품으로, 말레이지안(팥)크림이나 초콜릿 크림, 과일잼 등 다양한 종류의 필링이 들어있는 삼각형 모양의 빵입니다."},
					{id:3, name:"브리오슈", description:"브리오슈(Brioche)는 프랑스의 전통적인 달콤하고 부드러운 효모식빵입니다."},
					{id:4, name:"치아바타", description:"치아바타(Ciabatta)는 이탈리아의 전통적인 빵으로, 외관적으로는 길쭉하고 폭이 좁은 타원형 모양을 가지며, 바삭하고 부드러운 식감이 특징입니다."}
				],
				coffeelist:[
					{id:1, name:"에스프레소", description:"에스프레소는 강한 향과 맛을 가진 이탈리아식 커피 음료입니다. 보통은 30ml 정도의 작은 잔에 담겨져 있으며, 높은 압력을 가해 추출된 커피입니다. "},
					{id:2, name:"아메리카노", description:"아메리카노는 에스프레소에 뜨거운 물을 추가한 커피 음료입니다. 보통 에스프레소 한잔에 뜨거운 물을 1:1 비율로 추가하여 만들어지며, 에스프레소의 진한 맛과 향을 유지하면서도 물의 얇은 맛을 더해주기 때문에 커피 초보자들도 쉽게 즐길 수 있는 커피 음료입니다."},
					{id:3, name:"카페라떼", description:"카페라떼는 에스프레소와 스팀밀크, 그리고 조금의 거품이 올려진 우유를 섞어 만든 커피 음료입니다. 보통은 에스프레소 한잔에 우유를 2:1 정도의 비율로 섞어 만들어지며, 에스프레소의 진한 맛과 향을 유지하면서도, 우유의 부드러운 맛과 향이 더해져 부드럽고 고소한 맛을 느낄 수 있습니다."},
					{id:4, name:"카푸치노", description:"카푸치노는 에스프레소와 스팀밀크, 그리고 거품이 올려진 우유를 섞어 만든 커피 음료입니다. 에스프레소 한잔에 우유를 1:1 정도의 비율로 섞어 만들어지며, 에스프레소의 진한 맛과 향과 스팀밀크의 고소한 맛이 조화롭게 어우러져 부드럽고 진한 맛을 느낄 수 있습니다."},
					{id:5, name:"카라멜마끼아또", description:"카라멜 마끼아또는 에스프레소, 스팀밀크, 카라멜 시럽을 섞어 만든 커피 음료입니다. 일반적으로 에스프레소 한잔에 스팀밀크를 1:1 비율로 섞고, 거기에 카라멜 시럽을 넣어 만들어지며, 스팀밀크와 카라멜의 달콤하고 부드러운 맛과 에스프레소의 진한 맛과 향이 조화롭게 어우러져, 커피의 쓴 맛이 조금 중화되어 부드러운 맛을 느낄 수 있습니다."}
				]
			},
			bottom:{goodbye:"맺음말", comment_bread:"다음에 또 뵙고싶어요~  ଘ(੭ˊ꒳ˋ)੭✧", comment_coffee:"빵이 맛있으셨다면 다음에 또 방문해 주세요. (๑˘ꇴ˘๑)"}
         
		}
	}
   
	render(){
		var curr_mode = this.state.mode;
		console.log('현재 모드 : ' + curr_mode);
	   
		var welcome = '';
		var comment = '';
		var productlist = '';
	   
		if(curr_mode==='bread'){
			welcome = this.state.top.welcome_bread;
			comment = this.state.bottom.comment_bread;
			productlist = this.state.content.breadlist;
		   
		}else if(curr_mode==='coffee'){
		   welcome = this.state.top.welcome_coffee;
		   comment = this.state.bottom.comment_coffee;
		   productlist = this.state.content.coffeelist;
		}
	   
		return(
			<div>
				<Top greeting={this.state.top.greeting}
					welcome={welcome}/>
                
				<Content productlist={productlist}/>
            
				<Bottom goodbye={this.state.bottom.goodbye} 
					comment={comment}/>
			</div>
		);
	}
} 

export default App ;