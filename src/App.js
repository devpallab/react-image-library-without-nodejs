//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter } from 'react-router-dom';
import  ImgGalLayout  from './components/ImgGalLayout/ImgGalLayout';
import ImgurAppBrowser from './containers/ImgurBrowser/ImgurAppBrowser';
function App() {
  return (
    <BrowserRouter>
        <div>
          <ImgGalLayout> 
            <ImgurAppBrowser></ImgurAppBrowser>
          </ImgGalLayout>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
