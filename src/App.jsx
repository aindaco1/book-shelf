import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div><Header /><br /><Comics /></div>
  )
}

function Comics() {
  const [open, setOpen] = useState(false);
  const backendData = [
    { title: "Crisis Zone", imgsrc: "https://m.media-amazon.com/images/I/71fwtFKTRGL.jpg", backimgsrc:"https://comicvine.gamespot.com/a/uploads/scale_large/6/67663/8094668-01-back.jpg", url: "https://www.amazon.com/Crisis-Zone-Simon-Hanselmann/dp/1683964446" },
    { title: "One More Year", imgsrc: "https://m.media-amazon.com/images/I/81XmOigR6gL.jpg", backimgsrc:"https://i.pinimg.com/originals/c7/5d/1a/c75d1ab29741cf0757fe6455e69d9823.png", url: "https://www.amazon.com/One-More-Year-Simon-Hanselmann/dp/1606999974" },
    { title: "Bad Gateway", imgsrc: "https://m.media-amazon.com/images/I/81TpuLUEqvL.jpg", backimgsrc:"https://2.bp.blogspot.com/uZHHYOXmOkT54YGOUqS9a2mY0Dyiq8vYn0J2yjQymsrsWwM1CeU2uzHRUgeGcOhqTrabMfStdK5Osqla2hb_yT1qCJjRxMyDUI92nXBWDfv7AXy5IbBgNntUkFA5EdbFLTBTdfTegw=s1600", url: "https://www.amazon.com/Bad-Gateway-Simon-Hanselmann/dp/1683962079" },
    { title: "Asterios Polyp", imgsrc: "https://m.media-amazon.com/images/I/81ozSbd6ByL.jpg", backimgsrc:"https://www.bedetheque.com/media/Versos/Verso_105105.jpg", url: "https://www.amazon.com/Asterios-Polyp-Pantheon-Graphic-Library/dp/0307377326" },
    { title: "You Will Own Nothing And You Will Be Happy", imgsrc: "https://s3.amazonaws.com/comicgeeks/comics/covers/large-7961645.jpg", backimgsrc:"https://i.ebayimg.com/images/g/TzIAAOSwp8Bkd4HZ/s-l1600.jpg", url: "https://meggandmogg.com/products/you-will-own-nothing-and-you-will-be-happy-1" },
    { title: "Gigant, Vol. 1", imgsrc: "https://prodimage.images-bn.com/pimages/9781645052944_p0_v2_s600x595.jpg", backimgsrc:"https://www.rightstufanime.com/images/productImages/9781645052944_manga-gigant-volume-1-back.jpg", url: "https://www.barnesandnoble.com/w/gigant-vol-1-hiroya-oku/1132607634" },
    { title: "Two Brothers", backimgsrc:"https://i.pinimg.com/736x/7a/44/c2/7a44c2b3a5c1e92b2a004d49d5bfa102--fabio-moon-manga-art.jpg", imgsrc: "https://m.media-amazon.com/images/I/91n4Sjs6hiL.jpg", url: "https://www.amazon.com/Two-Brothers-Gabriel-B%C3%A1/dp/1616558563" },
    { title: "Red Room: The Antisocial Network", backimgsrc:"https://m.media-amazon.com/images/I/A1lrhKuLm1L.jpg", imgsrc: "https://comicsnake.com/uploads/posts/2021-07/1627480383_cover.jpg", url: "https://www.amazon.com/Red-Room-Antisocial-Ed-Piskor/dp/1683964683" },
    { title: "The Adventures of Jimmy Corrigan, The Smartest Kid on Earth", backimgsrc:"https://imgv2-1-f.scribdassets.com/img/document/261393636/original/2598b896bf/1571534096", imgsrc: "https://chipkidd.com/home/wp-content/uploads/2015/01/cover-chris-ware-jimmy-corrigan-the-smartest-kid-on-earth-book.jpg", url: "https://www.amazon.com/Jimmy-Corrigan-Smartest-Pantheon-Graphic/dp/0375714545" }
  ]

  return (
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {backendData.map(ele => 
        <div class="group bg-cover bg-no-repeat bg-right bg-black image-border transition-transform duration-200 ease-in-out transform hover:rotate-1">
          <a href={ele.url} target="_blank">
            <img class="bg-black bg-fixed group-hover:hidden" src={ele.imgsrc} title={ele.title}></img>
            <img class="bg-black bg-fixed hidden group-hover:block" src={ele.backimgsrc} title={ele.title}></img>
          </a>
        </div>
      )}
    </div>
  )
}

function Header() {
  return (
    <h1>Comics I've read in the last few years</h1>
  )
}

export default App
