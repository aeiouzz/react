import './App.css';
import Profile from './components/Profile';

function App() {
  return (
  <>
    <Profile img = "https://i.namu.wiki/i/pd27eixaetB71zYHeey9Yy5UwgEis6g2nvEsjjZADhzMqpMXKMlA3njxc5Tw7tWp9tevjnmKvkf21tK1oVNN9A.webp"
    name = "시나모롤"
    title = "프론트엔드 개발자"/>
    <Profile img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsnN7Yp6Ws2ZAuvw-zQDi-hcG2Au7YchK_SeB-q5ats8HE_lMpaZ-qixY6cg6CD1J8zI&usqp=CAU"
    name = "코리락쿠마"
    title = "백엔드 개발자"
    isNew = {true}/>
    <Profile img = "https://i.namu.wiki/i/FYS-Y7PwXKEYPVlmQpmkpqknU2GNMiUnw0JYGdUDm8H_hJYrUrCAbOIsonBQ8h3ABdDM76Y8-QJjycFWCntRvXeCmZa0xL0IeMAbQV15Vahj1fhF47ebN0rmiJ_MBrT0ka_QRGTTaxJP02siJb8BMA.webp"
    name = "케로피"
    title = "개구리"/>
  </>
  )
}
export default App;