import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime';
import calendar from 'dayjs/plugin/calendar';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.locale('zh-cn')
dayjs.extend(isToday)
dayjs.extend(isTomorrow)
dayjs.extend(isYesterday)
// dayjs.extend(relativeTime)
// dayjs.extend(calendar)

// export const fromNow = (date) => {
//   const now = new Date()
  
// }  
export const showDay = (day) => {
  if(dayjs(day).isToday()) {
    return '今天'
  }
  if(dayjs(day).isYesterday()) {
    return '昨天'
  }
  if(dayjs(day).isTomorrow()) {
    return '明天'
  }
  return dayjs(day).format('MM月DD日')
}

export default dayjs