const venues = [{
	id:
	name: 'Viewhouse'
	location: [
		{
		city: 'Denver'
		state: 'CO'
		zipcode: '80205'
		address: '2015 Market Street'
	},
	{
		city: 'Centennial'
		state: 'CO'
		zipcode: '80112'
		address: '7101 S. Clinton Street'
	},
	{
		city: 'Littleton'
		state: 'CO'
		zipcode: '80120'
		address: '2680 West Main Street'
	},
]
	hours:[
		{
		regular: 'Mon-Fri 11am-2am, Sat/Sun 10am-2am'
		happy: 'Mon-Fri 3pm-6pm '
	},
	{
		regular: 'Mon-Wed 11am-12am, Thurs-Fri 11am-2am, Sat 9am-2am, Sun 9am-12am'
		happy: 'Mon-Fri 3pm-6pm'
	},
	{
		regular: 'Mon-Wed 11am-12am, Thurs-Fri 11am-2am, Sat 7am-2am, Sun 7am-12am'
		happy: 'Mon-Fri 3pm-6pm'
		}
	]
	picture: 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/11046209_711973238935972_3445779632669661399_o.jpg?oh=aed139fc17b9fb226efd5208c918430d&oe=5A9B8679'
	website: 'http://www.viewhouse.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Avanti'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80211'
		address: '3200 N. Pecos Street'
	}
	hours: {
		regular: {
			Venue: "Sun–Wed 11am–11pm, Thur–Sat 11am–11am"
			Restaurants: 'Sun-Wed 11am-9pm, Thur-Sat 11am-10pm'
		}
		happy: 'N/A'
	}
	picture: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/19260581_678365745687190_5211032080721898486_n.jpg?oh=046d37d068fc7f454dc2872d107bddd2&oe=5ACB170E'
	website: 'http://avantifandb.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Linger'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80211'
		address: '2030 W 30th Ave'
	}
	hours: {
		regular: 'Mon 4-10pm, Tues-Fri 11:30am-2:30pm & 4pm-10pm, Sat 10am-2:30pm & 5:30pm-11pm, Sun 10am-2:30pm & 5:30pm-10pm'
		happy: 'N/A'
	}
	picture: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/10303808_708258239213193_9174361412255359918_n.png?oh=440ed476813eee48c1ea5b9443e75ee5&oe=5A8C8AA8'
	website: 'http://lingerdenver.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Los Chingones'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80205'
		address: '2463 Larimer St'
	}
	hours: {
		regular: ''
		happy: ''
	}
	picture: 'https://lh4.googleusercontent.com/-ByIxNkAD-0M/V_BjrrvE3wI/AAAAAAAAACQ/pRol9JpaCx4dx0veKoTCS5IM7IQb6OnFgCLIBGAYYCw/w480-h320-k-no/'
	website: 'loschingonesmexican.com'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Tavern'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80202'
		address: '1949 Market Street'
	}
	hours: {
		regular: 'Sunday, Saturday 10am-12am, Tue	7:00pm-2:00am, Thu, Fri	11:00am-2:00am'
		happy: 'Monday-Friday: 3pm-7pm, Sunday, Monday & Wednesday: 10pm-Close'
	}
	picture: 'https://lh3.googleusercontent.com/-yXkYP46vXjU/WQIHw871N_I/AAAAAAAAAA0/6Ckw9prAcOkDlAnFoqFcRdajW2uy8ZgvwCLIB/w480-h320-k-no/'
	website: 'http://www.tavernhg.com/downtown'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Lodos Bar and Grill'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80202'
		address: '1949 Market Street'
	}
	hours: {
		regular: 'Sun 10:00am-12:00, Mon, Tues 11:00am-12:00am, Wed, Thurs, Fri, 11:00am-12:00am, Sat 10:00am-2:00am'
		happy: 'Monday-Friday 3-6PM'
	}
	picture: 'https://lh4.googleusercontent.com/-wsGL7jwTP-o/V-rN9tBKEYI/AAAAAAAAAEE/qDZzOXAmzYYuATS4NrL9Dqv8rrzig-mjwCLIBGAYYCw/w479-h320-k-no/	'
	website: 'http://lodosbarandgrill.com/menu/downtown/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Historians Ale House'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80203'
		address: '24 Broadway #102'
	}
	hours: {
		regular: 'Monday-Friday 11AM-2PM, Sat & Sun 10AM-2AM'
		happy: 'Monday All Day; TDB others'
	}
	picture: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/21557594_879267932235988_2625254149492795807_n.jpg?oh=0545d456c6ca45311e5def407962dfd0&oe=5A893514'
	website: 'https://historiansalehouse.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Whiskey Tango Foxtrot'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80202'
		address: '2907 Huron Street'
	}
	hours: {
		regular: 'Open M-F 11am-2am, Sat & Sun 9am-2am'
		happy: 'Monday-Friday 3pm-7pm ; Sunday-Thursday 10pm-Close '
	}
	picture: 'https://www.instagram.com/p/BXQgXEKD4s9/?taken-by=whiskeytfdenver'
	website: 'http://www.whiskeytf.com/home'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'FIRE Terrace at the Art Hotel'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80203'
		address: '1201 Broadway'
	}
	hours: {
		regular: 'Social Hour 3:00pm - 6:00pm'
		happy: ''
	}
	picture: ''
	website: 'https://www.thearthotel.com/dine-drink/fire-terrace'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Departure Hotel'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80206'
		address: '249 Columbine Street'
	}
	hours: {
		regular: 'Sun-Thurs 5pm-10pm; Fri-Sat 5pm-11pm'
		happy: 'Mon-Fri 4pm to 6pm; Sat-Sun 2pm-6pm'
	}
	picture: 'http://www.halcyonhotelcherrycreek.com/getmedia/8f0fe19f-a544-4aa5-b2b8-a26509ef1bcf/Bordwin_Sage_Halcyon_9995.jpg?width=3072&height=2049&ext=.jpg&maxsidesize=1600'
	website: 'http://www.halcyonhotelcherrycreek.com/entertain/departure/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Jacksons Lodo'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80202'
		address: '1520 20th Street'
	}
	hours: {
		regular: 'Mon-Sun 11AM-2AM'
		happy: ''
	}
	picture: 'http://creative.colorado.edu/~ambu5032/dm2/images/jacksons.jpg'
	website: 'http://www.jacksonslodo.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: '10 Barrel'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80205'
		address: '2620 Walnut Street'
	}
	hours: {
		regular: 'Sun-Thurs 11am-11pm; Fri-Sat 11am-12pm'
		happy: ''
	}
	picture: 'https://cdn.vox-cdn.com/thumbor/3yqCToiyVMBoLYXYlp7DRfwylwQ=/0x600/cdn.vox-cdn.com/uploads/chorus_asset/file/6213129/Eater-KA-TenBarrel11.0.jpg	'
	website: 'https://10barrel.com/pub/denver/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Tap Fourteen'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80202'
		address: '1920 Blake Street'
	}
	hours: {
		regular: '11am-2am'
		happy: '2-6pm'
	}
	picture: 'https://lh5.googleusercontent.com/p/AF1QipNbFTuuxDjlYwEdHMJEShjO-LuMBaPbV34HI595=w408-h280-k-no'
	website: 'http://www.tapfourteen.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Vinyl'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80203'
		address: '1082 Broadway'
	}
	hours: {
		regular: '9pm-2am'
		happy: 'N/A'
	}
	picture: 'http://citybuzz.com/wp-content/uploads/2010/03/Picture-121.png'
	website: 'http://coclubs.com/club-vinyl'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Bar Standard'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80204'
		address: '1037 Broadway'
	}
	hours: {
		regular: '9pm-2am'
		happy: 'N/A'
	}
	picture: 'https://images1.westword.com/imager/bar-standard/u/original/5170633/4527784.0.jpg'
	website: 'http://coclubs.com/bar-standard'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Jax Fish House'
	location: {
		city: 'Glendale'
		state: 'CO'
		zipcode: '80246'
		address: '650 S Colorado Blvd'
	}
	hours: {
		regular: 'Mon-Sat 4-10pm Sun 10am-10pm'
		happy: 'Mon-All Night, Tues-Sat 4-6pm ,Sun 2-6pm'
	}
	picture: 'https://media-cdn.tripadvisor.com/media/photo-s/08/16/94/7a/jax-fish-house-oyster.jpg'
	website: 'https://www.jaxfishhouse.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Ale House'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80211'
		address: '2501 16th Street'
	}
	hours: {
		regular: '11am-12am'
		happy: '4pm-6pm and 10pm-12am'
	}
	picture: 'http://img2.10bestmedia.com/Images/Photos/263376/p-Ale-House-Beer-Background_54_990x660.jpg'
	website: 'http://www.alehousedenver.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Park Tavern Denver'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80218'
		address: '931 E 11th Ave'
	}
	hours: {
		regular: '8am-2am'
		happy: 'Mon-Fri: 9am-11am, Wed-Mon: 4:30pm-6:30pm, Wed-Mon: 9pm-midnight
		Tuesday: $2 Tuesday'
	}
	picture: 'http://theparktaverndenver.com/wp-content/uploads/2017/07/Tavern-Rootop.jpg'
	website: 'http://theparktaverndenver.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Tamayo'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80202'
		address: '1400 Larimer Street'
	}
	hours: {
		regular: '*Rooftop lounge hours subject to change: Sun-Thurs: 5:00pm-10:00pm, Fri & Sat 5:00pm-11:00pm'
		happy: 'Daily: 2:00pm - 6:00pm'
	}
	picture: 'http://www.richardsandoval.com/tamayo/images/gallery/05_th.jpg'
	website: 'http://www.richardsandoval.com/tamayo/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Izakaya den'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80210'
		address: '1487-A South Pearl Street'
	}
	hours: {
		regular: 'Sunday: Closed, Monday: Closed, Tues-Thurs: 5:00PM-10:00PM, Fri-Sat: 5:00PM-11:00PM'
		happy: 'Tues-Fri: 4:30PM-6:00PM, Upstairs bar 5:00-6:00pm'
	}
	picture: 'http://www.izakayaden.net/wp-content/uploads/2011/09/IZAKYA_DEN_6.jpg'
	website: 'http://www.izakayaden.net/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: 'Ignite Denver'
	location: {
		city: 'Denver'
		state: 'CO'
		zipcode: '80205'
		address: '2124 Larimer Street'
	}
	hours: {
		regular: 'Mon-Thu 11:00am-10:00pm, Fri 11:00am-11:00pm, Sat 10:00am-11:00pm, Sun 10:00am-10:00pm'
		happy: '3:00 - 6:00 pm'
	}
	picture: 'https://lh6.googleusercontent.com/-M4tgw7qHEJo/WMoHIK0SmuI/AAAAAAAAkpI/yh_Gg3s6gTYR3OReO_6YvqpL5p-SHvRSACLIB/w483-h320-k-no/'
	website: 'https://www.ignite-denver.com/'
	rating: [*Average rating]
	review: ['']
},
{
	id:
	name: {'54 Thirty'
		city: 'Denver'
		state: 'CO'
		zipcode: '80205'
		address: '1475 California Street'
	}

	hours : {
	 regular: 'Closed until 2018'
	 happy: 'Closed until 2018'
	}
	picture: 'https://static1.squarespace.com/static/597a0f4a414fb5bf09fd0e36/599b03a617bffc5c4b929e23/59e16a8f7de075bd8a6650ff/1507945114689/?format=750w'
	website: 'https://www.54thirty.com/'
	rating: [*Average rating]
	review: ['']
},
]
