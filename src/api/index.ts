import axios, { AxiosRequestConfig } from "axios";
import { Coords } from "google-map-react";
import { Place, SelectedFilter } from "../types";

const mockData: Place[] = [
  {
    location_id: "1346623",
    name: "Wjelbik",
    latitude: "51.18211",
    longitude: "14.425",
    num_reviews: "218",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/10/c9/5e/e8/restaurant-wjelbik.jpg",
          height: "140",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/10/c9/5e/e8/restaurant-wjelbik.jpg",
          height: "50",
        },
        original: {
          width: "629",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/10/c9/5e/e8/restaurant-wjelbik.jpg",
          height: "353",
        },
        large: {
          width: "629",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/10/c9/5e/e8/restaurant-wjelbik.jpg",
          height: "353",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/10/c9/5e/e8/restaurant-wjelbik.jpg",
          height: "309",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-09-26T12:17:47-0400",
      caption: "Restaurant Wjelbik",
      id: "281632488",
      helpful_votes: "1",
      published_date: "2017-09-26T12:17:47-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2021",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2021",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
    ],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "4.719198703765869",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "1",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#1 of 60 Restaurants in Bautzen",
    distance: "0.4757939946936686",
    distance_string: "0.5 km",
    bearing: "northwest",
    rating: "5.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d1346623-Reviews-Wjelbik-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d1346623-Wjelbik-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 42060",
    website: "http://www.wjelbik.de/",
    address_obj: {
      street1: "Kornstr. 7",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Kornstr. 7, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 900,
          },
        ],
        [],
        [
          {
            open_time: 660,
            close_time: 900,
          },
          {
            open_time: 1050,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 900,
          },
          {
            open_time: 1050,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 900,
          },
          {
            open_time: 1050,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 900,
          },
          {
            open_time: 1050,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 900,
          },
          {
            open_time: 1050,
            close_time: 1320,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10746",
        name: "Central European",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10992",
        name: "Gluten Free Options",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10992",
        name: "Gluten Free Options",
      },
    ],
    booking: {
      provider: "OpenTable",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=117915830&geo=1346623&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVyn9_JFvJHyo49rHv-Tf7Y3A&cs=12ee669885ed28bef2183e2c691c71e34",
    },
    reserve_info: {
      id: "1346623",
      provider: "OpenTable",
      provider_img: "https://static.tacdn.com/img2/eateries/Logo_horizontal_RGB-1000x232.png",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=117915830&geo=1346623&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVyn9_JFvJHyo49rHv-Tf7Y3A&cs=12ee669885ed28bef2183e2c691c71e34",
      booking_partner_id: "1",
      racable: false,
      api_bookable: true,
      timeslots: null,
      bestoffer: null,
      timeslot_offers: null,
      button_text: "Reserve",
      disclaimer_text: null,
      banner_text: null,
    },
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "1038473",
    name: "Monchshof zu Bautzen",
    latitude: "51.181526",
    longitude: "14.421072",
    num_reviews: "169",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0e/09/9d/71/das-ist-der-lecker-bratenspies.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0e/09/9d/71/das-ist-der-lecker-bratenspies.jpg",
          height: "50",
        },
        original: {
          width: "2048",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0e/09/9d/71/das-ist-der-lecker-bratenspies.jpg",
          height: "1536",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/09/9d/71/das-ist-der-lecker-bratenspies.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/0e/09/9d/71/das-ist-der-lecker-bratenspies.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-01-02T13:15:23-0500",
      caption: "Das ist der lecker Bratenspieß für zwei Personen! Das ist echt der Knaller und man ist danach ge",
      id: "235511153",
      helpful_votes: "1",
      published_date: "2017-01-02T13:15:23-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
    ],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.891698122024536",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "2",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#2 of 60 Restaurants in Bautzen",
    distance: "0.7179052733571551",
    distance_string: "0.7 km",
    bearing: "west",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d1038473-Reviews-Monchshof_zu_Bautzen-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d1038473-Monchshof_zu_Bautzen-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 490141",
    website: "https://www.moenchshof.de/de/start.php",
    email: "info@moenchshof.de",
    address_obj: {
      street1: "Burglehn 1",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Burglehn 1, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    booking: {
      provider: "OpenTable",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=117909569&geo=1038473&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVytZylDskwsRzA8ulPhlcZKw&cs=1bd005d857228800b7a3100b95f9bb988",
    },
    reserve_info: {
      id: "1038473",
      provider: "OpenTable",
      provider_img: "https://static.tacdn.com/img2/eateries/Logo_horizontal_RGB-1000x232.png",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=117909569&geo=1038473&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVytZylDskwsRzA8ulPhlcZKw&cs=1bd005d857228800b7a3100b95f9bb988",
      booking_partner_id: "1",
      racable: false,
      api_bookable: true,
      timeslots: null,
      bestoffer: null,
      timeslot_offers: null,
      button_text: "Reserve",
      disclaimer_text: null,
      banner_text: null,
    },
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "1211246",
    name: "Bautzener Senfstube",
    latitude: "51.183052",
    longitude: "14.422499",
    num_reviews: "172",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/17/6f/0a/24/bautzener-senfstube.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/17/6f/0a/24/bautzener-senfstube.jpg",
          height: "50",
        },
        original: {
          width: "960",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/17/6f/0a/24/bautzener-senfstube.jpg",
          height: "720",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/17/6f/0a/24/bautzener-senfstube.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/17/6f/0a/24/bautzener-senfstube.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2019-05-07T13:55:48-0400",
      caption: "Bautzener Senfstube",
      id: "393153060",
      helpful_votes: "0",
      published_date: "2019-05-07T13:55:48-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2020",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2020",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
    ],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.7865352630615234",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "3",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#3 of 60 Restaurants in Bautzen",
    distance: "0.6786579071067613",
    distance_string: "0.7 km",
    bearing: "northwest",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d1211246-Reviews-Bautzener_Senfstube-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d1211246-Bautzener_Senfstube-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 598015",
    website: "http://www.senf-stube.de/",
    email: "info@senf-stube.de",
    address_obj: {
      street1: "Schlossstr. 3",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Schlossstr. 3, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10746",
        name: "Central European",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    booking: {
      provider: "OpenTable",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=117912817&geo=1211246&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVygeI71y4MufobX-hfzwV-fQ&cs=19a32f860137591b86f3cc77cabf4a976",
    },
    reserve_info: {
      id: "1211246",
      provider: "OpenTable",
      provider_img: "https://static.tacdn.com/img2/eateries/Logo_horizontal_RGB-1000x232.png",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=117912817&geo=1211246&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVygeI71y4MufobX-hfzwV-fQ&cs=19a32f860137591b86f3cc77cabf4a976",
      booking_partner_id: "1",
      racable: false,
      api_bookable: true,
      timeslots: null,
      bestoffer: null,
      timeslot_offers: null,
      button_text: "Reserve",
      disclaimer_text: null,
      banner_text: null,
    },
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "2543397",
    name: "Culinarium",
    latitude: "51.18222",
    longitude: "14.422222",
    num_reviews: "96",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0f/5b/1e/55/gegrilltes-milchlamm.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0f/5b/1e/55/gegrilltes-milchlamm.jpg",
          height: "50",
        },
        original: {
          width: "2000",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0f/5b/1e/55/gegrilltes-milchlamm.jpg",
          height: "1484",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/0f/5b/1e/55/gegrilltes-milchlamm.jpg",
          height: "760",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/0f/5b/1e/55/gegrilltes-milchlamm.jpg",
          height: "186",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-05-23T06:53:59-0400",
      caption: "Gegrilltes Milchlamm mit Kräuterkruste und Kartoffelgratin",
      id: "257629781",
      helpful_votes: "3",
      published_date: "2017-05-23T06:53:59-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2016",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2016",
      },
    ],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.707195520401001",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "4",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#4 of 60 Restaurants in Bautzen",
    distance: "0.6602824533186996",
    distance_string: "0.7 km",
    bearing: "west",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$9 - $25",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d2543397-Reviews-Culinarium-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d2543397-Culinarium-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 2704949",
    website: "http://culinarium-bautzen.de/kontakt/",
    email: "info@culinarium-bautzen.de",
    address_obj: {
      street1: "Grosse Brudergasse",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Grosse Brudergasse, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [],
        [],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10648",
        name: "International",
      },
      {
        key: "10746",
        name: "Central European",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10697",
        name: "Vegan Options",
      },
      {
        key: "10992",
        name: "Gluten Free Options",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10697",
        name: "Vegan Options",
      },
      {
        key: "10992",
        name: "Gluten Free Options",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "227654",
    ad_position: "inline1",
    ad_size: "8X8",
    doubleclick_zone: "eu.germany.saxony",
    ancestors: [
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    detail: "0",
    page_type: "restaurants",
    mob_ptype: "app_restaurants",
  },
  {
    location_id: "1345191",
    name: "Restaurant Burghof",
    latitude: "51.183243",
    longitude: "14.419189",
    num_reviews: "47",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/04/9b/09/14/restaurant-burghof.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/04/9b/09/14/restaurant-burghof.jpg",
          height: "50",
        },
        original: {
          width: "2000",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/04/9b/09/14/restaurant-burghof.jpg",
          height: "1336",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/04/9b/09/14/restaurant-burghof.jpg",
          height: "684",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/04/9b/09/14/restaurant-burghof.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2013-09-29T13:57:46-0400",
      caption: "Burghof in Bautzen",
      id: "77269268",
      helpful_votes: "0",
      published_date: "2013-09-30T03:35:41-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.5435280799865723",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "5",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#5 of 60 Restaurants in Bautzen",
    distance: "0.8981969442716109",
    distance_string: "0.9 km",
    bearing: "west",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d1345191-Reviews-Restaurant_Burghof-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d1345191-Restaurant_Burghof-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 531336",
    website: "http://www.burghof-ortenburg.de/",
    email: "info@burghof-ortenburg.de",
    address_obj: {
      street1: "Ortenburg 6",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Ortenburg 6, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 690,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 1380,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "8444501",
    name: "Mythos - Griechisches Restaurant",
    latitude: "51.181755",
    longitude: "14.426179",
    num_reviews: "65",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/08/78/50/6d/sommertarrassen-geniessen.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/08/78/50/6d/sommertarrassen-geniessen.jpg",
          height: "50",
        },
        original: {
          width: "2048",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/08/78/50/6d/sommertarrassen-geniessen.jpg",
          height: "1536",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/08/78/50/6d/sommertarrassen-geniessen.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/08/78/50/6d/sommertarrassen-geniessen.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2015-07-27T17:32:54-0400",
      caption: "Sommertarrassen genießen,Yamas",
      id: "142102637",
      helpful_votes: "1",
      published_date: "2015-07-29T04:24:15-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
    ],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.467745542526245",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "6",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#6 of 60 Restaurants in Bautzen",
    distance: "0.3845748046050044",
    distance_string: "0.4 km",
    bearing: "northwest",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d8444501-Reviews-Mythos_Griechisches_Restaurant-Bautzen_Saxony.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g227654-d8444501-Mythos_Griechisches_Restaurant-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 270757",
    website: "http://www.mythos-bautzen.de",
    email: "info@mythos-bautzen.de",
    address_obj: {
      street1: "Hauensteingasse 1",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Hauensteingasse 1, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10664",
        name: "Greek",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "9790089",
    name: "Goliath",
    latitude: "51.182205",
    longitude: "14.422184",
    num_reviews: "30",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0a/bb/c2/32/chocolate-mousse-cake.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0a/bb/c2/32/chocolate-mousse-cake.jpg",
          height: "50",
        },
        original: {
          width: "1125",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/bb/c2/32/chocolate-mousse-cake.jpg",
          height: "1500",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/0a/bb/c2/32/chocolate-mousse-cake.jpg",
          height: "733",
        },
        medium: {
          width: "338",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/bb/c2/32/chocolate-mousse-cake.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-03-28T16:15:04-0400",
      caption: "Chocolate mousse cake",
      id: "180077106",
      helpful_votes: "1",
      published_date: "2016-03-28T16:15:04-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.466822862625122",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "7",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#1 of 6 Coffee & Tea in Bautzen",
    distance: "0.6622512109636203",
    distance_string: "0.7 km",
    bearing: "west",
    rating: "5.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d9790089-Reviews-Goliath-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d9790089-Goliath-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "cafe",
        name: "Café",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 5797132",
    website: "http://www.goliath-bautzen.de",
    address_obj: {
      street1: "Grosse Bruedergasse 6",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Grosse Bruedergasse 6, 02625 Bautzen, Saxony Germany",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10642",
        name: "Cafe",
      },
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "9900",
        name: "Coffee & Tea",
      },
    ],
  },
  {
    location_id: "1346626",
    name: "Zum Haseneck",
    latitude: "51.180687",
    longitude: "14.430372",
    num_reviews: "29",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/07/04/61/f3/zum-haseneck.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/07/04/61/f3/zum-haseneck.jpg",
          height: "50",
        },
        original: {
          width: "2000",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/07/04/61/f3/zum-haseneck.jpg",
          height: "1500",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/07/04/61/f3/zum-haseneck.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/07/04/61/f3/zum-haseneck.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2014-12-08T04:20:55-0500",
      caption: "Zum Haseneck",
      id: "117727731",
      helpful_votes: "0",
      published_date: "2014-12-08T07:04:55-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.4595115184783936",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "8",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#7 of 60 Restaurants in Bautzen",
    distance: "0.07112225575428335",
    distance_string: "71 m",
    bearing: "northwest",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$8 - $16",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d1346626-Reviews-Zum_Haseneck-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d1346626-Zum_Haseneck-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 47913",
    website: "http://www.zum-haseneck.de/spezialitaetenrestaurant-bautzen",
    address_obj: {
      street1: "Kurt-Pchalek-Str. 1",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Kurt-Pchalek-Str. 1, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 870,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "1345195",
    name: "Alter Bierhof Inh. Andre Domsch",
    latitude: "51.180866",
    longitude: "14.422484",
    num_reviews: "74",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0a/64/f8/8b/img-20160220-190438-largejpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0a/64/f8/8b/img-20160220-190438-largejpg.jpg",
          height: "50",
        },
        original: {
          width: "1000",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/64/f8/8b/img-20160220-190438-largejpg.jpg",
          height: "748",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/64/f8/8b/img-20160220-190438-largejpg.jpg",
          height: "411",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/0a/64/f8/8b/img-20160220-190438-largejpg.jpg",
          height: "187",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-02-21T20:09:36-0500",
      caption: "",
      id: "174389387",
      helpful_votes: "1",
      published_date: "2016-02-21T20:09:36-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
    ],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.445448398590088",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "9",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#8 of 60 Restaurants in Bautzen",
    distance: "0.6094509902656909",
    distance_string: "0.6 km",
    bearing: "west",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d1345195-Reviews-Alter_Bierhof_Inh_Andre_Domsch-Bautzen_Saxony.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g227654-d1345195-Alter_Bierhof_Inh_Andre_Domsch-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 326018",
    website: "http://www.alterbierhof.de",
    address_obj: {
      street1: "Heringstr. 7",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Heringstr. 7, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1500,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1500,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    booking: {
      provider: "OpenTable",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=117915812&geo=1345195&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVygdXXlYO612l_zIXJilLXlc&cs=1d1a82565e52a57a2c1becf3cc6f2afce",
    },
    reserve_info: {
      id: "1345195",
      provider: "OpenTable",
      provider_img: "https://static.tacdn.com/img2/eateries/Logo_horizontal_RGB-1000x232.png",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=117915812&geo=1345195&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVygdXXlYO612l_zIXJilLXlc&cs=1d1a82565e52a57a2c1becf3cc6f2afce",
      booking_partner_id: "1",
      racable: false,
      api_bookable: true,
      timeslots: null,
      bestoffer: null,
      timeslot_offers: null,
      button_text: "Reserve",
      disclaimer_text: null,
      banner_text: null,
    },
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "13826011",
    name: "Restaurant & Cafe Wolfgang's",
    latitude: "51.178337",
    longitude: "14.427358",
    num_reviews: "40",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/17/a0/2e/93/das-restaurant-wolfgang.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/17/a0/2e/93/das-restaurant-wolfgang.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/a0/2e/93/das-restaurant-wolfgang.jpg",
          height: "854",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/17/a0/2e/93/das-restaurant-wolfgang.jpg",
          height: "683",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/17/a0/2e/93/das-restaurant-wolfgang.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2019-05-22T09:29:48-0400",
      caption: "Das Restaurant Wolfgang's",
      id: "396373651",
      helpful_votes: "0",
      published_date: "2019-05-22T09:29:48-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2021",
        images: {
          small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2021_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2021",
      },
    ],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.424133062362671",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "10",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#9 of 60 Restaurants in Bautzen",
    distance: "0.3435850013013569",
    distance_string: "0.3 km",
    bearing: "southwest",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$7 - $25",
    description:
      "Lassen Sie sich vom Wechselspiel aus regionaler und internationaler Kochkunst überzeugen und besuchen Sie unser Restaurant Wolfgang´s. Unser Küchenteam verzaubert Sie mit viel Kreativität und Leidenschaft. Unser dynamisches Team arbeitet stets mit edlen, saisonalen und erntefrischen Produkten. Genießen Sie in geselliger Runde oder beim romantischen Dinner zu Zweit die einzigartige Atmosphäre der ehemaligen Goethe-Apotheke. Wir laden Sie ein, sich wie bei guten Freunden zu fühlen! Ihre Annett Schneider - Hotelleitung In der warmen Jahreszeit (ab April) ist unsere Sonnenterrasse geöffnet und lädt zum Genießen im Freien ein.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d13826011-Reviews-Restaurant_Cafe_Wolfgang_s-Bautzen_Saxony.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g227654-d13826011-Restaurant_Cafe_Wolfgang_s-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 2038702",
    website: "http://wolfgangs.bz",
    email: "info@moments-hotel.de",
    address_obj: {
      street1: "Goschwitzstr. 27",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Goschwitzstr. 27, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [],
        [],
        [
          {
            open_time: 990,
            close_time: 1350,
          },
        ],
        [
          {
            open_time: 990,
            close_time: 1350,
          },
        ],
        [
          {
            open_time: 990,
            close_time: 1350,
          },
        ],
        [
          {
            open_time: 990,
            close_time: 1350,
          },
        ],
        [
          {
            open_time: 990,
            close_time: 1350,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10648",
        name: "International",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    booking: {
      provider: "OpenTable",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=147490577&geo=13826011&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVyq8cSKVhEKLiVYSfM3Z6ivI&cs=1e4be8351b83afd0f20b1637293284d5f",
    },
    reserve_info: {
      id: "13826011",
      provider: "OpenTable",
      provider_img: "https://static.tacdn.com/img2/eateries/Logo_horizontal_RGB-1000x232.png",
      url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=147490577&geo=13826011&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVyq8cSKVhEKLiVYSfM3Z6ivI&cs=1e4be8351b83afd0f20b1637293284d5f",
      booking_partner_id: "1",
      racable: false,
      api_bookable: true,
      timeslots: null,
      bestoffer: null,
      timeslot_offers: null,
      button_text: "Reserve",
      disclaimer_text: null,
      banner_text: null,
    },
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "227654",
    ad_position: "inline2",
    ad_size: "8X8",
    doubleclick_zone: "eu.germany.saxony",
    ancestors: [
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    detail: "0",
    page_type: "restaurants",
    mob_ptype: "app_restaurants",
  },
  {
    location_id: "15046610",
    name: "Evis Deko & Cafe",
    latitude: "51.181133",
    longitude: "14.427091",
    num_reviews: "17",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/15/12/f4/11/ganz-besonders-unsere.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/15/12/f4/11/ganz-besonders-unsere.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/12/f4/11/ganz-besonders-unsere.jpg",
          height: "853",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/15/12/f4/11/ganz-besonders-unsere.jpg",
          height: "683",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/15/12/f4/11/ganz-besonders-unsere.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2018-10-17T07:01:30-0400",
      caption: "Ganz besonders: Unsere Kuchen & Tortenspezialitäten",
      id: "353563665",
      helpful_votes: "1",
      published_date: "2018-10-17T07:01:30-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.336634874343872",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "11",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#2 of 6 Coffee & Tea in Bautzen",
    distance: "0.2997660611525042",
    distance_string: "0.3 km",
    bearing: "west",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Closed Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$4 - $10",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d15046610-Reviews-Evis_Deko_Cafe-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d15046610-Evis_Deko_Cafe-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "cafe",
        name: "Café",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 5318302",
    website: "http://evis-deko-cafe.de",
    email: "info@evis-deko-cafe.de",
    address_obj: {
      street1: "Reichenstr. 24",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Reichenstr. 24, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [],
        [
          {
            open_time: 540,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1080,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1080,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10642",
        name: "Cafe",
      },
      {
        key: "5473",
        name: "Japanese",
      },
      {
        key: "10347",
        name: "German",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "9900",
        name: "Coffee & Tea",
      },
    ],
  },
  {
    location_id: "10085848",
    name: "Genusspavillon DeLise",
    latitude: "51.183258",
    longitude: "14.434503",
    num_reviews: "34",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/0b/33/c4/4a/genusspavillon-delise.jpg",
          height: "141",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0b/33/c4/4a/genusspavillon-delise.jpg",
          height: "50",
        },
        original: {
          width: "1328",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0b/33/c4/4a/genusspavillon-delise.jpg",
          height: "747",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/0b/33/c4/4a/genusspavillon-delise.jpg",
          height: "576",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/33/c4/4a/genusspavillon-delise.jpg",
          height: "309",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-05-09T15:27:41-0400",
      caption: "Genusspavillon DeLise",
      id: "187941962",
      helpful_votes: "6",
      published_date: "2016-05-09T15:27:41-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.285233974456787",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "12",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#10 of 60 Restaurants in Bautzen",
    distance: "0.4038714298025584",
    distance_string: "0.4 km",
    bearing: "northeast",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$4 - $18",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d10085848-Reviews-Genusspavillon_DeLise-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d10085848-Genusspavillon_DeLise-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 5313911",
    website: "http://www.facebook.com/GenusspavillonDeLise/",
    email: "restaurantdelise@gmx.de",
    address_obj: {
      street1: "Ziegelstr. 22",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Ziegelstr. 22, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1260,
          },
        ],
        [],
        [],
        [
          {
            open_time: 660,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1260,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10697",
        name: "Vegan Options",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10697",
        name: "Vegan Options",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "11926205",
    name: "Spree-Pension Restaurant",
    latitude: "51.17912",
    longitude: "14.421046",
    num_reviews: "26",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0f/eb/76/dc/img-20170715-182918-1.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0f/eb/76/dc/img-20170715-182918-1.jpg",
          height: "50",
        },
        original: {
          width: "2976",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0f/eb/76/dc/img-20170715-182918-1.jpg",
          height: "3968",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/0f/eb/76/dc/img-20170715-182918-1.jpg",
          height: "733",
        },
        medium: {
          width: "338",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0f/eb/76/dc/img-20170715-182918-1.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-07-17T07:03:34-0400",
      caption: "",
      id: "267089628",
      helpful_votes: "1",
      published_date: "2017-07-17T07:03:34-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.2736878395080566",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "13",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#11 of 60 Restaurants in Bautzen",
    distance: "0.7183420739510485",
    distance_string: "0.7 km",
    bearing: "west",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description:
      "The restaurant belongs to our small hotel in Bautzen. We serve dishes that match our home-brewed beer. Pork shank, Obatzda or brewer's schnitzel.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d11926205-Reviews-Spree_Pension_Restaurant-Bautzen_Saxony.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g227654-d11926205-Spree_Pension_Restaurant-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 48960",
    website: "http://www.spree-pension.de",
    email: "info@spree-pension.de",
    address_obj: {
      street1: "Fischergasse 6",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Fischergasse 6, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 720,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1380,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10676",
        name: "Diner",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "4556680",
    name: "Caffe Creme Venezia",
    latitude: "51.18111",
    longitude: "14.426408",
    num_reviews: "24",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/13/79/2a/51/vista-della-gelateria.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/13/79/2a/51/vista-della-gelateria.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/79/2a/51/vista-della-gelateria.jpg",
          height: "853",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/13/79/2a/51/vista-della-gelateria.jpg",
          height: "683",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/13/79/2a/51/vista-della-gelateria.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2018-06-25T12:52:36-0400",
      caption: "Vista della gelateria dall'entrata",
      id: "326707793",
      helpful_votes: "0",
      published_date: "2018-06-25T12:52:36-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.2425668239593506",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "14",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#1 of 1 Dessert in Bautzen",
    distance: "0.3446501849463102",
    distance_string: "0.3 km",
    bearing: "west",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Closed Now",
    is_long_closed: false,
    price_level: "$",
    description:
      "Artesanal Ice Production daily, Italian coffeehouse with cakes, friendly and efficient service and stunning Ice Creations to enjoy in-house or to take away.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d4556680-Reviews-Caffe_Creme_Venezia-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d4556680-Caffe_Creme_Venezia-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 532257",
    website: "http://www.eiscafe-bautzen.de/",
    email: "info@eiscafe-bautzen.de",
    address_obj: {
      street1: "Reichenstr. 20",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Reichenstr. 20, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 600,
            close_time: 1140,
          },
        ],
        [],
        [
          {
            open_time: 600,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1140,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10642",
        name: "Cafe",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "9900",
        name: "Coffee & Tea",
      },
      {
        key: "9909",
        name: "Dessert",
      },
    ],
  },
  {
    location_id: "5510412",
    name: "La Nonna Ristorante",
    latitude: "51.18303",
    longitude: "14.42221",
    num_reviews: "42",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/db/d9/c6/photo0jpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/db/d9/c6/photo0jpg.jpg",
          height: "50",
        },
        original: {
          width: "1536",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/db/d9/c6/photo0jpg.jpg",
          height: "2048",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/0d/db/d9/c6/photo0jpg.jpg",
          height: "733",
        },
        medium: {
          width: "338",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/db/d9/c6/photo0jpg.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-12-12T10:21:25-0500",
      caption: "",
      id: "232511942",
      helpful_votes: "0",
      published_date: "2016-12-12T10:21:25-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.220123291015625",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "15",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#12 of 60 Restaurants in Bautzen",
    distance: "0.6955711483110008",
    distance_string: "0.7 km",
    bearing: "northwest",
    rating: "4.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d5510412-Reviews-La_Nonna_Ristorante-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d5510412-La_Nonna_Ristorante-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 351193",
    website: "http://www.la-nonna.de",
    email: "info@la-nonna.de",
    address_obj: {
      street1: "Schlossstr. 5",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Schlossstr. 5, 02625 Bautzen, Saxony Germany",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "13173585",
    name: "Le Due Terre da Salvatore",
    latitude: "51.18139",
    longitude: "14.424396",
    num_reviews: "31",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/12/c6/e4/01/la-due-terre-da-salvatore.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/12/c6/e4/01/la-due-terre-da-salvatore.jpg",
          height: "50",
        },
        original: {
          width: "2048",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/12/c6/e4/01/la-due-terre-da-salvatore.jpg",
          height: "2048",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/12/c6/e4/01/la-due-terre-da-salvatore.jpg",
          height: "550",
        },
        medium: {
          width: "450",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/12/c6/e4/01/la-due-terre-da-salvatore.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2018-04-28T09:35:40-0400",
      caption: "La Due Terre da Salvatore Hauptmarkt",
      id: "315024385",
      helpful_votes: "3",
      published_date: "2018-04-28T09:35:40-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.2025063037872314",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "16",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#13 of 60 Restaurants in Bautzen",
    distance: "0.4882874719565011",
    distance_string: "0.5 km",
    bearing: "west",
    rating: "4.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d13173585-Reviews-Le_Due_Terre_da_Salvatore-Bautzen_Saxony.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g227654-d13173585-Le_Due_Terre_da_Salvatore-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 1520 1329993",
    website: "https://www.facebook.com/ledueterredasalvatore/",
    address_obj: {
      street1: "Kornstrasse 1",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Kornstrasse 1, 02625 Bautzen, Saxony Germany",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
      {
        key: "10649",
        name: "Mediterranean",
      },
      {
        key: "10641",
        name: "Pizza",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    booking: {
      provider: "Lieferando.de",
      url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=204421647&geo=13173585&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874916&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=hoj-XIew3AFl06ehuBdwigY1zzB7zZ6R8kbTVop6J1t6yJit11sLuj5wYD6cYnXYNGi9I6nuBPmXmunT2F7Y2fJnM1N489A4qdoJsgdqfZA&cs=1c0983f0361770db9194cd60e3e682e3f",
    },
    reserve_info: {
      id: "13173585",
      provider: "Lieferando.de",
      provider_img: "https://static.tacdn.com/img2/eateries/lieferando.de_white_05.30.2019.png",
      url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=204421647&geo=13173585&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=874916&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=227626534&managed=false&capped=false&gosox=hoj-XIew3AFl06ehuBdwigY1zzB7zZ6R8kbTVop6J1t6yJit11sLuj5wYD6cYnXYNGi9I6nuBPmXmunT2F7Y2fJnM1N489A4qdoJsgdqfZA&cs=1c0983f0361770db9194cd60e3e682e3f",
      booking_partner_id: null,
      racable: false,
      api_bookable: false,
      timeslots: null,
      bestoffer: null,
      timeslot_offers: null,
      button_text: "Order Online",
      disclaimer_text: null,
      banner_text: null,
    },
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "227654",
    ad_position: "inline3",
    ad_size: "8X8",
    doubleclick_zone: "eu.germany.saxony",
    ancestors: [
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    detail: "0",
    page_type: "restaurants",
    mob_ptype: "app_restaurants",
  },
  {
    location_id: "1346627",
    name: "Zum Karrasek",
    latitude: "51.181602",
    longitude: "14.424792",
    num_reviews: "35",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0c/5b/9d/24/photo0jpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0c/5b/9d/24/photo0jpg.jpg",
          height: "50",
        },
        original: {
          width: "1536",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0c/5b/9d/24/photo0jpg.jpg",
          height: "2048",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/0c/5b/9d/24/photo0jpg.jpg",
          height: "733",
        },
        medium: {
          width: "338",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0c/5b/9d/24/photo0jpg.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-08-03T15:11:00-0400",
      caption: "",
      id: "207330596",
      helpful_votes: "1",
      published_date: "2016-08-03T15:11:00-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.1907601356506348",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "17",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#14 of 60 Restaurants in Bautzen",
    distance: "0.46840178770946944",
    distance_string: "0.5 km",
    bearing: "west",
    rating: "4.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d1346627-Reviews-Zum_Karrasek-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d1346627-Zum_Karrasek-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 45066",
    website: "http://www.zum-karasek.de",
    address_obj: {
      street1: "Hintere Reichenstr. 2",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Hintere Reichenstr. 2, 02625 Bautzen, Saxony Germany",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10746",
        name: "Central European",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "5820308",
    name: "Zum Zollhaus",
    latitude: "51.17729",
    longitude: "14.42309",
    num_reviews: "8",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/71/2e/7b/zum-zollhaus.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/71/2e/7b/zum-zollhaus.jpg",
          height: "50",
        },
        original: {
          width: "744",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/71/2e/7b/zum-zollhaus.jpg",
          height: "484",
        },
        large: {
          width: "744",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/71/2e/7b/zum-zollhaus.jpg",
          height: "484",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/71/2e/7b/zum-zollhaus.jpg",
          height: "358",
        },
      },
      is_blessed: false,
      uploaded_date: "2016-10-27T15:47:02-0400",
      caption: "Zum Zollhaus",
      id: "225521275",
      helpful_votes: "8",
      published_date: "2016-10-27T15:47:02-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.16658616065979",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "18",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#15 of 60 Restaurants in Bautzen",
    distance: "0.6551903970517724",
    distance_string: "0.7 km",
    bearing: "southwest",
    rating: "5.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d5820308-Reviews-Zum_Zollhaus-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d5820308-Zum_Zollhaus-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 460237",
    website: "http://zollhaus-bautzen.de/",
    email: "service@zollhaus-bautzen.de",
    address_obj: {
      street1: "Aeussere Lauenstr. 62",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Aeussere Lauenstr. 62, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "9773256",
    name: "Gaststatte Lusatia",
    latitude: "51.18041",
    longitude: "14.44081",
    num_reviews: "8",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/17/5c/35/b9/lusatia.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/17/5c/35/b9/lusatia.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/5c/35/b9/lusatia.jpg",
          height: "960",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/17/5c/35/b9/lusatia.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/17/5c/35/b9/lusatia.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2019-05-01T12:48:21-0400",
      caption: "Lusatia",
      id: "391919033",
      helpful_votes: "2",
      published_date: "2019-05-02T06:30:05-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.1516551971435547",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "19",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#16 of 60 Restaurants in Bautzen",
    distance: "0.6726041750297839",
    distance_string: "0.7 km",
    bearing: "east",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$8 - $18",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d9773256-Reviews-Gaststatte_Lusatia-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d9773256-Gaststatte_Lusatia-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 42244",
    website: "http://www.facebook.com/Gastst%C3%A4tte-Lusatia-113812352028156/",
    address_obj: {
      street1: "Loebauer Str. 26",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Loebauer Str. 26, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 900,
          },
        ],
        [],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10642",
        name: "Cafe",
      },
      {
        key: "10676",
        name: "Diner",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "5038663",
    name: "Cafe Marx",
    latitude: "51.17785",
    longitude: "14.42853",
    num_reviews: "17",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/04/af/78/ce/eingangsbereich.jpg",
          height: "149",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/04/af/78/ce/eingangsbereich.jpg",
          height: "50",
        },
        original: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/04/af/78/ce/eingangsbereich.jpg",
          height: "328",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/04/af/78/ce/eingangsbereich.jpg",
          height: "328",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/04/af/78/ce/eingangsbereich.jpg",
          height: "328",
        },
      },
      is_blessed: true,
      uploaded_date: "2013-10-16T15:46:33-0400",
      caption: "Eingangsbereich",
      id: "78608590",
      helpful_votes: "2",
      published_date: "2013-10-17T04:11:20-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.1466152667999268",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "20",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#17 of 60 Restaurants in Bautzen",
    distance: "0.32832839539931186",
    distance_string: "0.3 km",
    bearing: "southwest",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Closed Now",
    is_long_closed: false,
    price_level: "$",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d5038663-Reviews-Cafe_Marx-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d5038663-Cafe_Marx-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 481188",
    website: "http://www.konditorei-in-bautzen.de",
    address_obj: {
      street1: "Postplatz 5",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Postplatz 5, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 420,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 420,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 420,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 420,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 420,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 420,
            close_time: 1140,
          },
        ],
        [
          {
            open_time: 420,
            close_time: 1140,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10642",
        name: "Cafe",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "1346616",
    name: "Shalimar",
    latitude: "51.1795",
    longitude: "14.42867",
    num_reviews: "20",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/10/be/9a/8e/photo0jpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/10/be/9a/8e/photo0jpg.jpg",
          height: "50",
        },
        original: {
          width: "1536",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/10/be/9a/8e/photo0jpg.jpg",
          height: "2048",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/10/be/9a/8e/photo0jpg.jpg",
          height: "733",
        },
        medium: {
          width: "338",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/10/be/9a/8e/photo0jpg.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-09-22T14:25:38-0400",
      caption: "",
      id: "280926862",
      helpful_votes: "0",
      published_date: "2017-09-22T14:25:38-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.138761281967163",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "21",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#18 of 60 Restaurants in Bautzen",
    distance: "0.1954029659730952",
    distance_string: "0.2 km",
    bearing: "southwest",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d1346616-Reviews-Shalimar-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d1346616-Shalimar-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 40715",
    website: "http://www.shalimar-bautzen.com",
    address_obj: {
      street1: "Tuchmacherstr. 13",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Tuchmacherstr. 13, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 870,
          },
          {
            open_time: 1050,
            close_time: 1410,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10346",
        name: "Indian",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "5818403",
    name: "Winter's Steakhouse Bautzen",
    latitude: "51.179596",
    longitude: "14.408651",
    num_reviews: "26",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0c/91/b6/39/winters-steak-house.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0c/91/b6/39/winters-steak-house.jpg",
          height: "50",
        },
        original: {
          width: "2048",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0c/91/b6/39/winters-steak-house.jpg",
          height: "1536",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0c/91/b6/39/winters-steak-house.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/0c/91/b6/39/winters-steak-house.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-08-17T15:01:03-0400",
      caption: "Winters steak house.",
      id: "210875961",
      helpful_votes: "0",
      published_date: "2016-08-17T15:01:03-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.1293962001800537",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "22",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#19 of 60 Restaurants in Bautzen",
    distance: "1.5730846389508502",
    distance_string: "1.6 km",
    bearing: "west",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d5818403-Reviews-Winter_s_Steakhouse_Bautzen-Bautzen_Saxony.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g227654-d5818403-Winter_s_Steakhouse_Bautzen-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 464057",
    website: "http://www.winterssteakhouse.de",
    email: "contact@winterssteakhouse.de",
    address_obj: {
      street1: "Dresdener Str. 50",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Dresdener Str. 50, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1320,
          },
        ],
        [],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1320,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10345",
        name: "Steakhouse",
      },
      {
        key: "9908",
        name: "American",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "1038474",
    name: "Restaurant Tiroler Stuben",
    latitude: "51.17825",
    longitude: "14.43443",
    num_reviews: "13",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/08/95/77/7b/restaurant-tiroler-stuben.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/08/95/77/7b/restaurant-tiroler-stuben.jpg",
          height: "50",
        },
        original: {
          width: "1600",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/08/95/77/7b/restaurant-tiroler-stuben.jpg",
          height: "1214",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/08/95/77/7b/restaurant-tiroler-stuben.jpg",
          height: "417",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/08/95/77/7b/restaurant-tiroler-stuben.jpg",
          height: "190",
        },
      },
      is_blessed: true,
      uploaded_date: "2015-08-08T09:22:37-0400",
      caption: "Stuben",
      id: "144013179",
      helpful_votes: "2",
      published_date: "2015-08-08T09:22:37-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.127638101577759",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "23",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#20 of 60 Restaurants in Bautzen",
    distance: "0.32137686441623997",
    distance_string: "0.3 km",
    bearing: "southeast",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$1",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d1038474-Reviews-Restaurant_Tiroler_Stuben-Bautzen_Saxony.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g227654-d1038474-Restaurant_Tiroler_Stuben-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 460888",
    website: "http://www.restaurant-tiroler-stuben.de",
    address_obj: {
      street1: "Lessingstr. 1",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Lessingstr. 1, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 1080,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 1080,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 1080,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 1080,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 1080,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 1080,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 1080,
            close_time: 1320,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10746",
        name: "Central European",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "5523831",
    name: "Habana Bar & Restaurant Inh. Oliver Morales",
    latitude: "51.18063",
    longitude: "14.42882",
    num_reviews: "8",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.1233065128326416",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "24",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#21 of 60 Restaurants in Bautzen",
    distance: "0.1683710901382472",
    distance_string: "0.2 km",
    bearing: "west",
    rating: "4.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d5523831-Reviews-Habana_Bar_Restaurant_Inh_Oliver_Morales-Bautzen_Saxony.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g227654-d5523831-Habana_Bar_Restaurant_Inh_Oliver_Morales-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 480071",
    address_obj: {
      street1: "Kirchplatz 3",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Kirchplatz 3, 02625 Bautzen, Saxony Germany",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10664",
        name: "Greek",
      },
      {
        key: "10670",
        name: "Pub",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "14021530",
    name: "Drei Baren Bautzen",
    latitude: "51.17194",
    longitude: "14.42579",
    num_reviews: "4",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/12/c1/cf/8c/drei-baren-bautzen.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/12/c1/cf/8c/drei-baren-bautzen.jpg",
          height: "50",
        },
        original: {
          width: "1040",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/12/c1/cf/8c/drei-baren-bautzen.jpg",
          height: "780",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/12/c1/cf/8c/drei-baren-bautzen.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/12/c1/cf/8c/drei-baren-bautzen.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2018-04-26T08:01:27-0400",
      caption: "Drei Bären Bautzen",
      id: "314691468",
      helpful_votes: "0",
      published_date: "2018-04-26T08:01:27-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.1204416751861572",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "25",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#22 of 60 Restaurants in Bautzen",
    distance: "1.0023459081502686",
    distance_string: "1 km",
    bearing: "south",
    rating: "5.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d14021530-Reviews-Drei_Baren_Bautzen-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d14021530-Drei_Baren_Bautzen-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 5286410",
    address_obj: {
      street1: "Liselotte-Herrmann-Str. 8",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Liselotte-Herrmann-Str. 8, 02625 Bautzen, Saxony Germany",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10693",
        name: "Russian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "3970669",
    name: "Ristorante Rossini",
    latitude: "51.1796",
    longitude: "14.43223",
    num_reviews: "10",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/71/2c/13/ristorante-rossini.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/71/2c/13/ristorante-rossini.jpg",
          height: "50",
        },
        original: {
          width: "734",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/71/2c/13/ristorante-rossini.jpg",
          height: "521",
        },
        large: {
          width: "734",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/71/2c/13/ristorante-rossini.jpg",
          height: "521",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/71/2c/13/ristorante-rossini.jpg",
          height: "390",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-10-27T15:42:39-0400",
      caption: "Ristorante Rossini",
      id: "225520659",
      helpful_votes: "0",
      published_date: "2016-10-27T15:42:39-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.115840435028076",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "26",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#23 of 60 Restaurants in Bautzen",
    distance: "0.10658194114695085",
    distance_string: "0.1 km",
    bearing: "southeast",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d3970669-Reviews-Ristorante_Rossini-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d3970669-Ristorante_Rossini-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 68089792",
    website: "http://www.bautzen-rossini.de",
    email: "office@bautzen-rossini.de",
    address_obj: {
      street1: "Lotzestr. 22",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Lotzestr. 22, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 1020,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1260,
          },
        ],
        [],
        [
          {
            open_time: 660,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 840,
          },
          {
            open_time: 1020,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 1020,
            close_time: 1260,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
      {
        key: "10641",
        name: "Pizza",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "7033609",
    name: "BackerCafe Fehrmann",
    latitude: "51.16759",
    longitude: "14.42679",
    num_reviews: "10",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/6d/1a/fb/cafe-fehrmann.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/6d/1a/fb/cafe-fehrmann.jpg",
          height: "50",
        },
        original: {
          width: "698",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/6d/1a/fb/cafe-fehrmann.jpg",
          height: "377",
        },
        large: {
          width: "698",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/6d/1a/fb/cafe-fehrmann.jpg",
          height: "377",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/6d/1a/fb/cafe-fehrmann.jpg",
          height: "297",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-10-26T08:59:40-0400",
      caption: "Cafe Fehrmann",
      id: "225254139",
      helpful_votes: "1",
      published_date: "2016-10-26T08:59:40-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.1156439781188965",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "27",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#1 of 3 Bakeries in Bautzen",
    distance: "1.446034219106014",
    distance_string: "1.4 km",
    bearing: "south",
    rating: "4.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d7033609-Reviews-BackerCafe_Fehrmann-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d7033609-BackerCafe_Fehrmann-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 35930 5560420",
    website: "https://www.baecker-fehrmann.de/standorte/cafe-bistro-imbiss-bautzen-dresden",
    email: "info@baecker-fehrmann.de",
    address_obj: {
      street1: "Neusalzaer Str. 43A",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Neusalzaer Str. 43A, 02625 Bautzen, Saxony Germany",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10642",
        name: "Cafe",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "9900",
        name: "Coffee & Tea",
      },
      {
        key: "9901",
        name: "Bakeries",
      },
    ],
  },
  {
    location_id: "2096429",
    name: "Zur Apotheke",
    latitude: "51.18323",
    longitude: "14.42125",
    num_reviews: "48",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/13/3d/5c/6d/fasanenbrustchen-sous.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/13/3d/5c/6d/fasanenbrustchen-sous.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/3d/5c/6d/fasanenbrustchen-sous.jpg",
          height: "960",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/13/3d/5c/6d/fasanenbrustchen-sous.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/13/3d/5c/6d/fasanenbrustchen-sous.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2018-06-10T14:10:44-0400",
      caption: "Fasanenbrüstchen sous vide mit Kräutern und Blüten, Kartoffelpüree, Raguot vom Sommergemüse",
      id: "322788461",
      helpful_votes: "1",
      published_date: "2018-06-10T14:10:44-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.113576650619507",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "28",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#24 of 60 Restaurants in Bautzen",
    distance: "0.7656481080572834",
    distance_string: "0.8 km",
    bearing: "northwest",
    rating: "3.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d2096429-Reviews-Zur_Apotheke-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d2096429-Zur_Apotheke-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 480035",
    website: "http://www.zur-apotheke-bautzen.de/",
    email: "andreasbech@aol.com",
    address_obj: {
      street1: "Schlossstrasse 21",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Schlossstrasse 21, 02625 Bautzen, Saxony Germany",
    hours: {
      week_ranges: [
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1050,
            close_time: 1425,
          },
        ],
        [],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1050,
            close_time: 1425,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1050,
            close_time: 1425,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1050,
            close_time: 1425,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1050,
            close_time: 1425,
          },
        ],
        [
          {
            open_time: 690,
            close_time: 840,
          },
          {
            open_time: 1050,
            close_time: 1425,
          },
        ],
      ],
      timezone: "Europe/Berlin",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10347",
        name: "German",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "21338359",
    name: "Backerei Schwerdtner",
    latitude: "51.181255",
    longitude: "14.424745",
    num_reviews: "4",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/21/6e/32/d7/geschmackvolle-einrichtung.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/21/6e/32/d7/geschmackvolle-einrichtung.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/6e/32/d7/geschmackvolle-einrichtung.jpg",
          height: "1096",
        },
        large: {
          width: "525",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/21/6e/32/d7/geschmackvolle-einrichtung.jpg",
          height: "450",
        },
        medium: {
          width: "239",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/21/6e/32/d7/geschmackvolle-einrichtung.jpg",
          height: "205",
        },
      },
      is_blessed: false,
      uploaded_date: "2021-11-21T15:23:58-0500",
      caption: "geschmackvolle Einrichtung und sauber.",
      id: "560870103",
      helpful_votes: "0",
      published_date: "2021-11-21T15:23:58-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.1102302074432373",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "29",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#25 of 60 Restaurants in Bautzen",
    distance: "0.4610657257227731",
    distance_string: "0.5 km",
    bearing: "west",
    rating: "4.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g227654-d21338359-Reviews-Backerei_Schwerdtner-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d21338359-Backerei_Schwerdtner-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    address_obj: {
      street1: "Reichenstrasse 3",
      street2: null,
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Reichenstrasse 3, 02625 Bautzen, Saxony Germany",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10642",
        name: "Cafe",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "2078405",
    name: "Nikopolis",
    latitude: "51.185932",
    longitude: "14.442972",
    num_reviews: "18",
    timezone: "Europe/Berlin",
    location_string: "Bautzen, Saxony",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/71/36/14/nikopolis.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/71/36/14/nikopolis.jpg",
          height: "50",
        },
        original: {
          width: "749",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/71/36/14/nikopolis.jpg",
          height: "723",
        },
        large: {
          width: "749",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/71/36/14/nikopolis.jpg",
          height: "723",
        },
        medium: {
          width: "466",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/71/36/14/nikopolis.jpg",
          height: "450",
        },
      },
      is_blessed: false,
      uploaded_date: "2016-10-27T15:58:49-0400",
      caption: "Nikopolis",
      id: "225523220",
      helpful_votes: "4",
      published_date: "2016-10-27T15:58:49-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    awards: [],
    doubleclick_zone: "eu.germany.saxony",
    preferred_map_engine: "default",
    raw_ranking: "3.101395606994629",
    ranking_geo: "Bautzen",
    ranking_geo_id: "227654",
    ranking_position: "30",
    ranking_denominator: "54",
    ranking_category: "restaurant",
    ranking: "#26 of 60 Restaurants in Bautzen",
    distance: "1.0353955414171043",
    distance_string: "1 km",
    bearing: "northeast",
    rating: "3.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url: "https://www.tripadvisor.com/Restaurant_Review-g227654-d2078405-Reviews-Nikopolis-Bautzen_Saxony.html",
    write_review: "https://www.tripadvisor.com/UserReview-g227654-d2078405-Nikopolis-Bautzen_Saxony.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Bautzen",
        abbrv: null,
        location_id: "227654",
      },
      {
        subcategory: [
          {
            key: "state",
            name: "State",
          },
        ],
        name: "Saxony",
        abbrv: null,
        location_id: "187397",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Germany",
        abbrv: null,
        location_id: "187275",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Bautzen",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+49 3591 601789",
    website: "http://www.restaurant-nikopolis.de/",
    email: "Aggelos@gmx.net",
    address_obj: {
      street1: "Muskauer Str. 20c",
      street2: "",
      city: "Bautzen",
      state: "Saxony",
      country: "Germany",
      postalcode: "02625",
    },
    address: "Muskauer Str. 20c, 02625 Bautzen, Saxony Germany",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10664",
        name: "Greek",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
];

export const getPlaceData = async (type: SelectedFilter, sw: Coords, ne: Coords) => {
  if (sw.lat === 0 && sw.lng === 0 && ne.lat === 0 && ne.lng === 0) {
    return;
  }

  try {
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVEL_ADVISOR_KEY,
      },
    };

    const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
    console.log("fetching data from API");
    // const {
    //   data: { data },
    // } = await axios.get(url, options as any as AxiosRequestConfig);
    // return data;
    return mockData;
  } catch (error) {
    console.log(error);
  }
};

const weatherUrl = "https://community-open-weather-map.p.rapidapi.com/find";

const dummyWeatherData = {
  message: "accurate",
  cod: "200",
  count: 5,
  list: [
    {
      id: 2951881,
      name: "Bautzen",
      coord: {
        lat: 51.1833,
        lon: 14.4333,
      },
      main: {
        temp: 283.71,
        feels_like: 281.55,
        temp_min: 282.96,
        temp_max: 284.24,
        pressure: 1035,
        humidity: 28,
      },
      dt: 1647792548,
      wind: {
        speed: 2.68,
        deg: 153,
      },
      sys: {
        country: "DE",
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
    },
    {
      id: 2852147,
      name: "Preuschwitz",
      coord: {
        lat: 51.1667,
        lon: 14.4167,
      },
      main: {
        temp: 283.82,
        feels_like: 281.67,
        temp_min: 283.07,
        temp_max: 284.9,
        pressure: 1035,
        humidity: 28,
      },
      dt: 1647792362,
      wind: {
        speed: 2.68,
        deg: 153,
      },
      sys: {
        country: "DE",
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
    },
    {
      id: 2826034,
      name: "Strehla",
      coord: {
        lat: 51.1667,
        lon: 14.45,
      },
      main: {
        temp: 283.87,
        feels_like: 281.73,
        temp_min: 283.12,
        temp_max: 284.36,
        pressure: 1035,
        humidity: 28,
      },
      dt: 1647792359,
      wind: {
        speed: 2.68,
        deg: 153,
      },
      sys: {
        country: "DE",
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
    },
    {
      id: 2914562,
      name: "Grubschütz",
      coord: {
        lat: 51.1667,
        lon: 14.3833,
      },
      main: {
        temp: 283.68,
        feels_like: 281.52,
        temp_min: 282.9,
        temp_max: 284.73,
        pressure: 1035,
        humidity: 28,
      },
      dt: 1647792371,
      wind: {
        speed: 2.68,
        deg: 153,
      },
      sys: {
        country: "DE",
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
    },
    {
      id: 2951880,
      name: "Landkreis Bautzen",
      coord: {
        lat: 51.1667,
        lon: 14.4667,
      },
      main: {
        temp: 283.81,
        feels_like: 281.66,
        temp_min: 283.09,
        temp_max: 284.33,
        pressure: 1035,
        humidity: 28,
      },
      dt: 1647792382,
      wind: {
        speed: 2.68,
        deg: 153,
      },
      sys: {
        country: "DE",
      },
      rain: null,
      snow: null,
      clouds: {
        all: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
    },
  ],
};

export const getWeatherData = async (lat: number, lng: number) => {
  console.log("fetching weater data");

  const weatherOptions = {
    params: {
      lon: lng,
      lat: lat,
    },
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_WEATHER,
    },
  };
  try {
    // const { data } = await axios.get(weatherUrl, weatherOptions as any as AxiosRequestConfig);
    // return data;
    return dummyWeatherData;
  } catch (error) {
    console.log(error);
  }
};
