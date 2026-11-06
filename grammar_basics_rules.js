// 基礎文法(ゼロから)の「ルール」。英語をまったく知らない人(小学生)でも、見ながら解けるように、
// むずかしいことばを使わずに書く。プリントの先頭に「ルール1・2…」を並べ、問題ごとに「→ ルール2 を見よう」と案内する。
// t: ルールの名前 / s: 説明 / ex: [英文, 日本語](*で囲んだ語を太字) / w(lw, a): この問題で使うルールか
//   lw = 答えの英文の語(小文字・記号なし)、a = 空所の答えの語(小文字。空所のない問題は '')
// words: このレッスンで出てくることばの説明(用語)
const B_SUBJ1 = ['he', 'she', 'it', 'this', 'that'];
const bHas = (lw, ...ws) => ws.some(w => lw.includes(w));
const BASIC_RULES = {
  1: { words: [['主語（しゅご）', '文の「だれが」「なにが」にあたることば。日本語の「〜は」「〜が」'], ['動詞（どうし）', '「する」「好きだ」「食べる」など、動きや気持ちを表すことば']],
    rules: [
      { t: '英語は「だれが」→「する」→「なにを」の順', s: '日本語は「私は テニスを する」と「する」が最後。英語は「私は する テニスを」と、「する」が2番目に来る。', ex: [['*I* *play* tennis.', '私は する テニスを（私はテニスをします）'], ['*We* *like* dogs.', '私たちは 好きだ イヌが（私たちはイヌが好きです）']], w: () => true },
      { t: '文の書き方', s: '文のはじめの文字は大文字。文の終わりにはピリオド（.）。単語と単語のあいだは1文字分あける。「私は」の I はいつも大文字。', ex: [['I like music.', '私は音楽が好きです。']], w: () => false },
    ] },
  2: { words: [['be動詞（ビーどうし）', 'am / are / is のこと。「AはBです」の「です」のはたらきをする']],
    rules: [
      { t: '「AはBです」は be動詞でつなぐ', s: '英語の文には動詞（する・です）がかならず必要。「私はケン」は I Ken. ではなく、I *am* Ken. と am を入れる。am は「＝（イコール）」の記号のようなもの。', ex: [['I *am* Ken.', '私は ＝ ケン（私はケンです）']], w: () => true },
      { t: '「私は」なら am、「あなたは」なら are', s: 'I（私は）のあとは am、you（あなたは）のあとは are。セットで覚えよう。', ex: [['I *am* a student.', '私は学生です。'], ['You *are* kind.', 'あなたは親切です。']], w: (lw, a) => ['am', 'are'].includes(a) || bHas(lw, 'am', 'are') },
      { t: '短くする言い方', s: 'I am は I\'m、you are は you\'re と短くできる。（\'）はアポストロフィ。', ex: [["I'm Ken.", '私はケンです。']], w: lw => lw.some(w => /'(m|re)$/.test(w)) },
    ] },
  3: { words: [['主語（しゅご）', '文の「〜は」「〜が」にあたることば'], ['単数（たんすう）', '1人・1つのこと'], ['複数（ふくすう）', '2人・2つ以上のこと']],
    rules: [
      { t: 'I のときは am', s: '主語が I（私は）なら am。', ex: [['I *am* busy.', '私はいそがしいです。']], w: (lw, a) => a === 'am' || lw[0] === 'i' },
      { t: 'you と、2人（2つ）以上のときは are', s: '主語が you（あなた）、we（私たち）、they（彼ら）、Ken and Aki（ケンとアキ）、cats（ネコたち）のように2人・2つ以上なら are。', ex: [['You *are* tall.', 'あなたは背が高いです。'], ['We *are* friends.', '私たちは友達です。']], w: (lw, a) => a === 'are' || bHas(lw, 'are') },
      { t: 'それ以外の1人（1つ）のときは is', s: '主語が he（彼）、she（彼女）、Ken、my mother、this（これ）、that（あれ）など、私・あなた以外の1人・1つなら is。', ex: [['He *is* a teacher.', '彼は先生です。'], ['This *is* my bag.', 'これは私のかばんです。']], w: (lw, a) => a === 'is' || bHas(lw, 'is') },
    ] },
  4: { words: [['一般動詞（いっぱんどうし）', 'play（する）、like（好きだ）、have（持っている）など、be動詞（am / are / is）以外の動詞']],
    rules: [
      { t: '「する」「好き」は一般動詞を使う', s: '「〜をします」「〜が好きです」は play、like などの一般動詞を使う。「です」がついていても am / are は使わない。', ex: [['I *like* music.', '私は音楽が好きです。'], ['We *play* soccer.', '私たちはサッカーをします。']], w: () => true },
      { t: '1つの文に動詞は1つ', s: 'be動詞（am / are / is）と一般動詞をいっしょに使わない。× I am like music. → ○ I like music.', ex: [['I *have* a dog.', '私はイヌを飼っています。']], w: (lw, a) => ['am', 'are', 'is'].includes(a) === false },
    ] },
  5: { words: [['3人称（さんにんしょう）', '「私」と「あなた」以外の人やもの（彼・彼女・ケン・ネコ・これ）'], ['3単現（さんたんげん）', '主語が3人称で1人（1つ）、今のことを言うときに動詞につける s']],
    rules: [
      { t: '私・あなた以外の1人なら、動詞に s', s: '主語が he、she、Ken、my father など「私・あなた以外の1人（1つ）」のときは、動詞の最後に s をつける。I、you、we、they のときはつけない。', ex: [['I *play* tennis.', '私はテニスをします。（s なし）'], ['Ken *plays* tennis.', 'ケンはテニスをします。（s あり）']], w: () => true },
      { t: 's ではなく es・ies になる動詞', s: 'go → goes、watch → watches、wash → washes（es をつける）。study → studies（y を i にかえて es）。', ex: [['She *goes* to school.', '彼女は学校へ行きます。'], ['He *studies* English.', '彼は英語を勉強します。']], w: (lw, a) => /(es)$/.test(a) || lw.some(w => /^(goes|watches|washes|studies|teaches|does)$/.test(w)) },
      { t: 'have は has になる', s: 'have（持っている）は、s をつけるかわりに has にする。', ex: [['My father *has* a car.', '父は車を持っています。']], w: (lw, a) => a === 'has' || bHas(lw, 'has') },
    ] },
  6: { words: [['代名詞（だいめいし）', 'I（私）、he（彼）、it（それ）など、名前のかわりに使うことば']],
    rules: [
      { t: '「〜は」の形：I / you / he / she / we / they', s: '文のはじめ（主語）には「〜は」の形を使う。', ex: [['*She* is my sister.', '彼女は私の妹です。']], w: (lw, a) => ['i', 'he', 'she', 'we', 'they'].includes(a) },
      { t: '「〜の」の形：my / your / his / her / our / their', s: '「私の本」は my book。「〜の」はうしろに名前（もの）が来る。', ex: [['This is *my* bike.', 'これは私の自転車です。'], ['*His* name is Ken.', '彼の名前はケンです。']], w: (lw, a) => ['my', 'your', 'his', 'our', 'their'].includes(a) || a === 'her' && lw[lw.indexOf('her') + 1] && !['very', 'and'].includes(lw[lw.indexOf('her') + 1]) || !a && bHas(lw, 'my', 'your', 'his', 'our', 'their') },
      { t: '「〜を・〜に」の形：me / you / him / her / us / them', s: '動詞のあと（「〜を」「〜に」）には me、him などの形を使う。with（〜といっしょに）などのあとも同じ。', ex: [['I like *him*.', '私は彼が好きです。'], ['Come with *me*.', '私といっしょに来て。']], w: (lw, a) => ['me', 'him', 'us', 'them', 'her'].includes(a) || !a && lw.slice(1).some(w => ['me', 'him', 'us', 'them'].includes(w)) },
    ] },
  7: { words: [['否定文（ひていぶん）', '「〜ではありません」「〜しません」のように、打ち消す文']],
    rules: [
      { t: 'am / are / is のすぐあとに not', s: '「〜ではありません」は、am / are / is のうしろに not を入れるだけ。', ex: [['I *am not* hungry.', '私はおなかがすいていません。'], ['He *is not* a doctor.', '彼は医者ではありません。']], w: () => true },
      { t: '短くする言い方', s: 'is not → isn\'t、are not → aren\'t。I am not は I\'m not にする。', ex: [["She *isn't* busy.", '彼女はいそがしくありません。']], w: lw => lw.some(w => /n't$/.test(w)) },
    ] },
  8: { words: [['原形（げんけい）', 's などがつかない、もとの形の動詞（play、go）']],
    rules: [
      { t: '一般動詞の「〜しません」は don\'t', s: 'play、like などの一般動詞の文は、動詞の前に do not（don\'t）を置く。am not ではない。', ex: [['I *don\'t* like dogs.', '私はイヌが好きではありません。']], w: (lw, a) => ['do', "don't"].includes(a) || bHas(lw, "don't", 'do') },
      { t: '私・あなた以外の1人なら doesn\'t', s: '主語が he、she、Ken などのときは does not（doesn\'t）。動詞の s はとって、もとの形（原形）にもどす。', ex: [['She *doesn\'t play* tennis.', '彼女はテニスをしません。（plays ではなく play）']], w: (lw, a) => ['does', "doesn't"].includes(a) || bHas(lw, "doesn't", 'does') },
    ] },
  9: { words: [['疑問文（ぎもんぶん）', '「〜ですか」とたずねる文。最後に ?（クエスチョンマーク）をつける']],
    rules: [
      { t: 'am / are / is を文のいちばん前に', s: '「〜ですか」は、am / are / is を主語の前に出して、最後に ? をつける。', ex: [['You are busy. → *Are you* busy?', 'あなたはいそがしいですか。']], w: () => true },
      { t: '答えも am / are / is で', s: 'Yes, I am.（はい）／No, I\'m not.（いいえ）。Are you 〜? には I で答える。男の人は he、女の人は she、もの（this / that）は it で答える。', ex: [['Is that a hospital? — Yes, *it is*.', 'あれは病院ですか。— はい、そうです。']], w: lw => lw.includes('yes') || lw.includes('no') },
    ] },
  10: { words: [['疑問文（ぎもんぶん）', '「〜しますか」とたずねる文']],
    rules: [
      { t: '一般動詞の「〜しますか」は Do で始める', s: 'play、like などの文は、文のはじめに Do を置いて、最後に ?。Are you like 〜? とはしない。', ex: [['*Do* you like cats?', 'あなたはネコが好きですか。'], ['— Yes, I do. / No, I don\'t.', '— はい。／いいえ。']], w: (lw, a) => a === 'do' || lw[0] === 'do' },
      { t: '私・あなた以外の1人なら Does', s: '主語が he、she、Ken などなら Does で始める。動詞は s をとって、もとの形（原形）。', ex: [['*Does* Ken *play* soccer?', 'ケンはサッカーをしますか。（plays ではなく play）']], w: (lw, a) => a === 'does' || lw[0] === 'does' },
    ] },
  11: { words: [['助動詞（じょどうし）', 'can のように、動詞の前に置いて意味をつけ足すことば']],
    rules: [
      { t: '「〜できる」は can + 動詞', s: '動詞の前に can を置く。can のあとの動詞はいつも、もとの形（s をつけない）。', ex: [['He *can swim*.', '彼は泳げます。（swims ではない）']], w: () => true },
      { t: '「できない」は can\'t（cannot）', s: 'can のかわりに can\'t または cannot を置く。', ex: [["I *can't* sing well.", '私はじょうずに歌えません。']], w: lw => bHas(lw, "can't", 'cannot') },
      { t: '「できますか」は Can を前に', s: 'Can を文のはじめに出す。答えは Yes, I can. / No, I can\'t.', ex: [['*Can* you cook? — Yes, I can.', '料理ができますか。— はい。']], w: lw => lw[0] === 'can' },
    ] },
  12: { words: [['疑問詞（ぎもんし）', 'what（なに）、who（だれ）、where（どこ）、when（いつ）、how（どう）など、たずねることば']],
    rules: [
      { t: 'たずねることばは、文のいちばん前', s: 'what、where などを文のはじめに置き、そのあとに「〜ですか」の形（are you / do you）を続ける。', ex: [['*Where* do you live?', 'あなたはどこに住んでいますか。'], ['*What* is this?', 'これはなんですか。']], w: () => true },
      { t: 'ことばの意味', s: 'what＝なに　who＝だれ　where＝どこ　when＝いつ　which＝どちら　how＝どう・どうやって　what time＝何時', ex: [['*What time* is it?', '何時ですか。']], w: () => false },
      { t: 'Yes / No では答えない', s: 'たずねられたこと（場所・時間・もの）を答える。', ex: [['Where are you from? — I\'m from Japan.', 'どこの出身ですか。— 日本です。']], w: () => false },
    ] },
  13: { words: [['複数形（ふくすうけい）', '2つ以上を表すときの、s がついた名詞の形']],
    rules: [
      { t: '2つ以上なら名前に s', s: 'two（2つの）、many（たくさんの）などのあとは、名前（名詞）に s をつける。1つなら a dog、2つなら two dogs。', ex: [['I have *two cats*.', '私はネコを2ひき飼っています。']], w: () => true },
      { t: 'es・ies・形がかわる名詞', s: 'box → boxes、city → cities、child → children、man → men。', ex: [['three *boxes*', '3つの箱']], w: (lw, a) => /(es|ren|men)$/.test(a) },
      { t: '「いくつ？」は How many', s: 'How many のあとは s のついた形。', ex: [['*How many books* do you have?', '本を何さつ持っていますか。']], w: lw => lw[0] === 'how' && lw[1] === 'many' },
    ] },
  14: { words: [['命令文（めいれいぶん）', '「〜しなさい」「〜して」と相手に言う文']],
    rules: [
      { t: '「〜しなさい」は動詞から始める', s: 'You（あなたは）を言わずに、動詞のもとの形から始める。Please をつけるとていねいになる。', ex: [['*Open* the door.', 'ドアを開けなさい。'], ['*Please sit* down.', 'どうぞすわってください。']], w: () => true },
      { t: '「〜してはいけない」は Don\'t', s: '動詞の前に Don\'t を置く。', ex: [["*Don't run* here.", 'ここで走ってはいけません。']], w: lw => lw[0] === "don't" },
      { t: '「〜しましょう」は Let\'s', s: '動詞の前に Let\'s を置く。', ex: [["*Let's sing* together.", 'いっしょに歌いましょう。']], w: lw => lw[0] === "let's" },
    ] },
  15: { words: [['ing形（アイエヌジーけい）', '動詞の最後に ing をつけた形（playing）']],
    rules: [
      { t: '「今〜している」は am / are / is + 〜ing', s: '「いま〜しているところ」は、am / are / is のあとに、ing をつけた動詞を置く。', ex: [['I *am studying* now.', '私はいま勉強しています。'], ['She *is cooking*.', '彼女は料理をしています。']], w: () => true },
      { t: 'ing のつけ方', s: 'ふつうは ing をつけるだけ（play → playing）。write → writing（e をとる）、run → running、swim → swimming（最後の文字を重ねる）。', ex: [['He *is running*.', '彼は走っています。']], w: (lw, a) => /(tting|nning|mming|ping|ging)$/.test(a) || /ing$/.test(a) && !/eing$/.test(a) && a.length > 0 },
      { t: 'しているか、たずねる・打ち消す', s: '「〜していますか」は Are / Is を前に。「〜していません」は am / are / is のあとに not。', ex: [['*Is* she *sleeping*? — Yes, she is.', '彼女は眠っていますか。— はい。']], w: lw => ['am', 'are', 'is', 'what'].includes(lw[0]) || lw.includes('not') },
    ] },
  16: { words: [['過去形（かこけい）', '「〜しました」と、前のことを言うときの動詞の形']],
    rules: [
      { t: '「〜しました」は動詞に ed', s: 'play → played、watch → watched のように、動詞の最後に ed（e で終わる語は d）をつける。主語が he でも同じ形。', ex: [['I *played* tennis yesterday.', '私はきのうテニスをしました。']], w: (lw, a) => /ed$/.test(a) },
      { t: '形がかわる動詞（不規則動詞）', s: 'go → went、see → saw、have → had、eat → ate、come → came、make → made。1つずつ覚えよう。', ex: [['She *went* to Kyoto.', '彼女は京都へ行きました。']], w: (lw, a) => a && !/ed$/.test(a) && !['did', "didn't"].includes(a) },
      { t: '「しなかった」は didn\'t、「しましたか」は Did', s: 'didn\'t（did not）や Did のあとの動詞は、もとの形（原形）にもどす。', ex: [["I *didn't watch* TV.", '私はテレビを見ませんでした。'], ['*Did* you *go*? — Yes, I did.', '行きましたか。— はい。']], w: (lw, a) => ['did', "didn't"].includes(a) || bHas(lw, 'did', "didn't") },
    ] },
  17: { words: [['be動詞の過去形', 'am・is → was、are → were']],
    rules: [
      { t: 'am・is のかわりに was', s: '「〜でした」「〜にいました」は、I / he / she / Ken など1人のとき was。', ex: [['I *was* busy yesterday.', '私はきのういそがしかったです。']], w: (lw, a) => a === 'was' || bHas(lw, 'was', "wasn't") },
      { t: 'are のかわりに were', s: 'you や、2人（2つ）以上のときは were。', ex: [['They *were* in the gym.', '彼らは体育館にいました。']], w: (lw, a) => a === 'were' || bHas(lw, 'were', "weren't") },
      { t: '「〜していた」は was / were + 〜ing', s: '「そのとき〜していた」は was / were のあとに ing の形。', ex: [['I *was reading* then.', '私はそのとき読書をしていました。']], w: lw => lw.some(w => /ing$/.test(w)) },
    ] },
  18: { words: [['過去進行形（かこしんこうけい）', '「〜していた」という言い方']],
    rules: [
      { t: '「〜していた」は was / were + 〜ing', s: '今のこと（am / is / are + ing）を、was / were にかえるだけ。1人なら was、you と2人以上なら were。', ex: [['I *was watching* TV then.', '私はそのときテレビを見ていました。']], w: () => true },
      { t: 'たずねる・打ち消す', s: '「〜していましたか」は Was / Were を前に、「〜していなかった」は was / were のあとに not。', ex: [['What *were* you *doing*?', 'あなたは何をしていましたか。']], w: lw => ['was', 'were', 'what'].includes(lw[0]) || lw.includes('not') },
    ] },
  19: { words: [['There is', '「〜がある」「〜がいる」という言い方']],
    rules: [
      { t: '「〜がある」は There is / There are', s: '1つなら There is、2つ以上なら There are。そのあとに「もの」、最後に「場所」。', ex: [['*There is* a cat on the bed.', 'ベッドの上にネコが1ぴきいます。'], ['*There are* two pens in the box.', '箱の中にペンが2本あります。']], w: () => true },
      { t: 'たずねる・前のこと', s: '「ありますか」は Is there / Are there 〜?。「ありました」は There was / There were。', ex: [['*Is there* a park near here? — Yes, there is.', '近くに公園はありますか。— はい。']], w: lw => lw[0] !== 'there' || bHas(lw, 'was', 'were') },
    ] },
  20: { words: [['予定（よてい）', '前から決めている、これからすること']],
    rules: [
      { t: '「〜するつもり」は be going to + 動詞', s: 'am / are / is ＋ going to ＋ もとの形の動詞。am / are / is は主語で使い分ける。', ex: [['I *am going to play* soccer tomorrow.', '私は明日サッカーをするつもりです。']], w: () => true },
      { t: 'たずねる・打ち消す', s: 'Are / Is を前に出すか、am / are / is のあとに not。do や does は使わない。', ex: [['*Is* he *going to* come? — Yes, he is.', '彼は来るつもりですか。— はい。']], w: lw => ['are', 'is', 'am', 'what', 'where', 'when', 'how'].includes(lw[0]) || lw.includes('not') },
    ] },
  21: { words: [['未来（みらい）', 'これから先のこと']],
    rules: [
      { t: '「〜でしょう」「〜します」は will + 動詞', s: 'will のあとは、もとの形の動詞。主語が he でも will のまま。', ex: [['It *will be* sunny tomorrow.', '明日は晴れるでしょう。'], ['I *will help* you.', '手伝いますよ。']], w: () => true },
      { t: 'たずねる・打ち消す', s: '「〜しますか」は Will を前に、「〜しません」は will not（won\'t）。', ex: [['*Will* you come? — No, I *won\'t*.', '来ますか。— いいえ。']], w: lw => lw[0] === 'will' || bHas(lw, "won't", 'not') },
    ] },
  22: { words: [['人と物の順番', 'give（あげる）などのあとは「人 → 物」の順']],
    rules: [
      { t: 'give / show / tell のあとは「人 → 物」', s: '「彼にプレゼントをあげた」は gave（あげた）→ him（彼に）→ a present（プレゼントを）の順。人は me / him / her の形。', ex: [['I *gave him a present*.', '私は彼にプレゼントをあげました。'], ['Please *show me* your notebook.', '私にノートを見せてください。']], w: () => true },
    ] },
  23: { words: [['A ＝ B', 'call A B は「A を B と呼ぶ」、make A B は「A を B にする」']],
    rules: [
      { t: '「A を B と呼ぶ」は call A B', s: 'call のあとに「だれを」、そのあとに「呼び名」。A ＝ B の関係になっている。', ex: [['We *call* the dog Pochi.', '私たちはその犬をポチと呼びます。']], w: lw => lw.some(w => /^(call|calls|called|name|named)$/.test(w)) },
      { t: '「A を B（の気持ち）にする」は make A B', s: 'make のあとに「だれを」、そのあとに happy（うれしい）などの気持ちや様子。', ex: [['The news *made us happy*.', 'その知らせは私たちをうれしくしました。']], w: lw => lw.some(w => /^(make|makes|made|keep|keeps)$/.test(w)) },
    ] },
  24: { words: [['接続詞（せつぞくし）', '文と文をつなぐことば']],
    rules: [
      { t: 'when は「〜するとき」', s: 'when のあとに「だれが＋どうした」を続けて、もう1つの文とつなぐ。', ex: [['I was sleeping *when* he called.', '彼が電話したとき、私は寝ていました。']], w: (lw, a) => a === 'when' || lw.includes('when') },
      { t: 'if は「もし〜なら」、because は「〜なので」', s: 'if・because のあとにも「だれが＋どうする」を続ける。', ex: [['*If* you are free, let\'s play.', 'ひまなら遊ぼう。'], ['I like summer *because* I can swim.', '泳げるので夏が好きです。']], w: (lw, a) => ['if', 'because'].includes(a) || bHas(lw, 'if', 'because') },
      { t: '前に置くときはコンマ', s: 'When 〜 や If 〜 で文を始めるときは、文の切れ目に「,（コンマ）」を置く。', ex: [['*When* I was a child*,* I lived in Osaka.', '子どものとき、大阪に住んでいました。']], w: lw => ['when', 'if'].includes(lw[0]) },
    ] },
  25: { words: [['that', '「〜ということ」と、文をつなぐことば（省略できる）']],
    rules: [
      { t: '「〜だと思う」は I think (that) + 文', s: 'think（思う）、know（知っている）、hope（願う）のあとに that、そのあとに「だれが＋どうだ」。that はなくてもよい。', ex: [['I *think that* English is fun.', '英語は楽しいと思います。'], ['I *know* Meg is busy.', 'メグがいそがしいことを知っています。']], w: () => true },
    ] },
  26: { words: [['have to / must', 'どちらも「〜しなければならない」']],
    rules: [
      { t: '「〜しなければならない」は have to / must', s: 'have to ＋ もとの形の動詞。主語が he、she なら has to。must ＋ もとの形の動詞でもよい。', ex: [['I *have to go* home.', '私は家に帰らなければなりません。'], ['She *has to study*.', '彼女は勉強しなければなりません。']], w: () => true },
      { t: '打ち消すと意味がちがう', s: 'don\'t have to は「〜しなくてよい」。must not は「〜してはいけない」。', ex: [["You *don't have to* hurry.", '急がなくていいよ。'], ['You *must not* run here.', 'ここで走ってはいけません。']], w: lw => lw.includes('not') || bHas(lw, "don't", "doesn't", "mustn't") },
    ] },
  27: { words: [['お願い・許可（きょか）', '「〜してくれますか」「〜してもいいですか」']],
    rules: [
      { t: '「〜してくれますか」は Can you / Could you', s: 'Could you 〜? / Would you 〜? はていねいな言い方。答えは Sure.（いいよ）など。', ex: [['*Could you* open the window?', '窓を開けていただけますか。']], w: lw => lw[1] === 'you' },
      { t: '「〜してもいいですか」は Can I / May I', s: 'May I 〜? はていねいな言い方。', ex: [['*May I* use your pen?', 'ペンを使ってもいいですか。']], w: lw => lw[1] === 'i' && lw[0] !== 'shall' },
      { t: '「〜しましょうか」は Shall I / Shall we', s: 'Shall I 〜?（私が〜しましょうか）、Shall we 〜?（いっしょに〜しましょうか）。', ex: [['*Shall I* carry your bag?', 'かばんを持ちましょうか。']], w: lw => lw[0] === 'shall' },
    ] },
  28: { words: [['不定詞（ふていし）', 'to ＋ もとの形の動詞']],
    rules: [
      { t: '「〜すること」は to + 動詞', s: 'want to 〜（〜したい）、like to 〜（〜するのが好き）、start to 〜（〜し始める）。', ex: [['I want *to be* a doctor.', '私は医者になりたいです。']], w: lw => lw.some((w, i) => w === 'to' && /^(want|wants|wanted|like|likes|start|started|try|tried|need|needs|hope|decided|began)$/.test(lw[i - 1])) },
      { t: '「〜するために」も to + 動詞', s: '文の最後に to 〜 をつけると「〜するために」。', ex: [['I went to the library *to study*.', '私は勉強するために図書館へ行きました。']], w: () => true },
      { t: '「〜するための」も to + 動詞', s: 'もの・ことのあとに to 〜 で「〜するための」「〜するべき」。', ex: [['I have homework *to do*.', '私にはするべき宿題があります。']], w: lw => lw.some((w, i) => w === 'to' && /^(something|homework|time|place|places|nothing|anything|money|book|books|work)$/.test(lw[i - 1])) },
    ] },
  29: { words: [['動名詞（どうめいし）', '動詞に ing をつけて「〜すること」とした形']],
    rules: [
      { t: '「〜すること」は 〜ing でも言える', s: '動詞に ing をつけると「〜すること」。文のはじめ（主語）にもなる。', ex: [['*Cooking* is fun.', '料理をすることは楽しいです。']], w: () => true },
      { t: 'enjoy / finish / stop のあとは 〜ing', s: 'enjoy（楽しむ）、finish（終える）、stop（やめる）のあとは、かならず ing の形。enjoy to swim はまちがい。', ex: [['We *enjoyed swimming*.', '私たちは泳ぐのを楽しみました。']], w: lw => lw.some(w => /^(enjoy|enjoys|enjoyed|finish|finished|stop|stopped)$/.test(w)) },
    ] },
  30: { words: [['how to', '「〜のしかた」']],
    rules: [
      { t: '「〜のしかた」は how to + 動詞', s: 'how to 〜 で「どうやって〜すればよいか・〜のしかた」。', ex: [['I know *how to make* this.', 'これの作り方を知っています。']], w: lw => lw.includes('how') },
      { t: 'what to / where to / when to', s: 'what to 〜（何を〜すればよいか）、where to 〜（どこで〜すればよいか）、when to 〜（いつ〜すればよいか）。', ex: [["I don't know *what to do*.", '何をすればよいかわかりません。']], w: lw => bHas(lw, 'what', 'where', 'when', 'which') },
    ] },
  31: { words: [['比較（ひかく）', '2つ以上のものをくらべる言い方']],
    rules: [
      { t: '「A は B より〜」は 〜er than', s: 'tall → taller（ことばに er）、そのあと than B。', ex: [['Tom is *taller than* Ken.', 'トムはケンより背が高いです。']], w: (lw, a) => lw.includes('than') || /er$/.test(a) },
      { t: '「いちばん〜」は the 〜est', s: 'tall → the tallest。「〜の中で」は in（場所・グループ）か of（数・all）。', ex: [['He is *the tallest in* his class.', '彼はクラスでいちばん背が高いです。']], w: (lw, a) => /est$/.test(a) || lw.some((w, i) => w === 'the' && /est$|^most$|^best$/.test(lw[i + 1] || '')) },
      { t: '長いことばは more / most', s: 'interesting（おもしろい）などの長いことばは、er・est ではなく more・most を前に置く。', ex: [['This book is *more interesting* than that one.', 'この本はあの本よりおもしろいです。']], w: (lw, a) => ['more', 'most'].includes(a) || bHas(lw, 'more', 'most') },
      { t: '「同じくらい〜」は as 〜 as', s: 'as と as のあいだには、もとの形（tall）を入れる。not as 〜 as は「…ほど〜ではない」。', ex: [['My dog is *as big as* yours.', '私の犬はあなたのと同じくらい大きいです。']], w: lw => lw.filter(w => w === 'as').length >= 2 },
    ] },
  32: { words: [['受け身（うけみ）', '「〜される」「〜された」という言い方'], ['過去分詞（かこぶんし）', 'played、made、written など。多くは過去形と同じ形']],
    rules: [
      { t: '「〜される」は be動詞 + 過去分詞', s: 'am / are / is（前のことなら was / were）のあとに、過去分詞を置く。', ex: [['English *is spoken* in many countries.', '英語は多くの国で話されています。']], w: () => true },
      { t: '「だれによって」は by 〜', s: '「〜によって」は by のあとに人を置く。', ex: [['This picture *was painted by* my father.', 'この絵は父によってかかれました。']], w: lw => lw.includes('by') },
      { t: '形がかわる過去分詞', s: 'speak → spoken、write → written、see → seen、take → taken、build → built、make → made。', ex: [['This temple *was built* long ago.', 'この寺はずっと前に建てられました。']], w: (lw, a) => /(en|built|made|sold|sung)$/.test(a) },
    ] },
  33: { words: [['現在完了（げんざいかんりょう）', 'have ＋ 過去分詞。前のことが今につながっていることを表す']],
    rules: [
      { t: '「ずっと〜している」は have + 過去分詞 + for / since', s: 'for ＋ 長さ（for ten years）、since ＋ 始まり（since 2020）。', ex: [['I *have lived* here *for* ten years.', '私は10年間ここに住んでいます。']], w: lw => bHas(lw, 'for', 'since') },
      { t: '「〜したことがある」は have + 過去分詞', s: 'once（1回）、twice（2回）、never（一度も〜ない）、ever（今までに）といっしょに使う。', ex: [['I *have been* to Kyoto twice.', '私は京都へ2回行ったことがあります。']], w: lw => bHas(lw, 'once', 'twice', 'times', 'never', 'ever', 'before') },
      { t: '「もう〜した・ちょうど〜した」は have + 過去分詞', s: 'just（ちょうど）、already（もう）、yet（まだ・もう）といっしょに使う。', ex: [['I *have just finished* my homework.', 'ちょうど宿題を終えたところです。']], w: lw => bHas(lw, 'just', 'already', 'yet') },
    ] },
};
