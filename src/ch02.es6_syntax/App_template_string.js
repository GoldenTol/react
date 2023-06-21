function App(){
   
   console.log('es5 syntax');
   var string1 = 'hello';
   var string2 = ' world';
   var greeting = string1 + string2;
   
   console.log('greeting : ' + greeting);
   
   var product = {name:'apple', price:32000};
   var message = '제품 : ' + product.name + ', 단가 : ' + product.price;
   console.log('message : ' + message);
   
   var multiline = '문자열1\n문자열2' ; 
   console.log(multiline);
   
   var value1 = 14;
   var value2 = 5;
   var boolValue = false;
   var operator1 = '연산결과 : ' + (value1 + value2);
   var operator2 = '블리언 값은 ' + (boolValue ? '참' : '거짓');
   console.log(operator1);
   console.log(operator2);
   
   
   console.log('/nes6 syntax');
   greeting = `${string1}${string2} 입니다.`;
   console.log('greeting : ' + greeting);
   

   message = `제품 : ${product.name}, 가격 : ${product.price}`;
   console.log('message : ' + message);
   
   multiline = `문자열3
   문자열4`;
   
   console.log(multiline);
   
   boolValue = true;
   operator1 = `연산결과 : ${value1 * value2}`;
   operator2 = `블리언 값은 ${boolValue ? '참' : '거짓'} 입니다.`;
   console.log(operator1);
   console.log(operator2);
   
   let header = "IT 과목";
   let subject = ['java', 'jsp', 'oracle', 'python', 'spring', 'react'];
   
   let html = `<h2>${header}</h2>`;
   html += `<Ul>`;
   for(const item of subject){
	   html += `<li>${item}</li>`;
   }
   
   html += `</Ul>`;
   console.log('html');
   console.log(html);
   
   
   return(
   <div>안녕하세요.</div>
   );
}


export default App;