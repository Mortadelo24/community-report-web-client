import * as config from '../config'
import { backend } from '../config';


type Provider = 'google';


const authenticateLocalUser = async () => {
    const token = localStorage.getItem('elkit');
    config.setAuthenticationToken(token);
    try {
        await backend.post('/users/token/validate');
        return true
    } catch (__) { }

    config.setAuthenticationToken(null);
    return false
}

const authenticateUser = async (provider: Provider, token: string) => {
    try {
        const response = await backend.post('/users/token', {
            access_token: token,
            token_type: 'Bearer',
            provider: provider
        });
        const accessToken = response.data['access_token']
        config.setAuthenticationToken(accessToken);
        localStorage.setItem('elkit', accessToken)

        return true
    } catch (__) { }
    throw new Error("Can not authenticate the user")
}

const logout = () => {
    config.setAuthenticationToken(null);
    localStorage.removeItem('elkit')
}


export {
    authenticateLocalUser,
    authenticateUser,
    logout
}
