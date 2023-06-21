import {Component} from 'react';

class App extends Component{
	render(){
		/* 넘어오는 breadlist 프롭스를 반복문을 사용하여 <li> 태그를 만듭니다. */
		var li_tags = []; /* <li> 태그를 저장할 배열 */
		var breadlist = this.props.breadlist;
		var i = 0;
		
		/* 배열 li_tags에 li 요소들을 푸쉬합니다. */
		while(i<breadlist.length){
			var onetag = <div key = {breadlist[i].id}><h2>{breadlist[i].name}</h2><p>{breadlist[i].description}</p></div>;
			li_tags.push(onetag);
			i += 1;
		}
		return(
			<div>
				<ul>
					{li_tags}
				</ul>
			</div>
		);
	}
}

export default App;