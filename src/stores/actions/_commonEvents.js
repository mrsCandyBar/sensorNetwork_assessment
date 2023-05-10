import { get, put, post, remove } from '../../utilities/repofactory';

export const getList = async (path, payload, model) => {
    let results = await get(path, payload);
    results = results ? results.map((event) => { return new model(event); }) : [];
    return results
}

export const createListItem = async (path, payload) => {
    let result = await post(path, payload);
    return result
}

export const updateListItem = async (path, payload) => {
    let result = await put(path, payload);
    return result
}

export const deleteListItem = async (path, payload) => {
    let result = await remove(path, payload);
    return result;
}