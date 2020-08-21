import React from "react";

import { 
  Card, 
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from '@bootstrap-styled/v4';

const RecordCard = ({ title, artist }) => (
  <Card width="25%">
    <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{artist}</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the Card content.</CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBlock>
  </Card>
)

export default RecordCard;

