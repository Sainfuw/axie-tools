const getColor = (color) => {
  switch (color) {
    case "Aquatic":
      return "#00B7CC";
    case "Bird":
      return "#FF8CBC";
    case "Dawn":
      return "#009091";
    case "Beast":
      return "#FFB838";
    case "Bug":
      return "#FF5549";
    case "Mech":
      return "#C7BDD3";
    case "Plant":
      return "#58C02D";
    case "Reptile":
      return "#E58BE1";
    case "Dusk":
      return "#B9CEFC";
    default:
      return "#FFFFFF";
  }
};

export default getColor;
