// 文法の理解度チェック(診断テスト)。文法事項ごとに1問。問題形式はその文法に合ったものに固定し、
// 文は教科書の単元(re)からその都度選ぶので、何度でも別の問題になる。
// type: 問題形式(QUESTION_TYPES のキー) / alt: その形式が作れないときの形式
const DIAG_POINTS = [
  // ---------- 中1 ----------
  { g: 1, title: 'be動詞（am / are / is）', re: /^(program1-aff|g1program4-aff)$/, type: 'choice' , adv: 'error' },
  { g: 1, title: 'be動詞の否定文・疑問文', re: /^(program1-aff|g1program4-aff)$/, type: 'rewrite' , adv: 'translate' },
  { g: 1, title: '一般動詞の否定文・疑問文（do）', re: /^program2-aff$/, type: 'rewrite' , adv: 'translate' },
  { g: 1, title: '3人称単数（動詞の s）', re: /^g1program5-aff$/, type: 'form' , adv: 'error' },
  { g: 1, title: 'does の否定文・疑問文', re: /^g1program5-(neg|q)$/, type: 'choice' , adv: 'rewrite' },
  { g: 1, title: 'can', re: /^g1program3-(aff|neg|q)$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 1, title: '代名詞（I / my / me など）', re: /^g1program6-(obj|pos|posp)$/, type: 'choice' , adv: 'error' },
  { g: 1, title: '名詞の複数形', re: /^program2-plural$/, type: 'form', alt: 'choice' , adv: 'error' },
  { g: 1, title: '疑問詞（what / who / where など）', re: /^(program1-where|program2-when|g1program3-whatcan|g1program4-who|g1program6-why|g1program7-how|g1program8-wh)$/, type: 'choice' , adv: 'rewrite' },
  { g: 1, title: "命令文・Let's", re: /^program2-(imperative|lets)$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 1, title: 'There is / There are', re: /^g1program7-(aff|neg|q)$/, type: 'choice' , adv: 'translate' },
  { g: 1, title: '現在進行形', re: /^g1program8-(aff|neg|q)$/, type: 'form' , adv: 'error' },
  { g: 1, title: '過去形（一般動詞）', re: /^g1program9-general$/, type: 'form' , adv: 'error' },
  { g: 1, title: 'was / were・過去進行形', re: /^g1program9-(be|prog|whprog)$/, type: 'choice' , adv: 'rewrite' },
  // ---------- 中2 ----------
  { g: 2, title: 'be going to', re: /^g2program1-begoingto$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 2, title: 'will', re: /^g2program1-will$/, type: 'rewrite' , adv: 'paraphrase' },
  { g: 2, title: '動名詞（〜ing）', re: /^g2program1-(enjoystop|likegerund|subjgerund)$/, type: 'form' , adv: 'paraphrase' },
  { g: 2, title: '接続詞 when / if / that / because', re: /^g2program2-/, type: 'choice' , adv: 'rewrite' },
  { g: 2, title: '不定詞（〜すること・〜するために・〜するための）', re: /^g2program3-(noun|adverb|adj)$/, type: 'reorder' , adv: 'extra' },
  { g: 2, title: 'It is 〜 to …', re: /^g2program3-itisto$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 2, title: 'must / have to', re: /^g2program4-(must|haveto)$/, type: 'paraphrase', alt: 'choice' , adv: 'paraphrase' },
  { g: 2, title: '疑問詞 + to（how to など）', re: /^(g2program5-whto|g2program7-howto)$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 2, title: 'SVC・SVOO（give 人 物 など）', re: /^g2program5-(svc|svoo)$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 2, title: '比較級・最上級', re: /^g2program6-(comp|sup)$/, type: 'form' , adv: 'paraphrase' },
  { g: 2, title: 'as 〜 as', re: /^g2program6-asas$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 2, title: 'like 〜 better / the best', re: /^g2program7-(better|best)$/, type: 'choice' , adv: 'translate' },
  { g: 2, title: '受け身', re: /^g2program8-/, type: 'form' , adv: 'paraphrase' },
  // ---------- 中3 ----------
  { g: 3, title: 'want / tell / ask 人 to 〜', re: /^g3program1-asktell$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 3, title: 'It is 〜 for 人 to …', re: /^g3program1-itisfor$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 3, title: '現在完了（経験・完了・継続の文）', re: /^(g3program1-experience|g3program2-(completion|continuation))$/, type: 'reorder' , adv: 'paraphrase' },
  { g: 3, title: '現在完了の形（have + 過去分詞）', re: /^(g3program1-experience|g3program2-(completion|continuation))$/, type: 'form' , adv: 'rewrite' },
  { g: 3, title: '現在完了進行形', re: /^g3program2-progressive$/, type: 'rewrite', alt: 'form' , adv: 'translate' },
  { g: 3, title: 'SVOC・make / let / help 人 〜', re: /^g3program3-(svoc|callname|makeletlelp)$/, type: 'reorder' , adv: 'extra' },
  { g: 3, title: '名詞をうしろから説明する分詞', re: /^g3program4-(presentp|pastp)$/, type: 'form' , adv: 'rewrite' },
  { g: 3, title: '間接疑問', re: /^g3program4-indirect$/, type: 'reorder' , adv: 'rewrite' },
  { g: 3, title: '関係代名詞 who / which / that', re: /^g3program5-/, type: 'choice' , adv: 'rewrite' },
  { g: 3, title: '関係代名詞（目的格）・省略', re: /^g3program6-/, type: 'reorder' , adv: 'translate' },
  { g: 3, title: '仮定法（I wish / If 〜）', re: /^g3program7-/, type: 'form', alt: 'choice' , adv: 'rewrite' },
];

// 定期テストで、その単元の文法に合った形式(あれば)。この単元の問題はこの形式で出す
// (例：所有格・目的格は並べ替えより適語補充、3単現・過去形は語形変化、疑問詞・be動詞は適語選択)
const STAGE_BEST_TYPES = [
  [/^(program1-(aff|neg|q)|g1program4-(aff|neg|q)|program2-(neg|q)|g1program5-(neg|q)|g1program9-be|g1program7-(aff|neg|q))$/, 'choice'],
  [/^(program1-where|program2-when|g1program3-whatcan|g1program4-who|g1program6-why|g1program7-(how|howmeans)|g1program8-wh|g1program9-whprog)$/, 'fillin'],
  [/^g1program6-(obj|pos|posp)$/, 'fillin'],
  [/^program2-plural$/, 'form'],
  [/^g1program5-aff$/, 'form'],
  [/^(g1program8-(aff|neg|q)|g1program9-prog)$/, 'form'],
  [/^g1program9-general$/, 'form'],
  [/^g2program1-(enjoystop|likegerund|subjgerund)$/, 'form'],
  [/^g2program2-/, 'choice'],
  [/^g2program6-(comp|sup)$/, 'form'],
  [/^g2program7-(better|best)$/, 'fillin'],
  [/^g2program8-/, 'form'],
  [/^(g3program1-experience|g3program2-(completion|continuation))$/, 'rewrite'],
  [/^g3program4-(presentp|pastp)$/, 'rewrite'],
  [/^g3program5-/, 'choice'],
  [/^g3program7-/, 'choice'],
  [/^(g2program3-itisto|g2program5-(whto|svoo)|g2program7-howto|g2program6-asas|g3program1-(asktell|itisfor)|g3program3-|g3program4-indirect|g3program6-)/, 'reorder'],
];
function bestTypeOf(st) {
  const hit = STAGE_BEST_TYPES.find(([re]) => re.test(st.key));
  return hit ? hit[1] : null;
}

// 単元ごとの「これがすべてできれば完璧」な問題形式(はじめの2つは定期テストのおまかせで使う)。
// 前にあるほど、その単元でよく出る形式。中1〜中3の教科書準拠ワーク(本冊・定期テスト対策A/B・別冊の単元確認テスト/完成テスト)で
// 単元ごとに形式を数えて並べた。ワークに出ない誤文訂正・語を入れる位置(問題集から)は後ろに置く。
const STAGE_RECIPES = [
  [/^getready$/, ['reorder', 'translate']],
  [/^(program1-aff|g1program4-aff)$/, ['choice', 'fillin', 'rewrite', 'reorder', 'translate', 'error']],
  [/^(program1-(neg|q)|g1program4-(neg|q))$/, ['rewrite', 'fillin', 'reorder', 'translate', 'myanswer']],
  [/^(program1-where|program2-when|g1program3-whatcan|g1program4-who|g1program6-why|g1program7-how|g1program8-wh|g1program9-whprog)$/, ['fillin', 'choice', 'rewrite', 'wordbox', 'reorder', 'translate', 'myanswer']],
  [/^program2-aff$/, ['fillin', 'rewrite', 'reorder', 'choice', 'translate', 'error']],
  [/^program2-(neg|q)$/, ['rewrite', 'fillin', 'choice', 'reorder', 'translate', 'myanswer']],
  [/^program2-(imperative|lets)$/, ['fillin', 'rewrite', 'reorder', 'paraphrase', 'translate']],
  [/^program2-plural$/, ['form', 'choice', 'translate', 'error']],
  [/^g1program3-aff$/, ['fillin', 'rewrite', 'reorder', 'paraphrase', 'translate', 'error']],
  [/^g1program3-(neg|q)$/, ['rewrite', 'fillin', 'reorder', 'translate', 'myanswer', 'error']],
  [/^g1program5-aff$/, ['form', 'rewrite', 'fillin', 'reorder', 'translate', 'error']],
  [/^g1program5-(neg|q)$/, ['rewrite', 'fillin', 'choice', 'reorder', 'translate', 'error']],
  [/^g1program6-(obj|pos|posp)$/, ['fillin', 'choice', 'form', 'wordbox', 'reorder', 'translate', 'error']],
  [/^g1program7-(aff|neg|q)$/, ['rewrite', 'fillin', 'choice', 'reorder', 'translate']],
  [/^g1program7-(howmeans|candoq)$/, ['fillin', 'choice', 'reorder', 'translate']],
  [/^(g1program8-(aff|neg|q)|g1program9-prog)$/, ['rewrite', 'form', 'choice', 'reorder', 'translate', 'error']],
  [/^g1program9-general$/, ['form', 'rewrite', 'fillin', 'reorder', 'translate', 'error']],
  [/^g1program9-be$/, ['rewrite', 'choice', 'fillin', 'reorder', 'translate']],
  [/^g\dpowerup\d$/, ['fillin', 'reorder', 'translate']],
  [/^g2program1-begoingto$/, ['rewrite', 'fillin', 'reorder', 'paraphrase', 'translate']],
  [/^g2program1-will$/, ['rewrite', 'fillin', 'paraphrase', 'reorder', 'translate']],
  [/^g2program1-(enjoystop|likegerund|subjgerund)$/, ['form', 'fillin', 'paraphrase', 'entoja', 'translate', 'error']],
  [/^g2program2-that$/, ['fillin', 'reorder', 'entoja', 'translate', 'insert']],
  [/^g2program2-(when|if)$/, ['choice', 'rewrite', 'fillin', 'wordbox', 'reorder', 'translate']],
  [/^g2program3-(noun|adverb|adj)$/, ['reorder', 'fillin', 'paraphrase', 'entoja', 'translate']],
  [/^g2program3-itisto$/, ['reorder', 'paraphrase', 'fillin', 'translate']],
  [/^g2program4-emotion$/, ['fillin', 'reorder', 'entoja', 'translate']],
  [/^g2program4-(must|haveto)$/, ['paraphrase', 'rewrite', 'fillin', 'wordbox', 'reorder', 'translate']],
  [/^(g2program5-whto|g2program7-howto)$/, ['fillin', 'paraphrase', 'reorder', 'translate']],
  [/^g2program5-svc$/, ['fillin', 'rewrite', 'reorder', 'choice', 'translate']],
  [/^g2program5-svoo$/, ['paraphrase', 'reorder', 'fillin', 'translate']],
  [/^g2program6-(comp|sup)$/, ['form', 'choice', 'paraphrase', 'fillin', 'reorder', 'translate']],
  [/^g2program6-asas$/, ['paraphrase', 'reorder', 'choice', 'fillin', 'translate']],
  [/^g2program7-(better|best)$/, ['fillin', 'choice', 'reorder', 'translate']],
  [/^g2program8-/, ['form', 'paraphrase', 'choice', 'rewrite', 'reorder', 'translate']],
  [/^g3program1-asktell$/, ['paraphrase', 'reorder', 'fillin', 'translate']],
  [/^g3program1-itisfor$/, ['paraphrase', 'reorder', 'fillin', 'translate']],
  [/^(g3program1-experience|g3program2-(completion|continuation))$/, ['rewrite', 'fillin', 'choice', 'form', 'paraphrase', 'reorder', 'translate']],
  [/^g3program2-progressive$/, ['rewrite', 'fillin', 'form', 'reorder', 'translate']],
  [/^g3program3-/, ['fillin', 'reorder', 'rewrite', 'form', 'translate']],
  [/^g3program4-(presentp|pastp)$/, ['rewrite', 'form', 'fillin', 'reorder', 'entoja', 'translate']],
  [/^g3program4-indirect$/, ['rewrite', 'reorder', 'fillin', 'translate']],
  [/^g3program5-/, ['choice', 'rewrite', 'fillin', 'wordbox', 'reorder', 'translate']],
  [/^g3program6-withpronoun$/, ['fillin', 'reorder', 'rewrite', 'choice', 'entoja', 'translate']],
  [/^g3program6-omitted$/, ['fillin', 'reorder', 'rewrite', 'entoja', 'translate', 'insert']],
  [/^g3program7-/, ['choice', 'fillin', 'form', 'entoja', 'reorder', 'translate']],
];
function recipeOf(st) {
  const hit = STAGE_RECIPES.find(([re]) => re.test(st.key));
  const list = hit ? hit[1] : ['reorder', 'choice', 'translate'];
  // 中1は、書きかえを空所型(変わった語だけを書く)にする(問題集の確認問題の形)
  return st.grade === 1 ? list.map(t => (t === 'rewrite' ? 'rewritefill' : t)) : list;
}

// 理解度チェックの難易度ごとの形式。基礎: 選ぶ・空所を書く(書きかえは空所型) / 標準: その文法に合った形式 / 発展: 入試でよく出る書きかえ・誤文訂正・英作文
function diagTypesFor(d, level) {
  if (level === 'basic') {
    const b = { rewrite: 'rewritefill', form: 'choice', paraphrase: 'choice', reorder: 'reorder' }[d.type] || 'choice';
    return [b, 'choice', 'fillin'];
  }
  if (level === 'advanced') return [d.adv || 'translate', d.type, 'translate'];
  return [d.type, d.alt || 'choice', 'reorder'];
}
