export const DEVELOPMENT = false
export const BACKEND_PORT = `4000`
export const IP = DEVELOPMENT ?  "new-laptop.tail9e6c6.ts.net": `localhost` 
export const BACKEND_URL = `http://${IP}:${BACKEND_PORT}`
