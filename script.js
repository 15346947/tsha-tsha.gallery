let data = [];

window.onload = async () => {
  const res = await fetch('data/tsha-data.json');
  data = await res.json();
  renderGallery();
  
  document.getElementById('drawBtn').onclick = showRandomTsha;
  document.getElementById('closeBtn').onclick = () => {
    document.getElementById('popup').style.display = 'none';
  };
};

function renderGallery() {
  const gallery = document.getElementById('gallery');
  data.forEach((item) => {
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.onclick = () => showTsha(item);
    gallery.appendChild(img);
  });
}

function showRandomTsha() {
  const index = Math.floor(Math.random() * data.length);
  showTsha(data[index]);
}

function showTsha(item) {
  document.getElementById('popupImg').src = item.image;
  document.getElementById('popupName').textContent = item.name;
  document.getElementById('popupMeaning').textContent = "象征意义：" + item.meaning;
  document.getElementById('popupPrayer').textContent = "祈愿：" + item.prayer;
  document.getElementById('popup').style.display = 'block';
}
