import React, { useEffect, useState } from 'react'
import Dropdown from '../dropdown/Dropdown'
// import Dropdown from '../dropdown/Dropdown'

const Leftsidebar = ({sendDataToParent}) => {

  const [league, setLeague] = useState(
    {
      "get": "leagues",
      "parameters": [],
      "errors": [],
      "results": 1050,
      "paging": {
        "current": 1,
        "total": 1
      },
      "response": [
        {
          "league": {
            "id": 4,
            "name": "Euro Championship",
            "type": "Cup",
            "logo": "https://media-4.api-sports.io/football/leagues/4.png"
          },
          "country": {
            "name": "World",
            "code": null,
            "flag": null
          },
          "seasons": [
            {
              "year": 2008,
              "start": "2008-06-07",
              "end": "2008-06-29",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": false,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2012,
              "start": "2012-06-08",
              "end": "2012-07-01",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": false,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2016,
              "start": "2016-06-10",
              "end": "2016-07-10",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2020,
              "start": "2019-03-21",
              "end": "2021-07-11",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2024,
              "start": "2024-06-14",
              "end": "2024-06-26",
              "current": true,
              "coverage": {
                "fixtures": {
                  "events": false,
                  "lineups": false,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": false,
                "players": false,
                "top_scorers": false,
                "top_assists": false,
                "top_cards": false,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            }
          ]
        },
        {
          "league": {
            "id": 21,
            "name": "Confederations Cup",
            "type": "Cup",
            "logo": "https://media-4.api-sports.io/football/leagues/21.png"
          },
          "country": {
            "name": "World",
            "code": null,
            "flag": null
          },
          "seasons": [
            {
              "year": 2009,
              "start": "2009-06-14",
              "end": "2009-06-28",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": false,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2013,
              "start": "2013-06-15",
              "end": "2013-06-30",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": false,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2017,
              "start": "2017-06-17",
              "end": "2017-07-02",
              "current": true,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": false
                },
                "standings": false,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            }
          ]
        },
        {
          "league": {
            "id": 61,
            "name": "Ligue 1",
            "type": "League",
            "logo": "https://media-4.api-sports.io/football/leagues/61.png"
          },
          "country": {
            "name": "France",
            "code": "FR",
            "flag": "https://media-4.api-sports.io/flags/fr.svg"
          },
          "seasons": [
            {
              "year": 2010,
              "start": "2010-08-07",
              "end": "2011-05-29",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2011,
              "start": "2011-08-06",
              "end": "2012-05-20",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2012,
              "start": "2012-08-10",
              "end": "2013-05-26",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2013,
              "start": "2013-08-09",
              "end": "2014-05-17",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2014,
              "start": "2014-08-08",
              "end": "2015-05-23",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2015,
              "start": "2015-08-07",
              "end": "2016-05-14",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2016,
              "start": "2016-08-12",
              "end": "2017-05-20",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2017,
              "start": "2017-08-04",
              "end": "2018-05-19",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2018,
              "start": "2018-08-10",
              "end": "2019-05-24",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2019,
              "start": "2019-08-09",
              "end": "2020-05-23",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2020,
              "start": "2020-08-21",
              "end": "2021-05-30",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": true,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2021,
              "start": "2021-08-06",
              "end": "2022-05-29",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": true,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2022,
              "start": "2022-08-05",
              "end": "2023-06-03",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": true,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2023,
              "start": "2023-08-11",
              "end": "2024-05-18",
              "current": true,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": true,
                "predictions": true,
                "odds": true
              }
            }
          ]
        },
        {
          "league": {
            "id": 144,
            "name": "Jupiler Pro League",
            "type": "League",
            "logo": "https://media-4.api-sports.io/football/leagues/144.png"
          },
          "country": {
            "name": "Belgium",
            "code": "BE",
            "flag": "https://media-4.api-sports.io/flags/be.svg"
          },
          "seasons": [
            {
              "year": 2010,
              "start": "2010-07-30",
              "end": "2011-05-16",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2011,
              "start": "2011-07-29",
              "end": "2012-05-20",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2012,
              "start": "2012-07-28",
              "end": "2013-05-26",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2013,
              "start": "2013-07-26",
              "end": "2014-05-18",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2014,
              "start": "2014-07-25",
              "end": "2015-05-31",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2015,
              "start": "2015-07-24",
              "end": "2016-05-29",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2016,
              "start": "2016-07-29",
              "end": "2017-05-21",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2017,
              "start": "2017-07-28",
              "end": "2018-05-20",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2018,
              "start": "2018-07-27",
              "end": "2019-05-19",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2019,
              "start": "2019-07-26",
              "end": "2020-03-15",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2020,
              "start": "2020-08-08",
              "end": "2021-05-23",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": true,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2021,
              "start": "2021-07-23",
              "end": "2022-05-29",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": true,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2022,
              "start": "2022-07-22",
              "end": "2023-06-04",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2023,
              "start": "2023-07-28",
              "end": "2024-03-16",
              "current": true,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": true
              }
            }
          ]
        },
        {
          "league": {
            "id": 71,
            "name": "Serie A",
            "type": "League",
            "logo": "https://media-4.api-sports.io/football/leagues/71.png"
          },
          "country": {
            "name": "Brazil",
            "code": "BR",
            "flag": "https://media-4.api-sports.io/flags/br.svg"
          },
          "seasons": [
            {
              "year": 2010,
              "start": "2010-05-08",
              "end": "2010-11-28",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2011,
              "start": "2011-05-21",
              "end": "2011-12-04",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2012,
              "start": "2012-05-19",
              "end": "2012-12-02",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2013,
              "start": "2013-05-25",
              "end": "2013-12-08",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2014,
              "start": "2014-04-19",
              "end": "2014-12-07",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": false,
                  "statistics_players": false
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2015,
              "start": "2015-05-09",
              "end": "2015-12-06",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2016,
              "start": "2016-05-14",
              "end": "2016-12-11",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2017,
              "start": "2017-05-13",
              "end": "2017-12-03",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2018,
              "start": "2018-04-14",
              "end": "2018-12-02",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2019,
              "start": "2019-04-27",
              "end": "2019-12-08",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2020,
              "start": "2020-08-08",
              "end": "2021-02-26",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2021,
              "start": "2021-05-29",
              "end": "2021-12-10",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2022,
              "start": "2022-04-10",
              "end": "2022-11-13",
              "current": false,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            },
            {
              "year": 2023,
              "start": "2023-04-15",
              "end": "2023-12-03",
              "current": true,
              "coverage": {
                "fixtures": {
                  "events": true,
                  "lineups": true,
                  "statistics_fixtures": true,
                  "statistics_players": true
                },
                "standings": true,
                "players": true,
                "top_scorers": true,
                "top_assists": true,
                "top_cards": true,
                "injuries": false,
                "predictions": true,
                "odds": false
              }
            }
          ]
        },
      ]
    }
  )
  const [fixtures, setFixtures] = useState(
    {
      "get": "fixtures",
      "parameters": {
        "live": "all"
      },
      "errors": [],
      "results": 17,
      "paging": {
        "current": 1,
        "total": 1
      },
      "response": [
        {
          "fixture": {
            "id": 1074402,
            "referee": "Mario Escobar, Guatemala",
            "timezone": "UTC",
            "date": "2023-12-29T15:00:00+00:00",
            "timestamp": 1703862000,
            "periods": {
              "first": 1703862000,
              "second": null
            },
            "venue": {
              "id": 1367,
              "name": "Prince Faisal bin Fahd Stadium",
              "city": "Riyadh"
            },
            "status": {
              "long": "First Half",
              "short": "1H",
              "elapsed": 40
            }
          },
          "league": {
            "id": 307,
            "name": "Pro League",
            "country": "Saudi-Arabia",
            "logo": "https://media-4.api-sports.io/football/leagues/307.png",
            "flag": "https://media-4.api-sports.io/flags/sa.svg",
            "season": 2023,
            "round": "Regular Season - 19"
          },
          "teams": {
            "home": {
              "id": 2944,
              "name": "Al-Fayha",
              "logo": "https://media-4.api-sports.io/football/teams/2944.png",
              "winner": null
            },
            "away": {
              "id": 2932,
              "name": "Al-Hilal Saudi FC",
              "logo": "https://media-4.api-sports.io/football/teams/2932.png",
              "winner": null
            }
          },
          "goals": {
            "home": 0,
            "away": 0
          },
          "score": {
            "halftime": {
              "home": 0,
              "away": 0
            },
            "fulltime": {
              "home": null,
              "away": null
            },
            "extratime": {
              "home": null,
              "away": null
            },
            "penalty": {
              "home": null,
              "away": null
            }
          },
          "events": []
        },
        {
          "fixture": {
            "id": 1074405,
            "referee": "Shukri Al Hanfosh, Saudi Arabia",
            "timezone": "UTC",
            "date": "2023-12-29T15:00:00+00:00",
            "timestamp": 1703862000,
            "periods": {
              "first": 1703862000,
              "second": null
            },
            "venue": {
              "id": 1377,
              "name": "King Abdullah Sport City Stadium",
              "city": "Buraidah"
            },
            "status": {
              "long": "First Half",
              "short": "1H",
              "elapsed": 39
            }
          },
          "league": {
            "id": 307,
            "name": "Pro League",
            "country": "Saudi-Arabia",
            "logo": "https://media-4.api-sports.io/football/leagues/307.png",
            "flag": "https://media-4.api-sports.io/flags/sa.svg",
            "season": 2023,
            "round": "Regular Season - 19"
          },
          "teams": {
            "home": {
              "id": 2935,
              "name": "Al-Raed",
              "logo": "https://media-4.api-sports.io/football/teams/2935.png",
              "winner": null
            },
            "away": {
              "id": 2951,
              "name": "Abha",
              "logo": "https://media-4.api-sports.io/football/teams/2951.png",
              "winner": null
            }
          },
          "goals": {
            "home": 1,
            "away": 1
          },
          "score": {
            "halftime": {
              "home": 1,
              "away": 1
            },
            "fulltime": {
              "home": null,
              "away": null
            },
            "extratime": {
              "home": null,
              "away": null
            },
            "penalty": {
              "home": null,
              "away": null
            }
          },
          "events": [
            {
              "time": {
                "elapsed": 17,
                "extra": null
              },
              "team": {
                "id": 2951,
                "name": "Abha",
                "logo": "https://media-4.api-sports.io/football/teams/2951.png"
              },
              "player": {
                "id": 278140,
                "name": "H. Al Ali"
              },
              "assist": {
                "id": 53889,
                "name": "S. Natiq"
              },
              "type": "Goal",
              "detail": "Normal Goal",
              "comments": null
            },
            {
              "time": {
                "elapsed": 21,
                "extra": null
              },
              "team": {
                "id": 2935,
                "name": "Al-Raed",
                "logo": "https://media-4.api-sports.io/football/teams/2935.png"
              },
              "player": {
                "id": null,
                "name": "K. Al Subaie"
              },
              "assist": {
                "id": 21716,
                "name": "J. Tavares"
              },
              "type": "Goal",
              "detail": "Normal Goal",
              "comments": null
            },
            {
              "time": {
                "elapsed": 30,
                "extra": null
              },
              "team": {
                "id": 2951,
                "name": "Abha",
                "logo": "https://media-4.api-sports.io/football/teams/2951.png"
              },
              "player": {
                "id": 7607,
                "name": "U. Matic"
              },
              "assist": {
                "id": null,
                "name": null
              },
              "type": "Card",
              "detail": "Yellow Card",
              "comments": null
            }
          ]
        },
        {
          "fixture": {
            "id": 1104576,
            "referee": null,
            "timezone": "UTC",
            "date": "2023-12-29T15:00:00+00:00",
            "timestamp": 1703862000,
            "periods": {
              "first": 1703862000,
              "second": null
            },
            "venue": {
              "id": 7802,
              "name": "West Africa Football Academy Sports Complex",
              "city": "Sogakope"
            },
            "status": {
              "long": "First Half",
              "short": "1H",
              "elapsed": 35
            }
          },
          "league": {
            "id": 570,
            "name": "Premier League",
            "country": "Ghana",
            "logo": "https://media-4.api-sports.io/football/leagues/570.png",
            "flag": "https://media-4.api-sports.io/flags/gh.svg",
            "season": 2023,
            "round": "Regular Season - 17"
          },
          "teams": {
            "home": {
              "id": 17992,
              "name": "Accra Lions",
              "logo": "https://media-4.api-sports.io/football/teams/17992.png",
              "winner": false
            },
            "away": {
              "id": 20022,
              "name": "Samartex",
              "logo": "https://media-4.api-sports.io/football/teams/20022.png",
              "winner": true
            }
          },
          "goals": {
            "home": 0,
            "away": 2
          },
          "score": {
            "halftime": {
              "home": 0,
              "away": 2
            },
            "fulltime": {
              "home": null,
              "away": null
            },
            "extratime": {
              "home": null,
              "away": null
            },
            "penalty": {
              "home": null,
              "away": null
            }
          },
          "events": [
            {
              "time": {
                "elapsed": 7,
                "extra": null
              },
              "team": {
                "id": 20022,
                "name": "Samartex",
                "logo": "https://media-4.api-sports.io/football/teams/20022.png"
              },
              "player": {
                "id": null,
                "name": "D. Yussif Seidu"
              },
              "assist": {
                "id": null,
                "name": null
              },
              "type": "Goal",
              "detail": "Normal Goal",
              "comments": null
            },
            {
              "time": {
                "elapsed": 15,
                "extra": null
              },
              "team": {
                "id": 20022,
                "name": "Samartex",
                "logo": "https://media-4.api-sports.io/football/teams/20022.png"
              },
              "player": {
                "id": null,
                "name": "B. Musa"
              },
              "assist": {
                "id": null,
                "name": null
              },
              "type": "Goal",
              "detail": "Normal Goal",
              "comments": null
            }
          ]
        },
        {
          "fixture": {
            "id": 1139981,
            "referee": null,
            "timezone": "UTC",
            "date": "2023-12-29T15:00:00+00:00",
            "timestamp": 1703862000,
            "periods": {
              "first": 1703862000,
              "second": null
            },
            "venue": {
              "id": 19302,
              "name": "Karbala Stadium",
              "city": "Karbala"
            },
            "status": {
              "long": "First Half",
              "short": "1H",
              "elapsed": 39
            }
          },
          "league": {
            "id": 542,
            "name": "Iraqi League",
            "country": "Iraq",
            "logo": "https://media-4.api-sports.io/football/leagues/542.png",
            "flag": "https://media-4.api-sports.io/flags/iq.svg",
            "season": 2023,
            "round": "Regular Season - 12"
          },
          "teams": {
            "home": {
              "id": 20464,
              "name": "Karbala",
              "logo": "https://media-4.api-sports.io/football/teams/20464.png",
              "winner": false
            },
            "away": {
              "id": 11065,
              "name": "Al Minaa Basra",
              "logo": "https://media-4.api-sports.io/football/teams/11065.png",
              "winner": true
            }
          },
          "goals": {
            "home": 1,
            "away": 2
          },
          "score": {
            "halftime": {
              "home": 1,
              "away": 2
            },
            "fulltime": {
              "home": null,
              "away": null
            },
            "extratime": {
              "home": null,
              "away": null
            },
            "penalty": {
              "home": null,
              "away": null
            }
          },
          "events": [
            {
              "time": {
                "elapsed": 20,
                "extra": null
              },
              "team": {
                "id": 20464,
                "name": "Karbala",
                "logo": "https://media-4.api-sports.io/football/teams/20464.png"
              },
              "player": {
                "id": null,
                "name": "A. Abdulqader"
              },
              "assist": {
                "id": null,
                "name": null
              },
              "type": "Goal",
              "detail": "Normal Goal",
              "comments": null
            },
            {
              "time": {
                "elapsed": 26,
                "extra": null
              },
              "team": {
                "id": 11065,
                "name": "Al Minaa Basra",
                "logo": "https://media-4.api-sports.io/football/teams/11065.png"
              },
              "player": {
                "id": null,
                "name": "M. Jabbar Shawkan"
              },
              "assist": {
                "id": null,
                "name": null
              },
              "type": "Goal",
              "detail": "Penalty",
              "comments": null
            },
            {
              "time": {
                "elapsed": 33,
                "extra": null
              },
              "team": {
                "id": 11065,
                "name": "Al Minaa Basra",
                "logo": "https://media-4.api-sports.io/football/teams/11065.png"
              },
              "player": {
                "id": null,
                "name": null
              },
              "assist": {
                "id": null,
                "name": null
              },
              "type": "Goal",
              "detail": "Normal Goal",
              "comments": null
            }
          ]
        },
        {
          "fixture": {
            "id": 1143129,
            "referee": null,
            "timezone": "UTC",
            "date": "2023-12-29T15:00:00+00:00",
            "timestamp": 1703862000,
            "periods": {
              "first": 1703862000,
              "second": null
            },
            "venue": {
              "id": 19,
              "name": "Stade du 8 Mai 1945",
              "city": "Sétif"
            },
            "status": {
              "long": "First Half",
              "short": "1H",
              "elapsed": 41
            }
          },
          "league": {
            "id": 186,
            "name": "Ligue 1",
            "country": "Algeria",
            "logo": "https://media-4.api-sports.io/football/leagues/186.png",
            "flag": "https://media-4.api-sports.io/flags/dz.svg",
            "season": 2023,
            "round": "Regular Season - 11"
          },
          "teams": {
            "home": {
              "id": 905,
              "name": "ES Setif",
              "logo": "https://media-4.api-sports.io/football/teams/905.png",
              "winner": null
            },
            "away": {
              "id": 907,
              "name": "MC Oran",
              "logo": "https://media-4.api-sports.io/football/teams/907.png",
              "winner": null
            }
          },
          "goals": {
            "home": 0,
            "away": 0
          },
          "score": {
            "halftime": {
              "home": 0,
              "away": 0
            },
            "fulltime": {
              "home": null,
              "away": null
            },
            "extratime": {
              "home": null,
              "away": null
            },
            "penalty": {
              "home": null,
              "away": null
            }
          },
          "events": [
            {
              "time": {
                "elapsed": 29,
                "extra": null
              },
              "team": {
                "id": 907,
                "name": "MC Oran",
                "logo": "https://media-4.api-sports.io/football/teams/907.png"
              },
              "player": {
                "id": null,
                "name": null
              },
              "assist": {
                "id": null,
                "name": null
              },
              "type": "Goal",
              "detail": "Normal Goal",
              "comments": null
            }
          ]
        },
        {
          "fixture": {
            "id": 1150209,
            "referee": null,
            "timezone": "UTC",
            "date": "2023-12-29T15:15:00+00:00",
            "timestamp": 1703862900,
            "periods": {
              "first": 1703862900,
              "second": null
            },
            "venue": {
              "id": null,
              "name": "Baniyas Stadium",
              "city": "Abu Dhabi"
            },
            "status": {
              "long": "First Half",
              "short": "1H",
              "elapsed": 1
            }
          },
          "league": {
            "id": 10,
            "name": "Friendlies",
            "country": "World",
            "logo": "https://media-4.api-sports.io/football/leagues/10.png",
            "flag": null,
            "season": 2023,
            "round": "Friendlies 1"
          },
          "teams": {
            "home": {
              "id": 1566,
              "name": "China",
              "logo": "https://media-4.api-sports.io/football/teams/1566.png",
              "winner": null
            },
            "away": {
              "id": 1552,
              "name": "Oman",
              "logo": "https://media-4.api-sports.io/football/teams/1552.png",
              "winner": null
            }
          },
          "goals": {
            "home": 0,
            "away": 0
          },
          "score": {
            "halftime": {
              "home": 0,
              "away": 0
            },
            "fulltime": {
              "home": null,
              "away": null
            },
            "extratime": {
              "home": null,
              "away": null
            },
            "penalty": {
              "home": null,
              "away": null
            }
          },
          "events": []
        },
        {
          "fixture": {
            "id": 1153674,
            "referee": null,
            "timezone": "UTC",
            "date": "2023-12-29T15:00:00+00:00",
            "timestamp": 1703862000,
            "periods": {
              "first": 1703862000,
              "second": null
            },
            "venue": {
              "id": 18526,
              "name": "Stade Ahmed Choukri",
              "city": "Zemamra"
            },
            "status": {
              "long": "First Half",
              "short": "1H",
              "elapsed": 42
            }
          },
          "league": {
            "id": 200,
            "name": "Botola Pro",
            "country": "Morocco",
            "logo": "https://media-4.api-sports.io/football/leagues/200.png",
            "flag": "https://media-4.api-sports.io/flags/ma.svg",
            "season": 2023,
            "round": "Regular Season - 13"
          },
          "teams": {
            "home": {
              "id": 3449,
              "name": "CR Khemis Zemamra",
              "logo": "https://media-4.api-sports.io/football/teams/3449.png",
              "winner": null
            },
            "away": {
              "id": 1075,
              "name": "Mouloudia Oujda",
              "logo": "https://media-4.api-sports.io/football/teams/1075.png",
              "winner": null
            }
          },
          "goals": {
            "home": 0,
            "away": 0
          },
          "score": {
            "halftime": {
              "home": 0,
              "away": 0
            },
            "fulltime": {
              "home": null,
              "away": null
            },
            "extratime": {
              "home": null,
              "away": null
            },
            "penalty": {
              "home": null,
              "away": null
            }
          },
          "events": [
            {
              "time": {
                "elapsed": 12,
                "extra": null
              },
              "team": {
                "id": 3449,
                "name": "CR Khemis Zemamra",
                "logo": "https://media-4.api-sports.io/football/teams/3449.png"
              },
              "player": {
                "id": 380728,
                "name": "S. Jazouli"
              },
              "assist": {
                "id": 36575,
                "name": "Z. Hadraf"
              },
              "type": "subst",
              "detail": "Substitution 1",
              "comments": null
            },
            {
              "time": {
                "elapsed": 32,
                "extra": null
              },
              "team": {
                "id": 3449,
                "name": "CR Khemis Zemamra",
                "logo": "https://media-4.api-sports.io/football/teams/3449.png"
              },
              "player": {
                "id": 437197,
                "name": "A. Moutawi"
              },
              "assist": {
                "id": 294294,
                "name": "A. Tine"
              },
              "type": "subst",
              "detail": "Substitution 2",
              "comments": null
            },
            {
              "time": {
                "elapsed": 36,
                "extra": null
              },
              "team": {
                "id": 1075,
                "name": "Mouloudia Oujda",
                "logo": "https://media-4.api-sports.io/football/teams/1075.png"
              },
              "player": {
                "id": 338553,
                "name": "C. Faidi"
              },
              "assist": {
                "id": null,
                "name": null
              },
              "type": "Card",
              "detail": "Yellow Card",
              "comments": null
            },
            {
              "time": {
                "elapsed": 40,
                "extra": null
              },
              "team": {
                "id": 1075,
                "name": "Mouloudia Oujda",
                "logo": "https://media-4.api-sports.io/football/teams/1075.png"
              },
              "player": {
                "id": 195070,
                "name": "A. Souane"
              },
              "assist": {
                "id": null,
                "name": null
              },
              "type": "Card",
              "detail": "Yellow Card",
              "comments": null
            }
          ]
        },
      ]
    }
  )

  useEffect(() => {
    // getLeague()
    // getFixtures()
  }, [])

  const getLeague = async () => {
      const response = await fetch('https://v3.football.api-sports.io/leagues', {
          method: 'GET',
          headers: {
              'x-rapidapi-key': 'b17356548862635e1d2ba95e724331a6',
              'x-rapidapi-host': 'v3.football.api-sports.io'
          }
      })
      const data = await response.json()
      console.log(data)
      setLeague(data)
  }

  const getFixtures = async () => {
    const response = await fetch("https://v3.football.api-sports.io/fixtures?live=all", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "b17356548862635e1d2ba95e724331a6"
      }
    })
    const data = await response.json()
    console.log(data)
    setFixtures(data)
  }

  const ShowDropdown = (e) => {
    const dropdown = e.target.nextSibling
    dropdown.classList.toggle('hidden')
  }

  const MatchDetail = (data) => {
    sendDataToParent(data)
  }

  return (
    <>
      <div className="flex flex-col py-8 border-r dark:bg-gray-800 dark:border-gray-600 overflow-auto h-screen">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <li>
              <a className="flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-500 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-900 dark:hover:text-gray-200" onClick={ShowDropdown}>
                <span className="mx-4 text-lg font-normal">
                  Leagues
                </span>
              </a>
              <div className='hidden'>
                <Dropdown title="league" ShowDropdown={ShowDropdown} league={league} />
              </div>
            </li>
            <li>
              <a className="flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-500 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-900 dark:hover:text-gray-200" onClick={ShowDropdown}>
                <span className="mx-4 text-lg font-normal">
                  Matchs
                </span>
              </a>
              <div className='hidden'>
                {/* <Dropdown title="league"  ShowDropdown={ShowDropdown} league={fixtures}/> */}
                {fixtures?.response?.map((item) => {
                  return (
                    <a key={item.league.id} className="flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-500 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-900 dark:hover:text-gray-200" onClick={MatchDetail.bind(null,item)}>
                      <span className="mx-4 text-lg font-normal">
                        {item?.teams?.home?.name} VS {item?.teams?.away?.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </li>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Leftsidebar