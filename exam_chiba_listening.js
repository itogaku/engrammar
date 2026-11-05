// 入試対策: 千葉県公立高校入試の英語リスニング(大問1〜4)の形式に合わせた練習問題(オリジナル)。
// 画面では「▶ 英語を聞く」で読み上げる(本番と同じく2回)。印刷したプリントには選択肢とメモだけを出し、台本は解答ページにのせる。
// part 1: 対話の最後の発言に対する受け答えを選ぶ
// part 2: 対話・英文を聞いて、質問の答えを選ぶ(場所・人物・時刻・天気など)
// part 3: 対話・英文を聞いて、内容についての質問に答える
// part 4: 英文を聞いて、メモの ①・② に入るものを選ぶ
// lines: [話し手, 英文]。話し手が '' のものは1人で話す英文(アナウンス・スピーチ)
const CHIBA_LISTEN = [
  // ---------- 大問1 ----------
  { part: 1, lines: [['Woman', 'This box is very heavy.'], ['Man', 'Do you need any help?'], ['Woman', 'Yes. Can you carry it with me?']],
    options: ['Sure.', 'Good idea.', "No, it isn't.", 'You are welcome.'], answer: 0 },
  { part: 1, lines: [['Boy', 'What are you going to do this weekend?'], ['Girl', "I'm going to visit my aunt in Chiba."], ['Boy', 'Nice. How will you get there?']],
    options: ['Last Sunday.', 'By train.', 'For two days.', 'With my mother.'], answer: 1 },
  { part: 1, lines: [['Girl', 'You look sleepy, Ken.'], ['Boy', 'I went to bed at two last night.'], ['Girl', 'Why did you stay up so late?']],
    options: ['At eleven.', 'I was watching a soccer game.', 'I will go to bed early.', "I'm not sleepy."], answer: 1 },
  { part: 1, lines: [['Man', 'Excuse me. Is there a bank near here?'], ['Woman', 'Yes. Go straight and turn left at the second corner.'], ['Man', 'How long does it take?']],
    options: ['About five minutes.', 'Two corners.', "It's on your right.", 'At nine.'], answer: 0 },
  { part: 1, lines: [['Mother', "Tom, dinner is ready."], ['Boy', "OK. I'm coming."], ['Mother', 'Did you wash your hands?']],
    options: ['Yes, I am.', "No, I don't.", 'Not yet.', "It's delicious."], answer: 2 },
  { part: 1, lines: [['Girl', 'I lost my pencil case.'], ['Boy', 'Where did you see it last?'], ['Girl', 'Maybe in the music room.']],
    options: ['Let\'s go and look for it.', 'I like music very much.', 'It was a blue one.', "That's my pencil."], answer: 0 },
  { part: 1, lines: [['Woman', 'Hello. May I speak to Mr. Sato?'], ['Man', "Sorry, he's out now."], ['Woman', 'When will he come back?']],
    options: ['He went to the bank.', 'At about four.', 'Yes, he will.', 'Can I take a message?'], answer: 1 },
  { part: 1, lines: [['Boy', "Here's a present for you, Emi."], ['Girl', 'Wow, thank you! Can I open it?'], ['Boy', 'Of course.']],
    options: ["What a cute bag! I love it.", "I'm sorry I'm late.", 'Happy birthday, Ken.', 'You can open it.'], answer: 0 },
  { part: 1, lines: [['Girl', 'Which do you like better, summer or winter?'], ['Boy', 'Winter. I like skiing.'], ['Girl', 'How often do you go skiing?']],
    options: ['Twice a year.', 'For three hours.', 'In Nagano.', 'With my brother.'], answer: 0 },
  { part: 1, lines: [['Man', 'Are you ready to order?'], ['Woman', "Yes. I'd like a hamburger, please."], ['Man', 'Something to drink?']],
    options: ['Orange juice, please.', "Here you are.", 'For here, please.', "It's ten dollars."], answer: 0 },
  { part: 1, lines: [['Boy', 'Have you finished your homework?'], ['Girl', 'Not yet. It is very difficult.'], ['Boy', 'Shall I help you?']],
    options: ['Yes, please.', "No, it isn't.", 'Yes, I have.', 'I did it yesterday.'], answer: 0 },
  { part: 1, lines: [['Girl', 'Whose umbrella is this?'], ['Boy', "I don't know. It isn't mine."], ['Girl', 'Maybe it is Yuki\'s.']],
    options: ["Let's ask her.", "It's raining.", 'I have two umbrellas.', 'Here it is.'], answer: 0 },

  // ---------- 大問2 ----------
  { part: 2, lines: [['Woman', 'Hi, Mike. Where are you going?'], ['Man', "To the library. I'm going to return these books."], ['Woman', 'The library is closed today. It is Monday.'], ['Man', "Oh, really? Then I'll go to the bookstore and buy a new notebook."]],
    question: 'Where will Mike go?', options: ['To the library.', 'To the bookstore.', 'To school.', 'To his house.'], answer: 1 },
  { part: 2, lines: [['', "Hello, I'm Lisa. This is a picture of my family. The man with glasses is my father. The woman next to him is my mother. The tall boy holding a dog is my brother, Tom. And the girl with long hair is me."]],
    question: 'Who is holding a dog?', options: ["Lisa's father.", "Lisa's mother.", "Lisa's brother.", 'Lisa.'], answer: 2 },
  { part: 2, lines: [['Boy', "Let's go to the movies tomorrow."], ['Girl', 'OK. The movie starts at ten and at one.'], ['Boy', 'I have a piano lesson in the morning.'], ['Girl', "Then let's see the one in the afternoon."]],
    question: 'What time will they see the movie?', options: ['At ten.', 'At eleven.', 'At one.', 'At three.'], answer: 2 },
  { part: 2, lines: [['', "Here is the weather for this weekend. On Saturday, it will be sunny in the morning, but it will rain in the afternoon. On Sunday, it will be cloudy all day, and it will be cold."]],
    question: 'How will the weather be on Saturday afternoon?', options: ['Sunny.', 'Rainy.', 'Cloudy.', 'Snowy.'], answer: 1 },
  { part: 2, lines: [['Boy', 'What time do you leave home in the morning?'], ['Girl', 'My bus leaves at seven thirty. I leave home fifteen minutes before that.'], ['Boy', 'That\'s early!']],
    question: 'What time does the girl leave home?', options: ['At seven.', 'At seven fifteen.', 'At seven thirty.', 'At seven forty-five.'], answer: 1 },
  { part: 2, lines: [['Man', 'Excuse me. I am looking for the station.'], ['Woman', 'Go down this street and turn right at the hospital. The station is next to the post office.'], ['Man', 'Thank you.']],
    question: 'Where is the station?', options: ['Next to the hospital.', 'Next to the post office.', 'In front of the school.', 'Near the park.'], answer: 1 },
  { part: 2, lines: [['', 'I asked my classmates, "What is your favorite season?" Spring was the most popular. Ten students chose it. Summer was second. Six students chose fall, and only four students chose winter.']],
    question: 'Which graph shows the answers of the class?', options: ['Spring 10, summer 8, fall 6, winter 4.', 'Spring 10, summer 6, fall 8, winter 4.', 'Spring 6, summer 8, fall 10, winter 4.', 'Spring 10, summer 8, fall 4, winter 6.'], answer: 0 },
  { part: 2, lines: [['Woman', 'What would you like for your birthday, Ken?'], ['Boy', 'I wanted a new bike, but my father bought one for me last month.'], ['Woman', 'Then how about a soccer ball?'], ['Boy', 'I have one. I need a new pair of shoes for soccer.']],
    question: 'What does Ken want for his birthday?', options: ['A bike.', 'A soccer ball.', 'Soccer shoes.', 'A new bag.'], answer: 2 },

  // ---------- 大問3 ----------
  { part: 3, lines: [['Teacher', 'Next week we will have a sports day. Do you have any questions?'], ['Student', 'What should we bring?'], ['Teacher', 'Bring your lunch and something to drink. You don\'t need your textbooks.'], ['Student', 'What time will it start?'], ['Teacher', 'At nine. Please come to school by eight thirty.']],
    question: 'What do the students need to bring?', options: ['Their textbooks.', 'Their lunch and a drink.', 'Their bikes.', 'Nothing.'], answer: 1 },
  { part: 3, lines: [['', 'Good morning, everyone. Today I will talk about my dream. I want to be a nurse. When I was in the hospital last year, a nurse was very kind to me. She talked with me every day and I felt better. I want to help sick people like her.']],
    question: 'Why does the speaker want to be a nurse?', options: ['Because her mother is a nurse.', 'Because she likes hospitals.', 'Because a nurse was kind to her.', 'Because she is sick.'], answer: 2 },
  { part: 3, lines: [['Boy', 'Mom, can I go to the park with Taku?'], ['Mother', 'Have you finished your homework?'], ['Boy', "Not yet. I'll do it after dinner."], ['Mother', 'No. Do it first, and then you can go.'], ['Boy', 'OK.']],
    question: 'What will the boy do first?', options: ['Go to the park.', 'Eat dinner.', 'Do his homework.', 'Call Taku.'], answer: 2 },
  { part: 3, lines: [['', 'Thank you for coming to Green Zoo. We are open until five p.m. today. At two p.m., you can give food to the elephants near the gate. At three p.m., there will be a penguin show by the lake. Please enjoy your day.']],
    question: 'Where can people see the penguin show?', options: ['Near the gate.', 'By the lake.', 'In the restaurant.', 'At the shop.'], answer: 1 },
  { part: 3, lines: [['Girl', 'Did you enjoy your trip to Okinawa?'], ['Boy', 'Yes, but it rained on the first day, so we stayed at the hotel.'], ['Girl', 'Oh, no.'], ['Boy', 'But on the second day, it was sunny. We swam in the sea and saw a lot of fish.']],
    question: 'What did the boy do on the second day?', options: ['He stayed at the hotel.', 'He went shopping.', 'He swam in the sea.', 'He came back home.'], answer: 2 },
  { part: 3, lines: [['', 'Last Sunday, I made curry for my family for the first time. I cut the vegetables, but it took a long time. My mother helped me cook. My family said it was delicious. I want to make another dish next time.']],
    question: 'Who helped the speaker?', options: ['Her father.', 'Her mother.', 'Her brother.', 'No one.'], answer: 1 },
  { part: 3, lines: [['Man', 'Hi, Yumi. You look happy.'], ['Girl', 'Our team won the tennis tournament yesterday!'], ['Man', 'Congratulations! How many games did you play?'], ['Girl', 'Four. The last game was really hard.']],
    question: 'Why is Yumi happy?', options: ['Because her team won the tournament.', 'Because she got a new racket.', 'Because she played one game.', 'Because the game was easy.'], answer: 0 },
  { part: 3, lines: [['', 'Attention, please. The train for Tokyo will be thirty minutes late because of the heavy snow. It will leave at ten forty. We are sorry for the trouble.']],
    question: 'Why will the train be late?', options: ['Because of the rain.', 'Because of the snow.', 'Because of an accident.', 'Because of a strong wind.'], answer: 1 },

  // ---------- 大問4 ----------
  { part: 4, lines: [['', 'Hi, I\'m Kenta. Last weekend I visited my grandfather. He lives near the sea. In the morning we went fishing, and I caught three fish. In the afternoon he taught me how to cook them. They were very good.']],
    memo: 'Kenta visited his ( ① ) last weekend. In the afternoon, he learned how to ( ② ) fish.',
    blanks: [{ options: ['grandmother', 'grandfather', 'uncle', 'friend'], answer: 1 }, { options: ['catch', 'cook', 'buy', 'draw'], answer: 1 }] },
  { part: 4, lines: [['', 'I think students should read more books. Reading books is a good way to learn new words. Also, we can learn about many different people and places through books. I usually read in the library after school.']],
    memo: 'The speaker thinks students should read more books. Reason 1: They can learn new ( ① ). Reason 2: They can learn about different people and ( ② ).',
    blanks: [{ options: ['sports', 'songs', 'words', 'games'], answer: 2 }, { options: ['places', 'animals', 'foods', 'subjects'], answer: 0 }] },
  { part: 4, lines: [['Miki', "Let's decide what to do at the welcome party for Mr. Brown."], ['Ryo', 'How about singing a Japanese song? He likes music.'], ['Miki', "Good idea. Also, let's give him a card. Everyone can write a message on it."], ['Ryo', "Great. I'll buy a big card tomorrow."]],
    memo: 'Welcome party for Mr. Brown — Ryo: Sing a ( ① ) song.  Miki: Give a card with ( ② ) from everyone.',
    blanks: [{ options: ['Japanese', 'English', 'new', 'school'], answer: 0 }, { options: ['flowers', 'pictures', 'messages', 'presents'], answer: 2 }] },
  { part: 4, lines: [['', 'Hello, everyone. I\'m Aya. My favorite subject is science, because I like doing experiments. My dream is to work at a museum. I want to show the wonders of nature to many children.']],
    memo: "Aya's favorite subject is science because she likes ( ① ). She wants to work at a ( ② ).",
    blanks: [{ options: ['reading books', 'doing experiments', 'drawing pictures', 'playing music'], answer: 1 }, { options: ['school', 'zoo', 'hospital', 'museum'], answer: 3 }] },
  { part: 4, lines: [['', 'Our school has a cleanup day every year. This year, we cleaned the beach near our school. We picked up many plastic bottles and bags. It was hard work, but the beach became beautiful. I want to keep it clean.']],
    memo: 'Cleanup day: The students cleaned the ( ① ). They picked up a lot of ( ② ) bottles and bags.',
    blanks: [{ options: ['park', 'river', 'beach', 'station'], answer: 2 }, { options: ['glass', 'plastic', 'paper', 'big'], answer: 1 }] },
  { part: 4, lines: [['Tom', 'Which is better for our class trip, Kyoto or Nara?'], ['Saki', 'I like Kyoto. There are many famous temples.'], ['Tom', 'I like Nara. We can see deer in the park and it takes less time to get there.']],
    memo: 'Class trip — Saki: Kyoto. There are many famous ( ① ).  Tom: Nara. We can see deer, and it takes ( ② ) time.',
    blanks: [{ options: ['shops', 'temples', 'parks', 'rivers'], answer: 1 }, { options: ['more', 'less', 'a long', 'no'], answer: 1 }] },
];

// ---------- 大問2の絵(本番と同じく、絵の中から答えを選ぶ) ----------
// 印刷でも見やすいように線画(黒と灰色)で描く。viewBox は 160×120
const LISTEN_PICS = {
  // 大問2 の i 番目(part 2 の中での順番) → A〜D の絵
  0: [{ k: 'place', label: 'LIBRARY', icon: 'book' }, { k: 'place', label: 'BOOKSTORE', icon: 'shop' }, { k: 'place', label: 'SCHOOL', icon: 'school' }, { k: 'place', label: 'HOME', icon: 'house' }],
  1: [{ k: 'person', glasses: true, hair: 'short' }, { k: 'person', hair: 'bun' }, { k: 'person', hair: 'short', tall: true, dog: true }, { k: 'person', hair: 'long' }],
  2: [{ k: 'clock', t: '10:00' }, { k: 'clock', t: '11:00' }, { k: 'clock', t: '1:00' }, { k: 'clock', t: '3:00' }],
  3: [{ k: 'weather', w: 'sunny' }, { k: 'weather', w: 'rainy' }, { k: 'weather', w: 'cloudy' }, { k: 'weather', w: 'snowy' }],
  4: [{ k: 'clock', t: '7:00' }, { k: 'clock', t: '7:15' }, { k: 'clock', t: '7:30' }, { k: 'clock', t: '7:45' }],
  5: [{ k: 'map', blocks: ['Hospital', 'Station', 'School'] }, { k: 'map', blocks: ['Hospital', 'Post Office', 'Station'] }, { k: 'map', blocks: ['Station', 'Hospital', 'Post Office'] }, { k: 'map', blocks: ['Park', 'Station', 'Hospital'] }],
  6: [{ k: 'chart', v: [10, 8, 6, 4] }, { k: 'chart', v: [10, 6, 8, 4] }, { k: 'chart', v: [6, 8, 10, 4] }, { k: 'chart', v: [10, 8, 4, 6] }],
  7: [{ k: 'thing', w: 'bike' }, { k: 'thing', w: 'ball' }, { k: 'thing', w: 'shoes' }, { k: 'thing', w: 'bag' }],
};
function listenPicSvg(p) {
  const S = 'stroke="#18212E" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  const G = 'fill="#C9D2DC"';
  let g = '';
  if (p.k === 'clock') {
    const [h, m] = p.t.split(':').map(Number);
    const a = (deg, len) => { const r = (deg - 90) * Math.PI / 180; return `${80 + Math.cos(r) * len},${60 + Math.sin(r) * len}`; };
    g = `<circle cx="80" cy="60" r="48" ${S}/>` + Array.from({ length: 12 }, (_, i) => { const [x1, y1] = a(i * 30, 42).split(','); const [x2, y2] = a(i * 30, 47).split(','); return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${S}/>`; }).join('')
      + `<polyline points="80,60 ${a((h % 12) * 30 + m / 2, 26)}" ${S} stroke-width="4"/><polyline points="80,60 ${a(m * 6, 38)}" ${S}/><circle cx="80" cy="60" r="3" fill="#18212E"/>`;
  } else if (p.k === 'weather') {
    const sun = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" ${S}/>` + Array.from({ length: 8 }, (_, i) => { const t = i * Math.PI / 4; return `<line x1="${x + Math.cos(t) * (r + 5)}" y1="${y + Math.sin(t) * (r + 5)}" x2="${x + Math.cos(t) * (r + 12)}" y2="${y + Math.sin(t) * (r + 12)}" ${S}/>`; }).join('');
    const cloud = (x, y) => `<path d="M${x - 34},${y + 14} a14,14 0 0,1 6,-27 a20,20 0 0,1 38,-4 a16,16 0 0,1 24,16 a12,12 0 0,1 0,15 z" ${S} ${G}/>`;
    if (p.w === 'sunny') g = sun(80, 58, 22);
    if (p.w === 'cloudy') g = cloud(84, 52);
    if (p.w === 'rainy') g = cloud(84, 40) + [56, 76, 96, 116].map(x => `<line x1="${x}" y1="74" x2="${x - 6}" y2="92" ${S}/>`).join('');
    if (p.w === 'snowy') g = cloud(84, 40) + [56, 80, 104].map((x, i) => `<text x="${x}" y="${96 - i % 2 * 8}" font-size="18" text-anchor="middle" fill="#18212E">＊</text>`).join('');
  } else if (p.k === 'place') {
    const icon = { book: '<rect x="66" y="34" width="28" height="20" rx="2" ' + S + '/><line x1="80" y1="34" x2="80" y2="54" ' + S + '/>',
      shop: '<path d="M60,40 h40 l-4,14 h-32 z" ' + S + '/><circle cx="68" cy="58" r="2" fill="#18212E"/><circle cx="92" cy="58" r="2" fill="#18212E"/>',
      school: '<circle cx="80" cy="44" r="9" ' + S + '/><polyline points="80,38 80,44 85,47" ' + S + '/>',
      house: '<path d="M68,54 v-12 l12,-10 l12,10 v12 z" ' + S + '/>' }[p.icon];
    g = `<path d="M24,108 V40 L80,14 L136,40 V108 Z" ${S} ${G}/><rect x="40" y="28" width="80" height="34" fill="#fff" ${S.replace('fill="none"', '')}/>${icon}<rect x="68" y="80" width="24" height="28" ${S}/><rect x="34" y="66" width="92" height="12" fill="#fff" stroke="#18212E"/><text x="80" y="75.5" font-size="10" font-weight="700" text-anchor="middle" fill="#18212E">${p.label}</text>`;
  } else if (p.k === 'person') {
    const tall = p.tall ? 1.15 : 1;
    const top = 118 - 92 * tall;
    const hy = top + 16;
    const hair = p.hair === 'long' ? `<path d="M64,${hy - 4} q16,-22 32,0 v26 h-6 v-20 h-20 v20 h-6 z" ${G} stroke="#18212E" stroke-width="2"/>`
      : p.hair === 'bun' ? `<circle cx="80" cy="${hy - 20}" r="6" ${G} stroke="#18212E" stroke-width="2"/><path d="M65,${hy - 2} q15,-20 30,0" ${G} stroke="#18212E" stroke-width="2"/>`
        : `<path d="M65,${hy - 2} q15,-20 30,0" ${G} stroke="#18212E" stroke-width="2"/>`;
    const glasses = p.glasses ? `<circle cx="74" cy="${hy}" r="4" ${S}/><circle cx="86" cy="${hy}" r="4" ${S}/><line x1="78" y1="${hy}" x2="82" y2="${hy}" ${S}/>` : `<circle cx="75" cy="${hy}" r="1.5" fill="#18212E"/><circle cx="85" cy="${hy}" r="1.5" fill="#18212E"/>`;
    const body = `<circle cx="80" cy="${hy}" r="14" ${S}/>${hair}${glasses}<line x1="80" y1="${hy + 14}" x2="80" y2="${hy + 58 * tall}" ${S}/><line x1="80" y1="${hy + 58 * tall}" x2="68" y2="118" ${S}/><line x1="80" y1="${hy + 58 * tall}" x2="92" y2="118" ${S}/>`;
    const arms = p.dog ? `<line x1="80" y1="${hy + 26}" x2="104" y2="${hy + 38}" ${S}/><line x1="80" y1="${hy + 26}" x2="62" y2="${hy + 44}" ${S}/>` : `<line x1="80" y1="${hy + 26}" x2="62" y2="${hy + 46}" ${S}/><line x1="80" y1="${hy + 26}" x2="98" y2="${hy + 46}" ${S}/>`;
    const dog = p.dog ? `<g transform="translate(104,${hy + 30})"><ellipse cx="14" cy="12" rx="14" ry="8" ${S} ${G}/><circle cx="28" cy="2" r="7" ${S} ${G}/><line x1="4" y1="18" x2="4" y2="26" ${S}/><line x1="22" y1="18" x2="22" y2="26" ${S}/></g>` : '';
    g = body + arms + dog;
  } else if (p.k === 'thing') {
    if (p.w === 'bike') g = `<circle cx="46" cy="76" r="24" ${S}/><circle cx="114" cy="76" r="24" ${S}/><polyline points="46,76 72,44 104,44 114,76" ${S}/><polyline points="72,44 84,76 104,44" ${S}/><line x1="66" y1="36" x2="78" y2="36" ${S}/><line x1="100" y1="36" x2="110" y2="34" ${S}/>`;
    if (p.w === 'ball') g = `<circle cx="80" cy="60" r="40" ${S}/><path d="M80,44 l15,11 -6,18 h-18 l-6,-18 z" fill="#18212E"/><line x1="80" y1="44" x2="80" y2="20" ${S}/><line x1="95" y1="55" x2="117" y2="47" ${S}/><line x1="65" y1="55" x2="43" y2="47" ${S}/><line x1="89" y1="73" x2="102" y2="93" ${S}/><line x1="71" y1="73" x2="58" y2="93" ${S}/>`;
    if (p.w === 'shoes') g = [20, 84].map(x => `<path d="M${x},84 v-30 h18 q4,18 30,20 q10,2 10,10 z" ${S} ${G}/><line x1="${x}" y1="84" x2="${x + 58}" y2="84" stroke="#18212E" stroke-width="5"/>`).join('');
    if (p.w === 'bag') g = `<rect x="40" y="44" width="80" height="58" rx="8" ${S} ${G}/><path d="M60,44 v-12 q20,-18 40,0 v12" ${S}/><rect x="70" y="62" width="20" height="10" fill="#fff" stroke="#18212E" stroke-width="2"/>`;
  } else if (p.k === 'map') {
    g = `<rect x="6" y="66" width="148" height="16" ${G}/><text x="80" y="78" font-size="8" text-anchor="middle" fill="#18212E">street</text>`
      + p.blocks.map((b, i) => `<rect x="${8 + i * 50}" y="${b === 'Station' ? 18 : 28}" width="44" height="${b === 'Station' ? 44 : 34}" ${b === 'Station' ? 'fill="#18212E"' : 'fill="#fff" stroke="#18212E" stroke-width="2"'}/><text x="${30 + i * 50}" y="${b === 'Station' ? 44 : 48}" font-size="${b.length > 8 ? 7.5 : 9}" text-anchor="middle" fill="${b === 'Station' ? '#fff' : '#18212E'}" font-weight="700">${b}</text>`).join('')
      + `<text x="80" y="104" font-size="9" text-anchor="middle" fill="#18212E">You</text><polygon points="80,88 75,96 85,96" fill="#18212E"/>`;
  } else if (p.k === 'chart') {
    const labels = ['spring', 'summer', 'fall', 'winter'];
    g = `<line x1="24" y1="10" x2="24" y2="96" ${S}/><line x1="24" y1="96" x2="156" y2="96" ${S}/>` + [0, 5, 10].map(v => `<text x="20" y="${99 - v * 8}" font-size="8" text-anchor="end" fill="#18212E">${v}</text>`).join('')
      + p.v.map((v, i) => `<rect x="${34 + i * 31}" y="${96 - v * 8}" width="20" height="${v * 8}" fill="#18212E"/><text x="${44 + i * 31}" y="108" font-size="8.5" text-anchor="middle" fill="#18212E">${labels[i]}</text>`).join('');
  }
  return `<svg viewBox="0 0 160 120" width="100%" style="max-width:170px" role="img">${g}</svg>`;
}
