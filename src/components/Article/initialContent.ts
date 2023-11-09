import axios from "axios";

export const api = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
    timeout: 8000,
});


const GetProducts = async () => {
    await api
        .get("products")
        .then((response) => {
        })
        .catch((error) => {
            console.log("error", error);
            alert("error");
        });
};