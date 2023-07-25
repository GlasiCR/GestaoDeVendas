import Api from "../axiosConfig";

export const ResumeProduct = async (id: number) =>{
    const response = await Api.get(`/app/produto/${id}/resumo`);
    return response.data
}