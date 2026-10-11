// 入試対策: 文法の総まとめの基礎問題(苦手な人・初学者向け)。すべてオリジナル。
(function () {
  const add = (key, qs) => { if (typeof EXAM_GRAMMAR !== 'undefined' && EXAM_GRAMMAR[key]) EXAM_GRAMMAR[key].basic = qs; };

  /* 第1章 動詞 */
  add('verbs', [
    { type: 'choice', jp: '私は昨日とても疲れていました。', en: 'I ( ) very tired yesterday.', options: ['am', 'was', 'were', 'be'], answer: 1, point: 'am の過去形は was。yesterday は「過去」の目じるし' },
    { type: 'choice', jp: '彼らは昨日、学校にいませんでした。', en: 'They ( ) at school yesterday.', options: ["wasn't", "aren't", "weren't", "didn't"], answer: 2, point: 'are の過去形は were。否定は were not(weren\'t)' },
    { type: 'choice', jp: '私は昨日テニスをしました。', en: 'I ( ) tennis yesterday.', options: ['play', 'played', 'playing', 'plays'], answer: 1, point: 'yesterday があるので過去形。ふつうの動詞は -ed をつける' },
    { type: 'choice', jp: '私は昨日、駅でケンに会いました。', en: 'I ( ) Ken at the station yesterday.', options: ['meet', 'met', 'meeted', 'meets'], answer: 1, point: 'meet は不規則動詞。過去形は met(-ed はつけない)' },
    { type: 'choice', jp: '私は今、音楽を聞いています。', en: 'I ( ) to music now.', options: ['am listening', 'listening', 'was listening', 'listened'], answer: 0, point: '「今〜している」は〈am / is / are + 〜ing〉(現在進行形)' },
    { type: 'choice', jp: '私はそのとき本を読んでいました。', en: 'I ( ) a book then.', options: ['am reading', 'was reading', 'were reading', 'reading'], answer: 1, point: '「そのとき〜していた」は〈was / were + 〜ing〉。主語が I なので was' },

    { type: 'fill', jp: '昨日は晴れでした。', en: 'It ( ) sunny yesterday.', answers: ['was'], point: '天気の it。is の過去形は was' },
    { type: 'fill', jp: '彼女は昨日、母親を手伝いました。', en: 'She ( ) her mother yesterday.', answers: ['helped'], point: '規則動詞の過去形は 原形 + -ed(help → helped)' },
    { type: 'fill', jp: '私は昨日、新しい本を買いました。', en: 'I ( ) a new book yesterday.', answers: ['bought'], point: 'buy - bought - bought。形が変わる動詞は1つずつ覚える' },
    { type: 'fill', jp: 'その男の子たちは今、公園で走っています。', en: 'The boys ( ) ( ) in the park now.', answers: ['are', 'running'], point: '主語が複数 → are + 〜ing。run は n を重ねて running' },

    { type: 'order', jp: '私は昨日、公園へ行きました。', words: ['to', 'yesterday', 'went', 'I', 'the park'], answer: 'I went to the park yesterday.', point: 'go の過去形は went。〈主語 + 動詞 + 場所 + 時〉の順' },
    { type: 'order', jp: '私の姉はそのときテレビを見ていました。', words: ['TV', 'was', 'then', 'my sister', 'watching'], answer: 'My sister was watching TV then.', point: '過去進行形〈was + 〜ing〉「〜していた」' },
  ]);

  /* 第2章 未来表現・助動詞 */
  add('future', [
    { type: 'choice', jp: '私は明日、祖母を訪ねるつもりです。', en: "I'm going ( ) visit my grandmother tomorrow.", options: ['to', 'for', 'at', 'will'], answer: 0, point: '〈be going to + 動詞の原形〉で「〜するつもりだ」' },
    { type: 'choice', jp: '彼は来年15歳になります。', en: 'He ( ) be fifteen next year.', options: ['will', 'is', 'does', 'was'], answer: 0, point: '未来のことは〈will + 動詞の原形〉。be は is の原形' },
    { type: 'choice', jp: '窓を開けてくれますか。', en: '( ) you open the window?', options: ['Shall', 'Can', 'Must', 'Do'], answer: 1, point: 'Can you 〜? は「〜してくれますか」と頼むときの言い方' },
    { type: 'choice', jp: '私はピアノをひくことができます。', en: 'I ( ) play the piano.', options: ['can', 'must', 'am', 'have'], answer: 0, point: '「〜できる」は〈can + 動詞の原形〉' },
    { type: 'choice', jp: 'あなたはもう家に帰らなければなりません。', en: 'You ( ) go home now.', options: ['can', 'must', 'may', 'will'], answer: 1, point: '「〜しなければならない」は〈must + 動詞の原形〉' },
    { type: 'choice', jp: 'このペンを使ってもいいですか。', en: '( ) I use this pen?', options: ['May', 'Must', 'Do', 'Am'], answer: 0, point: 'May I 〜? は「〜してもいいですか」と許可を求める言い方' },

    { type: 'fill', jp: '私たちは明日、テニスをする予定です。', en: 'We are ( ) ( ) play tennis tomorrow.', answers: ['going', 'to'], point: 'be going to 〜「〜する予定だ」。be動詞は主語に合わせる' },
    { type: 'fill', jp: 'いっしょに歌を歌いましょうか。— はい、そうしましょう。', en: "( ) we sing a song together? — Yes, let's.", answers: ['Shall'], point: 'Shall we 〜?「(いっしょに)〜しましょうか」。答えは Yes, let\'s.' },
    { type: 'fill', jp: '彼は毎朝6時に起きなければなりません。', en: 'He ( ) ( ) get up at six every morning.', answers: ['has', 'to'], point: '「〜しなければならない」= have to。主語が3人称単数なので has to' },
    { type: 'fill', jp: 'あなたは野菜を食べるべきです。', en: 'You ( ) eat vegetables.', answers: ['should'], point: '「〜すべきだ・〜したほうがよい」は〈should + 動詞の原形〉' },

    { type: 'order', jp: 'この箱を運んでくれますか。', words: ['you', 'this box', 'carry', 'can'], answer: 'Can you carry this box?', point: '〈Can you + 動詞の原形 〜?〉で人にものを頼む' },
    { type: 'order', jp: '私は紅茶を1杯ほしいです。', words: ['a cup of', 'tea', 'like', 'would', 'I'], answer: 'I would like a cup of tea.', point: 'would like 〜 は want 〜 のていねいな言い方' },
  ]);

  /* 第3章 命令文・否定表現 */
  add('imperative', [
    { type: 'choice', jp: '気をつけてください。', en: 'Please ( ) careful.', options: ['be', 'are', 'is', 'do'], answer: 0, point: '形容詞(careful)の命令文は be で始める。be は原形' },
    { type: 'choice', jp: 'ここで泳いではいけません。', en: '( ) swim here.', options: ["Don't", 'Not', 'No', "Aren't"], answer: 0, point: '「〜してはいけない」は〈Don\'t + 動詞の原形〉' },
    { type: 'choice', jp: 'いっしょに昼食を食べましょう。', en: '( ) eat lunch together.', options: ["Let's", 'Let', 'Shall', 'Please'], answer: 0, point: '「〜しましょう」は〈Let\'s + 動詞の原形〉' },
    { type: 'choice', jp: '早く起きなさい、そうすれば朝食を食べられますよ。', en: 'Get up early, ( ) you can eat breakfast.', options: ['and', 'or', 'but', 'if'], answer: 0, point: '〈命令文, and 〜〉=「…しなさい、そうすれば〜」' },
    { type: 'choice', jp: 'かさを持っていきなさい、そうしないとぬれますよ。', en: "Take an umbrella, ( ) you'll get wet.", options: ['and', 'or', 'but', 'if'], answer: 1, point: '〈命令文, or 〜〉=「…しなさい、そうしないと〜」' },
    { type: 'choice', jp: '公園にはだれもいませんでした。', en: 'There was ( ) in the park.', options: ['nobody', 'anybody', 'somebody', 'everybody'], answer: 0, point: 'nobody =「だれも〜ない」。not を使わずに否定の意味になる' },

    { type: 'fill', jp: '窓を開けてはいけません。', en: '( ) open the window.', answers: ["Don't"], point: '禁止の命令文は Don\'t で始める' },
    { type: 'fill', jp: 'いっしょにテレビを見ましょう。', en: '( ) ( ) TV together.', answers: ["Let's", 'watch'], point: 'Let\'s のあとは動詞の原形。テレビを見る = watch TV' },
    { type: 'fill', jp: '速く走りなさい、そうすればバスに間に合いますよ。', en: "Run fast, ( ) you'll catch the bus.", answers: ['and'], point: '「そうすれば」は and、「そうしないと」は or' },
    { type: 'fill', jp: '私にはお金がまったくありません。', en: 'I have ( ) money.', answers: ['no'], point: '〈no + 名詞〉=「まったく〜がない」(= not any)' },

    { type: 'order', jp: '教科書を開いてください。', words: ['your', 'open', 'please', 'textbook'], answer: 'Please open your textbook.', point: 'Please + 命令文 でていねいな頼み方になる' },
    { type: 'order', jp: '学校に遅れてはいけません。', words: ["don't", 'late', 'be', 'for school'], answer: "Don't be late for school.", point: 'be動詞の否定の命令文は Don\'t be 〜' },
  ]);

  /* 第4章 間接疑問・付加疑問・疑問詞 */
  add('questions', [
    { type: 'choice', jp: '彼がだれか知っていますか。', en: 'Do you know who ( )?', options: ['is he', 'he is', 'does he', 'he does'], answer: 1, point: '文の中の疑問(間接疑問)は〈疑問詞 + 主語 + 動詞〉の語順' },
    { type: 'choice', jp: '私はケンが何を食べたのか知りません。', en: "I don't know what Ken ( ).", options: ['eat', 'ate', 'eats', 'eating'], answer: 1, point: '間接疑問では did を使わず、動詞を過去形にする(what Ken ate)' },
    { type: 'choice', jp: 'あなたは学生ですね。', en: 'You are a student, ( )?', options: ["aren't you", "don't you", "isn't it", 'are you'], answer: 0, point: '付加疑問: 前がふつうの文なら否定形で〈be動詞 + not + 代名詞?〉' },
    { type: 'choice', jp: '彼はサッカーが好きですね。', en: 'He likes soccer, ( )?', options: ["isn't he", "doesn't he", "don't he", 'does he'], answer: 1, point: '一般動詞(likes)の文の付加疑問は doesn\'t he?' },
    { type: 'choice', jp: '赤と青では、どちらが好きですか。', en: '( ) do you like, red or blue?', options: ['What', 'Which', 'Who', 'Where'], answer: 1, point: '「AとBのどちら」は Which' },
    { type: 'choice', jp: 'あなたはどうやって学校に来ますか。— 自転車でです。', en: '( ) do you come to school? — By bike.', options: ['What', 'How', 'Where', 'Why'], answer: 1, point: '「どうやって(方法)」は How' },

    { type: 'fill', jp: 'あれが何か教えてください。', en: 'Please tell me what that ( ).', answers: ['is'], point: '間接疑問は〈what + 主語 + 動詞〉。is は最後に来る' },
    { type: 'fill', jp: '私は彼女が何をほしがっているか知っています。', en: 'I know what she ( ).', answers: ['wants'], point: '間接疑問では does を使わず、動詞に -s をつける' },
    { type: 'fill', jp: '今日は寒いですね。', en: "It's cold today, ( ) ( )?", answers: ["isn't", 'it'], point: 'It\'s(= It is)の付加疑問は isn\'t it?' },
    { type: 'fill', jp: 'あなたは何歳ですか。', en: 'How ( ) are you?', answers: ['old'], point: '年れいをたずねるときは How old 〜?' },

    { type: 'order', jp: '今何時か知っていますか。', words: ['know', 'it', 'what time', 'is', 'you', 'do'], answer: 'Do you know what time it is?', point: 'Do you know のあとは〈疑問詞 + 主語 + 動詞〉の語順' },
    { type: 'order', jp: 'これはだれのペンですか。', words: ['is', 'pen', 'this', 'whose'], answer: 'Whose pen is this?', point: '「だれの〜」は〈Whose + 名詞〉で文を始める' },
  ]);

  /* 第5章 名詞・代名詞・冠詞 */
  add('nouns', [
    { type: 'choice', jp: '私はりんごを3つ持っています。', en: 'I have three ( ).', options: ['apple', 'apples', 'an apple', 'the apple'], answer: 1, point: '2つ以上のときは名詞を複数形(-s)にする' },
    { type: 'choice', jp: '机の上に箱が2つあります。', en: 'There are two ( ) on the desk.', options: ['box', 'boxs', 'boxes', 'boxies'], answer: 2, point: 's, x, ch, sh で終わる語は -es をつける(box → boxes)' },
    { type: 'choice', jp: 'このかばんは古いです。新しいのがほしいです。', en: 'This bag is old. I want a new ( ).', options: ['it', 'one', 'other', 'this'], answer: 1, point: '同じ種類の別のもの(a + 名詞)は one で表す' },
    { type: 'choice', jp: 'このペンは私のものです。', en: 'This pen is ( ).', options: ['my', 'me', 'mine', 'I'], answer: 2, point: '「私のもの」= mine(所有代名詞)' },
    { type: 'choice', jp: '彼は鏡で自分を見ました。', en: 'He looked at ( ) in the mirror.', options: ['his', 'he', 'himself', 'herself'], answer: 2, point: '「自分自身」は -self。he → himself' },
    { type: 'choice', jp: '私はバスで学校へ行きます。', en: 'I go to school ( ) bus.', options: ['by', 'by a', 'on', 'in'], answer: 0, point: '交通手段の by のあとは a / the をつけない(by bus)' },

    { type: 'fill', jp: '私には子どもが2人います。', en: 'I have two ( ).', answers: ['children'], point: 'child の複数形は children(-s をつけない特別な形)' },
    { type: 'fill', jp: 'このケーキはおいしいです。もう1ついただけますか。', en: 'This cake is good. Can I have ( ) one?', answers: ['another'], point: '「もう1つの」は another' },
    { type: 'fill', jp: 'あのかばんは彼のものです。', en: 'That bag is ( ).', answers: ['his'], point: '「彼のもの」は his(「彼の」と同じ形)' },
    { type: 'fill', jp: '私は毎日ギターをひきます。', en: 'I play ( ) guitar every day.', answers: ['the'], point: '楽器をひくときは〈play the + 楽器〉' },

    { type: 'order', jp: 'これらの本は私のものです。', words: ['books', 'mine', 'are', 'these'], answer: 'These books are mine.', point: 'these + 複数名詞 + are。「私のもの」は mine' },
    { type: 'order', jp: '私は1時間勉強しました。', words: ['for', 'studied', 'an', 'hour', 'I'], answer: 'I studied for an hour.', point: 'hour は母音の音で始まるので a ではなく an' },
  ]);

  /* 第6章 不定詞 */
  add('infinitive', [
    { type: 'choice', jp: '私はテニスをしたいです。', en: 'I want ( ) tennis.', options: ['play', 'to play', 'playing', 'played'], answer: 1, point: 'want to 〜「〜したい」。to のあとは動詞の原形' },
    { type: 'choice', jp: '彼は本を買うために本屋へ行きました。', en: 'He went to the bookstore ( ) buy a book.', options: ['to', 'for', 'and', 'at'], answer: 0, point: '〈to + 動詞の原形〉で「〜するために」(目的)' },
    { type: 'choice', jp: '京都には訪れる場所がたくさんあります。', en: 'There are many places ( ) in Kyoto.', options: ['visit', 'to visit', 'for visit', 'visits'], answer: 1, point: '名詞のあとの〈to + 原形〉は「〜するための・〜すべき」' },
    { type: 'choice', jp: '私は泳ぎ方を知りません。', en: "I don't know ( ) to swim.", options: ['what', 'how', 'where', 'who'], answer: 1, point: 'how to 〜 =「〜のしかた」' },
    { type: 'choice', jp: '私は兄に手伝ってほしいです。', en: 'I want my brother ( ) me.', options: ['help', 'to help', 'helping', 'helps'], answer: 1, point: '〈want + 人 + to 〜〉=「人に〜してほしい」' },
    { type: 'choice', jp: '海で泳ぐのは私にとって楽しいです。', en: 'It is fun for me ( ) in the sea.', options: ['swim', 'to swim', 'swam', 'swims'], answer: 1, point: '〈It is 〜 for 人 to …〉=「…することは人にとって〜だ」' },

    { type: 'fill', jp: '私は本を読むことが好きです。', en: 'I like ( ) ( ) books.', answers: ['to', 'read'], point: '〈to + 動詞の原形〉で「〜すること」' },
    { type: 'fill', jp: '私は何を買えばよいかわかりません。', en: "I don't know ( ) ( ) buy.", answers: ['what', 'to'], point: 'what to 〜 =「何を〜すればよいか」' },
    { type: 'fill', jp: '先生は私たちに静かにするように言いました。', en: 'The teacher told us ( ) ( ) quiet.', answers: ['to', 'be'], point: '〈tell + 人 + to 〜〉=「人に〜するように言う」。quiet の前は be' },
    { type: 'fill', jp: '英語を勉強することは大切です。', en: 'It is important ( ) study English.', answers: ['to'], point: '〈It is 〜 to …〉=「…することは〜だ」。It が to 以下を指す' },

    { type: 'order', jp: '私は勉強するために図書館へ行きました。', words: ['study', 'to', 'I', 'to the library', 'went'], answer: 'I went to the library to study.', point: '「〜するために」の〈to + 原形〉は文の後ろに置く' },
    { type: 'order', jp: '私は彼女に手伝ってくれるように頼みました。', words: ['her', 'to', 'asked', 'help me', 'I'], answer: 'I asked her to help me.', point: '〈ask + 人 + to 〜〉=「人に〜するように頼む」' },
  ]);

  /* 第7章 動名詞 */
  add('gerund', [
    { type: 'choice', jp: '私は音楽を聞いて楽しみました。', en: 'I enjoyed ( ) to music.', options: ['listen', 'to listen', 'listening', 'listened'], answer: 2, point: 'enjoy のあとは 〜ing(動名詞)。enjoy to 〜 は×' },
    { type: 'choice', jp: '私の趣味は写真をとることです。', en: 'My hobby is ( ) pictures.', options: ['take', 'taking', 'took', 'takes'], answer: 1, point: '動名詞(〜ing)は「〜すること」。is のあとにも置ける' },
    { type: 'choice', jp: '私は料理をすることに興味があります。', en: 'I am interested in ( ).', options: ['cook', 'to cook', 'cooking', 'cooked'], answer: 2, point: '前置詞(in, at, for など)のあとの動詞は 〜ing' },
    { type: 'choice', jp: '私は朝食を食べる前に顔を洗います。', en: 'I wash my face before ( ) breakfast.', options: ['eat', 'eating', 'to eat', 'ate'], answer: 1, point: 'before も前置詞として使える → 後ろは 〜ing' },
    { type: 'choice', jp: '私は新しい自転車を買いたいです。', en: 'I want ( ) a new bike.', options: ['buy', 'to buy', 'buying', 'bought'], answer: 1, point: 'want のあとは to 〜(不定詞)。want buying は×' },
    { type: 'choice', jp: '雨がやみました。', en: 'It stopped ( ).', options: ['rain', 'to rain', 'raining', 'rained'], answer: 2, point: 'stop 〜ing =「〜するのをやめる」' },

    { type: 'fill', jp: '歌うことは楽しいです。', en: '( ) is fun.', answers: ['Singing'], point: '動名詞は文の主語にもなる。主語の 〜ing は3人称単数あつかい' },
    { type: 'fill', jp: '私のパーティーに来てくれてありがとう。', en: 'Thank you for ( ) to my party.', answers: ['coming'], point: 'Thank you for 〜ing「〜してくれてありがとう」' },
    { type: 'fill', jp: '私はその手紙を書き終えました。', en: 'I finished ( ) the letter.', answers: ['writing'], point: 'finish のあとは 〜ing。write は e をとって writing' },
    { type: 'fill', jp: '明日、この本を持ってくるのを忘れないでね。', en: 'Remember ( ) ( ) this book tomorrow.', answers: ['to', 'bring'], point: 'remember to 〜 =「(これから)忘れずに〜する」' },

    { type: 'order', jp: 'ピアノをひくことは楽しいです。', words: ['is', 'the piano', 'fun', 'playing'], answer: 'Playing the piano is fun.', point: '〈〜ing + 語句〉が文の主語になる' },
    { type: 'order', jp: '彼女は泳ぐことが得意です。', words: ['at', 'swimming', 'she', 'good', 'is'], answer: 'She is good at swimming.', point: 'be good at 〜ing =「〜することが得意だ」' },
  ]);

  /* 第8章 分詞 */
  add('participle', [
    { type: 'choice', jp: 'ステージで踊っている女の子は私の妹です。', en: 'The girl ( ) on the stage is my sister.', options: ['dance', 'dancing', 'danced', 'dances'], answer: 1, point: '「〜している…」は 〜ing。語句がつくと名詞の後ろに置く' },
    { type: 'choice', jp: '眠っているねこを見て。', en: 'Look at the ( ) cat.', options: ['sleep', 'sleeping', 'slept', 'sleeps'], answer: 1, point: '分詞1語だけなら名詞の前に置く(a sleeping cat)' },
    { type: 'choice', jp: 'これは多くの人に愛されている歌です。', en: 'This is a song ( ) by many people.', options: ['love', 'loving', 'loved', 'loves'], answer: 2, point: '「〜された・〜されている…」は過去分詞' },
    { type: 'choice', jp: '割れたコップにさわってはいけません。', en: "Don't touch the ( ) glass.", options: ['break', 'breaking', 'broken', 'broke'], answer: 2, point: 'コップは「割られた」側 → 過去分詞 broken' },
    { type: 'choice', jp: '公園で遊んでいる子どもたちは楽しそうです。', en: 'The children ( ) in the park look happy.', options: ['play', 'playing', 'played', 'plays'], answer: 1, point: '子どもたちは「遊んでいる」側 → 現在分詞' },
    { type: 'choice', jp: '京都は多くの人が訪れる都市です。', en: 'Kyoto is a city ( ) by many people.', options: ['visit', 'visiting', 'visited', 'visits'], answer: 2, point: '都市は「訪れられる」側 → 過去分詞。by 〜 が目じるし' },

    { type: 'fill', jp: '歌を歌っている女の子はユミです。', en: 'The girl ( ) a song is Yumi.', answers: ['singing'], point: '〈名詞 + 〜ing + 語句〉で「〜している(名詞)」' },
    { type: 'fill', jp: 'これは兄が書いた手紙です。', en: 'This is a letter ( ) by my brother.', answers: ['written'], point: 'write - wrote - written。「書かれた手紙」は過去分詞' },
    { type: 'fill', jp: '私は泳いでいる魚を見ました。', en: 'I saw a ( ) fish.', answers: ['swimming'], point: '魚は「泳いでいる」側 → 現在分詞。swim は m を重ねる' },
    { type: 'fill', jp: '私はその試合にわくわくしました。', en: 'I was ( ) about the game.', answers: ['excited'], point: '人が「わくわくした」は excited、物事が「わくわくさせる」は exciting' },

    { type: 'order', jp: 'テニスをしている男の子はケンです。', words: ['tennis', 'is', 'the boy', 'Ken', 'playing'], answer: 'The boy playing tennis is Ken.', point: '主語は The boy playing tennis のかたまり。動詞は is' },
    { type: 'order', jp: 'これは姉が作ったケーキです。', words: ['made', 'a cake', 'this', 'by my sister', 'is'], answer: 'This is a cake made by my sister.', point: '〈名詞 + 過去分詞 + by 〜〉「〜によって…された(名詞)」' },
  ]);

  /* 第9章 比較 */
  add('compare', [
    { type: 'choice', jp: '私はケンと同じくらいの背の高さです。', en: 'I am as ( ) as Ken.', options: ['tall', 'taller', 'tallest', 'more tall'], answer: 0, point: '〈as + もとの形 + as〉「〜と同じくらい…」' },
    { type: 'choice', jp: '私の兄は私より背が高いです。', en: 'My brother is ( ) than me.', options: ['tall', 'taller', 'tallest', 'more tall'], answer: 1, point: '〈比較級(-er) + than〉「〜より…」' },
    { type: 'choice', jp: 'この花はあの花より美しいです。', en: 'This flower is ( ) than that one.', options: ['beautiful', 'more beautiful', 'most beautiful', 'beautifuler'], answer: 1, point: '長い語の比較級は -er ではなく more 〜' },
    { type: 'choice', jp: '私はねこより犬が好きです。', en: 'I like dogs ( ) than cats.', options: ['good', 'well', 'better', 'best'], answer: 2, point: 'like A better than B「BよりAが好き」' },
    { type: 'choice', jp: 'ケンはクラスでいちばん背が高いです。', en: 'Ken is the ( ) in his class.', options: ['tall', 'taller', 'tallest', 'most tall'], answer: 2, point: '「いちばん…」は〈the + 最上級(-est)〉' },
    { type: 'choice', jp: 'これは私たちの市でいちばん大きな公園です。', en: 'This is the biggest park ( ) our city.', options: ['in', 'of', 'than', 'at'], answer: 0, point: '最上級のあと、場所・範囲は in、複数・数は of' },

    { type: 'fill', jp: '私の自転車はあなたのと同じくらい新しいです。', en: 'My bike is as ( ) as yours.', answers: ['new'], point: 'as と as の間は形容詞のもとの形' },
    { type: 'fill', jp: '今日は昨日より暑いです。', en: 'Today is ( ) than yesterday.', answers: ['hotter'], point: 'hot は t を重ねて hotter' },
    { type: 'fill', jp: 'この本は5冊の中でいちばんおもしろいです。', en: 'This book is the ( ) interesting of the five.', answers: ['most'], point: '長い語の最上級は the most 〜' },
    { type: 'fill', jp: 'ケンはクラスのほかのどの男の子よりも背が高いです。', en: 'Ken is taller than any ( ) boy in his class.', answers: ['other'], point: '〈比較級 + than any other + 単数名詞〉= 最上級と同じ意味' },

    { type: 'order', jp: '私は兄と同じくらい速く走れます。', words: ['as', 'fast', 'I', 'run', 'as', 'can', 'my brother'], answer: 'I can run as fast as my brother.', point: '副詞(fast)でも〈as + もとの形 + as〉' },
    { type: 'order', jp: '夏は1年でいちばんよい季節です。', words: ['season', 'summer', 'the best', 'is', 'of the year'], answer: 'Summer is the best season of the year.', point: 'good の最上級は best(good - better - best)' },
  ]);

  /* 第10章 受動態 */
  add('passive', [
    { type: 'choice', jp: 'この歌は多くの国で歌われています。', en: 'This song is ( ) in many countries.', options: ['sing', 'sang', 'sung', 'singing'], answer: 2, point: '受動態は〈be動詞 + 過去分詞〉。sing - sang - sung' },
    { type: 'choice', jp: 'この寺は400年前に建てられました。', en: 'This temple ( ) built 400 years ago.', options: ['is', 'was', 'were', 'did'], answer: 1, point: '過去の受動態は〈was / were + 過去分詞〉。主語が単数なので was' },
    { type: 'choice', jp: 'この部屋は毎日使われますか。', en: '( ) this room used every day?', options: ['Is', 'Does', 'Do', 'Was'], answer: 0, point: '受動態の疑問文は be動詞を主語の前に出す' },
    { type: 'choice', jp: 'この本は子どもでも読むことができます。', en: 'This book can ( ) read by children.', options: ['is', 'be', 'been', 'being'], answer: 1, point: '助動詞のあとは原形 → 〈can be + 過去分詞〉' },
    { type: 'choice', jp: '私たちはグリーン先生に英語を教わりました。', en: 'We were ( ) English by Ms. Green.', options: ['teach', 'taught', 'teaching', 'teached'], answer: 1, point: '〈人 + be + 過去分詞 + もの〉の受動態。teach - taught - taught' },
    { type: 'choice', jp: 'その山は雪でおおわれています。', en: 'The mountain is covered ( ) snow.', options: ['with', 'by', 'in', 'of'], answer: 0, point: 'be covered with 〜「〜でおおわれている」。by 以外の前置詞を使う' },

    { type: 'fill', jp: '英語はこの学校で教えられています。', en: 'English ( ) ( ) at this school.', answers: ['is', 'taught'], point: '〈is + 過去分詞〉「〜されている」' },
    { type: 'fill', jp: 'その手紙は明日送られるでしょう。', en: 'The letter will ( ) ( ) tomorrow.', answers: ['be', 'sent'], point: '〈will be + 過去分詞〉。send - sent - sent' },
    { type: 'fill', jp: 'この花は日本語で「さくら」と呼ばれています。', en: 'This flower is ( ) sakura in Japanese.', answers: ['called'], point: 'call A B の受動態 → A is called B「AはBと呼ばれる」' },
    { type: 'fill', jp: '私は野球に興味があります。', en: 'I am ( ) ( ) baseball.', answers: ['interested', 'in'], point: 'be interested in 〜「〜に興味がある」' },

    { type: 'order', jp: 'この自転車は日本で作られました。', words: ['made', 'in Japan', 'this bike', 'was'], answer: 'This bike was made in Japan.', point: '〈was + 過去分詞〉「〜された」' },
    { type: 'order', jp: 'オーストラリアでは英語が話されていますか。', words: ['spoken', 'English', 'is', 'in Australia'], answer: 'Is English spoken in Australia?', point: '受動態の疑問文〈Is + 主語 + 過去分詞 〜?〉' },
  ]);

  /* 第11章 現在完了 */
  add('perfect', [
    { type: 'choice', jp: '私は5年間ここに住んでいます。', en: 'I have ( ) here for five years.', options: ['live', 'lived', 'living', 'lives'], answer: 1, point: '現在完了は〈have / has + 過去分詞〉。「ずっと〜している」(継続)' },
    { type: 'choice', jp: '私は彼と10年来の知り合いです。', en: 'I have known him ( ) ten years.', options: ['for', 'since', 'in', 'at'], answer: 0, point: '期間の長さ(ten years)は for、始まった時点は since' },
    { type: 'choice', jp: '私は一度京都を訪れたことがあります。', en: 'I have ( ) Kyoto once.', options: ['visit', 'visited', 'visiting', 'visits'], answer: 1, point: '「〜したことがある」(経験)も〈have + 過去分詞〉' },
    { type: 'choice', jp: '私はパンダを一度も見たことがありません。', en: 'I have ( ) seen a panda.', options: ['ever', 'never', 'already', 'yet'], answer: 1, point: '「一度も〜したことがない」は have never + 過去分詞' },
    { type: 'choice', jp: '私はちょうど昼食を食べたところです。', en: 'I have ( ) eaten lunch.', options: ['just', 'ever', 'never', 'yet'], answer: 0, point: '「ちょうど〜したところだ」は have just + 過去分詞(完了)' },
    { type: 'choice', jp: '彼は2時間ずっとテレビを見ています。', en: 'He has been ( ) TV for two hours.', options: ['watch', 'watched', 'watching', 'watches'], answer: 2, point: '動作が続いているときは〈have / has been + 〜ing〉(現在完了進行形)' },

    { type: 'fill', jp: '私たちは先週からずっと忙しいです。', en: 'We ( ) ( ) busy since last week.', answers: ['have', 'been'], point: 'be動詞の過去分詞は been。since 〜「〜からずっと」' },
    { type: 'fill', jp: 'あなたは今までにすしを食べたことがありますか。', en: 'Have you ( ) eaten sushi?', answers: ['ever'], point: '「今までに〜したことがありますか」は Have you ever + 過去分詞?' },
    { type: 'fill', jp: '彼女はもう手紙を書きました。', en: 'She has ( ) written the letter.', answers: ['already'], point: '肯定文の「もう・すでに」は already(have と過去分詞の間)' },
    { type: 'fill', jp: '私は今朝からずっと本を読んでいます。', en: 'I have ( ) ( ) a book since this morning.', answers: ['been', 'reading'], point: '現在完了進行形〈have been + 〜ing〉「ずっと〜している」' },

    { type: 'order', jp: '私は奈良に2回行ったことがあります。', words: ['twice', 'have', 'to Nara', 'I', 'been'], answer: 'I have been to Nara twice.', point: 'have been to 〜 =「〜へ行ったことがある」。回数は最後' },
    { type: 'order', jp: 'あなたはもう昼食を食べ終えましたか。', words: ['finished', 'yet', 'you', 'your lunch', 'have'], answer: 'Have you finished your lunch yet?', point: '疑問文の「もう」は yet で、文の最後に置く' },
  ]);

  /* 第12章 関係代名詞 */
  add('relative', [
    { type: 'choice', jp: 'ギターをひく男の子は私の兄です。', en: 'The boy ( ) plays the guitar is my brother.', options: ['who', 'which', 'whose', 'where'], answer: 0, point: '人のあとに〈who + 動詞〉で説明を加える(主格)' },
    { type: 'choice', jp: 'これは駅へ行くバスです。', en: 'This is the bus ( ) goes to the station.', options: ['who', 'which', 'whose', 'what'], answer: 1, point: '人以外(もの・動物)のあとは which' },
    { type: 'choice', jp: 'これは私が昨日買った本です。', en: 'This is the book ( ) I bought yesterday.', options: ['who', 'which', 'whose', 'what'], answer: 1, point: '〈もの + which + 主語 + 動詞〉「(主語)が〜した(もの)」(目的格)' },
    { type: 'choice', jp: '彼は私が大好きな先生です。', en: 'He is a teacher ( ) I like very much.', options: ['which', 'that', 'whose', 'what'], answer: 1, point: 'that は人にもものにも使える' },
    { type: 'choice', jp: '私は髪の長い女の子を知っています。', en: 'I know a girl ( ) hair is long.', options: ['who', 'which', 'whose', 'that'], answer: 2, point: '「その人の〜が」とつなぐときは whose + 名詞' },
    { type: 'choice', jp: 'これは私がとった写真です。', en: 'This is a picture ( ) took.', options: ['I', 'me', 'my', 'mine'], answer: 0, point: '目的格の関係代名詞は省略できる → 〈名詞 + 主語 + 動詞〉' },

    { type: 'fill', jp: '私は3つの言語を話す男の子を知っています。', en: 'I know a boy who ( ) three languages.', answers: ['speaks'], point: 'who の前の名詞(a boy)が単数 → 動詞に -s' },
    { type: 'fill', jp: 'これは私が先週買ったかばんです。', en: 'This is the bag which I ( ) last week.', answers: ['bought'], point: 'which のあとは〈主語 + 動詞〉。last week なので過去形' },
    { type: 'fill', jp: 'これは屋根が赤い家です。', en: 'This is a house ( ) roof is red.', answers: ['whose'], point: '「その家の屋根が」→ whose roof' },
    { type: 'fill', jp: '私が昨日会った男の人は親切でした。', en: 'The man I ( ) yesterday was kind.', answers: ['met'], point: 'The man (that) I met yesterday が主語のかたまり。動詞は was' },

    { type: 'order', jp: '私は速く走る犬を飼っています。', words: ['a dog', 'runs', 'which', 'I', 'have', 'fast'], answer: 'I have a dog which runs fast.', point: '〈もの + which + 動詞〉で後ろから説明する' },
    { type: 'order', jp: 'これは私が作ったケーキです。', words: ['that', 'the cake', 'made', 'this', 'is', 'I'], answer: 'This is the cake that I made.', point: '〈名詞 + that + 主語 + 動詞〉「(主語)が〜した(名詞)」' },
  ]);

  /* 第13章 仮定法 */
  add('subjunctive', [
    { type: 'choice', jp: 'もし車を持っていたら、海へ行くのに。', en: 'If I ( ) a car, I would go to the sea.', options: ['have', 'had', 'has', 'having'], answer: 1, point: '現実とちがうことは〈If + 過去形, would + 原形〉(仮定法)' },
    { type: 'choice', jp: 'もし晴れていれば、私たちはテニスをするのに。', en: 'If it were sunny, we ( ) play tennis.', options: ['will', 'would', 'are', 'do'], answer: 1, point: '仮定法の後半は〈would / could + 動詞の原形〉' },
    { type: 'choice', jp: 'もし私があなたなら、医者にみてもらうでしょう。', en: 'If I ( ) you, I would see a doctor.', options: ['am', 'are', 'were', 'be'], answer: 2, point: '仮定法の be動詞は主語が I でも were' },
    { type: 'choice', jp: 'もっと時間があればいいのに。', en: 'I wish I ( ) more time.', options: ['have', 'had', 'has', 'having'], answer: 1, point: '〈I wish + 主語 + 過去形〉「〜ならいいのに」' },
    { type: 'choice', jp: '彼女が私の姉ならいいのに。', en: 'I wish she ( ) my sister.', options: ['is', 'were', 'be', 'are'], answer: 1, point: 'I wish のあとの be動詞は were' },
    { type: 'choice', jp: '彼はまるで王様のように話します。', en: 'He talks as ( ) he were a king.', options: ['if', 'when', 'that', 'because'], answer: 0, point: '〈as if + 過去形〉「まるで〜であるかのように」' },

    { type: 'fill', jp: 'もし犬を飼っていたら、毎日散歩させるのに。', en: 'If I ( ) a dog, I would walk it every day.', answers: ['had'], point: '「(実際は飼っていないが)もし飼っていたら」→ have の過去形 had' },
    { type: 'fill', jp: 'もし私があなたなら、もっと一生懸命勉強するでしょう。', en: 'If I were you, I ( ) study harder.', answers: ['would'], point: 'If I were you, I would 〜「私なら〜するよ」(助言)' },
    { type: 'fill', jp: '上手に歌えたらいいのに。', en: 'I ( ) I could sing well.', answers: ['wish'], point: 'I wish I could 〜「〜できたらいいのに」' },
    { type: 'fill', jp: 'もう私たちは家に帰ってもいいころです。', en: "It's time we ( ) home.", answers: ['went'], point: '〈It\'s time + 主語 + 過去形〉「もう〜してもいいころだ」' },

    { type: 'order', jp: 'もし自転車を持っていたら、それに乗るのに。(if で始めて)', words: ['a bike', 'had', 'if', 'I', 'I', 'would', 'ride', 'it'], answer: 'If I had a bike, I would ride it.', point: '〈If + 主語 + 過去形, 主語 + would + 原形〉' },
    { type: 'order', jp: '私がねこだったらいいのに。', words: ['were', 'I', 'wish', 'a cat', 'I'], answer: 'I wish I were a cat.', point: 'I wish I were 〜「〜だったらいいのに」' },
  ]);

  /* 第14章 SVOO・SVOC の文 */
  add('svoc', [
    { type: 'choice', jp: '私は彼女に本をあげました。', en: 'I gave ( ) a book.', options: ['she', 'her', 'hers', 'to her'], answer: 1, point: '〈give + 人 + もの〉「人にものをあげる」。人は目的格(her)' },
    { type: 'choice', jp: 'ケンは私に、ねこが好きだと言いました。', en: 'Ken told me ( ) he liked cats.', options: ['that', 'what', 'who', 'which'], answer: 0, point: '〈tell + 人 + that 〜〉「人に〜だと言う」' },
    { type: 'choice', jp: '彼がどこに住んでいるか教えてください。', en: 'Please tell me where he ( ).', options: ['live', 'lives', 'living', 'is live'], answer: 1, point: '〈tell + 人 + 疑問詞 + 主語 + 動詞〉。he なので lives' },
    { type: 'choice', jp: 'みんなは私をタカと呼びます。', en: 'Everyone ( ) me Taka.', options: ['calls', 'says', 'tells', 'speaks'], answer: 0, point: '〈call A B〉「AをBと呼ぶ」(A = B の関係)' },
    { type: 'choice', jp: 'その歌は私を幸せにしてくれます。', en: 'The song makes me ( ).', options: ['happy', 'happily', 'happiness', 'to happy'], answer: 0, point: '〈make A + 形容詞〉「Aを〜(の状態)にする」' },
    { type: 'choice', jp: '私は母が料理をするのを手伝いました。', en: 'I helped my mother ( ).', options: ['cook', 'cooks', 'cooked', 'to cooking'], answer: 0, point: '〈help + 人 + 動詞の原形〉「人が〜するのを手伝う」' },

    { type: 'fill', jp: '先生は私たちに、その本はおもしろいと言いました。', en: 'My teacher ( ) us that the book was interesting.', answers: ['told'], point: '〈tell + 人 + that 〜〉。tell の過去形は told(say は人を直後に置けない)' },
    { type: 'fill', jp: '彼が何と言ったか教えてください。', en: 'Please tell me what he ( ).', answers: ['said'], point: '〈what + 主語 + 動詞〉。did は使わず過去形 said にする' },
    { type: 'fill', jp: '彼らはその赤ちゃんをハナと名づけました。', en: 'They ( ) the baby Hana.', answers: ['named'], point: '〈name A B〉「AをBと名づける」' },
    { type: 'fill', jp: '父は私に彼のコンピューターを使わせてくれました。', en: 'My father ( ) me use his computer.', answers: ['let'], point: '〈let + 人 + 原形〉「人に(自由に)〜させてやる」。let の過去形も let' },

    { type: 'order', jp: 'あなたがどこに住んでいるか教えてください。', words: ['where', 'me', 'tell', 'you', 'live', 'please'], answer: 'Please tell me where you live.', point: 'tell me のあとは〈疑問詞 + 主語 + 動詞〉' },
    { type: 'order', jp: 'その知らせは私たちを悲しくさせました。', words: ['made', 'sad', 'the news', 'us'], answer: 'The news made us sad.', point: '〈make A B〉「AをBにする」。us = sad の関係' },
  ]);

  /* 第15章 前置詞・接続詞・重要な連語 */
  add('prepconj', [
    { type: 'choice', jp: '私は7時に起きます。', en: 'I get up ( ) seven.', options: ['in', 'on', 'at', 'for'], answer: 2, point: '時刻の前は at' },
    { type: 'choice', jp: '私は日曜日にテニスをします。', en: 'I play tennis ( ) Sundays.', options: ['in', 'on', 'at', 'by'], answer: 1, point: '曜日・日付の前は on(月・季節・年は in)' },
    { type: 'choice', jp: '駅の前で会いましょう。', en: "Let's meet in ( ) of the station.", options: ['front', 'near', 'next', 'before'], answer: 0, point: 'in front of 〜「〜の前で」' },
    { type: 'choice', jp: '私は疲れていたので、早く寝ました。', en: 'I went to bed early ( ) I was tired.', options: ['because', 'but', 'or', 'if'], answer: 0, point: '〈結果 + because + 理由〉「〜なので」' },
    { type: 'choice', jp: '雨が降ったら、私は家にいます。', en: '( ) it rains, I will stay home.', options: ['If', 'But', 'And', 'Or'], answer: 0, point: 'if「もし〜なら」。if のあとは未来のことでも現在形' },
    { type: 'choice', jp: '私は紅茶かコーヒーのどちらかを飲みます。', en: 'I will drink either tea ( ) coffee.', options: ['and', 'or', 'but', 'nor'], answer: 1, point: 'either A or B「AかBのどちらか」' },

    { type: 'fill', jp: '私は4月に生まれました。', en: 'I was born ( ) April.', answers: ['in'], point: '月・季節・年の前は in' },
    { type: 'fill', jp: '私の学校は図書館のとなりにあります。', en: 'My school is ( ) ( ) the library.', answers: ['next', 'to'], point: 'next to 〜「〜のとなりに」' },
    { type: 'fill', jp: '私が家に帰ったとき、母は料理をしていました。', en: '( ) I came home, my mother was cooking.', answers: ['When'], point: 'when「〜するとき」。〈When + 主語 + 動詞, 〜〉' },
    { type: 'fill', jp: '私は英語も数学も好きです。', en: 'I like ( ) English ( ) math.', answers: ['both', 'and'], point: 'both A and B「AもBも(両方)」' },

    { type: 'order', jp: 'ねこはテーブルの下にいます。', words: ['under', 'the cat', 'is', 'the table'], answer: 'The cat is under the table.', point: 'under「〜の下に」。〈主語 + is + 前置詞 + 場所〉' },
    { type: 'order', jp: '私は具合が悪かったので、家にいました。', words: ['so', 'was', 'I', 'I', 'stayed', 'sick', 'home'], answer: 'I was sick, so I stayed home.', point: '〈原因, so 結果〉「〜なので…」。so の前が理由' },
  ]);
})();
