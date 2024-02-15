import React, { useState } from 'react';
import HamburgerImg from '../assets/icons/hamburger.png'
import { navlist } from "../data/data"


const Hamburgermenu = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMenuClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="app">
            <header>
                <div className="navbar">
                    <div className="hamburger" onClick={handleMenuClick}>
                        <img src={HamburgerImg} alt="" />
                    </div>
                </div>
            </header>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <div className='navlist_cont ham-list'>
                            {navlist.map((list) => (
                                <div key={list.id} className="list">
                                    <ul>
                                        <li>
                                            <a href={`#${list.id}`} onClick={handleCloseModal}>{list.home}</a>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hamburgermenu