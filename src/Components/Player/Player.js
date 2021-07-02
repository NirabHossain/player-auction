import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {dp,name,age,salary,auctionPrice}=props.player;
    const teamHandler=props.teamHandler;
    return (
            <div className="card mt-4">
                <img className="card-img-top" src={dp} alt=''/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <div className="card-text">
                        <p>Age: {age}</p>
                        <div className="prices">
                            <p>Price: <span  style={{color: 'red'}}>{auctionPrice}</span></p>
                            <p> Salary: <span  style={{color: 'blue'}}>{salary}tk</span></p>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button onClick={()=>teamHandler(props.player)} className='button btn-success pb-2 pt-2 pr-5 pl-5'>
                        <FontAwesomeIcon icon={faPlus} /> Bid Player
                    </button>
                </div>
            </div>
    );
};

export default Player;