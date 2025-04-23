import * as users from "./modules/users"
import * as auth from './modules/auth'
import * as communities from './modules/communities'
import { checkServerHealth } from "./config"
// entities
export * from './entities/user'
export * from './entities/community'

const initialize = async () => {
    try {
        await auth.authenticateLocalUser();
    } catch (__) { }
}

const backendSDK = {
    users,
    auth,
    communities, 
    initialize,
    checkServerHealth
}

export {
    backendSDK
}