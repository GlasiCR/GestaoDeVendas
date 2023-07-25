import Api from "../axiosConfig";

export const ResumeDash = async () =>{
    const response = await Api.get(`/app/dashboard/resumo`);
    return response.data
}