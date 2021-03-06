import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeCard from '../HomeCard/HomeCard';
import "./Home.css";

const Home = () => {
    const [products, setProducts]  = useState([]) ;

    useEffect(() => {
        fetch('./cources.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))


    }, []);

    return (
        <div>
            <div className="web-intro">
                {/* --------Web Thumbneil Img----------- */}
                <div className="intro-img">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" width = "1349px" height ="650px" />
                </div>
                {/* -------Side's Name---------- */}
                <div className="intro-text">
                    <h1>Learn And Earn</h1>
                    <h2>Like your personal online University</h2>
                   
                </div>
                
            </div>

                  <div className="card-container container">
                   <div className="row  row-cols-1 row-cols-md-3 g-4">
                       {
                        products.map(product => <HomeCard
                                        /* ------Key for error handeling------ */
                                                key ={product._id}
                                         /* ------Sending Props for homeCard------ */
                                                product ={product}
                        > </HomeCard>)
                       }

                   </div>
                  </div>
           
        </div>
    );
};

export default Home;