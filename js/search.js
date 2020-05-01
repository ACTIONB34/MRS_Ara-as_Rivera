$(document).ready(function(){
	var data = {
	"films":

		[{
			"id": 0,
			"title": "Harry Potter and the Deathly Hallows - Part 1",
			"description": "As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
			"rating": "",
			"length": 146,
			"sm_pic": "dh/dh1-sm.jfif",
			"lg_pic": "dh/dh1-lg.jfif",
			"lo_pic": "dh/dh1-lo.jfif"
		}, {
			"id": 1,
			"title": "On Vodka, Beer and Regrets",
			"description": "(no description)",
			"rating": "",
			"length": 94,
			"sm_pic": "vbr/vbr-sm.png",
			"lg_pic": "vbr/vbr-lg.png",
			"lo_pic": "vbr/vbr-lo.jpeg"
		}, {
			"id": 2,
			"title": "La Famille Belier",
			"description": "A girl, who lives with her deaf parents, discovers that she has the gift of singing.",
			"rating": "",
			"length": 106,
			"sm_pic": "lfb/lfb-sm.jpg",
			"lg_pic": "lfb/lfb-lg.jpeg",
			"lo_pic": "lfb/lfb-lo.jpg"
		}, {
			"id": 3,
			"title": "Avengers: Endgame",
			"description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
			"rating": "",
			"length": 181,
			"sm_pic": "ae/ae-sm.jpg",
			"lg_pic": "ae/ae-lg.jpeg",
			"lo_pic": "ae/ae-lo.jpg"
		}, {
			"id": 4,
			"title": "Harry Potter and the Deathly Hallows - Part 2",
			"description": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
			"rating": "",
			"length": 130,
			"sm_pic": "dh/dh2-sm.jpg",
			"lg_pic": "dh/dh2-lg.jpg",
			"lo_pic": "dh/dh2-lo.jpg"
		}, {
			"id": 5,
			"title": "Argo",
			"description": "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.",
			"rating": "",
			"length": 130,
			"sm_pic": "ar/ar-sm.jpeg",
			"lg_pic": "ar/ar-lg.jpg",
			"lo_pic": "ar/ar-lo.jpg"
		}, {
			"id": 6,
			"title": "100 Tula Para Kay Stella",
			"description": "Throughout his four years in college, Fidel, a stuttering student, tries to finish 100 poems dedicated to Stella, an aspiring but frustrated rock star, to win her heart.",
			"rating": "",
			"length": 123,
			"sm_pic": "tpks/tpks-sm.jpg",
			"lg_pic": "tpks/tpks-lg.jpg",
			"lo_pic": "tpks/tpks-lo.jpg"
		}],

	"film_schedule":

		[{
			"sched_id": 0,
			"movie_id": 0,
			"date": "2020-04-30",
			"time": "12:00",
			"cinema_no": 1,
			"reserved": ["a5","a6","d4"]
		},{
			"sched_id": 1,
			"movie_id": 1,
			"date": "2020-04-30",
			"time": "14:00",
			"cinema_no": 1,
			"reserved": []
		},{
			"sched_id": 2,
			"movie_id": 3,
			"date": "2020-04-30",
			"time": "12:00",
			"cinema_no": 2,
			"reserved": []
		},{
			"sched_id": 3,
			"movie_id": 4,
			"date": "2020-04-30",
			"time": "14:00",
			"cinema_no": 2,
			"reserved": []
		},{
			"sched_id": 4,
			"movie_id": 5,
			"date": "2020-04-30",
			"time": "12:00",
			"cinema_no": 3,
			"reserved": []
		},{
			"sched_id": 5,
			"movie_id": 6,
			"date": "2020-04-30",
			"time": "14:00",
			"cinema_no": 3,
			"reserved": []
		}]
	}


	var films = data.films;
	//console.log(films);


	// SEARCH FUNCTION
	let params = new URLSearchParams(location.search);
	let query = new RegExp(params.get("search").toLowerCase());
	if(query != null){
		console.log(query);
		var result_counter = 0;
		var result = "";
		for(var i = 0; i < films.length; i++){
			if(query.test(films[i].title.toLowerCase())){
				var title = films[i].title;
				var description = films[i].description;
				var image = films[i].lo_pic;
				result_counter++;
				result += String.raw`<div class="card mrs-film col-md-3">
                        <div class="mrs-film-img"><img src="img/ae/ae-lo.jpg"></div>
                        <div class="mrs-film-details">
                            <h2>Avengers Infinity War<br></h2>
                            <div class="mrs-film-tags">
                                <span class="fantasy">Fantasy</span>
                                <span class="scifi">Sci Fi</span>
                            </div>
                            <div class="mrs-film-info mrs-paragraph">
                                <p>Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet</p>
                            </div>
                        </div>
                    </div>`;
			}
		}

		if(result_counter == 0){
			document.getElementById("mrs-reserve-search-results").innerHTML = '<span class="mrs-no-result">No result</span>';
		}else{
			document.getElementById("mrs-reserve-search-results-container").innerHTML = result;
		}
	}else{
		document.getElementById("mrs-reserve-search-results").innerHTML = '<span class="mrs-no-result">No result</span>';
	}



	//alert("success...");

});
