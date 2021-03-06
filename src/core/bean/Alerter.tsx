import IdName from "./IdName";
import Calendar from "taro-ui/types/calendar";
import Shop from "./Shop";
import Landmark from "./Landmark";

export default class Alerter {

  id: String
  jobId: String
  alerter: IdName
  alertTime: String
  audioList: Array<String>
  imageList: Array<String>
  videoList: Array<String>
  securityCompanyId: String
  securityCompanyName: String
  assets: IdName
  position: Landmark

}
