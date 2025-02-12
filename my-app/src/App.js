
import './App.css';
import TopBar from './Commponents/TopBar';
import Header from './Commponents/Header';
import ProductCarousel from './Commponents/ProductCarousel';
import CategorySection from './Commponents/CategorySection';
import KidsSection from './Commponents/KidsSection';
import FooterSection from './Commponents/FooterSection'
import ExploreSection from './Commponents/ExploreSection';


function App() {
  return (
    <div className="App">
        <TopBar />
        <Header />
        <ProductCarousel/>
        <CategorySection/>
        <KidsSection/>
        <ExploreSection/>
        <FooterSection/>
    </div>
  );
}

export default App;
