export const DEVELOPMENT = false
export const BACKEND_PORT = `4000`
export const IP = DEVELOPMENT ? `localhost` : "reportji.zapto.org"
export const BACKEND_URL = `http://${IP}:${BACKEND_PORT}`