import { testRun } from '../cloudflare-workers/.testRun'
testRun('npm run preview:wrangler', { hasStarWarsPage: true, isCustomBuild: true })
