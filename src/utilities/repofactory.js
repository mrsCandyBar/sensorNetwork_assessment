import { toggleSubmitButtonState } from '.';
import axios from 'axios';
import { toast } from 'react-toastify';
let jwtToken = undefined;

function _getConfig(uri) {
    let config = {
        headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
        }
    };

    if (jwtToken && // is not any of the pages below
        (uri.indexOf("login") === -1 || uri.indexOf("resetPassword") === -1)
    ) {
        if (uri.indexOf("logout") > -1) {
            jwtToken = undefined;
        } else {
            const authType = "Bearer";
            config.headers['Authorization'] = `${authType} ${jwtToken}`;
        }
    }
    return config;
}

const isStagingServer = process.env.REACT_APP_COREAPI_DEV_URL;
const isProductionServer = process.env.REACT_APP_COREAPI_LIVE_URL;
function applyToken(uri) {
    if (uri.indexOf("" + isStagingServer) > -1 || uri.indexOf("" + isProductionServer) > -1) {
        return _getConfig(uri);
    }
    return undefined;
}

export async function get(uri, payload) {
    const payloadAsString = convertPayloadToString(payload);
    return await axios.get(payload ? uri + payloadAsString : uri, applyToken(uri))
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleNotifications(uri, payload, "GET", "FAIL", error);
        });
};

export async function post(uri, payload, returnError, hideNotification) {
    toggleSubmitButtonState();
    return await axios.post(uri, payload, applyToken(uri))
        .then((response) => {
            if (response.status !== 200) {
                !hideNotification && handleNotifications(uri, payload, "POST", "WARN", response.data);
                toggleSubmitButtonState();
            }
            else {
                !hideNotification && handleNotifications(uri, payload, "POST", "SUCCESS", response.data);
                toggleSubmitButtonState();
                return response.data;
            }
        })
        .catch((error) => {
            toggleSubmitButtonState();
            !hideNotification && handleNotifications(uri, payload, "POST", "FAIL", error);

            if (returnError) {
                return error.response;
            }
        });
};

export async function put(uri, payload, hideNotification) {
    toggleSubmitButtonState();
    return await axios.put(uri, payload, applyToken(uri))
        .then((response) => {
            if (response.status !== 200) {
                handleNotifications(uri, payload, "PUT", "WARN", response.data);
                toggleSubmitButtonState();
            }
            else {
                !hideNotification && handleNotifications(uri, payload, "PUT", "SUCCESS", response.data);
                toggleSubmitButtonState();
                return response.data;
            }
        })
        .catch((error) => {
            handleNotifications(uri, payload, "PUT", "FAIL", error);
            toggleSubmitButtonState();
        });
};

export async function remove(uri, payload, hideNotification) {
    let updateURI = uri.replace("{id}", (payload && payload._id) ? payload._id : (payload && payload.id) ? payload.id : payload);
    toggleSubmitButtonState();
    return await axios.delete(updateURI, applyToken(uri)).then((response) => {
        !hideNotification && handleNotifications(uri, payload, "REMOVE", "SUCCESS", response);
        toggleSubmitButtonState();
        return response.data;
    })
        .catch((error) => {
            handleNotifications(uri, payload, "REMOVE", "FAIL", error);
            toggleSubmitButtonState();
        });
};


function convertPayloadToString(payload) {
    let stringAlongPayload = '';
    Object.keys(payload).map((key) => {
        if (stringAlongPayload === "") {
            return stringAlongPayload = `?${key}=${payload[key]}`
        } else {
            return stringAlongPayload = `${stringAlongPayload}&${key}=${payload[key]}`
        }
    });
    return stringAlongPayload;
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