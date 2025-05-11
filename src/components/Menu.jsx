import React from 'react'

const Menu = () => {
    return (
    <div style={{ background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)'}}>

     <a href="/menu.pdf" target="_blank" rel="noopener noreferrer">
     <button style={{
  marginTop: '16px',
  fontSize: '13px',
  padding: '6px 14px',
  backgroundColor: '#339AF0', // כחול בהיר ונעים
  color: 'white',
  border: 'none', 
  borderRadius: '4px',
  cursor: 'pointer',
  boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.2s ease, box-shadow 0.2s ease'
}}>
  צפייה בקובץ PDF
</button>


</a>

<div style={{ textAlign: 'center' }}>
  <div style={{ marginBottom: '30px' }}> 
    <img
      src="/Tafritimages/part2.png"
      alt="תפריט חלק 1"
      style={{
        maxWidth: '100%',
        width: '600px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
     marginRight:'10px'
      }}
    />
  
    <img
      src="/Tafritimages/part1.png"
      alt="תפריט חלק 2"
      style={{
        maxWidth: '100%',
        width: '600px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    />
  </div>

  <div>
   
  </div>
</div>

 

        </div>


      );
    }
    
    export default Menu;