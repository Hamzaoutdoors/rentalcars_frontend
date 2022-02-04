/* eslint-disable no-use-before-define */
export const numOfDays = (date1, date2) => {
  const DAYS = 1000 * 60 * 60 * 24;
  const dt1 = new Date(date1);
  const dt2 = new Date(date2);
  const diff = dt2.getTime() - dt1.getTime();
  return Math.floor(diff / DAYS);
};

export const totalAmount = (Price, date1, date2) => {
  const num = numOfDays(date1, date2);
  const priceInt = parseInt(Price, 10);
  return priceInt * num;
};
