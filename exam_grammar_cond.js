// 入試対策の章ごとの「条件英作文」: 場面に合う英文を、その章の文法を使って書く(入試対策の参考書の実戦問題の形式)。
// 文はすべてオリジナル。answers は解答例(最初が模範解答)
const EXAM_GRAMMAR_COND = {
  verbs: [
    { task: '新しい ALT の先生に、昨日の放課後に何をしていたかをたずねられた。図書館で勉強していたと答える場合。', conditions: ['6語以上', '過去進行形を使う'], answers: ['I was studying in the library after school.', 'I was studying in the library.'], point: '過去進行形 was + 〜ing' },
    { task: '友達に、先週末に家族と京都を訪れたことを伝える場合。', conditions: ['6語以上'], answers: ['I visited Kyoto with my family last weekend.', 'I went to Kyoto with my family last weekend.'], point: '過去の文(visited / went)' },
  ],
  future: [
    { task: '友達に、明日は雨が降るだろうから、かさを持っていくべきだと伝える場合。', conditions: ['should を使う', '2文で書く'], answers: ['It will rain tomorrow. You should take an umbrella.', "It's going to rain tomorrow. You should bring an umbrella."], point: '未来の will / be going to と、助言の should' },
    { task: 'ALT の先生に、宿題を明日までに終わらせなければならないかをたずねる場合。', conditions: ['have to を使う'], answers: ['Do I have to finish my homework by tomorrow?', 'Do we have to finish the homework by tomorrow?'], point: '疑問文は Do I have to 〜?' },
  ],
  imperative: [
    { task: '弟に、ここでサッカーをしてはいけないと注意する場合。', conditions: ["Don't で始める"], answers: ["Don't play soccer here."], point: "禁止の命令文 Don't + 動詞の原形" },
    { task: '友達に、放課後いっしょに図書館で勉強しようと誘う場合。', conditions: ["Let's で始める", '5語以上'], answers: ["Let's study in the library after school.", "Let's study together in the library after school."], point: "Let's + 動詞の原形「〜しよう」" },
  ],
  questions: [
    { task: '道で外国人に、駅がどこにあるか知っているかたずねる場合。', conditions: ['Do you know で始める'], answers: ['Do you know where the station is?'], point: '間接疑問 where + 主語 + 動詞(where the station is)' },
    { task: '友達に、その本をどこで買ったのかたずねる場合。', conditions: ['5語以上'], answers: ['Where did you buy the book?', 'Where did you buy that book?'], point: '疑問詞 + did + 主語 + 動詞の原形' },
  ],
  nouns: [
    { task: '落とし物のかさを見つけて、近くにいた友達にあなたのものかとたずねる場合。', conditions: ['yours を使う'], answers: ['Is this umbrella yours?', 'Is this yours?'], point: 'yours「あなたのもの」' },
    { task: 'ALT の先生に、あなたの家族は何人かを伝える場合(4人とする)。', conditions: ['There で始める'], answers: ['There are four people in my family.'], point: 'There are + 複数名詞 + in my family.' },
  ],
  infinitive: [
    { task: 'ALT の先生に、将来の夢は医者になることだと伝える場合。', conditions: ['want を使う', '6語以上'], answers: ['I want to be a doctor in the future.', 'I want to become a doctor in the future.'], point: 'want to be 〜「〜になりたい」' },
    { task: '友達に、何か飲むものがほしいかとたずねる場合。', conditions: ['something を使う'], answers: ['Do you want something to drink?', 'Would you like something to drink?'], point: 'something to drink「何か飲むもの」' },
  ],
  gerund: [
    { task: 'ALT の先生に、趣味は写真をとることだと伝える場合。', conditions: ['taking を使う', '5語以上'], answers: ['My hobby is taking pictures.', 'I like taking pictures.'], point: '動名詞 taking 〜「〜をとること」' },
    { task: '友達に、手伝ってくれたお礼を言う場合。', conditions: ['Thank you で始める'], answers: ['Thank you for helping me.'], point: 'Thank you for 〜ing.' },
  ],
  participle: [
    { task: '写真を見せながら、写真の中のギターをひいている男の子が兄だと説明する場合。', conditions: ['playing を使う', '8語以上'], answers: ['The boy playing the guitar is my brother.', 'The boy playing the guitar in this picture is my brother.'], point: '名詞 + 〜ing「〜している…」(後置修飾)' },
    { task: '友達に、カナダで作られたチョコレートを持っていると伝える場合。', conditions: ['made を使う'], answers: ['I have some chocolate made in Canada.', 'I have chocolate made in Canada.'], point: '名詞 + 過去分詞「〜された…」' },
  ],
  compare: [
    { task: '友達に、あなたのクラスでいちばん背が高いのはだれかとたずねる場合。', conditions: ['Who で始める'], answers: ['Who is the tallest in your class?'], point: '最上級 the tallest in 〜' },
    { task: 'ALT の先生に、夏と冬ではどちらが好きかとたずねる場合。', conditions: ['Which で始める'], answers: ['Which do you like better, summer or winter?'], point: 'Which do you like better, A or B?' },
  ],
  passive: [
    { task: 'ALT の先生に、あなたの町の古いお寺について、約400年前に建てられたと説明する場合。', conditions: ['built を使う'], answers: ['This temple was built about 400 years ago.', 'The temple was built about four hundred years ago.'], point: '受け身の過去 was + 過去分詞' },
    { task: '外国から来た友達に、日本のアニメが多くの国で見られていることを伝える場合。', conditions: ['watched を使う'], answers: ['Japanese anime is watched in many countries.'], point: '受け身 be + 過去分詞' },
  ],
  perfect: [
    { task: 'ALT の先生に、北海道に行ったことがあるかとたずねる場合。', conditions: ['ever を使う'], answers: ['Have you ever been to Hokkaido?', 'Have you ever visited Hokkaido?'], point: '経験 Have you ever been to 〜?' },
    { task: '友達に、10年間この町に住んでいると伝える場合。', conditions: ['for を使う'], answers: ['I have lived in this town for ten years.'], point: '継続 have lived + for 〜' },
  ],
  relative: [
    { task: 'ALT の先生に、あなたにはフランス語を話せる友達がいると伝える場合。', conditions: ['who を使う'], answers: ['I have a friend who can speak French.'], point: '関係代名詞 who(主格)' },
    { task: '友達に、昨日買った本がとてもおもしろいと伝える場合。', conditions: ['8語以上'], answers: ['The book I bought yesterday is very interesting.', 'The book that I bought yesterday is very interesting.'], point: '名詞 + (that) + 主語 + 動詞「〜が…した名詞」' },
  ],
  subjunctive: [
    { task: '「鳥だったら空を飛べるのに」と、かなわない願いを言う場合。', conditions: ['If で始める'], answers: ['If I were a bird, I could fly in the sky.', 'If I were a bird, I could fly.'], point: '仮定法 If I were 〜, I could …' },
    { task: '泳げないことを残念に思い、泳げたらいいのにと言う場合。', conditions: ['wish を使う'], answers: ['I wish I could swim.'], point: 'I wish I could 〜.' },
  ],
  svoc: [
    { task: '友達に、その知らせを聞いてうれしくなったと伝える場合。', conditions: ['made を使う', 'The news で始める'], answers: ['The news made me happy.'], point: 'make A B「A を B にする」' },
    { task: 'ALT の先生に、あなたのネコの名前はタマで、みんなにタマと呼ばれていると伝える場合。', conditions: ['call を使う'], answers: ['We call our cat Tama.', 'We call my cat Tama.'], point: 'call A B「A を B と呼ぶ」' },
  ],
  prepconj: [
    { task: '友達に、雨が降ったら家にいるつもりだと伝える場合。', conditions: ['if を使う'], answers: ['If it rains, I will stay home.', "I'll stay at home if it rains."], point: 'if のあとは未来のことでも現在形(rains)' },
    { task: 'ALT の先生に、子どものころ大阪に住んでいたと伝える場合。', conditions: ['when を使う'], answers: ['I lived in Osaka when I was a child.', 'When I was a child, I lived in Osaka.'], point: 'when I was a child「子どものころ」' },
  ],
};
if (typeof EXAM_GRAMMAR !== 'undefined') {
  Object.entries(EXAM_GRAMMAR_COND).forEach(([ch, list]) => {
    if (EXAM_GRAMMAR[ch]) EXAM_GRAMMAR[ch].questions.push(...list.map(d => ({ type: 'cond', ...d })));
  });
}
