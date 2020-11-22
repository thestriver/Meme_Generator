import React, { Component } from "react";

export default class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        // console.log(memes)
        this.setState({
          allMemeImgs: memes
        });
      });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // get a random int (index in the array)
    //adding * this.allMemeImgs.length ensures the number is included in the array
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    // get the meme from that index
    const randomMemeImg = this.state.allMemeImgs[randomNum].url;
    // set `randomImg` to the `.url` of the random item I grabbed
    this.setState({
      randomImage: randomMemeImg
    });
  };

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleInputChange}
          />
          <br />

          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
