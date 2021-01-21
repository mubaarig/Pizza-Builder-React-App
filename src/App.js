import Reat, {Component} from 'react'
import './App.css';
import Layout from './components/Layout/Layout'
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder'

class  App extends Component{
    
    render(){
        return(
            <div>
                <Layout> <PizzaBuilder/> </Layout>
            </div>
        );
    }

 
}

export default App;
