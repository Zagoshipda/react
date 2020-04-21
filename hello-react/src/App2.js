import React from 'react';

function App2(){
    // state = {
    //     curr : new Date().toLocaleTimeString()
    // }
    // componentDidMount(){
    //     setInterval(updateTime, 1000);
    // }

    let updateTime = () => {
        this.setState({
            curr : new Date().toLocaleTimeString()
        });
    }

    return (
        <div>
            <h1>It is {this.curr}. </h1>
        </div>
    );
}

// export default App2;
