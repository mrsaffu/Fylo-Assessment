const fertilizerData = [
  ...Array.from({ length: 55 }, (_, i) => {
    const id = i + 1;
    const names = ["DAP", "MAP", "MOP", "NPX", "SSP", "TSP", "UREA"];
    const states = ["UP", "MP", "Bihar", "WB", "Rajasthan", "Gujarat", "Maharashtra", "Odisha", "Tamil Nadu", "Telangana"];
    const name = names[Math.floor(Math.random() * names.length)];
    const state = states[Math.floor(Math.random() * states.length)];

    // Year range 2015 - 2025
    const year = Math.floor(Math.random() * 11) + 2015;

    const totalRequirement = parseFloat((Math.random() * 1000 + 1000).toFixed(Math.random() > 0.5 ? 2 : 0));
    const totalAvailable = parseFloat((totalRequirement * (Math.random() * 0.8 + 0.2)).toFixed(Math.random() > 0.5 ? 2 : 0));

    const monthlyAvailability = {
      jan: Math.floor(Math.random() * 150),
      feb: Math.floor(Math.random() * 150),
      mar: Math.floor(Math.random() * 150),
      apr: Math.floor(Math.random() * 150),
      may: Math.floor(Math.random() * 150),
      jun: Math.floor(Math.random() * 150),
      jul: Math.floor(Math.random() * 150),
      aug: Math.floor(Math.random() * 150),
      sep: Math.floor(Math.random() * 150),
      oct: Math.floor(Math.random() * 150),
      nov: Math.floor(Math.random() * 150),
      dec: Math.floor(Math.random() * 150),
    };

    return {
      id,
      name,
      state,
      year,
      monthlyAvailability,
      totalRequirement,
      totalAvailable,
    };
  })
];

export default fertilizerData;
