// 長文問題(Part 単位・中1)。その Part までに習う文法と単語だけで書いたオリジナルの文章。
// 書式は reading.js と同じ(level: 'part' / part: Part番号)。
READING_PASSAGES.push(
  {
    level: 'part', grade: 1, program: 1, part: 1, title: '自己紹介',
    text: 'Hello. I\'m Kent. I\'m from New York, a big city. I\'m a junior high school student. I\'m shy.\nNice to meet you, Mia. ①<u>You\'re in my class.</u>',
    questions: [
      { type: 'tf', q: 'ケントはニューヨーク出身である。', answer: true },
      { type: 'choice', q: 'ケントについて正しいものはどれですか。', options: ['先生である', '中学生である', '小学生である', '高校生である'], answer: 1 },
      { type: 'fill', q: 'ケントの性格を表す英語1語を、本文中から抜き出しなさい。', answer: 'shy' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたは私のクラスにいます（同じクラスです）。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 1, part: 2, title: 'どこの出身？',
    text: 'Kent: Are you from the U.S., Mia?\nMia: No, I\'m not. I\'m from Brazil.\nKent: Pardon me?\nMia: I\'m from Brazil. Are you from the U.S.?\nKent: Yes, I am. I\'m from New York.\nMia: ①<u>I want to go to New York.</u>',
    questions: [
      { type: 'tf', q: 'ミアはアメリカ出身である。', answer: false },
      { type: 'choice', q: 'ミアが行きたい場所はどこですか。', options: ['ブラジル', 'ニューヨーク', '日本', 'カナダ'], answer: 1 },
      { type: 'fill', q: 'ミアの出身国を、本文中の英語1語で答えなさい。', answer: 'Brazil' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私はニューヨークに行きたいです。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 2, part: 1, title: 'アンの花',
    text: 'I\'m Ann. I like flowers very much. I grow flowers at home. Look at this picture. This is my garden.\nI don\'t grow vegetables. I play tennis after school. ①<u>Do you like flowers?</u>',
    questions: [
      { type: 'tf', q: 'アンは家で野菜を育てている。', answer: false },
      { type: 'choice', q: 'アンが放課後にすることは何ですか。', options: ['花の世話', 'テニス', 'ピアノ', '勉強'], answer: 1 },
      { type: 'fill', q: 'アンが家で育てているものを、本文中の英語1語で答えなさい。', answer: 'flowers' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたは花が好きですか。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 2, part: 2, title: 'ピアノの練習',
    text: 'Ken: Anya, I have a question. When do you practice the piano?\nAnya: I practice before dinner. On weekends, I practice in the morning.\nKen: ①<u>Please play the piano for me tomorrow.</u>\nAnya: Sure. Come to my house after school.',
    questions: [
      { type: 'tf', q: 'アニャは夕食の後にピアノを練習する。', answer: false },
      { type: 'choice', q: 'アニャが週末にピアノを練習するのはいつですか。', options: ['朝', '昼', '夕方', '夜'], answer: 0 },
      { type: 'fill', q: 'アニャはケンにいつ家に来るように言いましたか。本文中の英語2語で答えなさい。', answer: 'after school' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '明日、私のためにピアノを弾いてください。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 3, part: 1, title: 'タレントショーに出よう',
    text: 'It\'s the talent show at school on Saturday. I\'m excited. I can play the piano well. I can\'t dance.\nMy cousin, Kenta, can dance very well. ①<u>We can perform together.</u> Good luck, Kenta!',
    questions: [
      { type: 'tf', q: '「私」はダンスが上手である。', answer: false },
      { type: 'choice', q: 'ケンタができることは何ですか。', options: ['ピアノ', 'ダンス', '歌', '手品'], answer: 1 },
      { type: 'fill', q: 'タレントショーは何曜日ですか。本文中の英語1語で答えなさい。', answer: 'Saturday' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私たちはいっしょに演じる（発表する）ことができます。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 3, part: 2, title: 'マイクの得意なこと',
    text: 'Mike: Can you speak French, Yui?\nYui: No, I can\'t. Can you?\nMike: Yes, I can. I often watch French movies on the internet.\nYui: ①<u>What can you do in the talent show?</u>\nMike: I can do magic tricks.',
    questions: [
      { type: 'tf', q: '結衣はフランス語を話すことができる。', answer: false },
      { type: 'choice', q: 'マイクがよくすることは何ですか。', options: ['フランス語の本を読む', 'インターネットでフランスの映画を見る', '手品の練習をする', 'フランスへ行く'], answer: 1 },
      { type: 'fill', q: 'マイクがタレントショーでできることを、本文中の英語2語で答えなさい。', answer: 'magic tricks' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたはタレントショーで何ができますか。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 4, part: 1, title: '昼ごはん',
    text: 'Mother: Lunch is ready.\nKen: Is this chicken?\nMother: No, it isn\'t. It\'s fish.\nKen: I don\'t like fish.\nMother: ①<u>Don\'t worry.</u> It\'s deep-fried. It\'s delicious.\nKen: OK. Wow, it\'s good!',
    questions: [
      { type: 'tf', q: '昼食は鶏肉である。', answer: false },
      { type: 'choice', q: '母は魚について何と言いましたか。', options: ['焼いてある', '揚げてある', '生である', '煮てある'], answer: 1 },
      { type: 'fill', q: '健が好きではないものを、本文中の英語1語で答えなさい。', answer: 'fish' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '心配しないで。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 4, part: 2, title: 'あの人はだれ？',
    text: 'Who\'s that woman? She\'s Ms. Brown. She\'s a chef from Texas.\nWho\'s that man? He\'s Bob. He\'s a runner. He\'s on the track and field team.\n①<u>Would you like some custard pudding?</u> It\'s very good.',
    questions: [
      { type: 'tf', q: 'ブラウンさん（女性）は料理人である。', answer: true },
      { type: 'choice', q: 'ボブはどんな人ですか。', options: ['料理人', 'ランナー', '先生', '医者'], answer: 1 },
      { type: 'fill', q: 'ブラウンさん（女性）の出身地を、本文中の英語1語で答えなさい。', answer: 'Texas' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'カスタードプリンはいかがですか。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 5, part: 1, title: 'ジェニーの毎日',
    text: 'My friend Jenny lives in Canada. She goes to school by bus every day. She studies math and science at school.\nOn Sundays, ①<u>she stays at home in pajamas.</u> Just kidding!',
    questions: [
      { type: 'tf', q: 'ジェニーは毎日バスで学校へ行く。', answer: true },
      { type: 'choice', q: 'ジェニーが学校で勉強する科目はどれですか。', options: ['英語と音楽', '数学と理科', '社会と美術', '体育と国語'], answer: 1 },
      { type: 'fill', q: 'ジェニーが住んでいる国を、本文中の英語1語で答えなさい。', answer: 'Canada' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼女はパジャマのまま家にいます。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 5, part: 2, title: '父の仕事',
    text: 'Does my father work at a company? No, he doesn\'t. He works at a hospital. He\'s a doctor. He helps sick people.\nOn Sundays, he supports a charity. ①<u>I\'m proud of my father.</u>',
    questions: [
      { type: 'tf', q: '父は会社で働いている。', answer: false },
      { type: 'choice', q: '父の職業は何ですか。', options: ['先生', '医者', '会社員', '料理人'], answer: 1 },
      { type: 'fill', q: '父が日曜日に支援しているものを、本文中の英語1語で答えなさい。', answer: 'charity' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私は父を誇りに思います。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 6, part: 1, title: 'サバンナを歩いて',
    text: 'This is Jackson. He lives in Kenya. Every morning, he walks across the savanna to school. It takes two hours. It\'s tough, but he likes school.\n①<u>I respect him.</u> Please tell me about your school.',
    questions: [
      { type: 'tf', q: 'ジャクソンは毎朝バスで学校へ行く。', answer: false },
      { type: 'choice', q: '学校まで何時間かかりますか。', options: ['1時間', '2時間', '3時間', '30分'], answer: 1 },
      { type: 'fill', q: 'ジャクソンが住んでいる国を、本文中の英語1語で答えなさい。', answer: 'Kenya' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私は彼を尊敬しています。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 6, part: 2, title: 'ジャクソンの家族',
    text: 'Jackson\'s parents get up early. ①<u>They pray for his safety every day.</u> The savanna is dangerous because some animals attack people.\nJackson has a dream. He wants to fly in an airplane. That\'s amazing!',
    questions: [
      { type: 'tf', q: 'ジャクソンの両親は早く起きる。', answer: true },
      { type: 'choice', q: 'サバンナが危険なのはなぜですか。', options: ['道が悪いから', '人を襲う動物がいるから', 'とても暑いから', '雨が多いから'], answer: 1 },
      { type: 'fill', q: 'ジャクソンが乗って飛びたいものを、本文中の英語1語で答えなさい。', answer: 'airplane' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼らは毎日彼の安全を祈ります。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 7, part: 1, title: 'オーストラリアの動物',
    text: 'There are a lot of unique animals in Australia. Look at this picture. This is a quokka. It\'s small and cute.\nThere is a famous place in Sydney. It\'s the Opera House. ①<u>Can you see it in the picture?</u>',
    questions: [
      { type: 'tf', q: 'オーストラリアには珍しい動物がたくさんいる。', answer: true },
      { type: 'choice', q: 'クオッカはどんな動物ですか。', options: ['大きくて強い', '小さくてかわいい', '速く走る', '空を飛ぶ'], answer: 1 },
      { type: 'fill', q: 'オペラハウスがある都市を、本文中の英語1語で答えなさい。', answer: 'Sydney' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '写真の中にそれが見えますか。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 7, part: 2, title: 'サンゴ礁の海',
    text: 'The Great Barrier Reef is famous for its beautiful coral reef. How do people see it? Some people go there by seaplane. The scenery from the sky is gorgeous. Some islands look like hearts.\nThere are a lot of fish in the sea. ①<u>I want to go there someday.</u>',
    questions: [
      { type: 'tf', q: 'グレートバリアリーフはサンゴ礁で有名である。', answer: true },
      { type: 'choice', q: '人々がそこへ行く方法として本文にあるものはどれですか。', options: ['バス', '水上飛行機', '自転車', '電車'], answer: 1 },
      { type: 'fill', q: 'いくつかの島は何のように見えますか。本文中の英語1語で答えなさい。', answer: 'hearts' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私はいつかそこへ行きたいです。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 8, part: 1, title: '大みそかの夜',
    text: 'It\'s almost midnight. We\'re in front of the TV. My mom is talking with my grandmother. My father is not watching TV. ①<u>He\'s cooking noodles for us.</u> Happy New Year, everyone!',
    questions: [
      { type: 'tf', q: '父はテレビを見ている。', answer: false },
      { type: 'choice', q: '母は何をしていますか。', options: ['料理をしている', '祖母と話している', 'テレビを見ている', '寝ている'], answer: 1 },
      { type: 'fill', q: 'もうすぐ何時ですか。本文中の英語1語で答えなさい。', answer: 'midnight' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼は私たちのためにめん（そば）を作っています。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 8, part: 2, title: 'パティシエのジョーンズさん',
    text: 'Look at this picture. Mr. Jones is a pastry chef. ①<u>What is he making?</u> He\'s making tiny figures with chocolate. They\'re very cute.\nAre they expensive? Yes, they are. He\'s very skillful.',
    questions: [
      { type: 'tf', q: 'ジョーンズさんはパティシエである。', answer: true },
      { type: 'choice', q: 'ジョーンズさんは何を作っていますか。', options: ['大きなケーキ', 'チョコレートの小さな人形', 'クッキー', 'パン'], answer: 1 },
      { type: 'fill', q: '人形は値段が高いですか。それを表す英語1語を本文中から抜き出しなさい。', answer: 'expensive' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼は何を作っていますか。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 9, part: 1, title: 'フィンランドのサウナ',
    text: 'Last winter, I visited Finland with my family. We relaxed in a sauna. The Finnish people invented the sauna.\nAfter the sauna, ①<u>my father jumped into a cold lake!</u> I watched him. I enjoyed the holiday a lot.',
    questions: [
      { type: 'tf', q: '「私」は家族とフィンランドを訪れた。', answer: true },
      { type: 'choice', q: 'サウナの後に父がしたことは何ですか。', options: ['昼寝をした', '冷たい湖に飛び込んだ', '雪の上を走った', '温かい飲み物を飲んだ'], answer: 1 },
      { type: 'fill', q: '「私」がフィンランドを訪れたのはいつですか。本文中の英語2語で答えなさい。', answer: 'Last winter' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私の父は冷たい湖に飛び込みました！' },
    ],
  },
  {
    level: 'part', grade: 1, program: 9, part: 2, title: 'フィンランドのおみやげ',
    text: 'My friend came back from Finland yesterday. ①<u>He took a lot of pictures there.</u> He saw an aurora once. He also bought some candy for me.\nI ate one. It was salty! But it was fun.',
    questions: [
      { type: 'tf', q: '友達はオーロラを見た。', answer: true },
      { type: 'choice', q: '友達が「私」に買ってきたものは何ですか。', options: ['写真', 'お菓子', 'Tシャツ', '本'], answer: 1 },
      { type: 'fill', q: 'お菓子はどんな味でしたか。本文中の英語1語で答えなさい。', answer: 'salty' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼はそこでたくさん写真をとりました。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 9, part: 3, title: '沈まない太陽',
    text: 'Did you go anywhere last summer? I went to Finland two years ago. I saw reindeer there. ①<u>The sun didn\'t go down until ten at night.</u> It was a new experience for me.\nI didn\'t sleep well, but I had a good time.',
    questions: [
      { type: 'tf', q: '「私」は2年前にフィンランドへ行った。', answer: true },
      { type: 'choice', q: '太陽が沈んだのは何時でしたか。', options: ['夜7時', '夜8時', '夜10時', '夜12時'], answer: 2 },
      { type: 'fill', q: '「私」がそこで見た動物を、本文中の英語1語で答えなさい。', answer: 'reindeer' },
      { type: 'tf', q: '「私」はよく眠れた。', answer: false },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '太陽は夜の10時まで沈みませんでした。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 10, part: 1, title: '寒い日曜日',
    text: 'It was freezing last Sunday. At ten in the morning, I was reading a book in my bedroom. My brother was jumping on the trampoline outside. ①<u>My grandma was cooking soup for us.</u>',
    questions: [
      { type: 'tf', q: '弟は家の中で遊んでいた。', answer: false },
      { type: 'choice', q: '祖母は何をしていましたか。', options: ['本を読んでいた', 'スープを作っていた', 'トランポリンで跳んでいた', '寝ていた'], answer: 1 },
      { type: 'fill', q: 'この前の日曜日の天気を、本文中の英語1語で答えなさい。', answer: 'freezing' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '祖母は私たちのためにスープを作っていました。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 10, part: 2, title: 'そりすべり',
    text: 'Last winter, my brother and I got on a sleigh. ①<u>We were going down a hill.</u> Our speed was terrible! I was holding on to my brother.\nThen, bang! The sleigh broke. But we were OK. We were happy.',
    questions: [
      { type: 'tf', q: '「私」と兄（弟）はそりに乗った。', answer: true },
      { type: 'choice', q: 'そりはどうなりましたか。', options: ['止まった', '壊れた', 'なくなった', '池に落ちた'], answer: 1 },
      { type: 'fill', q: '「私」がしがみついていたのはだれですか。本文中の英語1語で答えなさい。', answer: 'brother' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私たちは丘を下っていました。' },
    ],
  },
  {
    level: 'part', grade: 1, program: 10, part: 3, title: '昨日の夜',
    text: '①<u>What were you doing at seven last night?</u> I was surfing the internet. Then my friend called me. She told me a funny story. We talked until nine. Finally, I went to bed.',
    questions: [
      { type: 'tf', q: '「私」は7時にインターネットを見ていた。', answer: true },
      { type: 'choice', q: '友達は何をしましたか。', options: ['「私」の家に来た', '電話をかけてきて面白い話をした', 'メールを送ってきた', 'いっしょに寝た'], answer: 1 },
      { type: 'fill', q: '何時まで話しましたか。本文中の英語1語で答えなさい。', answer: 'nine' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたは昨夜7時に何をしていましたか。' },
    ],
  },
);
