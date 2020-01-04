export const DATA = {
  depths: [10, 12, 15, 18, 21, 24, 27, 30, 34, 37, 40],
  ppo2: [1.1, 1.2, 1.3, 1.4, 1.5, 1.6],
  ean: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  PPO2_MAX: 1.6,
  PPO2_WARN: 1.3
};

export function ean_range(from: number, to: number) {
  const arr = [];
  for (let fo2 = from; fo2 <= to; fo2++) {
    arr.push(fo2);
  }
  return arr;
}
