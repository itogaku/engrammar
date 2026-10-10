// 長文問題(Part 単位・中3)。その Part までに習う文法と単語だけで書いたオリジナルの文章。
READING_PASSAGES.push(
  {
    level: 'part', grade: 3, program: 1, part: 1, title: 'お花見',
    text: 'My friend Emma visited Japan last spring. ①<u>She wanted me to show her cherry blossoms.</u> We went to a park at noon. The flowers were colorful.\n"I\'m starving," she said. So I asked her to wait, and I bought some rice balls. "Here is your lunch," I said.',
    questions: [
      { type: 'tf', q: 'エマは「私」に桜を見せてほしいと思っていた。', answer: true },
      { type: 'choice', q: '公園に行ったのは何時ですか。', options: ['朝', '正午', '夕方', '夜'], answer: 1 },
      { type: 'fill', q: 'エマが「とてもおなかがすいた」という意味で使った英語1語を、本文中から抜き出しなさい。', answer: 'starving' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼女は私に桜を見せてほしいと思っていました。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 1, part: 2, title: '祖母の手作りお菓子',
    text: 'My grandmother makes homemade sweets, such as cookies and cakes. It is easy for her to make more than fifty cookies in an hour.\n①<u>It is difficult for me to make them,</u> but I want to try.',
    questions: [
      { type: 'tf', q: '祖母は手作りのお菓子を作る。', answer: true },
      { type: 'choice', q: '祖母は1時間でクッキーを何枚作ることができますか。', options: ['10枚くらい', '30枚くらい', '50枚より多く', '100枚より多く'], answer: 2 },
      { type: 'fill', q: 'クッキーのほかに例として挙げられているお菓子を、本文中の英語1語で答えなさい。', answer: 'cakes' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私にとってそれらを作るのは難しいです。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 1, part: 3, title: '食品ロス',
    text: 'Have you ever heard of food waste? In Japan, a lot of food becomes waste every day. I have read about this problem twice.\nSome restaurant chains have a variety of ideas in order to reduce food waste. ①<u>Maybe we can do something, too.</u>',
    questions: [
      { type: 'tf', q: '「私」はこの問題について2回読んだことがある。', answer: true },
      { type: 'choice', q: 'レストランチェーンがいろいろなアイディアを持っているのは何のためですか。', options: ['客を増やすため', '食品ロスを減らすため', '値段を下げるため', '新しい料理を作るため'], answer: 1 },
      { type: 'fill', q: 'この文章の話題を、本文中の英語2語で答えなさい。', answer: 'food waste' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'たぶん私たちにも何かできるでしょう。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 2, part: 1, title: '早く寝なさい',
    text: 'Mother: ①<u>Have you finished your homework yet?</u>\nKen: Yes, I\'ve already done it.\nMother: Good. Go to bed early tonight. A lack of sleep affects your health. You should sleep at least eight hours.',
    questions: [
      { type: 'tf', q: '健はもう宿題を終えている。', answer: true },
      { type: 'choice', q: '母は少なくとも何時間眠るべきだと言っていますか。', options: ['6時間', '7時間', '8時間', '9時間'], answer: 2 },
      { type: 'fill', q: '睡眠不足は何に影響しますか。本文中の英語1語で答えなさい。', answer: 'health' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたはもう宿題を終えましたか。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 2, part: 2, title: '日記をつける習慣',
    text: '①<u>I have kept a diary since I was ten.</u> It\'s a good habit. I write about my day every night.\nMy diary is full of good memories. I have used the same pen for a long time.',
    questions: [
      { type: 'tf', q: '「私」は10歳のときから日記をつけている。', answer: true },
      { type: 'choice', q: '「私」の日記には何がいっぱいですか。', options: ['絵', 'よい思い出', '写真', '計画'], answer: 1 },
      { type: 'fill', q: '日記をつけることは、よい何だと言っていますか。本文中の英語1語で答えなさい。', answer: 'habit' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私は10歳のときから日記をつけています。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 2, part: 3, title: '画面の見すぎ',
    text: 'My brother has been looking at his tablet screen for three hours. A bright screen is not good before bed. ①<u>As a result, he can\'t fall asleep easily.</u>\nThus, I have introduced a new rule at home: no screens after nine.',
    questions: [
      { type: 'tf', q: '兄（弟）は3時間ずっとタブレットを見ている。', answer: true },
      { type: 'choice', q: '明るい画面を見た結果、どうなりますか。', options: ['目が良くなる', 'なかなか眠れない', '早く起きられる', '勉強がはかどる'], answer: 1 },
      { type: 'fill', q: '新しいルールでは、何時以降に画面を見てはいけませんか。本文中の英語1語で答えなさい。', answer: 'nine' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'その結果、彼は簡単には眠れません。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 3, part: 1, title: 'トロントのおじ',
    text: 'My uncle lives in Toronto. ①<u>He told me that the Raptors are a famous NBA team.</u> He also showed me that basketball is not only a sport but also a great show. There\'s a show at half-time, too.',
    questions: [
      { type: 'tf', q: 'おじはトロントに住んでいる。', answer: true },
      { type: 'choice', q: 'ラプターズとは何ですか。', options: ['トロントの店', 'NBAの有名なチーム', 'おじの友達', 'テレビ番組'], answer: 1 },
      { type: 'fill', q: 'ハーフタイムには何がありますか。本文中の英語1語で答えなさい。', answer: 'show' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼は私に、ラプターズはNBAの有名なチームだと言いました。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 3, part: 2, title: 'バスケットボールの始まり',
    text: 'Basketball was invented in Massachusetts. ①<u>A teacher wanted to make winter classes fun.</u> So he introduced an indoor sport. People call it basketball.\nI wrote a report about it.',
    questions: [
      { type: 'tf', q: 'バスケットボールはマサチューセッツで発明された。', answer: true },
      { type: 'choice', q: 'その先生がしたかったことは何ですか。', options: ['冬の授業を楽しくすること', '新しい学校を作ること', '選手になること', '本を書くこと'], answer: 0 },
      { type: 'fill', q: '先生が紹介したのはどんなスポーツですか。「屋内の」を表す英語1語を本文中から抜き出しなさい。', answer: 'indoor' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'ある先生は冬の授業を楽しくしたいと思いました。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 3, part: 3, title: '車いすバスケットボール',
    text: 'In wheelchair basketball, players can have the ball in their lap. The rules let players move the wheels two times with the ball. Classification helps every player get a chance.\n①<u>This sport makes me think about equity.</u>',
    questions: [
      { type: 'tf', q: '車いすバスケットボールでは、ボールをひざの上に置いてよい。', answer: true },
      { type: 'choice', q: 'クラス分けは何に役立っていますか。', options: ['試合を短くすること', 'どの選手もチャンスを得ること', '強い選手を集めること', 'ボールを速く運ぶこと'], answer: 1 },
      { type: 'fill', q: '選手がボールを置けるのはどこですか。本文中の英語1語で答えなさい。', answer: 'lap' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'このスポーツは私に公平について考えさせます。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 4, part: 1, title: '手で話す女の子',
    text: 'Look at the girl talking with her hands. She is Sophia. She is using ASL, American Sign Language. ①<u>The boy standing behind her is her brother.</u> He is learning it, too.\nSign language is one of the most important languages for her.',
    questions: [
      { type: 'tf', q: '手で話している女の子はソフィアである。', answer: true },
      { type: 'choice', q: 'ソフィアの後ろに立っているのはだれですか。', options: ['父', '兄（弟）', '先生', '友達'], answer: 1 },
      { type: 'fill', q: 'ソフィアが使っている手話を、本文中の英語1語（略語）で答えなさい。', answer: 'ASL' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼女の後ろに立っている男の子は彼女の兄（弟）です。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 4, part: 2, title: '世界の手話',
    text: 'ASL is a sign language used in the U.S. and Canada. According to a book, there are about 300 sign languages around the world. Some of them are official languages.\nJapanese Sign Language is widely used in Japan. ①<u>I would like to learn it.</u>',
    questions: [
      { type: 'tf', q: 'ASLはアメリカとカナダで使われている。', answer: true },
      { type: 'choice', q: '世界にはいくつくらいの手話がありますか。', options: ['約30', '約100', '約300', '約1000'], answer: 2 },
      { type: 'fill', q: '日本で広く使われている手話を、本文中の英語3語で答えなさい。', answer: 'Japanese Sign Language' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私はそれを学びたいです。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 4, part: 3, title: 'カフェでの出来事',
    text: 'One day, a customer came into a cafe. ①<u>At first, the waiter didn\'t know what she wanted.</u> Then he realized that she couldn\'t hear.\nHe gave her a notebook. She wrote what she wanted. Writing helped them.',
    questions: [
      { type: 'tf', q: '店員は最初、客が何を欲しいのか分からなかった。', answer: true },
      { type: 'choice', q: '店員が気づいたことは何ですか。', options: ['客が急いでいること', '客が耳が聞こえないこと', '客が外国人であること', '客がお金を持っていないこと'], answer: 1 },
      { type: 'fill', q: '店員が客に渡したものを、本文中の英語1語で答えなさい。', answer: 'notebook' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '最初、店員は彼女が何を欲しいのか分かりませんでした。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 5, part: 1, title: 'チョコレートの始まり',
    text: 'I made a speech about chocolate. ①<u>People who lived in Mexico long ago used cacao beans as medicine.</u> They crushed the beans and added spices. The drink was so bitter that children didn\'t like it. People regarded it as a special drink.',
    questions: [
      { type: 'tf', q: '昔メキシコの人々はカカオ豆を薬として使った。', answer: true },
      { type: 'choice', q: 'その飲み物はどんな味でしたか。', options: ['とても甘い', 'とても苦い', 'すっぱい', '塩からい'], answer: 1 },
      { type: 'fill', q: '「私」のスピーチの話題を、本文中の英語1語で答えなさい。', answer: 'chocolate' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '昔メキシコに住んでいた人々は、カカオ豆を薬として使いました。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 5, part: 2, title: 'ヨーロッパへ渡ったチョコレート',
    text: 'The Spanish brought cacao to Europe about 500 years ago. Europeans began to drink chocolate. Later, a British company made solid chocolate which people could eat. Swiss people improved it.\n①<u>Now chocolate is a sweet which is consumed throughout the world.</u>',
    questions: [
      { type: 'tf', q: 'カカオをヨーロッパに持ちこんだのはイギリス人である。', answer: false },
      { type: 'choice', q: '固形のチョコレートを作ったのはだれですか。', options: ['スペインの人々', 'イギリスの会社', 'スイスの人々', 'メキシコの人々'], answer: 1 },
      { type: 'fill', q: 'チョコレートを改良したのはどこの人々ですか。本文中の英語1語で答えなさい。', answer: 'Swiss' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '今、チョコレートは世界中で消費されているお菓子です。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 5, part: 3, title: 'チョコレートの暗い面',
    text: 'Chocolate has a dark side. Some children who work on cacao farms are treated unfairly. They are forced to work hard. ①<u>Fair trade is a movement which helps these farmers.</u>\nWhen you buy chocolate, look for the fair trade mark on the package.',
    questions: [
      { type: 'tf', q: 'カカオ農園では、不当に扱われている子どもがいる。', answer: true },
      { type: 'choice', q: 'フェアトレードとは何ですか。', options: ['安いチョコレート', '農家を助ける運動', 'チョコレートの店', '新しいお菓子'], answer: 1 },
      { type: 'fill', q: 'チョコレートを買うとき、パッケージで何を探すように言っていますか。本文中の英語1語で答えなさい。', answer: 'mark' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'フェアトレードはこれらの農家を助ける運動です。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 6, part: 1, title: '太平洋ごみベルト',
    text: 'The Great Pacific Garbage Patch is a place in the ocean. It is mostly plastic trash. ①<u>It contains fishing nets which people left behind.</u> Sea animals get caught in them, and some are killed.',
    questions: [
      { type: 'tf', q: '太平洋ごみベルトは主にプラスチックごみである。', answer: true },
      { type: 'choice', q: '海の動物にどんなことが起こっていますか。', options: ['網にからまる', '数が増えている', '陸に上がる', '大きくなる'], answer: 0 },
      { type: 'fill', q: '太平洋ごみベルトがあるのはどこですか。本文中の英語1語で答えなさい。', answer: 'ocean' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'それには人々が置き去りにした漁網が含まれています。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 6, part: 2, title: '海をきれいにする若者',
    text: 'Boyan Slat was born in the Netherlands. At the age of sixteen, he went diving in Greece. He was shocked by the plastic he saw there.\nLater, he started an NPO called The Ocean Cleanup. ①<u>The system he made collects trash without hurting fish.</u>',
    questions: [
      { type: 'tf', q: 'ボイヤン・スラットはギリシャで生まれた。', answer: false },
      { type: 'choice', q: 'ボイヤン・スラットがダイビングでショックを受けたのは何を見たからですか。', options: ['魚', 'プラスチック', '船', 'サンゴ'], answer: 1 },
      { type: 'fill', q: 'ダイビングをしたとき、彼は何歳でしたか。本文中の英語1語で答えなさい。', answer: 'sixteen' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼が作った装置は、魚を傷つけずにごみを集めます。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 6, part: 3, title: '私たちにできること',
    text: 'Most of the plastic waste in the sea comes from land, mainly from rivers. In fact, ①<u>the things we use every day can become ocean trash.</u>\nI chose to use my own bottle instead of buying plastic bottles.',
    questions: [
      { type: 'tf', q: '海のプラスチックごみの多くは陸から来ている。', answer: true },
      { type: 'choice', q: '海のプラスチックごみは主にどこから来ますか。', options: ['船', '川', '空', '島'], answer: 1 },
      { type: 'fill', q: '「私」が使うことにしたものを、本文中の英語1語で答えなさい。', answer: 'bottle' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私たちが毎日使う物が海のごみになることがあります。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 7, part: 1, title: 'AIのある生活',
    text: 'These days, AI is used in many things, including vacuum cleaners. ①<u>If I were a robot, I could clean my room very fast.</u>\nAI also helps patients. Some patients have weak muscles. AI helps them control machines with their eyes.',
    questions: [
      { type: 'tf', q: '最近、AIは多くのものに使われている。', answer: true },
      { type: 'choice', q: 'AIは患者をどのように助けていますか。', options: ['薬を作る', '目で機械を操作できるようにする', '料理をする', '病院まで運ぶ'], answer: 1 },
      { type: 'fill', q: 'AIが使われているものの例を、本文中の英語2語で答えなさい。', answer: 'vacuum cleaners' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'もし私がロボットなら、部屋をとても速くそうじできるのに。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 7, part: 2, title: 'どこでもドアがあったら',
    text: 'Imagine you had an Anywhere Door. Where would you go? ①<u>If I had one, I would take a class abroad every day.</u> My grandparents live far away, so I would visit them every weekend.\nIt probably won\'t come true, but imagination is important.',
    questions: [
      { type: 'tf', q: '「私」の祖父母は近くに住んでいる。', answer: false },
      { type: 'choice', q: 'どこでもドアがあったら、「私」は毎日何をしますか。', options: ['外国で授業を受ける', '祖父母に会う', '世界中を旅する', '学校を休む'], answer: 0 },
      { type: 'fill', q: '「私」が大切だと言っているものを、本文中の英語1語で答えなさい。', answer: 'imagination' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'もし私がそれを持っていたら、毎日外国で授業を受けるのに。' },
    ],
  },
  {
    level: 'part', grade: 3, program: 7, part: 3, title: '人をつなぐロボット',
    text: 'An inventor made a robot which helps people connect with each other. People who are sick can take part in school events through the robot. They no longer feel loneliness.\n①<u>I wish I could make a robot like that.</u> Robots are not just machines but our friends in society.',
    questions: [
      { type: 'tf', q: 'そのロボットは人と人をつなぐ手助けをする。', answer: true },
      { type: 'choice', q: '病気の人はロボットを通して何ができますか。', options: ['病気を治す', '学校行事に参加する', '外国を旅行する', '料理をする'], answer: 1 },
      { type: 'fill', q: '病気の人がもう感じなくなったものを、本文中の英語1語で答えなさい。', answer: 'loneliness' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あんなロボットを作ることができたらいいのに。' },
    ],
  },
);
