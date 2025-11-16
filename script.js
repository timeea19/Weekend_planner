const CITIES = [
  {name:'Cluj-Napoca, Romania', lat:46.7712, lon:23.6236},
  {name:'Sibiu, Romania', lat:45.7983, lon:24.1256},
  {name:'Brașov, Romania', lat:45.6580, lon:25.6012},
  {name:'Timișoara, Romania', lat:45.7537, lon:21.2257},
  {name:'Oradea, Romania', lat:47.0722, lon:21.9211},
  {name:'Sighișoara, Romania', lat:46.2191, lon:24.7924},
  {name:'Târgu Mureș, Romania', lat:46.5425, lon:24.5570},
  {name:'Tirana, Albania', lat:41.3275, lon:19.8189},
  {name:'Shkodër, Albania', lat:42.0683, lon:19.5126},
  {name:'Sarajevo, Bosnia and Herzegovina', lat:43.8563, lon:18.4131},
  {name:'Mostar, Bosnia and Herzegovina', lat:43.3438, lon:17.8078},
  {name:'Sofia, Bulgaria', lat:42.6977, lon:23.3219},
  {name:'Plovdiv, Bulgaria', lat:42.1354, lon:24.7453},
  {name:'Varna, Bulgaria', lat:43.2141, lon:27.9147},
  {name:'Zagreb, Croatia', lat:45.8150, lon:15.9819},
  {name:'Split, Croatia', lat:43.5081, lon:16.4402},
  {name:'Dubrovnik, Croatia', lat:42.6507, lon:18.0944},
  {name:'Pristina, Kosovo', lat:42.6629, lon:21.1655},
  {name:'Podgorica, Montenegro', lat:42.4410, lon:19.2627},
  {name:'Kotor, Montenegro', lat:42.4247, lon:18.7712},
  {name:'Skopje, North Macedonia', lat:41.9981, lon:21.4254},
  {name:'Ohrid, North Macedonia', lat:41.1172, lon:20.8016},
  {name:'Belgrade, Serbia', lat:44.8176, lon:20.4569},
  {name:'Novi Sad, Serbia', lat:45.2671, lon:19.8335},
  {name:'Niš, Serbia', lat:43.3209, lon:21.8958},
  {name:'Ljubljana, Slovenia', lat:46.0569, lon:14.5058},
  {name:'Maribor, Slovenia', lat:46.5547, lon:15.6459},
];

const ACTIVITY_BY_TEMP = [
  { max: 9, label: 'cold', ideas: ['Visit a cozy cafe or thermal spa', 'City walking tour with warm stops', 'Museum or indoor cultural site'] },
  { max: 17, label: 'mild', ideas: ['Hiking or nature walk', 'Bike rental and riverside ride', 'Outdoor market and local food tasting'] },
  { max: 100, label: 'warm', ideas: ['Scenic drive and viewpoints','Vineyard or local winery visit', 'Picnic in a park'] }
];

const CITY_ACTIVITIES = {
  'Târgu Mureș, Romania': ['Explore Palace of Culture 🏛️', 'Stroll the Garden of Roses 🌹', 'Short countryside drives to scenic viewpoints 🚗'],
  'Cluj-Napoca, Romania': ['Stroll Union Square and cafes ☕️', 'Visit Botanical Garden 🌿', 'Short drive to Turda Salt Mine 🏞️'],
  'Sibiu, Romania': ['Walk the old town and Bridge of Lies 🏘️', 'Hike the nearby Cindrel hills ⛰️', 'Visit ASTRA Open-Air Ethnographic Museum 🧭'],
  'Brașov, Romania': ['Cable car to Tampa for city views 🚡', 'Explore Council Square and Black Church ⛪️', 'Day hike in Piatra Craiului National Park 🥾'],
  'Timișoara, Romania': ['Discover colorful squares and street art 🎨', 'Relax in Botanical Park 🌳', 'Try local cuisine at the Victory Square markets 🍽️'],
  'Oradea, Romania': ['See Art Nouveau architecture 🏛️', 'Relax in Băile Felix thermal baths ♨️', 'Cycle the Crișul Repede river trail 🚴‍♀️'],
  'Sighișoara, Romania': ['Walk the medieval citadel and towers 🏰', 'Visit the birthplace of Vlad Țepeș museum 🗺️', 'Enjoy a craft bakery and local restaurants 🥐'],
  'Tirana, Albania': ['Ride the Dajti Ekspres cable car 🚠', 'Explore local bazaars and Skanderbeg Square 🛍️', 'Visit BunkArt museum for contemporary history 🏛️'],
  'Shkodër, Albania': ['Walk beside Lake Shkodra 🌊', 'Visit Rozafa Castle for panoramas 🏯', 'Kayak or boat on the lake if weather allows 🛶'],
  'Sarajevo, Bosnia and Herzegovina': ['Take a historic walking tour of Baščaršija 🚶‍♀️', 'Visit tunnel museum and WWII sites 🕰️', 'Try traditional Bosnian coffee and burek ☕️'],
  'Mostar, Bosnia and Herzegovina': ['Watch the Old Bridge divers 🌉', 'Wander Ottoman bazaars 🛍️', 'Day trip to nearby waterfalls and hiking trails 🌿'],
  'Sofia, Bulgaria': ['Visit Vitosha mountain for short hikes ⛰️', 'Relax in a mineral spa nearby ♨️', 'Explore Alexander Nevsky Cathedral and museums ⛪️'],
  'Plovdiv, Bulgaria': ['Stroll the Roman theatre and Old Town 🏛️', 'Visit Kapana arts district 🎨', 'Try wine tasting at a local cellar 🍷'],
  'Varna, Bulgaria': ['Sea garden promenade and seaside parks 🌳', 'Visit Varna Archaeological Museum 🏺', 'Coastal lighthouse viewpoints and seafood markets 🦪'],
  'Zagreb, Croatia': ['Wander Upper Town and museums 🏘️', 'Explore Maksimir Park 🌲', 'Visit Dolac market and try local pastries 🥐'],
  'Split, Croatia': ['Walk Diocletian s Palace and Riva 🏛️', 'Day boat or coastal drive to nearby islands 🚤', 'Taste local konoba dishes and olive oil tours 🍽️'],
  'Dubrovnik, Croatia': ['Walk the city walls 🧱', 'Kayak or boat around Lokrum and nearby coves 🛶', 'Take the cable car for sunset views 🚡'],
  'Pristina, Kosovo': ['Visit NewBorn monument and local markets 🛍️', 'Explore ethnographic museums 🏛️', 'Day trips to Rugova Gorge for nature walks 🌄'],
  'Podgorica, Montenegro': ['Stroll the Morača river promenade 🚶‍♀️', 'Short drives to Skadar Lake national park 🚗', 'Visit old town and local wine bars 🍷'],
  'Kotor, Montenegro': ['Boat tour of the Bay of Kotor ⛵️', 'Climb the fortress for panoramic views 🧗‍♂️', 'Explore medieval old town alleys 🏘️'],
  'Skopje, North Macedonia': ['Visit Kale Fortress and Old Bazaar 🏰', 'Take a day trip to Matka Canyon 🚣‍♂️', 'Try local taverns with traditional cuisine 🍲'],
  'Ohrid, North Macedonia': ['Walk Ohrid lakeside and old town 🌅', 'Boat trip on Lake Ohrid or lakeside picnic 🛶', 'Visit historic churches and Bay of Bones museum ⛪️'],
  'Belgrade, Serbia': ['Stroll Kalemegdan Park and fortress 🌳', 'Enjoy riverside splavovi (cafes) and nightlife 🎶', 'Visit museums and bohemian Skadarlija street 🖼️'],
  'Novi Sad, Serbia': ['Walk Petrovaradin Fortress 🏰', 'Visit charming Dunavska street and cafes ☕️', 'Attend local markets and galleries 🛍️'],
  'Niš, Serbia': ['See Niš Fortress and Skull Tower 🏰', 'Day trip to Mediana archaeological site 🗺️', 'Try hearty local grill restaurants 🍖'],
  'Ljubljana, Slovenia': ['Wander the riverside old town and triple bridge 🌉', 'Visit Ljubljana Castle for views 🏰', 'Bike the greenbelt or nearby lakes 🚴‍♀️'],
  'Maribor, Slovenia': ['Visit Lent district and Drava riverbank 🌊', 'Tour nearby vineyards and wine cellars 🍇', 'Hike or bike in Pohorje hills 🚵‍♀️']
};

const originSelect = document.getElementById('originSelect');
let originFromGeo = null; 

CITIES.forEach((c, i) => {
  const opt = document.createElement('option');
  opt.value = String(i);
  opt.textContent = c.name;
  originSelect.appendChild(opt);
});

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    pos => {
      originFromGeo = { lat: pos.coords.latitude, lon: pos.coords.longitude, name: 'Your location' };
      if (originSelect.value === 'geo') {
        showStatus(`Using your location as origin (approx).`, false);
        setTimeout(clearStatus, 1200);
      }
    },
    err => {
      console.warn('Geolocation unavailable', err);
    },
    { timeout: 10000 }
  );
}

function resolveOrigin() {
  const sel = originSelect.value;
  if (sel === 'geo' && originFromGeo) {
    return originFromGeo;
  }
  if (sel === 'geo' && !originFromGeo) {
    return CITIES[0];
  }
  const idx = parseInt(sel, 10);
  if (!Number.isNaN(idx) && CITIES[idx]) return CITIES[idx];
  return CITIES[0];
}

function getTempBucket(temp) {
  for (const b of ACTIVITY_BY_TEMP) {
    if (temp <= b.max) return b;
  }
  return ACTIVITY_BY_TEMP[ACTIVITY_BY_TEMP.length - 1];
}

function getActivitiesForCity(temp, cityName, maxItems = 3) {
  const bucket = getTempBucket(temp);
  const ideas = [...bucket.ideas];
  if (CITY_ACTIVITIES[cityName]) {
    ideas.unshift(...CITY_ACTIVITIES[cityName]);
  }
  const dedup = [];
  for (const it of ideas) {
    if (!dedup.includes(it)) dedup.push(it);
    if (dedup.length >= maxItems) break;
  }
  return dedup;
}

const dateInput = document.getElementById('date');
const statusEl = document.getElementById('status');
const resultsEl = document.getElementById('results');
const form = document.getElementById('tripForm');
const searchBtn = document.getElementById('searchBtn');
const showAllBtnWrapper = document.getElementById('showAllBtnWrapper');
const showAllBtn = document.getElementById('showAllBtn');

function formatYMD(d){ return d.toISOString().slice(0,10); }
(function initDate(){
  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 15);
  dateInput.min = formatYMD(today);
  dateInput.max = formatYMD(maxDate);
  dateInput.value = formatYMD(today);
})();

function showStatus(html, busy=false){
  statusEl.style.display = 'block';
  statusEl.innerHTML = busy ? `<span class="loader"></span>${html}` : html;
}
function clearStatus(){ statusEl.style.display='none'; statusEl.innerHTML=''; }
function clearResults(){ resultsEl.innerHTML=''; }

function haversine(lat1, lon1, lat2, lon2){
  const toRad = v => v * Math.PI / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon/2)**2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

async function fetchDailyForCity(city, startDate, endDate){
  const tz = 'Europe/Bucharest';
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&daily=temperature_2m_max&timezone=${encodeURIComponent(tz)}&start_date=${startDate}&end_date=${endDate}`;
  const res = await fetch(url);
  if(!res.ok){
    const txt = await res.text();
    throw new Error(`Open-Meteo error ${res.status}: ${txt}`);
  }
  return res.json();
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  clearResults();
  clearStatus();
  showAllBtnWrapper.style.display = 'none';
  showAllBtn.onclick = null;

  const chosenDate = dateInput.value; 
  const minTemp = parseFloat(document.getElementById('minTemp').value);
  const radiusKm = parseInt(document.getElementById('radius').value, 10);

  showStatus('Searching for suitable cities...', true);
  searchBtn.disabled = true;

  try {
    const matches = [];
    const batchSize = 3;
    for(let i=0;i<CITIES.length;i+=batchSize){
      const batch = CITIES.slice(i,i+batchSize);
      const promises = batch.map(city =>
        fetchDailyForCity(city, chosenDate, chosenDate)
          .then(data => ({city, data}))
          .catch(err => ({city, err}))
      );
      const results = await Promise.all(promises);

      for(const item of results){
        if(item.err){
          console.warn('City fetch error', item.city.name, item.err);
          continue;
        }
        const { city, data } = item;
        const dates = data.daily && data.daily.time ? data.daily.time : [];
        const idx = dates.indexOf(chosenDate);
        if (idx === -1) continue;

        const tempMax = data.daily.temperature_2m_max ? data.daily.temperature_2m_max[idx] : null;
        if (tempMax == null) continue;

        if (tempMax >= minTemp) {
          matches.push({
            city: city.name,
            temp: Math.round(tempMax),
            lat: city.lat,
            lon: city.lon
          });
        }
      }
    }

    if(matches.length === 0){
      showStatus(`No cities found with at least ${minTemp}°C on ${chosenDate}. Try lowering the minimum or picking a different date.`);
    } else {
      clearStatus();
      matches.sort((a,b)=> b.temp - a.temp);
      const origin = resolveOrigin();
      const originLabel = origin.name || `${origin.lat.toFixed(3)},${origin.lon.toFixed(3)}`;
      showStatus(`Searching for cities within ${radiusKm} km of ${originLabel}...`, true);

      const noLimit = radiusKm >= 2000;
      const filtered = matches.filter(m => {
        if (noLimit) return true;
        const d = haversine(origin.lat, origin.lon, m.lat, m.lon);
        return d <= radiusKm;
      });

      const finalList = filtered.length ? filtered : matches;
      finalList.sort((a,b) => b.temp - a.temp);
      const previewList = finalList.slice(0, 8);

      previewList.forEach(m => {
        const card = document.createElement('div');
        card.className = 'city';
        const ideas = getActivitiesForCity(m.temp, m.city, 3);
        card.innerHTML = `
          <strong>${m.city}</strong>
          <div class="muted">Max temp: <strong>${m.temp}°C</strong></div>
          <div style="margin-top:8px">
            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=${m.lat},${m.lon}">Open map</a>
          </div>
          <div style="margin-top:8px">
            <button class="toggle-ideas" type="button">Ideas ▾</button>
          </div>
          <ul class="activity-list" hidden>
            ${ideas.map(i => `<li>${i}</li>`).join('')}
          </ul>`;
        resultsEl.appendChild(card);

        const toggle = card.querySelector('.toggle-ideas');
        const list = card.querySelector('.activity-list');
        if (toggle && list) {
          toggle.addEventListener('click', () => {
            const wasHidden = list.hasAttribute('hidden');
            if (wasHidden) {
              list.removeAttribute('hidden');
              toggle.textContent = 'Ideas ▴';
            } else {
              list.setAttribute('hidden', '');
              toggle.textContent = 'Ideas ▾';
            }
          });
        }
      });

      showStatus(`Found ${finalList.length} matching city/cities, origin: ${originLabel}. Showing ${previewList.length}.`);

      if (finalList.length > previewList.length) {
        showAllBtnWrapper.style.display = 'block';
        showAllBtn.onclick = () => {
          resultsEl.innerHTML = '';
          finalList.forEach(m => {
            const card = document.createElement('div');
            card.className = 'city';
            const ideas = getActivitiesForCity(m.temp, m.city, 3);
            card.innerHTML = `
              <strong>${m.city}</strong>
              <div class="muted">Max temp: <strong>${m.temp}°C</strong></div>
              <div style="margin-top:8px">
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=${m.lat},${m.lon}">Open map</a>
              </div>
              <div style="margin-top:8px">
                <button class="toggle-ideas" type="button">Ideas ▾</button>
              </div>
              <ul class="activity-list" hidden>
                ${ideas.map(i => `<li>${i}</li>`).join('')}
              </ul>`;
            resultsEl.appendChild(card);

            const toggle = card.querySelector('.toggle-ideas');
            const list = card.querySelector('.activity-list');
            if (toggle && list) {
              toggle.addEventListener('click', () => {
                const wasHidden = list.hasAttribute('hidden');
                if (wasHidden) {
                  list.removeAttribute('hidden');
                  toggle.textContent = 'Ideas ▴';
                } else {
                  list.setAttribute('hidden', '');
                  toggle.textContent = 'Ideas ▾';
                }
              });
            }
          });
          showAllBtnWrapper.style.display = 'none';
          showStatus(`Showing all ${finalList.length} matching cities (origin: ${originLabel}).`);
        };
      } else {
        showAllBtnWrapper.style.display = 'none';
      }

    }
  } catch(err){
    console.error(err);
    showStatus('An error occurred while fetching weather data. Check console for details.');
  } finally {
    searchBtn.disabled = false;
  }
});