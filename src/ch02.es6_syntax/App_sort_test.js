import './../App.css';
import {useState} from 'react';

function App(){
    const fruits = ['banana', 'orange', 'apple', 'mango'];
    console.log(fruits);

    fruits.sort();
	console.log(fruits);

    fruits.reverse();
    console.log(fruits);

    const points = [40, 30, 10, 100, 50, 20, 60];

    /* 기본값 : 오름차순 정렬이고, 문자열로 해석을 해서 정렬 합니다. */
    points.sort();
    console.log(points);

    points.sort(function(a, b){return a-b});
    console.log(points);

    <br />
    let lowest = points[0];
    console.log('최소값 : ' + lowest);

    points.sort(function(a, b){return b-a});
    let highest = points[0];
    console.log('최대값 : ' + highest);

    console.log('랜덤 정렬');
    points.sort(function(){return 0.5 - Math.random()});
    console.log(points);
    <br />

    let products = [
        {name:'apple', price:3000},
        {name:'orange', price:1000},
        {name:'banana', price:5000},
    ];

    console.log('\n얕은 복사');
    const Ordering = (column, order) => {
        /* column은 정렬할 컬럼, order는 차순 */

        if(column==='name') { /* 문자열 형 */
            if(order==='asc') {
                products.sort((a, b) => a[column].localeCompare(b[column]));
            } else {
                products.sort((a, b) => b[column].localeCompare(a[column]));
            }

        } else { /* 숫자열 형 */
            if(order==='asc') {
                products.sort((a, b) => a[column] - b[column]);
            } else {
                products.sort((a, b) => b[column] - a[column]);
            }
        }
    };

    Ordering('price', 'asc');
    console.log('가격 오름차순');
    console.log(products);
	
    Ordering('name', 'asc');
    console.log('상품명 오름차순');
    console.log(products);

    /* concat() 메소드를 사용하면 깊은 복사가 됩니다. */
    console.log('\n깊은 복사 오름차순');
    Ordering('price', 'asc');
    console.log('가격 오름차순');
    let result = [].concat(products);
    console.log(result);

    Ordering('name', 'asc');
    console.log('상품명 오름차순');
    result = [].concat(products);
    console.log(result);

    console.log('\n깊은 복사 내림차순');
    Ordering('price', 'desc');
    console.log('가격 내림차순');
    result = [].concat(products);
    console.log(result);

    Ordering('name', 'desc');
    console.log('상품명 내림차순');
    result = [].concat(products);
    console.log(result);

	return(
		<div>
		</div>
	);
}

export default App;