import React, { useEffect, useState } from 'react'

const Leftsidebar = () => {

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

    useEffect(() => {
        // getLeague()
    }, [])

    // const getLeague = async () => {
    //     const response = await fetch('https://v3.football.api-sports.io/leagues', {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-key': 'b17356548862635e1d2ba95e724331a6',
    //             'x-rapidapi-host': 'v3.football.api-sports.io'
    //         }
    //     })
    //     const data = await response.json()
    //     console.log(data)
    //     setLeague(data)
    // }
    console.log(league)
    return (
        <>
            <div className="flex flex-col w-64 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600 h-dvh">
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        {league?.response?.map((item) => {
                            return (
                                <a key={item.league.id} href="#" className="flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-500 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 hover:text-gray-900 dark:hover:text-gray-200">
                                    <span className="mx-4 text-lg font-normal">
                                        {item.league.name}
                                    </span>
                                </a>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Leftsidebar