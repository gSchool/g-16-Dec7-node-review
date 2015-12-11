window.onload = function() {

	$('#myForm').on('submit', function(event) {
		event.preventDefault();
		console.log(window.location);

		$.ajax({
			url: window.location, 
			method: 'POST',
			data: {
				firstName: $('#firstName').val(),
				lastName: $('#lastName').val()
			},

			success: function(data) {
				console.log(data);
				$('#dataHolder').append(data);
			}
		});
	})

}