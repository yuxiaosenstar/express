const { exec } = require("child_process");
const dockerImageName = "yuxiaosen/koa-web-app";

exec(`docker buildx build \
--platform linux/amd64,linux/arm64 \
--push -t ${dockerImageName} .
`);
