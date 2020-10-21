const formatDate = (value: Date): string => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(value));
};

export default formatDate;
