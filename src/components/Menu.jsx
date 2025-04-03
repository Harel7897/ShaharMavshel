import React from 'react'

const Menu = () => {
    return (
    <div style={{ background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)'}}>

     <a href="/menu.pdf" target="_blank" rel="noopener noreferrer">
  <button style={{
    marginTop: '40px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
  }}>
    צפייה בקובץ PDF
  </button>
</a>


        <div style={{ padding: '98px', textAlign: 'center' }}>

          <img
            src="/Tafritimages/part2.png"
            alt="תפריט חלק 2"
            style={{
              maxWidth: '100%',
              width: '600px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />


          <img
            src="/Tafritimages/part1.png"
            alt="תפריט חלק 1"
            style={{
              maxWidth: '100%',
              width: '600px',
              marginBottom: '20px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />

</div>
 

        </div>


      );
    }
    
    export default Menu;