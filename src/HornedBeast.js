import React from "react";

class HornBeast extends React.Component
{
  render()
  {
    return 
    (
      <>
        <h2>{this.props.title}</h2>
        <img src="{this.props.image_url}" alt="{this.props.description}" title="{this.props.title}">
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornBeast;