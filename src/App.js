import { Header, LandingPage, Topics, Svgs ,AboutPage, ProblemsPage , Login  , ProfilePage , ErrorPage, AdminPage} from './components';
import './styles/Additional/App.css';
import './styles/Additional/mediaQueries.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios';

function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(true);
  const [data , setData] = useState([]);


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/login/success`, { withCredentials: true })
      .then(res => {
        if (res.data.success) {
          setUser(res.data.user); 
          setIsUserLoggedIn(true);
          // setTheme(data.user.theme);
          setData(res.data.user.data);
        }else{
          setIsUserLoggedIn(false);
          setUser(null);
          window.alert('Please Login to continue');
        }
      })
      .catch(err => {
        console.log(err);
      })


  }, []);



  return (

    <Router>
      <Routes>
        <Route path="/" element={
        
        <div className="App">
          <Svgs theme={theme} />
          <Header theme={theme}  isUserLoggedIn={isUserLoggedIn} />
          <LandingPage theme={theme} />
          {/* <ThemeButton theme={theme} setTheme={setTheme} /> */}

          
          
        </div>} />

        <Route path="/login" element={<Login theme={theme} setTheme={setTheme}  isUserLoggedIn={isUserLoggedIn} />} />
        
        <Route path="/admin" element={<AdminPage theme={theme} setTheme={setTheme}   />}/>

        <Route path="/about" element={<AboutPage theme={theme} setTheme={setTheme} />} />
        <Route path="/profile" element={<ProfilePage theme={theme} setTheme={setTheme} page={'profile'} />} />
        <Route path="/topics" element={<Topics theme={theme} setTheme={setTheme} page={'topics'} />} />
        <Route path='/topics/array' element={<ProblemsPage theme={theme} setTheme={setTheme}  position={0} />}  />
        <Route path='/topics/matrix' element={<ProblemsPage theme={theme} setTheme={setTheme}   position={1}  />  } />
        <Route path='/topics/string' element={<ProblemsPage theme={theme} setTheme={setTheme} position={2}  />  } />
        <Route path='/topics/search_sort' element={<ProblemsPage theme={theme} setTheme={setTheme}  position={3}  />} />
        <Route path='/topics/linked_list' element={<ProblemsPage theme={theme} setTheme={setTheme}  position={4}  />} />
        <Route path='/topics/binary_tree' element={<ProblemsPage theme={theme} setTheme={setTheme} position={5}  />} />
        <Route path='/topics/bst' element={<ProblemsPage theme={theme} setTheme={setTheme}  position={6}  /> } />
        <Route path='/topics/greedy' element={<ProblemsPage theme={theme} setTheme={setTheme}  position={7}  />} />
        <Route path='/topics/backtracking' element={<ProblemsPage theme={theme} setTheme={setTheme} position={8}  />} />
        <Route path='/topics/stacks_queues' element={<ProblemsPage theme={theme} setTheme={setTheme} position={9}  />} />
        <Route path='/topics/heap' element={<ProblemsPage theme={theme} setTheme={setTheme} position={10}  />} />
        <Route path='/topics/graph' element={<ProblemsPage theme={theme} setTheme={setTheme} position={11}  />} />
        <Route path='/topics/trie' element={<ProblemsPage theme={theme} setTheme={setTheme} position={12}  />} />
        <Route path='/topics/dynamic_programming' element={<ProblemsPage theme={theme} setTheme={setTheme} position={13}  />} />
        <Route path='/topics/bit_manipulation' element={<ProblemsPage theme={theme} setTheme={setTheme} position={14}  />} />
        <Route path="/*" element={<ErrorPage/>} />


      </Routes>
    </Router>


  );
}

export default App;
