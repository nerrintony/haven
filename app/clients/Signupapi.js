import { ApiClient } from '../middleware/Http'
let client = new ApiClient(process.env.NEXT_PUBLIC_HAVEN_APP_API)
export default {
    usersDetails( params) {
        return client.getclient.post(`signup`,params);
      },
      Dropdown(params){
        return client.getclient.get(`show-countries`);
      },
      verifyEmail(params){
        return client.getclient.post('verify-email',params)
      }
}