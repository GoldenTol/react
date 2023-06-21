import {Line} from 'react-chartjs-2';
import {Chart, CategoryScale, LinearScale, PointElement, Legend, Title} from 'chart.js';
import { registerables } from 'chart.js';
Chart.register(CategoryScale, LinearScale, PointElement, Legend, Title);
Chart.register(...registerables);


function App(props){
	const mylabels = props.chartData.map(one => one.name);
	const kor_jumsu = props.chartData.map(one => one.kor);
	const eng_jumsu = props.chartData.map(one => one.eng);
	const math_jumsu = props.chartData.map(one => one.math);

	const myoptions= {
		respoonsive:true,
		plugins:{
			legend:{position:'top'},
			title:{display:true, text:'학생들 시험 점수'}
		},
		scales:{
			y:{min:0, max:100}
		},
		pointStyle:'cross'
	};



	const mydata = {
		labels:mylabels,
		datasets:[
			{
				label:'국어',
				data:kor_jumsu,
				borderColor:'rgba(75, 192, 192, 0.5)',
				backgroundColor:'rgb(75, 192, 192)'
			},
			{
				label:'영어',
				data:eng_jumsu,
				borderColor:'rgba(153, 102, 255, 0.5)',
				backgroundColor:'rgb(153, 102, 255)'
			},
			{
				label:'수학',
				data:math_jumsu,
				borderColor:'rgba(255, 159, 64, 0.5)',
				backgroundColor:'rgb(255, 159, 64)'
			}
		]
	};

	return (
		<>
			<Line options={myoptions} data={mydata}/>
		</>			
	);
}
export default App;