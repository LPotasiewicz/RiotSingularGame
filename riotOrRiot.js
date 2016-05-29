var sumName = "";

var apiKey = "ebcd26f5-998e-413d-b8f2-10d0b7865447";

var summonerID = "";

function summonerLookUp() {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = document.getElementById("s1").value;
  
    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + SUMMONER_NAME + '?api_key=' + apiKey,
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                summonerID = json[SUMMONER_NAME_NOSPACES].id;
                console.log(json[SUMMONER_NAME_NOSPACES]);

                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sID").innerHTML = summonerID;

                sumName = json[SUMMONER_NAME_NOSPACES].name;
                document.getElementById("sumIcon").innerHTML = '<img src="http://ddragon.leagueoflegends.com/cdn/6.9.1/img/profileicon/' + json[SUMMONER_NAME_NOSPACES].profileIconId + '.png"/>';
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting Summoner data!");
            }
        });
    } else {}
};

function championLookUp() {
    var championName = "";
    championName = document.getElementById("s2").value;
  
    if (championName !== "") {
    var realChampName = championName.charAt(0).toUpperCase() + championName.slice(1).toLowerCase();
        $.ajax({
            url: 'http://ddragon.leagueoflegends.com/cdn/5.14.1/data/en_US/champion/' + realChampName + '.json',
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
              console.log(json);
              document.getElementById("champName").innerHTML = realChampName;
              document.getElementById("champLore").innerHTML = eval("json.data." + realChampName + ".lore");
              document.getElementsByClassName("mainImg")[0].style.backgroundImage = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + realChampName +'_0.jpg")';
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("error getting table!");
            }
        });
    } else {}
};
