import Api from "../axiosConfig";

export const Search = async (word: string) => {
    const response = await Api.get(`https://api.predict.app.br/app/predicao?query=${word}`);
    return response.data.content
}