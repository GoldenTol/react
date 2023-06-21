import {Component} from 'react' ;

//import 컴포넌트이름 from '전체경로포함한 파일이름';
//'컴포넌트이름'은 개발자 임의로 명명이 가능합니다.
import Top from './components/Top02';
import Content from './components/Content02';
import Bottom from './components/Bottom02';

class App extends Component{ //클래스형 컴포넌트에는 프롭스 생성자
   constructor(props){
      super(props);
      this.state = {
         top:{greeting:"인사말", welcome:"어서 오세요. 저희 빵집을 방문해주셔서 감사합니다."},
         breadlist:[
            {id:1, name:"프렌치바게트", description:"프렌치 바게트는 프랑스의 전통적인 빵으로, 길쭉하고 납작한 형태를 가지며 바삭하고 겉은 바삭한 외피와 안은 부드러운 식감이 특징입니다. "},
            {id:2, name:"크로와상", description:"크로와상은 프랑스의 전통적인 베이커리 제품으로, 말레이지안(팥)크림이나 초콜릿 크림, 과일잼 등 다양한 종류의 필링이 들어있는 삼각형 모양의 빵입니다. "},
            {id:3, name:"브리오슈", description:"브리오슈(Brioche)는 프랑스의 전통적인 달콤하고 부드러운 효모식빵입니다. "},
            {id:4, name:"치아바타", description:"치아바타(Ciabatta)는 이탈리아의 전통적인 빵으로, 외관적으로는 길쭉하고 폭이 좁은 타원형 모양을 가지며, 바삭하고 부드러운 식감이 특징입니다."}
         ],
         bottom:{goodbye:"맺음말", comment:"다음 번에도 저희 가게를 방문해 주시길 바랍니다."}
         
      }
   }
   
   render(){
      return(
         <div>
            <Top greeting={this.state.top.greeting}
                welcome={this.state.top.welcome}/>
                
            <Content breadlist={this.state.breadlist}/>
            
            <Bottom goodbye={this.state.bottom.goodbye} 
                  comment={this.state.bottom.comment}/>
         </div>
      );
   }
} 

export default App ;