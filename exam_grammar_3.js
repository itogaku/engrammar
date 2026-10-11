// 入試対策: 文法の総まとめ(第11〜15章)。説明・例文・問題はすべてオリジナル。
var EXAM_GRAMMAR = typeof EXAM_GRAMMAR !== 'undefined' ? EXAM_GRAMMAR : {};

EXAM_GRAMMAR.perfect = {
  no: 11, title: '現在完了', sub: '継続・経験・完了・現在完了進行形',
  sections: [
    { title: '現在完了（継続）', stars: 3, key: ['My sister has been in Tokyo since last spring.', '姉は去年の春からずっと東京にいます。'],
      points: [
        '〈have(has) + 過去分詞〉で「(今まで)ずっと〜している」。be, live, know など状態を表す動詞によく使う。',
        'for + 期間(for three years)、since + 始まった時(since 2020 / since I was ten)。',
        '期間は How long 〜? でたずねる。答えは For 〜. / Since 〜. で。',
        '否定文は have(has) not + 過去分詞、疑問文は Have(Has) + 主語 + 過去分詞 〜?',
      ] },
    { title: '現在完了（経験）', stars: 3, key: ['I have visited Nara three times.', '私は奈良を3回訪れたことがあります。'],
      points: [
        '〈have(has) + 過去分詞〉で「(今までに)〜したことがある」。',
        'ever(今までに)は疑問文で、never(一度も〜ない)は否定の意味で使う。before(以前に)は文末に置く。',
        '回数は once / twice / three times / many times。How many times 〜? でたずねる。',
        'have been to 〜 =「〜へ行ったことがある」。',
      ],
      table: [['回数', '英語'], ['1回', 'once'], ['2回', 'twice'], ['3回', 'three times'], ['何回も', 'many times']] },
    { title: '現在完了（完了・結果）', stars: 3, key: ['The bus has already left the station.', 'バスはもう駅を出てしまいました。'],
      points: [
        '〈have(has) + 過去分詞〉で「(ちょうど・もう)〜したところだ」「〜してしまった」。',
        'have gone to 〜 =「〜へ行ってしまった(今ここにいない)」。have been to 〜(行ったことがある)と区別する。',
        '現在完了は yesterday, 〜 ago, last 〜, When 〜? など、過去の一時点を表す語といっしょには使えない。',
      ],
      table: [['語', '位置', '意味'], ['just', 'have と過去分詞の間', 'ちょうど'], ['already', 'have と過去分詞の間', 'もう・すでに'], ['yet(疑問文)', '文末', 'もう'], ['yet(否定文)', '文末', 'まだ']] },
    { title: '現在完了進行形', stars: 2, key: ['I have been waiting for you for an hour.', '私は1時間ずっとあなたを待っています。'],
      points: [
        '〈have(has) been + 〜ing〉で「(今まで)ずっと〜し続けている」。動作が続いていることを表す。',
        'play, study, wait, run など動作を表す動詞に使う。know, like など状態を表す動詞はふつう現在完了(継続)で表す。',
        'How long have you been 〜ing? で、どのくらい続けているかをたずねる。',
      ] },
  ],
  questions: [
    { type: 'choice', jp: '兄はこの前の金曜日からずっと病気です。', en: 'My brother has been sick ( ) last Friday.', options: ['for', 'from', 'since', 'during'], answer: 2, point: 'since + 始まった時' },
    { type: 'choice', jp: 'あなたはどのくらいの間ブラウン先生を知っていますか。', en: '( ) long have you known Ms. Brown?', options: ['How', 'What', 'When', 'Which'], answer: 0, point: '期間は How long 〜?' },
    { type: 'choice', jp: 'あなたは今までにコアラを見たことがありますか。', en: 'Have you ever ( ) a koala?', options: ['see', 'saw', 'seeing', 'seen'], answer: 3, point: 'have + 過去分詞(see - saw - seen)' },
    { type: 'choice', jp: '私は一度も沖縄に行ったことがありません。', en: 'I have ( ) been to Okinawa.', options: ['ever', 'never', 'yet', 'already'], answer: 1, point: 'never =「一度も〜ない」' },
    { type: 'choice', jp: '電車はもう出てしまいました。次のを待たなければなりません。', en: 'The train has ( ) left. We have to wait for the next one.', options: ['yet', 'ever', 'already', 'since'], answer: 2, point: '肯定文の「もう」は already' },
    { type: 'choice', jp: 'ケンはもう宿題を終えましたか。', en: 'Has Ken finished his homework ( )?', options: ['yet', 'just', 'ago', 'ever'], answer: 0, point: '疑問文の「もう」は文末の yet' },
    { type: 'choice', jp: '佐藤さんはここにいません。大阪へ行ってしまいました。', en: 'Mr. Sato isn\'t here. He has ( ) to Osaka.', options: ['been', 'went', 'gone', 'going'], answer: 2, point: 'have gone to 〜 =「〜へ行ってしまった」' },
    { type: 'choice', jp: '今朝からずっと雨が降り続いています。', en: 'It has been ( ) since this morning.', options: ['rain', 'rained', 'rains', 'raining'], answer: 3, point: '現在完了進行形 have been + 〜ing' },

    { type: 'fill', jp: '私は3年間ずっとこのラケットを使っています。', en: 'I ( ) ( ) this racket for three years.', answers: ['have', 'used'], point: '継続 have + 過去分詞' },
    { type: 'fill', jp: 'あなたはどのくらいの間日本にいますか。（be動詞を使って）', en: 'How ( ) have you ( ) in Japan?', answers: ['long', 'been'], point: 'How long + have you been 〜?' },
    { type: 'fill', jp: '私はその映画を2回見たことがあります。', en: 'I have seen the movie ( ).', answers: ['twice'], point: '「2回」は twice' },
    { type: 'fill', jp: '彼女は一度も外国に行ったことがありません。', en: 'She has ( ) ( ) abroad.', answers: ['never', 'been'], point: 'have never been 〜 =「一度も行ったことがない」' },
    { type: 'fill', jp: '私はちょうど宿題を終えたところです。', en: 'I have ( ) ( ) my homework.', answers: ['just', 'finished'], point: 'just は have と過去分詞の間' },
    { type: 'fill', jp: '私はまだその本を読んでいません。', en: 'I haven\'t read the book ( ).', answers: ['yet'], point: '否定文の「まだ」は文末の yet' },
    { type: 'fill', jp: '子どもたちは2時間ずっとサッカーをしています。', en: 'The children have ( ) ( ) soccer for two hours.', answers: ['been', 'playing'], point: '動作の継続は have been + 〜ing' },

    { type: 'order', jp: '私たちは10年間ずっとこの町に住んでいます。', words: ['have', 'in', 'this', 'we', 'lived', 'town', 'for', 'ten years'], answer: 'We have lived in this town for ten years.', point: '継続 have lived + for 〜' },
    { type: 'order', jp: 'あなたは今までに富士山に登ったことがありますか。', words: ['you', 'climbed', 'have', 'Mt. Fuji', 'ever'], answer: 'Have you ever climbed Mt. Fuji?', point: 'Have + 主語 + ever + 過去分詞 〜?' },
    { type: 'order', jp: '私はもう自分の部屋をそうじしました。', words: ['already', 'I', 'cleaned', 'have', 'my room'], answer: 'I have already cleaned my room.', point: 'already は have と過去分詞の間' },
    { type: 'order', jp: 'あなたはどのくらいの間ずっとピアノを練習しているのですか。', words: ['long', 'have', 'been', 'you', 'how', 'practicing', 'the piano'], answer: 'How long have you been practicing the piano?', point: 'How long have you been 〜ing?' },
    { type: 'order', jp: '彼は何回その店に行ったことがありますか。', words: ['times', 'has', 'been', 'how', 'he', 'many', 'to', 'the shop'], answer: 'How many times has he been to the shop?', point: '回数は How many times 〜?' },

    { type: 'para', en1: 'I came to this city three years ago, and I still live here.', en2: 'I ( ) lived in this city ( ) three years.', answers: ['have', 'for'], point: '過去から今まで続く → 継続' },
    { type: 'para', en1: 'My father went to Canada, and he isn\'t here now.', en2: 'My father ( ) ( ) to Canada.', answers: ['has', 'gone'], point: '行ってしまって今いない → has gone to' },
    { type: 'para', en1: 'This is my first visit to Hokkaido.', en2: 'I have ( ) ( ) to Hokkaido before.', answers: ['never', 'been'], point: '初めての訪問 = 一度も行ったことがない' },
    { type: 'para', en1: 'It began to snow yesterday, and it is still snowing.', en2: 'It ( ) ( ) snowing since yesterday.', answers: ['has', 'been'], point: '現在完了進行形 has been + 〜ing' },
  ],
};

EXAM_GRAMMAR.relative = {
  no: 12, title: '関係代名詞', sub: '主格・目的格・that と whose・書きかえ',
  sections: [
    { title: '主格の関係代名詞', stars: 3, key: ['I have a friend who can speak three languages.', '私には3つの言語を話せる友だちがいます。'],
      points: [
        '関係代名詞は、前の名詞(先行詞)を後ろから説明する文をつなぐ。',
        '先行詞が人なら who、もの・動物なら which、どちらにも that が使える。',
        '主格は〈先行詞 + 関係代名詞 + 動詞〉の形。動詞は先行詞に合わせる(a boy who lives / boys who live)。',
      ],
      table: [['先行詞', '主格', '目的格'], ['人', 'who / that', 'that(who / whom も使う)'], ['もの・動物', 'which / that', 'which / that'], ['人 + もの・動物', 'that', 'that']] },
    { title: '目的格の関係代名詞', stars: 3, key: ['This is the bike my grandfather gave me.', 'これは祖父が私にくれた自転車です。'],
      points: [
        '目的格は〈先行詞 + 関係代名詞 + 主語 + 動詞〉の形。先行詞がもの → which / that、人 → that。',
        '目的格の関係代名詞は省略できる。〈名詞 + 主語 + 動詞〉の形を見つけよう(the book I read)。',
        '関係代名詞のあとの文では目的語が抜けている。it や him を重ねて書かない(× the book which I read it)。',
      ] },
    { title: 'that を使う場合・whose', stars: 2, key: ['This is the most exciting game that I have ever watched.', 'これは私が今までに見た中でいちばんわくわくする試合です。'],
      points: [
        '先行詞に the first, the last, the only, all, every, 最上級 などがつくときは that がよく使われる。',
        '先行詞が「人 + もの・動物」のときは that を使う(the boy and his dog that 〜)。',
        'whose は所有格で「その〜が」。〈先行詞 + whose + 名詞 + 動詞〉: a girl whose mother is a doctor(母親が医者である少女)。',
      ] },
    { title: '関係代名詞の文の書きかえ', stars: 3, key: ['The boy who is running over there is my brother.', 'あそこを走っている少年は私の弟です。'],
      points: [
        '〈名詞 + 〜ing / 過去分詞〉(分詞の後置修飾)は〈名詞 + 関係代名詞 + be動詞 + 〜ing / 過去分詞〉に書きかえられる。',
        '2文を1文にするときは、共通する名詞を見つけ、2文目の代名詞(he, it など)を関係代名詞にかえて先行詞の直後に置く。',
        '例: I know a girl. She lives in Kobe. → I know a girl who lives in Kobe.',
        '〈名詞 + 主語 + 動詞〉は、目的格の関係代名詞が省略された形。',
      ],
      table: [['分詞の後置修飾', '関係代名詞'], ['a dog sleeping there', 'a dog which is sleeping there'], ['a letter written in English', 'a letter which is written in English']] },
  ],
  questions: [
    { type: 'choice', jp: '私には病院で働いているおじがいます。', en: 'I have an uncle ( ) works at a hospital.', options: ['which', 'who', 'whose', 'what'], answer: 1, point: '先行詞が人 → who' },
    { type: 'choice', jp: '赤い屋根のあの家を見て。', en: 'Look at the house ( ) has a red roof.', options: ['who', 'whose', 'which', 'where'], answer: 2, point: '先行詞がもの → which(主格)' },
    { type: 'choice', jp: 'ミカが京都で撮った写真はきれいでした。', en: 'The pictures ( ) Mika took in Kyoto were beautiful.', options: ['which', 'who', 'what', 'whose'], answer: 0, point: '先行詞がもの・目的格 → which' },
    { type: 'choice', jp: '彼はその質問に答えたただ一人の生徒です。', en: 'He is the only student ( ) answered the question.', options: ['which', 'whose', 'what', 'that'], answer: 3, point: 'the only がつく先行詞 → that' },
    { type: 'choice', jp: '公園を走っている少年と犬を見て。', en: 'Look at the boy and his dog ( ) are running in the park.', options: ['who', 'which', 'that', 'whose'], answer: 2, point: '先行詞が「人 + 動物」→ that' },
    { type: 'choice', jp: '私は父親が有名な歌手である女の子を知っています。', en: 'I know a girl ( ) father is a famous singer.', options: ['whose', 'who', 'which', 'that'], answer: 0, point: '「その〜が」は所有格 whose' },
    { type: 'choice', jp: 'これは多くの若者に読まれている本です。', en: 'This is a book ( ) by many young people.', options: ['reading', 'reads', 'read', 'to read'], answer: 2, point: '「〜される」は過去分詞の後置修飾' },
    { type: 'choice', jp: '私が駅で会った男性はとても親切でした。', en: 'The man ( ) I met at the station was very kind.', options: ['which', 'that', 'whose', 'what'], answer: 1, point: '先行詞が人・目的格 → that' },

    { type: 'fill', jp: '私にはカナダに住んでいる友だちがいます。', en: 'I have a friend who ( ) in Canada.', answers: ['lives'], point: '動詞は先行詞(a friend)に合わせて3単現' },
    { type: 'fill', jp: '私が昨日読んだ本はとてもおもしろかった。', en: 'The book ( ) read yesterday ( ) very interesting.', answers: ['I', 'was'], point: '目的格の省略。文の動詞は The book に合わせる' },
    { type: 'fill', jp: '彼女は私が今までに会った中でいちばん親切な人です。', en: 'She is the ( ) person that I have ever ( ).', answers: ['kindest', 'met'], point: '最上級 + that I have ever + 過去分詞' },
    { type: 'fill', jp: '私には父親が先生をしている友だちがいます。', en: 'I have a friend ( ) father is a teacher.', answers: ['whose'], point: '所有格の関係代名詞 whose' },
    { type: 'fill', jp: 'あそこで歌っている女の子はユキです。', en: 'The girl ( ) over there is Yuki.', answers: ['singing'], point: '「〜している」は現在分詞の後置修飾' },
    { type: 'fill', jp: 'これは100年前に建てられた寺です。', en: 'This is a temple which ( ) ( ) 100 years ago.', answers: ['was', 'built'], point: '関係代名詞 + 受け身 was built' },
    { type: 'fill', jp: '彼は私の質問に答えた最初の生徒でした。', en: 'He was the ( ) student that ( ) my question.', answers: ['first', 'answered'], point: 'the first がつく先行詞 → that' },

    { type: 'order', jp: '私はギターをひいているその少年を知っています。', words: ['the boy', 'I', 'who', 'know', 'playing', 'is', 'the guitar'], answer: 'I know the boy who is playing the guitar.', point: '先行詞 + who is + 〜ing' },
    { type: 'order', jp: 'これは私がずっとほしかったかばんです。', words: ['the bag', 'is', 'this', 'I', 'wanted', 'have', 'that', 'for a long time'], answer: 'This is the bag that I have wanted for a long time.', point: '先行詞 + that + 主語 + 動詞' },
    { type: 'order', jp: '京都は多くの人々が訪れる都市です。', words: ['a city', 'is', 'Kyoto', 'many people', 'which', 'visit'], answer: 'Kyoto is a city which many people visit.', point: '目的格 which + 主語 + 動詞' },
    { type: 'order', jp: 'あなたが昨日会った女性は私の先生です。', words: ['you', 'the woman', 'met', 'my teacher', 'yesterday', 'is'], answer: 'The woman you met yesterday is my teacher.', point: '関係代名詞の省略: 名詞 + 主語 + 動詞' },
    { type: 'order', jp: '私は目が青いねこを飼っています。', words: ['a cat', 'I', 'eyes', 'have', 'whose', 'blue', 'are'], answer: 'I have a cat whose eyes are blue.', point: 'whose + 名詞 + 動詞' },

    { type: 'para', en1: 'Look at the bird flying in the sky.', en2: 'Look at the bird which ( ) ( ) in the sky.', answers: ['is', 'flying'], point: '名詞 + 〜ing = 名詞 + which is + 〜ing' },
    { type: 'para', en1: 'This book was written by Mr. Kato. It is popular among students.', en2: 'The book ( ) ( ) Mr. Kato is popular among students.', answers: ['written', 'by'], point: '過去分詞の後置修飾で2文を1文に' },
    { type: 'para', en1: 'She has a brother. His name is Taku.', en2: 'She has a brother ( ) ( ) is Taku.', answers: ['whose', 'name'], point: 'his name → whose name' },
    { type: 'para', en1: 'The boy who is standing by the door is Ken.', en2: 'The boy ( ) by the door is Ken.', answers: ['standing'], point: 'who is + 〜ing = 〜ing' },
  ],
};

EXAM_GRAMMAR.subjunctive = {
  no: 13, title: '仮定法', sub: 'If 〜 would/could・If I were you・I wish',
  sections: [
    { title: 'If + 過去形, 〜 would / could …', stars: 3, key: ['If I had more time, I could read many books.', 'もしもっと時間があれば、たくさん本が読めるのに。'],
      points: [
        '仮定法は、現実とはちがうこと・ありえないことを表す。',
        '〈If + 主語 + 過去形 〜, 主語 + would / could + 動詞の原形 …〉=「もし〜なら、…だろう(…できるのに)」。',
        '形は過去形でも、意味は「今」のこと。',
        '実際に起こりうることは、If it is sunny tomorrow, 〜 のようにふつうの条件文(現在形)で表す。',
      ],
      table: [['', '例文', '意味'], ['ふつうの条件(ありうる)', 'If it rains tomorrow, I will stay home.', '明日雨なら家にいる'], ['仮定法(現実とちがう)', 'If I had a car, I would drive to the sea.', '車があれば海へドライブするのに']] },
    { title: 'If I were you, 〜', stars: 3, key: ['If I were you, I would ask the teacher.', 'もし私があなたなら、先生にたずねるでしょう。'],
      points: [
        '仮定法では、主語が I や he, she でも be動詞はふつう were を使う。',
        'If I were you, 〜 は「私だったら〜するよ」と助言するときの決まった表現。',
        '現実: I am not a bird. → 仮定法: If I were a bird, I could fly to you.',
      ] },
    { title: 'I wish 〜', stars: 3, key: ['I wish I could speak French.', 'フランス語が話せたらいいのに。'],
      points: [
        '〈I wish + 主語 + 過去形〉で「〜ならいいのに」と、今の現実とちがう願いを表す。',
        'be動詞は were、助動詞は could / would を使う。I wish I had 〜 =「〜を持っていればいいのに(実際は持っていない)」。',
        '実現しそうなことを望むときは I hope 〜 を使う(I hope it will be sunny tomorrow.)。',
      ] },
    { title: '仮定法を使った表現', stars: 1, key: ['He talks as if he knew everything.', '彼はまるで何でも知っているかのように話します。'],
      points: [
        '〈as if + 主語 + 過去形〉=「まるで〜であるかのように」。',
        '〈It\'s time + 主語 + 過去形〉=「もう〜してもいいころだ」。It\'s time you went to bed.',
        'どちらも高校で詳しく学ぶ発展的な表現。入試では読解で意味がわかれば十分。',
      ] },
  ],
  questions: [
    { type: 'choice', jp: 'もしたくさんお金を持っていれば、大きな家を買うのに。', en: 'If I ( ) a lot of money, I would buy a big house.', options: ['have', 'had', 'will have', 'having'], answer: 1, point: '仮定法: If + 過去形' },
    { type: 'choice', jp: 'もし私があなたなら、休みをとるでしょう。', en: 'If I were you, I ( ) take a rest.', options: ['would', 'will', 'am', 'did'], answer: 0, point: 'If I were you, I would 〜' },
    { type: 'choice', jp: 'もし兄がここにいれば、私を手伝ってくれるのに。', en: 'If my brother ( ) here, he would help me.', options: ['is', 'be', 'were', 'are'], answer: 2, point: '仮定法の be動詞は were' },
    { type: 'choice', jp: 'あなたのようにピアノがひけたらいいのに。', en: 'I wish I ( ) play the piano like you.', options: ['will', 'can', 'am', 'could'], answer: 3, point: 'I wish + 主語 + could 〜' },
    { type: 'choice', jp: 'もし明日晴れたら、私たちはハイキングに行きます。', en: 'If it ( ) sunny tomorrow, we will go hiking.', options: ['is', 'were', 'will be', 'was'], answer: 0, point: '起こりうること → ふつうの条件文。未来でも現在形' },
    { type: 'choice', jp: '犬を飼っていたらいいのに。', en: 'I wish I ( ) a dog.', options: ['have', 'has', 'had', 'having'], answer: 2, point: 'I wish + 主語 + 過去形' },
    { type: 'choice', jp: '彼女はまるで映画スターのように見えます。', en: 'She looks ( ) she were a movie star.', options: ['as if', 'because', 'so that', 'until'], answer: 0, point: 'as if + 過去形 =「まるで〜のように」' },
    { type: 'choice', jp: '私は彼女の電話番号を知りません。知っていれば電話できるのに。', en: 'I don\'t know her phone number. If I ( ) it, I could call her.', options: ['know', 'knew', 'known', 'knows'], answer: 1, point: '今の事実の反対 → 過去形' },

    { type: 'fill', jp: 'もし私が鳥なら、あなたのところへ飛んでいけるのに。', en: 'If I ( ) a bird, I ( ) fly to you.', answers: ['were', 'could'], point: 'If I were 〜, I could …' },
    { type: 'fill', jp: 'もし時間があれば、あなたといっしょに行くだろうに。', en: 'If I ( ) time, I ( ) go with you.', answers: ['had', 'would'], point: '「〜だろうに」は would' },
    { type: 'fill', jp: 'もし私があなたなら、そんなことは言わないでしょう。', en: 'If I ( ) you, I ( ) not say such a thing.', answers: ['were', 'would'], point: 'If I were you, I would not 〜' },
    { type: 'fill', jp: '自転車を持っていたらいいのに。', en: 'I ( ) I ( ) a bike.', answers: ['wish', 'had'], point: 'I wish I had 〜' },
    { type: 'fill', jp: '今日が日曜日ならいいのに。', en: 'I wish today ( ) Sunday.', answers: ['were'], point: 'I wish のあとの be動詞は were' },
    { type: 'fill', jp: 'もし雪が降れば、スキーができるのに。', en: 'If it ( ), we could ski.', answers: ['snowed'], point: '仮定法: If + 過去形' },
    { type: 'fill', jp: 'もう寝る時間ですよ。', en: 'It\'s ( ) you went to bed.', answers: ['time'], point: 'It\'s time + 主語 + 過去形' },

    { type: 'order', jp: 'もし彼の住所を知っていれば、手紙を書くのに。(if で始めて)', words: ['his address', 'knew', 'if', 'I', 'I', 'would', 'write', 'to him'], answer: 'If I knew his address, I would write to him.', point: 'If + 過去形, 主語 + would + 原形' },
    { type: 'order', jp: 'もし私があなたなら、そのコンサートに行くでしょう。(if で始めて)', words: ['were', 'I', 'you', 'if', 'would', 'I', 'go to', 'the concert'], answer: 'If I were you, I would go to the concert.', point: 'If I were you, I would 〜' },
    { type: 'order', jp: '空を飛べたらいいのに。', words: ['wish', 'could', 'I', 'I', 'fly', 'in the sky'], answer: 'I wish I could fly in the sky.', point: 'I wish I could 〜' },
    { type: 'order', jp: '彼はまるで自分が先生であるかのように話します。', words: ['talks', 'he', 'as if', 'he', 'a teacher', 'were'], answer: 'He talks as if he were a teacher.', point: 'as if + 主語 + were' },
    { type: 'order', jp: 'もし姉にもっと時間があれば、私と遊んでくれるのに。', words: ['had', 'my sister', 'more time', 'if', 'she', 'would', 'play', 'with me'], answer: 'If my sister had more time, she would play with me.', point: 'If + 過去形, 主語 + would + 原形' },

    { type: 'para', en1: 'I am not rich, so I can\'t buy the car.', en2: 'If I ( ) rich, I ( ) buy the car.', answers: ['were', 'could'], point: '現実の反対 → If I were 〜, I could …' },
    { type: 'para', en1: 'I\'m sorry that I don\'t have a smartphone.', en2: 'I ( ) I ( ) a smartphone.', answers: ['wish', 'had'], point: '「持っていない」→ I wish I had 〜' },
    { type: 'para', en1: 'Because it is raining, we can\'t play tennis.', en2: 'If it ( ) not raining, we ( ) play tennis.', answers: ['were', 'could'], point: '肯定 ⇔ 否定を逆にして仮定法に' },
    { type: 'para', en1: 'I want to swim well, but I can\'t.', en2: 'I wish I ( ) swim well.', answers: ['could'], point: '「できない」→ I wish I could 〜' },
  ],
};

EXAM_GRAMMAR.svoc = {
  no: 14, title: 'SVOO・SVOC の文', sub: 'tell 人 that / what 〜・make A B・let 人 〜',
  sections: [
    { title: 'SVOO(tell 人 that 〜)', stars: 2, key: ['My mother often tells me that reading is important.', '母はよく私に、読書は大切だと言います。'],
      points: [
        'SVOO の基本: give / show / tell + 人 + もの。〈もの + to + 人〉に書きかえられる(buy, make は for)。',
        '〈tell / show / teach + 人 + that 〜〉で「人に〜ということを言う・示す・教える」。that は省略できる。',
        '文の動詞が過去形なら、that のあとの動詞もふつう過去形にする(He told me that he was busy.)。',
      ] },
    { title: 'SVOO(tell 人 疑問詞 〜)', stars: 3, key: ['Please tell me where the station is.', '駅がどこにあるか教えてください。'],
      points: [
        '〈tell / show / ask + 人 + 疑問詞 〜〉で「人に〜かを言う・示す・たずねる」。',
        '疑問詞のあとは〈主語 + 動詞〉の語順(間接疑問)。× where is the station',
        'do / does / did は使わず、動詞の形で時制を表す(what he wants / where she went)。',
        '〈疑問詞 + to 〜〉でも表せる: tell me how to get to the station.',
      ] },
    { title: 'SVOC（make A B など）', stars: 3, key: ['The news made everyone happy.', 'その知らせはみんなを幸せな気持ちにしました。'],
      points: [
        '〈動詞 + A + B〉で「A を B にする」「A を B と呼ぶ」など。A = B の関係になる(everyone = happy)。',
        'B には形容詞か名詞が入る。',
        'SVOO(give A B: A ≠ B)と区別しよう。',
      ],
      table: [['形', '例文', '意味'], ['make A B', 'The song made me sad.', 'その歌は私を悲しくさせた'], ['call A B', 'We call him Ken.', '私たちは彼をケンと呼ぶ'], ['name A B', 'They named the cat Tama.', '彼らはそのねこをタマと名づけた'], ['keep A B', 'Keep the window open.', '窓を開けたままにしておいて'], ['find A B', 'I found the book easy.', 'その本は簡単だとわかった']] },
    { title: 'SVO + 動詞の原形（let / help / make）', stars: 2, key: ['My father let me use his computer.', '父は私に彼のコンピューターを使わせてくれました。'],
      points: [
        '〈let + 人 + 動詞の原形〉=「人に(したいように)〜させてやる」。Let me 〜. =「私に〜させて」。',
        '〈help + 人 + 動詞の原形〉=「人が〜するのを手伝う」。',
        '〈make + 人 + 動詞の原形〉=「人に(むりやり)〜させる」。',
        'to はつけない。〈want / ask / tell + 人 + to 〜〉との区別に注意。',
      ] },
  ],
  questions: [
    { type: 'choice', jp: '彼女がどこに住んでいるか知っていますか。', en: 'Do you know where ( )?', options: ['does she live', 'she lives', 'lives she', 'she does live'], answer: 1, point: '間接疑問は〈疑問詞 + 主語 + 動詞〉' },
    { type: 'choice', jp: 'その映画は私を悲しい気持ちにさせました。', en: 'The movie made ( ) sad.', options: ['I', 'my', 'mine', 'me'], answer: 3, point: 'make A B の A は目的格' },
    { type: 'choice', jp: '私たちは犬をシロと名づけました。', en: 'We ( ) our dog Shiro.', options: ['named', 'gave', 'told', 'made'], answer: 0, point: 'name A B =「A を B と名づける」' },
    { type: 'choice', jp: 'あなたのノートを見せてください。', en: 'Please let me ( ) your notebook.', options: ['seeing', 'to see', 'see', 'saw'], answer: 2, point: 'let + 人 + 動詞の原形' },
    { type: 'choice', jp: '母は私が部屋をそうじするのを手伝ってくれました。', en: 'My mother helped me ( ) my room.', options: ['clean', 'cleaning', 'cleaned', 'cleans'], answer: 0, point: 'help + 人 + 動詞の原形' },
    { type: 'choice', jp: 'ドアを閉めたままにしておいてください。', en: 'Please keep the door ( ).', options: ['close', 'closing', 'closed', 'to close'], answer: 2, point: 'keep A B: B は「閉められた状態」closed' },
    { type: 'choice', jp: '先生は私に、もっと本を読むべきだと言いました。', en: 'My teacher told me ( ) I should read more books.', options: ['what', 'that', 'if', 'which'], answer: 1, point: 'tell + 人 + that 〜' },
    { type: 'choice', jp: '私は彼に何がほしいのかたずねました。', en: 'I asked him what ( ).', options: ['he wanted', 'did he want', 'he wants to', 'does he want'], answer: 0, point: '間接疑問は〈主語 + 動詞〉の語順' },

    { type: 'fill', jp: '私たちは彼をトムと呼んでいます。', en: 'We ( ) ( ) Tom.', answers: ['call', 'him'], point: 'call A B =「A を B と呼ぶ」' },
    { type: 'fill', jp: 'この写真を見ると私は幸せな気持ちになります。', en: 'This picture ( ) ( ) happy.', answers: ['makes', 'me'], point: 'make A B。主語が3人称単数なので makes' },
    { type: 'fill', jp: '駅への行き方を教えてくれませんか。', en: 'Could you tell me ( ) ( ) get to the station?', answers: ['how', 'to'], point: 'how to 〜 =「〜のしかた」' },
    { type: 'fill', jp: 'その本は、努力が大切だということを私たちに教えてくれます。', en: 'The book teaches ( ) ( ) hard work is important.', answers: ['us', 'that'], point: 'teach + 人 + that 〜' },
    { type: 'fill', jp: '私にあなたの自転車を使わせてください。', en: 'Please ( ) me ( ) your bike.', answers: ['let', 'use'], point: 'let + 人 + 動詞の原形' },
    { type: 'fill', jp: '彼がいつ日本に来たのか知っていますか。', en: 'Do you know when he ( ) to Japan?', answers: ['came'], point: '間接疑問では did を使わず過去形にする' },
    { type: 'fill', jp: '私はその箱が空っぽだとわかりました。', en: 'I ( ) the box ( ).', answers: ['found', 'empty'], point: 'find A B =「A が B だとわかる」' },

    { type: 'order', jp: '彼が何を買ったのか私に教えて。', words: ['me', 'tell', 'what', 'he', 'bought'], answer: 'Tell me what he bought.', point: 'tell + 人 + 疑問詞 + 主語 + 動詞' },
    { type: 'order', jp: '母は私に、今日は忙しいと言いました。', words: ['told', 'my mother', 'that', 'me', 'she', 'busy', 'was', 'today'], answer: 'My mother told me that she was busy today.', point: 'tell + 人 + that 〜(時制の一致で was)' },
    { type: 'order', jp: '毎日運動することは私たちを健康に保ってくれます。', words: ['every day', 'keeps', 'exercising', 'us', 'healthy'], answer: 'Exercising every day keeps us healthy.', point: 'keep A B =「A を B に保つ」' },
    { type: 'order', jp: '父は私が宿題をするのを手伝ってくれました。', words: ['helped', 'me', 'my father', 'do', 'my homework'], answer: 'My father helped me do my homework.', point: 'help + 人 + 動詞の原形' },
    { type: 'order', jp: '彼の歌はいつも私を幸せな気持ちにしてくれます。', words: ['always', 'make', 'his songs', 'me', 'happy'], answer: 'His songs always make me happy.', point: 'make A B =「A を B にする」' },

    { type: 'para', en1: 'I was very happy when I heard the news.', en2: 'The news ( ) me very ( ).', answers: ['made', 'happy'], point: '「〜を聞いてうれしかった」→ 〜 made me happy' },
    { type: 'para', en1: 'Where does Ken live? Do you know?', en2: 'Do you know where Ken ( )?', answers: ['lives'], point: '間接疑問: does を使わず lives' },
    { type: 'para', en1: 'Please show me your album.', en2: 'Please show your album ( ) ( ).', answers: ['to', 'me'], point: 'show + 人 + もの = show + もの + to + 人' },
    { type: 'para', en1: 'My mother said to me, "You can go to the party."', en2: 'My mother ( ) me ( ) to the party.', answers: ['let', 'go'], point: '「〜してよい」と許す → let + 人 + 原形' },
  ],
};

EXAM_GRAMMAR.prepconj = {
  no: 15, title: '前置詞・接続詞・重要な連語', sub: 'in/on/at・because of・when/if・both A and B',
  sections: [
    { title: '前置詞', stars: 3, key: ['I will wait for you at the station until five.', '5時まで駅であなたを待っています。'],
      points: [
        'for + 期間の長さ(for two weeks)、during + 特定の期間(during the summer vacation)。',
        'by「〜までに(期限)」、until「〜までずっと(継続)」、since「〜以来」。',
        'with「〜といっしょに・〜を使って」、without「〜なしで」、about「〜について」、like「〜のような・〜のように」。',
      ],
      table: [['前置詞', '時', '場所'], ['at', 'at seven(時刻)', 'at the station(地点)'], ['on', 'on Sunday / on May 5(曜日・日付)', 'on the wall(接している面)'], ['in', 'in April / in 2025 / in summer(月・年・季節)', 'in Japan / in the box(広い場所・内部)']] },
    { title: '前置詞の働きをする連語', stars: 2, key: ['The game was stopped because of the heavy rain.', '大雨のため試合は中止されました。'],
      points: [
        'because of + 名詞「〜のために(理由)」。because + 主語 + 動詞 との区別に注意。',
        'instead of「〜の代わりに」、thanks to「〜のおかげで」、according to「〜によると」。',
        '場所: in front of「〜の前に」、next to「〜のとなりに」、between A and B「A と B の間に」。',
        '前置詞のあとに動詞を置くときは 〜ing 形にする(instead of going)。',
      ] },
    { title: '接続詞', stars: 3, key: ['When I got home, my sister was watching TV.', '私が帰宅したとき、妹はテレビを見ていました。'],
      points: [
        'when「〜とき」、while「〜する間に」、if「もし〜なら」、because「〜なので」、though「〜だけれども」、after / before / until。',
        '時や条件を表す when, if などのあとでは、未来のことも現在形で表す(If it rains tomorrow, 〜)。',
        '〈原因, so 結果〉、〈結果 because 原因〉の順に注意。',
        'that「〜ということ」は think, know, hope などのあとに続く。I\'m sure that 〜 / I\'m glad that 〜 も重要。',
      ] },
    { title: '接続詞の働きをする連語', stars: 2, key: ['This bag is so heavy that I can\'t carry it.', 'このかばんはとても重いので、私には運べません。'],
      points: [
        'as soon as 〜「〜するとすぐに」。',
        'both A and B「A も B も」は複数扱い。either A or B「A か B のどちらか」。',
        'not only A but also B「A だけでなく B も」、not A but B「A ではなく B」。',
        'so 〜 that …「とても〜なので…」。〈so 〜 that 主語 can\'t …〉は〈too 〜 to …〉に書きかえられる。',
      ] },
  ],
  questions: [
    { type: 'choice', jp: '私の誕生日は7月7日です。', en: 'My birthday is ( ) July 7.', options: ['in', 'at', 'on', 'for'], answer: 2, point: '日付には on' },
    { type: 'choice', jp: '金曜日までにこの仕事を終えてください。', en: 'Please finish this work ( ) Friday.', options: ['until', 'by', 'since', 'during'], answer: 1, point: '期限「〜までに」は by' },
    { type: 'choice', jp: '私は夏休みの間に祖父母を訪ねました。', en: 'I visited my grandparents ( ) the summer vacation.', options: ['when', 'while', 'during', 'since'], answer: 2, point: '前置詞 during + 特定の期間' },
    { type: 'choice', jp: '私たちは大雪のため家にいました。', en: 'We stayed home ( ) the heavy snow.', options: ['because', 'so', 'though', 'because of'], answer: 3, point: 'because of + 名詞' },
    { type: 'choice', jp: '私が戻るまでここで待っていて。', en: 'Wait here ( ) I come back.', options: ['until', 'by', 'while', 'since'], answer: 0, point: '「〜までずっと」は until' },
    { type: 'choice', jp: 'とても寒かったけれど、彼はコートを着ずに出かけました。', en: '( ) it was very cold, he went out without a coat.', options: ['If', 'Though', 'Because', 'So'], answer: 1, point: 'though =「〜だけれども」' },
    { type: 'choice', jp: '空港に着いたらすぐに電話してね。', en: 'Call me as ( ) as you arrive at the airport.', options: ['fast', 'early', 'quick', 'soon'], answer: 3, point: 'as soon as 〜 =「〜するとすぐに」' },
    { type: 'choice', jp: 'ケンもマイクもサッカー部に入っています。', en: 'Both Ken ( ) Mike are on the soccer team.', options: ['or', 'but', 'and', 'also'], answer: 2, point: 'both A and B' },

    { type: 'fill', jp: '彼女はかさを持たずに出かけました。', en: 'She went out ( ) an umbrella.', answers: ['without'], point: 'without =「〜なしで」' },
    { type: 'fill', jp: '私の家は郵便局のとなりにあります。', en: 'My house is ( ) ( ) the post office.', answers: ['next', 'to'], point: 'next to 〜 =「〜のとなりに」' },
    { type: 'fill', jp: 'ジュースの代わりに水を飲みなさい。', en: 'Drink water ( ) ( ) juice.', answers: ['instead', 'of'], point: 'instead of 〜 =「〜の代わりに」' },
    { type: 'fill', jp: '天気予報によると、明日は晴れるでしょう。', en: '( ) ( ) the weather report, it will be sunny tomorrow.', answers: ['According', 'to'], point: 'according to 〜 =「〜によると」' },
    { type: 'fill', jp: '私が電話したとき、彼は夕食を食べていました。', en: 'He was eating dinner ( ) I called him.', answers: ['when'], point: 'when =「〜とき」' },
    { type: 'fill', jp: '私はとても疲れていたので、早く寝ました。', en: 'I was ( ) tired ( ) I went to bed early.', answers: ['so', 'that'], point: 'so 〜 that … =「とても〜なので…」' },
    { type: 'fill', jp: '彼は英語だけでなくフランス語も話せます。', en: 'He can speak ( ) only English ( ) also French.', answers: ['not', 'but'], point: 'not only A but also B' },

    { type: 'order', jp: '私は学校と駅の間で彼に会いました。', words: ['met', 'I', 'him', 'between', 'the school', 'and', 'the station'], answer: 'I met him between the school and the station.', point: 'between A and B' },
    { type: 'order', jp: '私たちはバスか電車のどちらかで行けます。', words: ['go', 'we', 'either', 'can', 'by bus', 'or', 'by train'], answer: 'We can go either by bus or by train.', point: 'either A or B' },
    { type: 'order', jp: 'もし明日晴れたら、ピクニックに行きましょう。(if で始めて)', words: ['it', 'is', 'if', 'sunny', 'tomorrow', 'let\'s', 'go on', 'a picnic'], answer: 'If it is sunny tomorrow, let\'s go on a picnic.', point: '条件の if のあとは未来でも現在形' },
    { type: 'order', jp: 'あなたのおかげで、私は試験に合格しました。(thanks で始めて)', words: ['passed', 'I', 'to', 'you', 'thanks', 'the exam'], answer: 'Thanks to you, I passed the exam.', point: 'thanks to 〜 =「〜のおかげで」' },
    { type: 'order', jp: '彼は医者ではなく看護師です。', words: ['a doctor', 'is', 'he', 'but', 'not', 'a nurse'], answer: 'He is not a doctor but a nurse.', point: 'not A but B =「A ではなく B」' },

    { type: 'para', en1: 'This question is so difficult that I can\'t answer it.', en2: 'This question is ( ) difficult for me ( ) answer.', answers: ['too', 'to'], point: 'so 〜 that 主語 can\'t … = too 〜 to …' },
    { type: 'para', en1: 'Ken can play the guitar. Yumi can play it, too.', en2: '( ) Ken and Yumi can play the guitar.', answers: ['Both'], point: 'both A and B =「A も B も」' },
    { type: 'para', en1: 'It was raining, so we didn\'t go out.', en2: 'We didn\'t go out ( ) it was raining.', answers: ['because'], point: '原因, so 結果 = 結果 because 原因' },
    { type: 'para', en1: 'She went to bed after she took a bath.', en2: 'She took a bath ( ) she went to bed.', answers: ['before'], point: 'A after B = B before A' },
  ],
};
