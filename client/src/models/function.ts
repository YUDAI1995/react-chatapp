/**
 * ランダム値
 * @param {number?} myStrong
 * @return {string}
 */
export const getRandomID = (myStrong?: number) => {
  let strong: number;
  myStrong ? (strong = myStrong) : (strong = 1000);
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
};

/**
 * 現在時刻
 * @return {string}
 */
export const getCurrentTime = () => {
  return (
    new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
  );
};
