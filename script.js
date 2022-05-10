// function called when message button is clicked
function displayGrowl(message) {
  $('.growl-notice').fadeIn().html(message);
  setTimeout(function() {
    $('.growl-notice').fadeOut();
  }, 2000);
}
// JSON mario world setup: characters, attributes, stats
var mario_world = {
  characters: {
    mario: {
      name: "Mario",
      description: "Small and jumpy. Likes princesses.",
      celebration: "Mario wins and does a little dance",
      height: 10,
      weight: 3,
      speed: 15,
      attack_power: function() {
        return this.weight * this.speed;
      }
    },
    bowser: {
      name: "Bowser",
      description: "Big and green, Hates princesses.",
      celebration: "Bowser wins and does a big roar",
      height: 16,
      weight: 5,
      speed: 4,
      boost: 0,
      attack_power: function() {
        return this.weight * (this.speed + this.boost);
      },
      activate_boost: function() {
        mario_world.characters.bowser.boost = 2;
      }
    },
    princessPeach: {
      name: "Princess Peach",
      description: "Agile, small, and wears a pink dress.",
      celebration: "Princess Peach wins and spins in her dress",
      height: 8,
      weight: 1,
      speed: 20,
      dashMode: 17,
      attack_power: function() {
        return this.weight * (this.speed + this.dashMode);
      },
      toggle_dash: function() {
        mario_world.characters.princessPeach.dashMode = 0;
      }
    },
    luigi: {
      name: "Luigi",
      description: "Tall, thin, wears a green outfit.",
      height: 13,
      weight: 2,
      speed: 13
    }
  },
  // battle function that evaluates and determines a result
  boss_battle: function(contestant_1, contestant_2) {
    alert(contestant_1.name + " vs " + contestant_2.name);
    if (contestant_1.attack_power() > contestant_2.attack_power()) {
      alert(contestant_1.celebration);
    } else {
      alert(contestant_2.celebration);
    }
  }
}
// gets a string value that was selected by the user
function selectNum() {
  var strUser1 = document.getElementById("mySelect1").value;
  return strUser1;
}
// gets a second string value that was selected by the user
function selectNum2() {
  var strUser2 = document.getElementById("mySelect2").value;
  return strUser2;
}

function fightFunction() {
  // if mario and peach are selected then fight them
  if (selectNum() == "Mario" && selectNum2() == "Princess Peach" || selectNum2() == "Mario" && selectNum() == "Princess Peach") {
    marioPeach();
  }
  // if mario and bowser are selected then fight them
  if (selectNum() == "Mario" && selectNum2() == "Bowser" || selectNum2() == "Mario" && selectNum() == "Bowser") {
    marioBowser();
  }; // if peach and bowser are selected then fight them
  if (selectNum() == "Bowser" && selectNum2() == "Princess Peach" || selectNum2() == "Bowser" && selectNum() == "Princess Peach") {
    bowserPeach();
  } else if (selectNum() === selectNum2()) {
    alert("Make sure you choose two different characters! Try again.");
  }
}

let fightButton = document.getElementById("fightbutton");
let finalText = document.getElementById("resulttext");

// function for mario vs. princess peach
marioPeach = function() {
  mario_world.boss_battle(mario_world.characters.princessPeach, mario_world.characters.mario);
};
// function for mario vs. bowser
marioBowser = function() {
  mario_world.boss_battle(mario_world.characters.mario, mario_world.characters.bowser);
};
// function for bowser vs. princess peach
bowserPeach = function() {
  mario_world.boss_battle(mario_world.characters.princessPeach, mario_world.characters.bowser);
};


mario_world.characters.bowser.activate_boost();
// commented out Princess Peach's dash mode so it would activate and she could win at least 1 round
// mario_world.characters.princessPeach.toggle_dash();
// function calls requested during the building of the API, not necessary for the final product
// mario_world.boss_battle(mario_world.characters.mario, mario_world.characters.bowser);
// mario_world.boss_battle(mario_world.characters.princessPeach, mario_world.characters.bowser);
// mario_world.boss_battle(mario_world.characters.princessPeach, mario_world.characters.mario);
