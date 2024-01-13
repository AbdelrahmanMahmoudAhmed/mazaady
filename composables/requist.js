import axios from "axios";

export default function requist (){ 

const config = useRuntimeConfig();

const Axios = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? config.public.prod_base : config.public.dev_base,
    headers:{
        "private-key" : config.public.private_key
    }
})
return {Axios}
}
 