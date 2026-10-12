// 入試対策: 解き方を学ぶプリント(オリジナル)。
// 単元6〜10(文法・作文編/読解編)。本文・問題はすべてオリジナル。
var HOWTO_UNITS = typeof HOWTO_UNITS !== 'undefined' ? HOWTO_UNITS : [];

// ───────────────────────────────────────────── 6
HOWTO_UNITS.push({
  no: 6, part: '文法・作文編', title: '条件に合う英文を考える問題',
  intro: "ポスターや表などの資料を読み取り、「〜を入れて」「〇語以上で」などの条件を守って英文を書く問題です。英語の正しさだけでなく、資料の情報を正しく使えているか・条件をすべて満たしているかで点が決まります。",
  steps: [
    { title: '資料から必要な情報を探す！', text: "問題文と相手の発言を読み、「何を伝えればよいか」を確かめてから、資料の中で使う情報(日時・場所・持ち物など)に印をつけます。相手の都合や好みもヒントになります。" },
    { title: '書く内容を整理する！', text: "いきなり英語にせず、「結論(すすめるもの・答え)→理由や説明」の順に、日本語で短くメモします。条件で求められている項目がすべて入っているか、ここで確かめます。" },
    { title: '条件どおりの英文にして確かめる！', text: "知っている表現で書けるように言いかえながら英文にします。最後に、条件(入れる内容・文の数・語数)、主語と動詞、時制、つづり、ピリオドを1つずつチェックします。" },
  ],
  example: {
    instr: "あなたは留学生のトム(Tom)から、市立図書館のイベントについて相談されました。表とトムの発言を読み、トムにすすめるイベントを伝える英文を書きなさい。\n条件:①すすめるイベントの名前と、行われる日時を入れること ②すすめる理由を1つ入れること ③2文以上、合計15語以上で書くこと",
    body: "Tom: I want to join an event at the city library next weekend. I like drawing pictures, but I can't get up early on weekends. Which event should I join?",
    table: [
      ['イベント', '日時', '内容'],
      ['Picture Book Time', '5月10日(土) 9:00〜10:00', '絵本の読み聞かせ'],
      ['Book Cover Making', '5月11日(日) 14:00〜15:30', '好きな本のカバーを絵でかざる'],
      ['Library Tour', '5月11日(日) 8:30〜9:30', '図書館の中を見学する'],
    ],
    walkthrough: [
      { step: 1, text: "トムの発言から条件を読み取ります。「絵をかくのが好き」「週末は早起きできない」の2点です。表を見ると、朝早い Picture Book Time(9:00) と Library Tour(8:30) は合いません。午後に行われ、絵をかく内容の Book Cover Making(5月11日 14:00) が答えになります。" },
      { step: 2, text: "日本語でメモします。結論「5月11日の午後2時の Book Cover Making に参加するといい」→ 理由「絵をかくのが好きだから、自分の本のカバーを作って楽しめる」。条件①(名前・日時)と②(理由)がそろっていることを確認します。" },
      { step: 3, text: "「〜するといい」は You should 〜.、日付は on May 11、時刻は at two in the afternoon で表せます。理由は You like drawing pictures, so 〜. とつなぎます。書いた後、2文以上か・15語以上か(下の答えは27語)・May の大文字や複数形の s などを確かめます。" },
    ],
    answer: "You should join Book Cover Making at two in the afternoon on May 11. You like drawing pictures, so you can enjoy making your own book cover.",
  },
  check: {
    instr: "留学生のエマ(Emma)が、土曜日のボランティア活動について相談しています。表とエマの発言を読み、エマに合う活動を伝える英文を書きなさい。\n条件:①活動の名前と場所を入れること ②持ってくる物を伝えること ③2文以上で書くこと",
    body: "Emma: I want to do volunteer work this Saturday. I have a piano lesson every Saturday morning. I love children, so I want to do something for them.",
    table: [
      ['活動', '場所', '時間', '持ち物'],
      ['Park Cleaning', 'Midori Park', '8:00〜10:00', 'gloves'],
      ['Reading to Children', 'Aoba Kids Library', '13:00〜14:00', 'a picture book'],
      ['Flower Planting', 'Aoba Station', '9:00〜11:00', 'a towel'],
    ],
    guide: [
      { step: 1, text: "エマは土曜日の〔①〕にピアノのレッスンがあるので、午後の活動を選ぶ。また、エマは〔②〕が大好きだと言っている。" , blanks: ['午前(朝)', '子ども'] },
      { step: 1, text: "この2つに合う活動は〔③〕で、場所は Aoba Kids Library。", blanks: ['Reading to Children'] },
      { step: 2, text: "メモ:結論「Aoba Kids Library の Reading to Children がいい」→ 説明「〔④〕を持ってきて」。条件①②が入っているか確かめる。", blanks: ['絵本(a picture book)'] },
      { step: 3, text: "「〜を持ってきてください」は Please 〔⑤〕 a picture book. で表す。最後に2文以上あるか、つづりやピリオドを確かめる。", blanks: ['bring'] },
    ],
    answer: "You should try Reading to Children at Aoba Kids Library. It starts at one in the afternoon. Please bring a picture book.",
    explanation: "午前中は予定があり、子どもが好きというエマに合うのは、午後に行われる Reading to Children です。名前・場所(条件①)と持ち物(条件②)を必ず入れましょう。時刻(It starts at one.)は条件にはありませんが、入れると親切な答えになります。",
  },
  practice: [
    {
      instr: "グラフは、あるクラス(40人)で「校外学習で行きたい場所」を調べた結果です。この結果を説明する英文を書きなさい。\n条件:①最も人気のある場所と、その人数を入れること ②2番目に人気のある場所を入れること ③2文で書くこと",
      body: "（注）amusement park 遊園地 / aquarium 水族館",
      chart: { type: 'bar', title: '校外学習で行きたい場所', unit: '人', labels: ['zoo', 'aquarium', 'amusement park', 'museum'], series: [{ name: '人数', values: [8, 12, 15, 5] }] },
      answer: "Fifteen students want to go to the amusement park, and it is the most popular. The aquarium is the second most popular place.",
      explanation: "グラフで一番高いのは amusement park(15人)、次が aquarium(12人)です。「最も人気がある」は the most popular、「2番目に〜」は the second most popular で表せます。数字は文の最初に来るときは Fifteen のように英語のつづりで書きます。",
    },
    {
      instr: "あなたは、友達のケン(Ken)を英語キャンプにさそうメッセージを書きます。ポスターとケンの発言を読み、英文を書きなさい。\n条件:①キャンプでできることを2つ入れること ②いっしょに参加しようとさそう文を入れること ③20語程度で書くこと",
      body: "Ken: I'm interested in the English camp, but I don't know what we can do there.",
      table: [
        ['Summer English Camp', ''],
        ['日にち', '8月3日〜5日'],
        ['場所', 'Aoba Lodge'],
        ['参加費', '5,000円'],
        ['できること', '料理・ハイキング・英語のゲーム'],
      ],
      answer: "At the camp, we can cook dinner and go hiking. We can also play English games. Why don't we join it together? / We can cook and play English games at the camp. It will be a lot of fun. Let's join it together, Ken!",
      explanation: "ケンが知りたいのは「キャンプで何ができるか」なので、ポスターの「できること」から2つ以上選びます。さそう文は Why don't we 〜? や Let's 〜. が使えます。日にちや参加費は、ケンの質問に関係がないので入れなくてもかまいません。",
    },
    {
      instr: "海外から来た旅行者に、駅からスタジアムまでの行き方を質問されました。表と旅行者の発言を読み、すすめる行き方を伝える英文を書きなさい。\n条件:①バスか電車のどちらかをすすめること ②because を使って理由を書くこと ③2文以上で書くこと",
      body: "Traveler: Excuse me. I want to go to the stadium. The soccer game starts in twenty minutes. How should I go there?",
      table: [
        ['行き方', 'かかる時間', '料金'],
        ['バス', '30分', '200円'],
        ['電車', '15分', '300円'],
      ],
      answer: "You should take the train because it takes only fifteen minutes. If you take the bus, you will be late for the game.",
      explanation: "試合は20分後に始まるので、30分かかるバスでは間に合いません。15分で着く電車をすすめます。料金はバスの方が安いですが、この旅行者が困っているのは時間です。相手の発言から「何を一番大切にしているか」を読み取ることがポイントです。",
    },
  ],
});

// ───────────────────────────────────────────── 7
HOWTO_UNITS.push({
  no: 7, part: '文法・作文編', title: '自分の考えを英語で書く問題',
  intro: "質問に対して、自分の考えと理由を20〜40語程度で書く問題です。考えがなかなか決まらなかったり、語数が足りなくなったりしやすいので、「書きやすい方」を選ぶことと、決まった型で書くことが大切です。",
  steps: [
    { title: '最初に立場を決める！', text: "賛成か反対か、AとBのどちらを選ぶかを最初に決め、1文目で書きます。本当の気持ちより「理由を英語で書きやすい方」を選ぶのがコツです。" },
    { title: '理由を2つ書く！', text: "First, 〜. Second, 〜. や because 〜 を使って理由を2つ書きます。理由は「楽しい」だけで終わらせず、「〜できるから」と具体的にすると説得力が出ます。" },
    { title: '文法・つづり・語数を確かめる！', text: "主語と動詞、三人称単数の s、時制、名詞の複数形、つづりを確かめます。最後に語数を数え、条件の範囲に入っているかチェックします(ピリオドやコンマは数えません)。" },
  ],
  example: {
    instr: "次の質問に対するあなたの考えを、理由を2つ含めて25語以上35語以内の英語で書きなさい。",
    body: "Question: Is it a good idea for students to clean their classrooms by themselves?",
    walkthrough: [
      { step: 1, text: "賛成・反対のどちらでも書けますが、理由を思いつきやすい方を選びます。ここでは賛成(Yes)の例で考えます。1文目は Yes, I think it is a good idea. と、質問の言葉を使って書くと簡単です。" },
      { step: 2, text: "理由を日本語で2つ考えます。①使う物を大切にすることを学べる ②クラスメートと協力できる。それぞれ First, we can learn to take care of the things we use. / Second, we can work together with our classmates. と英語にします。" },
      { step: 3, text: "can の後ろが動詞の原形になっているか、things や classmates の s を忘れていないかを確かめます。語数を数えると下の賛成の例は28語、反対の例は34語で、どちらも25〜35語に入っています。" },
    ],
    answer: "Yes, I think it is a good idea. First, we can learn to take care of the things we use. Second, we can work together with our classmates. / No, I don't think so. First, students are very busy with studying and club activities. Second, cleaning is not easy, so it is better to ask people who know how to do it well.",
  },
  check: {
    instr: "次の質問に対するあなたの考えを、理由を2つ含めて25語以上35語以内の英語で書きなさい。",
    body: "Question: Which do you want to live in in the future, a big city or a small town?",
    guide: [
      { step: 1, text: "まず、どちらに住みたいかを1文で書く。大都市を選ぶなら、質問の文を使って I want to 〔①〕 in a big city. となる。", blanks: ['live'] },
      { step: 2, text: "理由1の前には〔②〕、理由2の前には〔③〕をつけると、理由が2つあることがはっきりする。", blanks: ['First,', 'Second,'] },
      { step: 2, text: "理由1「お店がたくさんある」は There 〔④〕 many shops. と書ける。many shops が複数なので be動詞に注意。", blanks: ['are'] },
      { step: 3, text: "最後に語数を数え、〔⑤〕語以上35語以内に入っているか確かめる。", blanks: ['25'] },
    ],
    answer: "I want to live in a big city. First, there are many shops, so I can buy anything I want. Second, it is easy to go to many places by train and bus. / I want to live in a small town. First, I like quiet places with a lot of nature. Second, people in small towns often know each other well, so I can make many friends.",
    explanation: "どちらを選んでも正解です。大都市なら「店が多い」「交通が便利」、小さな町なら「自然が多い」「人が親しい」などが書きやすい理由です。There is / are は後ろの名詞の数で決めます。上の例はそれぞれ33語・34語です。",
  },
  practice: [
    {
      instr: "次の質問に対するあなたの答えを、理由を含めて20語以上30語以内の英語で書きなさい。",
      body: "Question: Which season do you like the best?",
      answer: "I like summer the best because I can swim in the sea with my friends. Also, summer vacation is long, so I can read many books and visit my grandparents. / I like fall the best. First, the weather is nice, so I can enjoy running outside. Second, there are many delicious foods in fall, like apples and sweet potatoes.",
      explanation: "1文目は質問の文を使って I like 〜 the best. と書けば簡単です。理由は「その季節にできること」を書くと具体的になります。季節名は小文字で書きます(summer, fall)。上の例はそれぞれ30語・29語です。",
    },
    {
      instr: "あなたの学校のALTのスミス先生(Ms. Smith)は、先月日本に来たばかりです。次の質問に、理由を含めて20語以上30語以内の英語で答えなさい。",
      body: "Ms. Smith: I want to enjoy my life in Japan. What should I do? Please give me some advice.",
      answer: "You should visit Kyoto because there are many old temples and beautiful gardens. You can learn a lot about Japanese history and culture there. / I think you should join a summer festival in our town. You can wear a yukata and enjoy traditional dances with local people.",
      explanation: "アドバイスなので、You should 〜. や I think you should 〜. で始めます。理由や、そこで「何ができるか」を You can 〜. で続けると、語数も自然にふえます。上の例はそれぞれ24語・23語です。",
    },
    {
      instr: "次の意見について、賛成か反対かを明らかにし、理由を2つ含めて25語以上35語以内の英語で書きなさい。",
      body: "Opinion: Students should read newspapers every day.",
      answer: "I agree. First, we can learn about many things happening in the world. Second, we can learn many new words, so it is good for our studies. / I don't agree. First, students are too busy to read newspapers every day. Second, we can get news on TV or the internet more quickly.",
      explanation: "1文目は I agree. か I don't agree. と短く立場を書き、First, / Second, で理由を続けます。反対の場合も「代わりにどうすればよいか」を書くと説得力が出ます。too 〜 to … は「〜すぎて…できない」の意味です。上の例はそれぞれ27語・25語です。",
    },
  ],
});

// ───────────────────────────────────────────── 8
HOWTO_UNITS.push({
  no: 8, part: '読解編', title: '下線部の内容を答える問題',
  intro: "下線部の it・this・that・them などが何を指しているかを答える問題です。選択肢で選ぶ形と、日本語で説明する形があります。下線部より後ろを読んで答えを探してしまうのが、よくある失敗です。",
  steps: [
    { title: '指す内容は直前を見る！', text: "代名詞はふつう、それより前に出てきたものを指します。まず下線部の直前の1〜2文を読みます。it・this は単数の物や前の文の内容、them・they は複数のもの、that は直前の発言を指すことが多いです。" },
    { title: '本文で当てはまる部分を探す！', text: "単数か複数か、人か物か、を手がかりに、本文から当てはまる語句や文を探して印をつけます。日本語で説明する問題では、その部分を正確に訳せるよう、文の終わりまで確認します。" },
    { title: '置きかえて意味を確かめる！', text: "見つけた語句を下線部に入れて、文の意味が通るか確かめます。日本語で答えるときは「〜こと。」「〜もの。」の形で終え、主語や「いつ・どこで」がぬけていないかも確認します。" },
  ],
  example: {
    instr: "次の英文は、中学生のハルトが英語の授業で行ったスピーチです。下線部①の it が指すものとして最も適切なものを、ア〜エから1つ選びなさい。",
    body: "Hello, everyone. Last summer, I visited my grandmother. She lives alone in a small town near the sea. One evening, she showed me an old camera. She said, 'Your grandfather bought this camera when he was twenty years old.' I was surprised because ①<u>it</u> was very heavy and looked different from the cameras we use today.\nThe next morning, my grandmother and I took the camera to the beach. She taught me how to use it. With this camera, I could not see my pictures right after I took them. I had to wait for a few days. At first, I felt that was strange. But when we finally got the pictures, I was very happy. Every picture was special to me because I took each one carefully.\nNow I take pictures with my smartphone every day, but I sometimes remember that old camera. I want to take each picture with care, like I did on that beach.",
    options: ['my grandmother\'s town', 'the old camera', 'the beach', 'my smartphone'],
    walkthrough: [
      { step: 1, text: "下線部の直前の文を見ると、She showed me an old camera. と 'Your grandfather bought this camera …' があります。it は単数の「物」を指しています。" },
      { step: 2, text: "直前に出てくる単数の物は an old camera です。さらに下線部の後ろの「とても重く、今のカメラとはちがって見えた」も、カメラの説明として合います。" },
      { step: 3, text: "it に the old camera を入れると「古いカメラはとても重く、今使うカメラとちがって見えたので驚いた」となり、意味が通ります。エの smartphone は最後の段落に出てくるので、時間の順番からも合いません。" },
    ],
    answer: 'イ',
  },
  check: {
    instr: "次の英文は、中学生のユキ(Yuki)とALTのブラウン先生(Mr. Brown)の対話です。下線部①の That が指す内容を、日本語で具体的に説明しなさい。",
    body: "Mr. Brown: Hi, Yuki. You look busy. What are you doing?\nYuki: I'm making a poster for our school festival. Last week, our class talked about plastic waste in our town.\nMr. Brown: That's an important topic. What did you talk about?\nYuki: We found that many plastic bags are used at our school festival every year. Then my classmate Ken said, 'Let's stop using plastic bags at the school festival this year.'\nMr. Brown: ①<u>That</u> sounds like a great idea. But what will people use to carry the things they buy?\nYuki: We will ask everyone to bring their own bags. This poster says, 'Please bring your own bag.'\nMr. Brown: I see. I think many people will help you. In my country, a lot of people carry their own bags when they go shopping.\nYuki: Really? I hope our festival will be a good chance for everyone to think about plastic waste.\n（注）plastic waste プラスチックごみ / plastic bag ビニール袋",
    guide: [
      { step: 1, text: "下線部 That は、ブラウン先生の発言の最初にあるので、〔①〕にあるユキの発言を見る。", blanks: ['直前'] },
      { step: 2, text: "直前でケンが言ったのは Let's stop using 〔②〕 at the school festival this year. という文である。", blanks: ['plastic bags'] },
      { step: 3, text: "Let's 〜 は「〜しよう」なので、内容は「今年の学園祭で〔③〕をやめること」となる。", blanks: ['ビニール袋を使うの'] },
      { step: 3, text: "That に入れると「それはすばらしい考えだね」となり意味が通る。答えは「〜〔④〕。」の形で終える。", blanks: ['こと'] },
    ],
    answer: '今年の学園祭で、ビニール袋を使うのをやめること。',
    explanation: "That は直前の発言の内容を指すことが多いです。ここでは、ケンの提案 Let's stop using plastic bags at the school festival this year. を指しています。「今年の」「学園祭で」まで入れると、より正確な答えになります。",
  },
  practice: [
    {
      instr: "次の英文は、中学生のリクが書いた作文です。下線部①の them が指すものとして最も適切なものを、ア〜エから1つ選びなさい。",
      body: "My grandfather has a small field behind his house. Every spring, he plants tomatoes, cucumbers, and potatoes there. When I was little, I didn't like vegetables very much. But one day, he asked me to help him in the field.\nThat summer, I went to his field almost every weekend. I pulled weeds and gave water to the plants. It was hot and hard work, but my grandfather always smiled and said, 'The plants are growing because you help them.'\nIn August, we picked a lot of tomatoes. They were red and shiny. My grandfather put some of them in a basket and said, 'Let's take ①<u>them</u> to our neighbors.' We visited three houses near his house. Everyone looked happy and said, 'Thank you. They look delicious.'\nThat night, I ate a tomato from the field for dinner. It was the most delicious tomato I have ever eaten. Now I like vegetables, and I understand why my grandfather works so hard in his field.\n（注）field 畑 / pull weeds 草をぬく / neighbor 近所の人",
      options: ['the plants in the field', 'some of the tomatoes', 'our neighbors', 'three houses'],
      answer: 'イ',
      explanation: "them は複数のものを指します。直前の文に put some of them(=tomatoes) in a basket とあり、「それらを近所の人に持っていこう」と言っています。ウの neighbors は them の後ろに出てくる「持っていく相手」なので合いません。",
    },
    {
      instr: "次の英文は、中学生のミサキがスピーチコンテストで話した内容の一部です。下線部①の This problem が指す内容を、日本語で具体的に説明しなさい。",
      body: "I live in a small town in the mountains. About half of the people in my town are over sixty-five years old. Two years ago, the only supermarket in our town closed. Since then, many old people cannot buy food easily, because the next supermarket is far from their houses and they don't drive a car. ①<u>This problem</u> is getting bigger every year.\nOne day, I talked about it with my friends. We wanted to do something for the old people in our town. We visited the city office and asked for help. Now, a small truck comes to our town twice a week. It sells food, milk, and other things people need every day. My friends and I help the old people carry their bags to their houses on weekends.\nThe old people often say to us, 'Thank you. You are a great help.' Those words make me happy. I want to keep thinking about what young people can do for our town.\n（注）city office 市役所 / truck トラック",
      answer: '町で唯一のスーパーが閉まり、次のスーパーは家から遠く、車も運転しないので、多くのお年寄りが食べ物を簡単に買えないこと。',
      explanation: "This problem は直前の文の内容を指します。Since then, many old people cannot buy food easily, because … の部分を、because 以下の理由もふくめて説明します。「お年寄りが食べ物を簡単に買えないこと」だけでも中心は合っていますが、理由まで入れると具体的な答えになります。",
    },
    {
      instr: "次の英文は、留学生のエマ(Emma)と中学生のソウタ(Sota)の対話です。下線部①の the same thing の内容として最も適切なものを、ア〜エから1つ選びなさい。",
      body: "Sota: Emma, how is your Japanese class going?\nEmma: It's fun, but kanji is very difficult for me. I study it every night, but I forget many of them the next day.\nSota: I understand. I feel the same way about English words.\nEmma: Really? What do you do to remember English words?\nSota: My English teacher told me a good way. She said, 'Use the new words in your own sentences. Then you can remember them easily.' So I write a short diary in English every day with the new words.\nEmma: That's interesting. Is it working?\nSota: Yes. Now I can remember more words than before.\nEmma: My mother told me ①<u>the same thing</u> when I started learning Japanese. But I didn't try it. I just wrote each kanji many times.\nSota: Then why don't you try it now? You can write a diary in Japanese with the new kanji.\nEmma: OK, I'll try it tonight. Will you read my diary sometimes?\nSota: Sure. I'm happy to help you.\n（注）diary 日記",
      options: [
        '漢字を毎晩何回も書いて練習するとよいということ。',
        '新しく習ったことばを使って自分で文を作るとよいということ。',
        '英語の先生にわからないことを質問するとよいということ。',
        '友達に日記を読んでもらうとよいということ。',
      ],
      answer: 'イ',
      explanation: "the same thing は「同じこと」で、前に出てきた「だれかが言ったこと」を指します。ソウタの先生が言った Use the new words in your own sentences. と同じことを、エマの母も言っていたのです。アはエマが実際にしていた方法なので合いません。",
    },
  ],
});

// ───────────────────────────────────────────── 9
HOWTO_UNITS.push({
  no: 9, part: '読解編', title: '空所に入る語句を選ぶ問題',
  intro: "本文中の空所に合う語句を選ぶ問題です。空所のある文だけを読んで「なんとなく自然なもの」を選ぶとまちがえやすく、前後の文や、本文の別の場所にあるヒントを使って決めることが大切です。",
  steps: [
    { title: '空所の前後の語を見る！', text: "空所の直前・直後にある but・because・so・for example などのつなぎの語に注目します。but なら前と反対の内容、because なら理由、so なら結果、for example なら具体例が来ます。" },
    { title: '本文で同じ内容を探す！', text: "空所の答えは、本文のほかの場所で別の言葉で言いかえられていることがよくあります。空所の後ろの具体例や、段落のまとめの文から、同じ意味の部分を探します。" },
    { title: '入れて流れを確かめる！', text: "選んだ選択肢を空所に入れて、前後を通して読みます。文の意味だけでなく、段落全体の話の流れに合っているか、ほかの選択肢がなぜちがうかも確かめます。" },
  ],
  example: {
    instr: "次の英文は、中学生のカナが書いた作文です。( )に入る最も適切なものを、ア〜エから1つ選びなさい。",
    body: "In my town, there is a community garden near the station. Anyone can use it. People grow vegetables and flowers there, and they often share them with each other. My mother and I started to use the garden last spring.\nAt first, it was hard for us to grow vegetables. Some of our tomatoes died because we gave them too much water. Then an old man in the garden, Mr. Sato, helped us. He taught us when to give water and how much to give. Thanks to him, we got a lot of tomatoes in summer.\nThe garden is not only a place for growing vegetables. It is also a place for ( ). For example, I met Mr. Sato and many other people there, and now we talk about many things when we see each other on the street. I think the garden made our town a little warmer.\n（注）community garden 地域の人が共同で使う畑",
    options: ['buying food at a low price', 'meeting new people and making friends', 'studying science alone', 'playing sports with children'],
    walkthrough: [
      { step: 1, text: "空所の前に not only a place for growing vegetables. It is also a place for … とあり、「野菜を育てるだけでなく、〜のための場所でもある」という文です。直後には For example があるので、すぐ後ろが空所の具体例になります。" },
      { step: 2, text: "具体例を読むと「佐藤さんやほかの多くの人と出会い、今では道で会うと話をする」とあります。また、前の段落でも佐藤さんが助けてくれた話があり、「人とのつながり」が話の中心だとわかります。" },
      { step: 3, text: "イを入れると「新しい人と出会い、友達になるための場所でもある」となり、例とも最後の「町が少し温かくなった」とも合います。アの安く買う話、ウの一人で勉強する話、エのスポーツの話は本文に出てきません。" },
    ],
    answer: 'イ',
  },
  check: {
    instr: "次の英文は、中学生のケンタ(Kenta)とグリーン先生(Ms. Green)の対話です。( )に入る最も適切なものを、ア〜エから1つ選びなさい。",
    body: "Ms. Green: Hi, Kenta. I heard you will join the English speech contest next month.\nKenta: Yes. I have already finished writing my speech, but I'm worried.\nMs. Green: Why are you worried?\nKenta: I sometimes forget words when I speak in front of many people. My face gets red, and my voice gets small.\nMs. Green: I understand. When I was a junior high school student, I had the same problem. So I ( ) many times before the contest. I practiced in my room every night, and I practiced in front of my family, too.\nKenta: Did it help?\nMs. Green: Yes, it did. After a lot of practice, I didn't need to look at my paper. I could look at the people and speak with a big voice.\nKenta: That's great. I'll try that, too. Can I practice in front of you next week?\nMs. Green: Of course. I'm looking forward to it.",
    options: ['read books about famous people', 'practiced my speech aloud', 'stopped joining the contest', 'wrote letters to my friends'],
    guide: [
      { step: 1, text: "空所の直前に〔①〕があるので、前の内容「わたしも同じ〔②〕があった(人前で言葉を忘れてしまう)」の結果、何をしたかが入る。", blanks: ['So', '問題'] },
      { step: 2, text: "空所の後ろに I practiced in my room every night, and I practiced in front of my family, 〔③〕. とあり、「練習した」ことが続いている。", blanks: ['too'] },
      { step: 3, text: "〔④〕を入れると「だから、コンテストの前に何度もスピーチを声に出して練習した」となり、後ろの文とつながる。", blanks: ['イ'] },
    ],
    answer: 'イ',
    explanation: "So は「だから」で、前の内容の結果を表します。後ろの文で practiced が2回くり返されていることが、本文の中の言いかえのヒントです。ウ(コンテストに出るのをやめた)は、その後 After a lot of practice … I could look at the people と話していることと合いません。",
  },
  practice: [
    {
      instr: "次の英文は、中学生のマイが書いた作文です。( )に入る最も適切な語を、ア〜エから1つ選びなさい。",
      body: "Last month, I joined a cooking class for junior high school students at the community center. I wanted to cook dinner for my family because my parents are always busy with their work.\nIn the class, we learned how to make curry and a simple salad. The teacher showed us how to cut vegetables safely. I was very slow, and some of my potatoes were too big. ( ), the teacher didn't get angry. She said, 'Don't worry. Everyone is slow at first. You will get faster if you keep cooking.'\nOn Sunday, I made curry for my family. It took more than an hour, and the kitchen became a little messy. But when my father ate it, he smiled and said, 'This is really good, Mai.' My mother asked me to cook again next week.\nI was very happy. Now I cook dinner every Sunday. Cooking is not easy, but I like it because it makes my family smile.\n（注）community center 公民館 / messy 散らかった",
      options: ['So', 'Because', 'But', 'For example'],
      answer: 'ウ',
      explanation: "空所の前は「わたしはとても遅く、ジャガイモが大きすぎた」という失敗、後ろは「先生はおこらなかった」です。「失敗したのに、おこらなかった」と反対の流れになるので But が入ります。So だと「だから先生はおこらなかった」となり不自然です。",
    },
    {
      instr: "次の英文は、ある中学校の新聞部が書いた記事です。( )に入る最も適切なものを、ア〜エから1つ選びなさい。",
      body: "Do you know how much time students spend on their phones? Last month, we asked 100 students in our school, 'How long do you use your phone on a school day?' Fifty-two students answered 'more than two hours.' Only eight students said 'less than thirty minutes.'\nPhones are very useful. We can talk with our friends, listen to music, and find information quickly. However, using phones too long can cause some problems. ( ). Some students told us that they often feel sleepy in class. One student said, 'I use my phone in bed until late at night, so I can't get up in the morning.' Another student said, 'My eyes get tired easily.'\nWe think it is important to make our own rules. For example, you can put your phone in another room before going to bed. Let's think about how we use our phones and make our school life better.\n（注）cause 〜を引き起こす / information 情報",
      options: [
        "For example, they can't sleep well",
        'For example, they can buy things easily',
        'So we should use our phones more',
        'Because phones are cheap now',
      ],
      answer: 'ア',
      explanation: "空所の直前は「長く使いすぎると問題が起こることがある」で、後ろには「授業中ねむくなる」「夜おそくまで使って起きられない」などの具体例が続きます。問題の具体例を示すアが入ります。イは便利な点なので、「問題」の話に合いません。",
    },
    {
      instr: "次の英文は、留学生のルーカス(Lucas)が英語の授業で行ったスピーチです。( A )・( B )に入る語句の組み合わせとして最も適切なものを、ア〜エから1つ選びなさい。",
      body: "Hello, everyone. I came to Japan from Brazil three months ago. When I first came here, I couldn't speak Japanese at all. I was very nervous ( A ) I didn't know how to talk with my classmates.\nOne day, a boy in my class, Daiki, said to me, 'Do you want to play soccer with us after school?' He spoke in easy English and used gestures. I was very glad. Soccer is my favorite sport, and I played it every day in Brazil.\nAfter that, I played soccer with Daiki and his friends every day. While we were playing, they taught me many Japanese words, like 'nice pass' and 'one more time.' I also taught them some Portuguese words. Soccer helped me make friends. ( B ), I don't feel nervous at school anymore.\nI learned that we don't need perfect words to be friends. A smile and something we both like can be a great start.\n（注）gesture 身ぶり / Portuguese ポルトガル語",
      options: [
        'A: because　B: Now',
        'A: so　B: Now',
        'A: because　B: But',
        'A: but　B: For example',
      ],
      answer: 'ア',
      explanation: "( A )の後ろの「クラスメートとの話し方がわからなかった」は、緊張していた理由なので because が入ります。( B )の前は「サッカーで友達ができた」、後ろは「もう学校で緊張しない」という今の様子なので Now が合います。But では前後が反対の内容にならず、流れが合いません。",
    },
  ],
});

// ───────────────────────────────────────────── 10
HOWTO_UNITS.push({
  no: 10, part: '読解編', title: '文の入る位置を選ぶ問題',
  intro: "本文から取り出された1文が、〔ア〕〜〔エ〕のどこに入るかを答える問題です。入れる文の意味だけで判断すると迷いやすいので、代名詞やつなぎの語などの「目印」を手がかりに、前後とのつながりで決めます。",
  steps: [
    { title: '入れる文の目印を探す！', text: "入れる文の中の he・she・it・they・this などの代名詞、But・So・Also・For example などのつなぎの語に印をつけます。これらは「直前にどんな内容が来るか」を教えてくれる目印です。" },
    { title: '各位置の前後を確かめる！', text: "〔ア〕〜〔エ〕それぞれの直前・直後の文を読み、目印が指すもの(人・物・話題)が直前にあるか、つなぎの語と前後の関係(反対・理由・例など)が合うかを確かめます。" },
    { title: '入れて流れを確かめる！', text: "候補の位置に文を入れて、前後を通して読みます。代名詞が正しいものを指しているか、話が自然につながるか、その後ろの文ともうまくつながるかを最後に確認します。" },
  ],
  example: {
    instr: "次の英文は、中学生のリナが英語の授業で行ったスピーチです。次の英文が入る最も適切な位置を、本文中の〔ア〕〜〔エ〕から1つ選びなさい。\nFor example, I read picture books to them and played games with them.",
    body: "Last summer, I did volunteer work at a nursery school for five days. 〔ア〕 I wanted to be a nursery school teacher in the future, so I wanted to know more about the job.\nOn the first day, I was very nervous. 〔イ〕 But the children soon came to me and said, 'Let's play!' I spent a lot of time with them. 〔ウ〕 They listened to the stories with shining eyes, and they laughed a lot when we played.\nThe teachers at the school were always busy. They cleaned the rooms, prepared lunch, and wrote notes to parents. 〔エ〕 I learned that a nursery school teacher has many jobs that children cannot see.\nThrough this experience, I wanted to become a nursery school teacher even more. I will study hard to make my dream come true.\n（注）nursery school 保育園 / prepare 〜を準備する",
    walkthrough: [
      { step: 1, text: "入れる文の目印は For example と them です。「たとえば、わたしはかれらに絵本を読み、かれらとゲームをした」なので、直前には「かれら(複数の人)と何かをした」という、まとめの内容が来るはずです。" },
      { step: 2, text: "〔ウ〕の直前は I spent a lot of time with them.(子どもたちとたくさんの時間を過ごした)で、them=the children です。〔ア〕の直前には複数の人が出てこず、〔エ〕の直前の They は先生たちなので合いません。" },
      { step: 3, text: "〔ウ〕に入れると「子どもたちとたくさん過ごした。たとえば絵本を読んだりゲームをしたりした。かれらは目をかがやかせて話を聞き、遊ぶとよく笑った」となり、直後の stories と played ともつながります。" },
    ],
    answer: 'ウ',
  },
  check: {
    instr: "次の英文は、中学生のタクミが書いた作文です。次の英文が入る最も適切な位置を、本文中の〔ア〕〜〔エ〕から1つ選びなさい。\nShe also told me that I should drink a lot of water.",
    body: "Last winter, I started running every morning before school. I wanted to be a better player on my soccer team. 〔ア〕 At first, I could run only for ten minutes, and my legs hurt after running.\nOne day, I talked about it with my aunt. She is a nurse, and she knows a lot about our bodies. 〔イ〕 She said, 'You should stretch your legs before and after running.' 〔ウ〕 'Your body needs water when you exercise, even in winter,' she said.\nI followed her advice. Little by little, I was able to run longer. 〔エ〕 Now I can run for forty minutes, and I can play soccer longer without getting tired.\nI learned that it is important not only to work hard but also to listen to people who know more than me.\n（注）nurse 看護師 / stretch 〜をのばす / advice 助言",
    guide: [
      { step: 1, text: "入れる文の目印は She と〔①〕。also は「〜もまた」なので、直前にも「彼女が言ったこと(アドバイス)」が1つ来るはず。She はタクミの〔②〕を指す。", blanks: ['also', 'おば'] },
      { step: 2, text: "〔ウ〕の直前には、おばの1つ目のアドバイス「走る前後に足を〔③〕」がある。さらに直後の文は Your body needs 〔④〕 when you exercise で、水の話が続いている。", blanks: ['のばすとよい', 'water'] },
      { step: 3, text: "〔⑤〕に入れると「足をのばすといいと言った。水をたくさん飲むべきだとも言った。運動するとき体には水が必要だから、と」となり、流れが自然になる。", blanks: ['ウ'] },
    ],
    answer: 'ウ',
    explanation: "also があるので、直前にも同じ種類の内容(おばのアドバイス)が必要です。〔イ〕の直前はまだアドバイスが出ていないので also と合いません。〔ウ〕なら、1つ目のアドバイス(ストレッチ)の後で、直後の「水が必要」という説明ともつながります。",
  },
  practice: [
    {
      instr: "次の英文は、中学生のアヤが書いた作文です。次の英文が入る最も適切な位置を、本文中の〔ア〕〜〔エ〕から1つ選びなさい。\nBut she did not stop trying.",
      body: "My grandmother is seventy-eight years old. Last year, she said to me, 'I want to send messages to my friends with a smartphone.' 〔ア〕 So I decided to teach her how to use one.\nIt was not easy for her. She often pressed the wrong buttons, and she forgot how to send a picture many times. Sometimes she said, 'I'm too old for this.' 〔イ〕 She wrote the steps in a notebook and practiced every day. 〔ウ〕 When she had a question, she called me, and I visited her house on weekends to help her.\nAfter two months, she sent me her first message. It said, 'Thank you, Aya. I can do it now!' I was very happy when I read it. 〔エ〕 Now she sends messages and pictures to her friends almost every day.\nFrom my grandmother, I learned that it is never too late to learn something new. I want to be like her when I get older, and I will keep learning new things, too.\n（注）press 〜をおす / step 手順",
      answer: 'イ',
      explanation: "入れる文の目印は But(反対の内容)と she です。〔イ〕の直前は「何度もボタンをおしまちがえ、写真の送り方を忘れた」という苦労と、「わたしにはもう年をとりすぎている」という弱気な言葉です。そこに「でも、彼女はあきらめなかった」が入ると反対の流れになります。直後の「手順をノートに書いて毎日練習した」ともつながります。",
    },
    {
      instr: "次の英文は、ある中学生が英語の授業で発表した、町の図書館についての文章です。次の英文が入る最も適切な位置を、本文中の〔ア〕〜〔エ〕から1つ選びなさい。\nBecause of this, people can now visit it after work or school.",
      body: "There is a library near our school. It is old, but many people in our town like it. On weekends, many children come there with their parents. 〔ア〕 Last month, I visited the library and talked with a woman who works there.\nShe told me that the library has two new services this year. First, you can borrow books on the internet and read them on your tablet. 〔イ〕 Second, the library now opens until nine in the evening. 〔ウ〕 She said that many high school students use the library at night, especially before tests. 〔エ〕 Some of them say that they can't study well at home because it is noisy.\nI was surprised to learn how the library is changing for the people in our town. Before, I thought a library was only a place to borrow books. But now I know it is also a place that supports people's lives. I want to use it more, too.\n（注）service サービス / borrow 〜を借りる / especially 特に",
      answer: 'ウ',
      explanation: "入れる文の目印は Because of this(このために)です。直前には「夜まで来館できるようになる理由」が必要です。〔ウ〕の直前は「図書館が夜9時まで開くようになった」なので、「このため、仕事や学校の後にも行けるようになった」とつながり、直後の「多くの高校生が夜に図書館を使う」ともつながります。〔イ〕の直前はインターネットで本を借りる話で、図書館に行かなくてもよいサービスなので visit と合いません。",
    },
    {
      instr: "次の英文は、留学生のジョン(John)が日本の生活について書いた文章です。次の英文が入る最も適切な位置を、本文中の〔ア〕〜〔エ〕から1つ選びなさい。\nOne of them was the sound of the trains.",
      body: "I came to Japan from Canada last September. I live with a host family in a city near Tokyo. 〔ア〕 Everything was new to me, and many things surprised me.\nIn my first week, I noticed some differences between Japan and Canada. 〔イ〕 When a train came to the station, I heard a short song. My host brother told me that each station has its own song. I thought it was a nice idea. 〔ウ〕 In Canada, I never heard music at train stations.\nAnother difference was the school lunch. In my school in Canada, we brought our own lunch from home. But in Japan, students serve lunch to their classmates and eat the same food in the classroom. 〔エ〕 I enjoyed it because I could talk with my classmates during lunch.\nNow I'm used to my life here, but I still enjoy finding small differences every day. When I go back to Canada, I want to tell my family and friends about them.\n（注）notice 〜に気づく / difference ちがい / serve 〜を配る",
      answer: 'イ',
      explanation: "入れる文の目印は One of them(それらのうちの1つ)です。them は直前の複数のもの、つまり〔イ〕の直前の some differences(いくつかのちがい)を指します。直後の「電車が来ると短い曲が聞こえた」が電車の音の具体的な説明になり、後ろの Another difference(もう1つのちがい)ともつながります。",
    },
  ],
});
