document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.products-carousel');
    const cards = document.querySelectorAll('.product-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dots = document.querySelectorAll('.dot');

    if (!track || cards.length === 0) return;

    let currentIndex = 0;

    
    function updateCarousel(index) {
        
        if (index < 0) {
            currentIndex = cards.length - 1;
        } else if (index >= cards.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

       
        const amountToMove = currentIndex * 100;
        track.style.transform = `translateX(-${amountToMove}%)`;

       
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    
    nextBtn?.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });

    
    prevBtn?.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });

    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const phoneNumber = '381693520303';

    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCallBtn = document.getElementById('modalCallBtn');
    const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    if (
        !modal || !modalImage || !modalTitle ||
        !modalDescription || !modalCallBtn ||
        !modalWhatsappBtn
    ) {
        console.error('Nedostaje neki od obaveznih elemenata modala.');
        return;
    }

    // ==========================================
    // PODACI O PROIZVODIMA
    // ==========================================

    const products = {

       
'servis': {
    title: 'Servis mašina za sladoled',
    image: 'img/logo.png',

    description: 'Stručnost, iskustvo i pouzdanost. Bavimo se profesionalnim servisom, održavanjem i reparacijom mašina za proizvodnju i točenje sladoleda, pasterizatora i prateće rashladne opreme. Servis obavljamo na teritoriji cele Srbije.',

    features: [
        {
            title: 'Servisiramo različite proizvođače',
            text: 'Carpigiani • Frigomat • Bravo • Valtex • Valamar • i drugi proizvođači profesionalne opreme za sladoled.'
        },
        {
            title: 'Izrada i reparacija delova',
            text: 'U sopstvenoj radionici izrađujemo i repariramo mešalice i mešačke sklopove, noževe i strugače za cilindre, reduktore i zupčaste prenose, osovine, čaure i druge mehaničke komponente. Obavljamo obnovu postojećih sklopova i izradu delova prema uzorku ili tehničkim zahtevima.'
        },
        {
            title: 'Rezervni delovi',
            text: 'Za određene modele možemo obezbediti rezervne delove i komponente, uključujući opremu proizvođača Carpigiani, Frigomat, Bravo, Valtex i Valamar.'
        },
        {
            title: 'Servis i održavanje',
            text: 'Dijagnostika električnih i mehaničkih kvarova • Servis rashladnog sistema • Vakumiranje i punjenje rashladnog sistema • Kontrola kompresora, kondenzatora i isparivača • Servis elektromotora i reduktora • Kontrola i zamena sondi, senzora i elektronskih komponenti • Servis kontaktora, releja i upravljačke elektronike • Podešavanje radnih parametara • Preventivno održavanje i priprema mašina za sezonu • Intervencije na terenu.'
        },
        {
            title: 'Reparacija poluhermetičkih kompresora',
            text: 'Posebno radimo reparaciju poluhermetičkih kompresora. U zavisnosti od stanja kompresora vršimo pregled, dijagnostiku, rastavljanje, reparaciju i ponovnu kontrolu, sa ciljem da se oprema vrati u pouzdano radno stanje i produži njen radni vek.'
        }
    ],

    tables: [],

    note: 'SERVIS NA TERITORIJI CELE SRBIJE'
},





        'valtek-uni': {
            title: 'VALTEK UNI',
            image: 'img/UNI.jpg',
            description:
                'Profesionalne mašine za proizvodnju sladoleda, namenjene poslastičarnicama i ugostiteljskim objektima.',
            features: [
                {
                    title: 'Jednostavno mehaničko upravljanje',
                    text: 'Omogućava jednostavno rukovanje i potpunu kontrolu nad procesom pripreme sladoleda.'
                },
                {
                    title: 'Lako održavanje',
                    text: 'Rezervni delovi su lako dostupni, a održavanje i popravke su jednostavni.'
                },
                {
                    title: 'Podesiva temperatura hlađenja',
                    text: 'Temperatura se prilagođava različitim vrstama sladoleda, uključujući mlečne i voćne sladolede i sorbete.'
                },
                {
                    title: 'Jednostavno podešavanje',
                    text: 'Temperatura se podešava okretanjem birača, bez složene elektronike.'
                },
                {
                    title: 'Jednostavno čišćenje',
                    text: 'Ugrađeno fleksibilno crevo olakšava pranje mašine i održavanje higijene.'
                },
                {
                    title: 'Zvučni signal',
                    text: 'Obaveštava korisnika kada je priprema sladoleda završena i kada je proizvod spreman za izbacivanje.'
                }
            ],
            tables: [
                {
                    title: 'Proizvodni kapaciteti',
                    headers: [
                        'Model', 'Min. smeša (kg)', 'Maks. sladoled (kg)',
                        'Min. smeša (l)', 'Maks. sladoled (l)',
                        'Kapacitet (kg/h)', 'Kapacitet (l/h)'
                    ],
                    rows: [
                        ['UNI 12/75', '3', '12', '4,2', '16,8', '75', '102'],
                        ['UNI 16/100', '4', '15', '5,6', '23,8', '100', '138'],
                        ['UNI 19XL/120', '5', '19', '7', '26,6', '120', '168'],
                        ['UNI 23XL/140', '6', '23', '8,4', '32,2', '140', '196'],
                        ['UNI 27XL/150', '7', '27', '9,8', '37,8', '150', '210']
                    ]
                },
                {
                    title: 'Tehničke specifikacije',
                    headers: [
                        'Model', 'Priključak (V/Hz/faze)', 'Brzina mešalice',
                        'Snaga (kW)', 'Kondenzacija', 'Masa (kg)',
                        'Visina (mm)', 'Širina (mm)', 'Dubina (mm)'
                    ],
                    rows: [
                        ['UNI 6/35', '400/50/3', '2', '4,1', 'Voda', '225', '1340', '520', '860'],
                        ['UNI 9/55', '400/50/3', '2', '7', 'Voda', '260', '1340', '520', '860'],
                        ['UNI 12/75', '400/50/3', '2', '8,5', 'Voda', '290', '1340', '520', '860'],
                        ['UNI 16/100', '400/50/3', '2', '10,5', 'Voda', '315', '1420', '610', '955'],
                        ['UNI 19XL/120', '400/50/3', '2', '11,6', 'Voda', '370', '1420', '610', '955'],
                        ['UNI 23XL/140', '400/50/3', '2', '13,6', 'Voda', '450', '1420', '610', '1055'],
                        ['UNI 27XL/150', '400/50/3', '2', '14,8', 'Voda', '520', '1420', '610', '1155']
                    ]
                }
            ],
            note: 'Kapaciteti proizvodnje mogu varirati u zavisnosti od smeše i temperature.'
        },

        'valtek-digi': {
            title: 'VALTEK DIGI – Digitalne mašine za sladoled',
            image: 'img/DIGI.jpg',
            description:
                'Profesionalne mašine sa digitalnim upravljanjem i naprednim mogućnostima podešavanja procesa proizvodnje sladoleda.',
            features: [
                {
                    title: 'Digitalno upravljanje',
                    text: 'Ekran prikazuje informacije u realnom vremenu, obaveštenja i dijagnostiku rada mašine.'
                },
                {
                    title: 'Inverter za mešanje',
                    text: 'Omogućava različite brzine mešanja za granite, sorbete i mlečne sladolede, kao i prilagođavanje količini smeše.'
                },
                {
                    title: 'Podešavanje brzine izbacivanja',
                    text: 'Omogućava zaustavljanje i nastavak izbacivanja radi lakšeg dekorisanja sladoleda.'
                },
                {
                    title: 'Fleksibilno crevo',
                    text: 'Olakšava čišćenje levka, cilindra i kanala za izbacivanje.'
                },
                {
                    title: 'Izbor programa',
                    text: 'Omogućava podešavanje završne temperature, trajanja pripreme i željene konzistencije sladoleda.'
                },
                {
                    title: 'Samopodešavajući mikser i strugači',
                    text: 'Obezbeđuju dobro mešanje smeše i efikasno pražnjenje i čišćenje cilindra.'
                }
            ],
            tables: [
                {
                    title: 'Proizvodni kapaciteti',
                    headers: [
                        'Model', 'Min. smeša (kg)', 'Maks. sladoled (kg)',
                        'Min. smeša (l)', 'Maks. sladoled (l)',
                        'Kapacitet (kg/h)', 'Kapacitet (l/h)'
                    ],
                    rows: [
                        ['DIGI 6/35', '1,5', '6', '2,1', '9', '35', '54'],
                        ['DIGI 9/55', '2', '9', '2,8', '13,2', '55', '75'],
                        ['DIGI 12/75', '3', '12', '4,2', '16,8', '75', '102'],
                        ['DIGI 16/100', '4', '15', '5,6', '23,8', '100', '138'],
                        ['DIGI 19XL/120', '5', '19', '7', '26,6', '120', '150'],
                        ['DIGI 23XL/140', '6', '23', '8,4', '32,2', '140', '180'],
                        ['DIGI 27XL/150', '7', '27', '9,8', '37,8', '150', '215']
                    ]
                },
                {
                    title: 'Tehničke specifikacije',
                    headers: [
                        'Model', 'Priključak (V/Hz/faze)', 'Brzina mešalice',
                        'Snaga (kW)', 'Kondenzacija', 'Masa (kg)',
                        'Visina (mm)', 'Širina (mm)', 'Dubina (mm)'
                    ],
                    rows: [
                        ['DIGI 6/35', '400/50/3', '2', '4,1', 'Voda', '225', '1340', '520', '860'],
                        ['DIGI 9/55', '400/50/3', '2', '7', 'Voda', '260', '1340', '520', '860'],
                        ['DIGI 12/75', '400/50/3', '2', '8,5', 'Voda', '290', '1340', '520', '860'],
                        ['DIGI 16/100', '400/50/3', '2', '10,5', 'Voda', '315', '1420', '610', '955'],
                        ['DIGI 19XL/120', '400/50/3', 'Kontinuirano', '14,5', 'Voda', '370', '1420', '610', '955'],
                        ['DIGI 23XL/140', '400/50/3', 'Kontinuirano', '16,3', 'Voda', '450', '1420', '610', '1055'],
                        ['DIGI 27XL/150', '400/50/3', 'Kontinuirano', '20', 'Voda', '520', '1420', '610', '1155']
                    ]
                }
            ],
            note: 'Kapaciteti proizvodnje mogu varirati u zavisnosti od smeše i temperature.'
        },

        'valtek-smart-master': {
            title: 'VALTEK SMART MASTER',
            image: 'img/SMART MASTER.jpg',
            description:
                'Napredna, računarski upravljana mašina sa prilagodljivim programima za profesionalnu proizvodnju različitih vrsta sladoleda.',
            features: [
                {
                    title: 'Prilagodljivi programi',
                    text: 'Omogućava individualna podešavanja i prilagođavanje procesa sopstvenim receptima.'
                },
                {
                    title: 'Pametna tehnologija',
                    text: 'Internet povezivanje omogućava daljinsku dijagnostiku i servisiranje mašine.'
                },
                {
                    title: 'Dva invertera',
                    text: 'Omogućavaju podešavanje brzine mešanja u različitim fazama procesa, bez zaustavljanja rada.'
                },
                {
                    title: 'Višejezični LCD ekran',
                    text: 'Korisnik može izabrati jezik interfejsa i jednostavno prilagoditi rad mašine.'
                },
                {
                    title: 'Različiti programi za sladoled',
                    text: 'Programi obuhvataju kremaste, čokoladne i veganske sladolede, sorbete, granite, voćne i alkoholne smeše, kao i dekorativnu pripremu.'
                },
                {
                    title: 'Efikasnost',
                    text: 'Optimizovan proizvodni proces omogućava smanjenu potrošnju energije i vode.'
                }
            ],
            tables: [
                {
                    title: 'Proizvodni kapaciteti',
                    headers: [
                        'Model', 'Min. smeša (kg)', 'Maks. sladoled (kg)',
                        'Min. smeša (l)', 'Maks. sladoled (l)',
                        'Kapacitet (kg/h)', 'Kapacitet (l/h)'
                    ],
                    rows: [
                        ['SMART MASTER 9/55', '1,5', '9,5', '2,1', '13,2', '55', '75'],
                        ['SMART MASTER 12/75', '2', '12', '2,8', '16,8', '75', '102'],
                        ['SMART MASTER 16/100', '3', '15', '4,2', '23,8', '100', '138'],
                        ['SMART MASTER 19XL/120', '4', '19', '5,6', '26,6', '120', '150'],
                        ['SMART MASTER 23XL/140', '4', '23', '5,6', '32,2', '140', '180'],
                        ['SMART MASTER 27XL/150', '5', '27', '7', '37,8', '150', '215']
                    ]
                },
                {
                    title: 'Tehničke specifikacije',
                    headers: [
                        'Model', 'Priključak (V/Hz/faze)', 'Brzina mešalice',
                        'Snaga (kW)', 'Kondenzacija', 'Masa (kg)',
                        'Visina (mm)', 'Širina (mm)', 'Dubina (mm)'
                    ],
                    rows: [
                        ['SMART MASTER 9/55', '400/50/3', 'Kontinuirano', '8', 'Voda', '265', '1415', '520', '860'],
                        ['SMART MASTER 12/75', '400/50/3', 'Kontinuirano', '8,5', 'Voda', '295', '1415', '520', '860'],
                        ['SMART MASTER 16/100', '400/50/3', 'Kontinuirano', '10,5', 'Voda', '340', '1500', '520', '860'],
                        ['SMART MASTER 19XL/120', '400/50/3', 'Kontinuirano', '14,5', 'Voda', '375', '1500', '610', '955'],
                        ['SMART MASTER 23XL/140', '400/50/3', 'Kontinuirano', '16,5', 'Voda', '455', '1500', '610', '955'],
                        ['SMART MASTER 27XL/150', '400/50/3', 'Kontinuirano', '20,5', 'Voda', '530', '1500', '610', '1055']
                    ]
                }
            ],
            note: 'Programi i proizvodni kapaciteti zavise od vrste smeše i odabranih podešavanja.'
        },

        'valtek-ts-lcd': {
            title: 'VALTEK TS LCD',
            image: 'img/DSC_5781x.jpg',
            description:
                'Profesionalna mašina za proizvodnju sladoleda koja omogućava podešavanje teksture i čvrstoće proizvoda, uz stabilan kvalitet tokom izbacivanja.',
            features: [
                {
                    title: 'Ujednačen kvalitet',
                    text: 'Sladoled zadržava kompaktnu, homogenu strukturu i kvalitet tokom celog procesa izbacivanja.'
                },
                {
                    title: 'Prilagodljiva tekstura',
                    text: 'Omogućava izbor teksture i čvrstoće u skladu sa vrstom sladoleda koji se proizvodi.'
                },
                {
                    title: 'Automatsko prilagođavanje',
                    text: 'Proces proizvodnje prilagođava se količini smeše, za manje i veće količine.'
                },
                {
                    title: 'Praktičan rad',
                    text: 'Omogućava zaustavljanje i ponovno pokretanje procesa kada je to potrebno.'
                }
            ],
            tables: [
                {
                    title: 'Proizvodni kapaciteti',
                    headers: [
                        'Model', 'Min. smeša (kg)', 'Maks. sladoled (kg)',
                        'Min. smeša (l)', 'Maks. sladoled (l)',
                        'Kapacitet (kg/h)', 'Kapacitet (l/h)'
                    ],
                    rows: [
                        ['TS LCD 9/55', '1,5', '9,5', '2,1', '13,2', '55', '75'],
                        ['TS LCD 12/75', '2', '12', '2,8', '16,8', '75', '102'],
                        ['TS LCD 16/100', '3', '15', '4,2', '23,8', '100', '138'],
                        ['TS LCD 19XL/120', '4', '19', '5,6', '26,6', '120', '150'],
                        ['TS LCD 23XL/140', '4', '23', '5,6', '32,2', '140', '180'],
                        ['TS LCD 27XL/150', '5', '27', '7', '37,8', '150', '215']
                    ]
                },
                {
                    title: 'Tehničke specifikacije',
                    headers: [
                        'Model', 'Priključak (V/Hz/faze)', 'Brzina mešalice',
                        'Snaga (kW)', 'Kondenzacija', 'Masa (kg)',
                        'Visina (mm)', 'Širina (mm)', 'Dubina (mm)'
                    ],
                    rows: [
                        ['TS LCD 9/55', '400/50/3', 'Kontinuirano', '8', 'Voda', '260', '1380', '520', '860'],
                        ['TS LCD 12/75', '400/50/3', 'Kontinuirano', '8,5', 'Voda', '290', '1380', '520', '860'],
                        ['TS LCD 16/100', '400/50/3', 'Kontinuirano', '10,5', 'Voda', '335', '1470', '520', '860'],
                        ['TS LCD 19XL/120', '400/50/3', 'Kontinuirano', '14,5', 'Voda', '370', '1470', '610', '955'],
                        ['TS LCD 23XL/140', '400/50/3', 'Kontinuirano', '16,5', 'Voda', '450', '1470', '610', '955'],
                        ['TS LCD 27XL/150', '400/50/3', 'Kontinuirano', '20,5', 'Voda', '525', '1470', '610', '1055']
                    ]
                }
            ],
            note: 'Kapaciteti proizvodnje mogu varirati u zavisnosti od smeše i temperature.'
        },

        'valtek-past': {
            title: 'VALTEK PAST – Elektronski pasterizator',
            image: 'img/PAST 130_37.JPG',
            description:
                'Elektronski pasterizator namenjen pripremi smeša za sladoled, sa programima za pasterizaciju do 85 °C i sazrevanje na 4–8 °C.',
            features: [
                {
                    title: 'Čelična posuda',
                    text: 'Posebna konstrukcija posude smanjuje zadržavanje smeše na zidovima i pomaže očuvanju ukusa.'
                },
                {
                    title: 'Programi pasterizacije',
                    text: 'Elektronski nadzor omogućava izbor programa do 85 °C, kao i ručno podešavanje temperature zagrevanja od 65 do 85 °C.'
                },
                {
                    title: 'Dobro mešanje',
                    text: 'Mešalica pomaže u ravnomernom mešanju sastojaka i razbijanju masnih kapljica.'
                },
                {
                    title: 'Automatizovani nadzor',
                    text: 'Sistem upozorava na odstupanja tokom procesa pasterizacije.'
                },
                {
                    title: 'HACCP dokumentacija',
                    text: 'Moguće je povezivanje štampača radi štampanja dokumentacije potrebne za HACCP.'
                },
                {
                    title: 'Jednostavno čišćenje',
                    text: 'Posuda i uređaj projektovani su tako da olakšaju čišćenje nakon rada.'
                }
            ],
            tables: [
                {
                    title: 'Kapaciteti modela',
                    headers: ['Model', 'Kapacitet posude (l)', 'Kapacitet po ciklusu (kg)'],
                    rows: [
                        ['PAST 60', '67', 'Maks. 60'],
                        ['PAST 130', '139', 'Maks. 130']
                    ]
                },
                {
                    title: 'Tehničke specifikacije',
                    headers: [
                        'Model', 'Priključak (V/Hz/faze)', 'Brzina mešalice',
                        'Snaga (kW)', 'Kondenzacija', 'Masa (kg)',
                        'Visina (mm)', 'Širina (mm)', 'Dubina (mm)'
                    ],
                    rows: [
                        ['PAST 60', '400/50/3', '2', '7', 'Voda', '180', '1030', '350', '950/1100'],
                        ['PAST 130', '400/50/3', '2', '12,5', 'Voda', '215', '1030', '520', '950/1100']
                    ]
                }
            ],
            note: 'Kapaciteti proizvodnje mogu varirati u zavisnosti od smeše i temperature.'
        },

        'valtek-pastosmart': {
            title: 'VALTEK PASTOSMART – Automatski pasterizator',
            image: 'img/PAST 60_37.jpg',
            description:
                'Višenamenski, računarski upravljani pasterizator za pripremu različitih smeša za sladoled, jogurta i zagrevanje čokolade.',
            features: [
                {
                    title: 'Automatizovana kontrola',
                    text: 'Omogućava podešavanje procesa zagrevanja i hlađenja, kao i temperature održavanja od 2 do 97 °C.'
                },
                {
                    title: 'Prilagodljivo mešanje',
                    text: 'Brzina mešanja može se podešavati, uz mogućnost pokretanja i zaustavljanja procesa.'
                },
                {
                    title: 'HACCP evidencija',
                    text: 'Beleži kontrolne tačke i omogućava prenos podataka na tablet, uz evidenciju prilagođenu korisniku.'
                },
                {
                    title: 'Daljinsko servisiranje',
                    text: 'Internet povezivanje omogućava daljinsku dijagnostiku grešaka na mašini.'
                },
                {
                    title: 'Efikasnost i dugotrajnost',
                    text: 'Niska potrošnja energije i vode, dugi radni ciklusi i dug tehnički vek mehaničkih delova.'
                }
            ],
            tables: [
                {
                    title: 'Kapaciteti modela',
                    headers: ['Model', 'Kapacitet posude (l)', 'Kapacitet po ciklusu (kg)'],
                    rows: [
                        ['PASTOSMART 60', '67', 'Maks. 60'],
                        ['PASTOSMART 130', '139', 'Maks. 130']
                    ]
                },
                {
                    title: 'Tehničke specifikacije',
                    headers: [
                        'Model', 'Priključak (V/Hz/faze)', 'Brzina mešalice',
                        'Snaga (kW)', 'Kondenzacija', 'Masa (kg)',
                        'Visina (mm)', 'Širina (mm)', 'Dubina (mm)'
                    ],
                    rows: [
                        ['PASTOSMART 60', '400/50/3', 'Kontinuirano', '9,0', 'Voda', '185', '1030', '350', '950/1100'],
                        ['PASTOSMART 130', '400/50/3', 'Kontinuirano', '12,5', 'Voda', '220', '1030', '520', '950/1100']
                    ]
                }
            ],
            note: 'Kapaciteti proizvodnje mogu varirati u zavisnosti od smeše i temperature.'
        },

        'valtek-duo': {
            title: 'VALTEK DUO – Kombinovana mašina 2 u 1',
            image: 'img/DUO.jpg',
            description:
                'VALTEK DUO objedinjuje cilindar za zagrevanje i mašinu za proizvodnju sladoleda u jednom uređaju. Pogodna je za manje količine sladoleda, pokretanje prve sladoledarnice ili proširenje postojeće ponude.',
            features: [
                {
                    title: 'Dve funkcije u jednom uređaju',
                    text: 'Kombinuje zagrevanje i proizvodnju sladoleda u jednoj mašini.'
                },
                {
                    title: 'Za manje proizvodne količine',
                    text: 'Pogodna je za početnike u proizvodnji sladoleda i za objekte koji žele da prošire svoju ponudu.'
                },
                {
                    title: 'Mehanička i elektronska verzija',
                    text: 'Dostupni su modeli sa mehaničkim i elektronskim upravljanjem.'
                }
            ],
            tables: [
                {
                    title: 'Proizvodni kapaciteti – mehanički modeli',
                    headers: [
                        'Model', 'Min. smeša (kg)', 'Maks. sladoled (kg)',
                        'Min. smeša (l)', 'Maks. sladoled (l)',
                        'Kapacitet (kg/h)', 'Kapacitet (l/h)'
                    ],
                    rows: [
                        ['DUO 6', '2', '6', '2,8', '8,4', '35', '50'],
                        ['DUO 9', '2', '9', '2,8', '12,6', '55', '77'],
                        ['DUO 12', '3', '12', '4,2', '16,8', '75', '105'],
                        ['DUO 16', '4', '15', '5,6', '22,4', '100', '140'],
                        ['DUO 18', '6', '18', '8,4', '25,2', '120', '168']
                    ]
                },
                {
                    title: 'Proizvodni kapaciteti – elektronski modeli',
                    headers: [
                        'Model', 'Min. smeša (kg)', 'Maks. sladoled (kg)',
                        'Min. smeša (l)', 'Maks. sladoled (l)',
                        'Kapacitet (kg/h)', 'Kapacitet (l/h)'
                    ],
                    rows: [
                        ['DUO 6d/35', '1,5', '6', '2,1', '8,4', '35', '50'],
                        ['DUO 9d/55', '2', '9', '2,8', '12,6', '55', '77'],
                        ['DUO 12d/75', '3', '12', '4,2', '16,8', '75', '105'],
                        ['DUO 16d/100', '4', '15', '5,6', '22,4', '100', '140'],
                        ['DUO 18d/120', '6', '18', '8,4', '25,2', '120', '168']
                    ]
                },
                {
                    title: 'Tehničke specifikacije – mehanički modeli',
                    headers: [
                        'Model', 'Priključak (V/Hz/faze)', 'Brzina mešalice',
                        'Snaga (kW)', 'Kondenzacija', 'Masa (kg)',
                        'Visina (mm)', 'Širina (mm)', 'Dubina (mm)'
                    ],
                    rows: [
                        ['DUO 6', '400/50/3', '2', '7,8', 'Voda', '260', '1377', '610', '910'],
                        ['DUO 9', '400/50/3', '2', '9', 'Voda', '310', '1377', '610', '910'],
                        ['DUO 12', '400/50/3', '2', '11,5', 'Voda', '360', '1377', '610', '910'],
                        ['DUO 16', '400/50/3', '2', '16,3', 'Voda', '410', '1377', '610', '1055'],
                        ['DUO 18', '400/50/3', '2', '18,4', 'Voda', '420', '1437', '610', '1055']
                    ]
                },
                {
                    title: 'Tehničke specifikacije – elektronski modeli',
                    headers: [
                        'Model', 'Priključak (V/Hz/faze)', 'Brzina mešalice',
                        'Snaga (kW)', 'Kondenzacija', 'Masa (kg)',
                        'Visina (mm)', 'Širina (mm)', 'Dubina (mm)'
                    ],
                    rows: [
                        ['DUO 6d/35', '400/50/3', '2', '7,8', 'Voda', '265', '1377', '610', '910'],
                        ['DUO 9d/55', '400/50/3', '2', '9', 'Voda', '315', '1377', '610', '910'],
                        ['DUO 12d/75', '400/50/3', '2', '11,5', 'Voda', '365', '1377', '610', '910'],
                        ['DUO 16d/100', '400/50/3', '2', '16,3', 'Voda', '415', '1377', '610', '1055'],
                        ['DUO 18d/120', '400/50/3', '2', '18,4', 'Voda', '425', '1437', '610', '1055']
                    ]
                }
            ],
            note: 'Kapaciteti proizvodnje mogu varirati u zavisnosti od smeše i temperature.'
        }
    };

    // ==========================================
    // POMOĆNE FUNKCIJE ZA PRIKAZ
    // ==========================================

    function escapeHTML(value) {
        return String(value ?? '').replace(/[&<>"']/g, character => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[character]);
    }

    function renderFeatures(features = []) {
        if (!features.length) return '';

        return `
            <section class="product-section">
                <h3>Prednosti i karakteristike</h3>
                <div class="product-features">
                    ${features.map(feature => `
                        <article class="product-feature">
                            <h4>${escapeHTML(feature.title)}</h4>
                            <p>${escapeHTML(feature.text)}</p>
                        </article>
                    `).join('')}
                </div>
            </section>
        `;
    }

    function renderTables(tables = []) {
        return tables.map(table => `
            <section class="product-section">
                <h3>${escapeHTML(table.title)}</h3>
                <div class="spec-table-wrapper">
                    <table class="spec-table">
                        <thead>
                            <tr>
                                ${table.headers.map(header =>
                                    `<th>${escapeHTML(header)}</th>`
                                ).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${table.rows.map(row => `
                                <tr>
                                    ${row.map((cell, index) => `
                                        <td>${escapeHTML(cell)}</td>
                                    `).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </section>
        `).join('');
    }

    function renderProduct(product) {
        return `
            <div class="product-details">
                <p class="product-intro">
                    ${escapeHTML(product.description)}
                </p>

                ${renderFeatures(product.features)}
                ${renderTables(product.tables)}

                ${product.note ? `
                    <p class="product-note">
                        ${escapeHTML(product.note)}
                    </p>
                ` : ''}
            </div>
        `;
    }

    // ==========================================
    // OTVARANJE MODALA
    // ==========================================

    function openModal(button) {
        const productId = button.dataset.product;
        const product = products[productId];

        if (!product) {
            console.error(
                `Proizvod "${productId}" nije pronađen u objektu products.`
            );
            return;
        }

        modalTitle.textContent = product.title;
        modalImage.src = product.image;
        modalImage.alt = product.title;

        modalDescription.innerHTML = renderProduct(product);

        modalCallBtn.href = `tel:+${phoneNumber}`;

        const whatsappMessage = encodeURIComponent(
            `Zdravo, zainteresovan/a sam za proizvod: ${product.title}.`
        );

        modalWhatsappBtn.href =
            `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    // ==========================================
    // ZATVARANJE MODALA
    // ==========================================

    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.open-modal-btn').forEach(button => {
        button.addEventListener('click', () => openModal(button));
    });

    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);

    document.addEventListener('keydown', event => {
        if (
            event.key === 'Escape' &&
            modal.classList.contains('active')
        ) {
            closeModal();
        }
    });
});
