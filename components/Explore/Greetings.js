
const Greetings = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon';
  } else if (hour >= 17 && hour < 19) {
    return 'Good Evening';
  } else {
    return 'Good Night';
  }
};

export default Greetings;
