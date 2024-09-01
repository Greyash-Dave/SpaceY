import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <button className="sidebar-logo" onClick={() => setIsOpen(!isOpen)}>
            {isOpen&&<img src="/sidebar-close.png" alt="logo" />}
            {!isOpen&&<img src="/sidebar-open.png" alt="logo" />}
        </button>
        <div className={`sidebar-container ${isOpen ? 'opened' : 'closed'}`}>
            <div className={`dark-overlay ${isOpen ? 'show' : ''}`} />
            <div className={`sidebar-list-container ${isOpen ? 'opened' : 'closed'}`}>
                <div className={`sidebar-list ${isOpen ? 'opened' : 'closed'}`}>
                    <div className="sidebar-list-item">
                        <p>MISSION</p>
                    </div>
                    <div className="sidebar-list-item">
                        <p>LAUNCHES</p>
                    </div>
                    <div className="sidebar-list-item">
                        <p>CAREERS</p>
                    </div>
                    <div className="sidebar-list-item">
                        <p>UPDATES</p>
                    </div>
                    <div className="sidebar-list-item">
                        <p>SHOP</p>
                    </div>   
                </div>     
            </div>
        </div>
    </>
  )
}

export default Sidebar