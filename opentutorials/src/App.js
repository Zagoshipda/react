import React, { Component } from 'react';
import logo from './logo.svg';
import Content from './components/Content'
import Control from './components/Control';
import CreateContent from './components/CreateContent';
// import Default from './components/default'
import ReadContent from './components/ReadContent'
import Subject from './components/Subject'
import TOC from './components/TOC'
// import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    // this may NOT influence on UI so put it ouside of state.
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:3,
      welcome:{title:'Welcome', desc:'Hello, React...!!'},
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'create'){
      _article = <CreateContent
        onSubmit={
          function(_title, _desc){
            this.max_content_id = this.max_content_id + 1;
            // (1)
            // this.state.contents.push(
            //   {id:this.max_content_id, title:_title, desc:_desc}
            // );
            // (2) use concat(a new one) rather than push(change original).
            var _contents = this.state.contents.concat(
              {id:this.max_content_id, title:_title, desc:_desc}
            );
            // (3) (use replica) if object, use Object.assign({}, var).
            // var newContents = Array.from(this.state.contents);
            // newContents.push(
            //   {id:this.max_content_id, title:_title, desc:_desc}
            // );
            this.setState({
              contents:_contents
            });
            console.log(_title, _desc);
          }.bind(this)
        }
      ></CreateContent>
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={
            function(){
              this.setState({
                mode:'welcome'
              });
            }.bind(this)
          }
        >
        </Subject>

        <TOC
          onChangePage={
            function(id){
              this.setState({
                mode:'read',
                selected_content_id:Number(id)
              });
            }.bind(this)
          }
          data={this.state.contents}
        >
        </TOC>

        <Control
          onChangeMode={
            function(_mode){
              this.setState({
                mode:_mode
              })
            }.bind(this)
          }
        >

        </Control>

        {_article}

      </div>
    );
  }
}

export default App;
