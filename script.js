// Pool of ~200 historic events spanning 3100 BCE to 2023 CE
const ALL_EVENTS = [
  // Ancient World (3100 BCE - 1 CE)
  { id: 1,   year: -3100, displayYear: "3100 BCE", title: "Unification of Egypt",          desc: "Upper and Lower Egypt unified under first pharaoh." },
  { id: 2,   year: -2560, displayYear: "2560 BCE", title: "Great Pyramid completed",       desc: "Pyramid of Giza built for Pharaoh Khufu." },
  { id: 3,   year: -2334, displayYear: "2334 BCE", title: "Akkadian Empire founded",       desc: "Sargon of Akkad creates first known empire." },
  { id: 4,   year: -1754, displayYear: "1754 BCE", title: "Code of Hammurabi",             desc: "One of the earliest written legal codes." },
  { id: 5,   year: -1595, displayYear: "1595 BCE", title: "Hittites sack Babylon",         desc: "Hittite army conquers Babylon." },
  { id: 6,   year: -1300, displayYear: "1300 BCE", title: "Exodus from Egypt",             desc: "Moses leads Israelites out of slavery." },
  { id: 7,   year: -1250, displayYear: "1250 BCE", title: "Fall of Troy",                  desc: "Greeks destroy the city of Troy." },
  { id: 8,   year: -1100, displayYear: "1100 BCE", title: "Bronze Age Collapse",           desc: "Mediterranean civilizations collapse suddenly." },
  { id: 9,   year: -776,  displayYear: "776 BCE",  title: "First Olympic Games",           desc: "Ancient games held in Olympia, Greece." },
  { id: 10,  year: -753,  displayYear: "753 BCE",  title: "Founding of Rome",              desc: "Romulus founds the city of Rome." },
  { id: 11,  year: -609,  displayYear: "609 BCE",  title: "Battle of Megiddo",             desc: "Egypt defeats Judah at Megiddo." },
  { id: 12,  year: -586,  displayYear: "586 BCE",  title: "Destruction of Solomon's Temple", desc: "Babylonians destroy the First Temple." },
  { id: 13,  year: -563,  displayYear: "563 BCE",  title: "Birth of Buddha",               desc: "Siddhartha Gautama born in Lumbini." },
  { id: 14,  year: -509,  displayYear: "509 BCE",  title: "Roman Republic begins",         desc: "Romans overthrow the monarchy." },
  { id: 15,  year: -490,  displayYear: "490 BCE",  title: "Battle of Marathon",            desc: "Greeks defeat Persians in pivotal battle." },
  { id: 16,  year: -480,  displayYear: "480 BCE",  title: "Battle of Thermopylae",         desc: "300 Spartans fight Persian army." },
  { id: 17,  year: -432,  displayYear: "432 BCE",  title: "Parthenon completed",           desc: "Iconic temple built on Athens acropolis." },
  { id: 18,  year: -356,  displayYear: "356 BCE",  title: "Birth of Alexander the Great",  desc: "Alexander born in Macedon." },
  { id: 19,  year: -331,  displayYear: "331 BCE",  title: "Battle of Gaugamela",           desc: "Alexander defeats the Persian Empire." },
  { id: 20,  year: -323,  displayYear: "323 BCE",  title: "Death of Alexander",            desc: "Alexander the Great dies in Babylon." },
  { id: 21,  year: -221,  displayYear: "221 BCE",  title: "Qin unifies China",             desc: "Qin Shi Huang becomes first emperor." },
  { id: 22,  year: -214,  displayYear: "214 BCE",  title: "Great Wall construction",       desc: "Construction of the Great Wall begins." },
  { id: 23,  year: -44,   displayYear: "44 BCE",   title: "Caesar assassinated",           desc: "Julius Caesar killed on the Ides of March." },
  { id: 24,  year: -4,    displayYear: "4 BCE",    title: "Birth of Jesus",                desc: "Traditional date for the birth of Jesus." },

  // Early Middle Ages (1 CE - 600 CE)
  { id: 25,  year: 79,    displayYear: "79 CE",    title: "Vesuvius erupts",               desc: "Mount Vesuvius buries Pompeii." },
  { id: 26,  year: 105,   displayYear: "105 CE",   title: "Paper invented in China",       desc: "Cai Lun improves papermaking process." },
  { id: 27,  year: 312,   displayYear: "312 CE",   title: "Battle of Milvian Bridge",      desc: "Constantine defeats Maxentius." },
  { id: 28,  year: 320,   displayYear: "320 CE",   title: "Gupta Empire founded",          desc: "Golden age of India begins." },
  { id: 29,  year: 380,   displayYear: "380 CE",   title: "Christianity official in Rome", desc: "Christianity becomes state religion." },
  { id: 30,  year: 476,   displayYear: "476 CE",   title: "Fall of Western Rome",          desc: "End of the Western Roman Empire." },
  { id: 31,  year: 481,   displayYear: "481 CE",   title: "Clovis unites Franks",          desc: "Frankish kingdoms united under Clovis." },
  { id: 32,  year: 537,   displayYear: "537 CE",   title: "Hagia Sophia completed",        desc: "Magnificent Byzantine cathedral opens." },
  { id: 33,  year: 570,   displayYear: "570 CE",   title: "Birth of Muhammad",             desc: "Prophet Muhammad born in Mecca." },
  { id: 34,  year: 622,   displayYear: "622 CE",   title: "Hijra to Medina",               desc: "Muhammad migrates, Islamic calendar begins." },
  { id: 35,  year: 632,   displayYear: "632 CE",   title: "Death of Muhammad",             desc: "Prophet Muhammad dies in Medina." },
  { id: 36,  year: 661,   displayYear: "661 CE",   title: "Umayyad Caliphate founded",     desc: "First great Islamic empire established." },

  // Middle Ages (600 CE - 1000 CE)
  { id: 37,  year: 711,   displayYear: "711 CE",   title: "Muslim conquest of Iberia",     desc: "Muslims cross into Spain." },
  { id: 38,  year: 732,   displayYear: "732 CE",   title: "Battle of Tours",               desc: "Franks halt Muslim advance in Europe." },
  { id: 39,  year: 750,   displayYear: "750 CE",   title: "Abbasid Revolution",            desc: "Umayyads overthrown, Baghdad rises." },
  { id: 40,  year: 762,   displayYear: "762 CE",   title: "Baghdad founded",               desc: "New Abbasid capital established." },
  { id: 41,  year: 793,   displayYear: "793 CE",   title: "Viking raid on Lindisfarne",    desc: "Vikings attack England for first time." },
  { id: 42,  year: 800,   displayYear: "800 CE",   title: "Charlemagne crowned",           desc: "Charlemagne crowned Holy Roman Emperor." },
  { id: 43,  year: 843,   displayYear: "843 CE",   title: "Treaty of Verdun",              desc: "Carolingian Empire divided three ways." },
  { id: 44,  year: 862,   displayYear: "862 CE",   title: "Kievan Rus founded",            desc: "Rurik founds the Russian state." },
  { id: 45,  year: 868,   displayYear: "868 CE",   title: "First printed book",            desc: "Diamond Sutra printed in China." },
  { id: 46,  year: 960,   displayYear: "960 CE",   title: "Song Dynasty begins",           desc: "Song Dynasty founded in China." },
  { id: 47,  year: 962,   displayYear: "962 CE",   title: "Holy Roman Empire begins",      desc: "Otto I crowned first emperor." },
  { id: 48,  year: 982,   displayYear: "982 CE",   title: "Erik discovers Greenland",      desc: "Erik the Red explores Greenland." },
  { id: 49,  year: 1000,  displayYear: "1000",     title: "Vikings reach North America",   desc: "Leif Erikson reaches Vinland." },

  // Late Middle Ages (1000 CE - 1500 CE)
  { id: 50,  year: 1054,  displayYear: "1054",     title: "Great Schism",                  desc: "Christianity splits into East and West." },
  { id: 51,  year: 1066,  displayYear: "1066",     title: "Battle of Hastings",            desc: "William the Conqueror invades England." },
  { id: 52,  year: 1071,  displayYear: "1071",     title: "Battle of Manzikert",           desc: "Seljuk Turks defeat Byzantine army." },
  { id: 53,  year: 1096,  displayYear: "1096",     title: "First Crusade begins",          desc: "Christians march to reclaim the Holy Land." },
  { id: 54,  year: 1187,  displayYear: "1187",     title: "Saladin captures Jerusalem",    desc: "Saladin retakes Jerusalem from Crusaders." },
  { id: 55,  year: 1206,  displayYear: "1206",     title: "Mongol Empire founded",         desc: "Genghis Khan unites the Mongols." },
  { id: 56,  year: 1215,  displayYear: "1215",     title: "Magna Carta signed",            desc: "English barons force king to limit power." },
  { id: 57,  year: 1271,  displayYear: "1271",     title: "Marco Polo's journey",          desc: "Marco Polo travels to China." },
  { id: 58,  year: 1325,  displayYear: "1325",     title: "Tenochtitlan founded",          desc: "Aztec capital city established." },
  { id: 59,  year: 1337,  displayYear: "1337",     title: "Hundred Years War begins",      desc: "England and France go to war." },
  { id: 60,  year: 1347,  displayYear: "1347",     title: "Black Death reaches Europe",    desc: "Plague kills millions across Europe." },
  { id: 61,  year: 1368,  displayYear: "1368",     title: "Ming Dynasty begins",           desc: "Ming Dynasty overthrows Mongol rule." },
  { id: 62,  year: 1400,  displayYear: "1400",     title: "Rise of Aztec Empire",          desc: "Aztec civilization dominates central Mexico." },
  { id: 63,  year: 1415,  displayYear: "1415",     title: "Battle of Agincourt",           desc: "Henry V defeats French army." },
  { id: 64,  year: 1439,  displayYear: "1439",     title: "Movable type printing",         desc: "Gutenberg invents printing press." },
  { id: 65,  year: 1453,  displayYear: "1453",     title: "Fall of Constantinople",        desc: "Ottoman Empire conquers Byzantium." },
  { id: 66,  year: 1469,  displayYear: "1469",     title: "Isabella and Ferdinand marry",  desc: "Spanish crowns united by marriage." },
  { id: 67,  year: 1492,  displayYear: "1492",     title: "Columbus reaches Americas",     desc: "Voyage funded by Spain." },
  { id: 68,  year: 1498,  displayYear: "1498",     title: "Vasco da Gama reaches India",   desc: "Sea route to India discovered." },

  // Age of Exploration & Reformation (1500 CE - 1600 CE)
  { id: 69,  year: 1503,  displayYear: "1503",     title: "Mona Lisa painted",             desc: "Leonardo da Vinci begins the masterpiece." },
  { id: 70,  year: 1517,  displayYear: "1517",     title: "Luther's 95 Theses",            desc: "Martin Luther sparks the Reformation." },
  { id: 71,  year: 1519,  displayYear: "1519",     title: "Magellan's expedition",         desc: "First circumnavigation of Earth begins." },
  { id: 72,  year: 1521,  displayYear: "1521",     title: "Fall of Tenochtitlan",          desc: "Aztec Empire falls to Cortes." },
  { id: 73,  year: 1526,  displayYear: "1526",     title: "Mughal Empire founded",         desc: "Babur wins Battle of Panipat." },
  { id: 74,  year: 1533,  displayYear: "1533",     title: "Henry VIII breaks with Rome",   desc: "Henry VIII establishes Church of England." },
  { id: 75,  year: 1543,  displayYear: "1543",     title: "Heliocentric theory published", desc: "Copernicus says Earth orbits the Sun." },
  { id: 76,  year: 1555,  displayYear: "1555",     title: "Peace of Augsburg",             desc: "Princes choose Catholic or Protestant." },
  { id: 77,  year: 1558,  displayYear: "1558",     title: "Elizabeth I becomes Queen",      desc: "Elizabeth begins long reign of England." },
  { id: 78,  year: 1571,  displayYear: "1571",     title: "Battle of Lepanto",             desc: "Christians defeat Ottoman fleet." },
  { id: 79,  year: 1582,  displayYear: "1582",     title: "Gregorian calendar",            desc: "Pope Gregory XIII reforms the calendar." },
  { id: 80,  year: 1588,  displayYear: "1588",     title: "Spanish Armada defeated",       desc: "England defeats Spanish fleet." },
  { id: 81,  year: 1598,  displayYear: "1598",     title: "Edict of Nantes",               desc: "Henry IV grants rights to Huguenots." },

  // 17th Century
  { id: 82,  year: 1600,  displayYear: "1600",     title: "East India Company founded",    desc: "British trading company established." },
  { id: 83,  year: 1602,  displayYear: "1602",     title: "Dutch East India Company",      desc: "First publicly traded company." },
  { id: 84,  year: 1607,  displayYear: "1607",     title: "Jamestown founded",             desc: "First permanent English colony in America." },
  { id: 85,  year: 1610,  displayYear: "1610",     title: "Galileo discovers Jupiter's moons", desc: "Telescope reveals four moons of Jupiter." },
  { id: 86,  year: 1616,  displayYear: "1616",     title: "Shakespeare dies",              desc: "William Shakespeare dies in Stratford." },
  { id: 87,  year: 1618,  displayYear: "1618",     title: "Thirty Years War begins",       desc: "Devastating European religious war." },
  { id: 88,  year: 1620,  displayYear: "1620",     title: "Mayflower reaches Plymouth",    desc: "Pilgrims land at Plymouth Rock." },
  { id: 89,  year: 1642,  displayYear: "1642",     title: "English Civil War begins",      desc: "Parliament vs. King Charles I." },
  { id: 90,  year: 1644,  displayYear: "1644",     title: "Qing Dynasty begins",           desc: "Manchus conquer China." },
  { id: 91,  year: 1648,  displayYear: "1648",     title: "Peace of Westphalia",           desc: "Thirty Years War ends, modern states system." },
  { id: 92,  year: 1687,  displayYear: "1687",     title: "Newton's Principia",            desc: "Isaac Newton publishes laws of motion." },

  // 18th Century
  { id: 93,  year: 1700,  displayYear: "1700",     title: "Great Northern War begins",     desc: "Sweden vs. Russia, Poland, Denmark." },
  { id: 94,  year: 1707,  displayYear: "1707",     title: "Great Britain created",         desc: "England and Scotland unite." },
  { id: 95,  year: 1712,  displayYear: "1712",     title: "Steam engine invented",         desc: "Newcomen builds first practical engine." },
  { id: 96,  year: 1756,  displayYear: "1756",     title: "Seven Years War begins",        desc: "Global conflict involving all great powers." },
  { id: 97,  year: 1757,  displayYear: "1757",     title: "Battle of Plassey",             desc: "British defeat nawab of Bengal." },
  { id: 98,  year: 1770,  displayYear: "1770",     title: "Cook explores Australia",       desc: "Captain Cook charts eastern Australia." },
  { id: 99,  year: 1773,  displayYear: "1773",     title: "Boston Tea Party",              desc: "Colonists protest British tea tax." },
  { id: 100, year: 1776,  displayYear: "1776",     title: "American Independence",         desc: "Declaration of Independence signed." },
  { id: 101, year: 1783,  displayYear: "1783",     title: "Treaty of Paris",               desc: "American Revolution ends, US recognized." },
  { id: 102, year: 1788,  displayYear: "1788",     title: "First Fleet reaches Australia", desc: "British colonize Australia." },
  { id: 103, year: 1789,  displayYear: "1789",     title: "French Revolution begins",      desc: "Storming of the Bastille." },
  { id: 104, year: 1792,  displayYear: "1792",     title: "French monarchy abolished",     desc: "France declared a republic." },
  { id: 105, year: 1799,  displayYear: "1799",     title: "Rosetta Stone discovered",      desc: "Key to deciphering Egyptian hieroglyphs." },

  // 19th Century
  { id: 106, year: 1800,  displayYear: "1800",     title: "Volta invents battery",         desc: "Alessandro Volta creates electric battery." },
  { id: 107, year: 1803,  displayYear: "1803",     title: "Louisiana Purchase",            desc: "US doubles in size buying from France." },
  { id: 108, year: 1804,  displayYear: "1804",     title: "Napoleon crowned Emperor",      desc: "Napoleon crowns himself at Notre Dame." },
  { id: 109, year: 1807,  displayYear: "1807",     title: "Slave trade abolished",         desc: "Britain outlaws the slave trade." },
  { id: 110, year: 1810,  displayYear: "1810",     title: "Mexican independence begins",   desc: "Mexico begins war of independence." },
  { id: 111, year: 1815,  displayYear: "1815",     title: "Battle of Waterloo",            desc: "Napoleon's final defeat." },
  { id: 112, year: 1825,  displayYear: "1825",     title: "First public railway",          desc: "Stockton-Darlington Railway opens." },
  { id: 113, year: 1826,  displayYear: "1826",     title: "First photograph taken",        desc: "Niepce captures earliest surviving photo." },
  { id: 114, year: 1830,  displayYear: "1830",     title: "Belgian Revolution",            desc: "Belgium gains independence from Netherlands." },
  { id: 115, year: 1837,  displayYear: "1837",     title: "Queen Victoria's reign",        desc: "Victoria becomes Queen of England." },
  { id: 116, year: 1838,  displayYear: "1838",     title: "Trail of Tears",                desc: "Native Americans forcibly relocated." },
  { id: 117, year: 1840,  displayYear: "1840",     title: "Treaty of Waitangi",            desc: "British and Maori sign NZ treaty." },
  { id: 118, year: 1848,  displayYear: "1848",     title: "European Revolutions",          desc: "Revolts sweep across Europe." },
  { id: 119, year: 1848,  displayYear: "1848",     title: "Communist Manifesto",           desc: "Marx and Engels publish their manifesto." },
  { id: 120, year: 1851,  displayYear: "1851",     title: "Great Exhibition",              desc: "Crystal Palace exhibition in London." },
  { id: 121, year: 1853,  displayYear: "1853",     title: "Perry opens Japan",             desc: "Commodore Perry forces Japan to trade." },
  { id: 122, year: 1857,  displayYear: "1857",     title: "Indian Rebellion",              desc: "Sepoy Mutiny against British rule." },
  { id: 123, year: 1859,  displayYear: "1859",     title: "Origin of Species published",   desc: "Darwin publishes theory of evolution." },
  { id: 124, year: 1861,  displayYear: "1861",     title: "American Civil War begins",     desc: "South secedes from the Union." },
  { id: 125, year: 1864,  displayYear: "1864",     title: "Red Cross founded",             desc: "International humanitarian organization created." },
  { id: 126, year: 1865,  displayYear: "1865",     title: "Civil War ends / Lincoln killed", desc: "Confederacy surrenders, Lincoln assassinated." },
  { id: 127, year: 1868,  displayYear: "1868",     title: "Meiji Restoration",             desc: "Japan modernizes, emperor restored." },
  { id: 128, year: 1869,  displayYear: "1869",     title: "Suez Canal opens",              desc: "Links the Mediterranean and Red Sea." },
  { id: 129, year: 1870,  displayYear: "1870",     title: "Franco-Prussian War",           desc: "Prussia defeats France, Germany unifies." },
  { id: 130, year: 1876,  displayYear: "1876",     title: "Telephone invented",            desc: "Alexander Graham Bell patents the phone." },
  { id: 131, year: 1879,  displayYear: "1879",     title: "Light bulb invented",           desc: "Edison creates practical electric light." },
  { id: 132, year: 1885,  displayYear: "1885",     title: "Berlin Conference",             desc: "European powers divide Africa." },
  { id: 133, year: 1889,  displayYear: "1889",     title: "Eiffel Tower completed",        desc: "Iconic tower built for Paris exhibition." },
  { id: 134, year: 1893,  displayYear: "1893",     title: "Women vote in New Zealand",     desc: "First country to grant women's suffrage." },
  { id: 135, year: 1895,  displayYear: "1895",     title: "X-rays discovered",             desc: "Röntgen discovers X-ray radiation." },
  { id: 136, year: 1898,  displayYear: "1898",     title: "Spanish-American War",          desc: "US defeats Spain, gains Puerto Rico, Philippines." },

  // Early 20th Century
  { id: 137, year: 1900,  displayYear: "1900",     title: "Boxer Rebellion",               desc: "Anti-foreign uprising in China." },
  { id: 138, year: 1903,  displayYear: "1903",     title: "First flight",                  desc: "Wright Brothers achieve powered flight." },
  { id: 139, year: 1905,  displayYear: "1905",     title: "Special relativity published",  desc: "Einstein revolutionizes physics." },
  { id: 140, year: 1911,  displayYear: "1911",     title: "South Pole reached",            desc: "Amundsen first to reach the South Pole." },
  { id: 141, year: 1912,  displayYear: "1912",     title: "Titanic sinks",                 desc: "Unsinkable ship hits iceberg." },
  { id: 142, year: 1913,  displayYear: "1913",     title: "Assembly line introduced",      desc: "Ford revolutionizes manufacturing." },
  { id: 143, year: 1914,  displayYear: "1914",     title: "World War I begins",            desc: "Archduke Ferdinand assassinated, war erupts." },
  { id: 144, year: 1917,  displayYear: "1917",     title: "Russian Revolution",            desc: "Bolsheviks seize power in Russia." },
  { id: 145, year: 1918,  displayYear: "1918",     title: "World War I ends",              desc: "Armistice ends the Great War." },
  { id: 146, year: 1919,  displayYear: "1919",     title: "Treaty of Versailles",          desc: "Peace treaty punishes Germany." },
  { id: 147, year: 1920,  displayYear: "1920",     title: "Women's suffrage in US",        desc: "19th Amendment grants women the vote." },
  { id: 148, year: 1922,  displayYear: "1922",     title: "Tutankhamun's tomb found",      desc: "Howard Carter discovers intact tomb." },
  { id: 149, year: 1923,  displayYear: "1923",     title: "Republic of Turkey founded",    desc: "Atatürk establishes modern Turkey." },
  { id: 150, year: 1928,  displayYear: "1928",     title: "Penicillin discovered",         desc: "Fleming discovers first antibiotic." },
  { id: 151, year: 1929,  displayYear: "1929",     title: "Wall Street Crash",             desc: "Stock market crashes, Great Depression." },

  // World War II era
  { id: 152, year: 1933,  displayYear: "1933",     title: "Hitler becomes Chancellor",     desc: "Nazi Party takes power in Germany." },
  { id: 153, year: 1936,  displayYear: "1936",     title: "Spanish Civil War begins",      desc: "Republicans vs. Nationalists in Spain." },
  { id: 154, year: 1937,  displayYear: "1937",     title: "Nanjing Massacre",              desc: "Japanese forces massacre Chinese civilians." },
  { id: 155, year: 1939,  displayYear: "1939",     title: "World War II begins",           desc: "Germany invades Poland." },
  { id: 156, year: 1941,  displayYear: "1941",     title: "Pearl Harbor attack",           desc: "Japan attacks US, America enters WWII." },
  { id: 157, year: 1942,  displayYear: "1942",     title: "Manhattan Project begins",      desc: "US starts building atomic bomb." },
  { id: 158, year: 1943,  displayYear: "1943",     title: "Battle of Stalingrad ends",     desc: "Turning point on Eastern Front." },
  { id: 159, year: 1944,  displayYear: "1944",     title: "D-Day invasion",                desc: "Allies land in Normandy, France." },
  { id: 160, year: 1945,  displayYear: "1945",     title: "WWII ends / Atomic bombs",      desc: "Nuclear weapons used, Japan surrenders." },

  // Cold War era
  { id: 161, year: 1947,  displayYear: "1947",     title: "Indian independence",           desc: "India gains independence from Britain." },
  { id: 162, year: 1948,  displayYear: "1948",     title: "State of Israel founded",       desc: "Israel declares independence." },
  { id: 163, year: 1949,  displayYear: "1949",     title: "PRC founded",                   desc: "Mao proclaims People's Republic of China." },
  { id: 164, year: 1950,  displayYear: "1950",     title: "Korean War begins",             desc: "North invades South Korea." },
  { id: 165, year: 1953,  displayYear: "1953",     title: "DNA structure discovered",      desc: "Watson and Crick reveal double helix." },
  { id: 166, year: 1954,  displayYear: "1954",     title: "Brown v. Board of Education",   desc: "US Supreme Court bans school segregation." },
  { id: 167, year: 1955,  displayYear: "1955",     title: "Montgomery Bus Boycott",        desc: "Rosa Parks sparks civil rights movement." },
  { id: 168, year: 1956,  displayYear: "1956",     title: "Suez Crisis",                   desc: "Israel, Britain, France invade Egypt." },
  { id: 169, year: 1957,  displayYear: "1957",     title: "Sputnik launched",              desc: "Soviet Union launches first satellite." },
  { id: 170, year: 1961,  displayYear: "1961",     title: "Berlin Wall built",             desc: "Wall divides East and West Berlin." },
  { id: 171, year: 1962,  displayYear: "1962",     title: "Cuban Missile Crisis",          desc: "US and USSR near nuclear war." },
  { id: 172, year: 1963,  displayYear: "1963",     title: "JFK assassinated",              desc: "President Kennedy killed in Dallas." },
  { id: 173, year: 1964,  displayYear: "1964",     title: "Civil Rights Act",              desc: "Landmark anti-discrimination law signed." },
  { id: 174, year: 1966,  displayYear: "1966",     title: "Cultural Revolution begins",    desc: "Mao launches campaign in China." },
  { id: 175, year: 1967,  displayYear: "1967",     title: "Six-Day War",                   desc: "Israel defeats Arab neighbors." },
  { id: 176, year: 1968,  displayYear: "1968",     title: "Prague Spring",                 desc: "Czechoslovakia's brief liberalization." },
  { id: 177, year: 1969,  displayYear: "1969",     title: "Apollo 11 Moon landing",        desc: "First humans walk on the Moon." },
  { id: 178, year: 1970,  displayYear: "1970",     title: "First Earth Day",               desc: "Environmental movement goes mainstream." },
  { id: 179, year: 1973,  displayYear: "1973",     title: "Oil crisis",                    desc: "OPEC embargo shocks global economy." },
  { id: 180, year: 1974,  displayYear: "1974",     title: "Nixon resigns",                 desc: "Watergate scandal forces resignation." },
  { id: 181, year: 1975,  displayYear: "1975",     title: "Fall of Saigon",                desc: "Vietnam War ends with communist victory." },
  { id: 182, year: 1976,  displayYear: "1976",     title: "Apple Computer founded",        desc: "Steve Jobs and Steve Wozniak start Apple." },
  { id: 183, year: 1978,  displayYear: "1978",     title: "Camp David Accords",            desc: "Egypt and Israel make peace." },
  { id: 184, year: 1979,  displayYear: "1979",     title: "Iranian Revolution",            desc: "Shah overthrown, Islamic republic created." },

  // Late 20th Century
  { id: 185, year: 1981,  displayYear: "1981",     title: "Space Shuttle first flight",    desc: "Columbia launches first reusable spacecraft." },
  { id: 186, year: 1986,  displayYear: "1986",     title: "Chernobyl disaster",            desc: "Worst nuclear accident in history." },
  { id: 187, year: 1989,  displayYear: "1989",     title: "Fall of the Berlin Wall",       desc: "Symbolic end of the Cold War division." },
  { id: 188, year: 1990,  displayYear: "1990",     title: "German reunification",          desc: "East and West Germany unite." },
  { id: 189, year: 1991,  displayYear: "1991",     title: "Soviet Union dissolves",        desc: "USSR collapses, 15 republics independent." },
  { id: 190, year: 1994,  displayYear: "1994",     title: "Rwandan Genocide",              desc: "Hutu extremists kill 800,000 Tutsis." },
  { id: 191, year: 1997,  displayYear: "1997",     title: "Hong Kong returned to China",   desc: "End of British colonial rule." },

  // 21st Century
  { id: 192, year: 2001,  displayYear: "2001",     title: "September 11 attacks",          desc: "Terrorist attacks kill nearly 3,000." },
  { id: 193, year: 2003,  displayYear: "2003",     title: "Human Genome completed",        desc: "Human genome fully sequenced." },
  { id: 194, year: 2007,  displayYear: "2007",     title: "iPhone released",               desc: "Apple launches the smartphone revolution." },
  { id: 195, year: 2008,  displayYear: "2008",     title: "Global financial crisis",       desc: "Banking collapse triggers worldwide recession." },
  { id: 196, year: 2011,  displayYear: "2011",     title: "Arab Spring begins",            desc: "Pro-democracy protests sweep the Middle East." },
  { id: 197, year: 2016,  displayYear: "2016",     title: "Paris Climate Agreement",       desc: "195 nations commit to limit warming." },
  { id: 198, year: 2020,  displayYear: "2020",     title: "COVID-19 pandemic",             desc: "Global pandemic declared by WHO." },
  { id: 199, year: 2021,  displayYear: "2021",     title: "James Webb telescope launched", desc: "Most powerful space telescope deployed." },
  { id: 200, year: 2022,  displayYear: "2022",     title: "Russia invades Ukraine",        desc: "Largest European land war since WWII." }
];

const GAME_SIZE = 10;

let gameEvents = [];
let queue = [];
let placed = [];
let current = null;
let attempts = 0;
let errors = 0;
let startTime = 0;
let showYearCount = 0;
let showDescCount = 0;
let revealedYearIds = new Set();
let descRevealed = false;

const cardZone  = document.getElementById("card-zone");
const timeline  = document.getElementById("timeline");
const progressEl = document.getElementById("progress");
const errorModal = document.getElementById("error-modal");
const errorMsg   = document.getElementById("error-msg");
const retryBtn   = document.getElementById("retry-btn");
const winModal   = document.getElementById("win-modal");
const statsEl    = document.getElementById("stats");
const playAgain  = document.getElementById("play-again");
const closeWin   = document.getElementById("close-win");

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initGame() {
  gameEvents = shuffle(ALL_EVENTS).slice(0, GAME_SIZE);
  queue = shuffle(gameEvents);
  placed = [];
  current = null;
  attempts = 0;
  errors = 0;
  showYearCount = 0;
  showDescCount = 0;
  revealedYearIds = new Set();
  descRevealed = false;
  startTime = Date.now();
  errorModal.classList.add("hidden");
  winModal.classList.add("hidden");
  nextCard();
}

function nextCard() {
  current = queue.shift();
  descRevealed = false;
  render();
}

function render() {
  progressEl.textContent = `${placed.length} / ${gameEvents.length} placed`;

  cardZone.innerHTML = "";

  if (current) {
    const cur = document.createElement("div");
    cur.className = "card active";
    cur.id = "active-card";

    const titleDiv = document.createElement("div");
    titleDiv.className = "title";
    titleDiv.textContent = current.title;
    cur.appendChild(titleDiv);

    if (!descRevealed) {
      const btn = document.createElement("button");
      btn.className = "reveal-btn";
      btn.textContent = "Show Detail";
      btn.addEventListener("click", e => {
        e.stopPropagation();
        if (!descRevealed && current) {
          descRevealed = true;
          showDescCount++;
          render();
        }
      });
      cur.appendChild(btn);
    } else {
      const descDiv = document.createElement("div");
      descDiv.className = "card-line card-desc";
      descDiv.textContent = current.desc;
      cur.appendChild(descDiv);
    }

    cardZone.appendChild(cur);
  }

  timeline.innerHTML = "";

  if (placed.length === 0) {
    timeline.appendChild(makeDropzone(0, "Drop card here to start timeline"));
  } else {
    timeline.appendChild(makeDropzone(0, "Drop here (before all)"));

    placed.forEach((ev, idx) => {
      const yearRevealed = revealedYearIds.has(ev.id);
      const slot = document.createElement("div");
      slot.className = "slot";

      if (!yearRevealed) {
        const btn = document.createElement("button");
        btn.className = "show-year-btn";
        btn.textContent = "Show Year";
        btn.addEventListener("click", e => {
          e.stopPropagation();
          if (!revealedYearIds.has(ev.id)) {
            revealedYearIds.add(ev.id);
            showYearCount++;
            render();
          }
        });
        slot.appendChild(btn);
      } else {
        const yr = document.createElement("span");
        yr.className = "year";
        yr.textContent = ev.displayYear;
        slot.appendChild(yr);
      }

      const info = document.createElement("div");
      info.className = "slot-info";
      info.innerHTML = `
        <div class="event-title">${ev.title}</div>
        <div class="event-desc">${ev.desc}</div>
      `;
      slot.appendChild(info);
      timeline.appendChild(slot);

      const label = (idx === placed.length - 1) ? "Drop here (after all)" : "Drop here";
      timeline.appendChild(makeDropzone(idx + 1, label));
    });
  }

  if (current) {
    makeActiveCardDraggable();
  }
}

function makeDropzone(position, text) {
  const zone = document.createElement("div");
  zone.className = "dropzone";
  zone.dataset.position = position;
  zone.textContent = text;
  return zone;
}

function makeActiveCardDraggable() {
  const card = document.getElementById("active-card");
  if (!card) return;

  let isDragging = false;
  let rect = null;
  let offsetX = 0;
  let offsetY = 0;
  let scrollInterval = null;

  function startAutoScroll(direction) {
    if (scrollInterval) return;
    scrollInterval = setInterval(() => {
      window.scrollBy(0, direction * 12);
    }, 16);
  }

  function stopAutoScroll() {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  }

  card.addEventListener("pointerdown", e => {
    if (e.target.classList.contains("reveal-btn")) return;
    card.setPointerCapture(e.pointerId);
    isDragging = true;
    rect = card.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    card.style.width = `${rect.width}px`;
    card.style.height = `${rect.height}px`;
    card.style.left = `${rect.left}px`;
    card.style.top = `${rect.top}px`;
    card.classList.add("dragging");
  });

  card.addEventListener("pointermove", e => {
    if (!isDragging) return;

    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    card.style.left = `${newX}px`;
    card.style.top = `${newY}px`;

    const scrollEdge = 50;
    if (e.clientY < scrollEdge) {
      startAutoScroll(-1);
    } else if (e.clientY > window.innerHeight - scrollEdge) {
      startAutoScroll(1);
    } else {
      stopAutoScroll();
    }

    const elementUnder = document.elementFromPoint(e.clientX, e.clientY);
    const dropzone = elementUnder ? elementUnder.closest(".dropzone") : null;

    document.querySelectorAll(".dropzone").forEach(z => z.classList.remove("hovered"));

    if (dropzone) {
      dropzone.classList.add("hovered");
    }
  });

  card.addEventListener("pointerup", e => {
    if (!isDragging) return;
    isDragging = false;
    stopAutoScroll();
    card.releasePointerCapture(e.pointerId);

    const elementUnder = document.elementFromPoint(e.clientX, e.clientY);
    const dropzone = elementUnder ? elementUnder.closest(".dropzone") : null;

    if (dropzone) {
      const position = parseInt(dropzone.dataset.position, 10);
      handlePlacement(position);
    } else {
      card.classList.remove("dragging");
      card.style.position = "";
      card.style.left = "";
      card.style.top = "";
      card.style.width = "";
      card.style.height = "";
    }
  });
}

function handlePlacement(position) {
  attempts++;

  const correct = isCorrectPlacement(current, position);

  if (correct) {
    placed.push(current);
    placed.sort((a, b) => a.year - b.year);
    current = null;

    if (placed.length === gameEvents.length) {
      progressEl.textContent = `${placed.length} / ${gameEvents.length} placed`;
      showWin();
    } else {
      nextCard();
    }
  } else {
    errors++;
    showError(position);
  }
}

function isCorrectPlacement(ev, position) {
  if (position > 0) {
    const beforeEvent = placed[position - 1];
    if (ev.year < beforeEvent.year) return false;
  }
  if (position < placed.length) {
    const afterEvent = placed[position];
    if (ev.year > afterEvent.year) return false;
  }
  return true;
}

function showError(position) {
  let msg = `"${current.title}" (${current.displayYear}) does not belong there! `;

  if (position > 0) {
    const beforeEvent = placed[position - 1];
    if (current.year < beforeEvent.year) {
      msg += `It happened BEFORE "${beforeEvent.title}" (${beforeEvent.displayYear}).`;
    }
  }
  if (position < placed.length && msg === `"${current.title}" (${current.displayYear}) does not belong there! `) {
    const afterEvent = placed[position];
    if (current.year > afterEvent.year) {
      msg += `It happened AFTER "${afterEvent.title}" (${afterEvent.displayYear}).`;
    }
  }

  if (msg === `"${current.title}" (${current.displayYear}) does not belong there! `) {
    msg += `Find its correct chronological order on the timeline.`;
  }

  errorMsg.textContent = msg;
  errorModal.classList.remove("hidden");

  queue.unshift(current);
  current = null;
}

retryBtn.addEventListener("click", () => {
  errorModal.classList.add("hidden");
  nextCard();
});

function showWin() {
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  const accuracy = Math.round((gameEvents.length / attempts) * 100);
  statsEl.innerHTML = `
    <p>Cards placed: <span class="num">${gameEvents.length}</span></p>
    <p>Total attempts: <span class="num">${attempts}</span></p>
    <p>Wrong guesses: <span class="num">${errors}</span></p>
    <p>Accuracy: <span class="num">${accuracy}%</span></p>
    <p>Time: <span class="num">${mins}m ${secs}s</span></p>
    <p>Year reveals: <span class="num">${showYearCount}</span></p>
    <p>Detail reveals: <span class="num">${showDescCount}</span></p>`;
  winModal.classList.remove("hidden");
}

closeWin.addEventListener("click", () => {
  winModal.classList.add("hidden");
});

playAgain.addEventListener("click", initGame);

initGame();
