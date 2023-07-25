import Api from "../axiosConfig";

export const CardPredictions = async () =>{
    const response = await Api.get(`/app/predicao`);
    return response.data.content
}