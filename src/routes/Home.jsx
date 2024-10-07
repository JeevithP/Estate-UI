import SearchBar from '../components/searchBar/SearchBar'
import './Home.scss'

function Home(){
  return (
    <div className='home'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Final Dream Place</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio repellat sed commodi alias veniam fuga odio accusantium itaque nam nostrum, eum sequi eaque ab magni voluptas nobis iusto, cumque porro.</p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>16+ </h1>
                        <h2>Years Of Expereince</h2>
                    </div>
                    <div className="box">
                        <h1>200 </h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>2000+ </h1>
                        <h2>Properties ready</h2>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default Home