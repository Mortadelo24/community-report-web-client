import * as users from "./modules/users"
import * as auth from './modules/auth'
import * as communities from './modules/communities'
import * as reports from './modules/reports'
import * as complaints from './modules/complaints'
import * as invitations from './modules/invitations'
import * as statistics from './modules/statistics'
import * as images from './modules/images'
import { checkServerHealth } from "./config"
// entities
export * from './entities/user'
export * from './entities/community'
export * from './entities/report'
export * from './entities/invitation'
export * from './entities/complaint'
export * from './entities/statistic'
export * from './entities/image'

const backendSDK = {
    users,
    auth,
    communities, 
    reports,
    complaints,
    invitations,
    statistics,
    images,
    checkServerHealth,
}

export {
    backendSDK
}
