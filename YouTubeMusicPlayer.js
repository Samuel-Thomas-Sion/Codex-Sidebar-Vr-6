import { s, ml } from './script.js';

function formatTime(s) {
  if (isNaN(s) || !isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return m + ":" + (sec < 10 ? "0" : "") + sec;
}
function YouTubeMusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = ml.useState(0);
  const [isPlaying, setIsPlaying] = ml.useState(!1);
  const [volume, setVolume] = ml.useState(60);
  const [isMuted, setIsMuted] = ml.useState(!1);
  const [repeatMode, setRepeatMode] = ml.useState("ALL");
  const [currentTime, setCurrentTime] = ml.useState(0);
  const [duration, setDuration] = ml.useState(0);
  const [searchQuery, setSearchQuery] = ml.useState("");

  const playerRef = ml.useRef(null);
  const wrapperRef = ml.useRef(null);
  const timerRef = ml.useRef(null);

  const [playlist, setPlaylist] = ml.useState([
    { title: "Imagine Dragons - Believer", id: "igulXNL1Kz0" },
    { title: "Imagine Dragons - Thunder", id: "GtEvysh1654" },
    { title: "Imagine Dragons - Demons", id: "MA0aCUxItYA" },
    { title: "Imagine Dragons - Radioactive", id: "vJao1u2uBqY" },
    { title: "Imagine Dragons - Whatever It Takes", id: "UsuF4jJ4sgA" },
    { title: "Imagine Dragons - It’s Time", id: "NASqUELHjPE" },
    { title: "Imagine Dragons - On Top of the World", id: "cxmMD5OvYRQ" },
    { title: "Imagine Dragons - Next to Me", id: "axS6L0NX7VE" },
    { title: "Imagine Dragons - Natural", id: "V5M2WZiAy6k" },
    { title: "Imagine Dragons - Shots", id: "N-awc3YAncM" },
    { title: "Alan Walker - Faded", id: "qdpXxGPqW-Y" },
    { title: "Alan Walker - Sing Me to Sleep", id: "K7UGaydx7NI" },
    { title: "Alan Walker - Alone", id: "bPs0xFd4skY" },
    { title: "Alan Walker - Darkside", id: "sdAOoB5ML0Q" },
    { title: "Alan Walker - The Spectre", id: "qHDJSRlNhVs" },
    { title: "Alan Walker - All Falls Down", id: "KJZsy_8Lyws" },
    { title: "Alan Walker & K-391 - Ignite", id: "zrwTYozyzYA" },
    { title: "Alan Walker - Diamond Heart", id: "c9R9VsK54ZQ" },
    { title: "Alan Walker - Tired", id: "YnaEoCY_vzc" },
    { title: "Alan Walker - On My Way", id: "fm-nXA-K0Dg" },
    { title: "Alan Walker & Ava Max - Alone, Pt. II", id: "GPvBmcoriNo" },
    { title: "Alan Walker - Heading Home", id: "HFuVhJySO2o" },
    { title: "Alan Walker - Believers", id: "LClEtrHvxfo" },
    { title: "Alan Walker - Lost Control", id: "-Ed-GNq2EyU" },
    { title: "Alan Walker - Play", id: "yDk7k06-E4w" },
    { title: "Alan Walker, K-391 & Emelie Hollow - Lily", id: "ox4tmEV6-QU" },
    { title: "Alan Walker, K-391 & Boy In Space - Paradise", id: "TG_0_OdkwN0" },
    { title: "Alan Walker & Sofia Carson - Different World", id: "6ow6MueyJOQ" },
    { title: "K-391, Alan Walker & Ahrix - End of Time", id: "CaZXdZGZfb0" },
    { title: "Alan Walker - Live Fast", id: "eABUCA8BmTg" },
    { title: "American Authors - Best Day of My Life", id: "vJ9KFEJVISo" },
    { title: "American Authors - Go Big or Go Home", id: "iZzFmnx4QmA" },
    { title: "X Ambassadors - Renegades", id: "8j741TUIET0" },
    { title: "The Script - Superheroes", id: "xP3LUSHj2J0" },
    { title: "Coldplay - Adventure of a Lifetime", id: "y6y8bfyUWOw" },
    { title: "Coldplay - A Sky Full of Stars", id: "VPRjCeoBqrI" },
    { title: "OneRepublic - Love Runs Out", id: "KkVID7tMUbE" },
    { title: "OneRepublic - Counting Stars", id: "mgT0N3tMP74" },
    { title: "Bastille - Pompeii", id: "cvQ2LF3hyuY" },
    { title: "Fall Out Boy - My Songs Know What You Did in the Dark", id: "i0oSTgq7Bvc" },
    { title: "Top of the World", id: "sjLRh-QPM9c" },
    { title: "Wolves", id: "s2uLELuQvjw" },
    { title: "Who I Am", id: "PFs7egR2iDE" },
    { title: "Only One King", id: "3BFuQicL2WI" },
    { title: "Money Run Low", id: "facc6KUJYcM" },
    { title: "Legends Are Made", id: "i2hL_NuodtU" },
    { title: "Life Force", id: "bkjchS0PTl0" },
    { title: "Montage Rugada", id: "Hd5nXTyaXZg" },
    { title: "Born For This", id: "aJ5IzGBnWAc" },
    { title: "Glory", id: "i3ucSSVJTL4" },
    { title: "Stronger", id: "cNld-AHw-Wg" },
    { title: "Rise", id: "fB8TyLTD7EE" },
    { title: "The Phoenix", id: "5JqY-6q-RNA" },
    { title: "Warriors", id: "wPQEeBAXou0" },
    { title: "The Resistance", id: "SKnRdQiH3-k" },
    { title: "Hall Of Fame", id: "3Kxf2dHlDpQ" },
    { title: "Montagem Xonada", id: "JjPtDl6EJ3o" },
    { title: "No Batidao", id: "GXioir-fujY" },
    { title: "Papa Roach – Born for Greatness", id: "WFZVaycG-7I" },
    { title: "Linkin Park – Battle Symphony", id: "D7ab595h0AU" },
    { title: "Coldplay – Viva la Vida", id: "y4zdDXPYo0I" },
    { title: "Twenty One Pilots – Heathens", id: "zq2pagG8_ok" },
    { title: "Muse – Uprising", id: "itUJUs95LqU" },
    { title: "Fall Out Boy – Immortals", id: "UmyGVS5krMs" },
    { title: "Skillet – Feel Invincible", id: "J4JisubEvSI" },
    { title: "AWOLNATION – Run (Wake Up)", id: "NQPDm-GdmAs" },
    { title: "OneRepublic – I Lived", id: "KINfQbfZwik" },
    { title: "Macklemore & Ryan Lewis – Can’t Hold Us", id: "qWMNO8gq_cg" },
    { title: "Macklemore – Glorious (ft. Skylar Grey)", id: "GTyEsIMefzc" },
    { title: "Rachel Platten – Fight Song", id: "-a1qTzh16hY" },
    { title: "Welshly Arms – Legendary", id: "4yTB3Cu8W0g" },
    { title: "Demi Lovato – Skyscraper", id: "QiTJ0658WvE" },
    { title: "Beyoncé – Halo", id: "pCSL48AI_Ms" },
    { title: "Queen – We Will Rock You", id: "y3Ca3c6J9N4" },
    { title: "Queen – We Are the Champions", id: "d5GkgVhFeZY" },
    { title: "AC/DC – Thunderstruck", id: "skwZ5MQ7CfE" },
    { title: "Smash Mouth – I’m a Believer", id: "bWqmc8qxEps" },
    { title: "U2 – Elevation", id: "19KstSgU-c0" },
    { title: "U2 – Beautiful Day", id: "hJ_burYdegk" },
    { title: "Avenged Sevenfold – Carry On", id: "rXNlFiMaPMA" },
    { title: "P!nk – Just Like Fire", id: "k0ZmztU-X2I" },
    { title: "Train – Drive By", id: "maklLfjCO90" },
    { title: "Flo Rida – Good Feeling", id: "EO6ZFcBd3hg" },
    { title: "Pitbull – Give Me Everything (ft. Ne-Yo)", id: "3MqUW5txLjs" },
    { title: "The Chainsmokers & Coldplay – Something Just Like This", id: "fZUfdnmtg4Y" },
    { title: "Ellie Goulding – Burn", id: "VRcQsgjo7ZQ" },
    { title: "Justin Timberlake – Can’t Stop The Feeling!", id: "0Ui-QzihJGo" },
    { title: "Bruno Mars – Just The Way You Are", id: "u7XjPmN-tHw" },
    { title: "Rachel Platten – Stand By You", id: "-urmcz2RSwI" },
    { title: "Imagine Dragons – I Bet My Life", id: "KKgwLVqJbho" },
    { title: "Imagine Dragons – Warriors", id: "wPQEeBAXou0" },
    { title: "The Script – Hall of Fame (ft. Will.I.Am)", id: "dtgoDXEOxTM" },
    { title: "Shinedown – Get Up", id: "2hbqY9kQ6ho" },
    { title: "Nickelback – Burn It to the Ground", id: "ZHuogY04SbI" },
    { title: "Eminem – Not Afraid (Clean Version)", id: "_uuXpXSZYMk" },
    { title: "OneRepublic – All the Right Moves", id: "eYYcQYXMkKU" },
    { title: "Coldplay – Paradise", id: "ymMvDs15htc" },
    { title: "Thirty Seconds to Mars – Kings and Queens", id: "VSiTrGCAbt8" },
    { title: "Avicii – Wake Me Up", id: "5y_KJAg8bHI" },
    { title: "Kygo – Firestone (ft. Conrad Sewell)", id: "XUUjliDBAmk" },
    { title: "Zedd – The Middle (ft. Maren Morris)", id: "Lj6Y6JCu-l4" },
    { title: "David Guetta – Titanium (ft. Sia)", id: "Xn_kp8OZtc8" },
    { title: "Sia – Unstoppable", id: "oS07d8Gr4tw" },
    { title: "Maroon 5 – Maps", id: "Y7ix6RITXM0" },
    { title: "OneRepublic – Good Life", id: "-Bo4oWK22bk" },
    { title: "Phillip Phillips – Home", id: "jevGL7i1BVQ" },
    { title: "Rachel Platten – Fight Song", id: "XbxNtPiCBK8" },
    { title: "Sara Bareilles – Brave", id: "4Ny_LX3byp8" },
    { title: "Kelly Clarkson – Stronger (What Doesn’t Kill You)", id: "RjZzySx7TmM" },
    { title: "Katy Perry – Rise", id: "2cvB35A3pRU" },
    { title: "Walk The Moon – Shut Up and Dance", id: "0CGH3zm2R7c" },
    { title: "Coldplay – Viva La Vida", id: "y4zdDXPYo0I" },
    { title: "Queen – Don’t Stop Me Now", id: "MHi9mKq0slA" },
    { title: "Macklemore & Ryan Lewis – Can’t Hold Us (ft. Ray Dalton)", id: "xHRkHXjZcg0" },
    { title: "Imagine Dragons – Monster", id: "SWdJdGYfYPw" },
    { title: "Bastille – World Gone Mad", id: "I6IaW8MiuRo" },
    { title: "OneRepublic – Seasons", id: "Ymts4ldfPws" },
    { title: "Journey - Don't Stop Believin'", id: "1k8craCGpgs" },
    { title: "Survivor - Eye of the Tiger", id: "btPJPFnesV4" },
    { title: "Bon Jovi - It's My Life", id: "vx2u5uUu3DE" },
    { title: "Van Halen - Jump", id: "SwYN7mTi6HM" },
    { title: "Swedish House Mafia ft. John Martin - Don't You Worry Child", id: "1y6smkh6c-0" },
    { title: "Maroon 5 ft. Christina Aguilera - Moves Like Jagger", id: "iEPTlhBmwRg" },
    { title: "Journey - Any Way You Want It", id: "atxUuldUcfI" },
    { title: "Aerosmith - Dream On", id: "89dGC8de0CA" },
    { title: "Michael Jackson - Man in the Mirror", id: "PivWY9wn5ps" },
    { title: "Katy Perry - Firework", id: "QGJuMBdaqIw" }
  ]);

  const filteredPlaylist = playlist.map((song, index) => ({ ...song, index })).filter(song => song.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const stateRef = ml.useRef({ currentSongIndex, repeatMode, isPlaying });
  ml.useEffect(() => {
    stateRef.current = { currentSongIndex, repeatMode, isPlaying };
  }, [currentSongIndex, repeatMode, isPlaying]);

  ml.useEffect(() => {
    if (!wrapperRef.current) return;
    const el = document.createElement("div");
    wrapperRef.current.appendChild(el);

    const initPlayer = () => {
      playerRef.current = new window.YT.Player(el, {
        height: "100%",
        width: "100%",
        videoId: playlist[stateRef.current.currentSongIndex].id,
        host: 'https://www.youtube.com',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
          enablejsapi: 1,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            if (stateRef.current.isPlaying) event.target.playVideo();
            else event.target.pauseVideo();
            event.target.setVolume(parseInt(window.localStorage.getItem('musicVolume'), 10) || 60);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
               setIsPlaying(!0);
               setDuration(event.target.getDuration());
            } else if (event.data === window.YT.PlayerState.PAUSED) {
               setIsPlaying(!1);
            } else if (event.data === window.YT.PlayerState.ENDED) {
               const { currentSongIndex, repeatMode } = stateRef.current;
               let nextIndex = currentSongIndex;
               if (repeatMode === "ALL") {
                 nextIndex = (currentSongIndex + 1) % playlist.length;
               } else if (repeatMode === "ONE") {
                 // stay on same index
               }
               setCurrentSongIndex(nextIndex);
               playerRef.current.loadVideoById(playlist[nextIndex].id);
            }
          },
          onError: (event) => {
             console.error("YouTube Player Error:", event.data);
             const { currentSongIndex, repeatMode } = stateRef.current;
             let nextIndex = (currentSongIndex + 1) % playlist.length;
             setCurrentSongIndex(nextIndex);
          }
        }
      });
    };

    if (!window.YT && !document.getElementById("youtube-api-script")) {
      const tag = document.createElement("script");
      tag.id = "youtube-api-script";
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    } else if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const old = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
         if (old) old();
         initPlayer();
      };
    }
    
    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  ml.useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById({ videoId: playlist[currentSongIndex].id });
      if (stateRef.current.isPlaying) {
         setTimeout(() => {
            if (playerRef.current && playerRef.current.playVideo) {
               playerRef.current.playVideo();
            }
         }, 100);
      }
    }
  }, [currentSongIndex]);

  ml.useEffect(() => {
    timerRef.current = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime && isPlaying) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);


  ml.useEffect(() => {
    if (playerRef.current && playerRef.current.setVolume) {
      playerRef.current.setVolume(isMuted ? 0 : volume);
    }
  }, [volume, isMuted]);
  
  const togglePlay = () => {
     if (playerRef.current && playerRef.current.playVideo) {
         if (isPlaying) {
             playerRef.current.pauseVideo();
         } else {
             playerRef.current.playVideo();
         }
     }
  };

  const shufflePlaylist = () => {
    const currentSong = playlist[currentSongIndex];
    const newPlaylist = [...playlist];
    for (let i = newPlaylist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newPlaylist[i], newPlaylist[j]] = [newPlaylist[j], newPlaylist[i]];
    }
    const newIndex = newPlaylist.findIndex(song => song.id === currentSong.id);
    setPlaylist(newPlaylist);
    setCurrentSongIndex(newIndex !== -1 ? newIndex : 0);
  };
  
  const skipForward = () => {
    let nextIndex = currentSongIndex;
    if (repeatMode === "ALL") {
      nextIndex = (currentSongIndex + 1) % playlist.length;
    } else {
      nextIndex = Math.min(currentSongIndex + 1, playlist.length - 1);
    }
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const skipBackward = () => {
    let prevIndex = currentSongIndex;
    if (repeatMode === "ALL") {
      prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    } else {
       prevIndex = Math.max(currentSongIndex - 1, 0);
    }
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleVolumeChange = (e) => {
     const rect = e.currentTarget.getBoundingClientRect();
     const val = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
     setVolume(val * 100);
     setIsMuted(!1);
     window.localStorage.setItem('musicVolume', val * 100);
  };
  
  const handleProgressChange = (e) => {
     if (playerRef.current && playerRef.current.seekTo && duration > 0) {
       const rect = e.currentTarget.getBoundingClientRect();
       const val = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
       playerRef.current.seekTo(val * duration, !0);
       setCurrentTime(val * duration);
     }
  };

  const toggleRepeatMode = () => {
     setRepeatMode(prev => prev === "ALL" ? "ONE" : "ALL");
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  return s.jsxs("div", {
    className: "p-5",
    style: { background: "transparent", width: "100%", height: "100%", minHeight: "450px", display: "flex", flexDirection: "column" },
    children: [
        s.jsxs("div", {
            style: { 
              background: "linear-gradient(180deg, rgba(25,18,15,0.7), rgba(10,5,3,0.85))",
              borderRadius: "18px",
              padding: "18px",
              border: "1.5px solid rgba(255,176,120,0.25)",
              boxShadow: "0 0 24px rgba(0,0,0,.5), inset 0 0 12px rgba(255,255,255,.05)",
              marginBottom: "20px",
              position: "relative",
              overflow: "hidden"
            },
            children: [
               s.jsx("div", { ref: wrapperRef, style: { width: "100%", aspectRatio: "16/9", borderRadius: "12px", overflow: "hidden", marginBottom: "16px", background: "#000", pointerEvents: "auto", position: "relative", zIndex: 1 } }),
               s.jsxs("div", {
                   style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", position: "relative", zIndex: 1 },
                   children: [
                       s.jsx("button", {
                           onClick: shufflePlaylist,
                           style: { width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all 0.15s ease", marginRight: "4px" },
                           onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.2)",
                           onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.1)",
                           children: "🔀"
                       }),
                       s.jsx("button", {
                           onClick: skipBackward,
                           style: { width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all 0.15s ease" },
                           onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.2)",
                           onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.1)",
                           children: "⏮"
                       }),
                       s.jsx("button", {
                           onClick: togglePlay,
                           style: { width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(145deg,#ffb37a,#ff8a70)", border: "none", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(255,176,120,0.5)", color: "#fff", transition: "transform 0.15s ease", overflow: "hidden", position: "relative" },
                           onMouseDown: e => e.currentTarget.style.transform = "scale(0.95)",
                           onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
                           onMouseLeave: e => e.currentTarget.style.transform = "scale(1)",
                           children: [
                               s.jsx("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", background: isPlaying ? "transparent" : "rgba(0,0,0,0.4)" }, children: !isPlaying && "▶" })
                           ]
                       }),
                       s.jsx("button", {
                           onClick: skipForward,
                           style: { width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transition: "all 0.15s ease" },
                           onMouseEnter: e => e.currentTarget.style.background = "rgba(255,255,255,0.2)",
                           onMouseLeave: e => e.currentTarget.style.background = "rgba(255,255,255,0.1)",
                           children: "⏭"
                       }),
                       s.jsxs("div", {
                           onClick: handleProgressChange,
                           style: { flex: 1, height: "12px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px", position: "relative", cursor: "pointer" },
                           children: [
                               s.jsxs("div", {
                                   style: { height: "100%", width: `${progressPercent}%`, background: "linear-gradient(90deg, #ffb37a, #ff8a70)", borderRadius: "10px", position: "relative", transition: "width 0.1s linear" },
                                   children: [
                                       s.jsx("div", { style: { position: "absolute", right: "-8px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", borderRadius: "50%", background: "#fff", boxShadow: "0 0 10px rgba(255,176,120,.8)" } })
                                   ]
                               })
                           ]
                       }),
                       s.jsx("button", {
                           onClick: toggleRepeatMode,
                           style: { width: "36px", height: "36px", borderRadius: "50%", background: repeatMode === "ONE" ? "rgba(255,176,120,0.2)" : "rgba(255,255,255,0.05)", border: `1px solid ${repeatMode === "ONE" ? "rgba(255,176,120,0.5)" : "rgba(255,255,255,0.1)"}`, cursor: "pointer", fontSize: "15px", color: repeatMode === "ONE" ? "#ffb37a" : "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" },
                           children: "🔁"
                       }),
                       s.jsx("div", {
                           style: { minWidth: "90px", fontSize: "14px", fontWeight: "600", color: "rgba(255,255,255,0.8)", textAlign: "right", fontVariantNumeric: "tabular-nums" },
                           children: `${formatTime(currentTime)} / ${formatTime(duration)}`
                       })
                   ]
               }),
               s.jsxs("div", {
                   style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", position: "relative", zIndex: 1 },
                   children: [
                       s.jsx("span", { onClick: toggleMute, style: { fontSize: "16px", cursor: "pointer", color: isMuted || volume === 0 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.9)" }, children: isMuted || volume === 0 ? "🔇" : "🔊" }),
                       s.jsxs("div", {
                           onClick: handleVolumeChange,
                           style: { position: "relative", width: "120px", height: "8px", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", cursor: "pointer" },
                           children: [
                               s.jsx("div", { style: { position: "absolute", height: "100%", width: `${isMuted ? 0 : volume}%`, background: "linear-gradient(90deg, #7b4dff, #d1b3ff)", borderRadius: "8px" } }),
                               s.jsx("div", { style: { position: "absolute", top: "-4px", left: `calc(${isMuted ? 0 : volume}% - 4px)`, width: "8px", height: "16px", background: "#fff", borderRadius: "4px", boxShadow: "0 0 6px rgba(180,140,255,0.6)" } })
                           ]
                       })
                   ]
               })
            ]
        }),
        s.jsxs("div", {
            style: { position: "relative", marginBottom: "16px" },
            children: [
               s.jsx("input", {
                   type: "text",
                   placeholder: "Search tracks...",
                   value: searchQuery,
                   onChange: (e) => setSearchQuery(e.target.value),
                   style: {
                       width: "100%",
                       padding: "10px 16px 10px 38px",
                       background: "rgba(0,0,0,0.3)",
                       border: "1px solid rgba(255,255,255,0.1)",
                       borderRadius: "12px",
                       color: "#fff",
                       fontSize: "14px",
                       outline: "none",
                       fontFamily: "var(--font-sans)",
                       transition: "border-color 0.2s"
                   },
                   onFocus: (e) => e.target.style.borderColor = "rgba(255,176,120,0.5)",
                   onBlur: (e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"
               }),
               s.jsx("span", { style: { position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)", fontSize: "14px" }, children: "🔍" })
            ]
        }),
        s.jsx("div", {
            style: { display: "flex", flexDirection: "column", gap: "6px", overflowY: "auto", flex: 1, paddingRight: "4px" },
            className: "scroll-zone",
            children: filteredPlaylist.length > 0 ? filteredPlaylist.map((song) => s.jsxs("div", {
                key: song.id,
                onClick: () => {
                    if (currentSongIndex === song.index) {
                        togglePlay();
                        return;
                    }
                    setCurrentSongIndex(song.index);
                    setIsPlaying(!0);
                },
                style: {
                    padding: "12px 16px",
                    cursor: "pointer",
                    borderRadius: "12px",
                    background: currentSongIndex === song.index ? "rgba(255, 176, 120, 0.15)" : "rgba(255,255,255,0.02)",
                    border: currentSongIndex === song.index ? "1px solid rgba(255,176,120,0.3)" : "1px solid transparent",
                    color: currentSongIndex === song.index ? "#ffffff" : "rgba(255,255,255,0.7)",
                    fontWeight: currentSongIndex === song.index ? "600" : "400",
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    transition: "all 0.2s ease"
                },
                onMouseOver: (e) => {
                    if (currentSongIndex !== song.index) {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                    }
                },
                onMouseOut: (e) => {
                    if (currentSongIndex !== song.index) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    }
                },
                children: [
                    s.jsx("div", { 
                        style: { 
                            width: "28px", height: "28px", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center",
                            background: currentSongIndex === song.index ? "linear-gradient(145deg, #ffb37a, #ff8a70)" : "rgba(255,255,255,0.1)",
                            color: currentSongIndex === song.index ? "#000" : "rgba(255,255,255,0.5)",
                            fontSize: "10px", fontWeight: "bold"
                        }, 
                        children: currentSongIndex === song.index && isPlaying ? "🎶" : `${song.index + 1}` 
                    }),
                    s.jsxs("div", { 
                        style: { flex: 1, display: "flex", flexDirection: "column" }, 
                        children: [
                           s.jsx("span", { children: song.title }),
                           s.jsx("span", { style: { fontSize: "11px", color: currentSongIndex === song.index ? "rgba(255,176,120,0.8)" : "rgba(255,255,255,0.3)" }, children: "Codex Audio Library" })
                        ]
                    }),
                    currentSongIndex === song.index && isPlaying ? s.jsx("div", { style: { display: "flex", gap: "3px", height: "14px", alignItems: "flex-end" }, children: [1,2,3].map(i => s.jsx("div", { key: i, style: { width: "3px", background: "#ffb37a", animation: `eqBounce 0.${5 + i}s infinite alternate` } })) }) : null
                ]
            })) : s.jsx("div", { style: { padding: "20px", textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "14px" }, children: "No tracks found." })
        }),
        s.jsxs("div", {
            style: { display: "none" },
            children: [
                
            ]
        })
    ]
  });
}

export default YouTubeMusicPlayer;
