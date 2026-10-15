// 入試対策: 英作文(和文英訳・条件英作文・自由英作文)。すべてオリジナル。answers は模範解答(1つ目が基本)。
const EXAM_WRITING = [
  // ===== 和文英訳: 日本語を英語に。point は使う文法 =====
  // --- 現在完了(継続) ---
  { kind: 'translate', jp: '私の兄は5年間ずっとこの町に住んでいます。', answers: ["My brother has lived in this town for five years.", "My brother has been living in this town for five years."], point: '現在完了(継続)・for 〜' },
  { kind: 'translate', jp: 'あなたはどのくらいの間ピアノを習っているのですか。', answers: ["How long have you been learning the piano?", "How long have you learned the piano?", "How long have you been taking piano lessons?"], point: '現在完了(継続)・How long 〜?' },
  { kind: 'translate', jp: '私たちは小学生のころからずっと友達です。', answers: ["We have been friends since we were elementary school students.", "We've been friends since we were in elementary school."], point: '現在完了(継続)・since 〜' },
  // --- 現在完了(経験) ---
  { kind: 'translate', jp: '私は一度も富士山に登ったことがありません。', answers: ["I have never climbed Mt. Fuji.", "I've never climbed Mt. Fuji."], point: '現在完了(経験)・never' },
  { kind: 'translate', jp: 'あなたは今までに外国へ行ったことがありますか。', answers: ["Have you ever been to a foreign country?", "Have you ever been abroad?", "Have you ever been to any foreign countries?"], point: '現在完了(経験)・have been to 〜' },
  { kind: 'translate', jp: '私はその映画を3回見たことがあります。', answers: ["I have seen the movie three times.", "I've seen that movie three times."], point: '現在完了(経験)・〜 times' },
  // --- 現在完了(完了) ---
  { kind: 'translate', jp: '私はちょうど宿題を終えたところです。', answers: ["I have just finished my homework.", "I've just finished my homework."], point: '現在完了(完了)・just' },
  { kind: 'translate', jp: 'あなたはもう昼食を食べましたか。', answers: ["Have you eaten lunch yet?", "Have you had lunch yet?"], point: '現在完了(完了)・疑問文の yet' },
  { kind: 'translate', jp: '電車はまだ駅に着いていません。', answers: ["The train hasn't arrived at the station yet.", "The train has not arrived at the station yet."], point: '現在完了(完了)・否定文の yet' },
  // --- 受け身 ---
  { kind: 'translate', jp: 'この寺は約600年前に建てられました。', answers: ["This temple was built about 600 years ago.", "This temple was built about six hundred years ago."], point: '受け身(過去)' },
  { kind: 'translate', jp: '英語は世界中で話されています。', answers: ["English is spoken all over the world.", "English is spoken around the world."], point: '受け身(現在)' },
  { kind: 'translate', jp: 'この本はたくさんの子どもたちに読まれています。', answers: ["This book is read by a lot of children.", "This book is read by many children."], point: '受け身・by 〜' },
  { kind: 'translate', jp: 'このお祭りは毎年8月に開かれます。（「開く・開催する」は hold を使う）', answers: ["This festival is held every August.", "This festival is held in August every year."], point: '受け身(hold - held - held)' },
  { kind: 'translate', jp: 'その山は雪でおおわれていました。（「〜でおおわれている」は be covered with を使う）', answers: ["The mountain was covered with snow."], point: '受け身・be covered with 〜' },
  { kind: 'translate', jp: '富士山はこの部屋から見ることができます。（富士山を主語にする）', answers: ["Mt. Fuji can be seen from this room."], point: '助動詞＋受け身(can be ＋過去分詞)' },
  // --- 比較 ---
  { kind: 'translate', jp: '私の父は母より3歳年上です。', answers: ["My father is three years older than my mother."], point: '比較級・差を表す語(three years)' },
  { kind: 'translate', jp: '琵琶湖は日本でいちばん大きい湖です。', answers: ["Lake Biwa is the largest lake in Japan.", "Lake Biwa is the biggest lake in Japan."], point: '最上級・in 〜' },
  { kind: 'translate', jp: 'この問題はあの問題ほど難しくありません。', answers: ["This question isn't as difficult as that one.", "This question is not as difficult as that one.", "This problem isn't as hard as that one."], point: 'not as 〜 as …' },
  { kind: 'translate', jp: 'あなたのクラスでいちばん速く走るのはだれですか。', answers: ["Who runs the fastest in your class?", "Who runs fastest in your class?"], point: '副詞の最上級・疑問詞が主語' },
  { kind: 'translate', jp: 'できるだけ早く家に帰りなさい。', answers: ["Go home as soon as possible.", "Go home as soon as you can."], point: 'as 〜 as possible / as 〜 as you can' },
  { kind: 'translate', jp: '東京は世界で最も大きな都市の1つです。', answers: ["Tokyo is one of the biggest cities in the world.", "Tokyo is one of the largest cities in the world."], point: 'one of the ＋最上級＋複数名詞' },
  // --- 不定詞 ---
  { kind: 'translate', jp: '私の夢は医者になることです。', answers: ["My dream is to be a doctor.", "My dream is to become a doctor."], point: '不定詞(名詞的用法)' },
  { kind: 'translate', jp: '私は写真を撮るためにその公園へ行きました。', answers: ["I went to the park to take pictures.", "I went to that park to take photos."], point: '不定詞(副詞的用法・目的)' },
  { kind: 'translate', jp: '私はその知らせを聞いて驚きました。', answers: ["I was surprised to hear the news.", "I was surprised to hear that news."], point: '不定詞(副詞的用法・感情の原因)' },
  { kind: 'translate', jp: '私は今日やるべきことがたくさんあります。', answers: ["I have a lot of things to do today.", "I have many things to do today."], point: '不定詞(形容詞的用法)' },
  { kind: 'translate', jp: '私たちにとって毎日運動することは大切です。', answers: ["It is important for us to exercise every day.", "It's important for us to get exercise every day."], point: 'It is 〜 for 人 to …' },
  { kind: 'translate', jp: '英語で手紙を書くことは私には難しいです。', answers: ["It is difficult for me to write a letter in English.", "It's hard for me to write letters in English."], point: 'It is 〜 for 人 to …' },
  { kind: 'translate', jp: '私は兄に宿題を手伝ってほしいです。', answers: ["I want my brother to help me with my homework.", "I'd like my brother to help me with my homework."], point: 'want 人 to 〜・help 人 with 〜' },
  { kind: 'translate', jp: '母は私に部屋をそうじするように言いました。', answers: ["My mother told me to clean my room.", "My mom told me to clean my room."], point: 'tell 人 to 〜' },
  { kind: 'translate', jp: '駅への行き方を教えていただけませんか。', answers: ["Could you tell me how to get to the station?", "Would you tell me how to get to the station?", "Can you tell me how to get to the station?"], point: 'how to 〜・Could you 〜?' },
  { kind: 'translate', jp: '私は次に何をすればよいかわかりませんでした。', answers: ["I didn't know what to do next.", "I did not know what to do next."], point: '疑問詞＋to 〜(what to do)' },
  // --- 動名詞 ---
  { kind: 'translate', jp: '私の趣味は古い切手を集めることです。', answers: ["My hobby is collecting old stamps.", "My hobby is to collect old stamps."], point: '動名詞(補語)' },
  { kind: 'translate', jp: '私をパーティーに招待してくれてありがとう。', answers: ["Thank you for inviting me to the party.", "Thanks for inviting me to the party."], point: 'Thank you for 〜ing(前置詞＋動名詞)' },
  { kind: 'translate', jp: '英語の歌を歌うことは楽しいです。（動名詞を主語にする）', answers: ["Singing English songs is fun."], point: '動名詞(主語)・単数扱い' },
  { kind: 'translate', jp: '彼はさよならを言わずに部屋を出ていきました。', answers: ["He left the room without saying goodbye.", "He went out of the room without saying goodbye."], point: 'without 〜ing' },
  { kind: 'translate', jp: '私はまたあなたに会えるのを楽しみにしています。', answers: ["I'm looking forward to seeing you again.", "I am looking forward to seeing you again."], point: 'look forward to 〜ing' },
  // --- 分詞 ---
  { kind: 'translate', jp: 'ベンチに座っている女の子は私の妹です。', answers: ["The girl sitting on the bench is my sister.", "The girl who is sitting on the bench is my sister.", "The girl sitting on the bench is my little sister.", "The girl sitting on the bench is my younger sister."], point: '現在分詞の後置修飾' },
  { kind: 'translate', jp: 'これはオーストラリアで撮られた写真です。', answers: ["This is a picture taken in Australia.", "This is a photo taken in Australia."], point: '過去分詞の後置修飾' },
  { kind: 'translate', jp: '彼はフランス製の車を持っています。（「〜製の」は「〜で作られた」と考える）', answers: ["He has a car made in France."], point: '過去分詞の後置修飾(made in 〜)' },
  // --- 関係代名詞 ---
  { kind: 'translate', jp: '私には東京に住んでいるおじがいます。', answers: ["I have an uncle who lives in Tokyo.", "I have an uncle that lives in Tokyo.", "I have an uncle living in Tokyo."], point: '関係代名詞 who(主格)' },
  { kind: 'translate', jp: 'これは私が先週買った本です。', answers: ["This is the book I bought last week.", "This is the book that I bought last week.", "This is the book which I bought last week."], point: '関係代名詞 which / that(目的格)・省略' },
  { kind: 'translate', jp: '私が昨日会った男性は有名な作家でした。', answers: ["The man I met yesterday was a famous writer.", "The man that I met yesterday was a famous writer.", "The man who I met yesterday was a famous writer."], point: '関係代名詞(目的格)が主語を修飾' },
  { kind: 'translate', jp: '私たちのチームには速く泳げる生徒が2人います。', answers: ["Our team has two students who can swim fast.", "There are two students who can swim fast on our team."], point: '関係代名詞 who(主格)＋助動詞' },
  // --- 間接疑問 ---
  { kind: 'translate', jp: '私は彼がどこに住んでいるか知りません。', answers: ["I don't know where he lives.", "I do not know where he lives."], point: '間接疑問(疑問詞＋主語＋動詞)' },
  { kind: 'translate', jp: 'あなたはこの花が何と呼ばれているか知っていますか。', answers: ["Do you know what this flower is called?"], point: '間接疑問＋受け身' },
  { kind: 'translate', jp: 'コンサートが何時に始まるか教えてください。', answers: ["Please tell me what time the concert starts.", "Please tell me when the concert starts.", "Please tell me what time the concert will start."], point: '間接疑問・tell 人 〜' },
  { kind: 'translate', jp: 'なぜ彼女が泣いていたのか、だれにもわかりませんでした。', answers: ["Nobody knew why she was crying.", "No one knew why she was crying."], point: '間接疑問(過去進行形)・nobody' },
  // --- 仮定法 ---
  { kind: 'translate', jp: 'もし私が鳥なら、空を飛べるのに。', answers: ["If I were a bird, I could fly in the sky.", "If I were a bird, I could fly."], point: '仮定法過去(If I were 〜, I could …)' },
  { kind: 'translate', jp: '私がピアノをひけたらいいのに。', answers: ["I wish I could play the piano."], point: '仮定法(I wish I could 〜)' },
  { kind: 'translate', jp: 'もし時間があれば、あなたを手伝うのに。（実際には時間がない）', answers: ["If I had time, I would help you.", "If I had time, I could help you."], point: '仮定法過去(If I had 〜, I would …)' },
  { kind: 'translate', jp: '私に兄がいればいいのに。', answers: ["I wish I had an older brother.", "I wish I had a big brother."], point: '仮定法(I wish I had 〜)' },
  // --- 接続詞 ---
  { kind: 'translate', jp: '私が家に帰ったとき、母は料理をしていました。', answers: ["When I got home, my mother was cooking.", "My mother was cooking when I came home.", "When I came home, my mother was cooking."], point: '接続詞 when・過去進行形' },
  { kind: 'translate', jp: '明日晴れたら、私たちは海へ行くつもりです。', answers: ["If it is sunny tomorrow, we are going to go to the sea.", "If it's sunny tomorrow, we will go to the beach."], point: '接続詞 if(未来のことも現在形で表す)' },
  { kind: 'translate', jp: '私はとても疲れていたので、早く寝ました。', answers: ["I went to bed early because I was very tired.", "I was very tired, so I went to bed early."], point: '接続詞 because / so' },
  { kind: 'translate', jp: '私は彼が正しいと思います。', answers: ["I think he is right.", "I think that he's right."], point: '接続詞 that(省略可)' },
  // --- 助動詞 ---
  { kind: 'translate', jp: '窓を開けてもいいですか。', answers: ["May I open the window?", "Can I open the window?"], point: '許可を求める May I 〜? / Can I 〜?' },
  { kind: 'translate', jp: 'あなたはここで靴を脱がなければなりません。（「脱ぐ」は take off を使う）', answers: ["You have to take off your shoes here.", "You must take off your shoes here.", "You have to take your shoes off here."], point: 'have to / must' },
  { kind: 'translate', jp: 'あなたは明日早く起きる必要はありません。', answers: ["You don't have to get up early tomorrow.", "You do not have to get up early tomorrow."], point: "don't have to 〜(〜する必要はない)" },
  { kind: 'translate', jp: '私の宿題を手伝ってくれませんか。', answers: ["Could you help me with my homework?", "Will you help me with my homework?", "Can you help me with my homework?"], point: '依頼 Could you 〜? / Will you 〜?' },
  { kind: 'translate', jp: '（私が）その重いかばんを運びましょうか。', answers: ["Shall I carry that heavy bag?", "Shall I carry the heavy bag for you?"], point: '申し出 Shall I 〜?' },
  // --- There is / are ---
  { kind: 'translate', jp: '私の町には大きな公園が2つあります。', answers: ["There are two big parks in my town.", "My town has two big parks."], point: 'There are 〜' },
  { kind: 'translate', jp: 'この近くにコンビニエンスストアはありますか。', answers: ["Is there a convenience store near here?", "Is there a convenience store around here?"], point: 'Is there 〜?' },
  // --- SVOO / SVOC ---
  { kind: 'translate', jp: '祖母が私にこのセーターを作ってくれました。', answers: ["My grandmother made me this sweater.", "My grandmother made this sweater for me."], point: 'SVOO(make 人 物 = make 物 for 人)' },
  { kind: 'translate', jp: 'その知らせは彼女を悲しませました。（the news を主語にする）', answers: ["The news made her sad.", "The news made her feel sad."], point: 'SVOC(make 人 〜)' },
  { kind: 'translate', jp: '私たちはその犬をポチと名づけました。', answers: ["We named the dog Pochi.", "We named that dog Pochi."], point: 'SVOC(name A B)' },
  { kind: 'translate', jp: '私にあなたの自転車を使わせてください。', answers: ["Please let me use your bike.", "Please let me use your bicycle."], point: 'let 人＋動詞の原形' },
  // --- tell 人 that ---
  { kind: 'translate', jp: '私は彼に、あなたが彼に会いたがっていると伝えます。', answers: ["I'll tell him that you want to see him.", "I will tell him you want to see him."], point: 'tell 人 that 〜' },
  { kind: 'translate', jp: '祖父は私に、その町は昔とても静かだったと言いました。', answers: ["My grandfather told me that the town was very quiet in the past.", "My grandfather told me the town was very quiet a long time ago."], point: 'tell 人 that 〜' },
  // --- too 〜 to / so 〜 that ---
  { kind: 'translate', jp: 'このお茶は熱すぎて飲めません。', answers: ["This tea is too hot to drink.", "This tea is so hot that I can't drink it."], point: 'too 〜 to … / so 〜 that … can\'t' },
  { kind: 'translate', jp: '私はとても忙しかったので、テレビを見ることができませんでした。', answers: ["I was so busy that I couldn't watch TV.", "I was too busy to watch TV."], point: 'so 〜 that … / too 〜 to …' },

  // ===== 条件英作文: 場面・条件に合う英文を書く =====
  // --- 誘う ---
  { kind: 'condition', task: 'あなたは友達のメアリーを、次の土曜日にあなたの家で開くパーティーに誘いたい。誘う英文を1文で書きなさい。', conditions: ['6語以上', 'party を使う'], answers: ["Would you like to come to a party at my house next Saturday?", "Can you come to a party at my house next Saturday?", "Why don't you come to a party at my house next Saturday?"], point: "誘う表現(Would you like to 〜? / Why don't you 〜?)" },
  { kind: 'condition', task: 'ALT のスミス先生を、来月の文化祭に招待したい。招待する英文を1文で書きなさい。', conditions: ['6語以上', 'school festival を使う'], answers: ["Would you like to come to our school festival next month?", "Please come to our school festival next month.", "Why don't you come to our school festival next month?"], point: '招待する表現(Would you like to 〜? / Please come to 〜.)' },
  { kind: 'condition', task: '友達に、放課後いっしょにテニスをしようと提案したい。提案する英文を1文で書きなさい。', conditions: ['5語以上', 'after school を使う'], answers: ["Let's play tennis together after school.", "Shall we play tennis after school?", "How about playing tennis together after school?"], point: "提案の表現(Let's 〜. / Shall we 〜? / How about 〜ing?)" },
  // --- 許可を求める ---
  { kind: 'condition', task: 'ホームステイ先で、今シャワーを使ってもよいかホストマザーにたずねたい。たずねる英文を1文で書きなさい。', conditions: ['4語以上', 'shower を使う'], answers: ["May I use the shower now?", "Can I take a shower now?", "Is it OK if I use the shower now?"], point: '許可を求める May I 〜? / Can I 〜?' },
  { kind: 'condition', task: '英語の授業中、ブラウン先生に辞書を使ってもよいかたずねたい。たずねる英文を1文で書きなさい。', conditions: ['4語以上', 'dictionary を使う'], answers: ["May I use my dictionary, Mr. Brown?", "Can I use a dictionary now?", "Is it all right to use my dictionary?"], point: '許可を求める May I 〜? / Can I 〜?' },
  { kind: 'condition', task: '洋服店で、気に入ったジャケットを試着してもよいか店員にたずねたい。たずねる英文を1文で書きなさい。', conditions: ['try on を使う（「試着する」の意味）'], answers: ["May I try on this jacket?", "Can I try this jacket on?", "Could I try on this jacket, please?"], point: '許可を求める表現・try on 〜' },
  // --- 助けを求める・依頼する ---
  { kind: 'condition', task: '重い箱を運んでいるとき、近くにいたクラスメートに手伝ってほしいと頼みたい。頼む英文を1文で書きなさい。', conditions: ['5語以上', 'help を使う'], answers: ["Could you help me carry this box?", "Can you help me with this heavy box?", "Will you help me carry this heavy box?"], point: '依頼 Could you 〜? / help 人＋動詞の原形' },
  { kind: 'condition', task: '留学生の話が速くて聞き取れなかった。もう一度言ってほしいと頼む英文を1文で書きなさい。', conditions: ['4語以上', '依頼する文にする'], answers: ["Could you say that again, please?", "Can you say it again, please?", "Would you say that again more slowly?"], point: '依頼 Could you 〜, please?' },
  { kind: 'condition', task: '観光地で、近くにいた外国人に自分たちの写真を撮ってほしいと頼みたい。頼む英文を1文で書きなさい。', conditions: ['5語以上', 'picture または photo を使う'], answers: ["Could you take a picture of us?", "Would you take our picture, please?", "Excuse me, can you take a photo of us?"], point: '依頼 Could you 〜? / Would you 〜?・take a picture of 〜' },
  // --- 道案内 ---
  { kind: 'condition', task: '外国人に駅への行き方を聞かれた。「この道をまっすぐ行って、2つ目の角を右に曲がってください」と伝える英文を1文で書きなさい。', conditions: ['turn を使う', '1文で書く'], answers: ["Go straight along this street and turn right at the second corner.", "Please go down this street and turn right at the second corner."], point: '命令文で道案内(go straight / turn right at 〜)' },
  { kind: 'condition', task: '外国人に図書館の場所を聞かれた。図書館が郵便局のとなりにあることを伝える英文を1文で書きなさい。', conditions: ['next to を使う'], answers: ["The library is next to the post office.", "It's next to the post office."], point: '場所を表す next to 〜' },
  { kind: 'condition', task: '外国人に市役所へのバスの乗り方を聞かれた。「3番のバスに乗り、5つ目のバス停で降りてください」と伝える英文を1文で書きなさい。', conditions: ['get off を使う（「降りる」の意味）'], answers: ["Take the No. 3 bus and get off at the fifth stop.", "Please take Bus No. 3 and get off at the fifth bus stop."], point: '命令文で道案内(take 〜 / get off at 〜)・序数' },
  // --- 理由を説明する ---
  { kind: 'condition', task: '待ち合わせに遅れて、友達に「どうして遅れたの？」と聞かれた。電車が遅れたことを理由として伝える英文を1文で書きなさい。', conditions: ['理由を表す語(because, so など)を使う'], answers: ["I couldn't come on time because the train was late.", "The train was late, so I couldn't come on time."], point: '理由を表す because / 結果を表す so' },
  { kind: 'condition', task: '友達からパーティーに誘われたが、行くことができない。お礼または謝罪の言葉と、行けない理由を入れて断る英文を書きなさい。', conditions: ['10語以上', '行けない理由を入れる'], answers: ["I'm sorry, but I can't go because I have to take care of my little sister.", "Thank you, but I can't come because I have a piano lesson that day."], point: '断る表現(I\'m sorry, but 〜.)・because' },
  { kind: 'condition', task: 'ALT の先生に「あなたはなぜ英語を勉強しているのですか」と聞かれた。理由を答える英文を1文で書きなさい。', conditions: ['6語以上', 'because か to(〜するために) を使う'], answers: ["I study English because I want to work in a foreign country.", "I study English to make friends with people from other countries."], point: '理由・目的を表す because / 不定詞(副詞的用法)' },
  // --- アドバイスする ---
  { kind: 'condition', task: '友達が「かぜをひいたみたい」と言っている。アドバイスする英文を1文で書きなさい。', conditions: ['should を使う', '4語以上'], answers: ["You should go home and rest.", "You should see a doctor today.", "You should drink something warm and go to bed early."], point: '助言の should' },
  { kind: 'condition', task: '日本に旅行に来たいという海外の友達に、どの季節に来るとよいかをアドバイスしたい。季節とその理由を書きなさい。', conditions: ['2文以内', '理由も書く'], answers: ["You should come to Japan in spring because you can see beautiful cherry blossoms.", "Spring is the best season to visit Japan. You can enjoy beautiful cherry blossoms everywhere."], point: '助言の should・理由(because)・不定詞(形容詞的用法)' },
  { kind: 'condition', task: 'クラスメートに「英語をもっと上手に話せるようになりたい」と相談された。アドバイスする英文を1文で書きなさい。', conditions: ['6語以上'], answers: ["You should talk with our ALT in English every day.", "Why don't you watch English movies every weekend?", "It is a good idea to practice speaking with your friends in English."], point: "助言の表現(You should 〜. / Why don't you 〜? / It is a good idea to 〜.)" },
  // --- 紹介する ---
  { kind: 'condition', task: '新しく来た ALT の先生に、あなたの友達を紹介したい。名前と得意なことを入れて紹介する英文を2文で書きなさい。', conditions: ['2文で書く', '名前と得意なことを入れる'], answers: ["This is my friend Yuki. She is good at playing the piano.", "This is my classmate Ken. He is very good at soccer."], point: '人を紹介する This is 〜.・be good at 〜' },
  { kind: 'condition', task: '留学生に、日本の食べ物「おにぎり」を紹介したい。紹介する英文を2文で書きなさい。', conditions: ['2文で書く'], answers: ["This is onigiri, a Japanese rice ball. Many Japanese people eat it for lunch.", "Onigiri is very popular in Japan. It is easy to make, and you can take it anywhere."], point: '物を紹介する表現・It is 〜 to …' },
  { kind: 'condition', task: '海外の中学生に、あなたの町で有名なものを紹介する英文を1文で書きなさい。', conditions: ['famous または There is を使う', '6語以上'], answers: ["My town is famous for its beautiful lake.", "There is an old castle in my town, and many people visit it."], point: 'be famous for 〜 / There is 〜' },
  // --- お礼を言う ---
  { kind: 'condition', task: 'ホームステイ最後の日に、ホストファミリーに感謝の気持ちを伝える英文を2文で書きなさい。', conditions: ['2文で書く', '感謝の気持ちを入れる'], answers: ["Thank you very much for everything. I had a great time with you.", "Thank you for being so kind to me. I will never forget you."], point: 'Thank you for 〜(名詞 / 〜ing)' },
  { kind: 'condition', task: '道に迷っていたときに案内してくれた人に、お礼を言う英文を1文で書きなさい。', conditions: ['for を使う'], answers: ["Thank you for helping me.", "Thank you very much for your help.", "Thanks for showing me the way."], point: 'Thank you for 〜' },
  // --- ゲストに質問する ---
  { kind: 'condition', task: 'カナダ出身のゲストが学校に来た。ゲストにカナダについて質問する英文を1文で書きなさい。', conditions: ['疑問文で書く', '5語以上'], answers: ["What is your favorite place in Canada?", "What do people in Canada usually eat for breakfast?", "Is it very cold in Canada in winter?"], point: '疑問詞を使った疑問文' },
  { kind: 'condition', task: '有名なテニス選手が学校に来た。その選手がいつテニスを始めたのかをたずねる英文を1文で書きなさい。', conditions: ['tennis を使う'], answers: ["When did you start playing tennis?", "How old were you when you started playing tennis?", "When did you begin to play tennis?"], point: '過去の疑問文・start 〜ing / begin to 〜' },
  { kind: 'condition', task: '日本に来たばかりの留学生に、日本でいちばん驚いたことは何かをたずねる英文を1文で書きなさい。', conditions: ['5語以上', '疑問文で書く'], answers: ["What surprised you the most in Japan?", "What was the most surprising thing in Japan?"], point: '疑問詞が主語の疑問文・最上級' },
  // --- メッセージカード・メール ---
  { kind: 'condition', task: '転校していく友達に、メッセージカードを書く。友達に伝える英文を2文で書きなさい。', conditions: ['2文で書く'], answers: ["Good luck at your new school. Let's meet again someday.", "I will miss you very much. Please write to me soon."], point: "メッセージの定番表現(Good luck / Let's 〜 / Please 〜)" },
  { kind: 'condition', task: '友達のエマの誕生日カードに書く英文を書きなさい。', conditions: ['hope を使う', '2文以内'], answers: ["Happy birthday, Emma! I hope you have a wonderful day.", "Happy birthday! I hope you like this present."], point: 'I hope (that) 〜' },
  { kind: 'condition', task: '学校を休んだ日の夜、クラスメートにメールを送る。今日の宿題を教えてほしいと頼む英文を書きなさい。', conditions: ['依頼する文を含める', '2文以内'], answers: ["I was absent from school today. Could you tell me about the homework?", "Can you tell me what our homework is?", "I didn't go to school today, so please tell me about today's homework."], point: '依頼 Could you 〜?・間接疑問' },
  { kind: 'condition', task: '日本に来る予定の留学生にメールを送る。来週の日曜日にあなたの町を案内すると申し出る英文を1文で書きなさい。', conditions: ['next Sunday を使う', 'show 人 around 〜(人に〜を案内する)を使う'], answers: ["I'll show you around my town next Sunday.", "Shall I show you around my town next Sunday?"], point: '申し出(I\'ll 〜. / Shall I 〜?)・show 人 around 〜' },
  // --- 絵の場面を描写する ---
  { kind: 'condition', task: '絵の中で、男の子が公園で自分の犬といっしょに走っている。絵の様子を表す英文を1文で書きなさい。', conditions: ['現在進行形を使う'], answers: ["A boy is running with his dog in the park.", "A boy and his dog are running in the park."], point: '現在進行形' },
  { kind: 'condition', task: '絵の中で、おばあさんが重そうな荷物を持って階段の前に立っていて、男の子が声をかけようとしている。男の子のせりふを1文で書きなさい。', conditions: ['申し出る文にする'], answers: ["Shall I carry your bag?", "May I help you with your bag?", "Can I carry that for you?"], point: '申し出 Shall I 〜? / May I help you?' },
  { kind: 'condition', task: '絵の中で、図書館で2人の生徒が大きな声で話している。2人に注意する英文を1文で書きなさい。', conditions: ['library を使う'], answers: ["Please be quiet in the library.", "You must not talk loudly in the library.", "Don't talk so loudly in the library."], point: '命令文(Be 〜. / Don\'t 〜.)・must not' },
  // --- 対話の応答 ---
  { kind: 'condition', task: '次の対話の（　）に入る英文を、あなた自身の立場で書きなさい。\nA: What do you want to be in the future?\nB: (　　　　)', conditions: ['8語以上', '理由も書く'], answers: ["I want to be a teacher because I like children.", "I want to be a nurse. I want to help sick people."], point: 'want to be 〜・because' },
  { kind: 'condition', task: '次の対話の（　）に入る英文を、あなた自身の立場で書きなさい。\nA: Which do you like better, cats or dogs?\nB: (　　　　)', conditions: ['理由も書く', '2文以内'], answers: ["I like dogs better because they are friendly.", "I like cats better. They are cute and quiet."], point: 'like A better・理由' },
  // ---- 手紙・メールの一部を補う / メモを英文にする / 答えから質問を作る / 書き出しの指定 ----
  { kind: 'condition', task: '留学生のエマにメールを書いています。下線部に「次は私もいっしょに行きたい」ということを伝える英文を1文で書きなさい。\nDear Emma,\nThank you for your e-mail. I\'m sorry I couldn\'t go to the summer festival with you.\n＿＿＿＿＿＿＿＿＿＿\nYour friend, Aya', conditions: ['6語以上', 'next time を使う'], answers: ['I want to go with you next time.', 'I would like to go with you next time.', 'I hope I can go with you next time.'], point: '気持ちを伝える(want to / would like to / I hope 〜)' },
  { kind: 'condition', task: 'ホームステイ先のブラウンさんに手紙を書いています。下線部に「日本に来たら、私の町を案内したい」ということを伝える英文を1文で書きなさい。\nDear Mr. and Mrs. Brown,\nI had a great time with you in Canada.\n＿＿＿＿＿＿＿＿＿＿\nLove, Ken', conditions: ['8語以上', 'when を使う'], answers: ['When you come to Japan, I want to show you around my town.', 'I want to show you around my town when you come to Japan.'], point: '時を表す when 〜(未来のことでも現在形 come)・show 人 around 〜' },
  { kind: 'condition', task: '友達のトムからのメールに返事を書いています。トムの質問に答える英文を、理由をふくめて2文で書きなさい。\nTom: What do you want to do during the winter vacation?\nYou: ＿＿＿＿＿＿＿＿＿＿', conditions: ['2文', '理由を1つ書く'], answers: ['I want to go skiing with my family. I like winter sports very much.', 'I want to read many books. I have a lot of free time in winter.'], point: 'want to 〜・理由は2文目で(I like 〜. / because 〜)' },
  { kind: 'condition', task: 'ALT の先生に自己紹介をするために、次のメモを作りました。メモの②と③の内容を英語で書きなさい。（①は記入例）\n①名前：佐藤ゆうと → I\'m Sato Yuto.\n②好きなこと：サッカーをすること\n③将来の夢：理科の先生になること', conditions: ['②・③をそれぞれ1文で'], answers: ['I like playing soccer. I want to be a science teacher in the future.', 'I like to play soccer. My dream is to become a science teacher.'], point: 'like 〜ing / to 〜・want to be 〜 / My dream is to 〜' },
  { kind: 'condition', task: '修学旅行で行った京都について、クラスで発表するメモを作りました。メモの内容を英語で書きなさい。\n・行った日：先週の月曜日\n・したこと：古いお寺をたくさん見た\n・感想：とても美しかった', conditions: ['3文で', 'メモの内容をすべてふくめる'], answers: ['I went to Kyoto last Monday. I saw many old temples there. They were very beautiful.'], point: '過去形(went / saw / were)で順に書く' },
  { kind: 'condition', task: '「伝えたいこと」の内容を、留学生のマイクに英語で伝えなさい。\n伝えたいこと：ア 明日は雨がふるらしい　イ だからかさを持ってくるべきだ', conditions: ['ア・イをそれぞれ1文で'], answers: ['It will be rainy tomorrow. So you should bring your umbrella.', "It is going to rain tomorrow. You should bring an umbrella."], point: '天気の it・will / be going to・should' },
  { kind: 'condition', task: '次の対話の（　）に入る質問の文を書きなさい。Bの答えに合うようにすること。\nA: (　　　　)\nB: I have been there twice.', conditions: ['Kyoto を使う'], answers: ['How many times have you been to Kyoto?', 'How often have you been to Kyoto?'], point: '答え(twice)から逆に考える → How many times have you been to 〜?' },
  { kind: 'condition', task: '次の対話の（　）に入る質問の文を書きなさい。Bの答えに合うようにすること。\nA: (　　　　)\nB: It takes about twenty minutes by bike.', conditions: ['school を使う'], answers: ['How long does it take to get to school?', 'How long does it take to go to school?'], point: '時間(about twenty minutes)→ How long does it take to 〜?' },
  { kind: 'condition', task: '次の対話の（　）に入る質問の文を書きなさい。Bの答えに合うようにすること。\nA: (　　　　)\nB: Because I wanted to see my grandmother.', conditions: ['Osaka を使う', '過去の文で'], answers: ['Why did you go to Osaka?', 'Why did you visit Osaka?'], point: '理由の答え(Because 〜)→ Why did you 〜?' },
  { kind: 'condition', task: '重い荷物を運んでいる先生に、手伝いを申し出る英文を書きなさい。', conditions: ['Shall で書き始める'], answers: ['Shall I help you?', 'Shall I carry your bag?'], point: '申し出 → Shall I 〜?' },
  { kind: 'condition', task: '友達に、いっしょに図書館で勉強しようと誘う英文を書きなさい。', conditions: ['How で書き始める', '6語以上'], answers: ['How about studying in the library together?', 'How about studying together in the library?'], point: 'How about 〜ing?(〜するのはどうですか)' },
  { kind: 'condition', task: '道に迷っている観光客に、駅までの行き方を教えてあげると申し出る英文を書きなさい。', conditions: ['I で書き始める', 'station を使う'], answers: ['I will show you the way to the station.', "I\'ll take you to the station."], point: 'show 人 the way to 〜 / take 人 to 〜' },

  // ===== 自由英作文: テーマについて自分の考えを書く =====
  { kind: 'free', task: '「都会と田舎のどちらに住みたいか」について、あなたの考えを理由とともに書きなさい。', conditions: ['25語以上35語以内', '理由を2つ書く'], answers: ["I want to live in the countryside. I have two reasons. First, the air is clean and there is a lot of nature. Second, people there are friendly, so I can make good friends.", "I want to live in a big city. First, there are many shops and museums, so I can enjoy my free time. Second, trains and buses are convenient, so I can go anywhere easily."], point: '理由の書き方(I have two reasons. First, 〜. Second, 〜.)' },
  { kind: 'free', task: '中学校生活でいちばん思い出に残っている学校行事について書きなさい。', conditions: ['25語以上35語以内', 'その行事で何をしたか、どう感じたかを入れる'], answers: ["The school event I remember best is the sports day in my second year. Our class practiced the relay every day after school. We won the race, and I was very happy."], point: '関係代名詞(目的格)・過去形・感想の書き方' },
  { kind: 'free', task: 'あなたの将来の夢について書きなさい。', conditions: ['25語以上35語以内', 'なりたいものと、その理由を書く'], answers: ["I want to be a vet in the future because I love animals. When my dog was sick, a vet saved his life. I want to help animals like that vet."], point: 'want to be 〜・because・when' },
  { kind: 'free', task: 'あなたが訪れてみたい国や場所と、そこでしたいことを書きなさい。', conditions: ['25語以上35語以内', 'したいことを2つ書く'], answers: ["I want to visit Australia. First, I want to see koalas and kangaroos. Second, I want to practice my English with people there. I think it will be a great experience."], point: 'want to 〜・First, 〜. Second, 〜.' },
  { kind: 'free', task: 'あなたは自由な時間をどのように過ごしているか、理由とともに書きなさい。', conditions: ['25語以上35語以内', '理由を2つ書く'], answers: ["I usually read books in my free time. Reading is fun because I can learn many new things. Also, it helps me relax after a busy day at school."], point: '動名詞(主語)・because・Also, 〜.' },
  { kind: 'free', task: '日本に来た留学生に、あなたの住んでいる町のよいところを紹介する文章を書きなさい。', conditions: ['25語以上35語以内', 'よいところを2つ書く'], answers: ["My town has a lot of nature. There is a beautiful river, and you can enjoy fishing there. Also, the people are very kind, so I'm sure you will like this town."], point: 'There is 〜・I\'m sure (that) 〜' },
  { kind: 'free', task: 'あなたが高校でしたいことについて、理由とともに書きなさい。', conditions: ['25語以上35語以内', '理由を書く'], answers: ["In high school, I want to join the brass band. I have played the trumpet for three years, and I want to play it better. I also want to make many new friends."], point: '現在完了(継続)・want to 〜' },
  { kind: 'free', task: '「中学生はスマートフォンを持つべきだ」という意見について、賛成か反対かを明らかにし、理由とともに書きなさい。', conditions: ['25語以上35語以内', '賛成か反対かを最初に書く', '理由を2つ書く'], answers: ["I think junior high school students should have smartphones. First, they can contact their families easily. Second, they can use them to look up words when they study.", "I don't think junior high school students should have smartphones. First, they may use them for too long and not sleep enough. Second, they may have trouble on the Internet."], point: 'I think 〜 should …・意見と理由の書き方' },
  { kind: 'free', task: '日本に来たばかりの留学生に、おすすめの日本の食べ物を1つ紹介しなさい。', conditions: ['25語以上35語以内', 'すすめる理由を2つ書く'], answers: ["I recommend sushi. First, it is delicious and healthy. Second, there are many kinds of sushi, so you can try different ones. You can find sushi restaurants everywhere in Japan."], point: 'recommend 〜・理由の書き方' },
  { kind: 'free', task: '「本を読むことと映画を見ることのどちらが好きか」について、あなたの考えを理由とともに書きなさい。', conditions: ['25語以上35語以内', '理由を2つ書く'], answers: ["I like reading books better than watching movies. First, I can read books anywhere, for example, on the train. Second, when I read, I can imagine the characters and places freely."], point: '比較(like A better than B)・動名詞' },
  { kind: 'free', task: '「勉強するなら朝と夜のどちらがよいか」について、あなたの考えを理由とともに書きなさい。', conditions: ['20語以上30語以内', '理由を2つ書く'], answers: ["I think studying in the morning is better. First, my head is clear after a good sleep. Second, it is quiet in the morning, so I can study hard."], point: '動名詞(主語)・比較級・理由の書き方' },
  { kind: 'free', task: '「夏休みに行くなら海と山のどちらがよいか」について、あなたの考えを理由とともに書きなさい。', conditions: ['25語以上35語以内', '理由を2つ書く'], answers: ["I want to go to the mountains. First, I like walking in nature. Second, it is cool there in summer, so I can enjoy hiking. I can also see many stars at night.", "I want to go to the sea. First, I love swimming. Second, I can eat fresh fish at the beach with my family. Playing on the beach is also a lot of fun."], point: '理由の書き方・動名詞' },
  { kind: 'free', task: '「1人で勉強するのと友達と勉強するのではどちらがよいか」について、あなたの考えを理由とともに書きなさい。', conditions: ['20語以上30語以内', '理由を2つ書く'], answers: ["I like studying with my friends better. First, we can teach each other. Second, when I feel tired, my friends help me keep going.", "I like studying alone better. First, I can study in my own way. Second, I don't talk with anyone, so I can finish my work faster."], point: '比較(like 〜 better)・理由の書き方' },
  { kind: 'free', task: '「中学校に制服は必要か」について、あなたの考えを理由とともに書きなさい。', conditions: ['25語以上35語以内', '理由を2つ書く'], answers: ["I think school uniforms are necessary. First, students don't have to think about what to wear every morning. Second, families don't need to buy a lot of clothes for school."], point: "don't have to 〜・疑問詞＋to 〜(what to wear)" },
  { kind: 'free', task: 'あなたの宝物について、それがなぜ大切なのかを含めて書きなさい。', conditions: ['25語以上35語以内', '大切な理由を書く'], answers: ["My treasure is a baseball glove. My father gave it to me on my tenth birthday. I have used it for five years. When I use it, I always remember his words, \"Never give up.\""], point: 'SVOO(give 物 to 人)・現在完了(継続)' },
  { kind: 'free', task: 'あなたが参加してみたいボランティア活動について、理由とともに書きなさい。', conditions: ['25語以上35語以内', '理由を書く'], answers: ["I want to clean the beach near my town. There is a lot of trash there, and it is bad for sea animals. If many people join, our beach will be beautiful again."], point: 'want to 〜・There is 〜・if(未来も現在形)' },
  { kind: 'free', task: '日本の文化を体験したいという留学生に、おすすめの体験を1つ紹介しなさい。', conditions: ['25語以上35語以内', 'すすめる理由を2つ書く'], answers: ["I think you should wear a yukata at a summer festival. First, yukata are beautiful and comfortable. Second, you can enjoy Japanese food and fireworks at the festival with your friends."], point: '助言の should・理由の書き方' },
  { kind: 'free', task: '中学校生活でいちばんがんばったことについて書きなさい。', conditions: ['25語以上35語以内', 'がんばったことと、その結果を書く'], answers: ["I worked hardest on my club activities. I was on the basketball team. Our practice was hard, but I never gave up. Last summer, our team won our first game in the city tournament."], point: '過去形・副詞の最上級(hardest)・but' },
  { kind: 'free', task: '「気持ちを伝えるには、手紙とメールのどちらがよいか」について、あなたの考えを理由とともに書きなさい。', conditions: ['25語以上35語以内', '理由を2つ書く'], answers: ["I think letters are better. First, writing a letter takes time, so people can feel your kind heart. Second, people can keep letters for a long time and read them again and again.", "I think e-mails are better. First, we can send them very quickly. Second, they are free, so we can write to people in other countries many times."], point: '比較級・理由の書き方' },
  { kind: 'free', task: '「もしたくさんのお金を持っていたら何をするか」について、あなたの考えを書きなさい。', conditions: ['25語以上35語以内', '仮定法を使う', '理由を書く'], answers: ["If I had a lot of money, I would travel around the world with my family. I want to see many famous places, and I want to thank my family for always helping me."], point: '仮定法過去(If I had 〜, I would …)' },
];
