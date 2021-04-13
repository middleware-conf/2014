	$(document).ready(function() {

		$('#calendar').fullCalendar({

			// US Holidays
			events: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',

			eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=700,height=600');
				return false;
			},

			loading: function(bool) {
				$('#loading').toggle(bool);
			}

		});

	});