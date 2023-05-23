// import styled from "styled-components"
import './App.css';

import Header from "./Header/Header"
import MovieCompo from "./components/Moviecompo"
// import express from 'express';
// import bodyParser from 'body-parser';

// import usersRouters from './routes/movie.js';

// // 
// const app = express();
// // const port = 3000;



// app.use(bodyParser.json());

// app.use('/movie', usersRouters);

// app.get('/', (req, res) => {
//     console.log('[test]');
//     res.send("hello ab is the ")
// });


// 


function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* return<Container>ab</Container> */}
      <div className="Hero">      
      <MovieCompo/>
      <MovieCompo/>
      <MovieCompo/>
      <MovieCompo/>
      </div> 

    
     
    </div>
  );
}

export default App;
