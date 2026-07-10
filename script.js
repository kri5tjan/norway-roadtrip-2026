<!doctype html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#17392f" />
    <meta
      name="description"
      content="Den delbare reiseplanen for Norges-roadtripen 13.–26. juli 2026 – med dagsetapper, aktiviteter, overnatting og levende værprognoser."
    />
    <meta property="og:title" content="Norges-roadtripen 2026" />
    <meta
      property="og:description"
      content="Drammen → Vestlandet → Trondheim → Gaula. Hele turen på én side."
    />
    <meta property="og:type" content="website" />
    <title>Norges-roadtripen 2026</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js" defer></script>
  </head>

  <body>
    <a class="skip-link" href="#reiseplan">Hopp til reiseplanen</a>

    <header class="site-header">
      <a class="brand" href="#top" aria-label="Til toppen">
        <span class="brand-mark">N</span>
        <span>Roadtrip ’26</span>
      </a>

      <nav class="nav-links" aria-label="Hovedmeny">
        <a href="#reiseplan">Dagene</a>
        <a href="#gaula">Gaula</a>
        <a href="#praktisk">Praktisk</a>
      </nav>

      <button class="share-button button button-small" type="button" data-share>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 3v12m0-12 4.5 4.5M12 3 7.5 7.5M5 13v6h14v-6" />
        </svg>
        <span>Del turen</span>
      </button>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-noise" aria-hidden="true"></div>

        <div class="hero-content">
          <p class="eyebrow">13.–26. juli 2026 · Norge</p>
          <h1 id="hero-title">Vestlandet.<br />Fjellveier.<br /><em>Lakseelva.</em></h1>
          <p class="hero-intro">
            Seks dager fra Drammen til Trondheim – via fjorder, fosser og fjell – før åtte dager ved Gaula.
            Alt reisefølget trenger, samlet på én side.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#reiseplan">Se dag for dag</a>
            <a
              class="button button-ghost"
              href="https://www.google.com/maps/dir/Drammen/Eidfjord/Aurland/Lom/Geiranger/Valldal/%C3%85ndalsnes/Trondheim/Ler"
              target="_blank"
              rel="noreferrer"
            >
              Åpne hovedruten
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div class="trip-status" aria-live="polite">
            <span class="status-dot" aria-hidden="true"></span>
            <span data-countdown>Laster nedtelling …</span>
          </div>
        </div>

        <div class="hero-route" aria-label="Ruten fra Drammen til Gaula">
          <div class="map-card">
            <div class="map-card-top">
              <span>Hovedruten</span>
              <span>6 etapper</span>
            </div>

            <svg class="route-illustration" viewBox="0 0 500 610" role="img" aria-label="Stilisert rute gjennom Sør-Norge">
              <defs>
                <linearGradient id="routeGradient" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stop-color="#d9ff75" />
                  <stop offset="1" stop-color="#8ddbd6" />
                </linearGradient>
              </defs>
              <g class="contours" aria-hidden="true">
                <path d="M-30 488C68 442 129 519 214 464s145-83 329-33" />
                <path d="M-21 527c99-46 181 29 265-28s154-89 306-49" />
                <path d="M18 135c90-76 172-33 239-76s162-25 230 14" />
                <path d="M-8 177c108-70 177-17 254-67s171-26 273 15" />
              </g>
              <path class="route-shadow" d="M388 520C350 470 326 482 283 445c-39-34-19-70-67-96-36-20-45-44-20-79 25-36 10-65 53-88 39-20 42-64 82-92" />
              <path class="route-path" d="M388 520C350 470 326 482 283 445c-39-34-19-70-67-96-36-20-45-44-20-79 25-36 10-65 53-88 39-20 42-64 82-92" />
              <g class="route-stop">
                <circle cx="388" cy="520" r="8" />
                <text x="368" y="553" text-anchor="middle">Drammen</text>
              </g>
              <g class="route-stop">
                <circle cx="326" cy="480" r="8" />
                <text x="306" y="510" text-anchor="end">Eidfjord</text>
              </g>
              <g class="route-stop">
                <circle cx="283" cy="445" r="8" />
                <text x="260" y="469" text-anchor="end">Aurland</text>
              </g>
              <g class="route-stop">
                <circle cx="216" cy="349" r="8" />
                <text x="190" y="352" text-anchor="end">Lom</text>
              </g>
              <g class="route-stop">
                <circle cx="196" cy="270" r="8" />
                <text x="169" y="273" text-anchor="end">Geiranger</text>
              </g>
              <g class="route-stop">
                <circle cx="249" cy="182" r="8" />
                <text x="280" y="187">Romsdalen</text>
              </g>
              <g class="route-stop route-stop-final">
                <circle cx="331" cy="90" r="11" />
                <text x="360" y="96">Gaula</text>
              </g>
            </svg>

            <div class="route-summary">
              <div><strong>6</strong><span>roadtripdager</span></div>
              <div><strong>8</strong><span>dager ved Gaula</span></div>
              <div><strong>2</strong><span>biler</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="route-ribbon" aria-label="Stopp på turen">
        <span>Drammen</span><i></i><span>Eidfjord</span><i></i><span>Aurland</span><i></i><span>Lom</span><i></i><span>Valldal</span><i></i><span>Romsdalen</span><i></i><span>Trondheim</span><i></i><span>Gaula</span>
      </section>

      <section class="itinerary section" id="reiseplan" aria-labelledby="itinerary-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow dark">Roadtrip · 13.–18. juli</p>
            <h2 id="itinerary-title">Seks dager nordover</h2>
          </div>
          <p>
            Været hentes automatisk for riktig sted og dato. Planen fungerer fortsatt hvis prognosen ikke er tilgjengelig.
          </p>
        </div>

        <div class="day-list">
          <article class="day-card" id="dag-1">
            <div class="day-index"><span>Dag</span><strong>01</strong></div>
            <div class="day-main">
              <div class="day-heading">
                <div>
                  <p class="day-date">Mandag 13. juli</p>
                  <h3>Drammen → Eidfjord</h3>
                  <p class="day-route">RV7 over Hardangervidda · ca. 340 km</p>
                </div>
                <div class="weather-card" data-weather="eidfjord" data-date="2026-07-13">
                  <span class="weather-place">Eidfjord</span>
                  <span class="weather-loading">Henter vær …</span>
                </div>
              </div>

              <div class="day-details">
                <div>
                  <h4>Planen</h4>
                  <ul class="activity-list">
                    <li><span class="activity-icon">↗</span><div><strong>Kjør via Geilo</strong><span>Ladepause før fjellovergangen</span></div></li>
                    <li><span class="activity-icon">●</span><div><strong>Vøringsfossen</strong><span>Hovedstopp på vei ned Måbødalen</span></div></li>
                    <li class="optional"><span class="activity-icon">+</span><div><strong>Hvis tiden holder</strong><span>Bjørneparken eller Torpo stavkirke</span></div></li>
                  </ul>
                </div>
                <div class="overnight">
                  <span class="mini-label">Natt</span>
                  <strong>Eidfjord</strong>
                  <p>Villplass i Måbødalen, Sæbø Camping eller Kjaertveit Camping.</p>
                </div>
              </div>

              <div class="day-links">
                <a href="https://www.google.com/maps/dir/?api=1&origin=Drammen&destination=Eidfjord&waypoints=Geilo%7CV%C3%B8ringsfossen&travelmode=driving" target="_blank" rel="noreferrer">Åpne etappen i kart <span>↗</span></a>
              </div>
            </div>
          </article>

          <article class="day-card" id="dag-2">
            <div class="day-index"><span>Dag</span><strong>02</strong></div>
            <div class="day-main">
              <div class="day-heading">
                <div>
                  <p class="day-date">Tirsdag 14. juli</p>
                  <h3>Eidfjord → Aurland</h3>
                  <p class="day-route">Hardangerbrua og Nærøyfjorden · ca. 150 km</p>
                </div>
                <div class="weather-card" data-weather="aurland" data-date="2026-07-14">
                  <span class="weather-place">Aurland</span>
                  <span class="weather-loading">Henter vær …</span>
                </div>
              </div>

              <div class="day-details">
                <div>
                  <h4>Planen</h4>
                  <ul class="activity-list">
                    <li class="planned"><span class="activity-icon">✓</span><div><strong>Stegastein</strong><span>Fast stopp – utsikt over Aurlandsfjorden</span></div></li>
                    <li><span class="activity-icon">●</span><div><strong>Nærøyfjorden</strong><span>Se fjorden fra Bakka-området</span></div></li>
                    <li class="optional"><span class="activity-icon">+</span><div><strong>Velg etter tid og vær</strong><span>Brekkefossen eller en avstikker til Undredal</span></div></li>
                  </ul>
                </div>
                <div class="overnight">
                  <span class="mini-label">Natt</span>
                  <strong>Aurland / Nærøyfjorden</strong>
                  <p>Villplass ved Bakka eller Nærøyfjorden Camping.</p>
                </div>
              </div>

              <div class="day-links">
                <a href="https://www.google.com/maps/dir/?api=1&origin=Eidfjord&destination=Aurland&waypoints=Stegastein%20viewpoint&travelmode=driving" target="_blank" rel="noreferrer">Åpne etappen i kart <span>↗</span></a>
              </div>
            </div>
          </article>

          <article class="day-card" id="dag-3">
            <div class="day-index"><span>Dag</span><strong>03</strong></div>
            <div class="day-main">
              <div class="day-heading">
                <div>
                  <p class="day-date">Onsdag 15. juli</p>
                  <h3>Aurland → Lom</h3>
                  <p class="day-route">Lærdalstunnelen, Sognefjorden og Sognefjellet</p>
                </div>
                <div class="weather-card" data-weather="lom" data-date="2026-07-15">
                  <span class="weather-place">Lom</span>
                  <span class="weather-loading">Henter vær …</span>
                </div>
              </div>

              <div class="day-details">
                <div>
                  <h4>Planen</h4>
                  <ul class="activity-list">
                    <li><span class="activity-icon">↗</span><div><strong>Gjennom Lærdalstunnelen</strong><span>Videre med ferga Fodnes–Mannheller</span></div></li>
                    <li class="planned"><span class="activity-icon">✓</span><div><strong>Sognefjellet</strong><span>Fast del av ruten gjennom Jotunheimen</span></div></li>
                    <li class="planned"><span class="activity-icon">✓</span><div><strong>Lom stavkirke</strong><span>Med Bakeriet i Lom hvis det passer</span></div></li>
                  </ul>
                </div>
                <div class="overnight">
                  <span class="mini-label">Natt</span>
                  <strong>Bøverdalen / Lom</strong>
                  <p>Velg plass etter hvor langt dere kommer over fjellet.</p>
                </div>
              </div>

              <div class="day-links">
                <a href="https://www.google.com/maps/dir/?api=1&origin=Aurland&destination=Lom&waypoints=L%C3%A6rdal%7CFodnes%7CTurtagr%C3%B8&travelmode=driving" target="_blank" rel="noreferrer">Åpne etappen i kart <span>↗</span></a>
                <a class="traffic-link" href="https://www.vegvesen.no/trafikk/hvaskjer?layers=fo" target="_blank" rel="noreferrer">Sjekk Sognefjellet live <span>↗</span></a>
              </div>
            </div>
          </article>

          <article class="day-card" id="dag-4">
            <div class="day-index"><span>Dag</span><strong>04</strong></div>
            <div class="day-main">
              <div class="day-heading">
                <div>
                  <p class="day-date">Torsdag 16. juli</p>
                  <h3>Lom → Geiranger → Valldal</h3>
                  <p class="day-route">Dalsnibba, Ørnesvingen og ferge · ca. 150 km</p>
                </div>
                <div class="weather-card" data-weather="valldal" data-date="2026-07-16">
                  <span class="weather-place">Valldal</span>
                  <span class="weather-loading">Henter vær …</span>
                </div>
              </div>

              <div class="day-details">
                <div>
                  <h4>Planen</h4>
                  <ul class="activity-list">
                    <li><span class="activity-icon">●</span><div><strong>Dalsnibba og Geirangerfjorden</strong><span>Lad i Lom før avreise, eller i Geiranger</span></div></li>
                    <li><span class="activity-icon">●</span><div><strong>Ørnesvingen</strong><span>Utsiktspunkt på vei ut av Geiranger</span></div></li>
                    <li class="optional"><span class="activity-icon">+</span><div><strong>Hvis været er godt</strong><span>Storseterfossen, omtrent 1,5 time</span></div></li>
                    <li><span class="activity-icon">↗</span><div><strong>Ferge Eidsdal–Linge</strong><span>Siste del mot Valldal</span></div></li>
                  </ul>
                </div>
                <div class="overnight">
                  <span class="mini-label">Natt</span>
                  <strong>Valldal</strong>
                  <p>Ved Valldøla, Gudbrandsjuvet Camping eller Valldal Camping.</p>
                </div>
              </div>

              <div class="day-links">
                <a href="https://www.google.com/maps/dir/?api=1&origin=Lom&destination=Valldal&waypoints=Dalsnibba%7CGeiranger%7C%C3%98rnesvingen&travelmode=driving" target="_blank" rel="noreferrer">Åpne etappen i kart <span>↗</span></a>
                <a class="traffic-link" href="https://www.vegvesen.no/trafikk/ruteplanlegger" target="_blank" rel="noreferrer">Sjekk fjellveiene live <span>↗</span></a>
              </div>
            </div>
          </article>

          <article class="day-card" id="dag-5">
            <div class="day-index"><span>Dag</span><strong>05</strong></div>
            <div class="day-main">
              <div class="day-heading">
                <div>
                  <p class="day-date">Fredag 17. juli</p>
                  <h3>Valldal → Romsdalen</h3>
                  <p class="day-route">Trollstigen og Åndalsnes · ca. 70 km / 1 t 30 min</p>
                </div>
                <div class="weather-card" data-weather="romsdalen" data-date="2026-07-17">
                  <span class="weather-place">Romsdalen</span>
                  <span class="weather-loading">Henter vær …</span>
                </div>
              </div>

              <div class="day-details">
                <div>
                  <h4>Planen</h4>
                  <ul class="activity-list">
                    <li><span class="activity-icon">●</span><div><strong>Trollstigen og Stigfossen</strong><span>Kjør tidlig; veien kan stenge på kort varsel</span></div></li>
                    <li><span class="activity-icon">●</span><div><strong>Trollveggen</strong><span>Stopp i Romsdalen og lad i Åndalsnes</span></div></li>
                    <li class="optional"><span class="activity-icon">+</span><div><strong>Heldagsvalg</strong><span>Romsdalseggen tar omtrent 6–8 timer</span></div></li>
                  </ul>
                </div>
                <div class="overnight">
                  <span class="mini-label">Natt</span>
                  <strong>Romsdalen</strong>
                  <p>Villplass ved Rauma/Trollveggen-området eller tilsvarende.</p>
                </div>
              </div>

              <div class="day-links">
                <a href="https://www.google.com/maps/dir/?api=1&origin=Valldal&destination=%C3%85ndalsnes&waypoints=Trollstigen%7CTrollveggen&travelmode=driving" target="_blank" rel="noreferrer">Åpne etappen i kart <span>↗</span></a>
                <a class="traffic-link" href="https://www.vegvesen.no/trafikk/ruteplanlegger" target="_blank" rel="noreferrer">Sjekk Trollstigen live <span>↗</span></a>
              </div>
            </div>
          </article>

          <article class="day-card" id="dag-6">
            <div class="day-index"><span>Dag</span><strong>06</strong></div>
            <div class="day-main">
              <div class="day-heading">
                <div>
                  <p class="day-date">Lørdag 18. juli</p>
                  <h3>Romsdalen → Trondheim → Ler</h3>
                  <p class="day-route">E6 via Dombås og Oppdal · ca. 335 km</p>
                </div>
                <div class="weather-card" data-weather="ler" data-date="2026-07-18">
                  <span class="weather-place">Trondheim / Ler</span>
                  <span class="weather-loading">Henter vær …</span>
                </div>
              </div>

              <div class="day-details">
                <div>
                  <h4>Planen</h4>
                  <ul class="activity-list">
                    <li><span class="activity-icon">↗</span><div><strong>Lang kjøredag</strong><span>Lad ved Dombås/Oppdal og topp opp i Trondheim</span></div></li>
                    <li class="planned"><span class="activity-icon">✓</span><div><strong>Trondheim-runde</strong><span>2–3 timer med søskenguiden før hytta</span></div></li>
                    <li><span class="activity-icon">●</span><div><strong>Inn på Gaula-hytta</strong><span>Tidligst fra kl. 16.00</span></div></li>
                  </ul>
                </div>
                <div class="overnight highlight">
                  <span class="mini-label">Neste stopp</span>
                  <strong>Gaula</strong>
                  <p>Midtlyng/Høyset-valdet ved Ler.</p>
                </div>
              </div>

              <div class="day-links">
                <a href="https://www.google.com/maps/dir/?api=1&origin=%C3%85ndalsnes&destination=Ler&waypoints=Domb%C3%A5s%7COppdal%7CTrondheim&travelmode=driving" target="_blank" rel="noreferrer">Åpne etappen i kart <span>↗</span></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section class="gaula section" id="gaula" aria-labelledby="gaula-title">
        <div class="gaula-intro">
          <div>
            <p class="eyebrow">18.–25. juli · Ler</p>
            <h2 id="gaula-title">Åtte dager ved Gaula</h2>
            <p class="gaula-copy">
              Midtlyng/Høyset-valdet i Melhus, omtrent 35 km sør for Trondheim. Hytta åpner kl. 16.00 på ankomstdagen.
            </p>
          </div>
          <div class="gaula-stat">
            <strong>750 m</strong>
            <span>laksevann på øst- og vestbredden</span>
          </div>
        </div>

        <div class="fishing-weather">
          <div class="weather-strip-heading">
            <h3>Været ved elva</h3>
            <span data-weather-updated>Oppdateres automatisk</span>
          </div>
          <div class="weather-strip" data-weather-strip="gaula" data-start="2026-07-18" data-end="2026-07-25">
            <div class="weather-strip-loading">Henter 8-dagersprognosen …</div>
          </div>
        </div>
      </section>

      <section class="practical section" id="praktisk" aria-labelledby="practical-title">
        <div class="section-heading practical-heading">
          <div>
            <p class="eyebrow dark">Før dere kjører</p>
            <h2 id="practical-title">Det praktiske</h2>
          </div>
          <a class="button button-dark" href="https://www.vegvesen.no/trafikk/ruteplanlegger" target="_blank" rel="noreferrer">Live veistatus <span>↗</span></a>
        </div>

        <div class="practical-grid">
          <article>
            <span class="practical-number">01</span>
            <h3>Lading</h3>
            <p>Geilo · Lom/Geiranger · Åndalsnes · Dombås/Oppdal · Trondheim</p>
            <span class="note">Ca. 1 400 kr satt av til lading</span>
          </article>
          <article>
            <span class="practical-number">02</span>
            <h3>Bom og ferger</h3>
            <p>AutoPASS er registrert på Teslaen. På ruten: Fodnes–Mannheller og Eidsdal–Linge.</p>
          </article>
          <article>
            <span class="practical-number">03</span>
            <h3>Vær og fjell</h3>
            <p>Sjekk Vegvesen samme morgen. Sognefjellet og Trollstigen kan endre status raskt.</p>
          </article>
        </div>

        <article class="return-card">
          <div class="return-date">
            <span>Hjemreise</span>
            <strong>26. juli</strong>
          </div>
          <div class="return-route">
            <div><strong>Ler → Larvik</strong><span>E6 sørover · ca. 480 km / 5 t</span></div>
            <i aria-hidden="true">→</i>
            <div><strong>Larvik → Hirtshals</strong><span>Color Line · ca. 3 t 45 min</span></div>
            <i aria-hidden="true">→</i>
            <div><strong>Hirtshals → Horsens</strong><span>Ca. 175 km / 2 t</span></div>
          </div>
          <div class="weather-card return-weather" data-weather="larvik" data-date="2026-07-26">
            <span class="weather-place">Larvik</span>
            <span class="weather-loading">Henter vær …</span>
          </div>
        </article>

        <div class="final-share">
          <div>
            <p class="eyebrow dark">Hele turen i lomma</p>
            <h2>Klar til å sende til reisefølget?</h2>
          </div>
          <button class="button button-primary share-button-large" type="button" data-share>Del nettsiden</button>
        </div>
      </section>
    </main>

    <footer>
      <span>Norges-roadtripen · juli 2026</span>
      <span>Værdata fra <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a></span>
    </footer>

    <div class="toast" role="status" aria-live="polite" data-toast>Lenken er kopiert</div>
  </body>
</html>
