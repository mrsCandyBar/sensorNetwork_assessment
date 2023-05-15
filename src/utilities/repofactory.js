import axios from 'axios';
import { toast } from 'react-toastify';

export async function get(uri, payload) {
    const payloadAsString = convertPayloadToString(uri, payload);
    return await axios.get(payloadAsString)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleNotifications(uri, payload, "GET", "FAIL", error);
        });
};


function convertPayloadToString(uri, payload) {
    let updateURI = uri;
    Object.keys(payload).map((key) => {
        let payloadKey = key;
        updateURI = updateURI.replace("{" + payloadKey + "}", payload[payloadKey]);
    });

    console.log("updateURI >>>", updateURI, payload)
    return updateURI;
}


export const baseToastOptions = {
    position: "top-right",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored"
}

function handleNotifications(endpoint, payload, action, status, error) {
    const payloadAndProps = { endpoint, payload, action, status };
    if (status === "FAIL") {
        toast.error(`Oh dear, server has rejected your request. See console for more info.`, baseToastOptions);
        console.log("More Info for FAIL request >>>", { payloadAndProps, error });

    } else if (status === "WARN") {
        toast.warn(`So... the server has accepted your request... barely. See console for more info.`, baseToastOptions);
        console.log("More Info for WARN request >>>", payloadAndProps);

    } else {
        toast.success(`Yay! the server has accepted your request!`, baseToastOptions);
        console.log("More Info for SUCCESS request >>>", payloadAndProps);
    }
}