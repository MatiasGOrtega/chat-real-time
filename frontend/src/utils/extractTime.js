export function extractTime(date) {
  const data = new Date(date);
  const hours = padZero(data.getHours());
  const minutes = padZero(data.getMinutes());
  return `${hours}:${minutes}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}