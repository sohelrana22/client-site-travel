import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const ManageOrder = () => {
    const { user } = useFirebase()
    const { email } = user;
    const [allOrder, setAllOrder] = useState([])
    console.log(email);
    useEffect(() => {
        fetch(`https://pure-oasis-89379.herokuapp.com/manageorder/${email}`)
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to cancel Order?');
        if(proceed) {
          const url = `https://pure-oasis-89379.herokuapp.com/manageorder/${id}`;
          fetch(url, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.deletedCount) {
                      alert('canceled')
                      const remaining = allOrder.filter(single => single?._id !== id);
                      setAllOrder(remaining)
                  }
  
              })
        }
      }
    return (
        <div className="admin-section p-5">
          <div className='text-center fw-bold'>
            <h1 className='pt-3'>ADMIN DASHBOARD</h1>
             <h4 className='pt-2 pb-2'>TOTAL ORDERS:  { allOrder.length}</h4>
          </div>
          <div className='container'>
             <Table striped bordered hover
     responsive="sm" className='my-3'>
        <thead>
          <tr>
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index}>Name</th>
                        ))}
                
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index}> ORDER ID </th>
                        ))}
                
    
                        {Array.from({ length: 1 }).map((_, index) => (
                          <th key={index}>PRICE</th>
                        ))}
                
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index}>STATUS</th>
                        ))}
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index}>CANCEL</th>
                        ))}
                        {Array.from({ length: 1 }).map((_, index) => (
                                    <th key={index}>CONFIRM</th>
                        ))}
              </tr>
              
            </thead>
            {
              allOrder.map(allOrder=>(<tbody>
        
        <tr>
          
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold ' key={index}>{ allOrder?.name}</td>
          ))}
                  
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold ' key={index}>{ allOrder?._id}</td>
          ))}
                  
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold ' key={index}>{ allOrder?.price}</td>
          ))}
                  
          {Array.from({ length: 1 }).map((_, index) => (
            <td className='fw-bold ' key={index}>{ allOrder?.status}</td>
          ))}
          {Array.from({ length: 1 }).map((_, index) => (
            <td  key={index}>Panding<button onClick={() => handleDelete(allOrder._id)} className="mx-3 text-danger">Delete</button></td>
          ))}
          {Array.from({ length: 1 }).map((_, index) => (
            <td  key={index}></td>
          ))}
                  
                  
    
                  
        </tr>
        
    </tbody>))
            }
        </Table>
       </div>
    
        </div>
      );
    };

export default ManageOrder;