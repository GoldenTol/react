import {Component} from 'react';

class Top extends Component{
	render(){
		return(
			<header>
				<h1>{this.props.greeting}</h1>
				<p>(~˙∇˙)~📣 방가방가~~</p>
				<p>{this.props.welcome}</p>
			</header>
		);
	}
}

class Content extends Component{
	render(){
		return(
			<nav>
				<ul>
					<li><a href = "1.html">{this.props.bread01}</a></li>
					<li><a href = "1.html">{this.props.bread02}</a></li>
					<li><a href = "1.html">{this.props.bread03}</a></li>
					<li><a href = "1.html">{this.props.bread04}</a></li>
					<li><a href = "1.html">{this.props.bread05}</a></li>
					<li><a href = "1.html">{this.props.bread06}</a></li>
					
				</ul>
			</nav>
		);
	}
}

class Botton extends Component{
	render(){
		return(
			<article>
				<h1>{this.props.goodbye}</h1>
				<p>{this.props.closing}</p>
			</article>
		);
	}
}

class App extends Component{
	render(){
		return(
			<div>
				<Top greeting = "인사말" welcome = "얄루~ 울희 빵집에 와줘서 고마워 ଘ(੭ˊ꒳ˋ)੭✧"/>
				<Content bread01 = "명란바게트" bread02 = "크로와상" bread03 = "뺑오쇼콜라" bread04 = "앙버터" bread05 = "작은메아리" bread06 = "튀김소보루"/>
				<Botton goodbye = "맺음말" closing = "다음에 또 와~ ᕦ( ᐛ )ᕡ"/>
			</div>
		);
	}
}

export default App;

