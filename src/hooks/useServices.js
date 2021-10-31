import { useEffect, useState } from "react";


const useServices = () => {
    const [travels, setTravels] = useState([]);
    useEffect(()=> {
        fetch('https://pure-oasis-89379.herokuapp.com/travels')
        .then(res => res.json())
        .then((data) => setTravels(data))
    },[]);

    return {travels, setTravels};
};

export default useServices;