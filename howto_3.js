// 入試対策: 解き方を学ぶプリント(オリジナル)。
var HOWTO_UNITS = typeof HOWTO_UNITS !== 'undefined' ? HOWTO_UNITS : [];

// ---------------------------------------------------------------- 11
HOWTO_UNITS.push({
  no: 11, part: '読解編', title: '文や段落を並べかえる問題',
  intro: '空所に入る複数の文や、対話・段落の正しい順番を答える形式です。なんとなく読んで決めると、代名詞や接続語の手がかりを見落として順番をまちがえやすくなります。',
  steps: [
    { title: '最初の文を見つける！', text: '話題を紹介する文、あいさつ、直前の質問への答えなど、空所の前と直接つながる「始まりの文」を探す。it / they などの代名詞や Then, Also, After that で始まる文は、最初にこないことが多い。' },
    { title: 'つなぎ言葉に注目する！', text: '代名詞（it, they, them, one）が何を指すか、接続語（but, so, also, for example）や時を表す語（first, then, after, in the morning）を手がかりに、文と文のつながりを決める。' },
    { title: '並べて読んで確かめる！', text: '決めた順に空所へ入れ、空所の前後の文もふくめて通して読む。話の流れや時間の順番が自然か、代名詞の指すものがはっきりしているかを確認する。' },
  ],
  example: {
    instr: '本文中の ( ) に、(a)〜(c) の3つの文を入れて意味が通るようにするとき、正しい順番をア〜エから1つ選びなさい。',
    body: 'Last summer, I stayed at my grandmother\'s house in Nagano for a week. She lives alone near a mountain, and she has a large vegetable garden.\nOn the first morning, she said to me, "Kenta, will you help me in the garden?" ( ) It was so sweet! I was surprised because it was much sweeter than the tomatoes from the supermarket.\nDuring my stay, I worked in the garden with her every day. I learned that growing vegetables takes a lot of time and care. When I came home, I started to grow tomatoes on our balcony. I hope my tomatoes will be as sweet as my grandmother\'s.\n\n(a) Then she gave me one of them and said, "Try it."\n(b) I said yes, and we went out together to pick tomatoes.\n(c) After we picked about thirty, we washed them in cold water.',
    options: ['(a) → (b) → (c)', '(b) → (a) → (c)', '(b) → (c) → (a)', '(c) → (b) → (a)'],
    walkthrough: [
      { step: 1, text: '空所の直前は、おばあさんの "will you help me in the garden?" という質問。これに答えている (b) I said yes が最初の文。(a) は Then、(c) は After で始まり、前の出来事が必要なので最初には来ない。' },
      { step: 2, text: '(c) の After we picked about thirty は、(b) の「トマトをとりに行った」の続き。(a) の Then は「洗ったあとで」、one of them の them は (c) で洗ったトマトを指す。よって (b) → (c) → (a)。' },
      { step: 3, text: '(b)→(c)→(a) の順で読むと、(a) の "Try it." のあとに空所後の It was so sweet! が続き、食べた感想として自然につながる。時間の流れも「とりに行く→洗う→食べる」で正しい。' },
    ],
    answer: 'ウ',
  },
  check: {
    instr: 'Emma が Yuki に送ったメールの ( ) に、(a)〜(c) の3つの文を入れて意味が通るようにするとき、正しい順番を記号で書きなさい。',
    body: 'Hi Yuki,\nThank you for your e-mail. I\'m very happy that you are going to stay with my family in London next month. ( ) In the afternoon, we will ride a boat on the river and see Tower Bridge. In the evening, my father will cook his special fish and chips for you.\nBy the way, London is often rainy, even in summer. So please bring a light jacket and an umbrella. If you have any questions about your stay, please ask me anytime. I\'m looking forward to seeing you soon!\nYour friend,\nEmma\n\n(a) In the morning, we will go to a big museum near my house.\n(b) It has many old things from all over the world, and you can enter it for free.\n(c) I have made a plan for the first day of your stay.',
    guide: [
      { step: 1, text: 'これから話す内容（予定）を紹介している〔①〕の文が最初にくる。', blanks: ['(c)'] },
      { step: 2, text: '(b) の It は、(a) に出てくる〔②〕を指している。だから (b) は (a) のあとに続く。', blanks: ['a big museum'] },
      { step: 2, text: '(a) の In the morning は、空所のあとの In the 〔③〕 につながる時を表す語。', blanks: ['afternoon'] },
      { step: 3, text: '(c)→(a)→(b) の順に入れて読み、morning → afternoon → 〔④〕 と1日の予定が自然に流れることを確かめる。', blanks: ['evening'] },
    ],
    answer: '(c) → (a) → (b)',
    explanation: 'まず「最初の日の計画を立てた」と話題を示す (c)。次に午前の予定 (a)、その博物館 (It) を説明する (b) と続け、空所のあとの午後・夜の予定につなげます。',
  },
  practice: [
    {
      instr: '本文中の ( ) に、(a)〜(c) の3つの文を入れて意味が通るようにするとき、正しい順番を記号で書きなさい。',
      body: 'Do you know about furoshiki? ( ) So furoshiki is good for the earth, too.\nMy grandmother gave me a blue furoshiki with flowers on it last year. I use it every day to carry my lunch box to school. When I don\'t use it, I can fold it and put it in my pocket because it is very light. I think more people should try it. Why don\'t you use one when you go shopping?\n\n(a) It is a large square cloth, and people in Japan have used it for a long time to carry things.\n(b) Also, you can use it many times, so you don\'t need plastic bags.\n(c) For example, you can wrap a box, a bottle, or even a watermelon with it.',
      answer: '(a) → (c) → (b)',
      explanation: '質問「furoshiki を知っていますか」のあとは、それが何かを説明する (a)。For example で使い方の例を挙げる (c)、Also で別の良い点を加える (b) と続き、(b) の plastic bags から空所後の good for the earth につながります。',
    },
    {
      instr: '次の対話が成り立つように、( ) に入る (a)〜(c) を正しい順番に並べかえ、記号で書きなさい。',
      body: 'Clerk: Hello. May I help you?\n( )\n( )\n( )\nClerk: Sure. Here you are. This one is size L.\nCustomer: Thank you. Oh, this is just right for him. How much is it?\nClerk: It\'s 2,000 yen.\nCustomer: OK. I\'ll take it.\n\n(a) Clerk: How about this blue one? It\'s very popular among young people.\n(b) Customer: Yes, please. I\'m looking for a T-shirt for my brother.\n(c) Customer: It looks nice, but do you have a bigger one?',
      answer: '(b) → (a) → (c)',
      explanation: 'May I help you? には Yes, please. の (b) で答えます。T-shirt を探していると聞いた店員が this blue one をすすめる (a)、客が a bigger one をたのむ (c) と続き、店員の size L につながります。',
    },
    {
      instr: '次の英文は、中学生の Sota がスピーチのために書いたものです。(A)〜(C) の段落を、意味が通るように正しい順番に並べかえ、記号で書きなさい。',
      body: '(A) After the event, an old woman said to me, "Thank you. The park looks beautiful now. My grandchildren can play here safely." I was very happy to hear that.\n(B) Last month, I joined a volunteer event to clean a park in my town. About forty people came, and many of them were older than me.\n(C) We started at nine in the morning. We picked up cans, bottles, and plastic bags. It was hot, but we worked hard for three hours.\n\nThrough this experience, I learned that small actions can make people happy. I want to join the event again next month.',
      answer: '(B) → (C) → (A)',
      explanation: 'Last month で話題（ボランティアに参加した）を紹介する (B) が最初。始まりの時刻と作業の様子の (C)、After the event の (A) が続きます。最後の段落の this experience にも自然につながります。',
    },
  ],
});

// ---------------------------------------------------------------- 12
HOWTO_UNITS.push({
  no: 12, part: '読解編', title: 'グラフを読み取る問題',
  intro: '英文とグラフを照らし合わせて、グラフの項目や数を答える形式です。グラフだけ、本文だけを見て決めてしまったり、more than や about half などの比べる表現を読み落としたりするミスが多くなります。',
  steps: [
    { title: 'タイトル・軸・単位を見る！', text: '本文を読む前に、グラフのタイトル（何についてのグラフか）、横軸と縦軸が表すもの、単位（人・％・分など）を確認する。線や棒が2種類以上あるときは、それぞれ何を表すかも見ておく。' },
    { title: '比べる表現をさがす！', text: '本文から the most, the second, more than, fewer than, increased, did not change, twice, half など、比較や変化を表す表現をさがして線を引く。' },
    { title: '数字を当てはめて確かめる！', text: '本文の表現をグラフの数字に当てはめ、すべての条件に合うかを1つずつ確認する。1つの条件だけで決めず、最後に全部の条件をもう一度チェックする。' },
  ],
  example: {
    instr: 'Aki はクラスで「いちばん好きな季節」を調べ、グラフを使って発表しました。グラフの A と C に入る季節の組み合わせとして正しいものを、ア〜エから1つ選びなさい。',
    body: 'Hello, everyone. I asked all thirty-five students in our class, "Which season do you like the best?" Please look at the graph.\nSummer is the most popular. Fourteen students chose it because they can swim in the sea and enjoy summer festivals. Spring is the second most popular season. The students who like spring said that they love to see beautiful cherry blossoms. Autumn and winter are not as popular as spring. The number of students who chose autumn is half the number of students who chose summer. Winter got one vote fewer than autumn, but the students who like winter said, "We love skiing and snowboarding!"\nI like winter the best, too. I was a little sad about the result, but I think every season has its good points. Thank you.',
    chart: { type: 'bar', title: 'クラスで好きな季節（35人）', unit: '人', labels: ['A', 'B', 'C', 'D'], series: [{ name: '人数', values: [8, 14, 7, 6] }] },
    options: ['A 春　C 秋', 'A 春　C 冬', 'A 秋　C 春', 'A 冬　C 秋'],
    walkthrough: [
      { step: 1, text: 'タイトルから、クラス35人の「好きな季節」の人数のグラフだとわかる。縦軸の単位は「人」。A〜D は 8人・14人・7人・6人。' },
      { step: 2, text: '本文の比べる表現をさがす。Summer is the most popular（夏が最多）、Spring is the second（春が2位）、autumn is half the number of ... summer（秋は夏の半分）、Winter got one vote fewer than autumn（冬は秋より1票少ない）。' },
      { step: 3, text: '最多の14人の B が夏。2番目の8人の A が春。夏の半分は 14÷2＝7 なので、7人の C が秋。秋より1人少ない6人の D が冬。合計 8＋14＋7＋6＝35人で人数も合う。A 春、C 秋。' },
    ],
    answer: 'ア',
  },
  check: {
    instr: 'Emi と Hill 先生が、図書館の来館者数のグラフを見ながら話しています。グラフの A・B はそれぞれ「子ども」「おとな」のどちらを表していますか。また、子どもの来館者数がはじめておとなの来館者数を上回ったのは何月ですか。',
    body: 'Emi: Look at this graph. It shows the number of people who visited Midori Library from April to August.\nMr. Hill: Oh, I see two lines. What happened in June?\nEmi: The library started a reading event for children in June. Before that, about 200 children came every month. After the event started, the number of children increased a lot. In August, it was 450. That\'s more than twice as many as in April.\nMr. Hill: Wow, that\'s great. How about adults?\nEmi: The number of adults did not change much. About 300 adults came every month. But in August, fewer adults came than in July because many of them went on trips.\nMr. Hill: I see. The event was a big success.\nEmi: Yes. The library is going to have another event for adults in autumn.',
    chart: { type: 'line', title: 'ミドリ図書館の来館者数（4月〜8月）', unit: '人', labels: ['4月', '5月', '6月', '7月', '8月'], series: [{ name: 'A', values: [300, 290, 310, 320, 280] }, { name: 'B', values: [200, 210, 320, 400, 450] }] },
    guide: [
      { step: 1, text: 'タイトルから、4月〜8月の図書館の〔①〕数を表す折れ線グラフ。単位は「人」で、A と B の2本の線がある。', blanks: ['来館者'] },
      { step: 2, text: '子どもについては increased a lot と、more than 〔②〕 as many as in April という表現がある。おとなについては did not change much がある。', blanks: ['twice'] },
      { step: 3, text: '8月に450人まで大きく増えている〔③〕が子ども、300人前後で変化が小さい〔④〕がおとな。', blanks: ['B', 'A'] },
      { step: 3, text: '月ごとにくらべると、5月は B 210人 < A 290人、6月は B 320人 > A 310人。はじめて上回ったのは〔⑤〕月。', blanks: ['6'] },
    ],
    answer: 'A：おとな　B：子ども／6月',
    explanation: '子どもは「大きく増え、8月は450人（4月の200人の2倍以上）」、おとなは「あまり変わらず約300人、8月は7月より少ない」。これに合うのは B が子ども、A がおとなです。6月に B（320人）が A（310人）をはじめて上回ります。',
  },
  practice: [
    {
      instr: 'Ken は、クラス30人の通学方法を調べて発表しました。グラフの B に入るものを、ア〜エから1つ選びなさい。',
      body: 'I asked my classmates, "How do you come to school?" All thirty students answered. Walking is the most popular way. The number of students who come by bus is half the number of students who walk. Coming by bike is more popular than coming by bus. The number of students who come by bike is three times as large as the number of students who come by train. Our school is far from the station, so only a few students come by train. I walk to school every day. It takes about twenty minutes, but I enjoy talking with my friends on the way.',
      chart: { type: 'bar', title: 'クラスの通学方法（30人）', unit: '人', labels: ['A', 'B', 'C', 'D'], series: [{ name: '人数', values: [12, 9, 6, 3] }] },
      options: ['徒歩', '自転車', 'バス', '電車'],
      answer: 'イ',
      explanation: '最多の A（12人）が徒歩、その半分の6人の C がバス。自転車はバスより多く、電車の3倍なので、9人の B が自転車、3人の D が電車です（9＝3×3）。',
    },
    {
      instr: '次の英文はサクラ町を訪れた外国人の数についての説明です。本文中の ( ) に入る語として正しいものを、ア〜エから1つ選びなさい。',
      body: 'This graph shows the number of foreign visitors to Sakura Town from 2021 to 2025. In 2021, only 500 people from other countries visited our town. After that, the number increased every year. The biggest increase was between 2024 and 2025. In 2025, the number of visitors was ( ) times as many as in 2021.\nWhy did so many people come? One reason is our new website in English. Another reason is the old streets and the delicious local food. Many visitors say they want to come again. Our town is going to make maps in five languages next year.',
      chart: { type: 'line', title: 'サクラ町を訪れた外国人の数', unit: '人', labels: ['2021年', '2022年', '2023年', '2024年', '2025年'], series: [{ name: '外国人の訪問者', values: [500, 800, 1200, 1500, 2000] }] },
      options: ['two', 'three', 'four', 'five'],
      answer: 'ウ',
      explanation: '2021年は500人、2025年は2000人なので 2000÷500＝4倍。グラフでも毎年増え、いちばん大きく増えたのは2024年→2025年（＋500人）で、本文と一致します。',
    },
    {
      instr: '次の英文は、ある中学校の生徒が1日にスマートフォンを使う平均時間について、先生が説明したものです。本文中の ( A ) に入る英語1語と、( B ) に入る数を書きなさい。',
      body: 'Look at this graph. It shows how long students in our school use smartphones in a day on weekdays and on weekends. First-year students use them for 60 minutes on weekdays and twice as long on weekends. Students in the ( A ) grade use them the longest on both weekdays and weekends. On weekends, they use smartphones for ( B ) minutes. That is almost twice as long as on weekdays. Third-year students use them for a shorter time on weekends than the other grades. Many of them say that they are busy studying for their entrance exams. Smartphones are useful, but please be careful not to use them too much.',
      chart: { type: 'bar', title: 'スマートフォンを使う1日の平均時間', unit: '分', labels: ['1年生', '2年生', '3年生'], series: [{ name: '平日', values: [60, 80, 70] }, { name: '休日', values: [120, 150, 100] }] },
      answer: 'A：second　B：150',
      explanation: '平日（80分）も休日（150分）もいちばん長いのは2年生なので A は second。休日の2年生は150分で、平日の80分の「ほぼ2倍」です。',
    },
  ],
});

// ---------------------------------------------------------------- 13
HOWTO_UNITS.push({
  no: 13, part: '読解編', title: '資料を読み取る問題',
  intro: 'ポスター・時刻表・料金表などの資料と対話を読み、必要な情報を取り出す形式です。＊印の注意書きや、対話の中に出てくる曜日・年齢・時間などの条件を見落とすミスがとても多くなります。',
  steps: [
    { title: '何を問われているか確かめる！', text: '問いが「だれ」「いつ」「いくら」「どれ」のどれをたずねているかを先に確認し、答えの形（金額・時刻・記号など）を決めておく。' },
    { title: '必要な行・列と注意書きを探す！', text: '資料の中から、問いに関係する行と列だけを探す。＊印の注意書き（無料・割引・〜は休み など）と、対話の中の条件（曜日・年齢・都合）も必ずチェックする。' },
    { title: '計算・比較して確かめる！', text: '条件に当てはめて計算・比較する。答えを出したら、もう一度すべての条件を満たしているかを見直す。' },
  ],
  example: {
    instr: 'Ken と母親が、アオバ動物園の入園料金表を見ながら話しています。Ken の家族5人（父・母・Ken・Mai・Yuta）が日曜日に入園するとき、入園料は全部でいくらになりますか。ア〜エから1つ選びなさい。',
    body: '＊ Children under 6 are free.\n\nKen: Mom, let\'s go to Aoba Zoo this weekend. My friend said the new panda house is great.\nMother: Good idea. Your father has to work on Saturday, but he is free on Sunday. So let\'s go on Sunday.\nKen: OK. Let\'s take Mai and Yuta, too. They love animals.\nMother: Of course. Can you check the ticket prices on the website?\nKen: Sure. Here they are. The prices are different on weekdays and weekends.\nMother: Mai is eight years old, and Yuta is four. And you are fourteen.\nKen: Right. Let\'s see. How much will we pay for all of us?\nMother: Let\'s bring our lunch. Then we don\'t have to spend too much money.\nKen: Good idea. I\'ll make sandwiches for everyone.',
    table: [['', 'Weekdays', 'Weekends'], ['Adults (16 and over)', '1,200 yen', '1,500 yen'], ['Students (12–15)', '800 yen', '1,000 yen'], ['Children (6–11)', '400 yen', '500 yen']],
    options: ['3,600円', '4,500円', '5,000円', '5,500円'],
    walkthrough: [
      { step: 1, text: '問われているのは「5人の入園料の合計」＝金額。行く日は Sunday（日曜日）なので、Weekends の列を使う。' },
      { step: 2, text: '年齢を表に当てはめる。父・母は Adults、Ken（14歳）は Students、Mai（8歳）は Children。Yuta（4歳）は表にないが、＊印の Children under 6 are free（6歳未満は無料）に当たる。' },
      { step: 3, text: '1,500×2＋1,000＋500＋0＝4,500円。平日料金で計算すると3,600円、Yuta を500円で数えると5,000円になるので注意。' },
    ],
    answer: 'イ',
  },
  check: {
    instr: 'Aya と Ben が、ミドリ市民センターの教室のポスターを見ながら話しています。Aya が受けることにした教室はどれですか。また、Aya が払う1回分の料金はいくらですか。',
    body: '＊ Junior high school students: 100 yen off each class.\n＊ Cooking class: Please bring an apron.\n\nAya: Ben, look at this poster. I want to take a class at Midori Community Center.\nBen: Sounds fun. Which class are you interested in?\nAya: I like cooking and music. Dancing looks fun, too.\nBen: How about the cooking class?\nAya: I can\'t. I have tennis practice after school on Tuesdays and Thursdays.\nBen: Then what about the guitar class? It\'s on Wednesday.\nAya: Hmm, I have to be home by seven on weekdays. It takes twenty minutes to walk from the center to my house.\nBen: I see. Then you can take only one class.\nAya: You\'re right. I\'ll take it. I\'m a junior high school student, so it\'s a little cheaper for me.',
    table: [['Class', 'Day', 'Time', 'Fee (1 time)'], ['Cooking', 'Tuesday', '4:00–5:30', '500 yen'], ['Guitar', 'Wednesday', '6:00–7:30', '800 yen'], ['English Conversation', 'Thursday', '4:30–6:00', '300 yen'], ['Dance', 'Saturday', '10:00–11:30', '600 yen']],
    guide: [
      { step: 1, text: '問われているのは「どの教室か」と「1回の〔①〕」の2つ。', blanks: ['料金'] },
      { step: 2, text: 'Aya はテニスの練習がある〔②〕曜日と木曜日の教室は受けられない。だから Cooking と English Conversation は×。', blanks: ['火'] },
      { step: 2, text: '平日は〔③〕時までに家に帰らなければならないので、7:30 に終わる Guitar も×。', blanks: ['7'] },
      { step: 3, text: '残るのは土曜日の〔④〕教室。料金600円から、＊印の中学生割引〔⑤〕円を引いて500円。', blanks: ['ダンス', '100'] },
    ],
    answer: 'ダンス（Dance）教室・500円',
    explanation: '火曜・木曜はテニス、平日は7時までに帰宅が必要という条件から、残るのは土曜日の Dance だけです。600円から中学生割引の100円を引いて500円になります。',
  },
  practice: [
    {
      instr: 'Lisa と Kota が、ミナミ駅からサクラ公園へ行くバスの時刻表を見ながら話しています。2人が乗るバスを、ア〜エから1つ選びなさい。',
      body: '＊ No.2 does not run on Sundays.\n\nLisa: Kota, the flower festival at Sakura Park starts at 11:15 this Sunday. Let\'s go together.\nKota: Sure. How shall we get there?\nLisa: We can take a bus from Minami Station. Here is the timetable.\nKota: I have a piano lesson on Sunday morning. It finishes at 9:20, and I can get to the station at 9:35.\nLisa: OK. I want to get to the park at least thirty minutes before the festival starts. Many people will come, and I want to get a good place to see the flowers.\nKota: Then let\'s take the first bus we can catch. Oh, wait. Look at the note under the timetable.',
      table: [['Bus', 'Leaves Minami Station', 'Arrives at Sakura Park'], ['No.1', '9:10', '9:55'], ['No.2', '9:40', '10:25'], ['No.3', '10:05', '10:40'], ['No.4', '10:20', '10:55']],
      options: ['No.1', 'No.2', 'No.3', 'No.4'],
      answer: 'ウ',
      explanation: 'Kota が駅に着くのは9:35なので No.1 には乗れません。No.2 は＊印より日曜日は運行なし。祭りが始まる11:15の30分前（10:45）までに着く必要があるので、10:40着の No.3 に乗ります（No.4 は10:55着で間に合わない）。',
    },
    {
      instr: 'Yumi と Sam がハンバーガー店で注文しています。2人が払う代金は合わせていくらですか。ア〜エから1つ選びなさい。',
      body: '＊ Set Menu: a hamburger or a cheeseburger + French fries + a drink → 100 yen off\n\nClerk: Hello. What would you like?\nYumi: I\'d like a cheeseburger, French fries, and an orange juice.\nClerk: Then you can get the Set Menu. It\'s cheaper.\nYumi: Great. Sam, what do you want?\nSam: I\'m not so hungry. I\'ll have a hamburger and a salad. And an orange juice, please.\nClerk: Sure. Would you like French fries, too?\nSam: No, thank you.\nClerk: OK. Please wait a minute.',
      table: [['Menu', 'Price'], ['Hamburger', '450 yen'], ['Cheeseburger', '500 yen'], ['French fries', '250 yen'], ['Salad', '300 yen'], ['Orange juice', '200 yen'], ['Tea', '150 yen']],
      options: ['1,700円', '1,800円', '1,900円', '2,000円'],
      answer: 'イ',
      explanation: 'Yumi はセットの条件（バーガー＋ポテト＋飲み物）を満たすので 500＋250＋200－100＝850円。Sam はポテトがないのでセットにならず 450＋300＋200＝950円。合計 850＋950＝1,800円です。',
    },
    {
      instr: '3年生の Riku が、英語スピーチコンテストのポスターを見ながら White 先生と話しています。Riku はいつまでに申しこみ、スピーチを何分くらいにすればよいですか。日本語で答えなさい。',
      body: '＊ The contest will be held on November 3 at City Hall.\n＊ Please send your speech to the city office by e-mail.\n\nRiku: Ms. White, I want to join this English speech contest.\nMs. White: Great! You\'re in the third year, right? Did you read the poster carefully?\nRiku: Yes. My speech will be about my dream of becoming a doctor. I\'ve already written it, and it\'s about three minutes long.\nMs. White: Hmm. Then you need to add more things to your speech.\nRiku: I see. I\'ll write about my experience at the hospital, too.\nMs. White: Good idea. Don\'t forget the deadline.',
      table: [['', 'Group A', 'Group B'], ['Students', '1st and 2nd year', '3rd year'], ['Speech time', 'about 3 minutes', 'about 5 minutes'], ['Deadline', 'October 10', 'October 15']],
      answer: '10月15日までに申しこみ、スピーチは約5分にする。',
      explanation: 'Riku は3年生なので Group B の列を見ます。締め切り（Deadline）は October 15、スピーチの長さは about 5 minutes。3分は Group A の長さなので、White 先生は内容を増やすように言っています。',
    },
  ],
});

// ---------------------------------------------------------------- 14
HOWTO_UNITS.push({
  no: 14, part: '読解編', title: '英語の問いに英語で答える問題',
  intro: '本文の内容についての英語の質問に、英語の文で答える形式です。答えの場所は見つけても、主語を代名詞にかえていなかったり、問いと時制がずれていたりして減点されることが多くなります。',
  steps: [
    { title: '疑問詞と時制を見る！', text: '問いの疑問詞（What, Why, Who, Where, How many など）と、動詞の時制・主語を確認する。Why には Because …、did の問いには過去形、Is / Do / Did の問いには Yes / No で答える。' },
    { title: '答えの文を本文で探す！', text: '問いの中の語句（名詞や動詞）と同じ語、または似た表現を本文で探し、その文と前後の文を読む。so や because の前後に理由があることが多い。' },
    { title: '主語・代名詞・時制を整えて書く！', text: '本文をそのまま写さず、問いに合わせて主語を代名詞（he, she, they）にし、時制をそろえる。my や I など、話し手の言葉の代名詞にも注意する。' },
  ],
  example: {
    instr: '次の英文を読んで、(1)・(2) の問いに英語で答えなさい。',
    body: 'Haruto is a junior high school student. He has been on the soccer team for two years. Last spring, he hurt his leg during a game, and he could not play for two months. He felt very sad because he could not practice with his teammates.\nOne day, his coach said to him, "Haruto, you can\'t run now, but you can still help the team." So Haruto started to watch the team\'s practice carefully every day. He wrote notes about each player\'s good points and the things they needed to improve. He gave the notes to his teammates after practice.\nHis teammates were very glad, and the team became stronger. When Haruto came back to the team in summer, he understood his teammates better than before. Now he says, "Getting hurt was hard, but it taught me an important thing."\n\n(1) Why did Haruto feel very sad?\n(2) What did Haruto do after practice?',
    walkthrough: [
      { step: 1, text: '(1) は Why の問いなので Because … で答える。(2) は What did Haruto do の問いなので「何をしたか」を過去形で答える。' },
      { step: 2, text: '(1) は問いの feel very sad を本文で探すと、He felt very sad because he could not practice with his teammates. がある。(2) は after practice を探すと、He gave the notes to his teammates after practice. がある。' },
      { step: 3, text: '(1) は because 以下を使い、Because he could not practice with his teammates. と書く。(2) は主語を He にし、過去形 gave を使って He gave the notes to his teammates. と書く。' },
    ],
    answer: '(1) Because he could not practice with his teammates.　(2) He gave the notes to his teammates.',
  },
  check: {
    instr: '次の英文を読んで、(1)・(2) の問いに英語で答えなさい。',
    body: 'Lucy is from Australia. She came to Japan last year, and now she lives with the Sato family in Kyoto. Last Sunday, Lucy went to a temple with Mrs. Sato and her daughter, Nana. At the temple, Lucy saw many people writing on small wooden boards. Nana told her, "They are called ema. People write their wishes on them and hang them at the temple." Lucy wanted to try it, so she bought one and wrote, "I want to speak Japanese well."\nAfter they came home, Mrs. Sato showed Lucy an old ema. Mrs. Sato wrote it when she was a junior high school student. It said, "I want to go abroad someday." Mrs. Sato said, "My wish came true. I studied in Australia when I was a university student." Lucy was surprised and said, "Then my wish will come true, too. I\'ll study hard."\n\n(1) Where did Lucy go last Sunday?\n(2) Why did Lucy buy an ema?',
    guide: [
      { step: 1, text: '(1) は Where ＋ did の問いなので〔①〕をたずねている。答えには過去形の動詞〔②〕を使う。', blanks: ['場所', 'went'] },
      { step: 2, text: '(1) の答えは、本文の Last Sunday, Lucy went to 〔③〕 with Mrs. Sato and her daughter の部分。', blanks: ['a temple'] },
      { step: 2, text: '(2) の答えは、本文の Lucy wanted to try it, 〔④〕 she bought one の部分。この語の前が「買った理由」。', blanks: ['so'] },
      { step: 3, text: '(2) は Why の問いなので〔⑤〕で始め、Lucy を代名詞〔⑥〕にかえて書く。', blanks: ['Because', 'she'] },
    ],
    answer: '(1) She went to a temple (with Mrs. Sato and Nana).　(2) Because she wanted to try it.',
    explanation: '(1) は Where did … go? なので She went to a temple. と過去形で答えます。(2) は so の前の「やってみたかった」が理由です。it は「絵馬に願いを書くこと」を指し、Because she wanted to write her wish on an ema. としてもかまいません。',
  },
  practice: [
    {
      instr: '次の英文を読んで、(1)・(2) の問いに英語で答えなさい。',
      body: 'Daiki\'s grandfather lives in a small village. He is good at making toys from bamboo. When Daiki was a child, his grandfather often made bamboo dragonflies for him.\nLast month, the village had an event for children, and Daiki\'s grandfather taught them how to make bamboo toys. About fifty children came to the event. At first, many of them could not make their toys well, but his grandfather helped them kindly. When their toys flew in the sky, the children looked very happy.\nDaiki helped his grandfather at the event. He thought, "Children today don\'t often play with handmade toys. I want to learn how to make them and teach other people, too."\n（注）dragonfly(dragonflies) とんぼ　handmade 手作りの\n\n(1) What is Daiki\'s grandfather good at?\n(2) How many children came to the event?',
      answer: '(1) He is good at making toys from bamboo.　(2) About fifty children came (to the event).',
      explanation: '(1) は現在形の is でたずねているので He is good at … と現在形で答えます。(2) は How many なので数を答え、came と過去形にします。',
    },
    {
      instr: '次の対話を読んで、(1)・(2) の問いに英語で答えなさい。',
      body: 'Kenji: Emma, what are you going to do this weekend?\nEmma: I\'m going to have a picnic with my host family.\nKenji: That sounds fun. Where are you going?\nEmma: To Minato Park. My host father says the cherry blossoms are beautiful there now.\nKenji: Are you going to take lunch?\nEmma: Yes. My host mother taught me how to make onigiri last week, so I\'ll make some for everyone.\nKenji: Wow, you can make onigiri! What will you put in them?\nEmma: Salmon and umeboshi. I didn\'t like umeboshi at first, but now I love it.\nKenji: Great. Please tell me about the picnic next week.\n\n(1) What is Emma going to do this weekend?\n(2) Who taught Emma how to make onigiri?',
      answer: '(1) She is going to have a picnic with her host family.　(2) Her host mother did.',
      explanation: '(1) は be going to の問いなので She is going to … で答え、my host family は her host family にかえます。(2) は Who が主語の過去の問いなので Her host mother did. と答えます（Her host mother taught her. でも可）。',
    },
    {
      instr: '次の英文を読んで、(1)・(2) の問いに英語で答えなさい。',
      body: 'Sho joined the English speech contest in his city last month. He practiced his speech every day for three weeks. His ALT, Ms. Green, listened to his speech many times and gave him advice.\nOn the day of the contest, Sho was very nervous because there were more than two hundred people in the hall. He did his best, but he didn\'t win the contest. He got third place. He was a little disappointed. However, after the contest, a girl from another school came to him and said, "Your speech was really interesting. I want to visit your town someday." Sho was very happy because someone enjoyed his speech. He thought, "I want to keep studying English and make more friends around the world."\n（注）nervous 緊張して　disappointed がっかりして\n\n(1) Did Sho win the speech contest?\n(2) Why was Sho very happy after the contest?',
      answer: '(1) No, he didn\'t.　(2) Because someone (a girl from another school) enjoyed his speech.',
      explanation: '(1) は Did の問いなので Yes / No で答えます。本文に he didn\'t win とあるので No, he didn\'t. です。(2) は本文の Sho was very happy because … の because 以下を使って答えます。',
    },
  ],
});

// ---------------------------------------------------------------- 15
HOWTO_UNITS.push({
  no: 15, part: '読解編', title: '本文に合う選択肢を選ぶ問題',
  intro: '本文の内容と合う英文を選択肢から選ぶ形式（内容一致）です。選択肢は本文の語句を少しだけ変えて作られているので、数字・人物・否定などの細かいちがいを見落とすと、まちがった選択肢を選んでしまいます。',
  steps: [
    { title: '選択肢のキーワードをおさえる！', text: '各選択肢を先に読み、人物・数字・時・場所・動詞など、判断のカギになる語に印をつける。' },
    { title: '本文の該当箇所を探す！', text: 'キーワードと同じ語や、言いかえた表現を本文から探し、その文と前後の文をていねいに読む。' },
    { title: '細かい点まで照らし合わせる！', text: '数字、だれがしたか、否定（not, never, stopped）、時（already, someday, next）までくらべて、「合う」「合わない」「本文に書かれていない」を判断する。' },
  ],
  example: {
    instr: '次の英文の内容に合うものを、ア〜エから1つ選びなさい。',
    body: 'Mei is a second-year student at Hikari Junior High School. She is a member of the brass band. Every year in November, the brass band plays music at a hospital near the school.\nThis year, Mei and the other members practiced for one month before the concert. They chose songs that older people know well. On the day of the concert, about sixty people came to listen. Some of them sang with the band, and an old man cried during the last song. After the concert, a nurse said to Mei, "Many people here can\'t go out, so they were waiting for this day."\nMei didn\'t know that before. She thought, "Music can give people energy. I want to visit more places and play for many people." Now she is planning a concert at a nursing home with her friends next spring.\n（注）brass band 吹奏楽部　nurse 看護師　nursing home 老人ホーム',
    options: [
      'The brass band plays music at the hospital every month.',
      'About sixty people came to the concert, and some of them sang with the band.',
      'A nurse cried during the last song.',
      'Mei has already played at a nursing home with her friends.',
    ],
    walkthrough: [
      { step: 1, text: 'キーワードに印をつける。ア every month、イ about sixty / sang、ウ nurse / cried、エ has already played / nursing home。' },
      { step: 2, text: '本文で探す。ア → Every year in November、イ → about sixty people came … Some of them sang with the band、ウ → an old man cried during the last song、エ → she is planning a concert at a nursing home … next spring。' },
      { step: 3, text: 'アは「毎月」ではなく「毎年11月」で×。ウは泣いたのは看護師ではなく an old man で×（人物のちがい）。エは「もう演奏した」ではなく「来年の春に計画中」で×（時のちがい）。イは数も内容も一致して○。' },
    ],
    answer: 'イ',
  },
  check: {
    instr: '次の英文の内容に合うものを、ア〜エから1つ選びなさい。',
    body: 'Kaito lives in a small town by the sea. Last year, he joined a beach cleaning event for the first time. He was shocked because there was a lot of plastic on the beach. A staff member told him that most of the plastic came from cities far away and was carried by rivers and the sea.\nAfter the event, Kaito wanted to tell more people about this problem. He made a poster with photos of the beach and put it up in his school. His classmates were interested in it, and fifteen of them joined the next event with him. Kaito also stopped buying drinks in plastic bottles. Now he always carries his own water bottle.\nKaito says, "One person can\'t clean the whole sea. But if many people do small things, the sea will be clean again someday."\n（注）shocked ショックを受けて　staff member スタッフ',
    options: [
      'Kaito joined beach cleaning events many times before last year.',
      'Most of the plastic on the beach came from Kaito\'s town.',
      'Kaito made a poster, and some of his classmates joined the next event.',
      'Kaito still buys drinks in plastic bottles.',
    ],
    guide: [
      { step: 1, text: 'キーワードに印をつける。アは many times、イは「プラスチックがどこから来たか」、エは still buys … 〔①〕。', blanks: ['plastic bottles'] },
      { step: 2, text: 'イに対応する本文は most of the plastic came from cities 〔②〕 away。町の近くではないので×。', blanks: ['far'] },
      { step: 3, text: 'アは本文の for the 〔③〕 time と合わないので×。エは本文の Kaito also 〔④〕 buying drinks in plastic bottles と合わないので×。', blanks: ['first', 'stopped'] },
      { step: 3, text: 'ウは、本文の He made a poster と 〔⑤〕 of them joined the next event に一致するので○。', blanks: ['fifteen'] },
    ],
    answer: 'ウ',
    explanation: 'アは「初めて参加した」、イは「遠くの都市から来た」、エは「買うのをやめた」と本文に合いません。ウはポスターを作り、クラスメート15人（some of his classmates）が次のイベントに参加したことと一致します。',
  },
  practice: [
    {
      instr: '次の英文の内容に合うものを、ア〜エから1つ選びなさい。',
      body: 'Mr. Jones is an ALT at Kita Junior High School. He came to Japan from Canada three years ago. He loves riding his bike, and on weekends he often rides along the river near his apartment.\nLast month, he rode his bike from his town to Lake Biwa with two friends. It took two days. On the way, they stayed at a small hotel run by an old couple. The couple didn\'t speak English, but Mr. Jones talked with them in Japanese. They gave him some homemade pickles, and he liked them very much.\nIn his English class, Mr. Jones showed his students some photos of the trip. He said, "When you travel by bike, you can meet many kind people. Please try it someday."\n（注）run by 〜 〜が経営する　couple 夫婦　pickles つけもの',
      options: [
        'Mr. Jones came to Japan from Canada two years ago.',
        'Mr. Jones rode his bike to Lake Biwa alone.',
        'The old couple talked with Mr. Jones in English.',
        'Mr. Jones showed his students some photos of his trip.',
      ],
      answer: 'エ',
      explanation: 'アは three years ago なので×（数字）。イは with two friends なので×（だれと）。ウは The couple didn\'t speak English で、日本語で話したので×（否定）。エは本文最終段落と一致します。',
    },
    {
      instr: '次の対話の内容に合うものを、ア〜エから1つ選びなさい。',
      body: 'Nao: Hi, Mark. What did you do during the winter vacation?\nMark: I went back to America and spent Christmas with my family. It was snowy there.\nNao: Sounds nice. Did you do anything special?\nMark: Yes. My grandmother taught me how to make apple pie. It was difficult, but my family said it was delicious. How about you, Nao?\nNao: I visited my aunt in Hokkaido. I tried skiing for the first time.\nMark: Wow! Was it fun?\nNao: Yes, but I fell down many times. My cousin skis very well, so she helped me. By the last day, I could ski down a small hill without falling.\nMark: Great. I have never skied in Japan. I want to try it.\nNao: Then let\'s go skiing together next winter.',
      options: [
        'Mark made an apple pie with his mother.',
        'Nao went skiing for the first time in Hokkaido.',
        'Nao\'s cousin is a ski teacher in Hokkaido.',
        'Mark has skied in Japan many times.',
      ],
      answer: 'イ',
      explanation: 'アは教えてくれたのが grandmother なので×（人物）。ウはいとこがスキーが上手とはあるが、先生だとは書かれていません（本文にない）。エは I have never skied in Japan なので×（否定）。イは I tried skiing for the first time と一致します。',
    },
    {
      instr: '次の英文の内容に合うものを、ア〜オから2つ選びなさい。',
      body: 'In Rin\'s school, students eat school lunch in their classrooms. One day, Rin noticed that a lot of food was left in her class. She asked her teacher about it. Her teacher said, "In our school, about 20 kilograms of food is thrown away every day."\nRin was surprised. She talked about this problem with the other members of the student council. They decided to do a campaign called "Clean Plate Week." During the week, they made posters and talked about food loss on the school radio during lunch time. They also asked the cooks to tell students about their hard work of making school lunch.\nAfter the campaign, the amount of food left in the school became about half. Rin was glad, but she thinks the campaign was only the first step. She wants students to keep thinking about food every day.\n（注）thrown away 捨てられる　student council 生徒会　campaign 運動　food loss 食品ロス　cook 調理員　amount 量',
      options: [
        'Rin\'s teacher told her how much food was thrown away every day in the school.',
        'Rin started the campaign alone without help from anyone.',
        'The student council talked about food loss on the school radio.',
        'After the campaign, no food was left in Rin\'s school.',
        'Rin thinks the campaign solved the problem completely.',
      ],
      answer: 'ア・ウ',
      explanation: 'アは先生が「毎日約20kg捨てられている」と教えたことと一致。ウは生徒会が校内放送で食品ロスについて話したことと一致。イは生徒会の仲間と行ったので×、エは「約半分になった」ので×、オは「最初の一歩にすぎない」と考えているので×です。',
    },
  ],
});
