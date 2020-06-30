const formatValue = (value: number): string => {
  const formattedValue = Intl.NumberFormat().format(value);
  return `R$ ${formattedValue}`;
};

export default formatValue;
