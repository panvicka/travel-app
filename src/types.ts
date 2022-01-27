import { Coords } from "google-map-react";

export interface Bounds {
  ne: Coords;
  sw: Coords;
}

export enum SelectedFilter {
  RESTAURANT = "restaurants",
  HOTELS = "hotels",
  ATTRACTIONS = "attractions",
}

export enum RatingText {
  RATING_ALL = "all",
  RATING_ABOVE_3 = "above 3",
  RATING_ABOVE_4 = "above 4",
  RATING_ABOVE_5 = "5",
}

export interface RatingFilter {
  ratingText: RatingText;
  ratingValue: number;
}

interface PlaceImage {
  width: string;
  url: string;
  height: string;
}

interface PlaceAwards {
  award_type: string;
  year: string;
  images: {
    small: string;
    large: string;
  };
  categories: Array<string>;
  display_name: string;
}

interface PlaceAncestors {
  subcategory: [
    {
      key: string | null;
      name: string | null;
    }
  ];
  name: string | null;
  abbrv: string | null;
  location_id: string | null;
}

interface PlaceOpeningTime {
  open_time: number;
  close_time: number;
}

interface PlaceKeyNamePair {
  key: string;
  name: string;
}

export interface Place {
  location_id: string;
  ad_position?: string | null;
  ad_size?: string | null;
  name?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  num_reviews?: string | null;
  timezone?: string | null;
  location_string?: string | null;
  photo?: {
    images: {
      small: PlaceImage;
      thumbnail: PlaceImage;
      original: PlaceImage;
      large: PlaceImage;
      medium: PlaceImage;
    };
    is_blessed: boolean;
    uploaded_date: string | null;
    caption: string | null;
    id: string | null;
    helpful_votes: string | null;
    published_date: string | null;
    user: {
      user_id: string | null;
      member_id: string | null;
      type: string | null;
    };
  };
  awards?: Array<PlaceAwards>;
  doubleclick_zone?: string | null;
  preferred_map_engine?: string | null;
  raw_ranking?: string | null;
  ranking_geo?: string | null;
  ranking_geo_id?: string | null;
  ranking_position?: string | null;
  ranking_denominator?: string | null;
  ranking_category?: string | null;
  ranking?: string | null;
  distance?: string | null;
  distance_string?: string;
  bearing?: string | null;
  rating?: string | null;
  is_closed?: boolean;
  open_now_text?: string | null;
  is_long_closed?: boolean;
  price_level?: string | null;
  price?: string | null;
  description?: string | null;
  web_url?: string | null;
  write_review?: string | null;
  ancestors?: Array<PlaceAncestors> | null;
  detail?: string | null;
  page_type?: string | null;
  mob_ptype?: string | null;
  category?: {
    key: string | null;
    name: string | null;
  };
  subcategory?: Array<{
    key: string;
    name: string;
  }> | null;
  parent_display_name?: string | null;
  is_jfy_enabled?: boolean | null;
  nearest_metro_station?: [] | null;
  phone?: string | null;
  website?: string | null;
  email?: string | null;
  address_obj?: {
    street1?: string | null;
    street2?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postalcode?: string | null;
  };
  address?: string | null;
  hours?: {
    week_ranges: any; //check types
    timezone: string | null;
  };
  is_candidate_for_contact_info_suppression?: boolean;
  cuisine?: Array<PlaceKeyNamePair> | null;
  dietary_restrictions?: Array<PlaceKeyNamePair> | null;
  establishment_types?: Array<PlaceKeyNamePair> | null;
  booking?: {
    provider: string | null;
    url: string | null;
  };
  reserve_info?: {
    id: string | null;
    provider: string | null;
    provider_img: string | null;
    url: string | null;
    booking_partner_id: string | null;
    racable: boolean;
    api_bookable: boolean;
    timeslots: string | null; //check types
    bestoffer: string | null; //check types
    timeslot_offers: string | null; //check types
    button_text: string | null;
    disclaimer_text: string | null;
    banner_text: string | null;
  };
}
