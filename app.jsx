import React from 'react';
import Operations  from './components/operations.jsx';
class App extends React.Component {
   constructor(props) {
      super(props);
      this.state={
         value : ''
      };
      this.result = this.result.bind(this);
   }
   result(response){
      console.log(response);
      console.log(this);
      this.setState({value: response});
   }   
   render() {
      return (
         <div>
            <Operations result={this.result}/>
            <input type='text' disabled value={this.state.value}/>
         </div>
      );
   }
}
export default App;