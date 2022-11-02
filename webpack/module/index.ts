import { Configuration } from 'webpack'

import rules from './rules'

const moduleOptions: Configuration['module'] = {
  rules,
}

export default moduleOptions
