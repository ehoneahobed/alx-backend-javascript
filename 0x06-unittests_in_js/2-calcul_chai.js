function calculateNumber(type, a, b) {
    const rounded_a = Math.round(a);
    const rounded_b = Math.round(b);
    
    if (type === 'SUM') {
      return rounded_a + rounded_b;
    }
    if (type === 'SUBTRACT') {
      return rounded_a - rounded_b;
    }
    if (type === 'DIVIDE') {
      if (rounded_b === 0) {
        return 'Error';
      }
      return rounded_a / rounded_b;
    }
  }
  
  module.exports = calculateNumber;