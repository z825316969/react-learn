import React, {useState, useEffect} from 'react'

export default function FetchDemo(props) {
  const [bannerData, setBannerData] = useState([])

  useEffect(() => {
    // fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(data => {
    //     console.log('data', data)
    //   })
    postData('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php', {
      params: '我是params',
    }).then(data => {
      setBannerData(data.banner)
    })
  }, [])

  function postData(url, data) {
    return fetch(url, {
      body: JSON.stringify(data),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'user-agent': 'chrome',
        'content-type': 'application/json',
      },
      method: 'POST',
      mede: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    })
      .then(response => {
        // if(response.ok) (
        return response.json()
        // )
        // throw new Error('Network response was not ok.')
      })
      .catch(error => {
        console.log('There has been a problem with your fetch operation: ', error.message)
      })
  }

  return (
    <div>
      {bannerData.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </div>
  )
}
