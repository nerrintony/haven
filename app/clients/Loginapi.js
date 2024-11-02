import { ApiClient } from '../middleware/Http'
let client = new ApiClient(process.env.NEXT_PUBLIC_HAVEN_APP_API)
export default {
   LoginDetails( params) {
        return client.getclient.post(`login`,params);
      },
      ForgetPassword(params) {
        return client.getclient.post(`forgot-password`,params);
      },
      ResetPassword(params){
        return client.getclient.post(`reset-password`,params);
      }
    }
   