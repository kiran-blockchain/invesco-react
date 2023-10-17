
import Header from "./components/Header";
import { HeaderConfig } from "./config/header";
import Register from "./pages/Register";
//Every component should start with capital letter
const App = ()=>{
  
  //every component must have a return statement
  //it should return only only root tag
  return(
    <div>
      <Header config={HeaderConfig}/>
      <Register/>
    </div>
  )
}
//every component must be exported.
export default App;