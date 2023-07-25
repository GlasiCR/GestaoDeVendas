import Api from "../axiosConfig";

export const ListAllProducts = async (page: number, stateFilter: string) =>{
    const response = await Api.get(`/app/produto?page=${page}&size=10&classificacao=${stateFilter}`);
    return response.data
}
export const RequestTotalItems = async (page: number) => {
    const response = await Api.get(`/app/produto?page=${page}&size=10`);
    return response.data
}
export const FilterListProducts = async (status: string) => {
    const response = await Api.get(`/app/produto?classificacao=${status}`);
    return response.data.content
}