const getContent = (content) => {
  // chose a random temperature and condition
  const randomTemperature = Math.floor(Math.random() * (80 - 50 + 1)) + 50;
  const randomConditionIndex = Math.floor(Math.random() * 5);
  const conditions = ["Cloudy", "Sunny", "Rainy", "Snowy", "Windy"];

  return {
    content: content,
    temperature: randomTemperature,
    unit: "F",
    conditions: conditions[randomConditionIndex],
  };
};

export { getContent };
