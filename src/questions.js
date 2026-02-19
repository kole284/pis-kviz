export const questions = [
  // SEKCIJA 1: UML OSNOVE
  {
    id: 1,
    section: "UML OSNOVE",
    question: "UML je grafički jezik za:",
    options: [
      "Programiranje informacionih sistema",
      "Specifikaciju, vizuelizaciju, projektovanje i dokumentovanje IS",
      "Testiranje softvera"
    ],
    correct: 1
  },
  {
    id: 2,
    section: "UML OSNOVE",
    question: "Ko definiše UML standard?",
    options: ["IEEE", "OMG (Object Management Group)", "ISO"],
    correct: 1
  },
  {
    id: 3,
    section: "UML OSNOVE",
    question: "Koliko aspekata modela postoji u UML-u?",
    options: ["3", "5", "7"],
    correct: 1
  },
  {
    id: 4,
    section: "UML OSNOVE",
    question: "Dijagram sekvenci i dijagram komunikacije su podtipovi dijagrama interakcije.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 5,
    section: "UML OSNOVE",
    question: "Statički opis aspekta projektovanja daje se preko:",
    options: [
      "Dijagrama aktivnosti i dijagrama stanja",
      "Dijagrama klasa i dijagrama objekata",
      "Dijagrama komponenti i dijagrama razmeštaja"
    ],
    correct: 1
  },
  {
    id: 6,
    section: "UML OSNOVE",
    question: "Trenutna verzija UML-a je:",
    options: ["2.0", "2.5.1", "3.0"],
    correct: 1
  },
  {
    id: 7,
    section: "UML OSNOVE",
    question: "Dijagram klasa spada u dijagrame za opis ponašanja.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  
  // SEKCIJA 2: DIJAGRAM KLASA
  {
    id: 8,
    section: "DIJAGRAM KLASA",
    question: "Oznaka vidljivosti za protected je:",
    options: ["+", "#", "~"],
    correct: 1
  },
  {
    id: 9,
    section: "DIJAGRAM KLASA",
    question: "Agregacija se grafički označava:",
    options: [
      "Popunjenim rombom",
      "Praznim rombom",
      "Praznom trouglastom strelicom"
    ],
    correct: 1
  },
  {
    id: 10,
    section: "DIJAGRAM KLASA",
    question: "Kod kompozicije, deca:",
    options: [
      "Mogu postojati nezavisno od roditelja",
      "Ne mogu postojati bez roditelja",
      "Nemaju nikakvu vezu sa roditeljima"
    ],
    correct: 1
  },
  {
    id: 11,
    section: "DIJAGRAM KLASA",
    question: "Kod agregacije deca mogu postojati nezavisno od roditelja.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 12,
    section: "DIJAGRAM KLASA",
    question: "Kardinalnost 0..1 znači:",
    options: ["Tačno jedan", "Nula ili jedan (opciono)", "Jedan ili više"],
    correct: 1
  },
  {
    id: 13,
    section: "DIJAGRAM KLASA",
    question: "GeneralizationSet sa {complete, disjoint} znači:",
    options: [
      "Instanca nadklase ne mora biti podklasa i može biti više podklasa",
      "Svaka instanca nadklase mora biti bar jedna podklasa i ne može biti više podklasa istovremeno",
      "Instanca nadklase ne mora biti podklasa i ne može biti više podklasa"
    ],
    correct: 1
  },
  {
    id: 14,
    section: "DIJAGRAM KLASA",
    question: "Podrazumevane vrednosti za GeneralizationSet (ako se ne navedu) su:",
    options: [
      "{complete, disjoint}",
      "{incomplete, overlapping}",
      "{complete, overlapping}"
    ],
    correct: 1
  },
  {
    id: 15,
    section: "DIJAGRAM KLASA",
    question: "Realization veza je:",
    options: [
      "Specijalna vrsta Abstraction zavisnosti",
      "Podvrsta asocijacije",
      "Oblik agregacije"
    ],
    correct: 0
  },
  {
    id: 16,
    section: "DIJAGRAM KLASA",
    question: "Apstraktna klasa se može instancirati.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 17,
    section: "DIJAGRAM KLASA",
    question: "Izvedene vrednosti u dijagramu klasa označavaju se:",
    options: ["Sa * pre naziva", "Sa / pre naziva", "Sa # pre naziva"],
    correct: 1
  },
  {
    id: 18,
    section: "DIJAGRAM KLASA",
    question: "<<interface>> stereotip može da se grafički prikaže kao krug (lollipop notacija).",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 19,
    section: "DIJAGRAM KLASA",
    question: "Klasa asocijacije se koristi da:",
    options: [
      "Zameni asocijaciju između dve klase",
      "Pruži dodatne informacije o vezi između dve klase",
      "Ukine asocijaciju"
    ],
    correct: 1
  },
  {
    id: 20,
    section: "DIJAGRAM KLASA",
    question: "Od UML 2.0, End Ownership se grafički predstavlja:",
    options: [
      "Strelicom na kraju asocijacije",
      "Tačkom na kraju asocijacije",
      "Rombom"
    ],
    correct: 1
  },
  {
    id: 21,
    section: "DIJAGRAM KLASA",
    question: "Statički atributi i metode u dijagramu klasa se podvlače.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 22,
    section: "DIJAGRAM KLASA",
    question: "<<utility>> stereotip označava klasu koja:",
    options: [
      "Sadrži samo apstraktne metode",
      "Sadrži samo statičke atribute i metode",
      "Ne može imati operacije"
    ],
    correct: 1
  },
  
  // SEKCIJA 3: SLUČAJEVI KORIŠĆENJA
  {
    id: 23,
    section: "SLUČAJEVI KORIŠĆENJA",
    question: "<<include>> veza u dijagramu slučajeva korišćenja:",
    options: [
      "Opciono proširuje ponašanje",
      "Eksplicitno i obavezno uključuje ponašanje drugog SK",
      "Definiše generalizaciju"
    ],
    correct: 1
  },
  {
    id: 24,
    section: "SLUČAJEVI KORIŠĆENJA",
    question: "<<extend>> veza:",
    options: [
      "Obavezno uključuje ponašanje",
      "Implicitno i opciono proširuje ponašanje u tačkama proširenja",
      "Definiše asocijaciju"
    ],
    correct: 1
  },
  {
    id: 25,
    section: "SLUČAJEVI KORIŠĆENJA",
    question: "Direktna komunikacija između dva aktera može se predstaviti na dijagramu slučajeva korišćenja.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 26,
    section: "SLUČAJEVI KORIŠĆENJA",
    question: "U dijagramu SK, scenario je:",
    options: [
      "Naziv slučaja korišćenja",
      "Jedna sekvenca događaja u okviru SK",
      "Grafički element dijagrama"
    ],
    correct: 1
  },
  {
    id: 27,
    section: "SLUČAJEVI KORIŠĆENJA",
    question: "Kod <<include>> veze, smer strelice ide:",
    options: [
      "Od uključenog SK ka osnovnom SK",
      "Od osnovnog SK ka uključenom SK",
      "Nema strelice"
    ],
    correct: 1
  },
  
  // SEKCIJA 4: DIJAGRAM SEKVENCI
  {
    id: 28,
    section: "DIJAGRAM SEKVENCI",
    question: "Sinhrona poruka se grafički predstavlja:",
    options: [
      "Isprekidanom linijom sa otvorenom strelicom",
      "Punom linijom sa popunjenom (punom) strelicom",
      "Punom linijom sa otvorenom strelicom"
    ],
    correct: 1
  },
  {
    id: 29,
    section: "DIJAGRAM SEKVENCI",
    question: "Asinhrona poruka se grafički predstavlja:",
    options: [
      "Punom linijom sa popunjenom strelicom",
      "Punom linijom sa otvorenom strelicom",
      "Isprekidanom linijom sa popunjenom strelicom"
    ],
    correct: 1
  },
  {
    id: 30,
    section: "DIJAGRAM SEKVENCI",
    question: "Poruka za kreiranje životne linije (create) se predstavlja:",
    options: [
      "Punom linijom sa popunjenom strelicom",
      "Isprekidanom linijom sa otvorenom strelicom",
      "Punom linijom bez strelice"
    ],
    correct: 1
  },
  {
    id: 31,
    section: "DIJAGRAM SEKVENCI",
    question: "Operator ALT u kombinovanom fragmentu označava:",
    options: [
      "Petlju",
      "Selekciju — bira se najviše jedan operand",
      "Paralelno izvršavanje"
    ],
    correct: 1
  },
  {
    id: 32,
    section: "DIJAGRAM SEKVENCI",
    question: "Operator LOOP u kombinovanom fragmentu:",
    options: [
      "Označava prekid interakcije",
      "Označava deo koji se ponavlja određeni broj puta",
      "Označava paralelno izvršavanje"
    ],
    correct: 1
  },
  {
    id: 33,
    section: "DIJAGRAM SEKVENCI",
    question: "Operator BREAK:",
    options: [
      "Izvršava se umesto ostatka fragmenta",
      "Ponavlja deo interakcije",
      "Predstavlja opcioni segment"
    ],
    correct: 0
  },
  {
    id: 34,
    section: "DIJAGRAM SEKVENCI",
    question: "OPT operator je ekvivalentan ALT operatoru sa samo jednom opcijom.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 35,
    section: "DIJAGRAM SEKVENCI",
    question: "Kraj životne linije (destruction occurrence) se označava:",
    options: ["Popunjenim krugom", "Znakom X", "Duplim krugom"],
    correct: 1
  },
  {
    id: 36,
    section: "DIJAGRAM SEKVENCI",
    question: "U ECB paternu, Boundary odgovara:",
    options: ["Model-u", "View-u", "Controller-u"],
    correct: 1
  },
  {
    id: 37,
    section: "DIJAGRAM SEKVENCI",
    question: "Izgubljena poruka (lost message) je poruka kojoj je poznat primalac ali ne i pošiljalac.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 38,
    section: "DIJAGRAM SEKVENCI",
    question: "Interaction use (ref) se koristi za:",
    options: [
      "Kreiranje nove životne linije",
      "Pozivanje druge interakcije radi uprošćenog prikaza",
      "Definisanje ograničenja"
    ],
    correct: 1
  },
  
  // SEKCIJA 5: DIJAGRAM AKTIVNOSTI
  {
    id: 39,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Od UML 2.0, dijagrami aktivnosti su zasnovani na:",
    options: [
      "Teoriji konačnih automata",
      "Teoriji Petrijevih mreža",
      "Lambda računu"
    ],
    correct: 1
  },
  {
    id: 40,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Fork (račvanje) u dijagramu aktivnosti predstavlja:",
    options: [
      "OR grananje",
      "AND grananje u paralelne niti",
      "Kraj procesa"
    ],
    correct: 1
  },
  {
    id: 41,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Decision (odlučivanje) u dijagramu aktivnosti predstavlja:",
    options: [
      "AND grananje",
      "OR grananje sa uslovima",
      "Spajanje niti"
    ],
    correct: 1
  },
  {
    id: 42,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Flow Final označava kraj celog procesa.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 43,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Particije (Swimlanes) u dijagramu aktivnosti predstavljaju:",
    options: [
      "Vrste aktivnosti",
      "Uloge/izvršioce u procesu",
      "Tokove podataka"
    ],
    correct: 1
  },
  {
    id: 44,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Glavna razlika između dijagrama aktivnosti i flowchart-a je podrška za paralelno izvršavanje.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 45,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "<<datastore>> u dijagramu aktivnosti označava:",
    options: [
      "Vremenski okidač",
      "Skladište podataka",
      "Signal"
    ],
    correct: 1
  },
  {
    id: 46,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Ekspanzioni region se koristi za:",
    options: [
      "Paralelno izvršavanje dva procesa",
      "Opis iteracije nad kolekcijom",
      "Definisanje podprocesa"
    ],
    correct: 1
  },
  
  // SEKCIJA 6: DIJAGRAM PROMENE STANJA
  {
    id: 47,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Interna akcija 'entry' u stanju se izvršava:",
    options: [
      "Pri izlasku iz stanja",
      "Pri ulasku u stanje",
      "Dok je sistem u stanju"
    ],
    correct: 1
  },
  {
    id: 48,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Interna akcija 'do' označava:",
    options: [
      "Akciju koja se izvršava pri ulasku u stanje",
      "Aktivnost koja se izvršava dok je sistem u datom stanju",
      "Akciju koja se izvršava pri izlasku iz stanja"
    ],
    correct: 1
  },
  {
    id: 49,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Format naziva tranzicije je:",
    options: [
      "akcija/uslov[događaj]",
      "nazivDogađaja[uslov]/akcija",
      "uslov/nazivDogađaja/akcija"
    ],
    correct: 1
  },
  {
    id: 50,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Automatska tranzicija je tranzicija bez naziva i detektovanog događaja.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 51,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Choice pseudostanje na dijagramu prelaza stanja:",
    options: [
      "Spaja više tranzicija",
      "Ima jednu ulaznu i dve+ izlazne tranzicije (romb)",
      "Predstavlja krajnje stanje"
    ],
    correct: 1
  },
  {
    id: 52,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Tranzicije koje se spajaju korišćenjem Join pseudostanja mogu imati definisan događaj.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 53,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Događaj u dijagramu stanja može biti:",
    options: [
      "Signal, promena uslova ili istek vremena",
      "Samo signal",
      "Samo promena uslova"
    ],
    correct: 0
  },
  {
    id: 54,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Na jednom dijagramu prelaza stanja može se naći više stanja sa istim nazivom.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  
  // SEKCIJA 7: MODEL PROCESA RAZVOJA IS
  {
    id: 55,
    section: "MODEL PROCESA RAZVOJA IS",
    question: "Tačan redosled faza životnog ciklusa IS:",
    options: [
      "Analiza → Strategija → Programiranje → Projektovanje → Uvođenje → Održavanje",
      "Strategija → Analiza → Projektovanje → Programiranje → Uvođenje → Eksploatacija i održavanje",
      "Strategija → Projektovanje → Analiza → Programiranje → Uvođenje → Održavanje"
    ],
    correct: 1
  },
  {
    id: 56,
    section: "MODEL PROCESA RAZVOJA IS",
    question: "Idejni projekat (IP) je izlaz iz:",
    options: [
      "Faze analize",
      "Faze strategije",
      "Faze projektovanja"
    ],
    correct: 1
  },
  {
    id: 57,
    section: "MODEL PROCESA RAZVOJA IS",
    question: "Konceptualni projekat (KP) je izlaz iz:",
    options: [
      "Faze strategije",
      "Faze analize",
      "Faze programiranja"
    ],
    correct: 1
  },
  {
    id: 58,
    section: "MODEL PROCESA RAZVOJA IS",
    question: "SDLC je sam po sebi metodologija.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  
  // SEKCIJA 8: ANALIZA ZAHTEVA
  {
    id: 59,
    section: "ANALIZA ZAHTEVA",
    question: "BSP metoda je razvijena od strane:",
    options: ["Microsoft-a", "IBM-a", "Oracle-a"],
    correct: 1
  },
  {
    id: 60,
    section: "ANALIZA ZAHTEVA",
    question: "BSP procedura se deli na:",
    options: [
      "Analiza i Implementacija",
      "Priprema, Analiza i Zaključak",
      "Inicijalizacija i Finalizacija"
    ],
    correct: 1
  },
  {
    id: 61,
    section: "ANALIZA ZAHTEVA",
    question: "JAD (Joint Application Development) sesije su:",
    options: [
      "Online upitnici za korisnike",
      "Intenzivne radionice gde zainteresovane strane i analitičari rade zajedno",
      "Individualni intervjui sa menadžmentom"
    ],
    correct: 1
  },
  {
    id: 62,
    section: "ANALIZA ZAHTEVA",
    question: "Osnovni koncepti SSA su:",
    options: [
      "Klase, interfejsi, paketi, stereotipi",
      "Funkcije/procesi, interfejsi, tokovi podataka, skladišta podataka",
      "Modeli, dijagrami, akteri, scenariji"
    ],
    correct: 1
  },
  {
    id: 63,
    section: "ANALIZA ZAHTEVA",
    question: "Pravilo balansa tokova u SSA zahteva da ulazni i izlazni tokovi dekompozicije procesa budu ekvivalentni tokovima na dijagramu višeg nivoa.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 64,
    section: "ANALIZA ZAHTEVA",
    question: "Metodološko pravilo SSA nalaže da funkcije na DTP-u treba da:",
    options: [
      "Komuniciraju direktno jedna sa drugom",
      "Komuniciraju isključivo preko skladišta",
      "Ne komuniciraju uopšte"
    ],
    correct: 1
  },
  {
    id: 65,
    section: "ANALIZA ZAHTEVA",
    question: "Potpunu specifikaciju IS u SSA čine:",
    options: [
      "Samo dijagrami tokova podataka",
      "Hijerarhijski DTP-ovi, rečnik podataka i specifikacija logike primitivnih procesa",
      "Samo rečnik podataka i dijagrami klasa"
    ],
    correct: 1
  },
  {
    id: 66,
    section: "ANALIZA ZAHTEVA",
    question: "Vodopad (Waterfall) model se koristi kada su:",
    options: [
      "Zahtevi promenljivi i nedovoljno definisani",
      "Zahtevi jasni, stabilni i malo verovatni da će se promeniti",
      "Timovi mali i bez iskustva"
    ],
    correct: 1
  },
  {
    id: 67,
    section: "ANALIZA ZAHTEVA",
    question: "RUP (Rational Unified Process) ima koliko ključnih faza?",
    options: ["3", "4", "6"],
    correct: 1
  },
  
  // SEKCIJA 9: PREZENTACIONI PATERNI
  {
    id: 68,
    section: "PREZENTACIONI PATERNI",
    question: "U klasičnom MVC paternu, View:",
    options: [
      "Ne zna za Model",
      "Direktno čita Model",
      "Komunicira sa Modelom samo preko Controllera"
    ],
    correct: 1
  },
  {
    id: 69,
    section: "PREZENTACIONI PATERNI",
    question: "U MVC Model 2, glavna razlika u odnosu na klasičan MVC:",
    options: [
      "Nema Controller-a",
      "Ne postoji direktna veza između View-a i Model-a",
      "View je zapravo Controller"
    ],
    correct: 1
  },
  {
    id: 70,
    section: "PREZENTACIONI PATERNI",
    question: "U MVP Pasivni Pogled, View sadrži:",
    options: ["Stanje i logiku", "Samo stanje", "Samo logiku"],
    correct: 1
  },
  {
    id: 71,
    section: "PREZENTACIONI PATERNI",
    question: "Razlika između MVP Pasivni Pogled i MVP Nadzorni Prezenter:",
    options: [
      "Nadzorni Prezenter nema Presenter",
      "U Nadzornom Prezeteru View zadržava autonomiju i može direktno čitati Model",
      "Nema razlike"
    ],
    correct: 1
  },
  {
    id: 72,
    section: "PREZENTACIONI PATERNI",
    question: "MVVM patern je:",
    options: [
      "Specifična Microsoft implementacija Prezentacionog modela (PM)",
      "Zamena za MVC u svim kontekstima",
      "Identičan klasičnom MVC-u"
    ],
    correct: 0
  },
  {
    id: 73,
    section: "PREZENTACIONI PATERNI",
    question: "U svim prezentacionim paternima, Model ne zna kako će biti prikazan.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 74,
    section: "PREZENTACIONI PATERNI",
    question: "3 osnovne odgovornosti prezentacionog sloja su:",
    options: [
      "Kreiranje, čitanje i brisanje",
      "Stanje, logika i sinhronizacija",
      "Validacija, transformacija i prikaz"
    ],
    correct: 1
  },
  {
    id: 75,
    section: "PREZENTACIONI PATERNI",
    question: "Princip podele odgovornosti nalaže da:",
    options: [
      "Svaka klasa mora imati tačno jednu metodu",
      "Delovi aplikacije treba da se što manje preklapaju u funkcionalnosti",
      "Model i View moraju biti u istoj klasi"
    ],
    correct: 1
  },
  
  // SEKCIJA 10: OCL
  {
    id: 76,
    section: "OCL",
    question: "OCL je programski jezik.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 77,
    section: "OCL",
    question: "Evaluacija OCL izraza može promeniti stanje sistema.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 78,
    section: "OCL",
    question: "Klauzula 'inv' označava:",
    options: [
      "Ograničenje koje mora biti zadovoljeno samo pri kreiranju objekta",
      "Ograničenje koje mora biti zadovoljeno UVEK tokom životnog ciklusa objekta",
      "Ograničenje vezano samo za operacije"
    ],
    correct: 1
  },
  {
    id: 79,
    section: "OCL",
    question: "@pre klauzula se može koristiti:",
    options: [
      "U invariant i postcondition ograničenjima",
      "Isključivo u postcondition ograničenjima",
      "U svim vrstama ograničenja"
    ],
    correct: 1
  },
  {
    id: 80,
    section: "OCL",
    question: "Klauzula 'result' u OCL-u:",
    options: [
      "Označava rezultat invariant ograničenja",
      "Odnosi se na povratnu vrednost operacije u postcondition",
      "Koristi se za definisanje konteksta"
    ],
    correct: 1
  },
  {
    id: 81,
    section: "OCL",
    question: "Operator '->' u OCL-u služi za:",
    options: [
      "Navigaciju među objektima",
      "Navigaciju od kolekcije koristeći operaciju ili iteraciju",
      "Definisanje konteksta"
    ],
    correct: 1
  },
  {
    id: 82,
    section: "OCL",
    question: "OCL tip Set je:",
    options: [
      "Uređen, bez duplikata",
      "Neuređen, bez duplikata",
      "Neuređen, sa duplikatima"
    ],
    correct: 1
  },
  {
    id: 83,
    section: "OCL",
    question: "OCL tip Bag je:",
    options: [
      "Uređen, bez duplikata",
      "Neuređen, sa duplikatima",
      "Uređen, sa duplikatima"
    ],
    correct: 1
  },
  {
    id: 84,
    section: "OCL",
    question: "OCL tip Sequence je:",
    options: [
      "Neuređen, bez duplikata",
      "Neuređen, sa duplikatima",
      "Uređen, sa duplikatima"
    ],
    correct: 2
  },
  {
    id: 85,
    section: "OCL",
    question: "Iterator forAll u OCL-u vraća true ako:",
    options: [
      "Body važi za bar jedan element",
      "Body važi za SVE elemente kolekcije",
      "Body važi za tačno jedan element"
    ],
    correct: 1
  },
  {
    id: 86,
    section: "OCL",
    question: "Iterator exists u OCL-u vraća true ako:",
    options: [
      "Body važi za SVE elemente",
      "Body važi za BAR JEDAN element",
      "Body važi za tačno dva elementa"
    ],
    correct: 1
  },
  {
    id: 87,
    section: "OCL",
    question: "Iterator one u OCL-u vraća true ako:",
    options: [
      "Body važi za bar jedan element",
      "Body važi za tačno jedan element",
      "Body ne važi ni za jedan element"
    ],
    correct: 1
  },
  {
    id: 88,
    section: "OCL",
    question: "Ako naziv uloge u asocijaciji nije definisan, u OCL-u se koristi naziv klase sa malim početnim slovom.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  {
    id: 89,
    section: "OCL",
    question: "Trenutna verzija OCL-a je:",
    options: ["1.0", "2.4", "3.0"],
    correct: 1
  },
  {
    id: 90,
    section: "OCL",
    question: "Boolean operator 'implies' u OCL-u znači:",
    options: [
      "Logičko I (AND)",
      "Logičku implikaciju (ako...onda)",
      "Logičko ILI (OR)"
    ],
    correct: 1
  },
  
  // SEKCIJA 11: UML PROFILI
  {
    id: 91,
    section: "UML PROFILI",
    question: "Profil u UML-u je mehanizam za:",
    options: [
      "Kreiranje potpuno novih jezika",
      "Prilagođavanje meta-modela konkretnim platformama",
      "Brisanje postojećih ograničenja"
    ],
    correct: 1
  },
  {
    id: 92,
    section: "UML PROFILI",
    question: "Profilom se mogu ukinuti postojeća ograničenja u UML meta-modelu.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 93,
    section: "UML PROFILI",
    question: "Osnovni mehanizam proširenja UML meta-modela je:",
    options: ["Tagged value", "Stereotip", "Ograničenje"],
    correct: 1
  },
  {
    id: 94,
    section: "UML PROFILI",
    question: "Required extension u profilu znači da:",
    options: [
      "Instanca stereotipa se proizvoljno dodeljuje",
      "Svakoj instanci metaklase MORA se dodeliti instanca stereotipa",
      "Stereotip se nikada ne koristi"
    ],
    correct: 1
  },
  {
    id: 95,
    section: "UML PROFILI",
    question: "Od UML 2.0, tagged value se može definisati:",
    options: [
      "Nezavisno od stereotipa",
      "Samo kao atribut stereotipa",
      "Samo u paketu"
    ],
    correct: 1
  },
  
  // SEKCIJA 12: MODELOM VOĐENI RAZVOJ (MDA)
  {
    id: 96,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "CIM (Computation Independent Model) je:",
    options: [
      "Model IS implementiran na konkretnoj platformi",
      "Model domena — zajednički rečnik za korisnika i projektanta",
      "Model implementacione platforme"
    ],
    correct: 1
  },
  {
    id: 97,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "PSM (Platform Specific Model) je:",
    options: [
      "Model nezavisan od platforme",
      "Model IS implementiran u datom okruženju",
      "Model implementacione platforme"
    ],
    correct: 1
  },
  {
    id: 98,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "Nivo M3 u hijerarhiji meta-modela odgovara:",
    options: [
      "UML meta-modelu",
      "MOF (Meta Object Facility)",
      "Realnim instancama sistema"
    ],
    correct: 1
  },
  {
    id: 99,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "Nivo M0 u hijerarhiji meta-modela predstavlja:",
    options: [
      "Meta-meta-model",
      "Realne instance u sistemu",
      "UML meta-model"
    ],
    correct: 1
  },
  {
    id: 100,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "XMI (XML Metadata Interchange) služi za:",
    options: [
      "Kreiranje UML dijagrama",
      "Razmenu UML modela",
      "Kompajliranje koda"
    ],
    correct: 1
  },
  {
    id: 101,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "Tok transformacije u MDA je:",
    options: [
      "PSM → PIM → CIM → Kod",
      "CIM → PIM → PSM → Kod",
      "PIM → CIM → PSM → Kod"
    ],
    correct: 1
  },
  {
    id: 102,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "Nivo M2 u hijerarhiji meta-modela odgovara UML meta-modelu.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  
  // SEKCIJA 13: AGILNE METODE
  {
    id: 103,
    section: "AGILNE METODE",
    question: "Agile Manifesto je nastao:",
    options: ["1995.", "2001.", "2010."],
    correct: 1
  },
  {
    id: 104,
    section: "AGILNE METODE",
    question: "Prema Agile Manifestu, više se vrednuje:",
    options: [
      "Detaljna dokumentacija od primenljivog softvera",
      "Primenljiv softver od detaljne dokumentacije",
      "Ugovorni aranžmani od saradnje sa klijentima"
    ],
    correct: 1
  },
  {
    id: 105,
    section: "AGILNE METODE",
    question: "Sprint u Scrum-u traje:",
    options: [
      "1 dan do 1 nedelja",
      "1 nedelja do mesec dana",
      "3 do 6 meseci"
    ],
    correct: 1
  },
  {
    id: 106,
    section: "AGILNE METODE",
    question: "Koliko uloga definiše Scrum?",
    options: ["2", "3", "5"],
    correct: 1
  },
  {
    id: 107,
    section: "AGILNE METODE",
    question: "Product Owner u Scrum-u:",
    options: [
      "Održava procese",
      "Predstavlja zainteresovane strane/poslovanje",
      "Piše kod"
    ],
    correct: 1
  },
  {
    id: 108,
    section: "AGILNE METODE",
    question: "WIP u Kanban-u znači:",
    options: [
      "Work In Progress — ograničen broj taskova u sekciji",
      "Weekly Integration Plan",
      "Work Integration Protocol"
    ],
    correct: 0
  },
  {
    id: 109,
    section: "AGILNE METODE",
    question: "Kanban ima jasno definisane uloge i rokove.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 110,
    section: "AGILNE METODE",
    question: "Programiranje u parovima je karakteristika:",
    options: ["Scrum-a", "Kanban-a", "Ekstremnog programiranja (XP)"],
    correct: 2
  },
  {
    id: 111,
    section: "AGILNE METODE",
    question: "MoSCoW metoda, slovo 'M' znači:",
    options: [
      "Maybe",
      "Must — zahtevi koji moraju biti zadovoljeni",
      "Minor"
    ],
    correct: 1
  },
  {
    id: 112,
    section: "AGILNE METODE",
    question: "DSDM koristi metodu prioriteta zvanu:",
    options: ["RICE", "MoSCoW", "Fibonacci"],
    correct: 1
  },
  {
    id: 113,
    section: "AGILNE METODE",
    question: "Kaubojsko kodiranje je oblik agilnog razvoja.",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 114,
    section: "AGILNE METODE",
    question: "Faze Scrum procesa su:",
    options: [
      "Istraživanje, Planiranje, Proizvodnja",
      "Pre igre, Faza razvoja (igra), Posle igre",
      "Sprint 1, Sprint 2, Sprint 3"
    ],
    correct: 1
  },
  {
    id: 115,
    section: "AGILNE METODE",
    question: "Osnovna mera napretka u agilnom razvoju je:",
    options: [
      "Količina napisane dokumentacije",
      "Ispravan (funkcionalan) softver",
      "Broj sprovedenih sastanaka"
    ],
    correct: 1
  },
  {
    id: 116,
    section: "AGILNE METODE",
    question: "Brzina agilnog razvoja se računa kao:",
    options: [
      "Broj članova tima × broj dana",
      "Broj urađenih jedinica posla / trajanje iteracije",
      "Ukupan broj linija koda / vreme"
    ],
    correct: 1
  },
  {
    id: 117,
    section: "AGILNE METODE",
    question: "Crystal Clear je namenjen timovima od:",
    options: ["1–2 člana", "6–8 članova", "50+ članova"],
    correct: 1
  },
  {
    id: 118,
    section: "AGILNE METODE",
    question: "AUP (Agile Unified Process) je pojednostavljena verzija RUP-a.",
    options: ["Tačno", "Netačno"],
    correct: 0
  },
  
  // DODATNA PITANJA IZ DETALJNE SKRIPTE
  
  // UML OSNOVE - Dodatna
  {
    id: 119,
    section: "UML OSNOVE",
    question: "Dijagrami za opis strukture obuhvataju:",
    options: [
      "Dijagram klasa, dijagram stanja, dijagram aktivnosti",
      "Dijagram klasa, dijagram objekata, dijagram komponenti",
      "Dijagram sekvenci, dijagram komunikacije, dijagram aktivnosti"
    ],
    correct: 1
  },
  {
    id: 120,
    section: "UML OSNOVE",
    question: "Dijagram prelaza stanja spada u dijagrame za opis:",
    options: ["Strukture", "Ponašanja", "Implementacije"],
    correct: 1
  },
  
  // DIJAGRAM KLASA - Dodatna
  {
    id: 121,
    section: "DIJAGRAM KLASA",
    question: "Vidljivost package se označava sa:",
    options: ["-", "#", "~"],
    correct: 2
  },
  {
    id: 122,
    section: "DIJAGRAM KLASA",
    question: "U potpisu atributa, kardinalnost se navodi:",
    options: [
      "Pre naziva atributa",
      "Posle tipa atributa u uglastim zagradama",
      "Posle default vrednosti"
    ],
    correct: 1
  },
  {
    id: 123,
    section: "DIJAGRAM KLASA",
    question: "N-arna veza u dijagramu klasa se predstavlja kao:",
    options: ["Romb", "Krug", "Pravougaonik"],
    correct: 0
  },
  {
    id: 124,
    section: "DIJAGRAM KLASA",
    question: "Socket notacija (polukrug) predstavlja:",
    options: [
      "Interfejs",
      "Usage vezu ka interfejsu",
      "Apstraktnu klasu"
    ],
    correct: 1
  },
  {
    id: 125,
    section: "DIJAGRAM KLASA",
    question: "Usage (<use>) zavisnost znači da:",
    options: [
      "Jedan element zahteva drugi za potpunu implementaciju",
      "Elementi predstavljaju isti koncept",
      "Element je apstraktan"
    ],
    correct: 0
  },
  {
    id: 126,
    section: "DIJAGRAM KLASA",
    question: "Abstraction (<abstraction>) zavisnost znači da:",
    options: [
      "Klasa je apstraktna",
      "Dva elementa predstavljaju isti koncept na različitim nivoima apstrakcije",
      "Element ne može biti instanciran"
    ],
    correct: 1
  },
  {
    id: 127,
    section: "DIJAGRAM KLASA",
    question: "Import (<import>) u paketima:",
    options: [
      "Dodaje elemente u namespace paketa",
      "Spaja sadržaj paketa",
      "Kreira novi paket"
    ],
    correct: 0
  },
  {
    id: 128,
    section: "DIJAGRAM KLASA",
    question: "Xor ograničenje između dve veze znači:",
    options: [
      "Obe veze moraju postojati",
      "Ni jedna veza ne sme postojati",
      "Može postojati samo jedna od dve veze"
    ],
    correct: 2
  },
  
  // DIJAGRAM AKTIVNOSTI - Dodatna
  {
    id: 129,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Pinovi u dijagramu aktivnosti predstavljaju:",
    options: [
      "Tokove kontrole",
      "Ulazne i izlazne parametre akcije",
      "Skladišta podataka"
    ],
    correct: 1
  },
  {
    id: 130,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "<<transformation>> pin se koristi za:",
    options: [
      "Konverziju podataka",
      "Skladištenje podataka",
      "Proveru uslova"
    ],
    correct: 0
  },
  {
    id: 131,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Interruptible region predstavlja:",
    options: [
      "Oblast koja se mora završiti",
      "Oblast koja se može prekinuti događajem",
      "Paralelno izvršavanje"
    ],
    correct: 1
  },
  {
    id: 132,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Slanje signala u dijagramu aktivnosti se grafički prikazuje kao:",
    options: [
      "Konkavni petougaonik",
      "Konveksni petougaonik",
      "Peščani sat"
    ],
    correct: 1
  },
  {
    id: 133,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Prijem signala se grafički prikazuje kao:",
    options: [
      "Konveksni petougaonik",
      "Konkavni petougaonik",
      "Pravougaonik"
    ],
    correct: 1
  },
  {
    id: 134,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Vremenski okidač se prikazuje kao:",
    options: ["Peščani sat", "Sat", "Krug"],
    correct: 0
  },
  {
    id: 135,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Od UML 2.0, particije (swimlanes) mogu biti:",
    options: [
      "Samo vertikalne",
      "Samo horizontalne",
      "2D grid (i vertikalne i horizontalne)"
    ],
    correct: 2
  },
  {
    id: 136,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Stereotip ekspanzionog regiona <<iterative>> znači:",
    options: [
      "Sekvencijalno izvršavanje",
      "Izvršavanje jednom po elementu u proizvoljnom redosledu",
      "Paralelno izvršavanje"
    ],
    correct: 1
  },
  {
    id: 137,
    section: "DIJAGRAM AKTIVNOSTI",
    question: "Stereotip ekspanzionog regiona <<parallel>> znači:",
    options: [
      "Sekvencijalno izvršavanje",
      "Izvršavanje jednom po elementu",
      "Paralelno izvršavanje za sve elemente"
    ],
    correct: 2
  },
  
  // DIJAGRAM PROMENE STANJA - Dodatna
  {
    id: 138,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Akcija u dijagramu stanja je:",
    options: [
      "Trenutna (vrlo kratka)",
      "Dugotrajna aktivnost",
      "Stanje objekta"
    ],
    correct: 0
  },
  {
    id: 139,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Aktivnost u dijagramu stanja traje:",
    options: [
      "Trenutno",
      "Duži vremenski period",
      "Samo pri tranziciji"
    ],
    correct: 1
  },
  {
    id: 140,
    section: "DIJAGRAM PROMENE STANJA",
    question: "Složeno stanje može sadržati:",
    options: [
      "Samo jedno podstanje",
      "Podstanja (dekompozicija)",
      "Samo akcije"
    ],
    correct: 1
  },
  {
    id: 141,
    section: "DIJAGRAM PROMENE STANJA",
    question: "State invariant u dijagramu stanja:",
    options: [
      "Je ograničenje koje se proverava u runtime-u",
      "Predstavlja tranziciju",
      "Označava krajnje stanje"
    ],
    correct: 0
  },
  
  // MODEL PROCESA RAZVOJA IS - Dodatna
  {
    id: 142,
    section: "MODEL PROCESA RAZVOJA IS",
    question: "Informacioni sistem je:",
    options: [
      "Samo baza podataka",
      "Model dela ili celog realnog sistema razvijen za pružanje informacija",
      "Hardverska komponenta"
    ],
    correct: 1
  },
  {
    id: 143,
    section: "MODEL PROCESA ROZWOJA IS",
    question: "Zadaci informacionog sistema obuhvataju:",
    options: [
      "Samo skladištenje podataka",
      "Obuhvat, skladištenje, prenos, prezentovanje i obrada podataka",
      "Samo prezentovanje podataka"
    ],
    correct: 1
  },
  {
    id: 144,
    section: "MODEL PROCESA RAZVOJA IS",
    question: "Izlazi iz faze programiranja su:",
    options: [
      "Idejni projekat i Plan razvoja",
      "Programska podrška i Korisnička dokumentacija",
      "Konceptualni projekat"
    ],
    correct: 1
  },
  {
    id: 145,
    section: "MODEL PROCESA ROZWOJA IS",
    question: "Izlazi iz faze projektovanja su:",
    options: [
      "Konceptualni projekat",
      "Idejni projekat",
      "Implementacioni projekat"
    ],
    correct: 2
  },
  
  // ANALIZA ZAHTEVA - Dodatna
  {
    id: 146,
    section: "ANALIZA ZAHTEVA",
    question: "Spiralni pristup razvoju IS karakteriše:",
    options: [
      "Linearan pristup",
      "Iterativni pristup sa naglaskom na analizi rizika",
      "Agilni pristup"
    ],
    correct: 1
  },
  {
    id: 147,
    section: "ANALIZA ZAHTEVA",
    question: "Iterativno-inkrementalni pristup je pogodan kada:",
    options: [
      "Zahtevi su jasni i stabilni",
      "Zahtevi su promenljivi",
      "Nema korisnika"
    ],
    correct: 1
  },
  {
    id: 148,
    section: "ANALIZA ZAHTEVA",
    question: "Job shadowing tehnika podrazumeva:",
    options: [
      "Intervjuisanje korisnika",
      "Posmatranje i praćenje korisnika u radnom okruženju",
      "Pisanje upitnika"
    ],
    correct: 1
  },
  {
    id: 149,
    section: "ANALIZA ZAHTEVA",
    question: "Brainstorming tehnika se koristi za:",
    options: [
      "Testiranje softvera",
      "Generisanje ideja bez procenjivanja",
      "Kodiranje"
    ],
    correct: 1
  },
  {
    id: 150,
    section: "ANALIZA ZAHTEVA",
    question: "Dijagram toka podataka (DTP) prikazuje:",
    options: [
      "Klase i njihove veze",
      "Vezu interfejsa/skladišta sa procesima",
      "Stanja objekta"
    ],
    correct: 1
  },
  {
    id: 151,
    section: "ANALIZA ZAHTEVA",
    question: "RUP (Rational Unified Process) faze u redosledu su:",
    options: [
      "Planiranje, Dizajn, Kodiranje, Testiranje",
      "Inicijalizacija, Razrada, Konstrukcija, Tranzicija",
      "Analiza, Projektovanje, Implementacija"
    ],
    correct: 1
  },
  
  // OCL - Dodatna
  {
    id: 152,
    section: "OCL",
    question: "OCL ima spoljašnje efekte (side-effects).",
    options: ["Tačno", "Netačno"],
    correct: 1
  },
  {
    id: 153,
    section: "OCL",
    question: "Klauzula 'self' u OCL-u predstavlja:",
    options: [
      "Referendu na instancu tipa iz konteksta",
      "Krajnju vrednost",
      "Početnu vrednost"
    ],
    correct: 0
  },
  {
    id: 154,
    section: "OCL",
    question: "Klauzula 'context' u OCL-u:",
    options: [
      "Definiše kontekst (klasu) na koju se odnosi izraz",
      "Definiše početak programa",
      "Označava kraj izraza"
    ],
    correct: 0
  },
  {
    id: 155,
    section: "OCL",
    question: "OCL tip OrderedSet je:",
    options: [
      "Neuređen, bez duplikata",
      "Uređen, bez duplikata",
      "Uređen, sa duplikatima"
    ],
    correct: 1
  },
  {
    id: 156,
    section: "OCL",
    question: "Operacija size() u OCL-u vraća:",
    options: [
      "Tip elementa",
      "Broj elemenata u kolekciji",
      "Prvi element"
    ],
    correct: 1
  },
  {
    id: 157,
    section: "OCL",
    question: "Operacija isEmpty() u OCL-u vraća true ako:",
    options: [
      "Kolekcija ima jedan element",
      "Kolekcija ima nula elemenata",
      "Kolekcija ima više od 10 elemenata"
    ],
    correct: 1
  },
  {
    id: 158,
    section: "OCL",
    question: "Operacija sum() u OCL-u:",
    options: [
      "Vraća broj elemenata",
      "Vraća sumu svih elemenata kolekcije",
      "Vraća prvi element"
    ],
    correct: 1
  },
  {
    id: 159,
    section: "OCL",
    question: "Operacija count(obj) u OCL-u vraća:",
    options: [
      "Ukupan broj elemenata",
      "Broj pojavljivanja datog elementa",
      "Tip elementa"
    ],
    correct: 1
  },
  {
    id: 160,
    section: "OCL",
    question: "Operacija including(obj) u OCL-u:",
    options: [
      "Vraća kolekciju sa dodatim elementom",
      "Vraća kolekciju bez datog elementa",
      "Briše sve elemente"
    ],
    correct: 0
  },
  {
    id: 161,
    section: "OCL",
    question: "Operacija excluding(obj) u OCL-u:",
    options: [
      "Dodaje element",
      "Vraća kolekciju bez datog elementa",
      "Vraća broj elemenata"
    ],
    correct: 1
  },
  {
    id: 162,
    section: "OCL",
    question: "Operacija at(i) u OCL-u:",
    options: [
      "Vraća i-ti element (1-indexed)",
      "Vraća poslednji element",
      "Vraća broj elemenata"
    ],
    correct: 0
  },
  {
    id: 163,
    section: "OCL",
    question: "Operacija first() u OCL-u vraća:",
    options: [
      "Poslednji element",
      "Prvi element sekvence",
      "Broj elemenata"
    ],
    correct: 1
  },
  {
    id: 164,
    section: "OCL",
    question: "Boolean operator 'xor' u OCL-u znači:",
    options: [
      "Logičko I",
      "Logičko ekskluzivno ILI",
      "Logička implikacija"
    ],
    correct: 1
  },
  {
    id: 165,
    section: "OCL",
    question: "Precondition (pre) ograničenje u OCL-u se proverava:",
    options: [
      "Pre izvršavanja operacije",
      "Posle izvršavanja operacije",
      "Uvek tokom životnog ciklusa"
    ],
    correct: 0
  },
  {
    id: 166,
    section: "OCL",
    question: "Ako navigacija po asocijaciji ima kardinalnost *, rezultat je tipa:",
    options: ["Instance klase", "Set", "Integer"],
    correct: 1
  },
  {
    id: 167,
    section: "OCL",
    question: "Operator 'if-then-else-endif' u OCL-u pripada tipu:",
    options: ["Integer", "Boolean", "String"],
    correct: 1
  },
  
  // UML PROFILI - Dodatna
  {
    id: 168,
    section: "UML PROFILI",
    question: "Non-required extension u profilu znači da:",
    options: [
      "Svakoj instanci mora se dodeliti stereotip",
      "Instanca stereotipa se proizvoljno dodeljuje",
      "Stereotip ne može se koristiti"
    ],
    correct: 1
  },
  {
    id: 169,
    section: "UML PROFILI",
    question: "Stereotip se uvek koristi:",
    options: [
      "Samostalno",
      "Zajedno sa metaklasom",
      "Bez metaklase"
    ],
    correct: 1
  },
  {
    id: 170,
    section: "UML PROFILI",
    question: "Profil se koristi za:",
    options: [
      "Ukidanje postojećih ograničenja",
      "Uvođenje terminologije specifične za platformu",
      "Brisanje metaklasa"
    ],
    correct: 1
  },
  
  // MODELOM VOĐENI RAZVOJ - Dodatna
  {
    id: 171,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "PIM (Platform Independent Model) je:",
    options: [
      "Model domena",
      "Model IS nezavisan od implementacione platforme",
      "Model konkretne platforme"
    ],
    correct: 1
  },
  {
    id: 172,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "PDM (Platform Description Model) je:",
    options: [
      "Model domena",
      "Model implementacione platforme",
      "Model korisničkih zahteva"
    ],
    correct: 1
  },
  {
    id: 173,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "Nivo M1 u hijerarhiji meta-modela predstavlja:",
    options: [
      "MOF",
      "Model konkretnog sistema (dijagram klasa)",
      "Realne instance"
    ],
    correct: 1
  },
  {
    id: 174,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "MOF (Meta Object Facility) se nalazi na nivou:",
    options: ["M0", "M1", "M3"],
    correct: 2
  },
  {
    id: 175,
    section: "MODELOM VOĐENI RAZVOJ (MDA)",
    question: "XMI format služi za:",
    options: [
      "Kreiranje dijagrama",
      "Razmenu UML modela u XML formatu",
      "Kompajliranje koda"
    ],
    correct: 1
  },
  
  // AGILNE METODE - Dodatna
  {
    id: 176,
    section: "AGILNE METODE",
    question: "Prema Agile Manifestu, više se vrednuje:",
    options: [
      "Procesi i alati od pojedinca i interakcije",
      "Pojedinac i interakcija od procesa i alata",
      "Ugovorni aranžmani od saradnje sa klijentima"
    ],
    correct: 1
  },
  {
    id: 177,
    section: "AGILNE METODE",
    question: "Prema Agile Manifestu, više se vrednuje:",
    options: [
      "Pridržavanje plana od reakcije na promenu",
      "Reakcija na promenu od pridržavanja plana",
      "Detaljna dokumentacija od primenljivog softvera"
    ],
    correct: 1
  },
  {
    id: 178,
    section: "AGILNE METODE",
    question: "Osnovna mera napretka u agilnom razvoju prema principima je:",
    options: [
      "Broj sastanaka",
      "Ispravan (funkcionalan) softver",
      "Količina dokumentacije"
    ],
    correct: 1
  },
  {
    id: 179,
    section: "AGILNE METODE",
    question: "Trajanje iteracije u agilnom razvoju je tipično:",
    options: ["6-12 meseci", "1-4 nedelje", "1-2 godine"],
    correct: 1
  },
  {
    id: 180,
    section: "AGILNE METODE",
    question: "Product Backlog u Scrum-u se pravi u fazi:",
    options: ["Pre igre", "Razvoj (igra)", "Posle igre"],
    correct: 0
  },
  {
    id: 181,
    section: "AGILNE METODE",
    question: "Faza 'Posle igre' u Scrum-u obuhvata:",
    options: [
      "Planiranje i arhitekturu",
      "Testiranje, integraciju i dokumentaciju",
      "Kodiranje"
    ],
    correct: 1
  },
  {
    id: 182,
    section: "AGILNE METODE",
    question: "Baždarenje u Kanban-u podrazumeva:",
    options: [
      "Podešavanje WIP parametra",
      "Kreiranje novih taskova",
      "Brisanje završenih taskova"
    ],
    correct: 0
  },
  {
    id: 183,
    section: "AGILNE METODE",
    question: "Kanban je pogodan za timove veličine:",
    options: ["Manje od 4 člana", "10-20 članova", "Više od 50 članova"],
    correct: 0
  },
  {
    id: 184,
    section: "AGILNE METODE",
    question: "U XP (Ekstremno programiranje), funkcionalnosti se programiraju:",
    options: [
      "Na početku projekta",
      "Tek kada se pojavi potreba",
      "Na kraju projekta"
    ],
    correct: 1
  },
  {
    id: 185,
    section: "AGILNE METODE",
    question: "Životni ciklus XP-a obuhvata faze:",
    options: [
      "Samo istraživanje i planiranje",
      "Istraživanje, Planiranje, Iteracije, Proizvodnja, Održavanje, Umiranje",
      "Samo kodiranje i testiranje"
    ],
    correct: 1
  },
  {
    id: 186,
    section: "AGILNE METODE",
    question: "FDD (Feature Driven Development) ima koliko osnovnih aktivnosti?",
    options: ["3", "5", "7"],
    correct: 1
  },
  {
    id: 187,
    section: "AGILNE METODE",
    question: "ASD (Adaptive Software Development) ciklusi obuhvataju:",
    options: [
      "Planiranje, kodiranje, testiranje",
      "Špekulacija, kolaboracija, učenje",
      "Analiza, dizajn, implementacija"
    ],
    correct: 1
  },
  {
    id: 188,
    section: "AGILNE METODE",
    question: "Crystal Clear metoda fokusira se na:",
    options: [
      "Procese, ne ljude",
      "Ljude, ne procese",
      "Dokumentaciju"
    ],
    correct: 1
  },
  {
    id: 189,
    section: "AGILNE METODE",
    question: "AUP (Agile Unified Process) ima koliko disciplina?",
    options: ["5", "7", "9"],
    correct: 1
  },
  {
    id: 190,
    section: "AGILNE METODE",
    question: "U MoSCoW metodi, slovo 'S' (SHOULD) znači:",
    options: [
      "Mora biti implementirano",
      "Stavke koje bi trebalo uključiti, ako je moguće",
      "Neće biti implementirano"
    ],
    correct: 1
  },
  {
    id: 191,
    section: "AGILNE METODE",
    question: "U MoSCoW metodi, slovo 'C' (COULD) označava:",
    options: [
      "Kritične zahteve",
      "Poželjne, ali ne neophodne zahteve",
      "Zahteve koji moraju biti implementirani"
    ],
    correct: 1
  },
  {
    id: 192,
    section: "AGILNE METODE",
    question: "U MoSCoW metodi, slovo 'W' (WON'T) označava:",
    options: [
      "Najvažnije zahteve",
      "Zahteve za budućnost",
      "Zahteve srednje važnosti"
    ],
    correct: 1
  },
  {
    id: 193,
    section: "AGILNE METODE",
    question: "DSDM definiše sledeće aspekte projekta:",
    options: [
      "Samo troškove",
      "Troškove, kvalitet i vreme",
      "Samo kvalitet"
    ],
    correct: 1
  },
  {
    id: 194,
    section: "AGILNE METODE",
    question: "Poređenje agilnog i iterativno-inkrementalnog razvoja - agilni ima:",
    options: [
      "Duže iteracije (meseci)",
      "Kraće iteracije (nedelje)",
      "Iste dužine iteracija"
    ],
    correct: 1
  },
  {
    id: 195,
    section: "AGILNE METODE",
    question: "Komunikacija 'licem-u-lice' u agilnom razvoju je:",
    options: [
      "Obeshrabrena",
      "Preferirana kao najefikasnija",
      "Zabranjena"
    ],
    correct: 1
  }
];
