function convert(event) {
  var feet = document.getElementById("feet");
  var inches = document.getElementById("inches");
  var centimeters = document.getElementById("centimeters");
  var decimals = document.getElementById("decimals");

  feet.value = Math.max(0, feet.value).toFixed(0);
  inches.value = Math.max(0, inches.value);
  inches.value = Math.min(11, inches.value);
  centimeters.value = Math.max(0, centimeters.value);
  decimals.value = Math.max(0, decimals.value);

  switch (event.target.id) {
    case "feet":
    case "inches":
      centimeters.value = +(feet.value * 30.48 + inches.value * 2.54).toFixed(
        decimals.value
      );
      break;
    case "centimeters":
      feet.value = +(~~(centimeters.value / 30.48)).toFixed(decimals.value);
      inches.value = +((centimeters.value % 30.48) / 2.54).toFixed(
        decimals.value
      );
      break;

    case "decimals":
      centimeters.value = +(+centimeters.value).toFixed(decimals.value);
      feet.value = +(~~(centimeters.value / 30.48)).toFixed(decimals.value);
      inches.value = +((centimeters.value % 30.48) / 2.54).toFixed(
        decimals.value
      );
      break;
    default:
      break;
  }
}
