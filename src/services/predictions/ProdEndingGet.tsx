import Api from "../axiosConfig";

export const ProdEnding = async (id: number) => {
    const response = await Api.get(`/app/predicao/${id}/esgotando`);
    return response.data.content
}