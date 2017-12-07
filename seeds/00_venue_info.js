
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('venues').del()
    .then(function () {
      // Inserts seed entries
      return knex('venues').insert([
        {
          // id:"" ,
          name:'Viewhouse Ballpark',
          city: 'Denver',
          state: 'CO',
          zipcode: '80205',
          address: '2015 Market Street',
          phone: '720-878-2015',
          regular:'Mon-Fri 11am-2am, Sat & Sun 10am-2am',
          happy: 'Mon-Fri 3pm-6pm ',
          picture: 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/11046209_711973238935972_3445779632669661399_o.jpg?oh=aed139fc17b9fb226efd5208c918430d&oe=5A9B8679',
          website: 'http://www.viewhouse.com/',
          rating: 3,
          googleUrl:'https://www.google.com/maps/place/ViewHouse+Eatery,+Bar+%26+Rooftop/@39.7538749,-105.0016145,15z/data=!4m12!1m6!3m5!1s0x0:0x1da8506c234158d!2sViewHouse+Eatery,+Bar+%26+Rooftop!8m2!3d39.7540399!4d-104.9934177!3m4!1s0x0:0x1da8506c234158d!8m2!3d39.7540399!4d-104.9934177'
        },

        {
          // id:"",
          name:'Viewhouse Centennial',
          city: 'Centennial',
          state: 'CO',
          zipcode: '80112',
          address: '7101 S. Clinton Street',
          phone: '303-327-9959',
          regular:'Mon-Wed 11am-12am, Thurs-Fri 11am-2am, Sat 9am-2am, Sun 9am-12am',
          happy: 'Mon-Fri 3pm-6pm ',
          picture: 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/11046209_711973238935972_3445779632669661399_o.jpg?oh=aed139fc17b9fb226efd5208c918430d&oe=5A9B8679',
          website: 'http://www.viewhouse.com/',
          rating: 3,
          googleUrl: 'https://www.google.com/maps/place/ViewHouse+Centennial/@39.6707814,-105.0063818,12z/data=!4m8!1m2!2m1!1sViewHouse+Eatery,+Bar+centennial!3m4!1s0x0:0x1433965aad2dbd2!8m2!3d39.5875667!4d-104.8792648'
        },

        {
          // id:"" ,
          name:'Viewhouse Littleton',
          city: 'Littleton',
          state: 'CO',
          zipcode: '80120',
          address: '2680 West Main Street',
          phone: '303-797-4829',
          regular: 'Mon-Wed 11am-12am, Thurs-Fri 11am-2am, Sat 7am-2am, Sun 7am-12am',
          happy: 'Mon-Fri 3pm-6pm',
          picture: 'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/11046209_711973238935972_3445779632669661399_o.jpg?oh=aed139fc17b9fb226efd5208c918430d&oe=5A9B8679',
          website: 'http://www.viewhouse.com/',
          rating: 3,
          googleUrl:'https://www.google.com/maps/place/ViewHouse+Littleton/@39.6837602,-105.0765043,12z/data=!4m8!1m2!2m1!1sViewHouse+Eatery,+Bar+littleton!3m4!1s0x0:0x1d95d7d82ece54a6!8m2!3d39.6135239!4d-105.0195122'
        },

        {
          // id:"" ,
          name:'Avanti',
          city: 'Denver',
          state: 'CO',
          zipcode: '80211',
          address: '3200 N. Pecos Street',
          phone: '720-269-4778',
          regular: 'Sun–Wed 11am–11pm, Thur–Sat 11am–11am, Sun-Wed 11am-9pm, Thur-Sat 11am-10pm',
          happy: 'N/A',
          picture: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/19260581_678365745687190_5211032080721898486_n.jpg?oh=046d37d068fc7f454dc2872d107bddd2&oe=5ACB170E',
        	website: 'http://avantifandb.com/',
          rating: 3,
          googleUrl: 'https://www.google.com/maps/place/Avanti+Food+and+Beverage/@39.7622546,-105.0083309,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78ecf56f38ed:0x2d23e42db4133a08!8m2!3d39.7622546!4d-105.0061422'
        },

        {
          // id:"" ,
          name:'Linger',
          city: 'Denver',
          state: 'CO',
          zipcode: '80211',
          address: '2030 W 30th Ave',
          phone: '303-993-3120',
          regular: 'Mon 4-10pm, Tues-Fri 11:30am-2:30pm & 4pm-10pm, Sat 10am-2:30pm & 5:30pm-11pm, Sun 10am-2:30pm & 5:30pm-10pm',
          happy: 'N/A',
          picture: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/10303808_708258239213193_9174361412255359918_n.png?oh=440ed476813eee48c1ea5b9443e75ee5&oe=5A8C8AA8',
        	website: 'http://lingerdenver.com/',
          rating: 3,
          googleUrl: 'https://www.google.com/maps/place/Linger/@39.759526,-105.0136293,17z/data=!3m1!4b1!4m5!3m4!1s0x876c789485128b17:0xf787e81b653c2464!8m2!3d39.759526!4d-105.0114406'
        },

        {
          // id: "",
          name:'Los Chingones Downtown',
          city: 'Denver',
          state: 'CO',
          zipcode: '80205',
          address: '2463 Larimer Street',
          phone: '303-295-0686',
          regular: 'Mon-Thur 11:30am-10pm,Fri 11:30am-11pm, Sat 11:30am -11pm, Sun 11:30am -9pm',
          happy: 'N/A',
          picture: 'https://lh4.googleusercontent.com/-ByIxNkAD-0M/V_BjrrvE3wI/AAAAAAAAACQ/pRol9JpaCx4dx0veKoTCS5IM7IQb6OnFgCLIBGAYYCw/w480-h320-k-no/',
        	website: 'loschingonesmexican.com',
          rating: 3,
          googleUrl: 'https://www.google.com/maps/place/Los+Chingones/@39.7575697,-104.9890664,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78dfe9ba0225:0x79ed74de23aed588!8m2!3d39.7575697!4d-104.9868777'
        },

        {
          // id:"" ,
          name:'Los Chingones Stapleton',
          city: 'Denver',
          state: 'CO',
          zipcode: '80238',
          address: '10155 E.29th Dr #110',
          phone: '303-975-6166',
          regular: 'Mon-Thur 3pm-10:15pm,Fri & Sat 12pm-10:15pm, Sun 12pm -9:15pm',
          happy: 'Mon-Fri 3pm-6pm',
          picture: 'https://lh4.googleusercontent.com/-ByIxNkAD-0M/V_BjrrvE3wI/AAAAAAAAACQ/pRol9JpaCx4dx0veKoTCS5IM7IQb6OnFgCLIBGAYYCw/w480-h320-k-no/',
          website: 'loschingonesmexican.com',
          rating: 3,
          googleUrl:'https://www.google.com/maps/place/Los+Chingones+Stapleton/@39.7595495,-104.8709908,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7b6742c36467:0x28042762f3507416!8m2!3d39.7595495!4d-104.8688021'
        },

        {
          // id:"",
          name:'Tavern Downtown',
          city: 'Denver',
          state: 'CO',
          zipcode: '80202',
          address: '1949 Market Street',
          phone: '303-299-0100',
          regular: 'Sun & Sat 10am-12am, Tue 7pm-2am, Thu & Fri	11am-2am',
      		happy: 'Mon -Fri: 3pm-7pm, Sun,Mon,& Wed 10pm -2am',
      	  picture: 'https://lh3.googleusercontent.com/-yXkYP46vXjU/WQIHw871N_I/AAAAAAAAAA0/6Ckw9prAcOkDlAnFoqFcRdajW2uy8ZgvwCLIB/w480-h320-k-no/',
      	website: 'http://www.tavernhg.com/downtown',
        rating: 3,
        googleUrl:'https://www.google.com/maps/place/Tavern+Downtown/@39.7575693,-104.9956325,15z/data=!4m8!1m2!2m1!1stavern!3m4!1s0x0:0xabecfafebe133ecc!8m2!3d39.7535456!4d-104.9938998'
        },

        {
          // id:"",
          name:'Lodos Bar and Grill',
          city: 'Denver',
          state: 'CO',
          zipcode: '80202',
          address: '1946 Market Street',
          phone: '303-293-8555',
          regular: 'Sun 10am-12pm, Mon, Tues 11am-12am, Wed, Thurs, Fri, 11am-12am, Sat 10am-2am',
          happy: 'N/A',
          picture: 'https://lh4.googleusercontent.com/-wsGL7jwTP-o/V-rN9tBKEYI/AAAAAAAAAEE/qDZzOXAmzYYuATS4NrL9Dqv8rrzig-mjwCLIBGAYYCw/w479-h320-k-no/	',
        	website: 'http://lodosbarandgrill.com/menu/downtown/',
          rating: 3,
          googleUrl: 'https://www.google.com/maps/place/Lodos+Bar+%26+Grill/@39.75326,-104.9958979,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78dc659bad3d:0xb0f18313835779e8!8m2!3d39.75326!4d-104.9937092'
        },

        {
          // id:"",
          name:'Historians Ale House',
          city: 'Denver',
          state: 'CO',
          zipcode: '80203',
          address: '24 Broadway #102',
          phone: '720-479-8505',
          regular: 'Mon-Fri 11am-2pm, Sat & Sun 10am-2am',
      		happy: 'Monday All Day; TDB others',
          picture: 'https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/21557594_879267932235988_2625254149492795807_n.jpg?oh=0545d456c6ca45311e5def407962dfd0&oe=5A893514',
        	website: 'https://historiansalehouse.com/',
          rating: 3,
          googleUrl:'https://www.google.com/maps/place/Historians+Ale+House/@39.717162,-104.9892888,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7f1f917e8dab:0x17578f0e654311fc!8m2!3d39.717162!4d-104.9871001'
        },

        {
          // id:"" ,
          name:'Whisky Tango Foxtrot',
          city: 'Denver',
          state: 'CO',
          zipcode: '80202',
          address: '2907 Huron Street',
          phone: '303-226-1540',
          regular:'Mon-Fri 11am-2am, Sat & Sun 9am-2am',
      		happy: 'Mon-Fri 3pm-7pm, Sun-Thurs 10pm-2am ',
      	picture: 'https://images1.westword.com/imager/looking-good-the-deck-at-whiskey-tango-fo/u/original/6461260/whiskeytangodeck.jpg',
      	website: 'http://www.whiskeytf.com/home',
        rating: 3,
        googleUrl:'https://www.google.com/maps/place/Whiskey+Tango+Foxtrot/@39.7585244,-104.9997921,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78e87151b2e1:0xa2d702e2cd0ee4d9!8m2!3d39.7585244!4d-104.9976034'
      },

      {
        // id:"" ,
        name: 'FIRE Terrace at the Art Hotel',
        city: 'Denver',
        state: 'CO',
        zipcode: '80203',
        address: '1201 Broadway',
        phone: '303-572-8000',
        regular: 'Mon-Fri 6:30am-11pm, Weekend Brunch 6:30am-3pm',
        happy: 'Mon-Fri 3pm-6pm',
        picture: 'https://thearthotel.com/application/files/7514/9513/5296/ArtHotel_GardenTerraceFire_v2s.jpg',
        website: 'https://www.thearthotel.com/dine-drink/fire-terrace',
        rating: 3,
        googleUrl:'https://www.google.com/maps/place/the+ART,+a+hotel/@39.735522,-104.9898867,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7f2a5c03f32b:0xb0cc30dc5f7c09c1!8m2!3d39.735522!4d-104.987698'
    },

    {
      // id:"" ,
      name: 'Departure Elevated',
      city: 'Denver',
      state: 'CO',
      zipcode: '80206',
      address: '249 Columbine Street',
      phone: '720-772-5020',
      regular: 'Sun-Thurs 5pm-10pm, Fri & Sat 5pm-11pm',
  		happy: 'Mon-Fri 4pm-6pm, Sat & Sun 2pm-6pm',
  	  picture: 'http://www.halcyonhotelcherrycreek.com/getmedia/8f0fe19f-a544-4aa5-b2b8-a26509ef1bcf/Bordwin_Sage_Halcyon_9995.jpg?width=3072&height=2049&ext=.jpg&maxsidesize=1600',
  	website: 'http://www.halcyonhotelcherrycreek.com/entertain/departure/',
    rating: 3,
    googleUrl:'https://www.google.com/maps/place/Departure+Elevated/@39.7205018,-104.9594053,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7e95db5e5163:0x42492292d3a8372a!8m2!3d39.7205018!4d-104.9572166'
  },

  {
    // id:"" ,
    name: 'Jacksons Lodo',
    city: 'Denver',
    state: 'CO',
    zipcode: '80202',
    address: '1520 20th Street',
    phone: '303-298-7625',
    regular: 'Mon-Sun 11am-2am',
		happy: 'N/A',
	  picture: 'http://creative.colorado.edu/~ambu5032/dm2/images/jacksons.jpg',
    website: 'http://www.jacksonslodo.com/',
  rating: 3,
  googleUrl:'https://www.google.com/maps/place/Jacksons+Denver/@39.754478,-104.9973667,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78dcfc5fd6b5:0x205137fb31f80ecb!8m2!3d39.754478!4d-104.995178'
},

{
  // id:"" ,
  name: '10 Barrel',
  city: 'Denver',
  state: 'CO',
  zipcode: '80205',
  address: '2620 Walnut Street',
  phone: '720-573-8992',
  regular: 'Sun-Thurs 11am-11pm, Fri & Sat 11am-12pm',
  happy: 'N/A',
picture: 'https://cdn.vox-cdn.com/thumbor/3yqCToiyVMBoLYXYlp7DRfwylwQ=/0x600/cdn.vox-cdn.com/uploads/chorus_asset/file/6213129/Eater-KA-TenBarrel11.0.jpg',
website: 'https://10barrel.com/pub/denver/',
rating: 3,
googleUrl:'https://www.google.com/maps/place/10+Barrel+Brewing+Company+Denver/@39.759375,-104.9877158,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78e01d8c1c05:0x7a8616a6d1ecd3af!8m2!3d39.759375!4d-104.9855271'
},

{
  // id:"" ,
  name: 'Tap XIV (Fourteen)',
  city: 'Denver',
  state: 'CO',
  zipcode: '80202',
  address: '1920 Blake Street',
  phone: '303-297-8279',
  regular: 'Mon-Fri 11am-2am, Sat & Sun 10am-2am',
  happy: 'Everyday 2-6pm',
picture: 'https://lh5.googleusercontent.com/p/AF1QipNbFTuuxDjlYwEdHMJEShjO-LuMBaPbV34HI595=w408-h280-k-no',
website: 'http://www.tapfourteen.com/',
rating: 3,
googleUrl:'https://www.google.com/maps/place/Tap+Fourteen+-+Rooftop+Beer+Garden/@39.7535476,-104.9970692,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78dcf332b291:0x6ef9cd08f9813436!8m2!3d39.7535476!4d-104.9948805'
},

{
  // id:"" ,
  name: 'Jax Fish House',
  city: 'Glendale',
  state: 'CO',
  zipcode: '80246',
  address: '650 S Colorado Blvd',
  phone: '303-756-6449',
  regular: 'Mon-Sat 4-10pm,Sun 10am-10pm',
  happy: 'Mon All Night, Tues-Sat 4-6pm, Sun 2-6pm',
  picture: 'https://media-cdn.tripadvisor.com/media/photo-s/08/16/94/7a/jax-fish-house-oyster.jpg',
website: 'https://www.jaxfishhouse.com/',
rating: 3,
googleUrl:'https://www.google.com/maps/place/Jax+Fish+House+%26+Oyster+Bar/@39.7055531,-104.9406416,17z/data=!4m12!1m6!3m5!1s0x876c7e806b93d661:0x661ad3a49e9c52ac!2sJax+Fish+House+%26+Oyster+Bar!8m2!3d39.7055913!4d-104.9392457!3m4!1s0x876c7e806b93d661:0x661ad3a49e9c52ac!8m2!3d39.7055913!4d-104.9392457',
},

{
  // id:"" ,
  name: 'Ale House',
  city: 'Denver',
  state: 'CO',
  zipcode: '80211',
  address: '2501 16th Street',
  phone: '303-433-9734',
  regular: 'Mon-Sun 11am-12am',
  happy: 'All Day Wed, Everyday 4pm-6pm & 10pm-12am',
picture: 'http://img2.10bestmedia.com/Images/Photos/263376/p-Ale-House-Beer-Background_54_990x660.jpg',
website: 'http://www.alehousedenver.com/',
rating: 3,
googleUrl:'https://www.google.com/maps/place/Ale+House/@39.7586329,-105.0113301,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7894d297b8db:0xd57dda17a85bdf26!8m2!3d39.7586329!4d-105.0091414'
},

{
  // id:"" ,
  name: 'Park Tavern Denver',
  city: 'Denver',
  state: 'CO',
  zipcode: '80218',
  address: '931 E 11th Ave',
  phone: '303-832-7667',
  regular: 'Mon-Sun 8am-2am',
  happy: 'Mon-Fri 9am-11am, Wed-Mon 4:30pm-6:30pm & Wed-Mon 9pm-12am, Tuesday $2 Tuesday',
picture: 'http://theparktaverndenver.com/wp-content/uploads/2017/07/Tavern-Rootop.jpg',
website: 'http://theparktaverndenver.com/',
rating: 3,
googleUrl:'https://www.google.com/maps/place/The+Park+Tavern+%26+Restaurant/@39.733856,-104.9778247,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7ed193a1de13:0x5406b0f5b4aa3670!8m2!3d39.733856!4d-104.975636'
},

{
  // id:"" ,
  name: 'Tamayo',
  city: 'Denver',
  state: 'CO',
  zipcode: '80202',
  address: '1400 Larimer Street',
  phone: '720-946-1433',
  regular: 'Rooftop lounge hours subject to change Sun-Thurs 5pm-10pm, Fri & Sat 5pm-11pm',
  happy: 'Everyday 2pm-6pm',
picture: 'http://www.richardsandoval.com/tamayo/images/gallery/05_th.jpg',
website: 'http://www.richardsandoval.com/tamayo/',
rating: 3,
googleUrl: 'https://www.google.com/maps/place/Tamayo/@39.7473276,-105.0017188,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78c571426d0d:0xf596745d3e63f99a!8m2!3d39.7473276!4d-104.9995301'
},

{
  // id:"" ,
  name: 'Izakaya Den',
  city: 'Denver',
  state: 'CO',
  zipcode: '80210',
  address: '1487-A South Pearl Street',
  phone: '303-777-0691',
  regular: 'Sun & Mon-Closed, Tues-Thurs 5pm-10pm, Fri & Sat 5pm-11pm',
  happy: 'Tues-Fri 4:30pm-6pm, Upstairs Bar open 5pm-6pm',
picture: 'http://www.izakayaden.net/wp-content/uploads/2011/09/IZAKYA_DEN_6.jpg',
website: 'http://www.izakayaden.net/',
rating: 3,
googleUrl: 'https://www.google.com/maps/place/Izakaya+Den/@39.6896802,-104.9827757,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7e52043d9dbf:0xaaa1181ac00d04ea!8m2!3d39.6896802!4d-104.980587'
},

{
  // id:"" ,
  name: 'Ignite Denver',
  city: 'Denver',
  state: 'CO',
  zipcode: '80205',
  address: '2124 Larimer Street',
  phone: '303-296-2600',
  regular: 'Mon-Thu 11am-10pm, Fri 11am-11pm, Sat 10am-11pm, Sun 10am-10pm, Weekend Brunch 10am-3pm',
  happy: 'Everyday 3:00 - 6:00 pm',
picture: 'https://lh6.googleusercontent.com/-M4tgw7qHEJo/WMoHIK0SmuI/AAAAAAAAkpI/yh_Gg3s6gTYR3OReO_6YvqpL5p-SHvRSACLIB/w483-h320-k-no/',
website: 'https://www.ignite-denver.com/',
rating: 3,
googleUrl: 'https://www.google.com/maps/place/Ignite+Kitchen+%2B+Cocktails/@39.7541734,-104.9928165,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78de962c43b3:0xd9bd706f1da86284!8m2!3d39.7541734!4d-104.9906278'
},

{
  // id: "",
  name: '54 Thirty',
  city: 'Denver',
  state: 'CO',
  zipcode: '80205',
  address: '1475 California Street',
  phone: '303-296-2600',
	regular: 'Closed until 2018',
	happy: 'Closed until 2018',
  picture: 'https://static1.squarespace.com/static/597a0f4a414fb5bf09fd0e36/599b03a617bffc5c4b929e23/59e16a8f7de075bd8a6650ff/1507945114689/?format=750w',
	website: 'https://www.54thirty.com/',
  rating: 3,
  googleUrl: 'https://www.google.com/maps/place/54thirty/@39.744294,-104.9958817,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78d1054fe25b:0x4a880ef062d2143d!8m2!3d39.744294!4d-104.993693'
},

{
  // id: "",
  name: 'The Fainting Goat',
  city: 'Denver',
  state: 'CO',
  zipcode: '80203',
  address: '846 Broadway',
  phone: '303-945-2323',
	regular: 'Mon-Sat 11am-2am & Sun 10:30am-2am',
	happy: 'Everyday 3pm-7pm',
  picture: 'http://www.milehighhappyhour.com/wp-content/uploads/2013/11/Fainting-Goat-Pub-1000x500.jpg',
	website: 'https://www.facebook.com/FaintingGoatPub/',
  rating: 3,
  googleUrl:'https://www.google.com/maps/place/The+Fainting+Goat/@39.729968,-104.9893627,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7f2838106741:0x9a19d35b34950c09!8m2!3d39.729968!4d-104.987174'
},

{
  // id: "",
  name: 'The Pour House',
  city: 'Denver',
  state: 'CO',
  zipcode: '80202',
  address: '1435 Market Street',
  phone: '303-945-2323',
	regular: 'Mon-Fri 2pm-2am, Sat & Sun 12pm-2am',
	happy: 'Everyday 3pm-7pm',
  picture: 'https://images1.westword.com/imager/the-pour-house-pub/u/745x420/5162362/7151930.0.jpg',
	website: 'https://www.facebook.com/PourHouseDenver/',
  rating: 3,
  googleUrl:'https://www.google.com/maps/place/The+Pour+House+Pub/@39.7486658,-105.0024802,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78c5a9ecb979:0x619b33954c1bcf59!8m2!3d39.7486658!4d-105.0002915'
},
      ]);
    });
};
