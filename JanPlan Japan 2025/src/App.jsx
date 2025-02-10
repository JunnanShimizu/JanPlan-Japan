import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

const Card = () => {
  return (
    <section id="1-25-25" class="full-page">
      <div class="split-container">
          <div class="split-left">
              1-25-25
              <ul>
                  <li>Today is my last full day in Japan, and I leave tomorrow.</li>
                  <li>I woke up and took the morning slow. At around noon, we went to go fix the screen of the sliding windows in the bedroom. It was a fairly simple process where we laid the screen material and inserted a rubber ring around the edges to keep it in place, then cut the access.</li>
                  <li>Once we finished, we went to the mall with our bikes where we got kaitenzushi once again! I got a wide variety of things this time from sushi to oyster fry to clam chowder.</li>
                  <li>Next, we went to the Book Off across the street which had an even larger selection than the one I went to in Tokyo, but with our limited time, I did not buy any clothes even though there were likely a lot of great finds there. I did, however, buy some souvenirs there.</li>
                  <li>After, we went to Daiso. My dad got supplies and I got some more souvenirs.</li>
                  <li>Next, we made a quick stop at a super market to get some breakfast items for tomorrow.</li>
                  <li>Lastly, on our way back home, we stopped at one last store to get some more souvenirs.</li>
                  <li>Once returning home, we ate a late dinner because our lunch was both late and large.</li>
                  <li>I packed up most of my things, and luckily (I think) I am able to fit everything.</li>
              </ul>
          </div>
          <div class="slideshow-container split-right" id="ss-1-25-25">
              <div class="mySlides fade">
                  <img src="images/fixing screen door.JPG" alt="Fixing screen door" loading="lazy"/>
              </div>
              <div class="mySlides fade">
                  <img src="images/kaitenzushi2.JPG" alt="Kaitenzushi Saitama" loading="lazy"/>
              </div>
              <div class="mySlides fade">
                  <img src="images/kaitenzushi dessert.JPG" alt="Kaitenzushi Dessert" loading="lazy"/>
              </div>
              <div class="mySlides fade">
                  <img src="images/packed.JPG" alt="Packed" loading="lazy"/>
              </div>
              <a class="prev" onclick="plusSlides(-1, 26)">&#10094;</a>
              <a class="next" onclick="plusSlides(1, 26)">&#10095;</a>
          </div>
      </div>
  </section>
  );
}
 
const App = () => { 
  return (
    <div>
      <h2>Test</h2>
      <Card/>
      <Card/>
    </div>
  );
}
 
export default App;
