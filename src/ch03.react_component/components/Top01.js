import {Component} from 'react';

class App extends Component{
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

export default App;