import React, { Component } from 'react'
import './App.scss';
export default class App extends Component {
  constructor() { 
    super(); 
    this.state = { 
      question: '', 
      answer: ''
    } 
    this.resultText = React.createRef();
    this.questionText = React.createRef();
    this.handleClick = this.handleClick.bind(this); 
    this.handleClear = this.handleClear.bind(this); 
    this.handleMouseUp = this.handleMouseUp.bind(this); 
    this.handleMouseDown = this.handleMouseDown.bind(this); 
  } 
  handleClear(){ 
    this.setState({ question: '', answer: '' }); 
    this.resultText.current.textContent = 0;
    this.questionText.current.textContent = 0;
  } 
  handleMouseUp(event) {
     event.target.classList.remove("styleOnClick");
     if(event.target.querySelectorAll('svg')[0]){
      event.target.querySelectorAll('svg')[0].setAttribute("width", "15px");
      event.target.querySelectorAll('svg')[0].setAttribute("height", "15px");
    }
  }
  handleMouseDown(event) {
    event.target.classList.add("styleOnClick");
    if(event.target.querySelectorAll('svg')[0]){
      event.target.querySelectorAll('svg')[0].setAttribute("width", "13px");
      event.target.querySelectorAll('svg')[0].setAttribute("height", "13px");
    }
  }
  handleClick(event){ 
    const value = event.target.textContent; 
    switch (value) { 
      case '=': { 
        if (this.state.question!=='') 
        { 
            var ans=''; 
              try
                { 
                    ans = eval(this.state.question); 
                } 
                catch(err) 
                { 
                    this.setState({answer: "Math Error"}); 
                } 
                if (ans===undefined) 
                    this.setState({answer: "Math Error"}); 
                else
                    this.setState({ answer: ans , question: ans});
                this.resultText.current.textContent = ans
                this.questionText.current.textContent = ans
                break; 
        } 
      } 
      default: { 
        this.setState({ question: this.state.question += value}) 
        this.resultText.current.textContent = this.state.question;
        break; 
      } 
    }
  } 
  render() {
    return (
    <>
      <h1 className="header">Gradient Calculator</h1>
      <div className="calculator">
        <div className="screen">
          <div className="screenContent">
              <p id="result"><span id="resultText" ref={this.questionText} >0</span></p>
              <p className="calculation"><span ref={this.resultText} id="calculationText"></span></p>
          </div>
        </div>

        <div className="numPad">
            <div id="clear" className="style clear circle" onMouseUp={this.handleMouseUp} onMouseDown={this.handleMouseDown} onClick={this.handleClear}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#eb3b5a"><path d="M17.573 1.848c.083.699-.476 1.152-1.182 1.152h-8.774c-.704 0-1.266-.452-1.182-1.156-1.329.281-4.435 1.159-4.435 2.516 0 .303.103.7.235 1.361 3.175 2.953 15.758 3.088 19.476.244.159-.824.289-1.278.289-1.611 0-1.333-3.091-2.223-4.427-2.506zm3.113 6.897c-.868 4.587-2.184 10.54-2.709 13.287-1.079 1.312-3.545 1.968-6.013 1.968s-4.935-.656-6.013-1.968c-.529-2.884-1.834-8.868-2.684-13.414 3.154 1.274 7.398 1.401 8.895 1.401 1.771 0 5.561-.151 8.524-1.274zm-13.069-6.763c.922 0 1.669-1.08 1.669-1.982h5.437c0 .902.747 1.982 1.668 1.982h-8.774z"/></svg>
            </div>
            <div id="division" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle ariOpeColor">/</div>
            <div id="multiplication" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle ariOpeColor">x</div>
            <div id="subtraction" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle ariOpeColor">-</div>
            <div id="num7" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">7</div>
            <div id="num8" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">8</div>
            <div id="num9" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">9</div>
            <div id="addition" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle ariOpeColor">+</div>
            <div id="num4" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">4</div>
            <div id="num5" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">5</div> 
            <div id="num6" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">6</div>
            <div id="num1" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">1</div>
            <div id="num2" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">2</div>
            <div id="num3" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">3</div>
            <div id="num0" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style zero">0</div>
            <div id="dot" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style circle numColor">.</div>
            <div id="equal" onClick={this.handleClick} onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} className="style equal">=</div>
        </div> 
      </div>
    </>
    )
  }
}
