const getTodayDate = (date) => {
  const temp = new Date(date);
  const year = temp.getFullYear();
  const month = temp.getMonth() + 1;
  const day = temp.getDate();
  let d = `${year}/${String(month).padStart(2, "0")}/${String(day).padStart(
    2,
    "0"
  )}`;
  return d;
};
export default getTodayDate;
