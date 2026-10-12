// 入試対策: 解き方を学ぶプリント(オリジナル)。
var HOWTO_UNITS = typeof HOWTO_UNITS !== 'undefined' ? HOWTO_UNITS : [];

// ---------------------------------------------------------------- 1
HOWTO_UNITS.push({
  no: 1, part: '文法・作文編', title: '空欄に語句を入れる問題',
  intro: '選択肢から（　）に入る語句を選ぶ問題では、「文法で決まる問題」と「意味で決まる問題」があります。どちらのタイプかを最初に見分けないと、意味だけで何となく選んでしまい、形のミスをしやすくなります。',
  steps: [
    { title: '文法の知識を使う！', text: '選択肢に同じ動詞の形（原形・-ing形・過去形・過去分詞など）が並んでいたら、文法だけを考えればよい。主語、時を表す語、空所の前後の語（be動詞・have・前置詞など）を手がかりにする。' },
    { title: '文脈・単語・語法の知識で考える！', text: '選択肢にちがう単語が並んでいたら、意味で選ぶ。前後の文の流れや対話の答え方を読み、「この語はこの形で使う」（lend 人 物、be good at など）という語法も思い出す。' },
    { title: '文法と意味の両方から考える！', text: '選んだ語を空所に入れて文全体を読み直す。文法的に正しく、しかも場面に合う意味になっているかを両方から確かめてから答える。' },
  ],
  example: {
    instr: '次の（　）に入る最も適当なものを、ア〜エから選びなさい。',
    body: 'A: Have you finished ( ) your report?\nB: Not yet. I will do it tonight.',
    options: ['write', 'writing', 'wrote', 'to write'],
    walkthrough: [
      { step: 1, text: '選択肢はすべて write の形 → 文法で考える。finish のあとに動詞を続けるときは動名詞（-ing形）を使うので writing。（解き方✓1）' },
      { step: 2, text: '選択肢の意味はどれも「書く」なので、意味で迷う必要はない。B の「まだ。今夜やるよ」という答えとも話がつながる。（解き方✓2）' },
      { step: 3, text: '「レポートを書き終えましたか」となり、文法・意味ともに自然。答えはイ。（解き方✓3）' },
    ],
    answer: 'イ',
  },
  check: {
    instr: '次の（　）に入る最も適当なものを、ア〜エから選びなさい。',
    body: 'This temple ( ) about four hundred years ago.',
    options: ['builds', 'built', 'was built', 'has built'],
    guide: [
      { step: 1, text: '選択肢はすべて build の形 → 〔①〕の知識で考える。', blanks: ['文法'] },
      { step: 1, text: '主語は This temple。寺は自分で建てるのではなく「建て〔②〕」ものなので、〈be動詞＋〔③〕〉の受け身にする。', blanks: ['られる', '過去分詞'] },
      { step: 2, text: 'ago「〜前に」があるので、〔④〕の文。', blanks: ['過去'] },
      { step: 3, text: 'was built を入れると「この寺は約400年前に〔⑤〕」となり、意味も自然。', blanks: ['建てられた'] },
    ],
    answer: 'ウ',
    explanation: '主語の「寺」は「建てられる」ものなので受け身〈be動詞＋過去分詞〉にします。さらに ago があるので過去形の was を使い、was built が正解です。has built は現在完了で、ago といっしょには使えません。',
  },
  practice: [
    {
      instr: '次の（　）に入る最も適当なものを、ア〜エから選びなさい。',
      body: 'My sister is good ( ) playing the piano.',
      options: ['at', 'in', 'on', 'for'],
      answer: 'ア',
      explanation: 'be good at 〜ing で「〜するのが得意だ」。前置詞は語法として決まっているので、まとまりで覚えておきます。',
    },
    {
      instr: '次の（　）に入る最も適当なものを、ア〜エから選びなさい。',
      body: "A: Oh, it's raining. I don't have an umbrella.\nB: Don't worry. I'll ( ) you mine.",
      options: ['borrow', 'lend', 'use', 'carry'],
      answer: 'イ',
      explanation: '〈lend 人 物〉で「（人）に（物）を貸す」。borrow は「借りる」で、〈borrow 人 物〉の形はとりません。意味と語法の両方から lend を選びます。',
    },
    {
      instr: '次の（　）に入る最も適当なものを、ア〜エから選びなさい。',
      body: "A: Which is ( ), this bag or that one?\nB: This one. It's only 1,000 yen.",
      options: ['cheaper', 'more expensive', 'cheapest', 'most expensive'],
      answer: 'ア',
      explanation: '2つを比べているので比較級（文法）。B が「たった1,000円」と答えているので「安い」ほう（意味）。両方から cheaper が決まります。',
    },
  ],
});

// ---------------------------------------------------------------- 2
HOWTO_UNITS.push({
  no: 2, part: '文法・作文編', title: '語の形を変える問題',
  intro: '（　）内の語を正しい形に直す問題では、時制・主語との一致・受け身・完了形・分詞・比較・代名詞の格などが問われます。手がかりを見落とすと、原形のまま書いたり、不規則変化のつづりをまちがえたりしやすくなります。',
  steps: [
    { title: '時を表す語と主語を探す！', text: 'yesterday, last 〜, ago なら過去、tomorrow なら未来。主語が3人称単数で現在の文なら -s をつける。代名詞なら、文の中で「〜は」「〜を」「〜の」のどれにあたるかを見る。' },
    { title: '文の形から決める！', text: '空所の前後を見て文の形を見抜く。be動詞のあと → -ing形か過去分詞、have/has のあと → 過去分詞、名詞のあと → 分詞の後置修飾、than → 比較級、the 〜 of/in → 最上級。' },
    { title: 'つづりと不規則変化を確かめる！', text: '書いた語をもう一度確かめる。swim → swimming（子音字を重ねる）、study → studied（y を i に）、see − saw − seen などの不規則変化に注意する。' },
  ],
  example: {
    instr: '次の英文の（　）内の語を、最も適当な形に直して書きなさい。',
    body: 'Look at the boy (swim) in the river. He is my brother.',
    walkthrough: [
      { step: 1, text: '最初の文は Look で始まる命令文で、すでに動詞がある。だから swim をふつうの動詞（swims / swam）として使うことはできない。（解き方✓1）' },
      { step: 2, text: '名詞 the boy のうしろに置いて「川で泳いでいる少年」と説明する形 → 現在分詞（-ing形）の後置修飾。（解き方✓2）' },
      { step: 3, text: 'swim は m を重ねて swimming。（解き方✓3）' },
    ],
    answer: 'swimming',
  },
  check: {
    instr: '次の英文の（　）内の語を、最も適当な形に直して書きなさい。',
    body: 'I have never (see) such a beautiful picture.',
    guide: [
      { step: 1, text: '主語は I。空所の前に have があるので〔①〕の文だと考える。', blanks: ['現在完了'] },
      { step: 2, text: '〈have＋〔②〕〉の形にする。never があるので「一度も〜したことがない」という〔③〕の意味になる。', blanks: ['過去分詞', '経験'] },
      { step: 3, text: 'see は不規則動詞。see − saw − 〔④〕と変化する。', blanks: ['seen'] },
    ],
    answer: 'seen',
    explanation: 'have のあとに never があり、「こんなに美しい絵を一度も見たことがない」という現在完了（経験）の文です。〈have＋過去分詞〉なので、see の過去分詞 seen を書きます。saw（過去形）としないように注意します。',
  },
  practice: [
    {
      instr: '次の英文の（　）内の語を、最も適当な形に直して書きなさい。',
      body: 'My father (go) to Osaka on business last week.',
      answer: 'went',
      explanation: 'last week があるので過去の文。go は不規則動詞で go − went − gone。goed としないように注意します。',
    },
    {
      instr: '次の英文の（　）内の語を、最も適当な形に直して書きなさい。',
      body: 'This is the (big) park in our city.',
      answer: 'biggest',
      explanation: '〈the 〜 in ...〉「…の中でいちばん〜」なので最上級。big は g を重ねて biggest にします。',
    },
    {
      instr: '次の英文の（　）内の語を、最も適当な形に直して書きなさい。',
      body: 'Ms. Brown is very kind. Everyone in our class likes (she).',
      answer: 'her',
      explanation: 'likes の目的語（「彼女を」）になるので、目的格の her にします。',
    },
  ],
});

// ---------------------------------------------------------------- 3
HOWTO_UNITS.push({
  no: 3, part: '文法・作文編', title: '空所に合う語を入れる問題（メモ・資料つき）',
  intro: 'メモ・お知らせ・表などの日本語の情報をもとに、英文の空所に1語を書く問題です。情報を見つけても、文法的に合わない形（単数・複数、品詞、大文字など）で書いて失点することが多い形式です。',
  steps: [
    { title: '入る語の種類を文法で決める！', text: 'まず資料を見ずに、空所の前後から「どんな語が入るか」を考える。前置詞のあと → 名詞、to のあと → 動詞の原形、数のあと → 複数形の名詞、名詞の前 → 形容詞や数など。' },
    { title: '資料から情報を見つける！', text: 'ステップ1で決めた種類の情報（曜日・時刻・場所・数・持ち物など）を、メモや表の中から探す。英文のほかの部分と資料を照らし合わせて、どの項目の話かを確認する。' },
    { title: '形とつづりを確かめる！', text: '書いた語のつづり、単数・複数、動詞の形を確かめる。曜日・月・文の最初の語は大文字で書く。' },
  ],
  example: {
    instr: '次の［メモ］の内容に合うように、英文の（ A ）（ B ）に入る適当な英語を1語ずつ書きなさい。',
    table: [
      ['項目', '内容'],
      ['行き先', '動物園'],
      ['日にち', '7月20日（土曜日）'],
      ['集合', '駅の前に午前10時'],
      ['持ち物', '昼食と飲み物'],
    ],
    body: "Hi, Mike. We are going to the zoo on ( A ), July 20. Let's meet in front of the station at ten. Please bring your lunch and something to ( B ).",
    walkthrough: [
      { step: 1, text: '（A）は on のあと、July 20 の前 → 曜日が入る。（B）は something to 〜「〜するための何か」→ 動詞の原形が入る。（解き方✓1）' },
      { step: 2, text: 'メモの日にちは「7月20日（土曜日）」、持ち物は「昼食と飲み物」。something to drink で「飲み物」になる。（解き方✓2）' },
      { step: 3, text: '曜日は大文字で始めて Saturday。to のあとなので drink は原形のまま。（解き方✓3）' },
    ],
    answer: 'A: Saturday　B: drink',
  },
  check: {
    instr: '次の［お知らせ］の内容に合うように、英文の（ A ）〜（ C ）に入る適当な英語を1語ずつ書きなさい。',
    table: [
      ['項目', '内容'],
      ['休館日', '毎週月曜日'],
      ['開館時間', '午前9時〜午後5時'],
      ['本の貸し出し', '1人5冊まで・2週間'],
    ],
    body: 'The library is closed every ( A ). You can borrow ( B ) books at a time, and you must return them within two ( C ).',
    guide: [
      { step: 1, text: '（A）は every のあとなので〔①〕を表す名詞が入る。（B）は books の前なので数を表す語が入る。（C）は two のあとなので、名詞は〔②〕形になる。', blanks: ['曜日', '複数'] },
      { step: 2, text: 'お知らせから、休館日は〔③〕、貸し出しは〔④〕冊まで、期間は2週間とわかる。', blanks: ['月曜日', '5'] },
      { step: 3, text: '曜日は最初の文字を〔⑤〕にして Monday。week は two のあとなので weeks と書く。', blanks: ['大文字'] },
    ],
    answer: 'A: Monday　B: five　C: weeks',
    explanation: 'every Monday で「毎週月曜日」。books の前には冊数の five、two のあとの「週」は複数形の weeks にします。資料の情報だけでなく、空所の前後の文法から形を決めるのがポイントです。',
  },
  practice: [
    {
      instr: '次の［ポスター］の内容に合うように、英文の（ A ）（ B ）に入る適当な英語を1語ずつ書きなさい。',
      table: [
        ['項目', '内容'],
        ['行事', '英語スピーチコンテスト'],
        ['日時', '11月3日 午後1時から'],
        ['場所', '体育館'],
        ['発表者', '各クラス2人'],
      ],
      body: 'The English speech contest will be held in the ( A ) on November 3. ( B ) students from each class will make a speech.',
      answer: 'A: gym　B: Two',
      explanation: '（A）は in the のあとなので場所を表す名詞 gym。（B）は students の前の数で、文の最初なので大文字で Two と書きます。',
    },
    {
      instr: '次の［予定表］の内容に合うように、英文の（ A ）（ B ）に入る適当な英語を1語ずつ書きなさい。',
      table: [
        ['時刻', '予定'],
        ['9:00', '学校を出発'],
        ['12:00', '昼食'],
        ['13:00', '博物館を見学'],
        ['15:30', '学校に到着'],
      ],
      body: 'We will leave school at nine. After ( A ), we will visit a museum. We will ( B ) at school at three thirty.',
      answer: 'A: lunch　B: arrive',
      explanation: '（A）は After のあとの名詞で、博物館の前の予定なので lunch。（B）は will のあとの動詞の原形で、「学校に到着」なので arrive（arrive at 〜）を書きます。',
    },
    {
      instr: '次の［伝言メモ］の内容に合うように、英文の（ A ）（ B ）に入る適当な英語を1語ずつ書きなさい。',
      table: [
        ['項目', '内容'],
        ['電話をくれた人', 'ジョン'],
        ['用件', '明日のテニスの練習はない'],
        ['理由', 'コーチが病気だから'],
      ],
      body: 'Mom: John called you. There will be ( A ) tennis practice tomorrow because the coach is ( B ).',
      answer: 'A: no　B: sick（ill も可）',
      explanation: '（A）は名詞 tennis practice の前で「練習がない」なので no。（B）は is のあとの形容詞で「病気の」sick（ill）を書きます。',
    },
  ],
});

// ---------------------------------------------------------------- 4
HOWTO_UNITS.push({
  no: 4, part: '文法・作文編', title: '語句を並べかえる問題',
  intro: '与えられた語句を並べかえて正しい英文を作る問題です。1語ずつ順番に考えるとまちがえやすいので、まず語のまとまりを作り、文の形にあてはめていくのがコツです。記号で答える形式や、不要な語が1つまじっている形式もあります。',
  steps: [
    { title: '語のまとまりを作る！', text: '〈冠詞・形容詞＋名詞〉〈前置詞＋名詞〉〈to＋動詞の原形〉〈助動詞＋動詞〉など、いっしょになる語をまとまりにする。数が減るほど並べやすくなる。' },
    { title: '文の形で並べる！', text: '「主語＋動詞」を先に決め、そのあとに目的語や修飾語を続ける。関係代名詞・間接疑問・比較・現在完了などの文法の語順（例：疑問詞＋主語＋動詞）にあてはめる。' },
    { title: '全体を読んで意味を確かめる！', text: 'できた文を前後の文や対話といっしょに読み、意味が通るか確かめる。すべての語を使ったか（不要な語がある問題では1語だけ余っているか）、記号の順番を写しまちがえていないかもチェックする。' },
  ],
  example: {
    instr: '次の対話文の（　）内の語句を正しく並べかえて、英文を完成させなさい。',
    body: 'A: Who is that man?\nB: He is the ( who / me / taught / teacher / math ) last year.',
    walkthrough: [
      { step: 1, text: 'the のあとには名詞が来るので「the teacher」、teach は〈teach 人 物〉の形なので「taught me math」というまとまりを作る。（解き方✓1）' },
      { step: 2, text: 'who は関係代名詞。〈名詞＋who＋動詞〉で前の名詞を説明するので、the teacher who taught me math の順にする。（解き方✓2）' },
      { step: 3, text: '「彼は去年私に数学を教えてくれた先生です」となり、「あの男の人はだれ？」への答えとして自然。5語すべて使っている。（解き方✓3）' },
    ],
    answer: 'He is the teacher who taught me math last year.',
  },
  check: {
    instr: '次の対話文の（　）内のア〜オを正しく並べかえ、その順番を記号で答えなさい。',
    body: "A: Do you know ( ア is / イ where / ウ the / エ station / オ new )?\nB: Yes. It's near the hospital.",
    guide: [
      { step: 1, text: '冠詞・形容詞・名詞で「the 〔①〕 station」というまとまりを作る。', blanks: ['new'] },
      { step: 2, text: 'Do you know のあとに疑問詞 where が続く〔②〕の文。疑問詞のあとは〈主語＋〔③〕〉の語順になる。', blanks: ['間接疑問', '動詞'] },
      { step: 3, text: 'where the new station is「新しい駅がどこにあるか」となり、B が場所を答えているので意味も合う。記号はイ→ウ→〔④〕→エ→ア。', blanks: ['オ'] },
    ],
    answer: 'イ→ウ→オ→エ→ア',
    explanation: 'Do you know の中に疑問文を入れるときは、〈疑問詞＋主語＋動詞〉の間接疑問の語順にします。Where is the new station? の語順のまま where is the new station としないように注意します。',
  },
  practice: [
    {
      instr: '次の対話文の（　）内の語を正しく並べかえて、英文を完成させなさい。',
      body: "A: It's very hot today.\nB: Yes. Please give ( something / me / to / cold / drink ).",
      answer: 'Please give me something cold to drink.',
      explanation: '〈give 人 物〉で give me something。-thing の語を説明する形容詞はうしろに置いて something cold、さらに to drink を続けて「何か冷たい飲み物」にします。',
    },
    {
      instr: '次の（　）内の語を並べかえて英文を完成させなさい。ただし、1語不要な語がある。',
      body: 'My brother ( than / tall / taller / is / I ) am.',
      answer: 'My brother is taller than I am.（不要な語：tall）',
      explanation: 'than があるので比較級 taller を使い、「主語＋is＋taller than＋I am」の順にします。原級の tall は不要です。',
    },
    {
      instr: '次の対話文の（　）内のア〜オを正しく並べかえ、その順番を記号で答えなさい。',
      body: 'A: ( ア has / イ how / ウ long / エ lived / オ she ) in Japan?\nB: For five years.',
      answer: 'イ→ウ→ア→オ→エ',
      explanation: 'B が For five years.「5年間」と期間を答えているので How long で始まる現在完了の疑問文。〈How long＋has＋主語＋過去分詞〉で How long has she lived の順です。',
    },
  ],
});

// ---------------------------------------------------------------- 5
HOWTO_UNITS.push({
  no: 5, part: '文法・作文編', title: '場面に合う英文を考える問題',
  intro: 'イラストの場面を読み取り、吹き出しに入る英文を自分で書く問題です。むずかしい内容を書こうとしてまちがえるより、場面の目的に合うことを、知っている表現で正確に書くことが大切です。',
  steps: [
    { title: '場面をつかむ！', text: 'だれが・どこで・何が起きているかを読み取る。吹き出しの前後のせりふ（相手の返事など）も大きなヒントになる。' },
    { title: '言うべきことを決める！', text: 'その人物が何のために話すのか（申し出る・たのむ・誘う・お礼を言う・あやまる・たずねる など）を決め、合う表現（Shall I 〜? / Could you 〜? / Do you want to 〜? / I\'m sorry 〜. など）を選ぶ。' },
    { title: '書ける英語で書く！', text: '知っている単語と文法で、短く正確に書く。語数の条件を数え、主語と動詞・時制・大文字・ピリオドやクエスチョンマークを確かめる。' },
  ],
  example: {
    instr: '次の場面を読み、Tom の吹き出しに入る英文を書きなさい。ただし、4語以上で書くこと。',
    body: '【場面】放課後の教室。ユミが重そうな箱をいくつも運ぼうとしていて、とても大変そうにしている。それを見た留学生のトムが声をかける。\nTom: (　　　　　　　　)\nYumi: Thank you. That\'s very kind of you.',
    walkthrough: [
      { step: 1, text: 'だれが：トムがユミに。どこで：放課後の教室。何が：ユミが重い箱を運ぶのに困っている。ユミは「ありがとう。親切ですね」と答えている。（解き方✓1）' },
      { step: 2, text: 'ユミがお礼を言っているので、トムは「手伝いましょうか」と申し出たと考えられる。「（私が）〜しましょうか」は Shall I 〜? を使う。（解き方✓2）' },
      { step: 3, text: 'Shall I help you? で4語。疑問文なので最後に ? をつける。もっと書けるなら Shall I carry some of the boxes? なども可。（解き方✓3）' },
    ],
    answer: 'Shall I help you? / Can I help you carry those boxes?',
  },
  check: {
    instr: '次の場面を読み、女性の吹き出しに入る英文を書きなさい。ただし、5語以上で書くこと。',
    body: '【場面】日曜日、駅の前。地図を持った外国人の女性が困った様子で、ケンに話しかける。地図には「市立博物館」に印がついている。\nWoman: (　　　　　　　　)\nKen: Sure. Go straight and turn left at the second corner. You\'ll see it.',
    guide: [
      { step: 1, text: '場所は駅の前。女性は地図を持って困っている。ケンの返事は博物館までの〔①〕を教えている。', blanks: ['道'] },
      { step: 2, text: '女性は博物館への行き方を〔②〕必要がある。「〜への道を教えていただけますか」は Could you tell me the 〔③〕 to 〜? を使う。', blanks: ['たずねる', 'way'] },
      { step: 3, text: '5語以上あるか数える。文の最初は大文字、最後は疑問文なので〔④〕をつける。', blanks: ['?'] },
    ],
    answer: 'Could you tell me the way to the museum? / Excuse me. How can I get to the museum?',
    explanation: 'ケンが Sure. のあとに道順を説明しているので、女性は博物館への行き方をたずねたとわかります。Could you tell me the way to 〜? や How can I get to 〜? を使えば、短く正確に書けます。',
  },
  practice: [
    {
      instr: '次の場面を読み、Yuta の吹き出しに入る英文を書きなさい。ただし、5語以上で書くこと。',
      body: '【場面】放課後、急に雨が降ってきた。昇降口でメアリーが傘を持っていなくて困っている。ユウタは大きな傘を持っている。\nYuta: (　　　　　　　　)\nMary: Really? Thank you, Yuta!',
      answer: 'You can use my umbrella. / Shall we go home together under my umbrella?',
      explanation: '傘がなくて困っている相手に、自分の傘を使うことを申し出る場面です。You can 〜.「〜していいよ」や Shall we 〜?「いっしょに〜しませんか」を使います。',
    },
    {
      instr: '次の場面を読み、Ken の吹き出しに入る英文を書きなさい。ただし、6語以上で書くこと。',
      body: '【場面】教室で。ケンは土曜日のサッカーの試合のチケットを2枚持っていて、友達のジムをいっしょに見に行こうと誘いたい。\nKen: (　　　　　　　　)\nJim: Sure! What time does it start?',
      answer: 'Do you want to watch a soccer game with me on Saturday? / I have two tickets for a soccer game. Will you come with me?',
      explanation: '相手を誘う場面なので、Do you want to 〜? / Will you 〜? / Why don\'t we 〜? などを使います。「土曜日」「サッカーの試合」を入れると、ジムの「何時に始まるの？」という返事ともつながります。',
    },
    {
      instr: '次の場面を読み、Saki の吹き出しに入る英文を書きなさい。ただし、遅れた理由も入れて6語以上で書くこと。',
      body: '【場面】英語の授業が始まって5分後、サキが教室に入ってくる。朝、乗る予定のバスに乗り遅れてしまったのだ。\nSaki: (　　　　　　　　)\nMs. Green: That\'s OK. Please sit down.',
      answer: "I'm sorry I'm late. I missed the bus. / I'm sorry. I missed the bus this morning.",
      explanation: '遅刻をあやまる場面なので I\'m sorry (I\'m late). で始め、理由「バスに乗り遅れた」を I missed the bus. と過去形で書きます。',
    },
  ],
});
