import Api from "../axiosConfig";

type Props = {
    id: number,
}

export const ProductsUpPerClient = async ({id}: Props) => {
    try{
        const response = await Api.get(`/app/cliente/${id}/produtos?classificacao=EM_AL`);
        return response.data
    } catch(error){
        console.log(error)
    }
}

export const ProductsDownPerClient = async ({id}: Props) =>{
    const response = await Api.get(`/app/cliente/${id}/produtos?classificacao=EM_BAIXA`);
    return response.data
}