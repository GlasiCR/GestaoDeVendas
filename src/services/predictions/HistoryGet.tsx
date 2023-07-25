import Api from "../axiosConfig";

export const History = async (id: string) =>{
    const response = await Api.get(`/app/predicao/${id}/historico`);
    return response.data.content
}