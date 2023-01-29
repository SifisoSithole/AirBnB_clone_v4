$(document).ready(() => {
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
  $.get('http://0.0.0.0:5001/api/v1/status/', (data, status) => {
    if (status === 'success') {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
