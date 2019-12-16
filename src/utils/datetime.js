import moment from 'moment';

const CURRENT_YEAR = new Date().getFullYear();
const OLDEST_DATE = new Date(CURRENT_YEAR - 1, 0, 1);
const NEWEST_DATE = new Date(CURRENT_YEAR + 1, 0, 1);

// https://momentjs.com/docs/#/displaying/format/
export const DateTimeFormats = {
  '04 Jan 2019': 'DD MMM Y',
  '12/25/2020': 'M/D/Y',
  '7 Oct 2015, 03:37 AM': 'D MMM YYYY, hh:mm A',
  '11:30 PM': 'hh:mm A',
  '23:15:42': 'HH:mm:ss'
};

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export function getDateTimeFromFormat(format) {
  return moment(randomDate(OLDEST_DATE, NEWEST_DATE)).format(format);
}

export function getRelativePastTime() {
  return moment(randomDate(OLDEST_DATE, new Date())).fromNow();
}

export function getRelativeFutureTime() {
  return moment(randomDate(new Date(), NEWEST_DATE)).toNow();
}
