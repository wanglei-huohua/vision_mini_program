/**
 * url配置类
 */
export default class UrlConfig {

  public static domain = `https://www.hy01.top`;

  public static baseUrl: string            = `${UrlConfig.domain}/test`;
  // public static baseUrl: string            = `${UrlConfig.domain}/dev`;

  //登录
  public static login                      = `${UrlConfig.baseUrl}/api1/security/auth/oauth2/token`;

  //获取报警列表
  public static   GET_WORKORDER_URL        = `${UrlConfig.baseUrl}/api1/alert-business/job/alert-handler`;

  //获取报个人数据面板
  public static   GET_COST_DATA        = `${UrlConfig.baseUrl}/api1/alert-business/statistics/alert-handler-job/costData`;


  public static   GET_IMAGE_DATA        = `${UrlConfig.baseUrl}/api1/file/image?url=`;

}