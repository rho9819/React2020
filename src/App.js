import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
class Subject extends Component {
  render(){
   return (
     <div>
  <header>
      <div class="menu">
        <div class="logo">SS</div>
         <div class="dhseh"><a href="#">온도</a></div>
         <div class="ajswl"><a href="#">미세먼지</a></div>
         <div class="rmqtlr"><a href="#">급식</a></div>
      </div>
  </header>
  <article>
    <div class="Temperature"></div>
    <div class="finedust"></div>
    <div class="cafeteria"></div>
  </article>
  </div>
   );
  }
}
class App extends Component {
 render() {

  return (
    <div className="App">
    <Subject></Subject>
    </div>
  );
}
}
export default App;