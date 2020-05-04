$(document).ready(function(){
	localStorage.removeItem("mrs-data");

	if (localStorage.getItem("mrs-data") === null) {

		let initial_data = {
			"films":
				[{
					"id" : 0,
					"hash_code": "d155a20f3e281399966bbe0f2a9b7568",
					"title": "Harry Potter and the Deathly Hallows - Part 1",
					"description": "As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
					"rating": 4.5,
					"length": 146,
					"genre" : ["fantasy", "drama", "action"],
					"sm_pic": "dh/dh1-sm.jfif",
					"lg_pic": "dh/dh1-lg.jfif",
					"lo_pic": "dh/dh1-lo.jfif"
				}, {
					"id" : 1,
					"hash_code": "ea0039c94a8e5c399136fb53ef667fbe",
					"title": "On Vodka, Beer and Regrets",
					"description": "(no description)",
					"rating": 3.8,
					"length": 94,
					"genre" : ["drama", "romance"],
					"sm_pic": "vbr/vbr-sm.png",
					"lg_pic": "vbr/vbr-lg.png",
					"lo_pic": "vbr/vbr-lo.jpeg"
				}, {
					"id" : 2,
					"hash_code": "5482dbff97af995c574927a4c3e9cc3a",
					"title": "La Famille Belier",
					"description": "A girl, who lives with her deaf parents, discovers that she has the gift of singing.",
					"rating": 3.5,
					"length": 106,
					"genre" : ["family"],
					"sm_pic": "lfb/lfb-sm.jpg",
					"lg_pic": "lfb/lfb-lg.jpeg",
					"lo_pic": "lfb/lfb-lo.jpg"
				}, {
					"id" : 3,
					"hash_code": "aa649334c24f3954c2dd6d9602459bf9",
					"title": "Avengers: Endgame",
					"description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
					"rating": 4.6,
					"length": 181,
					"genre" : ["scifi", "fantasy", "action"],
					"sm_pic": "ae/ae-sm.jpg",
					"lg_pic": "ae/ae-lg.jpeg",
					"lo_pic": "ae/ae-lo.jpg"
				}, {
					"id" : 4,
					"hash_code": "89b8e6dcea0b9a4ef24304c33f35911c",
					"title": "Harry Potter and the Deathly Hallows - Part 2",
					"description": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
					"rating": 4.2,
					"length": 130,
					"genre" : ["fantasy", "drama", "action"],
					"sm_pic": "dh/dh2-sm.jpg",
					"lg_pic": "dh/dh2-lg.jpg",
					"lo_pic": "dh/dh2-lo.jpg"
				}, {
					"id" : 5,
					"hash_code": "3870e1e46a68667857120bde8736f2c1",
					"title": "Argo",
					"description": "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.",
					"rating": 4.2,
					"length": 130,
					"genre" : ["action", "thriller"],
					"sm_pic": "ar/ar-sm.jpeg",
					"lg_pic": "ar/ar-lg.jpg",
					"lo_pic": "ar/ar-lo.jpg"
				}, {
					"id" : 6,
					"hash_code": "3ccb9602c00bf09bd53318e7e4cec584",
					"title": "100 Tula Para Kay Stella",
					"description": "Throughout his four years in college, Fidel, a stuttering student, tries to finish 100 poems dedicated to Stella, an aspiring but frustrated rock star, to win her heart.",
					"rating": 4.1,
					"length": 123,
					"genre" : ["drama", "romance"],
					"sm_pic": "tpks/tpks-sm.jpg",
					"lg_pic": "tpks/tpks-lg.jpg",
					"lo_pic": "tpks/tpks-lo.jpg"
				}],

			"film_schedules":

				[{
					"sched_id": 0,
					"movie_id": 6,
					"date": "2020-04-30",
					"time": "12:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 1,
					"movie_id": 5,
					"date": "2020-04-30",
					"time": "09:00",
					"cinema_no": 4,
					"reserved": []
				},{
					"sched_id": 2,
					"movie_id": 1,
					"date": "2020-04-30",
					"time": "11:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 3,
					"movie_id": 6,
					"date": "2020-04-30",
					"time": "13:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 4,
					"movie_id": 5,
					"date": "2020-04-30",
					"time": "15:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 5,
					"movie_id": 5,
					"date": "2020-04-30",
					"time": "09:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "e5",
								   	"owner_id": 120001,
								   	"price" : 120
								},{
									"seat" : "e6",
								   	"owner_id": 120001,
								   	"price" : 120
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 150}]
				},{
					"sched_id": 6,
					"movie_id": 2,
					"date": "2020-04-30",
					"time": "11:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 7,
					"movie_id": 1,
					"date": "2020-04-30",
					"time": "13:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 8,
					"movie_id": 2,
					"date": "2020-04-30",
					"time": "15:00",
					"cinema_no": 3,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								}]
				},{
					"sched_id": 9,
					"movie_id": 3,
					"date": "2020-04-30",
					"time": "09:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 10,
					"movie_id": 3,
					"date": "2020-04-30",
					"time": "11:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 11,
					"movie_id": 3,
					"date": "2020-04-30",
					"time": "13:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								}]
				},{
					"sched_id": 12,
					"movie_id": 3,
					"date": "2020-04-30",
					"time": "15:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								}]
				},{
					"sched_id": 13,
					"movie_id": 1,
					"date": "2020-05-05",
					"time": "09:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 14,
					"movie_id": 5,
					"date": "2020-05-05",
					"time": "11:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 15,
					"movie_id": 6,
					"date": "2020-05-05",
					"time": "13:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 16,
					"movie_id": 1,
					"date": "2020-05-05",
					"time": "15:00",
					"cinema_no": 4,
					"reserved": []
				},{
					"sched_id": 17,
					"movie_id": 0,
					"date": "2020-05-05",
					"time": "09:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 18,
					"movie_id": 3,
					"date": "2020-05-05",
					"time": "11:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 19,
					"movie_id": 4,
					"date": "2020-05-05",
					"time": "13:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120003,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 20,
					"movie_id": 2,
					"date": "2020-05-05",
					"time": "15:00",
					"cinema_no": 2,
					"reserved": []
				},{
					"sched_id": 21,
					"movie_id": 0,
					"date": "2020-05-05",
					"time": "09:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 22,
					"movie_id": 3,
					"date": "2020-05-05",
					"time": "11:00",
					"cinema_no": 3,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 23,
					"movie_id": 4,
					"date": "2020-05-05",
					"time": "13:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 24,
					"movie_id": 3,
					"date": "2020-05-05",
					"time": "15:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120003,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 25,
					"movie_id": 0,
					"date": "2020-05-05",
					"time": "09:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 26,
					"movie_id": 1,
					"date": "2020-05-05",
					"time": "11:00",
					"cinema_no": 4,
					"reserved": []
				},{
					"sched_id": 27,
					"movie_id": 4,
					"date": "2020-05-05",
					"time": "13:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 28,
					"movie_id": 2,
					"date": "2020-05-05",
					"time": "15:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 37,
					"movie_id": 5,
					"date": "2020-05-06",
					"time": "09:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120003,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 38,
					"movie_id": 6,
					"date": "2020-05-06",
					"time": "11:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "d1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "d3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 39,
					"movie_id": 1,
					"date": "2020-05-06",
					"time": "13:00",
					"cinema_no": 1,
					"reserved": []
				},{
					"sched_id": 40,
					"movie_id": 1,
					"date": "2020-05-06",
					"time": "15:00",
					"cinema_no": 1,
					"reserved": [{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 41,
					"movie_id": 0,
					"date": "2020-05-06",
					"time": "09:00",
					"cinema_no": 2,
					"reserved": []
				},{
					"sched_id": 42,
					"movie_id": 2,
					"date": "2020-05-06",
					"time": "11:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 43,
					"movie_id": 2,
					"date": "2020-05-06",
					"time": "13:00",
					"cinema_no": 2,
					"reserved": []
				},{
					"sched_id": 44,
					"movie_id": 0,
					"date": "2020-05-06",
					"time": "15:00",
					"cinema_no": 2,
					"reserved": []
				},{
					"sched_id": 45,
					"movie_id": 6,
					"date": "2020-05-06",
					"time": "09:00",
					"cinema_no": 2,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120002,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120003,
								   	"price" : 120
								},{
									"seat" : "e5",
								   	"owner_id": 120003,
								   	"price" : 120
								},{
									"seat" : "e6",
								   	"owner_id": 120003,
								   	"price" : 120
								},{
									"seat" : "e7",
								   	"owner_id": 120003,
								   	"price" : 120}]
				},{
					"sched_id": 47,
					"movie_id": 0,
					"date": "2020-05-06",
					"time": "11:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 48,
					"movie_id": 2,
					"date": "2020-05-06",
					"time": "13:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 49,
					"movie_id": 5,
					"date": "2020-05-06",
					"time": "15:00",
					"cinema_no": 3,
					"reserved": []
				},{
					"sched_id": 50,
					"movie_id": 6,
					"date": "2020-05-06",
					"time": "09:00",
					"cinema_no": 4,
					"reserved": []
				},{
					"sched_id": 51,
					"movie_id": 2,
					"date": "2020-05-06",
					"time": "11:00",
					"cinema_no": 4,
					"reserved": [{
									"seat" : "b4",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "b5",
								   	"owner_id": 120003,
								   	"price" : 150
								},{
									"seat" : "a1",
								   	"owner_id": 120001,
								   	"price" : 150
								},{
									"seat" : "a2",
								   	"owner_id": 120001,
								   	"price" : 100
								},{
									"seat" : "a3",
								   	"owner_id": 120002,
								   	"price" : 150
								},{
									"seat" : "d5",
								   	"owner_id": 120002,
								   	"price" : 120}]
				},{
					"sched_id": 52,
					"movie_id": 4,
					"date": "2020-05-06",
					"time": "13:00",
					"cinema_no":1,
					"reserved": []
				},{
					"sched_id": 53,
					"movie_id": 4,
					"date": "2020-05-06",
					"time": "15:00",
					"cinema_no": 2,
					"reserved": []
				}],

			"users" : 
				[{
					"id" : 120001,
					"name" : "John Smith"
				},{
					"id" : 120002,
					"name" : "Jalane Rivera"
				},{
					"id" : 120003,
					"name" : "Mary Aranas"
				}]

			}

		localStorage.setItem("mrs-data", JSON.stringify(initial_data));
	
	}

	var data = JSON.parse(localStorage.getItem("mrs-data"));

	const ROWS = 9;
	const COLUMNS = 8;
	const CAPACITY = 72;
	const SEATS = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8",
				   "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8",
				   "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8",
				   "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8",
				   "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8",
				   "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8",
				   "g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8",
				   "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8",
				   "i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8"];

	const MRS_GENRE = [{"code" : "family",
						"text" : "Family"},
					   {"code" : "action",
						"text" : "Action"},
					   {"code" : "romance",
						"text" : "Romance"},
					   {"code" : "drama",
						"text" : "Drama"},
					   {"code" : "scifi",
						"text" : "Sci-Fi"},
					   {"code" : "fantasy",
						"text" : "Fantasy"},
					   {"code" : "comedy",
						"text" : "Comedy"},
					   {"code" : "thriller",
						"text" : "Thriller"}];

	var sPath = window.location.pathname;
	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
	console.log(sPage);	

	var films = data.films;
	var scheds = data.film_schedules;
	var users = data.users;


	// FUNCTIONS

	function getVideoById(id){
		let result;
		for(let v of films){
			if(v.id == id){
				result = v;
			}
		}
		return result;
	}

	function getAvailableSeatCount(taken){
		return CAPACITY - taken;
	}


	if(sPage == "index.html"){

	}else if(sPage  == "films.html"){
		var result = "";
		for(var i in films){
			var hash_code = films[i].hash_code;
			var title = films[i].title;
			var description = films[i].description;
			var image = films[i].lo_pic;
			var rating = "";
			var tags = "";

			for(let counter = 1; counter <= films[i].rating; counter++){
				rating += String.raw`
                            <span class="full"></span>`;
			}
			if((films[i].rating % 1) != 0){
				rating += String.raw`
                            <span class="half"></span>`;
			}
			rating += String.raw`
                            <span class="numeric">${films[i].rating}</span>`;

			for(let film_genre of films[i].genre){				
				for(let genre of MRS_GENRE){
					if(genre.code == film_genre){
						tags += String.raw`
	                        <span class="${genre.code}">${genre.text}</span>`;
					}
				}
			}

			result += String.raw`
			<div class="mrs-film card col-lg-3 col-md-6">
                <div class="mrs-film-img"><img class="mrs-film-img" src="img/${image}"></div>
                <div class="mrs-film-details container mx-1">
                    <h3 class="mrs-film-title">${title}</h3>
                        <div class="mrs-rating">
                            ${rating}
                        </div>
                    <div class="mrs-film-tags">
                        ${tags}
                    </div>
                    <div class="mrs-film-info mrs-paragraph">
                        <p>${description}</p>
                    </div>
                    <a class="mrs-film-reserve mrs-rounded-btn" href="film.html?v=${hash_code}">Reserve</a>
                </div>
            </div>`;
		}
		document.getElementById("mrs-films-list").innerHTML = result;
	   
	}else if(sPage  == "reserve.html"){
		let params = new URLSearchParams(location.search);
		try{
			let query = new RegExp(params.get("search").toLowerCase());
			if(query != null){
				//console.log(query);
				var result_counter = 0;
				var result = "";
				for(var i = 0; i < films.length; i++){
					if(query.test(films[i].title.toLowerCase())){
						var hash_code = films[i].hash_code;
						var title = films[i].title;
						var description = films[i].description;
						var image = films[i].lo_pic;
						result_counter++;
						var rating = "";
						var tags = "";

						for(let counter = 1; counter <= films[i].rating; counter++){
							rating += String.raw`
			                            <span class="full"></span>`;
						}
						if((films[i].rating % 1) != 0){
							rating += String.raw`
			                            <span class="half"></span>`;
						}
						rating += String.raw`
			                            <span class="numeric">${films[i].rating}</span>`;

						for(let film_genre of films[i].genre){				
							for(let genre of MRS_GENRE){
								if(genre.code == film_genre){
									tags += String.raw`
				                        <span class="${genre.code}">${genre.text}</span>`;
								}
							}
						}

						result += String.raw`
						<div class="mrs-film card col-lg-3 col-md-6">
			                <div class="mrs-film-img"><img class="mrs-film-img" src="img/${image}"></div>
			                <div class="mrs-film-details container mx-1">
			                    <h3 class="mrs-film-title">${title}</h3>
			                        <div class="mrs-rating">
			                            ${rating}
			                        </div>
			                    <div class="mrs-film-tags">
			                        ${tags}
			                    </div>
			                    <div class="mrs-film-info mrs-paragraph">
			                        <p>${description}</p>
			                    </div>
			                    <a class="mrs-film-reserve mrs-rounded-btn" href="film.html?v=${hash_code}">Reserve</a>
			                </div>
			            </div>`;
					}
				}

				if(result_counter == 0){
					document.getElementById("mrs-result-counter").innerHTML = '<span class="mrs-no-result">No result</span>';
				}else{
					document.getElementById("mrs-search-results").innerHTML = result;
					document.getElementById("mrs-result-counter").innerHTML = "You got " + result_counter + " result(s)";
				}
			}else{
				document.getElementById("mrs-result-counter").innerHTML = '<span class="mrs-no-result">No result</span>';
			}
		}catch(e){
			console.log(e);
		}
	   
	}else if(sPage  == "film.html"){
	   
		let params = new URLSearchParams(location.search);
		try{
			var hash_code = params.get("v");
			if(hash_code != null){;
				var isExisting = false;
				var result = "";
				for(var i = 0; i < films.length; i++){
					if(hash_code == films[i].hash_code){
						var id = films[i].id;
						var title = films[i].title;
						var description = films[i].description;
						var image = films[i].sm_pic;
						var rating = "";
						var tags = "";

						for(let counter = 1; counter <= films[i].rating; counter++){
							rating += String.raw`
			                            <span class="full"></span>`;
						}
						if((films[i].rating % 1) != 0){
							rating += String.raw`
			                            <span class="half"></span>`;
						}
						rating += String.raw`
			                            <span class="numeric">${films[i].rating}</span>`;

						for(let film_genre of films[i].genre){				
							for(let genre of MRS_GENRE){
								if(genre.code == film_genre){
									tags += String.raw`
				                        <span class="${genre.code}">${genre.text}</span>`;
								}
							}
						}

						result = String.raw`<img src="img/${image}" class="card-img-top" alt="...">
						                    <div class="card-body">
						                        <h4 class="mrs-film-title card-title">${title}</h4>
						                        <div class="mrs-rating">
						                            ${rating}
						                        </div>
						                        <div class="mrs-film-tags">
						                            ${tags}
						                        </div>
						                        <p class="card-text mrs-paragraph">${description}</p>
						                    </div>`;
						isExisting = true;

						// FOR THE SCHEDS

						var film_scheds = "";
								console.log(scheds);

						for(let s of scheds){
								console.log(s);
							if(s.movie_id == id){
								let freeCount = CAPACITY - s.reserved.length;

								film_scheds += String.raw`
                            <tr>
                                <th scope="row">${s.cinema_no}</th>
                                <td>${s.time}</td>
                                <td>${s.date}</td>
                                <td>${freeCount}/${CAPACITY}</td>
                                <td><a href="order.html?schedule=${s.sched_id}">Reserve</a></td>
                            </tr>`;

							}
						}

						break;
					}
				}

				if(isExisting){
					document.getElementById("mrs-current-film-info").innerHTML = result;
					document.getElementById("mrs-film-scheds").innerHTML = film_scheds;
				}else{
					document.getElementById("mrs-current-film-info").innerHTML = '<span class="mrs-no-result">Error: We do not have that film</span>';
				}
			}else{
				document.getElementById("mrs-current-film-info").innerHTML = '<span class="mrs-no-result">Error: We do not have that film</span>';
			}
		}catch(e){
			console.log(e);
		}
	}else if(sPage  == "order.html"){
	   	$(".mrs-seat").click(function(){
			if($(this).hasClass("mrs-seat-available")){
			    $(this).removeClass("mrs-seat-available");
			    $(this).addClass("mrs-seat-selected");
			}else if($(this).hasClass("mrs-seat-selected")){			
			    $(this).removeClass("mrs-seat-selected");
			    $(this).addClass("mrs-seat-available");
			}
		})

		let current_sched;
		let current_film;

		let params = new URLSearchParams(location.search);
		try{
			var sched_id = parseInt(params.get("schedule"));
			if(sched_id != null){;
				var isExisting = false;
				let movie

				for(var s of scheds){
					if(s.sched_id == sched_id){
						current_sched = s;
						current_film = getVideoById(s.movie_id);

						isExisting = true;
						break;
					}
				}

				if(isExisting){
					document.getElementById("mrs-order-film").value = current_film.title;
					document.getElementById("mrs-order-cinema").value = current_sched.cinema_no;
					document.getElementById("mrs-order-time").value = current_sched.time;
					document.getElementById("mrs-order-date").value = current_sched.date;	

					let availableSeatCount = getAvailableSeatCount(current_sched.reserved.length);				

					var regulars = document.getElementById("mrs-order-regulars");
					regulars.max = availableSeatCount; 

					var kids = document.getElementById("mrs-order-kids");
					kids.max = availableSeatCount; 

					var seniors = document.getElementById("mrs-order-seniors");
					seniors.max = availableSeatCount;
				}else{
					//document.getElementById("mrs-current-film-info").innerHTML = '<span class="mrs-no-result">Error: We do not have that film</span>';
				}
			}else{
				//document.getElementById("mrs-current-film-info").innerHTML = '<span class="mrs-no-result">Error: We do not have that film</span>';
			}
		}catch(e){
			console.log(e);
		}





	  	// Get the modal
		var modal = document.getElementById("mrs-summary");

	  	// Get the button that opens the modal
	  	var btn = document.getElementById("mrs-proceed");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal
		btn.onclick = function() {
			modal.style.display = "block";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
		    	modal.style.display = "none";
		    }
		}
	}
	/****/


	



	//alert("success...");

});