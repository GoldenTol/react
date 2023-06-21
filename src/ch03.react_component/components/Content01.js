import {Component} from 'react';

class App extends Component{
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

export default App;