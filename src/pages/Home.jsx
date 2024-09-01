import React from 'react'
import CardSection from '../components/CardSection'

const Home = () => {
  const cardata = 
  [
    {
      vid: "/27_EVA_Arise_16x9_b475128e2f.mp4",
      title: "POLARIS DAWN",
      desc: "LEARN MORE",
      status: "UPCOMING LAUNCH"
    },
    {
      img: "/1.jpeg",
      title: "TRANSPORTER-11 MISSION",
      desc: "WATCH",
      status: "UPCOMING LAUNCH"
    },
    {
      img: "/2.jpeg",
      title: "MAXAR 2 MISSION",
      desc: "REWATCH",
      status: "RECENT LAUNCH"
    },
    {
      img: "/3.jpeg",
      title: "STARLINK MISSION",
      desc: "REWATCH",
      status: "RECENT LAUNCH"
    },
    {
      img: "/4.jpeg",
      title: "ASBM MISSION",
      desc: "REWATCH",
      status: "RECENT LAUNCH"
    },
    {
      img: "/5.jpeg",
      title: "ADVANCING HUMAN SPACEFLIGHT",
      desc: "LEARN MORE",
      status: ""
    },
    {
      img: "/6.jpeg",
      title: "TO MAKE LIFE MULTIPLANETARY",
      desc: "LEARN MORE",
      status: ""
    }
  
  ]

  return (
    <>
      <CardSection vid={cardata[0].vid} title={cardata[0].title} desc={cardata[0].desc} status={cardata[0].status} />
      <CardSection img={cardata[1].img} title={cardata[1].title} desc={cardata[1].desc} status={cardata[1].status} />
      <CardSection img={cardata[2].img} title={cardata[2].title} desc={cardata[2].desc} status={cardata[2].status} />
      <CardSection img={cardata[3].img} title={cardata[3].title} desc={cardata[3].desc} status={cardata[3].status} />
      <CardSection img={cardata[4].img} title={cardata[4].title} desc={cardata[4].desc} status={cardata[4].status} />
      <CardSection img={cardata[5].img} title={cardata[5].title} desc={cardata[5].desc} status={cardata[5].status} />
      <CardSection img={cardata[6].img} title={cardata[6].title} desc={cardata[6].desc} status={cardata[6].status} />
    </>
  )
}

export default Home