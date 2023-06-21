import {Bar} from 'react-chartjs-2';
import {Chart, CategoryScale, LinearScale, BarElement, Legend, Title} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Legend, Title);

function App(props){
	console.log('props.chartData');
	console.log(props.chartData);

	const math_jumsu = props.chartData.map(one => one.math);

	/* data section begin */
	const mydata = {
		labels:props.chartData.map(one => one.name),
		datasets:[
			{
				label:'국어',
				data:props.chartData.map(one => one.kor),
				backgroundColor:'rgba(255, 99, 132, 0.7)'
			},
			{
				label:'영어',
				data:props.chartData.map(one => one.eng),
				backgroundColor:'rgba(255, 205, 86, 0.2)'
			},
			{
				label:'수학',
				data:math_jumsu,
				backgroundColor:'rgba(153, 102, 255, 0.2)'
			}
		]
	};
	/* data section end */

	/* option section begin */
	const myoptions = {
		respoonsive:true,
		plugins:{
			legend:{position:'top'},
			title:{display:true, text:'학생들 시험 점수'}
		}
	};
	/* option section end */

	return (
		<>
			<h2>학생들 과목별 막대 그래프</h2>
			<Bar data={mydata} options={myoptions} />
		</>
	);
}
export default App;