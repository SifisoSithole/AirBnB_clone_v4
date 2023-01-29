$(document).ready(() => {
  console.log('start');
  $("input[type='checkbox']").change(() => {
    const amenities = $("input[type='checkbox']:checked");
    const amenitiesNames = [];
    amenities.each((i) => {
      amenitiesNames.push($(amenities[i]).data('name'));
    });
    if (amenitiesNames.length > 0) {
      $('div.amenities > h4').text(amenitiesNames.join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
