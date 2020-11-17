import moment from "moment";

const defaultDatetimeFormat = 'YYYY-MM-DD HH:mm:ss';

const defaultDatetimeFullFormat = 'YYYY-MM-DD HH:mm:ss.sss';

/**
 * 最近聊天消息时间格式化器
 * @param datetime 时间对象：string、date、moment
 * */
function chatListItemTimeFormatter(datetime) {
  if (!datetime) {
    throw '时间为空';
  }
  let theTime;
  if (typeof datetime === 'string') {
    theTime = moment(datetime, defaultDatetimeFormat);
  } else if (moment.isDate(datetime)) {
    theTime = moment(datetime);
  } else if (moment.isMoment(datetime)) {
    theTime = datetime.clone();
  } else {
    throw '不支持的时间对象（仅支持string、date以及moment）';
  }
  if (!theTime.isValid()) {
    throw `moment时间对象不合法`;
  }

  let todayZero = moment().hours(0).minutes(0).seconds(0).milliseconds(0);
  if (theTime.isBefore(todayZero)) {
    return theTime.format('MM-DD');
  }
  return theTime.format('HH:mm');
}

export default {
  chatListItemTimeFormatter
};
