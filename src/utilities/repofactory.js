import axios from 'axios';
import { handleError } from '../stores/actions/gitHubApi'

export async function get(uri, payload, dispatch) {
    const payloadAsString = convertPayloadToString(uri, payload);
    return await axios.get(payloadAsString)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error, dispatch);
        });
};


function convertPayloadToString(uri, payload) {
    let updateURI = uri;
    Object.keys(payload).map((key) => {
        let payloadKey = key;
        updateURI = updateURI.replace("{" + payloadKey + "}", payload[payloadKey]);
        return key;
    });
    return updateURI;
}