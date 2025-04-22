import * as Auth from './auth'
import * as Communities from './communities'
import * as Users from './users'
import { checkServerHealth } from './config'

const backendModule =  {
  ...Users,
  ...Auth,
  ...Communities,
  checkServerHealth
}

export default backendModule


