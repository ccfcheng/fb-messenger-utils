export const truncate = (str, length) => {
  if (str.length > length) {
    return `${str.slice(0, length - 3)}...`;
  }
  return str;
};
