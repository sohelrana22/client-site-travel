import { useEffect, useState } from "react";


const useServices = () => {
    const [travels, setTravels] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/travels')
        .then(res => res.json())
        .then((data) => setTravels(data))
    },[]);

    return {travels, setTravels};
};

export default useServices;