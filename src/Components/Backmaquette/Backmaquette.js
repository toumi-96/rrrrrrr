import Navsearch from './Navsearch'


const Backmaquette = () => {
  return <div style={backStyle}>
<Navsearch />
<Navsearch />

  </div>;
};

const backStyle ={
 backgroundColor: '#112031',
 position: 'relative',
  width: '70%',
  marginLeft: '200px',
  height: '100%',
  borderRadius: '5px',
  display: 'flex',
  marginTop: '50px',
  justifyContent: 'center',

}

export default Backmaquette;