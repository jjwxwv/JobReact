import moment from "moment";
import "moment/locale/th";

export const date = (date: string) => {
  const diffDays = moment().locale("th").diff(moment(date), "days");
  if (diffDays < 0) {
    return moment(date).fromNow();
  } else if (diffDays === 0) {
    return "วันนี้";
  } else {
    return `${diffDays} วันที่แล้ว`;
  }
};
