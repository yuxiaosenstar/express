const { execSync } = require('child_process')
const dockerImageName = 'yuxiaosen/mshop-serve'

execSync(`docker buildx build \
--platform linux/amd64,linux/arm64 \
--push -t ${dockerImageName} .
`)
