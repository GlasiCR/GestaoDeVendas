import Api from "../axiosConfig";

export const ClientsUp = async () =>{
    const response = await Api.get(`/app/cliente?classificacao=EM_ALTA`);
    return response.data.content
}

export const ClientsDown = async () =>{
    const response = await Api.get(`/app/cliente?classificacao=EM_BAIXA`);
    return response.data.content
}