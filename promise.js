const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let count = 0;

  const ixx = await promiseTheaterIXX();
  ixx.forEach((val) => {
    if (val.hasil == emosi) {
      count++;
    }
  });

  const vgc = await promiseTheaterVGC();
  vgc.forEach((val) => {
    if (val.hasil == emosi) {
      count++;
    }
  });

  return count;
}


module.exports = {
  promiseOutput,
};
