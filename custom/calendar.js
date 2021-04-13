if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}

var lblW = ['W1', 'W2', 'W3', 'W4'];
var lblT = ['T1', 'T2', 'T3', 'T4'];
var lblE = ['Opening', 'Welcome reception', 'Banquet', 'Closing'];
var lblK = ['Keynote 1', 'Keynote 2', 'Invited talk'];

$(document).ready(function() {
	$('#calendar').fullCalendar({
		defaultDate: '2014-12-08',
		firstDay: 1,
		weekends: false,
		editable: false,
		minTime: '08:00:00',
		maxTime: '21:00:00',
		allDaySlot: false,
		defaultView: 'agendaWeek',
		timeFormat: '',
		header: {
			left: '',
			center: '',
			right: ''
		},
		eventRender: function (event, element) {
			var tooltip = event.description;
			if (tooltip == '') tooltip = event.title;
			$(element).attr("data-original-title", tooltip);
			$(element).tooltip({ container: "body"});
			if (lblW.indexOf(event.title) != -1) { // for workshops
				element.css('background-color', 'green');
			} else if (lblT.indexOf(event.title) != -1) {
				element.css('background-color', 'orange');
			} else if (event.title.startsWith("Research session") || event.title == 'Industry session') {
				element.css('background-color', 'CadetBlue');
			} else if (event.title == 'DS') {
				element.css('background-color', 'DarkViolet');
			} else if (lblK.indexOf(event.title) != -1) {
				element.css('background-color', 'MediumSlateBlue');
			} else if (lblE.indexOf(event.title) != -1) {
				element.css('background-color', 'Crimson');
			} else if (event.title == 'Poster session') {
				element.css('background-color', 'PaleVioletRed');
			} else if (event.title == 'Business meeting') {
				element.css('background-color', 'Maroon');
			} else {
				element.css('background-color', 'gray');
			}
		},
        googleCalendarApiKey: 'AIzaSyDkTwcYanNjg9Ad36LqfwCxILjtEJEAvY0',
        events: {
        	googleCalendarId: 'v0gpacc13qv2bfq1o4oqcos9o0@group.calendar.google.com'
        },
		eventClick: function(event) {
			console.log(event);
			switch(event.id) {
                case 'gm95u7fdkpb3eubl8kr5ugt20s': //'gm95u7fdkpb3eubl8kr5ugt20s@google.com': // research session 1
					window.location.hash = '#wednesday-december-10';
					break;
				case 'ngvkv2jpged5v0h8p6aiqlo688': // research session 2
					window.location.hash = '#wednesday-december-10';
					break;
				case '2eg2k7n3r19a7g8njljj15vovk': // research session 3
					window.location.hash = '#thursday-december-11';
					break;
				case 'tglesee0ek4nje7oiak74i8fpo': // research session 4
					window.location.hash = '#thursday-december-11';
					break;
				case '2mbh6bgv5783rp8fkt6df6pbjk': // research session 5
					window.location.hash = '#thursday-december-11';
					break;
				case '2uahsfa6msd1ll2tpr91eh3plk':
					window.location.hash = '#thursday-december-11';
					break;
				case 'kk8u2htpai9jhnq9temacin200':
					window.location.hash = '#friday-december-12';
					break;
				case 'qafuc24gojndkch7ruacs73fgg':
					window.location.hash = '#friday-december-12';
					break;
                case '2jfq24dvft1kntp9v7fnlrrnss':
                    window.location = '/program/keynotes/#span-classglyphicon-glyphicon-chevron-rightspan-towards-data-center-systems-edouard-bugnion';
                    break;
                case 't0n0bd78urv1upiveaclq9umeo':
                    window.location = '/program/keynotes/#span-classglyphicon-glyphicon-chevron-rightspan-the-software-defined-building-a-machine-for-living-randy-katz'
                    break;
                case 'l636222dt25ir2mfa9fqlp00g8':
                case 'b25dr903adpudg433p18biucto':
                case 'p4qlprllb5ch11j4a3c3h598kc':
                case 'q7h9ndgihcduidqmh0b7ooels0':
                case 'rc4rs5ko1ftk3r29att1ubddcs':
                case 'us3do3r3rsmd4l2dnn0dojo0c0':
                case 'ncpuktofcht3mddl426a2932o4':
                case 'iokodm1kmpdd7geb395lldtn0o':
					window.location.hash = '#monday-december-8';
                    break;
                case '6uia6h0kjmt6hd7vcrf1a2io04':
                case '5vqe11pmmbuap7c7dh195k520s':
                case 'vu8hjpfrh79u9al1vnkf2ocjts':
                case 'gn01ojel4vu2r6qkfq23dfu41g':
                case 'jimpbmcg0s44p074bcn1q8bt78':
                case 'mgep7cl5qv4dhk1jrj10bsoof0':
					window.location.hash = '#tuesday-december-9';
                    break;
                case '555qc0po7alarvvhtrls2593n0':
                case '82r16ndffnme8hs4f0o3mgn5hs': // tuto tackling
                case 'mdio8mdno40mav93onkv9f6js0':
                case '4ic24fcgtpl7i4mjoahhqbd0a4': // tuto design
                case 'crvajsu4h11s5maavmkdr6agjo':
                case 'jcde7e6jm6bpscgs3fu34gmks4': // tuto green
                case '2db86cpmmc94pnj5h8emcnm70k':
                case 'vf7ssc6t5siudcjhreqfam702o': // tuto cocci
                    window.location = '/tutorials/';
                    break;
                case '9jkaf5f90djbsrc57vg9vjocog':
                case 'btachhjhn3kjbk1t3mvsrt83u0':
                    window.location.hash = '#tuesday-december-9';
                    break;
                case 'i3p92qench63e1g10b8e4m5vd8':
                    window.location = '/program/posters/';
                    break;
			}
			return false;
		},

		loading: function(bool) {
			$('#loading').toggle(bool);
		}
	});
});
