export class Constants {

  public static MOBILE_REGEX = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
  public static EMAIL_REGEX = /(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})/;
  public static USERNAME_REGEX = /^[a-zA-Z0-9_.-]*$/
  public static NUMBER_REGEX = /^([\u0660-\u06690-9]*)$/;

  public static Password_REGEX = /(?=.{8,})(?=(.*\d){1,})(?=(.*\W){1,})/
  public static MOBILE_MAX = 14;
  public static MOBILE_MIN = 10;
  public static ID_LENGTH = 10;

  public static NONE = "-1";
  public static ALL = "-1";


  public static DATA_PATH: string = "";
  public static DATA_PATH_PART: string = "/";

  public static ACCESS_TOKEN: string = "ACCESS_TOKEN";
  public static LAST_LOGIN_DATE: string = "LAST_LOGIN";

  public static DATA_KEY: string = "DATA";
  static ONE_HOUR: number = 3600000;

  public static BASE_URL: string = "http://10.32.0.179:8621";

  public static LOGO: string = './assets/media/logos/demo2.png';
  public static LOGO_ALTERNATIVE: string = './assets/media/logos/demo2-sticky.png';

}
