-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Set 08, 2020 alle 15:47
-- Versione del server: 10.4.8-MariaDB
-- Versione PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musi`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `album`
--

CREATE TABLE `album` (
  `id_album` int(11) NOT NULL,
  `id_artista` int(11) NOT NULL,
  `titolo` varchar(45) NOT NULL,
  `anno` int(11) NOT NULL,
  `genere` varchar(45) NOT NULL,
  `immagine` varchar(30) NOT NULL,
  `valutazione_media` float NOT NULL,
  `descrizione` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `album`
--

INSERT INTO `album` (`id_album`, `id_artista`, `titolo`, `anno`, `genere`, `immagine`, `valutazione_media`, `descrizione`) VALUES
(1, 2, 'In Rainbows', 2007, 'Rock', 'inrainbows', 5, 'In Rainbows è il settimo album in studio del gruppo musicale inglese Radiohead, pubblicato il 10 ottobre 2007 per il download digitale con il sistema pay what you want, e il 3 dicembre 2007 in edizione fisica da XL Recordings. L\'album è stato prodotto tra il 2005 e il 2007, inizialmente con il produttore Mark Stent e successivamente con lo storico produttore del gruppo Nigel Godrich. È stato ben accolto dalla critica musicale, e ha raggiunto le seguenti posizioni nella classifica dei migliori album del 2007: 2º posto secondo TIME e The Guardian, 3º posto secondo NME, 4º posto secondo Pitchfork. Nel 2012 il disco è stato incluso nella Lista dei 500 migliori album secondo Rolling Stone al 336º posto.'),
(2, 3, 'Elephant', 2003, 'Alternative Rock', 'elephant', 5, 'Elephant è il quarto album del gruppo musicale rock statunitense dei The White Stripes, pubblicato nel 2003. È il disco più venduto del duo, con più di 6 milioni di copie in tutto il mondo, di cui 2 negli USA. '),
(3, 1, 'Physical Graffiti', 1975, 'Rock', 'physicalgraffiti', 5, 'Physical Graffiti è il sesto album della rock band inglese Led Zeppelin, pubblicato nel 1975. Nel 2003 la rivista Rolling Stone colloca l\'album alla posizione n. 73 nella lista dei 500 migliori album di tutti i tempi. La copertina riporta la foto della facciata di un palazzo urbano ai numeri 96-98 di St. Mark\'s Street (East Village, New York) (fronte e retro). La copertina, con un gioco di incastri dovuto alla fustellatura, permetteva di \"aprire le finestre\" e guardare all\'interno degli appartamenti dove si trovavano foto di personaggi celebri, quadri famosi, istantanee del gruppo ritratto in momenti di svago, oltre alle lettere che formano il titolo dell\'album.'),
(4, 2, 'Kid A', 2000, 'Alternative Rock', 'kida', 5, 'Kid A è il quarto album in studio dei Radiohead, pubblicato nel 2000. Divenne un successo commerciale e internazionale, ottenendo un disco di platino nel Regno Unito una settimana dopo il suo rilascio ufficiale. Nonostante non venne rilasciato nessun singolo o videoclip ufficiali per pubblicizzare il disco, Kid A è stato il primo album dei Radiohead a raggiungere il primo posto negli Stati Uniti. Il suo successo potrebbe essere stato causato da una campagna di marketing particolare, dalla sua pubblicazione su Internet, oppure dall\'entusiasmo creatosi dal loro precedente album OK Computer.');

-- --------------------------------------------------------

--
-- Struttura della tabella `album_preferiti`
--

CREATE TABLE `album_preferiti` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `id_album` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `album_preferiti`
--

INSERT INTO `album_preferiti` (`id`, `username`, `id_album`) VALUES
(19, 'ciccio', 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `artista`
--

CREATE TABLE `artista` (
  `id_artista` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `immart` varchar(100) NOT NULL,
  `storia` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `artista`
--

INSERT INTO `artista` (`id_artista`, `nome`, `immart`, `storia`) VALUES
(1, 'Led Zeppelin', 'ledzeppelin', 'I Led Zeppelin sono stati un gruppo musicale britannico formato nel 1968, considerato tra i grandi innovatori del rock e tra i principali pionieri dell\'hard rock. La loro musica, le cui radici affondano in generi diversi tra cui blues, rockabilly e folk, ha costituito una formula completamente inedita per l\'epoca, finendo con l\'influenzare in qualche modo tutti i gruppi rock del loro tempo e del futuro. Il gruppo, scioltosi nel 1980 a seguito della morte del batterista, fu composto per l\'intero periodo della sua attività da Robert Plant (voce, armonica), Jimmy Page (chitarre), John Paul Jones (basso, tastiere) e John Bonham (batteria, percussioni). '),
(2, 'Radiohead', 'radiohead', 'I Radiohead sono un gruppo musicale rock alternativo inglese proveniente dall\'Oxfordshire e formatosi nel 1985. Fino al 1992, quando cambiarono nome, erano noti come On a Friday. Hanno venduto circa 40 milioni di dischi in tutto il mondo. La band è formata da Thom Yorke (voce, chitarra, pianoforte), Jonny Greenwood (chitarra solista, tastiere, sintetizzatore, pianoforte, onde Martenot), Ed O\'Brien (chitarra, percussioni, voce di supporto), Colin Greenwood (basso elettrico, sintetizzatori) e Philip Selway (batteria, percussioni).'),
(3, 'White Stripes', 'whitestripes', 'The White Stripes sono stati un duo garage rock-punk blues statunitense di Detroit, costituito da Jack White (John Anthony Gillis, nato il 9 luglio 1975) e Meg White (Megan Martha White, nata il 10 dicembre 1974). La struttura base della loro musica è costituita da due soli strumenti, la chitarra e la batteria, ma nelle loro canzoni utilizzano altri strumenti musicali; infatti, Jack White, oltre alla chitarra, suona il basso, il pianoforte, la marimba e altri strumenti a percussione, mentre Meg White suona, oltre la batteria, anche varie percussioni. La voce è quasi sempre quella di Jack, ma in alcune canzoni (come In The Cold, Cold Night, contenuta nel loro quarto album, Elephant) è Meg a cantare. Il 2 febbraio 2011 viene dato l\'annuncio del definitivo scioglimento del duo.');

-- --------------------------------------------------------

--
-- Struttura della tabella `artisti_preferiti`
--

CREATE TABLE `artisti_preferiti` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `id_artista` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `artisti_preferiti`
--

INSERT INTO `artisti_preferiti` (`id`, `username`, `id_artista`) VALUES
(9, 'Giorgio', 2),
(29, 'ciccio', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `brani_preferiti`
--

CREATE TABLE `brani_preferiti` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `id_brano` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `brani_preferiti`
--

INSERT INTO `brani_preferiti` (`id`, `username`, `id_brano`) VALUES
(7, 'Giorgio', 6),
(19, 'ciccio', 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `brano`
--

CREATE TABLE `brano` (
  `id_brano` int(11) NOT NULL,
  `id_album` int(11) NOT NULL,
  `titolo` varchar(60) NOT NULL,
  `durata` varchar(5) NOT NULL,
  `valutazione_media` float NOT NULL,
  `descrizione` text NOT NULL,
  `testo` text NOT NULL,
  `youtube` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `brano`
--

INSERT INTO `brano` (`id_brano`, `id_album`, `titolo`, `durata`, `valutazione_media`, `descrizione`, `testo`, `youtube`) VALUES
(1, 1, '15 Step', '04:02', 5, 'Primo brano album In Rainbows', 'How come I end up where I started -\r\nHow come I end up where I belong -\r\nWon\'t take my eyes off the ball again -\r\nYou reel me out then you cut the string -\r\nHow come I end up where I started -\r\nHow come I end up where I belong -\r\nWon\'t take my eyes off the ball again -\r\nYou reel me out then you cut the string -\r\nYou used to be alright -\r\nWhat happened? -\r\nDid the cat get your tongue -\r\nDid your string come undone -\r\nOne by one -\r\nOne by one -\r\nIt comes to us all -\r\nIt\'s as soft as your pillow -\r\nYou used to be alright -\r\nWhat happened? -\r\nEtcetera etcetera -\r\nFacts for whatever -\r\nFifteen steps -\r\nThen a shear drop', 'bgsmr7t8zGE'),
(2, 1, 'Bodysnatchers', '04:02', 5, 'Bodysnatchers è un singolo dei Radiohead, estratto dall\'album In Rainbows. La canzone fu pubblicata nel maggio del 2008 come parte di un disco promozionale insieme a House of Cards.', 'I do not chr -\r\nUnderstand -\r\nWhat it is -\r\nI\'ve done wrong -\r\nFull of holes -\r\nCheck for pulse -\r\nBlink your eyes -\r\nOne for yes -\r\nTwo for no -\r\nI have no idea what I am talking -about -\r\nI\'m trapped in this body and can\'t  -get out -\r\nOh, oh -\r\nMake a sound -\r\nMove back home -\r\nPale imitation -\r\nWith the edges -\r\nSawn off -\r\nI have no idea what you are talking about -\r\nI\'m trapped in this body and can\'t get out -\r\nOh, oh -\r\nHas the light gone out for you? -\r\n\'Cause the light\'s gone for me -\r\nIt is the 21st century -\r\nIt is the 21st century -\r\nYou can fight it like a dog -\r\nAnd they brought me to my knees -\r\nThey got scared and they put me in -\r\nThey got scared and they put me in -\r\nAll the lies run around my face -\r\nAll the lies run around my face -\r\nAnd for anyone else to see -\r\nAnd for anyone else to see -\r\nI\'m alive -\r\nI\'ve seen it coming -\r\nI\'ve seen it coming -\r\nI\'ve seen it coming -\r\nI\'ve seen it coming ', 'nIQxhSvSRnQ'),
(3, 1, 'Nude', '04:15', 5, 'Nude è una canzone del gruppo inglese dei Radiohead, secondo singolo estratto dall\'album In Rainbows il 31 marzo 2008. La canzone è stata scritta nel 1997, quando il gruppo cominciò ad eseguirla durante i concerti. Spesso veniva eseguita dal solo Thom Yorke alla chitarra acustica e il titolo provvisorio era \"Big Ideas\". Tuttavia una registrazione di Nude non era mai stata inclusa in alcun album dei Radiohead.', 'Don\'t get any big ideas\r\nThey\'re not gonna happen\r\nYou paint yourself white\r\nAnd fill up with noise\r\nThere\'ll be something missing\r\nAnd now that you found it\r\nIt\'s gone\r\nNow you feel it you don\'t\r\nYou\'ve gone off the rails\r\nSo don\'t get any big ideas\r\nThey\'re not gonna happen\r\nYou\'ll go to Hell\r\nFor what your\r\nDirty mind is thinking', 'BbWBRnDK_AE'),
(4, 1, 'Weird Fishes - Arpeggi', '05:18', 5, 'Quarto brano album In Rainbows', 'In the deepest ocean\r\nThe bottom of the sea\r\nYour eyes\r\nThey turn me\r\nWhy should I stay here?\r\nWhy should I stay?\r\nI\'d be crazy not to follow\r\nFollow where you lead\r\nYour eyes\r\nThey turn me\r\nTurn me on to phantoms\r\nI follow to the edge of the earth\r\nAnd fall off\r\nEverybody leaves\r\nIf they get the chance\r\nAnd this is my chance\r\nI get eaten by the worms\r\nWeird fishes\r\nGet towed by the worms\r\nWeird fishes\r\nWeird fishes\r\nWeird fishes\r\nI\'ll hit the bottom\r\nHit the bottom and escape\r\nEscape\r\nI\'ll hit the bottom\r\nHit the bottom and escape\r\nEscape', 'LUjGtyYEi90'),
(5, 1, 'All I Need', '03:49', 5, 'Quinto brano album In Rainbows', 'I\'m the next act\r\nWaiting in the wings\r\nI\'m an animal\r\nTrapped in your hot car\r\nI am all the days\r\nThat you choose to ignore\r\nYou are all I need\r\nYou are all I need\r\nI\'m in the middle of your picture\r\nLying in the reeds\r\nI am a moth\r\nWho just wants to share your light\r\nI\'m just an insect\r\nTrying to get out of the night\r\nI only stick with you\r\nBecause there are no others\r\nYou are all I need\r\nYou are all I need\r\nI\'m in the middle of your picture\r\nLying in the reeds\r\nIt\'s all wrong\r\nIt\'s all right\r\nIt\'s all wrong\r\nIt\'s all wrong\r\nIt\'s all right\r\nIt\'s all wrong\r\nIt\'s all wrong\r\nIt\'s all right\r\nIt\'s all wrong\r\nIt\'s all right', 'FM7ALFsOH4g'),
(6, 1, 'Faust Arp', '02:10', 5, 'Sesto brano album In Rainbows', 'One two three four\r\nWakey wakey\r\nRise and shine\r\nIt\'s on again, off again, on again\r\nWatch me fall\r\nLike domino\'s\r\nIn pretty patterns\r\nFingers in the blackbird pie\r\nI\'m tingling tingling tingling\r\nIt\'s what you feel now\r\nWhat you ought to, what you ought to\r\nReasonable and sensible\r\nDead from the neck up\r\nBecause I\'m stuffed, stuffed, stuffed\r\nWe thought you had it in you\r\nBut no, no, no\r\nFor no real reason\r\nSqueeze the tubes and empty bottles\r\nTake a bow take a bow take a bow\r\nIt\'s what you feel now\r\nWhat you ought to\r\nWhat you ought to\r\nAn elephant thats in the room is\r\nTumbling tumbling tumbling\r\nIn duplicate and duplicate\r\nPlastic bags and\r\nDuplicate and triplicate\r\nDead from the neck up\r\nGuess I\'m stuffed, stuffed, stuffed\r\nWe thought you had it in you\r\nBut no, no, no\r\nExactly where do you get off\r\nIs enough is enough is enough\r\nI love you but enough is enough, enough\r\nA last stop\r\nThere\'s no real reason', 'PRc0iMRoIoc'),
(7, 1, 'Reckoner', '04:50', 5, 'Reckoner è il quarto singolo dei Radiohead estratto dall\'album In Rainbows. La canzone è stata pubblicata il 23 settembre 2008 su iTunes. Il brano presenta delle percussioni \"gelide, tintinnanti\", una linea di chitarra \"sinuosa\" , un pianoforte, un arrangiamento di archi composto dal chitarrista dei Radiohead Jonny Greenwood, e un falsetto di Yorke, il quale ha dichiarato che il riff di chitarra è stato un omaggio al chitarrista dei Red Hot Chili Peppers, John Frusciante. Venne considerata come una delle migliori canzoni del decennio da Pitchfork e NME.', 'Reckoner\r\nYou can\'t take it with yer\r\nDancing for your pleasure\r\nYou are not to blame for\r\nBittersweet distractors\r\nDare not speak its name\r\nDedicated to all human beings\r\nBecause we separate\r\nLike ripples on a blank shore\r\nIn rainbows\r\nBecause we separate\r\nLike ripples on a blank shore\r\nReckoner\r\nTake me with yer\r\nDedicated to all human beings', 'pYHEpDnvVPk'),
(8, 1, 'House Of Cards', '05:28', 5, 'House of Cards è un singolo dei Radiohead, estratto dall\'album In Rainbows. La canzone fu pubblicata nel maggio del 2008 come parte di un disco promozionale insieme a Bodysnatchers.', 'I don\'t want to be your friend\r\nI just want to be your lover\r\nNo matter how it ends\r\nNo matter how it starts\r\nForget about your house of cards\r\nAnd I\'ll do mine\r\nForget about your house of cards\r\nAnd I\'ll do mine\r\nFall off the table\r\nGet swept under\r\nDenial, denial\r\nThe infrastructure will collapse\r\nVoltage spikes\r\nThrow your keys in the bowl\r\nKiss your husband goodnight\r\nForget about your house of cards\r\nAnd I\'ll do mine\r\nForget about your house of cards\r\nAnd I\'ll do mine\r\nFall off the table\r\nAnd get swept under\r\nDenial, denial\r\nDenial, denial\r\nYour ears should be burning\r\nDenial, denial\r\nYour ears should be burning', 'Nng0aSsq_XE'),
(9, 1, 'Jigsaw Falling Into Place', '04:09', 5, 'Jigsaw Falling into Place è un singolo dei Radiohead, estratto dal loro album del 2007 In Rainbows. La canzone è stata estratta come primo singolo dall\'album il 14 gennaio 2008, scritta da Thom Yorke e Jonny Greenwood. La canzone era inizialmente intitolata Open Pick, titolo provvisorio quando il brano è stato suonato per le prime volte durante il tour dei Radiohead del 2006.', 'Just as you take my hand\r\nJust as you write my number down\r\nJust as the drinks arrive\r\nJust as they play your favorite song\r\nAs your bad day disappears\r\nNo longer wound up like a spring\r\nBefore you had too much\r\nCome back and focus again\r\nThe walls are bending shape\r\nThey\'ve got a Cheshire cat grin\r\nAll blurring into one\r\nThis place is on a mission\r\nBefore the night owl\r\nBefore the animal noises\r\nClosed circuit cameras\r\nBefore you\'re comatose\r\nBefore you run away from me\r\nBefore you\'re lost between the notes\r\nThe beat goes round and round\r\nThe beat goes round and round\r\nI never really got there\r\nI just pretended that I had\r\nWords are blunt instruments\r\nWords are sawed-off shotguns\r\nCome on and let it out\r\nCome on and let it out\r\nCome on and let it out\r\nCome on and let it out\r\nBefore you run away from me\r\nBefore you\'re lost between the notes\r\nJust as you take my mic\r\nJust as you dance, dance, dance\r\nJigsaw falling into place\r\nSo there is nothing to explain\r\nYou eye each other as you pass\r\nShe looks back, you look back\r\nNot just once\r\nNot just twice\r\nWish away the nightmare\r\nWish away the nightmare\r\nYou\'ve got a light, you can feel it on your back\r\nA light, you can feel it on your back\r\nJigsaw falling into place', 'CvjRlYpXS5U'),
(10, 1, 'Videotape', '04:40', 5, 'Decimo brani album In Rainbows', 'When I\'m at the pearly gates\r\nThis will be on my videotape, my videotape\r\nMephistopheles is just beneath\r\nAnd he\'s reaching up to grab me\r\nThis is one for the good days\r\nAnd I have it all here\r\nIn red, blue, green\r\nRed, blue, green\r\nYou are my center\r\nWhen I spin away\r\nOut of control on videotape\r\nOn videotape\r\nOn videotape\r\nOn videotape\r\nOn videotape\r\nOn videotape\r\nThis is my way of saying goodbye\r\nBecause I can\'t do it face to face\r\nI\'m talking to you after it\'s too late\r\nNo matter what happens now\r\nYou shouldn\'t be afraid\r\nBecause I know today has been the most perfect day I\'ve ever seen', 'WF83_PR2EsA'),
(11, 2, 'Seven Nation Army', '03:52', 5, 'Seven Nation Army è un singolo del 2003 del gruppo musicale The White Stripes, prima traccia dell\'album Elephant. Nell\'anno di pubblicazione vinse un Grammy Award come \"migliore canzone rock\". Il titolo Seven Nation Army (che letteralmente significa esercito di sette nazioni) si ricollega all\'infanzia di Jack White, membro del duo: da bambino era la sua storpiatura involontaria di Salvation Army, l\'esercito della Salvezza.', 'I\'m gonna fight \'em all\r\nA seven nation army couldn\'t hold me back\r\nThey\'re gonna rip it off\r\nTaking their time right behind my back\r\nAnd I\'m talking to myself at night\r\nBecause I can\'t forget\r\nBack and forth through my mind\r\nBehind a cigarette\r\nAnd the message coming from my eyes\r\nSays, \"Leave it alone\"\r\nDon\'t wanna hear about it\r\nEvery single one\'s got a story to tell\r\nEveryone knows about it\r\nFrom the Queen of England to the Hounds of Hell\r\nAnd if I catch it coming back my way\r\nI\'m gonna serve it to you\r\nAnd that ain\'t what you want to hear\r\nBut that\'s what I\'ll do\r\nAnd the feeling coming from my bones\r\nSays, \"Find a home\"\r\nI\'m going to Wichita\r\nFar from this opera forevermore\r\nI\'m gonna work the straw\r\nMake the sweat drip out of every pore\r\nAnd I\'m bleeding, and I\'m bleeding, and I\'m bleeding\r\nRight before the Lord\r\nAll the words are gonna bleed from me\r\nAnd I will sing no more\r\nAnd the stains coming from my blood\r\nTell me, \"Go back home\"', '0J2QdDbelmY'),
(12, 2, 'Black Math', '03:03', 5, 'Secondo brano album Elephant', 'Don\'t you think that I\'m bound to react now?\r\nMy fingers definitely turning to black now\r\nMaybe I\'ll put my love on ice\r\nAnd teach myself, maybe that\'ll be nice\r\nMy books are sitting at the top of the stack now\r\nThe longer words are really breaking my back now\r\nMaybe I\'ll learn to understand,\r\nDrawing a square with a pencil in hand\r\nMathematically turning the page\r\nUnequivocally showing my age\r\nI\'m practically center stage\r\nUndeniably earning your wage\r\nMaybe I\'ll put my love on ice\r\nAnd teach myself, maybe that\'ll be nice\r\nListen master can I ask you a question?\r\nIs it the fingers, or the brain\r\nThat you\'re teaching the lesson?\r\nMaybe I\'ll put my love on ice\r\nAnd teach myself, maybe that\'ll be nice', 'WMbL2K3xVEM'),
(13, 2, 'There\'s No Home for You Here', '03:43', 5, 'There\'s No Home for You Here è una canzone del gruppo rock statunitense The White Stripes, contenuto nel loro quarto album in studio del 2003 Elephant. È stato pubblicato come quarto singolo estratto dall\'album il 15 marzo 2004 nel Regno Unito. Il lato B del singolo contiene un medley di I Fought Piranhas e Let\'s Build a Home rispettivamente da The White Stripes (1999) e De Stijl (2000). Sono registrati dal vivo al Electric Lady Studios il 16 novembre 2003.', 'There\'s no home for you here girl, go away\r\nThere\'s no home for you here\r\nThere\'s no home for you here girl, go away\r\nThere\'s no home for you here\r\nI\'d like to think that all of this constant interaction\r\nIs just the kind to make you drive yourself away?\r\nEach simple gesture done by me is counteracted\r\nAnd leaves me standing here with nothing else to say\r\nCompletely baffled by a backward indication\r\nThat an inspired word will come across your tongue\r\nHands moving upward to propel the situation\r\nHave simply halted and now the conversation\'s done\r\nThere\'s no home for you here girl, go away\r\nThere\'s no room for you here\r\nThere\'s no home for you here girl, go away\r\nThere\'s no room for you here\r\nI\'m only waiting for the proper time to tell you\r\nThat it\'s impossible to get along with you\r\nIt\'s hard to look you in the face when we are talking\r\nSo it helps to have a mirror in the room\r\nI\'ve not been really looking forward to the performance\r\nBut there\'s my cue and there\'s a question on your face\r\nFortunately I have come across an answer\r\nWhich is go away and do not leave a trace\r\nThere\'s no home for you here girl, go away\r\nThere\'s no home for you here\r\nWaking up for breakfast\r\nBurning matches\r\nTalking quickly\r\nBreaking baubles\r\nThrowing garbage\r\nDrinking soda\r\nLooking happy\r\nTaking pictures\r\nSo completely stupid\r\nJust go away\r\nThere\'s no home for you here girl, go away\r\nThere\'s no home for you here', '8ahICj_vEZ4'),
(14, 2, 'I Just Don\'t Know What to Do with Myself', '02:46', 5, 'Nel mese di ottobre del 1970 Richard Perry produce I Just Don\'t Know What to Do With Myself ed è poi stato pubblicato come primo singolo da solista di Gary Puckett. Il brano raggiunse la posizione #61 nella Hot 100 di Billboard magazine.\r\nNel 2003 i The White Stripes ne fanno una cover e la pubblicano nell\'album Elephant del 2003. Successivamente viene anche pubblicato come singolo nel mese di settembre del 2003.', 'Just don\'t know what to do with myself\r\nI don\'t know what to do with myself\r\nPlanning everything for two\r\nDoing everything with you\r\nAnd now that were through\r\nI just don\'t know what to do\r\nI just don\'t know what to do with myself\r\nI don\'t know what to do with myself\r\nMovies only make me sad\r\nParties make me feel as bad\r\nCause I\'m not with you\r\nI just don\'t know what to do\r\nLike a summer rose\r\nNeeds the sun and rain\r\nI need your sweet love\r\nTo beat love away\r\nWell I don\'t know what to do with myself\r\nJust don\'t know what to do with myself\r\nPlanning everything for two\r\nDoing everything with you\r\nAnd now that were through\r\nI just don\'t know what to do\r\nLike a summer rose\r\nNeeds the sun and rain\r\nI need your sweet love\r\nTo beat love away\r\nI just don\'t know what to do with myself\r\nJust don\'t know what to do with myself\r\nJust don\'t know what to do with myself\r\nI don\'t know what to do with myself', 'zmt9RhNON7k'),
(15, 2, 'In the Cold, Cold Night', '02:58', 5, 'Quinto brano album Elephant', 'I saw you standing in the corner\r\nOn the edge of a burning light\r\nI saw you standing in the corner\r\nCome to me again in the cold, cold night\r\nYou make me feel a little older\r\nLike a full grown woman might\r\nBut when you\'re gone I grow colder\r\nCome to me again in the cold, cold night\r\nI see you walking by my front door\r\nI hear the creaking of the kitchen floor\r\nI don\'t care what other people say\r\nI\'m going to love you, anyway\r\nCome to me again in the cold, cold night\r\nI can\'t stand it any longer\r\nI need the fuel to make my fire burn bright\r\nSo don\'t fight it any longer\r\nCome to me again in the cold, cold night\r\nAnd I know that you feel it too\r\nWhen my skin turns into glue\r\nYou will know that it\'s warm inside\r\nAnd you\'ll come run to me, in the cold, cold night', 'Q7kuDjOv3Og'),
(16, 2, 'I Want to Be the Boy to Warm Your Mother\'s Heart', '03:20', 5, 'Sesto brano album Elephant', 'I want to be the boy to warm your mother\'s heart\r\nI\'m so scared to take you away\r\nI tried to win her over right from the start\r\nBut something always got in the way\r\nWe\'ve been sitting in your backyard for hours\r\nBut she won\'t even come out and say hi\r\nWhile my mother baked a little cake for you\r\nAnd even dreaded when you said goodbye\r\nWhat kind of cartwheels do I have to pull?\r\nWhat kind of joke should I lay on her now?\r\nI\'m inclined to go finish high school\r\nJust to make her notice that I\'m around\r\nWell nothing I come up with seems to work\r\nIt feels like everything I say is a lie\r\nAnd never have I felt like such a jerk\r\nI\'m afraid to even open my eyes\r\nBecause I really don\'t want her to judge me\r\nI want her to really know who I am\r\nAnd the, and only then will she love me\r\nWell at least that was the plan\r\nIf ever a boy needed a holiday\r\nIf ever a girl needed someone to hold\r\nI just hope I don\'t act the same way\r\nBy the time that I get that old\r\nI never said I was the heir to a fortune\r\nI never claimed to have any looks\r\nBut these kind of things must be important\r\nBecause somebody ripped out my page\r\nIn your telephone book\r\nI want to warm her heart', 'hq35xNUmp-0'),
(17, 2, 'You\'ve Got Her in Your Pocket', '03:39', 5, 'Settimo brano album Elephant', 'You\'ve got her in your pocket\r\nAnd there is no way out now\r\nPut it in the safe and lock it\r\nCause it\'s home sweet home\r\nNobody ever told you that it was the wrong way\r\nTo trick a woman, make her feel she did it her way\r\nAnd you\'ll be there if she ever feels blue\r\nAnd you\'ll be there when she finds someone new\r\nWhat to do\r\nWell you know\r\nYou keep her in your pocket\r\nWhere there\'s no way out now\r\nPut it in the safe and lock it\r\nCause it\'s home sweet home\r\nThe smile on your face made her think\r\nShe had the right one\r\nThen she thought she was sure\r\nBy the way you two could have fun\r\nBut now she might leave\r\nLike she\'s threatened before\r\nGrab hold of her fast\r\nBefore her feet leave the floor\r\nAnd she\'s out the door\r\nCause you want\r\nTo keep her in my pocket\r\nWhere there\'s no way out now\r\nPut it in the safe and lock it\r\nCause it\'s home sweet home\r\nAnd in your own mind\r\nYou know you\'re lucky just to know her\r\nAnd in the beginning all you wanted\r\nWas to show her\r\nBut now you\'re scared\r\nYou think she\'s running away\r\nYou search in you hand for something clever to say\r\nDon\'t go away\r\nCause I want\r\nTo keep you in my pocket\r\nWhere there\'s no way out\r\nPut it in the safe and lock it\r\nCause it\'s home sweet home\r\nHome sweet home', 'LppNqA7Z_J0'),
(18, 2, 'Ball and Biscuit', '07:19', 5, 'Ball and Biscuit è l\'ottava traccia dell\'album Elephant dei The White Stripes. Questa traccia e Seven Nation Army sono i brani chiave che hanno permesso a Jack White, chitarrista e cantante della band, di entrare nella lista dei 100 migliori chitarristi secondo Rolling Stone piazzandosi al settantesimo posto.', 'It\'s quite possible that I\'m your third man, girl\r\nBut it\'s a fact that I\'m the seventh son\r\nIt\'s quite possible that I\'m your third man, girl\r\nBut it\'s a fact that I\'m the seventh son\r\nAnd right now you could care less about me\r\nBut soon enough you will care, by the time I\'m done\r\nLet\'s have a ball and a biscuit, sugar\r\nAnd take our sweet little time about it\r\nLet\'s have a ball, girl\r\nAnd take our sweet little time about it\r\nTell everybody in the place to just get out\r\nAnd we\'ll get clean together\r\nAnd I\'ll find me a soap box where I can shout it\r\nYeah\r\nHey\r\nYeah, read it in the newspaper\r\nAsk your girlfriends and see if they know\r\nRead it in the newspaper\r\nAsk your girlfriends and see if they know\r\nThat my strength is ten fold, girl\r\nI\'ll let you see if you want to before you go\r\nLet\'s have a ball and a biscuit, sugar\r\nAnd take our sweet little time about it\r\nLet\'s have a ball\r\nAnd take our sweet little time about it\r\nTell everybody in the place to just get out\r\nWe\'ll get clean together\r\nAnd I\'ll find me a soap box where I can shout it\r\nYeah, I can think of one or two things to say about it\r\nAlright, listen\r\nYou get the point now?\r\nYeah, it\'s quite possible that I\'m your third man\r\nBut it\'s a fact that I\'m the seventh son\r\nIt was the other two which made me your third\r\nBut it\'s my mother who made me the seventh son\r\nAnd right now you could care less about me\r\nBut soon enough you will care by the time I\'m done\r\nYeah, you just wait\r\nYeah, stick around\r\nYou\'ll figure it out', 'B6j97ZvyuSc'),
(19, 2, 'The Hardest Button to Button', '03:32', 5, 'The Hardest Button to Button è una canzone del 2003 dei The White Stripes, nona traccia dell\'album Elephant. Il video musicale di The Hardest Button to Button il terzo video dei White Stripes diretto da Michel Gondry, dopo Fell in Love with a Girl e Dead Leaves and the Dirty Ground. Il video utilizza la Pixilation per moltiplicare drum-kit e amplificatori a tempo di musica.', 'Fall is here, hear the yell\r\nBack to school, ring the bell\r\nBrand new shoes, walking blues\r\nClimb the fence, books and pens\r\nI can tell that we are going to be friends\r\nI can tell that we are going to be friends\r\nWalk with me, Suzy Lee\r\nThrough the park and by the tree\r\nWe will rest upon the ground\r\nAnd look at all the bugs we found\r\nSafely walk to school without a sound\r\nSafely walk to school without a sound\r\nHere we are, no one else\r\nWe walked to school all by ourselves\r\nThere\'s dirt on our uniforms\r\nFrom chasing all the ants and worms\r\nWe clean up and now its time to learn\r\nWe clean up and now its time to learn\r\nNumbers, letters, learn to spell\r\nNouns, and books, and show and tell\r\nPlaytime we will throw the ball\r\nBack to class, through the hall\r\nTeacher marks our height against the wall\r\nTeacher marks our height against the wall\r\nWe don\'t notice any time pass\r\nWe don\'t notice anything\r\nWe sit side by side in every class\r\nTeacher thinks that I sound funny\r\nBut she likes the way you sing\r\nTonight I\'ll dream while in my bed\r\nWhen silly thoughts go through my head\r\nAbout the bugs and alphabet\r\nAnd when I wake tomorrow I\'ll bet\r\nThat you and I will walk together again\r\nI can tell that we are going to be friends\r\nI can tell that we are going to be friends', '1DGX6HBR-XA'),
(20, 2, 'Little Acorns', '04:09', 5, 'Decimo brano album Elephant', 'Take all your problems\r\nAnd rip \'em apart\r\nOh oh oh\r\nCarry them off\r\nIn a shopping cart\r\nOh oh oh\r\nAnd another thing you\r\nShould\'ve known from the start\r\nThe problems in hand\r\nAre lighter than at heart\r\nBe like the squirrel, girl\r\nBe like the squirrel\r\nGive it a whirl, girl\r\nBe like the squirrel\r\nAnd another thing\r\nYou have to know in this world\r\nCut up your hair\r\nStraighten your curls\r\nWell you problems\r\nHide in your curls', 'KSvGOKH5zxk'),
(21, 2, 'Hypnotize', '01:48', 5, 'Undicesimo brano album Elephant', 'I want to hypnotize you baby\r\nOn the telephone\r\nSo many times I called your house\r\nJust to hear the tone\r\nAnd though I knew that you weren\'t home\r\nI didn\'t mind so much \'cause I\'m so alone\r\nI want to hypnotize you baby\r\nOn the telephone\r\nI want to spin my little watch\r\nRight before your very eyes\r\nYou\'re the kind of girl\r\nA guy like me could hypnotize\r\nAnd if this comes as a surprise\r\nJust think of all of those guys\r\nWho would tell you lies\r\nI want to spin my little watch\r\nRight before your eyes\r\nI want to hold your little hand\r\nIf I can be so bold\r\nAnd be your right hand man\r\n\'Til you hands get old\r\nAnd then when all the feelings gone\r\nJust decide if you want to keep holding on\r\nI want to hold your little hand\r\nIf I can be so bold\r\nIf I can be so bold\r\nIf I can be so bold', 'c3V-QqdRXpk'),
(22, 2, 'The Air Near My Fingers', '03:40', 5, 'Dodicesimo brano album Elephant', 'Life is so boring\r\nIt\'s really got me snoring\r\nI\'m wearing out the flooring\r\nIn a cheap hotel\r\nBut I don\'t have to work and\r\nI might be sinning\r\nBut I never have to listen to\r\nThe rings of school bells\r\nDon\'t you remember?\r\nYou told me in December\r\nThat a boy is not a man\r\nUntil he makes a stand\r\nWell, I\'m not a genius\r\nBut maybe you\'ll remember this\r\nI never said I ever wanted\r\nTo be a man\r\nI get nervous when she comes around\r\nMy mom is so caring\r\nShe\'s really got me staring\r\nAt all the crazy little things\r\nShe does for sure\r\nAnd I can\'t seem to think of\r\nAnother kind of love\r\nThat a boy could ever get\r\nFrom anyone from her\r\nI get nervous when she comes around', 'XMbL6AlqeuQ'),
(23, 2, 'Girl, You Have No Faith in Medicine', '03:17', 5, 'Tredicesimo brano album Elephant', 'Girl,\r\nYou have no faith in medicine\r\nAcetaminophen\r\nYou see the medicine\r\nGirl,\r\nYou have no faith in medicine\r\nIs there a way to find a cure for this\r\nImplanted in a pill?\r\nIs it just the name upon the bottle\r\nThe determines if it will?\r\nIs the problem your allergic\r\nTo a well familiar name?\r\nDo you have any problem with this one\r\nIf the results are they same?\r\nAcetaminophen\r\nYou see the medicine\r\nGirl,\r\nYou have no faith in medicine\r\nWell strip the bark right off a tree\r\nAnd just hand it this way\r\nDon\'t even need a drink of water\r\nTo make the headache go away\r\nGive me a sugar pill\r\nAnd watch me just rattle\r\nDown the street\r\nAcetaminophen\r\nYou see the medicine\r\nGirl,\r\nYou have no faith in medicine', '0mWM0S1dMro'),
(24, 2, 'It\'s True That We Love One Another', '02:42', 5, 'Quattordicesimo brano album Elephant', 'Well its true that we love one another\r\nI love Jack White like a little brother\r\nWell Holly I love you too but there\'s just so much\r\nThat I don\'t know about you\r\nJack give me some money to pay my bills\r\nAll the dough I give you Holly\r\nYou been using on pain pills\r\nJack will you call me if you\'re able?\r\nI got your phone number written\r\nIn the back of my bible\r\nJack I think you\'re pulling my leg\r\nAnd I think maybe Id better ask Meg\r\nMeg do you think Jack really loves me?\r\nYou know, I don\'t care because Jack really bugs me\r\nWhy don\'t you ask him now?\r\nWell I would but Meg, I really just don\'t know how\r\nJust say Jack, do you adore me?\r\nWell I would Holly but love really bores me\r\nWell maybe we should just be friends\r\nI\'m just kidding Holly\r\nYou know that Ill love you til the end\r\nWell its true that we love one another\r\nI love Jack White like a little brother\r\nWell Holly I love you too but there\'s just so much\r\nThat I don\'t know about you\r\nHolly give me some of your\r\nEnglish lovin\'\r\nIf I did that Jack Id have one in\r\nThe oven\r\nWhy don\'t you go off and love yourself\r\nIf I did that Holly there\r\nWon\'t be anything left\r\nFor anybody else\r\nJack its too bad\r\nAbout the way that you look\r\nYou know I gave that horse a carrot\r\nSo he\'d break your foot\r\nWill the two of you cut it out\r\nAnd tell em what Its really all about\r\nWell its true that we love one another\r\nI love Jack White like a little brother\r\nWell Holly I love you too\r\nBut there\'s just so much\r\nThat I don\'t know about you', 'aXm1g4TJ46M');

-- --------------------------------------------------------

--
-- Struttura della tabella `master_user`
--

CREATE TABLE `master_user` (
  `user_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `immagine` varchar(100) DEFAULT NULL,
  `status` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `master_user`
--

INSERT INTO `master_user` (`user_id`, `email`, `username`, `password`, `immagine`, `status`) VALUES
(1, '', 'Giorgio', '16cdae1dc8f5ccc69c51eea2851bff68', NULL, 'y'),
(2, '', 'ciao', '6e6bc4e49dd477ebc98ef4046c067b5f', NULL, 'y'),
(3, 'prova@gmial.com', 'prova', '189bbbb00c5f1fb7fba9ad9285f193d1', NULL, 'y'),
(4, 'bravo@gmail.com', 'bravo', 'fd9ab41e47a9ef4f6477a8a000bf404f', NULL, 'y'),
(5, 'ciccio@caputo.it', 'ciccio', '27b4b5b01b0d1fcab2046369720ff75e', NULL, 'y'),
(6, 'aquila@gmail.com', 'aquila', '92127b4483830b255a7f0615711607cd', 'C:fakepathaq.jpg', 'y'),
(7, 'pippo@gmail.com', 'pippo', '0c88028bf3aa6a6a143ed846f2be1ea4', 'C:fakepath500.jpg', 'y'),
(8, 'prova@prova.it', 'prova123', '189bbbb00c5f1fb7fba9ad9285f193d1', 'C:fakepathcl.jpg', 'y'),
(9, 'johnny@qualcosa.it', 'johnny', 'f4eb27cea7255cea4d1ffabf593372e8', 'C:fakepathqueen.png', 'y');

-- --------------------------------------------------------

--
-- Struttura della tabella `notizia`
--

CREATE TABLE `notizia` (
  `id_notizia` int(11) NOT NULL,
  `titolo` varchar(100) NOT NULL,
  `descrizione` text NOT NULL,
  `link` varchar(100) NOT NULL,
  `immnews` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `notizia`
--

INSERT INTO `notizia` (`id_notizia`, `titolo`, `descrizione`, `link`, `immnews`) VALUES
(1, 'Radiohead, in streaming lo storico concerto a Londra del 1994', 'I Radiohead hanno annunciato il nuovo episodio della serie di concerti che pubblicano in streaming su YouTube durante la quarantena.', 'y948g623', 'radioheadnews1'),
(2, 'Dream Theater, l\'omaggio di Jordan Rudess a Ennio Morricone: ascolta', 'Il tastierista della prog-metal band statunitense posta un commovente omaggio al Maestro scomparso sulle note di \'Nuovo Cinema Paradiso\'', 'y7twl44f', 'dreamtheaternews1');

-- --------------------------------------------------------

--
-- Struttura della tabella `recensione_album`
--

CREATE TABLE `recensione_album` (
  `id` int(11) NOT NULL,
  `titolo` varchar(45) NOT NULL,
  `testo` text NOT NULL,
  `valutazione` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `id_album` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `recensione_album`
--

INSERT INTO `recensione_album` (`id`, `titolo`, `testo`, `valutazione`, `username`, `id_album`) VALUES
(1, 'Capolavoro', 'Bellissimo', 5, 'tizio', 1),
(2, 'ok', 'ok', 3, 'caio', 1),
(3, 'prova', 'prova', 4, 'Giorgio', 1),
(4, 'prova', 'prova', 5, 'ciccio', 2),
(5, 'bello', 'molto intenso', 5, 'ciccio', 2),
(6, 'Mah', 'Niente di entusiasmante', 2, 'ciccio', 2),
(7, 'prova', 'prova', 4, 'ciccio', 1),
(8, 'prova', 'prova', 4, 'ciccio', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `recensione_brano`
--

CREATE TABLE `recensione_brano` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `id_brano` int(11) NOT NULL,
  `titolo` varchar(45) NOT NULL,
  `valutazione` int(11) NOT NULL,
  `testo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `recensione_brano`
--

INSERT INTO `recensione_brano` (`id`, `username`, `id_brano`, `titolo`, `valutazione`, `testo`) VALUES
(1, 'Giorgio', 1, '15 Step', 4, 'Molto bello'),
(2, 'Giorgio', 1, 'prova', 5, 'prova'),
(3, 'Giorgio', 0, 'Prova', 5, 'Prova recensione'),
(4, 'Giorgio', 3, 'Prova', 5, 'Bellissimo'),
(5, 'ciccio', 0, 'Bello', 4, 'Molto intenso'),
(6, 'ciccio', 0, 'Bello', 4, 'Molto intenso'),
(7, 'ciccio', 2, 'Bello', 5, 'Molto bello il testo'),
(8, 'ciccio', 3, 'bello', 4, 'bellissimo ma'),
(9, 'ciccio', 3, 'Top', 5, 'Spettacolo');

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE `utente` (
  `username` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(20) NOT NULL,
  `immagine_profilo` longblob DEFAULT NULL,
  `status` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`username`, `email`, `password`, `immagine_profilo`, `status`) VALUES
('matleo', 'matteo@mail.it', 'a9e8d0f247bcda23efe1', NULL, 'y'),
('prova', 'prova@prova.it', '189bbbb00c5f1fb7fba9', NULL, 'y'),
('tizio', 'tizio', '5082e3b899218f0e7a65', NULL, 'y');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id_album`,`id_artista`);

--
-- Indici per le tabelle `album_preferiti`
--
ALTER TABLE `album_preferiti`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `artista`
--
ALTER TABLE `artista`
  ADD PRIMARY KEY (`id_artista`);

--
-- Indici per le tabelle `artisti_preferiti`
--
ALTER TABLE `artisti_preferiti`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `brani_preferiti`
--
ALTER TABLE `brani_preferiti`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `brano`
--
ALTER TABLE `brano`
  ADD PRIMARY KEY (`id_brano`,`id_album`);

--
-- Indici per le tabelle `master_user`
--
ALTER TABLE `master_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indici per le tabelle `notizia`
--
ALTER TABLE `notizia`
  ADD PRIMARY KEY (`id_notizia`);

--
-- Indici per le tabelle `recensione_album`
--
ALTER TABLE `recensione_album`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `recensione_brano`
--
ALTER TABLE `recensione_brano`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `album`
--
ALTER TABLE `album`
  MODIFY `id_album` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `album_preferiti`
--
ALTER TABLE `album_preferiti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT per la tabella `artista`
--
ALTER TABLE `artista`
  MODIFY `id_artista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `artisti_preferiti`
--
ALTER TABLE `artisti_preferiti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT per la tabella `brani_preferiti`
--
ALTER TABLE `brani_preferiti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT per la tabella `brano`
--
ALTER TABLE `brano`
  MODIFY `id_brano` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT per la tabella `master_user`
--
ALTER TABLE `master_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT per la tabella `notizia`
--
ALTER TABLE `notizia`
  MODIFY `id_notizia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT per la tabella `recensione_album`
--
ALTER TABLE `recensione_album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT per la tabella `recensione_brano`
--
ALTER TABLE `recensione_brano`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
