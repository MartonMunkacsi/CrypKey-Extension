function fetchData() {
  const text = document.querySelector('article').innerText;
  const url = window.location.href;

  return {
    text: text,
    url: url
  }
}

function sendData(data) {
  const url = 'https://detect-fake-news-api-ztj5atks2q-ew.a.run.app/predict_cloud';
  fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "author": "Fake News Team",
      "content": `${data.text}`,
      "url": `${data.url}`
    })
  }).then(res => res.json()).then(data => {console.log(data);
  })
}

sendData(fetchData());
