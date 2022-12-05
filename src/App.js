import "./App.css";
import Conversion from "./Components/Conversion";
import Backmaquette from "./Components/Backmaquette";
import Navsearch from "./Components/Navsearch/Navsearch";


const App = () => {

return (

  <div style={bodyStyle}>
  <Conversion />
  <Backmaquette />
  <Navsearch/>
  </div>

)
}




const bodyStyle ={
  position: 'absolute' ,
  backgroundColor: '#D3D3D3',
  width: '100%',
  height: '100%',
}
export default App;