
let Json = {
    pictures: ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg", "./images/7.jpg"],
    text: ["这是第一张", "这是第二张", "这是第三张", "这是第四张", "这是第五张", "这是第六张", "这是第七张"]
}

class TopNode extends React.Component {
    render() {
        var aLi = []
        this.props.picUrl.forEach((val, index) => {
            aLi.push(<li key={index} style={{ backgroundImage: `url(${val})` }}></li>)
        });
        return (
            <div className="top-div">
                <ul style={{ width: this.props.picUrl.length * 400 + "px", left: this.props.index * -400 + "px" }}>{aLi}</ul>
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
                    <span>大</span>
                    <span>小</span>
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
                <ul style={{ width: this.props.picUrl.length * 100 + "px" }}>{aLi}</ul>
            </div>
        )
    }
}

class Mytab extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 2
        }
    }
    change(index) {
        this.setState({
            index
        })
    }
    render() {
        return (
            <div className="out-box">
                <TopNode picUrl={this.props.JsonTo.pictures} index={this.state.index} />
                <CenterNode text={this.props.JsonTo.text} index={this.state.index} />
                <BottomNode picUrl={this.props.JsonTo.pictures} index={this.state.index} setIndex={this.change.bind(this)} />
            </div>
        )
    }
}

ReactDOM.render(<Mytab JsonTo={Json} />, app)