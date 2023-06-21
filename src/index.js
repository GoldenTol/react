import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import 앱이름 from '파일이름';
// import App from './App';
// import App from './ch02.es6_syntax/App_let_const';
// import App from './ch02.es6_syntax/App_template_string';
// import App from './ch02.es6_syntax/messenger';
// import App from './ch02.es6_syntax/App_make_function';
// import App from './ch02.es6_syntax/App_arrow_function';
// import App from './ch02.es6_syntax/App_structure_split_assignment';
// import App from './ch02.es6_syntax/App_spread_operator';
// import App from './ch02.es6_syntax/App_object_extension_expression.js';
// import App from './ch02.es6_syntax/App_foreach.js';
// import App from './ch02.es6_syntax/App_map.js';
// import App from './ch03.react_component/App_component01';
// import App from './ch03.react_component/App_class_separator';
// import App from './ch03.react_component/App_with_props';
// import App from './ch03.react_component/App_file_separator';
// import App from './ch03.react_component/App_propTypes_defaultProps';
// import App from './ch03.react_component/App_constructor_state';
// import App from './ch03.react_component/App_branching';
// import App from './ch03.react_component/App_array_and_table01';
// import App from './ch03.react_component/App_array_and_table02';
// import App from './ch04.event_handing/App_event_test01';
// import App from './ch04.event_handing/App_function_binding';
// import App from './ch04.event_handing/App_event_test';
// import App from './ch05.react_hooks/App_useState_01';
// import App from './ch05.react_hooks/App_useState_02';
// import App from './ch05.react_hooks/App_useState_03';
// import App from './ch05.react_hooks/App_useState_04';
// import App from './ch05.react_hooks/App_useEffect_01';
// import App from './ch05.react_hooks/App_useEffect_02';
// import App from './ch05.react_hooks/App_useContext_01';
// import App from './ch05.react_hooks/App_useContext_02';
// import App from './ch05.react_hooks/noContext01/App_useContext_03No';
// import App from './ch05.react_hooks/noContext02/App_useContext_03No';
// import App from './ch05.react_hooks/noContext03/App_useContext_03No';
// import App from './ch05.react_hooks/yesContext01/App_useContext';
// import App from './ch05.react_hooks/yesContext02/App_useContext';
// import App from './ch05.react_hooks/yesContext03/App_useContext';
// import App from './ch06.bootstrap-exam/coffee_bread_01/App';
// import App from './ch06.bootstrap-exam/coffee_bread_02/App';
// import App from './ch06.bootstrap-exam/coffee_bread_03/App';
// import App from './ch06.bootstrap-exam/coffee_bread_04/App';
// import App from './ch06.bootstrap-exam/coffee_bread_05/App';
// import App from './ch02.es6_syntax/App_sort_test';
// import App from './ch06.bootstrap-exam/coffee_bread_06/App';
// import App from './ch08.Axios_rechart_chartJs/JsonPlaceholder';
// import App from './App';
// import App from './ch08.Axios_rechart_chartJs/GetSpringBoot01';
// import App from './ch08.Axios_rechart_chartJs/GetSpringBoot02';
// import App from './ch08.Axios_rechart_chartJs/GetSpringBoot03';
// import App from './ch08.Axios_rechart_chartJs/GetSpringBoot04';
// import App from './ch08.Axios_rechart_chartJs/GetSpringBoot05';
import App from './ch08.Axios_rechart_chartJs/GetSpringBoot11';



import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// StrictMode를 사용하면 개발 도중 발생하는 문제를 감지하기 위한 설정으로 rendering을 두 번 실행합니다.
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
