import { s, ml } from './script.js';

const quotes = [
  { text: "Tactics flow from a superior position.", author: "Bobby Fischer" },
  { text: "When you see a good move, look for a better one.", author: "Emanuel Lasker" },
  { text: "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.", author: "Sun Tzu" },
  { text: "A strong memory, concentration, imagination, and a strong will is required to become a great chess player.", author: "Bobby Fischer" },
  { text: "Every chess master was once a beginner.", author: "Irving Chernev" },
  { text: "Chess is the struggle against the error.", author: "Johannes Zukertort" },
  { text: "In life, as in chess, forethought wins.", author: "Charles Buxton" },
  { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { text: "The harder you work, the luckier you get.", author: "Gary Player" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Will Durant" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Great leaders are almost always great simplifiers.", author: "Colin Powell" },
  { text: "Persistence can change failure into extraordinary achievement.", author: "Marv Levy" },
  { text: "Patience and persistence are the magical providers of success.", author: "Anonymous" },
  { text: "The blunders are all there on the board, waiting to be made.", author: "Savielly Tartakower" },
  { text: "Chess, like love, like music, has the power to make men happy.", author: "Siegbert Tarrasch" },
  { text: "Play the opening like a book, the middle game like a magician, and the endgame like a machine.", author: "Rudolf Spielmann" },
  { text: "I have failed many times. And that's why I am a success.", author: "Michael Jordan" },
  { text: "You may have to fight a battle more than once to win it.", author: "Margaret Thatcher" },
  { text: "A leader is one who knows the way, goes the way, and shows the way.", author: "John C. Maxwell" },
  { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
  { text: "Chess holds its master in its own bonds, shackling the mind and brain so that the inner freedom of the very strongest must suffer.", author: "Albert Einstein" },
  { text: "There is no remorse like the remorse of chess.", author: "H.G. Wells" },
  { text: "Methodical thinking is of more use in chess than inspiration.", author: "C.J.S. Purdy" },
  { text: "Daring ideas are like chessmen moved forward; they may be beaten, but they may start a winning game.", author: "Johann Wolfgang von Goethe" },
  { text: "Chess is life in miniature. Chess is a struggle, chess is battles.", author: "Garry Kasparov" },
  { text: "I am my own worst enemy when I am losing.", author: "Anonymous" },
  { text: "Continuous effort - not strength or intelligence - is the key to unlocking our potential.", author: "Winston Churchill" },
  { text: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.", author: "Bruce Lee" },
  { text: "An ounce of practice is worth more than tons of preaching.", author: "Mahatma Gandhi" },
  { text: "Leadership is the capacity to translate vision into reality.", author: "Warren Bennis" },
  { text: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { text: "He who has a why to live for can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.", author: "Benjamin Franklin" },
  { text: "Never give in except to convictions of honor and good sense.", author: "Winston Churchill" },
  { text: "Difficulties break some men but make others.", author: "Nelson Mandela" },
  { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
  { text: "Plans are nothing; planning is everything.", author: "Dwight D. Eisenhower" },
  { text: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.", author: "Abraham Lincoln" },
  { text: "To be prepared is half the victory.", author: "Miguel de Cervantes" },
  { text: "Only those who will risk going too far can possibly find out how far one can go.", author: "T.S. Eliot" },
  { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { text: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix" },
];
function QuoteOfTheDay() {
  const [quoteIndex, setQuoteIndex] = ml.useState(() => Math.floor(Math.random() * quotes.length));
  const [fading, setFading] = ml.useState(false);

  const newQuote = () => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      setQuoteIndex(Math.floor(Math.random() * quotes.length));
      setFading(false);
    }, 400);
  };

  const currentQuote = quotes[quoteIndex];

  return s.jsxs("section", {
    className: "module",
    children: [
      s.jsxs("div", {
        className: "section-head",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("div", { className: "kicker", children: "Inspiration Module" }),
              s.jsx("h2", { className: "module-title", children: "Quote of the Day" })
            ]
          }),
          s.jsx("span", { className: "badge", children: "Intel" })
        ]
      }),
      s.jsxs("div", {
        style: {
          padding: "20px",
          background: "linear-gradient(135deg, rgba(35, 7, 7, 0.9), rgba(18, 3, 3, 0.9))",
          border: "1px solid rgba(255, 59, 25, 0.3)",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          position: "relative",
          overflow: "hidden"
        },
        children: [
          s.jsxs("div", {
            style: {
              opacity: fading ? 0 : 1,
              transition: "opacity 0.4s ease-in-out",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            },
            children: [
              s.jsx("div", {
                style: {
                  color: "#ff3b19",
                  fontSize: "32px",
                  lineHeight: "1",
                  fontFamily: "serif",
                  opacity: 0.6,
                  textShadow: "0 0 10px #ff3b194d"
                },
                children: "“"
              }),
              s.jsx("div", {
                style: {
                  color: "#e2e8f0",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                  fontStyle: "italic",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)"
                },
                children: currentQuote.text
              }),
              s.jsx("div", {
                style: {
                  color: "#ff3b19",
                  fontSize: "12px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textAlign: "right",
                  marginTop: "8px"
                },
                children: `— ${currentQuote.author}`
              })
            ]
          }),
          s.jsx("button", {
            onClick: newQuote, className: "btn orange",
            style: {
              alignSelf: "flex-end",
              marginTop: "8px",
              padding: "8px 16px"
            },
            children: "NEW QUOTE"
          })
        ]
      })
    ]
  });
}

export default QuoteOfTheDay;
