import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/functions';
//import 'firebase/auth';
//import 'firebase/firestore';

// Initialize Firebase
if (!window.__fbApp) {
  window.__fbApp = firebase.initializeApp({
    apiKey: 'AIzaSyCFawebLNo9cjrWXsRLbtrrXgj7G_cR48s',
    authDomain: 'alexyork-firebase-serverless.firebaseapp.com',
    databaseURL: 'https://alexyork-firebase-serverless.firebaseio.com',
    projectId: 'alexyork-firebase-serverless',
    appId: '1:315534214947:web:cd3aba12f7aebd60'
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stuff: {}
    };
  }
  componentDidMount() {
    this.dbRef = firebase.database().ref('/stuff');
    //this.dbRef.on('value', (snapshot) => this.setState({ stuff: snapshot.val() || {} }));
  }
  componentWillUnmount() {
    //if (this.dbRef) this.dbRef.off();
  }
  addData() {
    this.dbRef.push({ date: new Date().toString() });
  }
  render() {
    return (
      <div className="container">
        <h1>Hello</h1>
        <div className="row">
          <div className="col-sm">
            <h2>Add some stuff:</h2>
            <button type="button" className="btn btn-primary" onClick={() => this.addData()}>Add stuff</button>
          </div>
          <div className="col-sm">
            <h2>Show the stuff:</h2>
            {Object.keys(this.state.stuff).map((key) =>
              <p key={key}>{this.state.stuff[key].date}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));