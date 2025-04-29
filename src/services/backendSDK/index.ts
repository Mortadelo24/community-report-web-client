import * as users from "./modules/users"
import * as auth from './modules/auth'
import * as communities from './modules/communities'
import * as reports from './modules/reports'
import * as invitations from './modules/invitations'
import { checkServerHealth } from "./config"
// entities
export * from './entities/user'
export * from './entities/community'
export * from './entities/report'
export * from './entities/invitation'

const initialize = async () => {
    try {
        await auth.authenticateLocalUser();
    } catch (__) { }
}

const backendSDK = {
    users,
    auth,
    communities, 
    reports,
    invitations,
    initialize,
    checkServerHealth
}

export {
    backendSDK
}