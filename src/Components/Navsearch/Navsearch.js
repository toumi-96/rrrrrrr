const Navsearch = () => {
  return ( <div style={contentStyle}>
  <div  style={{color:"white"}}>
   <h3> Unit Converter </h3>
   </div>

     <form action="/" method="get" >
        
        <input
            type="text"
            placeholder="Click to insert value  "
            style={imputStyle}
        />
        <div style={{position: 'relative', display: 'flex',  justifyContent: 'right', marginRight: '60px', marginTop: '20px', paddingTop: '10px'}}>
         </div>
        
    </form>
    <div style={listStyle}>
    <ul style={{listStyleType: 'none', marginLeft: '-20px'}}>
                {posts.map((post) => (
                    <li key={post.name}>{post.name}</li>
                ))}
    </ul>
              
    </div>
    </div>
  )
};

const contentStyle = {
    marginLeft: '20px',
    marginTop: '0px',
    width:'50%'
    
}

const imputStyle = {
    width:'42%',
    borderRadius: '8px',
    height: '30px',
    position: 'absolute',
    marginBottom: '40px',
   
    
}
const listStyle = {
    backgroundColor: 'white',
    width:'90%',
    lineHeight: '2.8rem',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    marginTop: '40px',
    
    


}


const posts = [
    { name: 'g/cm3' },
    { name: 'g/L' },
    { name: 'Kg/m3' },
    { name: 'Kg/L' },
    { name: 'Kpa/m' },
    { name: 'SG' },
    { name: 'm3/sk' },
    { name: 'Ib/ft3' },
    { name: 'Ib/bbi' },
    { name: 'psi/ft' },
   
];

export default Navsearch;