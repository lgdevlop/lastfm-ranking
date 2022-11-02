import { Configuration } from 'webpack'

import packageJson from '../../package.json'

const entry: Configuration['entry'] = {
  bundle: `./${packageJson.main}`
}

export default entry
