
// 千分位
export function currency(num: string | number) {
  const n = typeof num === 'string' ? parseInt(num, 10) : num;
  if (isNaN(n)) {
    return "0";
  }
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
}

export function date(time: number) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}