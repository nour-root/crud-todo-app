const getTodayDate = () => {
  const now = Date.now();
  const today = new Date(now);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  let d = `${year}/${String(month).padStart(2, "0")}/${String(day).padStart(
    2,
    "0"
  )}`;
  return d;
};
export default getTodayDate;
