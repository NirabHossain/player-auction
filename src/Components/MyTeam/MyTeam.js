import React from 'react';
import './MyTeam.css'

const MyTeam = (props) => {
    const {name, salary, auctionPrice}=props.teamPlayer;
    return (
        <div style={{display: 'block',width: '70%'}}>
             <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className='name'>{name}</div>   
                <div className='num'>Salary: { salary}</div>
                <div className='num'>Buying Price: { auctionPrice}</div>
             </div>
        </div>
    );
};

export default MyTeam;