
let Json = {
    pictures: ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg", "./images/7.jpg"],
    text: ["这是第一张", "这是第二张", "这是第三张", "这是第四张", "这是第五张", "这是第六张", "这是第七张"]
}

class TopNode extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var aLi = []
        this.props.picUrl.forEach((val, index) => {
            aLi.push(<li key={index}>
                <img src={val} alt="" style={{ transform: 'scale(' + this.props.iScale + ')' }} />
            </li>)
        });
        return (
            <div className="top-div">
                <div className="left-click" onClick={this.props.leftClick} onMouseDown={function (e) { e.preventDefault() }}>左</div>
                <ul style={{ width: this.props.picUrl.length * 400 + "px", left: this.props.index * -400 + "px" }}>{aLi}</ul>
                <div className="right-click" onClick={this.props.rightClick} onMouseDown={function (e) { e.preventDefault() }}>右</div>
            </div>
        )
    }
}
class CenterNode extends React.Component {
    render() {
        return (
            <div className="center-div">
                <span className="left">{this.props.text[this.props.index]}</span>
                <div className="right">
                    <span onClick={this.props.bigClick} onMouseDown={function (e) { e.preventDefault() }}>大</span>
                    <span onClick={this.props.smallClick} onMouseDown={function (e) { e.preventDefault() }}>小</span>
                </div>
            </div>
        )
    }
}
class BottomNode extends React.Component {
    render() {
        let aLi = []
        this.props.picUrl.forEach((val, index) => {
            aLi.push(<li className={index === this.props.index ? "active" : ""}
                key={index} style={{ backgroundImage: `url(${val})` }}
                onClick={this.props.setIndex.bind(this, index)}></li>)
        })
        return (
            <div className="bottom-div">
                <ul style={{ width: this.props.picUrl.length * 100 + "px", left: this.props.index > 3 ? (3 - this.props.index) * 100 + "px" : 0 }}>{aLi}</ul>
            </div>
        )
    }
}

class Mytab extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            iScale: 1
        }
    }
    change(index) {
        this.setState({
            index
        })
    }
    leftClick() {
        this.setState({
            index: (this.state.index === 0) ? (this.props.JsonTo.pictures.length - 1) : (this.state.index - 1)
        })
    }
    rightClick() {
        this.setState({
            index: (this.state.index === (this.props.JsonTo.pictures.length - 1)) ? 0 : (this.state.index + 1)
        })
    }
    bigClick() {
        console.log(this.state.iScale)
        this.setState({
            iScale: this.state.iScale < 2 ? this.state.iScale + 0.1 : 2
        })
    }
    smallClick() {
        console.log(this.state.iScale)
        this.setState({
            iScale: this.state.iScale > 0.5 ? this.state.iScale - 0.1 : 0.5
        })
    }
    render() {
        return (
            <div className="out-box">
                <TopNode picUrl={this.props.JsonTo.pictures} index={this.state.index}
                    leftClick={this.leftClick.bind(this)} rightClick={this.rightClick.bind(this)}
                    iScale={this.state.iScale}
                />
                <CenterNode text={this.props.JsonTo.text} index={this.state.index}
                    bigClick={this.bigClick.bind(this)} smallClick={this.smallClick.bind(this)}
                />
                <BottomNode picUrl={this.props.JsonTo.pictures} index={this.state.index} setIndex={this.change.bind(this)} />
            </div>
        )
    }
}

ReactDOM.render(<Mytab JsonTo={Json} />, app)