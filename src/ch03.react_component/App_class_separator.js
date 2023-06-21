import {Component} from 'react';

class Top extends Component{
	render(){
		return(
			<header>
				<h1>인사말</h1>
					<p>(~˙∇˙)~📣 방가방가~~ ✧*˳٩(ˊᗜˋ*)و✧*˳</p>
					<p>모두들 안녕하시와요.</p>
			</header>
		);
	}
}

class Content extends Component{
	render(){
		return(
			<nav>
				<ul>
					<li><a href = "1.html">자바</a></li>
					<li><a href = "2.html">파이썬</a></li>
					<li><a href = "3.html">오라클</a></li>
				</ul>
			</nav>
		);
	}
}

class Bottom extends Component{
	render(){
		return(
			<article>
				<h2>맺음말</h2>
				들숨과 날숨에 재력과 행복이 들어오시길
			</article>
		);
	}
}

class App extends Component{
	render(){
		return(
			<div>
				<Top/>
				<Content/>
				<Bottom/>
			</div>
		);
	}
}

export default App;

