import Api from "../axiosConfig";

export const ProductsUp = async () =>{
    const response = await Api.get(`/app/produto?classificacao=EM_ALTA`);
    return response.data.content
}

export const ProductsDown = async () =>{
    const response = await Api.get(`/app/produto?classificacao=EM_BAIXA`);
    return response.data.content
}