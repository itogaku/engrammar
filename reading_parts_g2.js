// 長文問題(Part 単位・中2)。その Part までに習う文法と単語だけで書いたオリジナルの文章。
READING_PASSAGES.push(
  {
    level: 'part', grade: 2, program: 1, part: 1, title: 'マイクが引っ越す',
    text: 'Yui: What\'s up, Ken?\nKen: Nothing special. By the way, Mike is going to move to Canada next week.\nYui: You\'re kidding!\nKen: No, I\'m not. We\'re going to have a farewell party for him. ①<u>Are you going to come?</u>\nYui: Sure.',
    questions: [
      { type: 'tf', q: 'マイクはカナダへ引っ越す予定である。', answer: true },
      { type: 'choice', q: 'マイクの引っ越しを聞いた結衣の反応はどれですか。', options: ['喜んだ', '冗談でしょうと驚いた', '知っていた', '怒った'], answer: 1 },
      { type: 'fill', q: '健たちが開く予定のパーティーを、本文中の英語2語で答えなさい。', answer: 'farewell party' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたは来るつもりですか。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 1, part: 2, title: '連絡してね',
    text: 'Mike: I\'m a bit worried about my new school.\nKen: Don\'t worry. ①<u>You\'ll make new friends soon.</u>\nMike: I hope so. I won\'t forget you.\nKen: I won\'t forget you, either. Please text me. Let\'s keep in touch.\nMike: Sure. Take care.',
    questions: [
      { type: 'tf', q: 'マイクは新しい学校について少し心配している。', answer: true },
      { type: 'choice', q: '健がマイクに頼んだことは何ですか。', options: ['手紙を書くこと', 'メッセージを送ること', '日本に戻ること', '写真を送ること'], answer: 1 },
      { type: 'fill', q: '「〜もまた（…ない）」の意味で使われている英語1語を、本文中から抜き出しなさい。', answer: 'either' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたはすぐに新しい友達ができるでしょう。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 1, part: 3, title: 'お別れ会の日',
    text: 'At the party, we enjoyed singing songs. Mike likes playing soccer, so we gave him a soccer ball. He stopped talking and cried. "Thanks for the party," he said.\n①<u>Studying overseas is his dream.</u> I\'ll miss him. Good luck, Mike! Do your best.',
    questions: [
      { type: 'tf', q: 'パーティーでは歌を歌って楽しんだ。', answer: true },
      { type: 'choice', q: 'みんながマイクにあげたものは何ですか。', options: ['カード', 'サッカーボール', '花', '写真'], answer: 1 },
      { type: 'fill', q: 'マイクは何をやめて泣きましたか。本文中の英語1語で答えなさい。', answer: 'talking' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '海外で勉強することが彼の夢です。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 2, part: 1, title: 'タンザニアのサッカー', notes: ['take place　開催される', 'promote　促進する', 'successful　成功した'],
    text: 'Do you know that a soccer event takes place in Tanzania every year? It promotes sports in Africa. For example, children play soccer with famous players there.\n①<u>I think that it\'s a successful event.</u>',
    questions: [
      { type: 'tf', q: 'そのイベントは毎年タンザニアで開かれる。', answer: true },
      { type: 'choice', q: 'イベントで子どもたちがすることは何ですか。', options: ['有名な選手とサッカーをする', '絵をかく', '歌を歌う', '英語を勉強する'], answer: 0 },
      { type: 'fill', q: 'そのイベントはどこのスポーツを広めていますか。本文中の英語1語で答えなさい。', answer: 'Africa' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'それは成功しているイベントだと私は思います。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 2, part: 2, title: 'ガーナのコーチ', notes: ['professionally　プロとして', 'national team　代表チーム', 'coach　指導する'],
    text: 'When Mr. Owusu was young, he played soccer professionally in Ghana. He was on the national team. When he stopped playing, he started to coach children.\n①<u>He believes that sports create peace.</u>',
    questions: [
      { type: 'tf', q: 'オウスさんはガーナでプロとしてサッカーをしていた。', answer: true },
      { type: 'choice', q: 'オウスさんが選手をやめた後に始めたことは何ですか。', options: ['大学で教えること', '子どもたちのコーチ', '新しいチームを作ること', '本を書くこと'], answer: 1 },
      { type: 'fill', q: 'オウスさんは、スポーツが何を作り出すと信じていますか。本文中の英語1語で答えなさい。', answer: 'peace' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼はスポーツが平和を作り出すと信じています。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 2, part: 3, title: 'スポーツから学ぶこと', notes: ['sportsmanship　スポーツマンシップ', 'tool　道具', 'education　教育'],
    text: '①<u>If you play sports, you can learn many things.</u> For example, you learn sportsmanship and good manners. In fact, sports are a great tool for education.\nOur team practices every day. If it rains, we play table tennis in the gym.',
    questions: [
      { type: 'tf', q: 'スポーツを通してよいマナーを学ぶことができる。', answer: true },
      { type: 'choice', q: '雨の日にチームがすることは何ですか。', options: ['練習を休む', '体育館で卓球をする', '教室で勉強する', '外で走る'], answer: 1 },
      { type: 'fill', q: 'スポーツは何のためのすばらしい道具ですか。本文中の英語1語で答えなさい。', answer: 'education' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'もしスポーツをすれば、多くのことを学ぶことができます。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 3, part: 1, title: '夏祭りに行きたい',
    text: 'Emily: I want to go to the summer festival.\nYui: Me, too. What do you want to eat?\nEmily: ①<u>I want to try American food, a corn dog.</u>\nYui: I like cotton candy. I want something sweet.\nEmily: Let\'s go!',
    questions: [
      { type: 'tf', q: 'エミリーは夏祭りに行きたい。', answer: true },
      { type: 'choice', q: '結衣が食べたいものは何ですか。', options: ['アメリカンドッグ', '綿あめ', 'かき氷', 'たこ焼き'], answer: 1 },
      { type: 'fill', q: 'エミリーが食べたいアメリカの食べ物を、本文中の英語2語で答えなさい。', answer: 'corn dog' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私はアメリカの食べ物、アメリカンドッグを食べてみたいです。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 3, part: 2, title: '金魚すくい', notes: ['scoop up　すくう', 'goldfish　金魚'],
    text: 'We went to the festival to play games. I tried to scoop up goldfish with thin paper. It was difficult, but I got one for the first time.\n①<u>I\'m looking forward to the next festival.</u>',
    questions: [
      { type: 'tf', q: '「私」は初めて金魚をすくうことができた。', answer: true },
      { type: 'choice', q: '「私」たちが祭りに行った目的は何ですか。', options: ['踊るため', 'ゲームをするため', '花火を見るため', '友達に会うため'], answer: 1 },
      { type: 'fill', q: '金魚をすくう紙はどうでしたか。本文中の英語1語で答えなさい。', answer: 'thin' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私は次のお祭りを楽しみにしています。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 3, part: 3, title: 'レモネード屋さん',
    text: 'My little sister sold lemonade by herself in front of our house. She had a lot of cups to sell. ①<u>It is not easy to sell lemonade.</u> But in the evening, she had no lemonade to sell. Good job!',
    questions: [
      { type: 'tf', q: '妹は家の前でレモネードを売った。', answer: true },
      { type: 'choice', q: '夕方にはどうなっていましたか。', options: ['レモネードがたくさん残っていた', '売るレモネードがなくなった', '雨が降った', 'お店を閉めた'], answer: 1 },
      { type: 'fill', q: '妹がひとりで売ったことを表す英語2語を本文中から抜き出しなさい。', answer: 'by herself' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'レモネードを売ることは簡単ではありません。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 4, part: 1, title: 'ハイキングに行こう',
    text: 'Eric: Why don\'t we go hiking this weekend? It will be clear.\nKen: That sounds wonderful. ①<u>I\'m glad to hear that.</u>\nEric: My uncle is a guide. He can guide us.\nKen: Really? We may see deer!',
    questions: [
      { type: 'tf', q: '週末は晴れる予定である。', answer: true },
      { type: 'choice', q: 'エリックのおじの仕事は何ですか。', options: ['先生', 'ガイド', '医者', '料理人'], answer: 1 },
      { type: 'fill', q: '健が見られるかもしれないと言っている動物を、本文中の英語1語で答えなさい。', answer: 'deer' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'それを聞いてうれしいです。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 4, part: 2, title: '森のルール', notes: ['trail　山道'],
    text: 'Before hiking, the guide told us the rules. "First of all, you must stay on the trail. You mustn\'t leave anything in the forest. ①<u>We must protect nature.</u>"',
    questions: [
      { type: 'tf', q: '森に物を置いていってはいけない。', answer: true },
      { type: 'choice', q: '最初に言われたルールは何ですか。', options: ['大きな声を出さない', '道からはずれない', '写真をとらない', '走らない'], answer: 1 },
      { type: 'fill', q: 'ルールを教えてくれた人を、本文中の英語1語で答えなさい。', answer: 'guide' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私たちは自然を守らなければなりません。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 4, part: 3, title: 'ビーバーは技術者', notes: ['lodge　巣', 'dam(s)　ダム', 'engineer(s)　技術者'],
    text: 'In the forest, we saw a beaver\'s lodge. Beavers cut down trees and build dams. They use their teeth. ①<u>They don\'t have to use tools.</u> They\'re great engineers.\nWe had to be home by five, so we left the forest at four.',
    questions: [
      { type: 'tf', q: 'ビーバーは木を切り倒してダムを作る。', answer: true },
      { type: 'choice', q: 'ビーバーについて本文で言っていることはどれですか。', options: ['道具を上手に使う', 'すばらしい技術者だ', '人を怖がらない', '水の中で暮らさない'], answer: 1 },
      { type: 'fill', q: '「私」たちは何時までに帰らなければなりませんでしたか。本文中の英語1語で答えなさい。', answer: 'five' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼らは道具を使う必要がありません。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 5, part: 1, title: 'お店の手伝い',
    text: 'Last week, I worked at a shop for a day. ①<u>I didn\'t know where to put the goods.</u> A staff member told me where to put them.\nThen I dropped a pack of eggs by mistake. A staff member kindly said, "Everyone makes mistakes."',
    questions: [
      { type: 'tf', q: '「私」は卵のパックを落としてしまった。', answer: true },
      { type: 'choice', q: '店員は「私」に何と言いましたか。', options: ['もう来なくていい', 'だれでも間違える', '気をつけなさい', '弁償しなさい'], answer: 1 },
      { type: 'fill', q: '「私」が落としたものは何のパックですか。本文中の英語1語で答えなさい。', answer: 'eggs' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私は商品をどこに置けばよいか分かりませんでした。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 5, part: 2, title: '待合室の男の子',
    text: 'In the waiting room, a little boy looked lonely. ①<u>I decided to speak to him.</u> We talked about his favorite game. Then he became happy.\nI learned that a good listener can help people.',
    questions: [
      { type: 'tf', q: '男の子はさびしそうに見えた。', answer: true },
      { type: 'choice', q: '「私」と男の子は何について話しましたか。', options: ['学校', '好きなゲーム', '家族', '天気'], answer: 1 },
      { type: 'fill', q: '話をした後、男の子はどうなりましたか。本文中の英語1語で答えなさい。', answer: 'happy' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私は彼に話しかけることにしました。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 5, part: 3, title: '保育園での体験',
    text: 'I visited a nursery school. I read a book to the children. Some children fell asleep beside me. ①<u>One girl gave me a thank-you card.</u>\nNow I have a dream. I want to work at a nursery school in the future.',
    questions: [
      { type: 'tf', q: '「私」は子どもたちに本を読んであげた。', answer: true },
      { type: 'choice', q: '女の子が「私」にくれたものは何ですか。', options: ['花', 'お礼のカード', '絵', 'お菓子'], answer: 1 },
      { type: 'fill', q: '「私」が将来働きたい場所を、本文中の英語2語で答えなさい。', answer: 'nursery school' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'ある女の子が私にお礼のカードをくれました。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 6, part: 1, title: 'ハスの葉のひみつ',
    text: 'Look at this lotus leaf. ①<u>Raindrops don\'t stick to it.</u> They run off the leaf, so the leaf doesn\'t get wet.\nA yogurt lid uses this idea. Yogurt doesn\'t stick to the lid. This lid is better than other lids.',
    questions: [
      { type: 'tf', q: '雨つぶはハスの葉にくっつく。', answer: false },
      { type: 'choice', q: 'ハスの葉のしくみを使っているものは何ですか。', options: ['かさ', 'ヨーグルトのふた', '靴', '窓'], answer: 1 },
      { type: 'fill', q: '雨つぶが葉から流れ落ちるので、ハスの葉はどうなりませんか。本文中の英語1語で答えなさい。', answer: 'wet' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '雨つぶはそれにくっつきません。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 6, part: 2, title: '犬の足から生まれた発明',
    text: 'One day, a man saw his dog on an icy deck. The dog didn\'t slip. The man looked at its paws. They had many small grooves.\nHe developed non-slip soles for boat shoes. ①<u>It was one of the most useful inventions.</u>',
    questions: [
      { type: 'tf', q: '男性は犬の足を見て発明を思いついた。', answer: true },
      { type: 'choice', q: '男性が開発したものは何ですか。', options: ['犬の服', 'すべり止めの靴底', '船', '手袋'], answer: 1 },
      { type: 'fill', q: '犬の足には何がたくさんありましたか。本文中の英語1語で答えなさい。', answer: 'grooves' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'それは最も役に立つ発明の一つでした。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 6, part: 3, title: 'ロボットのハチ',
    text: 'Scientists are developing a robot bee. ①<u>It is as small as a coin.</u> It is able to carry pollen from plant to plant. It can also search narrow spaces.\nRobot bees have great potential for agriculture.',
    questions: [
      { type: 'tf', q: 'ロボットのハチは硬貨と同じくらいの大きさである。', answer: true },
      { type: 'choice', q: 'ロボットのハチができることはどれですか。', options: ['花粉を運ぶ', 'はちみつを作る', '人を刺す', '空高く飛ぶ'], answer: 0 },
      { type: 'fill', q: 'ロボットのハチは何の分野で大きな可能性がありますか。本文中の英語1語で答えなさい。', answer: 'agriculture' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'それは硬貨と同じくらい小さいです。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 7, part: 1, title: 'ラッコ',
    text: 'Sea otters are adorable. They eat shellfish many times a day in order to warm up their bodies. They have soft fur all over their bodies.\nWhich do you like better, sea otters or cats? ①<u>I like sea otters better.</u>',
    questions: [
      { type: 'tf', q: 'ラッコは1日に何度も貝を食べる。', answer: true },
      { type: 'choice', q: 'ラッコが何度も食べるのはなぜですか。', options: ['体を温めるため', '大きくなるため', '泳ぐため', '眠るため'], answer: 0 },
      { type: 'fill', q: 'ラッコの体中には何がありますか。本文中の英語1語で答えなさい。', answer: 'fur' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '私はラッコのほうが好きです。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 7, part: 2, title: 'イルカのねむり方', notes: ['dolphin(s)　イルカ', 'mammal(s)　哺乳動物'],
    text: 'Dolphins are mammals. They are some of the smartest animals in the sea. Here is a surprising fact. When dolphins sleep, only half of their brain sleeps. The other half stays awake, so they can breathe.\nI think dolphins are the most interesting animals. ①<u>Do you agree?</u>',
    questions: [
      { type: 'tf', q: 'イルカは魚の仲間である。', answer: false },
      { type: 'choice', q: 'イルカが眠っているとき、脳はどうなっていますか。', options: ['全部眠っている', '半分は起きている', '全部起きている', '本文に書かれていない'], answer: 1 },
      { type: 'fill', q: '眠っている間も、脳の半分はどんな状態ですか。本文中の英語1語で答えなさい。', answer: 'awake' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたもそう思いますか。（あなたは賛成しますか。）' },
    ],
  },
  {
    level: 'part', grade: 2, program: 7, part: 3, title: 'トビウオ',
    text: 'Flying fish can fly over the sea when their enemies come. However, they are not always safe. Seabirds sometimes catch them.\nBy the way, ①<u>do you know how to cook flying fish?</u> You can fry them. Fried flying fish is delicious.',
    questions: [
      { type: 'tf', q: 'トビウオはいつも安全である。', answer: false },
      { type: 'choice', q: 'トビウオを捕まえることがあるものは何ですか。', options: ['ラッコ', '海鳥', 'イルカ', 'ペンギン'], answer: 1 },
      { type: 'fill', q: '本文で紹介されているトビウオの料理の仕方を、本文中の英語1語で答えなさい。', answer: 'fry' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'あなたはトビウオの料理の仕方を知っていますか。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 8, part: 1, title: '折り鶴から生まれた石けん',
    text: 'Take a look at this soap. ①<u>It is made from recycled paper cranes.</u> These paper cranes were sent to Hiroshima Peace Memorial Park. The soap is sold at a store there.',
    questions: [
      { type: 'tf', q: 'この石けんは再生された折り鶴から作られている。', answer: true },
      { type: 'choice', q: '折り鶴が送られた場所はどこですか。', options: ['学校', '広島平和記念公園', '博物館', '病院'], answer: 1 },
      { type: 'fill', q: '石けんはどこで売られていますか。本文中の英語1語で答えなさい。', answer: 'store' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: 'それは再生された折り鶴から作られています。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 8, part: 2, title: '禎子の折り鶴', notes: ['atomic bomb　原子爆弾', 'monument　記念碑', 'victim(s)　犠牲者'],
    text: 'Sadako was two years old when an atomic bomb was dropped on Hiroshima. Later, she became sick. She made paper cranes because she wanted to get well. But she passed away when she was twelve.\n①<u>A monument was built for her and other child victims.</u>',
    questions: [
      { type: 'tf', q: '禎子は12歳のときに亡くなった。', answer: true },
      { type: 'choice', q: '禎子が折り鶴を作ったのはなぜですか。', options: ['友達にあげるため', '元気になりたかったから', '売るため', '学校の宿題だったから'], answer: 1 },
      { type: 'fill', q: '原子爆弾が落とされたとき、禎子は何歳でしたか。本文中の英語1語で答えなさい。', answer: 'two' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '彼女と他の子どもの犠牲者のために記念碑が建てられました。' },
    ],
  },
  {
    level: 'part', grade: 2, program: 8, part: 3, title: '願いをつなぐ',
    text: '①<u>Millions of paper cranes are received at the park every year.</u> They are kept for some time. Then they are recycled into new things, such as soap and paper.\nIn this way, people\'s wishes for peace are relayed and renewed.',
    questions: [
      { type: 'tf', q: '折り鶴は毎年その公園に届けられる。', answer: true },
      { type: 'choice', q: '折り鶴から何が作られますか。', options: ['服や靴', '石けんや紙', 'おもちゃ', '花'], answer: 1 },
      { type: 'fill', q: '人々の何への願いが伝えられていきますか。本文中の英語1語で答えなさい。', answer: 'peace' },
      { type: 'ja', q: '下線部①を日本語にしなさい。', answer: '毎年、何百万羽もの折り鶴がその公園に届けられます。' },
    ],
  },
);
