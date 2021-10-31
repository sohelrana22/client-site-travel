import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import './Details.css'

const Details = () => {
    const { id } = useParams();
    const { AllContexts } = useAuth()
    const { user } = AllContexts
    const [orders, setOrders] = useState([])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/order', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };

    useEffect(() => {
        fetch('http://localhost:5000/travels')
            .then(res => res.json())
            .then(data => {
                const orders = data?.find(order => order?._id === id)
                setOrders(orders)
                console.log(orders)
                reset(orders)
            })

    }, [id])

    // const {key} = useParams();
    //     const {travels} = useAuth()
    // const detailService = travels.find(travel => travel?.key === Number(key));
    // const {img, name, detail, price} = orders;


    return (
        <div className="my-4 container">
            <div className="row">


                {/* {orders.name ? ( */}
                <div className="col">


                    <Card className="m-2 body-detail" style={{ width: '21rem' }}>
                        <Card.Img variant="top" className="img-fluid" src={orders?.img} />
                        <Card.Body className="text-white">
                            <Card.Title> {orders?.name}</Card.Title>
                            <Card.Title>${orders?.price}</Card.Title>
                            <Card.Text>{orders?.detail}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                {/* ) : (
                <h1>No Result Found</h1>
                ) */}


                {/* } */}
                <div className="add-service col">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <input {...register("price", { required: true, maxLength: 20 })} placeholder="Price" />
                        <textarea {...register("detail")} placeholder="Detail" />
                        <input {...register("img")} placeholder="image-url" />
                        <input type="submit" />
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Details;