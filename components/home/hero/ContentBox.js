import React from "react";
import ContentBoxStyled from "../../styled/ContentBoxStyled";
import Title from "./ContentBox/Title";
import Description from "./ContentBox/Description";
import Action from "./ContentBox/Action";
import Social from "./ContentBox/Social";
import Snippet from "./ContentBox/Snippet";

export default function ContentBox() {
  return (
    <ContentBoxStyled className="content hero">
      <Snippet />
      <Title />
      <Description />
      <Action />
      <Social />
    </ContentBoxStyled>
  );
}
