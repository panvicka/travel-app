import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Phone from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./style";
import { Place } from "../../types";
import { ArrowUpward } from "@material-ui/icons";

interface IProps {
  place: Place;
}

const PlaceDetails = ({ place }: IProps) => {
  let classes = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        component="div"
        image={place.photo ? place.photo.images.large.url : ""}
        title={place.name ? place.name : ""}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>

        {place?.awards?.map((award, index) => {
          return (
            <Box my={1} key={index} display="flex" justifyContent="space-between">
              <img src={award.images?.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">
                {award.display_name}
              </Typography>
            </Box>
          );
        })}

        {place?.cuisine?.map((foodType) => {
          if (foodType.name) {
            return <Chip key={foodType.name} size="small" label={foodType.name} className={classes.chip} />;
          } else {
            return "";
          }
        })}

        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
            <Phone /> {place.phone}
          </Typography>
        )}

        <CardActions>
          {place.web_url && (
            <Button
              size="small"
              color="primary"
              onClick={(e) => {
                window.open(place.web_url as string, "_blank");
              }}
            >
              Trip Advisor
            </Button>
          )}

          {place.website && (
            <Button
              size="small"
              color="primary"
              onClick={(e) => {
                window.open(place.website as string, "_blank");
              }}
            >
              Website
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;