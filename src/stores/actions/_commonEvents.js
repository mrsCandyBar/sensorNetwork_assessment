import { get } from '../../utilities/repofactory';

export const getList = async (path, payload, model, dispatch) => {
    let results = await get(path, payload, dispatch);
    if (model) {
        results = results ?
            (results.length ? results.map((event) => { return new model(event); }) : new model(results)) :
            results;
    }
    return results
}