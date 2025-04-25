import * as config from '../config'
import { backend } from '../config';


type Provider = 'google';

let isUserAuthenticated = false;

const authenticateLocalUser = async() => {
    const token = localStorage.getItem('elkit');
    config.setAuthenticationToken(token); 
    try {
        await backend.post('/users/token/validate');
        isUserAuthenticated = true;       
    }catch(__){
        config.setAuthenticationToken(null);
        throw new Error("The local user is not valid")
    }
  
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
        isUserAuthenticated = true;
    } catch(__){
        throw new Error("could not authenticat the user")
    }
}

const logout = ()=>{
    config.setAuthenticationToken(null);
    isUserAuthenticated = false;
}

const isAuthenticated = ()=>{
    return isUserAuthenticated
}

export {
    authenticateLocalUser,
    authenticateUser,
    logout,
    isAuthenticated
}