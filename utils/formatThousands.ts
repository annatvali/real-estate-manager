export const formatThousands = (input: number | string): string => {
  const inputStr = typeof input === 'string' ? input : input.toString();
  return inputStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
