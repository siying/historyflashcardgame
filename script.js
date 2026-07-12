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

const LONG_DESCRIPTIONS = {
  1: "Around 3100 BCE, the Upper and Lower Kingdoms of the Nile Valley were unified under a single ruler, traditionally identified as Narmer (or Menes). This event marks the beginning of the ancient Egyptian civilization, which would endure for over three thousand years with its remarkable writing system, monumental architecture, and complex religious beliefs.",
  2: "The Great Pyramid of Giza was built around 2560 BCE as a tomb for Pharaoh Khufu. Standing originally at 146 meters (481 feet), it was the tallest man-made structure in the world for nearly 4,000 years. Approximately 2.3 million limestone blocks were used in its construction, each weighing an average of 2.5 tons.",
  3: "Sargon of Akkad founded the Akkadian Empire around 2334 BCE, creating what many historians consider the first true empire in human history. By conquering the Sumerian city-states and extending his rule from the Persian Gulf to the Mediterranean, Sargon demonstrated that a single ruler could govern diverse peoples across a vast territory.",
  4: "The Code of Hammurabi, enacted around 1754 BCE by King Hammurabi of Babylon, is one of the earliest and most complete written legal codes. Inscribed on a basalt stele, it contains 282 laws covering property rights, family relations, commerce, and criminal justice. The principle of 'an eye for an eye' is among its most famous provisions.",
  5: "Around 1595 BCE, the Hittite army sacked Babylon, ending the first Babylonian dynasty. This event demonstrated the vulnerability of Mesopotamian cities to invasion from the Zagros Mountains and marked a shift in the balance of power in the ancient Near East, as the Hittites became a major force in Anatolia.",
  6: "According to the Hebrew Bible, Moses led the Israelites out of slavery in Egypt around 1300 BCE. While the historical evidence for the Exodus remains debated among scholars, the story has been central to Jewish identity and theology for millennia, commemorated annually during the festival of Passover.",
  7: "The fall of Troy, traditionally dated to around 1250 BCE, is the legendary climax of the Trojan War as described in Homer's Iliad. Whether based on actual events or entirely mythological, the story of the wooden horse and the city's destruction has been one of the most influential narratives in Western literature.",
  8: "The Bronze Age Collapse around 1100 BCE was a catastrophic period that saw the simultaneous destruction of multiple Mediterranean civilizations, including the Mycenaean Greeks, the Hittite Empire, and the Egyptian New Kingdom. The causes likely included invasions by the Sea Peoples, drought, earthquakes, and disruptions to trade networks.",
  9: "The first Olympic Games were held in 776 BCE at Olympia in Greece. Originally a single footrace called the stadion, the games expanded over centuries to include wrestling, boxing, chariot racing, and other events. The Olympics were held every four years and served as a unifying cultural event for the otherwise divided Greek city-states.",
  10: "According to Roman tradition, the city of Rome was founded on April 21, 753 BCE by Romulus, who became its first king after killing his twin brother Remus. Archaeological evidence confirms human settlement on the site from at least the 10th century BCE, though the legendary account of the city's founding has captivated imaginations for centuries.",
  11: "The Battle of Megiddo in 609 BCE saw the Egyptian Pharaoh Necho II defeat the forces of King Josiah of Judah. This battle was significant because it halted Judah's attempts to resist Egyptian control and marked the beginning of the end for the Kingdom of Judah, which would fall to Babylon just two decades later.",
  12: "In 586 BCE, the Babylonian king Nebuchadnezzar II destroyed Solomon's Temple in Jerusalem and exiled the Jewish elite to Babylon. This event, known as the Babylonian Exile, profoundly shaped Jewish religious practice, leading to the development of synagogues and a written Torah as the central focus of Jewish worship.",
  13: "Siddhartha Gautama, later known as the Buddha ('the enlightened one'), was born around 563 BCE in Lumbini (modern-day Nepal). His teachings on the Four Noble Truths and the Eightfold Path became the foundation of Buddhism, one of the world's major religions, which spread across Asia and eventually to the rest of the world.",
  14: "In 509 BCE, the Romans overthrew their last king, Tarquinius Superbus, and established the Roman Republic. This new system of government, with elected consuls and a Senate, would last nearly 500 years and serve as a model for many later democratic and republican systems of government.",
  15: "The Battle of Marathon in 490 BCE saw a smaller Athenian force defeat a much larger Persian invasion army. This decisive victory demonstrated that the Persians were not invincible and boosted Athenian confidence, helping to usher in the golden age of Athens and the flourishing of Greek democracy, philosophy, and art.",
  16: "At the Battle of Thermopylae in 480 BCE, a small Greek force led by King Leonidas of Sparta made a legendary last stand against the massive Persian army of Xerxes I. Though the Greeks were ultimately defeated, their bravery bought crucial time for the Greek city-states to organize their defense, and the battle became a symbol of resistance against overwhelming odds.",
  17: "The Parthenon, a temple dedicated to the goddess Athena, was completed in 432 BCE on the Acropolis of Athens. Designed by architects Ictinus and Callicrates with sculptural decoration by Phidias, it is considered the finest example of classical Greek architecture and remains one of the most recognized buildings in the world.",
  18: "Alexander the Great was born in 356 BCE in Pella, Macedonia. Over the next 13 years before his death at age 32, he would create one of the largest empires in ancient history, stretching from Greece to northwestern India. His conquests spread Greek culture throughout the known world, inaugurating the Hellenistic age.",
  19: "The Battle of Gaugamela in 331 BCE was the decisive engagement in which Alexander the Great defeated the Persian Empire under Darius III. Despite being outnumbered roughly two to one, Alexander's brilliant tactical maneuvering led to a crushing victory that effectively ended Persian rule and made Alexander master of the Near East.",
  20: "Alexander the Great died in Babylon in 323 BCE at the age of 32, possibly from fever, poisoning, or complications of his heavy drinking. His death triggered a succession crisis among his generals, who divided his empire into several Hellenistic kingdoms that would dominate the Mediterranean and Near East for the next three centuries.",
  21: "In 221 BCE, Qin Shi Huang conquered the remaining warring states and unified China for the first time. He standardized weights, measures, currency, and writing, and began construction of the Great Wall. Though his dynasty lasted only 15 years, his unification created a template for Chinese governance that endured for millennia.",
  22: "Construction of the Great Wall of China began in earnest around 214 BCE under Emperor Qin Shi Huang. The wall was built to protect Chinese states from nomadic invasions from the north. Over the following centuries, various dynasties extended and rebuilt the wall, creating the massive structure that survives today, stretching over 21,000 kilometers.",
  23: "Julius Caesar was assassinated on March 15, 44 BCE (the Ides of March) by a group of senators led by Brutus and Cassius. They feared Caesar's growing power and his apparent intention to declare himself king. His death triggered a civil war that ultimately led to the end of the Roman Republic and the rise of the Roman Empire under his adopted heir Octavian (Augustus).",
  24: "Jesus of Nazareth was born around 4 BCE in Bethlehem, according to Christian tradition. His teachings, death, and reported resurrection became the foundation of Christianity, the world's largest religion. The exact date of his birth is uncertain, but it was placed in the common era (CE) by the monk Dionysius Exiguus in the 6th century.",
  25: "Mount Vesuvius erupted on August 24, 79 CE, burying the Roman cities of Pompeii and Herculaneum under volcanic ash and pumice. The cities remained remarkably preserved under the debris, providing modern archaeologists with an unparalleled window into daily life in the Roman Empire.",
  26: "Around 105 CE, the Chinese court official Cai Lun improved the process of papermaking using bark, hemp, rags, and fishnets. This invention revolutionized communication and record-keeping, spreading westward along the Silk Road and eventually reaching the Islamic world and Europe, where it transformed literacy and learning.",
  27: "The Battle of the Milvian Bridge on October 28, 312 CE was fought between the Roman emperors Constantine I and Maxentius. According to Christian tradition, Constantine had a vision of the cross before the battle and ordered his soldiers to paint the Christian symbol on their shields. His victory led to the legalization of Christianity in the Roman Empire.",
  28: "The Gupta Empire, founded around 320 CE in northern India, ushered in a golden age of Indian civilization. During this period, Indian achievements in mathematics (including the concept of zero), astronomy, literature, and art reached new heights. The Gupta period is often considered the classical age of Indian culture.",
  29: "In 380 CE, the Roman Emperor Theodosius I issued the Edict of Thessalonica, making Nicene Christianity the official state religion of the Roman Empire. This marked a turning point in Western history, as Christianity went from being a persecuted minority faith to the dominant religious and cultural force in Europe for the next millennium and beyond.",
  30: "The fall of the Western Roman Empire in 476 CE, when the Germanic chieftain Odoacer deposed the last Western emperor Romulus Augustulus, is traditionally seen as the end of ancient history and the beginning of the Middle Ages in Europe. The Eastern Roman Empire (Byzantine Empire) continued for nearly another thousand years.",
  31: "Clovis I, king of the Franks, united the various Frankish tribes under a single ruler around 481 CE. His conversion to Catholic Christianity (rather than the Arian Christianity favored by other Germanic tribes) aligned the Franks with the Roman Church and the Gallo-Roman population, laying the foundation for what would become the French nation.",
  32: "The Hagia Sophia was completed in 537 CE in Constantinople under Emperor Justinian I. For nearly a thousand years it was the largest cathedral in the world. Its massive dome, spanning 31 meters, was an engineering marvel that influenced both Islamic and Christian architecture for centuries to come.",
  33: "Muhammad, the prophet of Islam, was born around 570 CE in Mecca. He received his first revelations from God (Allah) through the angel Gabriel around 610 CE, which were later compiled into the Quran. His teachings founded Islam, today the world's second-largest religion with nearly two billion followers.",
  34: "The Hijra (or Hegira) in 622 CE refers to the migration of Muhammad and his followers from Mecca to Medina. This event marks the beginning of the Islamic calendar. In Medina, Muhammad established the first Muslim community (ummah), creating a political and religious framework that would rapidly expand across the Middle East.",
  35: "Muhammad died on June 8, 632 CE in Medina. His death created a succession crisis that eventually led to the split between Sunni and Shia Muslims. Within a century of his death, his followers had created one of the largest empires in history, stretching from Spain to Central Asia.",
  36: "The Umayyad Caliphate, established in 661 CE, was the first great Islamic empire. From its capital in Damascus, it ruled from the Iberian Peninsula to Central Asia. The Umayyads built the Dome of the Rock in Jerusalem and presided over a period of rapid territorial expansion and cultural development.",
  37: "In 711 CE, Muslim forces under Tariq ibn Ziyad crossed the Strait of Gibraltar and invaded the Iberian Peninsula. Within a few years, they had conquered nearly all of Visigothic Spain. The Muslim rule of Iberia (Al-Andalus) would last for nearly 800 years and leave a lasting cultural legacy.",
  38: "The Battle of Tours (or Poitiers) in 732 CE saw the Frankish leader Charles Martel defeat a large Muslim raiding force from Al-Andalus. The battle is often cited as a crucial moment in European history, as it halted the northward expansion of Islam into Western Europe, though historians debate its actual strategic significance.",
  39: "The Abbasid Revolution of 750 CE overthrew the Umayyad Caliphate and established a new dynasty that would rule the Islamic world for over 500 years. The Abbasids moved the capital to Baghdad and presided over the Islamic Golden Age, a period of remarkable achievements in science, mathematics, medicine, and philosophy.",
  40: "Baghdad was founded in 762 CE by the Abbasid Caliph al-Mansur. The city was designed as a round metropolis (Madinat al-Salam, 'City of Peace') and quickly became one of the largest and most cosmopolitan cities in the world. It served as the intellectual capital of the Islamic Golden Age, home to the famous House of Wisdom.",
  41: "The Viking raid on the monastery of Lindisfarne on June 8, 793 CE is often considered the beginning of the Viking Age. The attack shocked Christian Europe and demonstrated that the previously peaceful monasteries of the British Isles were vulnerable to seaborne raiders from Scandinavia, heralding nearly three centuries of Viking expansion.",
  42: "On Christmas Day 800 CE, Pope Leo III crowned Charlemagne as Emperor of the Romans in St. Peter's Basilica. This coronation united much of Western Europe under a single ruler for the first time since the fall of the Western Roman Empire and laid the groundwork for the Holy Roman Empire.",
  43: "The Treaty of Verdun in 843 CE divided the Carolingian Empire among the three surviving sons of Louis the Pious. This division created the foundations of the future nations of France (West Francia), Germany (East Francia), and a middle kingdom (Lotharingia) that stretched between them, shaping European political geography for centuries.",
  44: "According to tradition, the Varangian chieftain Rurik established himself at Novgorod in 862 CE, founding the Rurik dynasty that would rule Russia for over 700 years. His successors moved the capital south to Kyiv, creating the powerful state of Kievan Rus, the predecessor of modern Russia, Ukraine, and Belarus.",
  45: "The Diamond Sutra, printed in 868 CE during the Tang Dynasty in China, is the world's oldest dated printed book. This Buddhist text was produced using woodblock printing, nearly 600 years before Gutenberg's movable type printing press. It demonstrates that East Asia had developed sophisticated printing technology long before Europe.",
  46: "The Song Dynasty was founded in 960 CE by Zhao Kuangyin, who reunified China after a period of division. The Song era saw remarkable advances in technology including gunpowder, the compass, and movable type printing. It also witnessed a flourishing of art, literature, and philosophy, including the development of Neo-Confucianism.",
  47: "Otto I was crowned the first Holy Roman Emperor in 962 CE, formalizing the connection between the German kingdom and the imperial tradition of Rome. The Holy Roman Empire would endure (in various forms) until 1806, serving as the dominant political entity in Central Europe for nearly a millennium.",
  48: "Erik the Red, a Norse explorer exiled from Iceland, sailed west around 982 CE and explored the southwestern coast of Greenland. He named the land 'Greenland' to attract settlers. Norse colonies established there survived for nearly 500 years before disappearing, likely due to climate change and conflicts with the Inuit.",
  49: "Around 1000 CE, Leif Erikson, son of Erik the Red, became the first known European to reach North America, landing in a place he called Vinland (likely in Newfoundland, Canada). The Norse settlement at L'Anse aux Meadows, discovered in 1960, confirms this pre-Columbian transatlantic voyage.",
  50: "The Great Schism of 1054 CE split Christianity into the Roman Catholic Church in the West and the Eastern Orthodox Church in the East. The division resulted from theological disputes, political rivalries, and cultural differences between Latin-speaking Rome and Greek-speaking Constantinople, creating two distinct branches of Christianity that persist today.",
  51: "The Battle of Hastings on October 14, 1066, saw William, Duke of Normandy, defeat the English King Harold II. William's victory led to the Norman Conquest of England, fundamentally transforming English culture, language, law, and governance. The French-influenced Norman ruling class left an indelible mark on the English language.",
  52: "The Battle of Manzikert in 1071 CE saw the Seljuk Turks defeat the Byzantine Empire and capture Emperor Romanos IV Diogenes. This catastrophic defeat opened Anatolia (modern Turkey) to Turkish settlement, permanently shifting the region's demographics and weakening the Byzantine Empire, which would never fully recover.",
  53: "The First Crusade was launched in 1096 CE by Pope Urban II, calling on Western Christians to recapture the Holy Land from Muslim rule. The crusaders captured Jerusalem in 1099 and established several Crusader states in the Levant. The Crusades would continue in various forms for nearly two centuries, profoundly affecting relations between Christianity and Islam.",
  54: "In 1187 CE, the Muslim sultan Saladin recaptured Jerusalem from the Crusaders after the Battle of Hattin. Unlike the Crusaders' bloody conquest in 1099, Saladin allowed Christian inhabitants to leave peacefully. His chivalrous conduct became legendary in both Muslim and Christian traditions.",
  55: "Genghis Khan united the Mongol tribes and founded the Mongol Empire in 1206 CE. Through brilliant military strategy and organization, his forces conquered vast territories from China to Eastern Europe. The Mongol Empire became the largest contiguous land empire in history, facilitating trade and cultural exchange across Eurasia.",
  56: "The Magna Carta, signed in 1215 CE by King John of England under pressure from rebellious barons, established the principle that everyone, including the king, was subject to the law. This document, though initially limited in scope, became a foundational text for constitutional government and individual rights, influencing the US Constitution and Universal Declaration of Human Rights.",
  57: "Marco Polo departed Venice in 1271 CE on a journey that would take him along the Silk Road to the court of Kublai Khan in China. His account, 'The Travels of Marco Polo,' described the wealth and sophistication of the Mongol Empire and inspired European interest in Asia, eventually influencing Columbus's voyage westward.",
  58: "Tenochtitlan, the capital of the Aztec Empire, was founded in 1325 CE on an island in Lake Texcoco (present-day Mexico City). At its peak, the city had a population of over 200,000 and featured grand temples, causeways, and chinampas (floating gardens). It was one of the largest cities in the world when the Spanish arrived in 1519.",
  59: "The Hundred Years' War between England and France began in 1337 CE and lasted, with interruptions, until 1453. The war saw the development of new military technologies like the longbow and early cannons, and it contributed to the emergence of national identities in both countries. France ultimately prevailed, but both nations were transformed.",
  60: "The Black Death reached Europe in 1347 CE, brought by trade ships from the East. The bubonic plague killed an estimated 25-50 million Europeans—roughly one-third to one-half of the continent's population. The pandemic's devastating impact led to labor shortages, social upheaval, and fundamental changes in European economy, society, and culture.",
  61: "The Ming Dynasty was established in 1368 CE when Zhu Yuanzhang overthrew the Mongol-led Yuan Dynasty. The Ming era saw the construction of the Forbidden City, the voyages of Admiral Zheng He, and the completion of the Great Wall in its most recognizable form. The dynasty ruled China for nearly 300 years.",
  62: "By 1400 CE, the Aztec Empire had risen to dominate central Mexico from its capital Tenochtitlan. Through military conquest and strategic alliances, the Aztecs created a tribute empire that extracted wealth from subject peoples. Their sophisticated agricultural, architectural, and astronomical achievements rivaled those of any contemporary civilization.",
  63: "The Battle of Agincourt on October 25, 1415, saw Henry V of England defeat a much larger French army. The English longbow proved devastating against the heavily armored French knights. The victory became a defining moment in English national mythology, immortalized by Shakespeare in his play 'Henry V.'",
  64: "Johannes Gutenberg developed movable type printing around 1439 CE in Mainz, Germany. His invention of the printing press revolutionized the spread of information, making books affordable and accessible for the first time. The printing press is often credited with fueling the Renaissance, the Reformation, and the Scientific Revolution.",
  65: "The Fall of Constantinople on May 29, 1453, when the Ottoman Empire under Sultan Mehmed II conquered the Byzantine capital, marked the end of the Roman Empire (which had endured in its eastern form for nearly 1,000 years after the fall of the West). The event sent scholars westward, helping to spark the Italian Renaissance.",
  66: "The marriage of Isabella I of Castile and Ferdinand II of Aragon in 1469 united Spain's two most powerful kingdoms. Together they completed the Reconquista, sponsored Columbus's voyage to the Americas, and established Spain as the dominant European power of the 16th century.",
  67: "Christopher Columbus reached the Bahamas on October 12, 1492, during a voyage funded by Spain. Though he believed he had reached Asia, his voyages initiated permanent European contact with the Americas, leading to the Columbian Exchange—the transfer of plants, animals, diseases, and peoples between the Old and New Worlds that transformed global history.",
  68: "Vasco da Gama reached Calicut (modern Kozhikode), India in 1498, establishing the first direct sea route from Europe to Asia. This breakthrough gave Portugal—and later other European powers—access to the lucrative spice trade without relying on overland routes controlled by Ottoman and Venetian intermediaries.",
  69: "Leonardo da Vinci began painting the Mona Lisa around 1503 CE. The portrait, believed to depict Lisa Gherardini, wife of a Florentine merchant, showcases Leonardo's mastery of sfumato (subtle shading) and his understanding of human anatomy. It has become the most famous painting in the world, housed in the Louvre in Paris.",
  70: "Martin Luther posted his 95 Theses on the door of the Castle Church in Wittenberg on October 31, 1517, protesting the sale of indulgences and other practices of the Catholic Church. This act is traditionally seen as the beginning of the Protestant Reformation, which permanently divided Western Christianity and reshaped European politics, culture, and society.",
  71: "Ferdinand Magellan's expedition departed Spain in 1519 CE to find a western route to the Spice Islands. Though Magellan himself was killed in the Philippines in 1521, his ship Victoria completed the first circumnavigation of the globe in 1522, proving definitively that the Earth was round and that the oceans were interconnected.",
  72: "The Fall of Tenochtitlan in 1521 CE, when Hernan Cortes and his indigenous allies conquered the Aztec capital, marked the beginning of Spanish colonial rule in Mexico. Smallpox and other European diseases devastated the indigenous population, while Spanish technology, tactics, and alliances with discontented subject peoples proved decisive.",
  73: "The Battle of Panipat in 1526 CE saw Babur, a descendant of both Timur and Genghis Khan, defeat the much larger army of Sultan Ibrahim Lodi. Babur's use of gunpowder artillery and mobile tactics established the Mughal Empire, which would rule most of the Indian subcontinent for over three centuries.",
  74: "In 1533, King Henry VIII of England broke with the Roman Catholic Church after Pope Clement VII refused to annul his marriage to Catherine of Aragon. Henry established the Church of England with himself as its head, a move that had profound religious, political, and cultural consequences that continue to shape British society today.",
  75: "Nicolaus Copernicus published 'De revolutionibus orbium coelestium' in 1543, proposing that the Earth and other planets orbit the Sun (heliocentrism) rather than the other way around (geocentrism). This revolutionary idea challenged 1,500 years of accepted astronomical theory and laid the groundwork for the Scientific Revolution.",
  76: "The Peace of Augsburg in 1555 established the principle of 'cuius regio, eius religio' (whose realm, their religion), allowing each ruler in the Holy Roman Empire to choose between Catholicism and Lutheranism. This compromise ended decades of religious conflict, though it excluded Calvinism and would later be challenged in the Thirty Years' War.",
  77: "Elizabeth I became Queen of England in 1558 at the age of 25. Her 45-year reign (the Elizabethan era) saw England emerge as a major European power, the defeat of the Spanish Armada, the flourishing of English literature (Shakespeare, Marlowe), and the establishment of the foundations of the British Empire.",
  78: "The Battle of Lepanto on October 7, 1571, saw a coalition of Christian states (the Holy League) defeat the Ottoman Turkish fleet in the Gulf of Patras, Greece. The victory halted Ottoman naval expansion in the western Mediterranean and boosted European morale, though the Ottoman Empire remained a formidable power for centuries.",
  79: "The Gregorian calendar was introduced by Pope Gregory XIII on October 15, 1582, to correct the drift in the Julian calendar. It is now the most widely used civil calendar in the world. The reform was initially rejected by Protestant and Orthodox countries, some of which didn't adopt it until the 20th century.",
  80: "The Spanish Armada, a fleet of 130 ships sent by King Philip II of Spain to invade England, was defeated in 1588. Bad weather, English naval tactics, and fire ships destroyed or scattered the fleet. The defeat marked the beginning of Spain's decline as Europe's dominant naval power and the rise of England.",
  81: "The Edict of Nantes, issued by King Henry IV of France in 1598, granted substantial rights to French Protestants (Huguenots), including freedom of worship and civil rights. The edict represented an early attempt at religious tolerance, though it was later revoked by Louis XIV in 1685, triggering a mass exodus of Huguenots.",
  82: "The British East India Company was founded in 1600 CE by a royal charter from Queen Elizabeth I. Originally established to trade in spices, it eventually became the de facto ruler of large parts of India. The company's activities laid the groundwork for British colonial rule in South Asia.",
  83: "The Dutch East India Company (VOC), founded in 1602 CE, was the world's first publicly traded company and the first to issue stock. It established a vast trading network spanning Asia and was granted sovereign powers, including the ability to wage war and negotiate treaties. At its peak, it was the most valuable company in history.",
  84: "The Jamestown colony was established in 1607 CE in present-day Virginia, becoming the first permanent English settlement in North America. Despite early hardships including starvation and disease, the colony survived and grew, eventually becoming part of the British colonies that would revolt in 1776.",
  85: "Galileo Galilei discovered the four largest moons of Jupiter (Io, Europa, Ganymede, and Callisto) in January 1610 using his improved telescope. This discovery provided evidence for the heliocentric model of the solar system, as it showed that not everything orbited the Earth, challenging established Aristotelian and Catholic doctrine.",
  86: "William Shakespeare died on April 23, 1616, in Stratford-upon-Avon. Widely regarded as the greatest writer in the English language, he wrote approximately 39 plays, 154 sonnets, and several poems. His works have been translated into every major language and continue to be performed and studied worldwide.",
  87: "The Thirty Years' War began in 1618 CE when Protestant nobles in Bohemia defenestrated (threw out of a window) two Catholic imperial governors. What started as a religious conflict within the Holy Roman Empire evolved into a broader European power struggle, devastating Central Europe and killing an estimated eight million people.",
  88: "The Mayflower, carrying 102 passengers including Pilgrims seeking religious freedom, reached Plymouth, Massachusetts in December 1620 CE. The passengers drafted the Mayflower Compact, an early form of self-governance. The colony they established became a foundation stone of what would eventually become the United States.",
  89: "The English Civil War began in 1642 CE when King Charles I raised his standard at Nottingham, pitting Royalist (Cavalier) forces against Parliamentarian (Roundhead) forces led by Oliver Cromwell. The war ended with Charles's execution in 1649 and the establishment of a republic, though the monarchy was restored in 1660.",
  90: "The Qing Dynasty was established in 1644 CE when Manchu forces from the north conquered Ming Dynasty China. The Manchus ruled China for nearly 270 years, presiding over a period of territorial expansion, population growth, and cultural achievement, but ultimately declining in the face of Western and Japanese imperialism.",
  91: "The Peace of Westphalia, signed in 1648 CE, ended both the Thirty Years' War and the Eighty Years' War. The treaties established the principle of state sovereignty and non-interference in internal affairs, laying the groundwork for the modern international system of nation-states that still governs international relations today.",
  92: "Isaac Newton published his 'Philosophiae Naturalis Principia Mathematica' in 1687 CE. The book described his three laws of motion and the law of universal gravitation, providing a comprehensive mathematical framework for understanding the physical world. It is considered one of the most important scientific works ever written.",
  93: "The Great Northern War began in 1700 CE when a coalition led by Russia, Denmark-Norway, and Saxony-Poland attacked the Swedish Empire. The war lasted 21 years and ended with Sweden's defeat, establishing Russia as the dominant power in northeastern Europe under Peter the Great's modernization reforms.",
  94: "The Act of Union, effective in 1707 CE, merged the Kingdom of England and the Kingdom of Scotland into the Kingdom of Great Britain. This political union created a single parliament at Westminster and a unified economy, though Scotland retained its own legal system, education system, and church.",
  95: "Thomas Newcomen built the first practical steam engine in 1712 CE for pumping water out of coal mines. Though inefficient by later standards, it was the first machine to convert heat into useful work, laying the groundwork for the Industrial Revolution and the development of more advanced engines by James Watt and others.",
  96: "The Seven Years' War, beginning in 1756 CE, was a global conflict involving every major European power. Fought across Europe, the Americas, India, and at sea, it reshaped the global balance of power. Britain's victory established it as the world's dominant colonial power, while France's losses helped precipitate the French Revolution.",
  97: "The Battle of Plassey in 1757 CE saw Robert Clive's East India Company forces defeat the Nawab of Bengal and his French allies. The victory marked the beginning of British political control over India and established the East India Company as a major territorial power in South Asia.",
  98: "Captain James Cook charted the eastern coast of Australia in 1770 CE, claiming it for Britain. His three voyages (1768-1779) made significant contributions to geography, natural history, and ethnography. Though he was killed in Hawaii in 1779, his discoveries helped establish British colonial presence in the Pacific.",
  99: "The Boston Tea Party on December 16, 1773, saw American colonists dump 342 chests of British tea into Boston Harbor to protest the Tea Act and taxation without representation. The protest became a pivotal event leading to the American Revolution and remains a powerful symbol of political protest in American culture.",
  100: "The Declaration of Independence, drafted primarily by Thomas Jefferson, was adopted by the Continental Congress on July 4, 1776. It declared the thirteen American colonies independent from Britain and articulated fundamental principles of human rights and democratic governance that have inspired independence movements worldwide.",
  101: "The Treaty of Paris, signed in 1783 CE, formally ended the American Revolutionary War. Britain recognized the independence of the United States and ceded territory east of the Mississippi River. The treaty established the borders of the new nation and set the stage for westward expansion.",
  102: "The First Fleet arrived in Sydney Cove on January 26, 1788, establishing the first European settlement in Australia. The colony was originally established as a penal settlement for British convicts. The date is now commemorated as Australia Day, though it is also a day of mourning for Indigenous Australians.",
  103: "The French Revolution began on July 14, 1789, when Parisian revolutionaries stormed the Bastille prison. The revolution overthrew the absolute monarchy, established a republic, and introduced radical political and social changes. Its ideals of liberty, equality, and fraternity influenced revolutions worldwide.",
  104: "In September 1792, the French National Convention abolished the monarchy and declared France a republic. King Louis XVI was later tried for treason and executed in January 1793. The abolition of the monarchy marked a turning point in European political history, demonstrating that even the most established institutions could be overturned.",
  105: "The Rosetta Stone was discovered in 1799 CE by French soldiers in Egypt. Inscribed with the same text in hieroglyphics, Demotic script, and Greek, it provided the key to deciphering ancient Egyptian hieroglyphs. Jean-Francois Champollion cracked the code in 1822, unlocking thousands of years of Egyptian history.",
  106: "Alessandro Volta invented the first true electric battery (the voltaic pile) in 1800 CE. His device produced a steady electric current for the first time, enabling experiments that led to the discovery of new elements and laying the groundwork for electrochemistry and the modern electrical industry.",
  107: "The Louisiana Purchase in 1803 CE saw the United States acquire approximately 828,000 square miles of territory from France for $15 million. The purchase doubled the size of the nation and opened vast territories for westward expansion, though it raised complex questions about the status of slavery in the new lands.",
  108: "Napoleon Bonaparte crowned himself Emperor of the French on December 2, 1804, at Notre-Dame de Paris. His coronation symbolized his rise from modest Corsican origins to become the master of Europe. Napoleon's legal, administrative, and military reforms profoundly shaped modern France and influenced institutions across the continent.",
  109: "Britain abolished the slave trade in 1807 CE, with the Act for the Abolition of the Slave Trade. While this did not end slavery itself (which was abolished throughout the British Empire in 1833), it was a landmark step in the global movement against slavery and established a precedent for other nations to follow.",
  110: "The Mexican War of Independence began in 1810 CE when Father Miguel Hidalgo rang the church bell of Dolores and called for revolt against Spanish rule. After a decade of fighting, Mexico achieved independence in 1821, ending 300 years of Spanish colonial rule and establishing a new nation in North America.",
  111: "The Battle of Waterloo on June 18, 1815, saw the Duke of Wellington and Prussian forces decisively defeat Napoleon Bonaparte. This final defeat ended Napoleon's Hundred Days return to power and the Napoleonic Wars that had engulfed Europe for over two decades. It established a new balance of power that maintained relative peace for decades.",
  112: "The Stockton and Darlington Railway opened in 1825 CE as the world's first public railway to use steam locomotives. It demonstrated the viability of rail transport for both freight and passengers, launching the railway age that would transform economies, societies, and landscapes across the world.",
  113: "The first permanent photograph was taken by Joseph Nicephore Niepce in 1826 CE using a process he called heliography. The exposure took several hours from a window at his estate in Burgundy. This invention opened the door to photography, which would revolutionize art, journalism, science, and personal memory.",
  114: "The Belgian Revolution of 1830 CE saw the southern provinces of the United Kingdom of the Netherlands break away to form the independent Kingdom of Belgium. The new state, created by the Treaty of London in 1839, became a constitutional monarchy and an important industrial power in 19th-century Europe.",
  115: "Queen Victoria ascended to the British throne in 1837 CE at age 18, beginning a reign of 63 years and seven months. The Victorian era saw Britain become the world's dominant industrial, military, and imperial power. It also witnessed dramatic social changes, technological innovation, and the expansion of democratic rights.",
  116: "The Trail of Tears in 1838 CE referred to the forced relocation of approximately 60,000 Native Americans from their ancestral homelands in the southeastern United States to designated 'Indian Territory' west of the Mississippi River. The journey, carried out under U.S. military supervision, resulted in thousands of deaths from disease and exposure.",
  117: "The Treaty of Waitangi, signed on February 6, 1840, established British sovereignty over New Zealand and guaranteed Maori rights to their lands and territories. The treaty remains a foundational document in New Zealand's constitution and a source of ongoing debate about the relationship between the Crown and Maori people.",
  118: "The Revolutions of 1848 were a series of political upheavals that swept across Europe, from France to the Austrian Empire. Though most were ultimately suppressed, they demonstrated growing demands for constitutional government, national self-determination, and social reform that would shape European politics for the rest of the century.",
  119: "Karl Marx and Friedrich Engels published 'The Communist Manifesto' in 1848 CE. The pamphlet argued that history was driven by class struggle and predicted that the proletariat would overthrow capitalism. It became one of the most influential political documents in history, inspiring communist movements worldwide.",
  120: "The Great Exhibition of 1851, held in the Crystal Palace in London, showcased the industrial and cultural achievements of nations worldwide. It attracted over six million visitors and demonstrated Britain's industrial supremacy. The exhibition also promoted international trade and cultural exchange.",
  121: "Commodore Matthew Perry of the United States Navy forced Japan to open its ports to American trade in 1853 CE. The arrival of Perry's 'Black Ships' shocked Japan and helped trigger the fall of the Tokugawa Shogunate and the Meiji Restoration, which transformed Japan from a feudal society into a modern industrial nation.",
  122: "The Indian Rebellion of 1857 (also called the Sepoy Mutiny) was a widespread uprising against British East India Company rule. Though ultimately suppressed, the rebellion led to the dissolution of the East India Company and the establishment of direct British Crown rule over India, known as the British Raj.",
  123: "Charles Darwin published 'On the Origin of Species' in 1859, presenting his theory of evolution by natural selection. The book fundamentally changed biology and our understanding of life on Earth, challenging religious and philosophical beliefs about creation and humanity's place in nature.",
  124: "The American Civil War began on April 12, 1861, when Confederate forces fired on Fort Sumter in South Carolina. The war, fought between the Union (Northern states) and the Confederacy (Southern states that seceded), became the deadliest conflict in American history with an estimated 620,000-750,000 deaths.",
  125: "The International Committee of the Red Cross was founded in 1864 CE by Henry Dunant and others. The organization was established to provide neutral and impartial humanitarian aid during armed conflicts. It helped develop the Geneva Conventions, which remain the cornerstone of international humanitarian law.",
  126: "The American Civil War ended on April 9, 1865, when Confederate General Robert E. Lee surrendered to Union General Ulysses S. Grant at Appomattox Court House. President Abraham Lincoln was assassinated just five days later. The war preserved the Union and led to the abolition of slavery through the 13th Amendment.",
  127: "The Meiji Restoration of 1868 CE restored direct imperial rule in Japan and launched a program of rapid modernization. Japan adopted Western technology, education, and political institutions while preserving its cultural identity. Within decades, Japan became the first non-Western nation to industrialize and emerge as a world power.",
  128: "The Suez Canal opened in 1869 CE, connecting the Mediterranean Sea to the Red Sea. The 120-mile waterway, built under the direction of French diplomat Ferdinand de Lesseps, dramatically shortened sea routes between Europe and Asia. It became one of the world's most important shipping lanes and a symbol of imperial ambition.",
  129: "The Franco-Prussian War of 1870-1871 saw Prussia and its German allies decisively defeat France. The war resulted in the unification of Germany under Prussian leadership, the collapse of the French Second Empire, and the harsh Treaty of Frankfurt, which left France humiliated and eager for revenge—a factor that contributed to World War I.",
  130: "Alexander Graham Bell was granted a patent for the telephone in 1876 CE. While other inventors were working on similar devices, Bell's patent became the basis for the modern telecommunications industry. The telephone revolutionized personal and business communication, shrinking the world and connecting people across vast distances.",
  131: "Thomas Edison demonstrated a practical incandescent light bulb in 1879 CE. While he didn't invent the concept of electric lighting, his version was the first to be commercially viable, burning for over 1,200 hours. The light bulb transformed daily life, extended productive hours, and became a symbol of innovation itself.",
  132: "The Berlin Conference of 1884-1885, organized by Otto von Bismarck, established rules for European colonization and trade in Africa. The conference divided the continent among European powers without consulting African peoples, creating arbitrary boundaries that disregarded existing ethnic, linguistic, and political structures.",
  133: "The Eiffel Tower was completed in March 1889 CE for the Paris World's Fair, celebrating the 100th anniversary of the French Revolution. Designed by Gustave Eiffel's engineering company, the 300-meter iron lattice tower was initially criticized by many Parisians but became an enduring symbol of France and modern engineering.",
  134: "New Zealand became the first self-governing country to grant women the right to vote in national elections in 1893 CE. The achievement, led by suffragette Kate Sheppard, was a milestone in the global women's suffrage movement and demonstrated that democratic principles could be extended to all citizens regardless of gender.",
  135: "Wilhelm Conrad Rontgen discovered X-rays in 1895 CE. His discovery of electromagnetic radiation that could pass through soft tissue but not bone revolutionized medicine, allowing doctors to see inside the body without surgery. Rontgen received the first Nobel Prize in Physics in 1901 for this discovery.",
  136: "The Spanish-American War of 1898 CE saw the United States defeat Spain, ending Spain's colonial empire in the Americas and the Pacific. The U.S. gained Puerto Rico, Guam, and the Philippines, while Cuba gained nominal independence. The war marked the emergence of the United States as a global imperial power.",
  137: "The Boxer Rebellion of 1900 CE was an anti-foreign uprising in China led by the 'Boxers' (a secret society called the Righteous and Harmonious Fists). The rebellion targeted foreign diplomats, missionaries, and Chinese Christians. An international coalition suppressed the uprising, and China was forced to pay heavy indemnities.",
  138: "Orville and Wilbur Wright achieved the first sustained, controlled, powered heavier-than-air flight on December 17, 1903, at Kitty Hawk, North Carolina. The longest flight that day lasted 59 seconds and covered 852 feet. This breakthrough launched the age of aviation that would transform transportation, warfare, and global connectivity.",
  139: "Albert Einstein published his theory of special relativity in 1905 CE, demonstrating that the laws of physics are the same for all non-accelerating observers and that the speed of light is constant regardless of the observer's motion. This led to the famous equation E=mc² and revolutionized our understanding of space, time, and energy.",
  140: "Roald Amundsen became the first person to reach the South Pole on December 14, 1911 CE. His Norwegian expedition beat the British team led by Robert Falcon Scott, who perished on the return journey. Amundsen's success was due to superior planning, equipment, and use of sled dogs.",
  141: "The RMS Titanic sank on April 15, 1912, after striking an iceberg on its maiden voyage from Southampton to New York City. Over 1,500 passengers and crew perished, making it one of the deadliest maritime disasters in history. The tragedy led to major improvements in maritime safety regulations.",
  142: "Henry Ford introduced the moving assembly line at his Highland Park plant in 1913 CE, dramatically reducing the time to build an automobile from over 12 hours to about 93 minutes. This innovation revolutionized manufacturing, made consumer goods affordable, and established mass production as a defining feature of modern industrial economies.",
  143: "World War I began on July 28, 1914, when Austria-Hungary declared war on Serbia following the assassination of Archduke Franz Ferdinand. The conflict quickly escalated into a global war involving over 30 nations. The trench warfare, new weapons like machine guns and poison gas, and industrial killing made it the deadliest war in history to that point.",
  144: "The Russian Revolution of 1917 CE overthrew the Tsarist autocracy and brought the Bolsheviks to power under Vladimir Lenin. The revolution established the world's first communist state, the Soviet Union, and inspired communist movements worldwide. It fundamentally altered the global balance of power and shaped 20th-century history.",
  145: "World War I ended on November 11, 1918, with an armistice that stopped fighting on the Western Front. The war had claimed approximately 20 million lives and left millions more wounded. The post-war Treaty of Versailles imposed harsh penalties on Germany that contributed to economic instability and political extremism.",
  146: "The Treaty of Versailles, signed on June 28, 1919, officially ended World War I. It imposed heavy reparations, territorial losses, and military restrictions on Germany. The treaty's harsh terms created resentment that fueled the rise of Nazism and ultimately contributed to World War II.",
  147: "The 19th Amendment to the United States Constitution, ratified on August 18, 1920, granted women the right to vote. The amendment was the culmination of over 70 years of activism by the women's suffrage movement, led by figures like Susan B. Anthony, Elizabeth Cady Stanton, and Alice Paul.",
  148: "British archaeologist Howard Carter discovered the tomb of Pharaoh Tutankhamun in the Valley of the Kings on November 4, 1922 CE. The tomb was remarkably intact, containing thousands of artifacts including the famous golden death mask. The discovery sparked worldwide interest in ancient Egypt and Egyptology.",
  149: "Mustafa Kemal Ataturk established the Republic of Turkey on October 29, 1923 CE, abolishing the Ottoman Sultanate and Caliphate. Ataturk implemented sweeping secular reforms, adopting Western legal codes, the Latin alphabet, and modern education. His transformation of Turkey became a model for modernization in the Muslim world.",
  150: "Alexander Fleming discovered penicillin in 1928 CE when he noticed that a mold (Penicillium notatum) had killed bacteria in a petri dish. This discovery led to the development of antibiotics, which have saved millions of lives. Fleming shared the Nobel Prize in Physiology or Medicine in 1945 for this breakthrough.",
  151: "The Wall Street Crash of October 29, 1929 ('Black Tuesday') marked the beginning of the Great Depression, the most severe worldwide economic downturn of the 20th century. Stock markets collapsed, banks failed, and unemployment soared. The crisis reshaped economic policy and led to the New Deal in the United States.",
  152: "Adolf Hitler became Chancellor of Germany on January 30, 1933 CE. He quickly dismantled democratic institutions, established a totalitarian dictatorship, and pursued aggressive expansionist policies. His regime was responsible for the Holocaust, in which six million Jews were systematically murdered, and for starting World War II.",
  153: "The Spanish Civil War began in July 1936 when General Francisco Franco led a military uprising against the elected Republican government. The conflict, which lasted until 1939, served as a testing ground for the weapons and tactics of World War II. Franco's victory established a dictatorship that lasted until 1975.",
  154: "The Nanjing Massacre (also known as the Rape of Nanjing) occurred in December 1937 when Japanese forces captured the Chinese capital. Over a period of six weeks, Japanese troops killed an estimated 200,000-300,000 Chinese civilians and prisoners of war, along with widespread rape and destruction.",
  155: "World War II began on September 1, 1939, when Germany invaded Poland. Britain and France declared war on Germany two days later. The war would eventually involve over 30 countries and result in an estimated 70-85 million deaths, making it the deadliest conflict in human history.",
  156: "The attack on Pearl Harbor on December 7, 1941, launched by the Japanese Imperial Navy, destroyed or damaged 21 American battleships and killed over 2,400 Americans. The next day, the United States declared war on Japan, officially entering World War II and turning the tide of the conflict.",
  157: "The Manhattan Project, initiated in 1942 CE, was the secret U.S. program to develop atomic weapons. Led by physicist J. Robert Oppenheimer, the project brought together thousands of scientists and engineers. The first nuclear test ('Trinity') occurred in July 1945, followed by the atomic bombings of Hiroshima and Nagasaki.",
  158: "The Battle of Stalingrad ended in February 1943 CE after months of brutal urban warfare. The Soviet victory over Nazi Germany marked the turning point of World War II on the Eastern Front. The battle resulted in nearly two million casualties and shattered the myth of German military invincibility.",
  159: "D-Day, June 6, 1944, saw the Allied invasion of Normandy, France, in the largest amphibious military operation in history. Over 156,000 troops from the United States, United Kingdom, Canada, and other Allied nations stormed the beaches. The invasion opened a second front in Europe and led to the liberation of Paris two months later.",
  160: "World War II ended in September 1945 after the United States dropped atomic bombs on Hiroshima (August 6) and Nagasaki (August 9). The bombings killed over 200,000 people and prompted Japan's surrender. The use of nuclear weapons ushered in the atomic age and shaped Cold War geopolitics.",
  161: "India gained independence from British rule on August 15, 1947, under the leadership of Mahatma Gandhi and Jawaharlal Nehru. Independence was accompanied by the partition of British India into India and Pakistan, triggering one of the largest mass migrations in history and communal violence that killed an estimated one to two million people.",
  162: "The State of Israel was proclaimed on May 14, 1948, establishing a Jewish homeland in Palestine. The declaration came one day after the British Mandate expired and was followed by the first Arab-Israeli War. Israel's founding fulfilled a long-held Zionist dream but displaced hundreds of thousands of Palestinian Arabs.",
  163: "Mao Zedong proclaimed the establishment of the People's Republic of China on October 1, 1949, after the Communist Party defeated the Nationalists in the Chinese Civil War. The new government implemented sweeping land reforms and eventually launched the Great Leap Forward and Cultural Revolution, causing millions of deaths.",
  164: "The Korean War began on June 25, 1950, when North Korean forces invaded South Korea. The conflict, which lasted until 1953, involved United Nations forces (primarily American) supporting South Korea and Chinese forces supporting North Korea. The war ended in an armistice, and Korea remains divided to this day.",
  165: "James Watson and Francis Crick, using X-ray crystallography data from Rosalind Franklin, discovered the double-helix structure of DNA in 1953 CE. This breakthrough revealed how genetic information is stored and replicated, launching the era of molecular biology and eventually leading to the Human Genome Project.",
  166: "The U.S. Supreme Court ruled in Brown v. Board of Education on May 17, 1954, that racial segregation in public schools was unconstitutional. The decision overturned the 'separate but equal' doctrine and became a cornerstone of the civil rights movement, leading to the desegregation of schools and other public facilities.",
  167: "The Montgomery Bus Boycott began on December 5, 1955, after Rosa Parks was arrested for refusing to give up her bus seat to a white passenger. The boycott, led by Martin Luther King Jr., lasted 381 days and resulted in the desegregation of Montgomery's bus system. It established nonviolent protest as a powerful tool for civil rights.",
  168: "The Suez Crisis of 1956 CE saw Israel, Britain, and France invade Egypt after President Gamal Abdel Nasser nationalized the Suez Canal. International pressure, particularly from the United States and Soviet Union, forced the invaders to withdraw. The crisis marked the decline of British and French imperial power and the rise of superpower politics.",
  169: "The Soviet Union launched Sputnik, the first artificial satellite, on October 4, 1957 CE. The event shocked the United States and initiated the Space Race between the two superpowers. Sputnik's beeping signal could be tracked worldwide, demonstrating Soviet technological achievement and spurring massive investment in science education.",
  170: "The Berlin Wall was constructed on August 13, 1961, by the East German government to prevent citizens from fleeing to the West. The wall divided Berlin for 28 years and became the most visible symbol of the Cold War division of Europe. Its fall on November 9, 1989, symbolized the end of the Cold War.",
  171: "The Cuban Missile Crisis of October 1962 brought the United States and Soviet Union to the brink of nuclear war. The 13-day confrontation, triggered by the discovery of Soviet nuclear missiles in Cuba, was resolved when the Soviets agreed to remove the missiles in exchange for a U.S. pledge not to invade Cuba.",
  172: "President John F. Kennedy was assassinated on November 22, 1963, in Dallas, Texas. His death shocked the nation and the world, and the circumstances surrounding it have been the subject of numerous investigations and conspiracy theories. The assassination marked a turbulent moment in American history.",
  173: "The Civil Rights Act of 1964, signed by President Lyndon B. Johnson, outlawed discrimination based on race, color, religion, sex, or national origin. The landmark legislation ended segregation in public places and banned employment discrimination, becoming one of the most significant achievements of the civil rights movement.",
  174: "The Cultural Revolution was launched by Mao Zedong in 1966 CE to preserve communist ideology by purging remnants of capitalist and traditional elements from Chinese society. The campaign led to widespread persecution, destruction of cultural artifacts, economic disruption, and an estimated 500,000 to two million deaths.",
  175: "The Six-Day War of June 1967 CE saw Israel defeat the combined forces of Egypt, Jordan, and Syria. Israel captured the Sinai Peninsula, Gaza Strip, West Bank, and Golan Heights. The war dramatically altered the political geography of the Middle East and the status of the Palestinian people.",
  176: "The Prague Spring of 1968 CE was a period of political liberalization in Czechoslovakia under Alexander Dubcek, who sought to create 'socialism with a human face.' The reforms were crushed when the Soviet Union invaded on August 20-21, demonstrating the limits of reform within the Eastern Bloc.",
  177: "Apollo 11 astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon on July 20, 1969 CE. Armstrong's famous words 'That's one small step for man, one giant leap for mankind' captured the moment's significance. The mission fulfilled President Kennedy's goal and remains one of humanity's greatest achievements.",
  178: "The first Earth Day was celebrated on April 22, 1970, when 20 million Americans participated in rallies, teach-ins, and demonstrations for environmental protection. The event is credited with launching the modern environmental movement and led to the creation of the Environmental Protection Agency and landmark environmental laws.",
  179: "The 1973 oil crisis, triggered by an OPEC oil embargo against nations supporting Israel during the Yom Kippur War, caused oil prices to quadruple. The crisis led to fuel shortages, long gas station lines, and economic recession. It also accelerated interest in alternative energy sources and energy conservation.",
  180: "President Richard Nixon resigned on August 9, 1974, becoming the first U.S. president to do so. His resignation came amid the Watergate scandal, in which his administration was caught covering up a break-in at the Democratic National Committee headquarters. The scandal undermined public trust in government.",
  181: "The Fall of Saigon on April 30, 1975, marked the end of the Vietnam War when North Vietnamese forces captured the South Vietnamese capital. The iconic image of helicopters evacuating people from the U.S. Embassy symbolized America's defeat. The war had killed an estimated 1.5 to 3.5 million Vietnamese.",
  182: "Steve Jobs, Steve Wozniak, and Ronald Wayne founded Apple Computer in a garage in 1976 CE. The company went on to revolutionize personal computing, music (iPod), phones (iPhone), and tablets (iPad). Apple became one of the most valuable companies in the world and transformed how people interact with technology.",
  183: "The Camp David Accords of 1978 CE, brokered by U.S. President Jimmy Carter, led to a peace treaty between Egypt and Israel. Egyptian President Anwar Sadat and Israeli Prime Minister Menachem Begin signed the agreement after 13 days of negotiations. It was the first peace treaty between Israel and an Arab nation.",
  184: "The Iranian Revolution of 1979 CE overthrew the Shah's monarchy and established an Islamic Republic under Ayatollah Ruhollah Khomeini. The revolution transformed Iran from a secular, Western-aligned state into a theocracy. It also triggered the Iran hostage crisis and reshaped Middle Eastern geopolitics.",
  185: "The Space Shuttle Columbia made the first orbital spaceflight on April 12, 1981 CE. The shuttle program revolutionized space travel by creating a reusable spacecraft. Over 30 years, the shuttle fleet flew 135 missions, deploying satellites, conducting research, and helping to build the International Space Station.",
  186: "The Chernobyl disaster on April 26, 1986, was the worst nuclear accident in history. A reactor explosion at the Chernobyl Nuclear Power Plant in Ukraine (then part of the Soviet Union) released massive amounts of radioactive material into the atmosphere. The disaster contaminated large areas of Europe and accelerated the Soviet Union's decline.",
  187: "The fall of the Berlin Wall on November 9, 1989, was triggered when East German authorities announced that citizens could freely cross the border. Thousands of jubilant Berliners climbed on the wall and began demolishing it. The event symbolized the end of the Cold War and led to German reunification the following year.",
  188: "German reunification on October 3, 1990 CE, united East and West Germany into a single nation for the first time since 1945. The process followed the fall of the Berlin Wall and required complex negotiations between the two Germanys and the four Allied powers (US, UK, France, Soviet Union).",
  189: "The Soviet Union officially dissolved on December 26, 1991, ending the Cold War and creating 15 independent republics. The collapse was the result of economic stagnation, political reforms under Mikhail Gorbachev, nationalist movements, and a failed coup attempt. It fundamentally reshaped the global balance of power.",
  190: "The Rwandan Genocide of 1994 CE saw the systematic murder of approximately 800,000 Tutsi and moderate Hutu over 100 days. The genocide was carried out by Hutu extremists and was largely ignored by the international community. It remains one of the most devastating failures of international intervention in modern history.",
  191: "Hong Kong was returned to Chinese sovereignty on July 1, 1997, after 156 years of British colonial rule. Under the 'one country, two systems' framework, Hong Kong was promised 50 years of autonomy. The handover marked the symbolic end of the British Empire and the beginning of a new era for Hong Kong.",
  192: "The September 11 attacks of 2001 CE, carried out by al-Qaeda terrorists, destroyed the World Trade Center towers in New York City and damaged the Pentagon. Nearly 3,000 people were killed. The attacks led to the U.S. invasion of Afghanistan, the creation of the Department of Homeland Security, and a global 'War on Terror.'",
  193: "The Human Genome Project was completed in April 2003 CE, successfully mapping all the genes in human DNA. The 13-year project identified approximately 20,000-25,000 human genes and sequenced 3 billion base pairs. This breakthrough opened new frontiers in medicine, genetics, and our understanding of human evolution.",
  194: "Apple released the first iPhone on June 29, 2007 CE, combining a phone, music player, and internet communicator in a single device with a touchscreen interface. The iPhone revolutionized the smartphone industry and fundamentally changed how people communicate, access information, and interact with technology.",
  195: "The global financial crisis of 2008 CE was triggered by the collapse of the U.S. housing market and the failure of major financial institutions, including Lehman Brothers. The crisis led to the worst global recession since the Great Depression, with trillions of dollars in losses and millions of job losses worldwide.",
  196: "The Arab Spring began in December 2010 CE when protests erupted in Tunisia against President Zine El Abidine Ben Ali. The protests spread to Egypt, Libya, Syria, and other Middle Eastern and North African countries, toppling several authoritarian regimes. While some countries transitioned to democracy, others descended into civil war.",
  197: "The Paris Climate Agreement was adopted on December 12, 2016, with 195 nations committing to limit global warming to well below 2 degrees Celsius above pre-industrial levels. The agreement represents the most comprehensive international effort to address climate change, though its implementation remains challenging.",
  198: "The COVID-19 pandemic was declared by the WHO on March 11, 2020, as the novel coronavirus spread globally. The pandemic caused over 6 million confirmed deaths, overwhelmed healthcare systems, and triggered unprecedented lockdowns and economic disruption. It accelerated vaccine development and remote work technologies.",
  199: "The James Webb Space Telescope was launched on December 25, 2021 CE. The most powerful space telescope ever built, it can observe the universe in infrared light, seeing farther back in time than any previous telescope. Its images of distant galaxies and exoplanet atmospheres have revolutionized astronomy.",
  200: "Russia launched a full-scale invasion of Ukraine on February 24, 2022 CE, marking the largest military conflict in Europe since World War II. The invasion was widely condemned by the international community, leading to extensive sanctions against Russia and military aid to Ukraine. The conflict reshaped European security and energy politics."
};

ALL_EVENTS.forEach(ev => { ev.longDesc = LONG_DESCRIPTIONS[ev.id] || "TBD"; });

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
const learnModal  = document.getElementById("learn-modal");
const learnTitle  = document.getElementById("learn-title");
const learnBody   = document.getElementById("learn-body");
const learnClose  = document.getElementById("learn-close");

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
      descDiv.innerHTML = `${current.desc} <span class="learn-link" data-id="${current.id}">learn</span>`;
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
        btn.innerHTML = "Show<br>Year";
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
        <div class="event-desc">${ev.desc} <span class="learn-link" data-id="${ev.id}">learn</span></div>
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
      render();
      setTimeout(showWin, 2000);
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
  errorMsg.textContent = `"${current.title}" is not in the right place. Try again!`;
  errorModal.classList.remove("hidden");

  queue.unshift(current);
  current = null;
}

retryBtn.addEventListener("click", () => {
  errorModal.classList.add("hidden");
  nextCard();
});

document.addEventListener("click", e => {
  if (e.target.classList.contains("learn-link")) {
    const id = parseInt(e.target.dataset.id, 10);
    const ev = ALL_EVENTS.find(x => x.id === id);
    if (ev) {
      learnTitle.textContent = ev.title;
      learnBody.textContent = ev.longDesc || "Details coming soon!";
      learnModal.classList.remove("hidden");
    }
  }
});

learnClose.addEventListener("click", () => {
  learnModal.classList.add("hidden");
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
