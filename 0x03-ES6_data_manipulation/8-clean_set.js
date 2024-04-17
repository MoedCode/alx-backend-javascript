export default function cleanSet(sett, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const result = [];
  for (const item of sett) {
    if (typeof item === 'string') {
      if (item.slice(0, startString.length) === startString) {
        result.push(item.slice(startString.length));
      }
    }
  }
  return result.join('-');
}
