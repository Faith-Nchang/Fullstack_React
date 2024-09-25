
import { useState } from 'react'
import './App.css'
import './index.css';

import Event from './components/Event'

function App() {

  const eventList = [
    {
      image: "https://th.bing.com/th/id/OIP.aGrs1F1kY-OLiQdheowMmQAAAA?rs=1&pid=ImgDetMain",
      name: "Web Summit 2024",
      country: "Portugal",
      date: "November 4-7, 2024",
      link: "https://websummit.com"
    },
    {
      image: "https://th.bing.com/th/id/OIP.44lGA0vVUjwhiz7EqwEA-wHaD4?rs=1&pid=ImgDetMain",
      name: "PyCon US 2024",
      country: "USA",
      date: "April 17-25, 2024",
      link: "https://us.pycon.org/2024/"
    },
    {
      image: "https://assets.hardwarezone.com/img/2024/05/google-io-2024-header.jpg",
      name: "Google I/O 2024",
      country: "USA",
      date: "May 2024 (Dates TBA)",
      link: "https://io.google/2024/"
    },
    {
      image: "https://th.bing.com/th/id/OIP.ogPEpTS8MQWNNA-dHv9EewHaD4?rs=1&pid=ImgDetMain",
      name: "GitHub Universe 2024",
      country: "USA",
      date: "October 9-10, 2024",
      link: "https://githubuniverse.com/"
    },
    {
      image: "https://th.bing.com/th/id/OIF.0tFhFKfoX9a8qCiRmhuH2Q?rs=1&pid=ImgDetMain",
      name: "Apple WWDC 2024",
      country: "USA",
      date: "June 2024 (Dates TBA)",
      link: "https://developer.apple.com/wwdc24/"
    },
    {
      image: "https://th.bing.com/th/id/OIP.gM8wj-jL600lzlKkzy1IHgHaEO?rs=1&pid=ImgDetMain",
      name: "Microsoft Build 2024",
      country: "USA",
      date: "May 2024 (Dates TBA)",
      link: "https://www.microsoft.com/en-us/build"
    },
    {
      image: "https://th.bing.com/th/id/OIP.Qe-CbB4PztqdJic_aYW1ygAAAA?rs=1&pid=ImgDetMain",
      name: "React Summit 2024",
      country: "Netherlands",
      date: "April 19, 2024",
      link: "https://reactsummit.com/"
    },
    {
      image: "https://th.bing.com/th/id/OIP.8tF3Hh-ixS8ERZI60xlWmQHaDt?rs=1&pid=ImgDetMain",
      name: "DEF CON 32",
      country: "USA",
      date: "August 8-11, 2024",
      link: "https://defcon.org/"
    },
    {
      image: "https://th.bing.com/th/id/OIP.jC0sE0dHZ0FkQxkDx2aTTAHaEK?rs=1&pid=ImgDetMain",
      name: "ETHGlobal Hackathons",
      country: "Various",
      date: "Multiple Dates",
      link: "https://ethglobal.com/"
    },
    {
      image: "https://th.bing.com/th/id/OIP.xTC9IKdDFGZgzFgeqxRlcwHaFD?rs=1&pid=ImgDetMain",
      name: "JSConf EU 2024",
      country: "Germany",
      date: "June 6-8, 2024",
      link: "https://jsconf.eu/"
    },
    {
      image: "https://i.ytimg.com/vi/bK3Xc9INJ00/maxresdefault.jpg",
      name: "TEDx San Francisco",
      country: "USA",
      date: "October 2024 (Exact Date TBA)",
      link: "https://www.tedxsanfrancisco.com/"
    },
    {
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa96e4149607053.62fe703e2b893.jpg",
      name: "O'Reilly Software Architecture Conference",
      country: "USA",
      date: "April 8-11, 2024",
      link: "https://www.oreilly.com/conferences/"
    },
    {
      image: "https://artandlogic.com/wp-content/uploads/2019/01/Strange_Loop.jpg",
      name: "Strange Loop Conference",
      country: "USA",
      date: "September 12-14, 2024",
      link: "https://www.thestrangeloop.com/"
    },
    {
      image: "https://www.moogsoft.com/wp-content/uploads/2022/11/KubeCon.png",
      name: "KubeCon + CloudNativeCon",
      country: "Spain",
      date: "March 18-22, 2024",
      link: "https://kubecon.io/"
    },
    {
      image: "https://cdn.vox-cdn.com/thumbor/I9b7hgVOg2E3GT1bzeV3B241wMo=/0x0:8256x5504/2000x1333/filters:focal(4128x2752:4129x2753)/cdn.vox-cdn.com/uploads/chorus_asset/file/25065879/Sam_Altman_keynote_OpenAI_DevDay.jpg",
      name: "OpenAI Dev Day",
      country: "USA",
      date: "November 6, 2024",
      link: "https://openai.com/devday"
    }
  ];

  const [events, setEvents] = useState(eventList);
  
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Developers Community Board</h1>
          <p>Find and share events and resources with your community!</p>
          <a href="#events" className="hero-button">Explore Events</a>
        </div>
      </section>
      
      <section id="events" className="events-section">
       
        
        <div className="event-container">
          {events.map((event, index) => (
            <div key={index} className="events">
              <Event 
                image={event.image} 
                name={event.name} 
                country={event.country} 
                link={event.link} 
                date={event.date} 
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default App
