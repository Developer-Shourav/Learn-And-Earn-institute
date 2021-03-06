import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeCard = (props) => {

    /* ---------Distructring the props-------- */
    const{name, price, img} = props.product ;
    return (
        <div>
            {/* -----------Making Card using bootStrap--------- */}
            <div className="col h-100 card-style">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-text">Price: {price}</h6>
                        {/* -------Button for service navigation------- */}
                        <NavLink to="/services"> <button className="learnMore-btn">Learn more</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;