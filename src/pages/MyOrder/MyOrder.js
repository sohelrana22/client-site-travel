import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const MyOrder = () => {
   const {user} = useFirebase()
   const {email} = user;
    const [order, setOrder] = useState([])
console.log(email);
    useEffect( () => {
        fetch(`https://pure-oasis-89379.herokuapp.com/orders/${email}`)
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [email])
    // console.log(order);
    return (
        <div>
            <h2 className="mx-auto">My Order:{order.length}</h2>
           <div>
        {
            order.map(single=><div className="container d-flex">
                <div>
                    <img className="w-50" src={single.img} alt="" />
                    
                 <div>
               <h2>{single.name}</h2>
                <h4>{single.price}</h4>
                <p>{single.detail}</p>
               </div>
                </div>
              
            </div>)
        }
            </div>
        </div>
    );
};

export default MyOrder;