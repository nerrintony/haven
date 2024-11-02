import { ApiClient } from '../middleware/Http'
let client = new ApiClient(process.env.NEXT_PUBLIC_HAVEN_APP_NODE_API)
export default {
   BalanceDetails( params, headers) {
        return client.getclient.post(`balanceToken`,params,headers);
      }
    }