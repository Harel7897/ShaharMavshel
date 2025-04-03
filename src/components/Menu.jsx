import React from 'react'

const Menu = () => {
    return (
        <div style={{ padding: '70px',background:'linear-gradient(90deg, #0f2027, #203a43, #2c5364)' }}>
          <iframe
            src="/menu.pdf"
            title="תפריט PDF"
            width="100%"
            height="918px"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      );
    }
    
    export default Menu;