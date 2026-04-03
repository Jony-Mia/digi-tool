import axios from "axios";

export let Data = async()=>{
    let res = await axios.get('/data.json')
    return res.data;
}

export let Price = async()=>{
    let res = await axios.get('/pricing.json')
    return res.data;
}