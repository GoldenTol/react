import {Component} from 'react';

class App extends Component{
	render(){
		return(
			<article>
				<h1>{this.props.goodbye}</h1>
				<p>{this.props.comment}</p>
			</article>
		);
	}
}

export default App;