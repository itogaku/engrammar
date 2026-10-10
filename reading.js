// 長文問題(オリジナルの文章)。教科書本文は使わず、各 Program までに習う文法と単語だけで書いている。
// grade / program: その Program の学習後に出題できる / text: 本文(① などの下線部は <u>〜</u>)
// level: 'program'(Program 全体の内容。省略時) / 'part'(その Part までの内容。part に Part 番号)
// notes: 未習語の注(定期テストの「注」と同じ。本文の下に表示)
// questions の type:
//   choice … 日本語の質問に記号で答える(options の answer 番目が正解)
//   tf     … 本文の内容と合っていれば○、違っていれば×(answer: true / false)
//   fill   … 本文中の英語で答える(answer: 正解の語句)
//   ja     … 下線部を日本語にする(answer: 模範解答。自己採点)
const READING_PASSAGES = [
  {
    grade: 1, program: 1, title: '新しいクラスメート',
    text: 'Hi, everyone. I\'m Emily. I\'m from Canada. I\'m a new student in this class. I\'m a big fan of soccer. I\'m not good at math. I\'m good at music.\nYui, you are my friend. ①<u>You are very kind.</u> Thank you.',
    questions: [
      { type: 'choice', q: 'エミリーの出身国はどこですか。', options: ['日本', 'カナダ', 'オーストラリア', '中国'], answer: 1 },
      { type: 'tf', q: 'エミリーは数学が得意である。', answer: false },
      { type: 'tf', q: 'エミリーはサッカーの大ファンである。', answer: true },
      { type: 'fill', q: '「エミリーはこのクラスの新しい（　）です」の（　）に入る英語1語を、本文中から抜き出しなさい。', answer: 'student' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたはとても親切です。' },
    ],
  },
  {
    grade: 1, program: 2, title: '健のスポーツ',
    text: 'I\'m Ken. I like sports very much. I play tennis after school. I don\'t play soccer. I have two rackets.\nOn Sundays, I watch tennis games on TV. I study English at home before dinner. I sometimes read English books.\nDo you like tennis? ①<u>Let\'s play tennis together!</u>',
    questions: [
      { type: 'choice', q: '健が放課後にすることは何ですか。', options: ['サッカー', 'テニス', '英語の勉強', '読書'], answer: 1 },
      { type: 'tf', q: '健はラケットを2本持っている。', answer: true },
      { type: 'tf', q: '健は夕食の後に英語を勉強する。', answer: false },
      { type: 'fill', q: '健がときどき読むものは何ですか。本文中の英語2語で答えなさい。', answer: 'English books' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'いっしょにテニスをしましょう。' },
    ],
  },
  {
    grade: 1, program: 3, title: 'タレントショー',
    text: 'I\'m in the talent show at school. Look at me. I can dance well. I can\'t sing well.\nMy brother can play the guitar. He can sing well, too. ①<u>We can perform together.</u>\nCan you come to the show? It\'s on Saturday.',
    questions: [
      { type: 'tf', q: '「私」は歌が上手である。', answer: false },
      { type: 'choice', q: '兄（弟）ができることは何ですか。', options: ['ダンス', 'ギターと歌', 'ピアノ', '料理'], answer: 1 },
      { type: 'fill', q: 'ショーは何曜日ですか。本文中の英語1語で答えなさい。', answer: 'Saturday' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私たちはいっしょに演じる（発表する）ことができます。' },
    ],
  },
  {
    grade: 1, program: 4, title: '家族の写真',
    text: 'This is my family photo. This is my father. He is a chef. He is very busy. This is my mother. She is a nurse. She is kind.\nWho is this boy? He is my cousin, Daichi. He is a junior high school student. He is not tall, but ①<u>he is a fast runner.</u>',
    questions: [
      { type: 'tf', q: '父は看護師である。', answer: false },
      { type: 'choice', q: '大地は「私」にとってだれですか。', options: ['兄', 'いとこ', '友達', '先生'], answer: 1 },
      { type: 'fill', q: '母の職業を、本文中の英語1語で答えなさい。', answer: 'nurse' },
      { type: 'tf', q: '大地は背が高い。', answer: false },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼は足が速い（速いランナーです）。' },
    ],
  },
  {
    grade: 1, program: 5, title: 'オーストラリアの友達',
    text: 'My friend Lucy lives in Australia. She likes Japanese food. She eats rice every morning. She studies Japanese at school. ①<u>She speaks Japanese well.</u>\nShe doesn\'t play sports, but she draws pictures well. She likes cats very much.',
    questions: [
      { type: 'choice', q: 'ルーシーが住んでいる国はどこですか。', options: ['日本', 'カナダ', 'オーストラリア', '中国'], answer: 2 },
      { type: 'tf', q: 'ルーシーはスポーツをしない。', answer: true },
      { type: 'fill', q: 'ルーシーが毎朝食べるものを、本文中の英語1語で答えなさい。', answer: 'rice' },
      { type: 'tf', q: 'ルーシーはネコがとても好きである。', answer: true },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼女は日本語を上手に話します。' },
    ],
  },
  {
    grade: 1, program: 6, title: 'ケニアから来た友達',
    text: 'I have a new friend. His name is Jackson. He is from Kenya. ①<u>I like him very much.</u>\nHe has two sisters. Their names are Ana and Mary. I often play with them.\nJackson has a dream. He wants to be a doctor.',
    questions: [
      { type: 'tf', q: 'ジャクソンはケニア出身である。', answer: true },
      { type: 'choice', q: 'ジャクソンには姉妹が何人いますか。', options: ['1人', '2人', '3人', 'いない'], answer: 1 },
      { type: 'fill', q: 'ジャクソンがなりたいものを、本文中の英語1語で答えなさい。', answer: 'doctor' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私は彼がとても好きです。' },
    ],
  },
  {
    grade: 1, program: 7, title: '私の町',
    text: 'Welcome to our town. There is a big park near my house. There are many trees in the park. There is a small pond, too. ①<u>You can see a lot of birds there.</u>\nThere is a library next to the park. There are a lot of books in it. I go there by bike.',
    questions: [
      { type: 'tf', q: '公園には池がある。', answer: true },
      { type: 'choice', q: '図書館はどこにありますか。', options: ['学校の近く', '公園の隣', '駅の前', '家の隣'], answer: 1 },
      { type: 'fill', q: '「私」は図書館へどうやって行きますか。本文中の英語2語で答えなさい。', answer: 'by bike' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'そこではたくさんの鳥を見ることができます。' },
    ],
  },
  {
    grade: 1, program: 8, title: '日曜日の午後',
    text: 'It\'s Sunday afternoon. I\'m at home now. My father is cooking lunch. ①<u>My mother is reading a book.</u> My brother is playing a video game.\nWhere is my dog, Shiro? He is playing under the table. What am I doing? I\'m doing my homework.',
    questions: [
      { type: 'choice', q: '父は今何をしていますか。', options: ['本を読んでいる', '昼食を作っている', 'テレビゲームをしている', '寝ている'], answer: 1 },
      { type: 'tf', q: 'シロはテーブルの下で遊んでいる。', answer: true },
      { type: 'fill', q: '兄（弟）がしているものを、本文中の英語2語で答えなさい。', answer: 'video game' },
      { type: 'tf', q: '「私」は手紙を書いている。', answer: false },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '母は本を読んでいます。' },
    ],
  },
  {
    grade: 1, program: 9, title: '夏休みの旅行',
    text: 'Last summer, I went to Okinawa with my family. We stayed there for five days.\nOn the first day, we swam in the sea. The water was very beautiful. On the second day, we visited a museum. I saw many old things there. I bought a T-shirt for my brother.\n①<u>We had a great time.</u>',
    questions: [
      { type: 'tf', q: '「私」は家族と沖縄へ行った。', answer: true },
      { type: 'choice', q: '2日目にしたことは何ですか。', options: ['海で泳いだ', '博物館を訪れた', '山に登った', '買い物だけをした'], answer: 1 },
      { type: 'fill', q: '沖縄に何日間滞在しましたか。本文中の英語1語で答えなさい。', answer: 'five' },
      { type: 'tf', q: '「私」は弟に帽子を買った。', answer: false },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私たちはとても楽しい時間を過ごしました。' },
    ],
  },
  {
    grade: 1, program: 10, title: '雪の日',
    text: 'It was snowy yesterday, so my mother, my sister and I were at home all day. At three in the afternoon, I was reading a book in my room. ①<u>My sister was watching TV.</u>\nMy father was not at home. He was working at the hospital. What was my mother doing? She was making a cake for us.',
    questions: [
      { type: 'tf', q: '父は家にいた。', answer: false },
      { type: 'choice', q: '母は何をしていましたか。', options: ['テレビを見ていた', '病院で働いていた', 'ケーキを作っていた', '本を読んでいた'], answer: 2 },
      { type: 'fill', q: '昨日の天気を、本文中の英語1語で答えなさい。', answer: 'snowy' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '姉（妹）はテレビを見ていました。' },
    ],
  },
  {
    grade: 2, program: 1, title: 'マイクのお別れ会',
    text: 'Next week, my friend Mike is going to leave Japan. He is going to go back to Canada. We are going to have a farewell party for him on Saturday.\nI\'m going to make a card for him. Mike likes playing soccer, so we will play soccer in the park before the party.\nI will miss him, but ①<u>I will keep in touch with him.</u>',
    questions: [
      { type: 'tf', q: 'マイクはアメリカに帰る予定である。', answer: false },
      { type: 'choice', q: 'お別れ会の前にすることは何ですか。', options: ['映画を見る', 'サッカーをする', '買い物に行く', '料理をする'], answer: 1 },
      { type: 'fill', q: '「私」がマイクのために作るものを、本文中の英語1語で答えなさい。', answer: 'card' },
      { type: 'tf', q: 'お別れ会は土曜日に開かれる。', answer: true },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私は彼と連絡をとり続けるつもりです。' },
    ],
  },
  {
    grade: 2, program: 2, title: '走ることが苦手だった私',
    text: 'When I was an elementary school student, I didn\'t like sports. I was not a fast runner. But my teacher said to me, "If you practice every day, you will be a good runner."\nSo I practiced hard every morning. Now I\'m on the track and field team. ①<u>I think that sports teach us many things.</u> If you are interested in sports, please join us!',
    questions: [
      { type: 'tf', q: '「私」は小学生のとき運動が好きだった。', answer: false },
      { type: 'choice', q: '先生は「私」に何と言いましたか。', options: ['毎日練習すれば、よいランナーになれる', '運動はしなくてよい', '早起きをしなさい', '別の部に入りなさい'], answer: 0 },
      { type: 'fill', q: '「私」が今入っている部を、本文中の英語3語で答えなさい。', answer: 'track and field' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'スポーツは私たちに多くのことを教えてくれると私は思います。' },
    ],
  },
  {
    grade: 2, program: 3, title: '料理人になる夢',
    text: 'I want to be a chef someday. Last Sunday, I went to a restaurant to eat curry. The curry was delicious. I talked with the chef there. He said, "It is important to cook every day."\nTo be a chef, I need to learn a lot. ①<u>I have many things to learn.</u> I\'m going to cook dinner for my family this evening.',
    questions: [
      { type: 'tf', q: '「私」はカレーを食べるためにレストランへ行った。', answer: true },
      { type: 'choice', q: 'シェフが大切だと言ったことは何ですか。', options: ['毎日料理すること', '新しい店を開くこと', '外国へ行くこと', 'たくさん食べること'], answer: 0 },
      { type: 'fill', q: '「私」がなりたい職業を、本文中の英語1語で答えなさい。', answer: 'chef' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私には学ぶべきことがたくさんあります。' },
    ],
  },
  {
    grade: 2, program: 4, title: '公園のルール',
    text: 'Welcome to Green Forest Park. There are some rules here.\nFirst, you must not leave garbage in the park. ①<u>You have to take it home.</u> Second, you must not feed the animals.\nAlso, you don\'t have to bring any money. You can come here for free.\nWe are glad to see you here. Please enjoy nature!',
    questions: [
      { type: 'tf', q: '公園にごみを置いていってもよい。', answer: false },
      { type: 'tf', q: '動物にえさをあげてはいけない。', answer: true },
      { type: 'choice', q: 'この公園の入園料はいくらですか。', options: ['無料', '100円', '500円', '本文に書かれていない'], answer: 0 },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'それを家に持ち帰らなければなりません。' },
    ],
  },
  {
    grade: 2, program: 5, title: '祖母のためのスープ',
    text: 'Last week, my grandmother was sick. I didn\'t know what to do. ①<u>My mother taught me what to cook.</u>\nI made some soup for her. She looked happy. "This soup is delicious," she said. She gave me a big smile.\nNow she is fine. I became interested in cooking.',
    questions: [
      { type: 'tf', q: '先週、祖母は病気だった。', answer: true },
      { type: 'choice', q: '「私」が祖母のために作ったものは何ですか。', options: ['ケーキ', 'カレー', 'スープ', 'サラダ'], answer: 2 },
      { type: 'fill', q: 'スープを食べた祖母はどのように見えましたか。本文中の英語1語で答えなさい。', answer: 'happy' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '母は私に何を料理すればよいかを教えてくれました。' },
    ],
  },
  {
    grade: 2, program: 6, title: '世界と日本の比べっこ',
    text: 'Which is bigger, Japan or the U.K.? Japan is bigger than the U.K.\nSome children think that Mt. Fuji is the highest mountain in the world, but that is not true. Mt. Fuji is the highest mountain in Japan. ①<u>Mt. Everest is the highest in the world.</u> It is much higher than Mt. Fuji.\nLake Biwa is the largest lake in Japan.',
    questions: [
      { type: 'tf', q: '富士山が世界で一番高い山だと思っている子どももいる。', answer: true },
      { type: 'tf', q: '富士山は世界で一番高い山である。', answer: false },
      { type: 'fill', q: '「エベレストは富士山より『ずっと』高い」の『ずっと』にあたる英語1語を、本文中から抜き出しなさい。', answer: 'much' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'エベレストは世界で一番高い（山です）。' },
    ],
  },
  {
    grade: 2, program: 7, title: 'クラスで人気のスポーツ',
    text: 'What sport do you like the best? We asked forty students in our class.\nSoccer was the most popular, and fifteen students liked it the best. Basketball was second. Ten students liked it the best. ①<u>Some students like watching sports better than playing them.</u>\nMy friend Taku likes many sports. He knows how to play them all. He taught me how to play badminton.',
    questions: [
      { type: 'choice', q: 'クラスで一番人気のスポーツは何ですか。', options: ['バスケットボール', 'バドミントン', 'サッカー', 'テニス'], answer: 2 },
      { type: 'fill', q: 'サッカーが一番好きな生徒は何人ですか。本文中の英語1語で答えなさい。', answer: 'fifteen' },
      { type: 'tf', q: '拓は「私」にテニスのやり方を教えた。', answer: false },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'スポーツをするより見るほうが好きな生徒もいます。' },
    ],
  },
  {
    grade: 2, program: 8, title: '古い木の建物',
    text: 'This is an old building in Nara. It was built about 1,300 years ago. The building is made of wood.\nIt is visited by many people every year. ①<u>It is loved by people around the world.</u> Pictures of the building can be found in many books.',
    questions: [
      { type: 'tf', q: 'その建物は約1300年前に建てられた。', answer: true },
      { type: 'choice', q: 'その建物は何でできていますか。', options: ['石', '木', '紙', '本文に書かれていない'], answer: 1 },
      { type: 'fill', q: '毎年その建物を訪れるのはだれですか。本文中の英語2語で答えなさい。', answer: 'many people' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'それは世界中の人々に愛されています。' },
    ],
  },
  {
    grade: 3, program: 1, title: 'オーストラリアの思い出',
    text: 'Have you ever been to a foreign country? I have been to Australia twice. The first time I went there, I was ten years old. I saw koalas and kangaroos there.\n①<u>It was difficult for me to speak English then.</u> But the people there were very kind. They asked me to talk about Japan. I have never forgotten those days. I want to visit Australia again.',
    questions: [
      { type: 'tf', q: '「私」はオーストラリアに3回行ったことがある。', answer: false },
      { type: 'choice', q: '初めてオーストラリアに行ったとき、「私」は何歳でしたか。', options: ['8歳', '10歳', '12歳', '15歳'], answer: 1 },
      { type: 'fill', q: '現地の人々は「私」に何について話すよう頼みましたか。本文中の英語1語で答えなさい。', answer: 'Japan' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'そのとき、私にとって英語を話すことは難しかった。' },
    ],
  },
  {
    grade: 3, program: 2, title: '祖父の日記',
    text: '①<u>My grandfather has lived in this town for a long time.</u> He has kept a diary since he was a junior high school student. He has written in it every day.\nLast night, he showed me one of his old diaries. I have been reading it since this morning. It is very interesting, but I haven\'t finished it yet.',
    questions: [
      { type: 'tf', q: '祖父は中学生のころから日記をつけている。', answer: true },
      { type: 'choice', q: '「私」が今朝からしていることは何ですか。', options: ['日記を書いている', '祖父の日記を読んでいる', '町を歩いている', '宿題をしている'], answer: 1 },
      { type: 'tf', q: '「私」はもうその日記を読み終えた。', answer: false },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私の祖父は長い間この町に住んでいます。' },
    ],
  },
  {
    grade: 3, program: 3, title: 'バスケットボールと仲間',
    text: 'Basketball makes me happy. Last year, I broke my leg, and I couldn\'t play for a long time. My coach told me that I could play again someday.\nWhile I couldn\'t play, my teammates sent me kind messages. ①<u>Their kind messages made me strong.</u> When I came back, they helped me practice. Now I can play basketball with them again.',
    questions: [
      { type: 'tf', q: '「私」は去年、足を骨折した。', answer: true },
      { type: 'choice', q: 'コーチは「私」に何と言いましたか。', options: ['もうプレーできない', 'いつかまたプレーできる', '別のスポーツをしなさい', 'もっと練習しなさい'], answer: 1 },
      { type: 'fill', q: '「私」を幸せにするものを、本文中の英語1語で答えなさい。', answer: 'basketball' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼らの親切なメッセージ（言葉）が私を強くしました。' },
    ],
  },
  {
    grade: 3, program: 4, title: 'お気に入りの写真',
    text: 'Look at this picture. The girl wearing a red cap is my sister, Saki. The dog sitting next to her is Hachi. This picture was taken by my father.\nDo you know where it was taken? It was taken in a park near our house. ①<u>It is a park loved by many families.</u> I don\'t know when my father took it, but I like it very much.',
    questions: [
      { type: 'tf', q: '赤い帽子をかぶっている女の子は「私」の姉（妹）である。', answer: true },
      { type: 'choice', q: 'この写真を撮ったのはだれですか。', options: ['母', '父', '咲', '「私」'], answer: 1 },
      { type: 'fill', q: '犬の名前を、本文中の英語1語で答えなさい。', answer: 'Hachi' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'そこは多くの家族に愛されている公園です。' },
    ],
  },
  {
    grade: 3, program: 5, title: 'ピアノを弾く少年',
    text: 'Do you know Taro? He lives next to my house. ①<u>He is a boy who can play the piano very well.</u>\nYesterday he played a song which was written by his mother. It was a song which made me happy. Everyone who heard the song liked it.',
    questions: [
      { type: 'tf', q: '太郎はピアノを上手に弾くことができる。', answer: true },
      { type: 'choice', q: '太郎が昨日弾いた曲を書いたのはだれですか。', options: ['太郎', '太郎の母', '「私」', '音楽の先生'], answer: 1 },
      { type: 'tf', q: 'その曲を聞いた人の中には、気に入らなかった人もいた。', answer: false },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼はピアノをとても上手に弾くことができる男の子です。' },
    ],
  },
  {
    grade: 3, program: 6, title: '去年の夏に読んだ本',
    text: 'This is a book I read last summer. It is a story about a dog that lived with an old man. ①<u>The dog the man loved was very smart.</u>\nThe dog helped the man every day. The thing I learned from this book is that friends are very important.',
    questions: [
      { type: 'tf', q: 'これは「私」が去年の夏に読んだ本である。', answer: true },
      { type: 'choice', q: 'この本はどんな話ですか。', options: ['ネコと少女の話', '老人と暮らした犬の話', '学校の友達の話', '旅行の話'], answer: 1 },
      { type: 'fill', q: '「私」がこの本から学んだことは、何が大切だということですか。本文中の英語1語で答えなさい。', answer: 'friends' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'その男性が愛していた犬はとても賢かった。' },
    ],
  },
  {
    grade: 3, program: 7, title: 'もし〜だったら',
    text: 'I like animals very much. I wish I had a dog, but I can\'t have one in my house. If I had a dog, I would walk it every morning.\nIf I were a bird, I could fly to my grandmother\'s house. She lives far away. ①<u>I wish I could see her more often.</u>',
    questions: [
      { type: 'tf', q: '「私」は犬を飼っている。', answer: false },
      { type: 'choice', q: '「私」が鳥だったらしたいことは何ですか。', options: ['空を飛んで学校へ行く', '祖母の家へ飛んでいく', '海を見に行く', '犬と遊ぶ'], answer: 1 },
      { type: 'fill', q: '犬を飼っていたら毎朝何をしますか。「（　）it every morning」の（　）に入る英語1語を本文中から抜き出しなさい。', answer: 'walk' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'もっとたびたび（ひんぱんに）祖母に会えたらいいのに。' },
    ],
  },
];
