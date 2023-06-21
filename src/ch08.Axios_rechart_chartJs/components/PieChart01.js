import {Pie} from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js';
import {Table} from 'react-bootstrap';
Chart.register(ArcElement, Tooltip, Legend);

function App(props){
	// console.log('props.chartData');
	// console.log(props.chartData);

	const total_jumsu = props.chartData.map(one => one.kor + one.eng + one.math);
	console.log('학생들 각각의 시험 점수 총합');
	console.log(total_jumsu);


	/* data section begin */
	const mydata = {
		labels:props.chartData.map(one => one.name),
		datasets:[
			{
				label:' 학생별 시험 점수 총점',
				data:total_jumsu,
				backgroundColor:[
				'rgba(255, 99, 132, 0.7)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(153, 102, 255, 0.2)'
				],
				boderColor:[
				'rgba(255, 99, 132, 1.0)',
				'rgba(255, 205, 86, 1.0)',
				'rgba(153, 102, 255, 1.0)'
				],
				boderWidth:1
			}
		]
		
	};

	const eng_jumsu = props.chartData.map(one => one.eng);
	console.log('학생들 각각의 영어 점수');
	console.log(eng_jumsu);


	
	const myeng = {
		labels:props.chartData.map(one => one.name),
		datasets:[
			{
				label:' 학생별 영어 점수',
				data:eng_jumsu,
				backgroundColor:[
				'rgba(255, 99, 132, 0.7)',
				'rgba(255, 205, 86, 0.2)',
				'rgba(153, 102, 255, 0.2)'
				],
				boderColor:[
				'rgba(255, 99, 132, 1.0)',
				'rgba(255, 205, 86, 1.0)',
				'rgba(153, 102, 255, 1.0)'
				],
				boderWidth:1
			}
		]
		
	};
	/* data section end */

	/* option section begin */
	const myoptions01 = {
		responsive:false
		
	};

	const myoptions02 = {
		responsive:false
	
		
	};
	/* option section end */

	return (
		<Table border={1}>
			<thead>
				<tr>
					<th>학생별 과목 총 점수</th>
					<th>학생별 영어 점수</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<Pie data={mydata} options={myoptions01}/>
					</td>
					<td>
						<Pie data={myeng} options={myoptions02}/>
					</td>
				</tr>
			</tbody>
			
			
		</Table>
	);
}
export default App;