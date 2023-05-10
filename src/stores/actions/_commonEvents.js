import { get } from '../../utilities/repofactory';

export const getList = async (path, payload, model) => {
    let results = await get(path, payload);
    results = results ? results.map((event) => { return new model(event); }) : [];
    return results
}