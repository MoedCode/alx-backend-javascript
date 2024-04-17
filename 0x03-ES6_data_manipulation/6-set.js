export default function setFromArray(array) {
  return array.reduce((set, value) => set.add(value), new Set());
}
