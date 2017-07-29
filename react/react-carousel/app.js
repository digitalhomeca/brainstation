const images = [{
	imgSrc: 'http://imgur.com/9itd49u.png',
	imgNum: 1}, {
	imgSrc: 'http://imgur.com/n19BXfZ.png',
	imgNum: 2}, {
	imgSrc: 'http://imgur.com/VBwQmzA.png',
	imgNum: 3}, {
	imgSrc: 'http://imgur.com/nawDxVv.png',
	imgNum: 4}
]

class App extends React.Component {

	constructor() {
	super()

		this.state = {
			imgNo : 0,
			prev : true,
			next : false
	

		};
		this.clickNext = this.clickNext.bind(this);
		this.clickPrev = this.clickPrev.bind(this);

}
	clickNext() {

	   if (this.state.imgNo < images.length -1) {

			this.setState({imgNo: this.state.imgNo + 1});

	   } else {
		   this.setState({imgNo: this.state.imgNo});
	   }
  }
	
	clickPrev() {

		if (this.state.imgNo > 0) {
		  this.setState({imgNo: this.state.imgNo - 1} );

		} else {
			this.setState({imgNo: this.state.imgNo, next: false});
		}
  }


	render() {
		return (
			<div>
			<div>
				<h1>Calvin Carousel</h1>
				<img src = {images[this.state.imgNo].imgSrc} />
				
			</div>

			<div>
				<button disabled={this.state.imgNo == 0 ? true : false} onClick={this.clickPrev}>Previous</button>
				<span>Image {this.state.imgNo + 1} of {images.length}</span>
				<button disabled={this.state.imgNo == images.length-1 ? true : false} onClick={this.clickNext}>Next</button>
			</div>
			</div>
		
		)
	}
}

ReactDOM.render(<App images={images}/>, document.getElementById('app'));
