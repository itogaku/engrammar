// 文法の理解度チェック(診断テスト)。文法事項ごとに1問。問題形式はその文法に合ったものに固定し、
// 文は教科書の単元(re)からその都度選ぶので、何度でも別の問題になる。
// type: 問題形式(QUESTION_TYPES のキー) / alt: その形式が作れないときの形式
const DIAG_POINTS = [
  // ---------- 中1 ----------
  { g: 1, title: 'be動詞（am / are / is）', re: /^(program1-aff|g1program4-aff)$/, type: 'choice' },
  { g: 1, title: 'be動詞の否定文・疑問文', re: /^(program1-aff|g1program4-aff)$/, type: 'rewrite' },
  { g: 1, title: '一般動詞の否定文・疑問文（do）', re: /^program2-aff$/, type: 'rewrite' },
  { g: 1, title: '3人称単数（動詞の s）', re: /^g1program5-aff$/, type: 'form' },
  { g: 1, title: 'does の否定文・疑問文', re: /^g1program5-(neg|q)$/, type: 'choice' },
  { g: 1, title: 'can', re: /^g1program3-(aff|neg|q)$/, type: 'reorder' },
  { g: 1, title: '代名詞（I / my / me など）', re: /^g1program6-(obj|pos|posp)$/, type: 'choice' },
  { g: 1, title: '名詞の複数形', re: /^program2-plural$/, type: 'form', alt: 'choice' },
  { g: 1, title: '疑問詞（what / who / where など）', re: /^(program1-where|program2-when|g1program3-whatcan|g1program4-who|g1program6-why|g1program7-how|g1program8-wh)$/, type: 'choice' },
  { g: 1, title: "命令文・Let's", re: /^program2-(imperative|lets)$/, type: 'reorder' },
  { g: 1, title: 'There is / There are', re: /^g1program7-(aff|neg|q)$/, type: 'choice' },
  { g: 1, title: '現在進行形', re: /^g1program8-(aff|neg|q)$/, type: 'form' },
  { g: 1, title: '過去形（一般動詞）', re: /^g1program9-general$/, type: 'form' },
  { g: 1, title: 'was / were・過去進行形', re: /^g1program9-(be|prog|whprog)$/, type: 'choice' },
  // ---------- 中2 ----------
  { g: 2, title: 'be going to', re: /^g2program1-begoingto$/, type: 'reorder' },
  { g: 2, title: 'will', re: /^g2program1-will$/, type: 'rewrite' },
  { g: 2, title: '動名詞（〜ing）', re: /^g2program1-(enjoystop|likegerund|subjgerund)$/, type: 'form' },
  { g: 2, title: '接続詞 when / if / that / because', re: /^g2program2-/, type: 'choice' },
  { g: 2, title: '不定詞（〜すること・〜するために・〜するための）', re: /^g2program3-(noun|adverb|adj)$/, type: 'reorder' },
  { g: 2, title: 'It is 〜 to …', re: /^g2program3-itisto$/, type: 'reorder' },
  { g: 2, title: 'must / have to', re: /^g2program4-(must|haveto)$/, type: 'paraphrase', alt: 'choice' },
  { g: 2, title: '疑問詞 + to（how to など）', re: /^(g2program5-whto|g2program7-howto)$/, type: 'reorder' },
  { g: 2, title: 'SVC・SVOO（give 人 物 など）', re: /^g2program5-(svc|svoo)$/, type: 'reorder' },
  { g: 2, title: '比較級・最上級', re: /^g2program6-(comp|sup)$/, type: 'form' },
  { g: 2, title: 'as 〜 as', re: /^g2program6-asas$/, type: 'reorder' },
  { g: 2, title: 'like 〜 better / the best', re: /^g2program7-(better|best)$/, type: 'choice' },
  { g: 2, title: '受け身', re: /^g2program8-/, type: 'form' },
  // ---------- 中3 ----------
  { g: 3, title: 'want / tell / ask 人 to 〜', re: /^g3program1-asktell$/, type: 'reorder' },
  { g: 3, title: 'It is 〜 for 人 to …', re: /^g3program1-itisfor$/, type: 'reorder' },
  { g: 3, title: '現在完了（経験・完了・継続の文）', re: /^(g3program1-experience|g3program2-(completion|continuation))$/, type: 'reorder' },
  { g: 3, title: '現在完了の形（have + 過去分詞）', re: /^(g3program1-experience|g3program2-(completion|continuation))$/, type: 'form' },
  { g: 3, title: '現在完了進行形', re: /^g3program2-progressive$/, type: 'rewrite', alt: 'form' },
  { g: 3, title: 'SVOC・make / let / help 人 〜', re: /^g3program3-(svoc|callname|makeletlelp)$/, type: 'reorder' },
  { g: 3, title: '名詞をうしろから説明する分詞', re: /^g3program4-(presentp|pastp)$/, type: 'form' },
  { g: 3, title: '間接疑問', re: /^g3program4-indirect$/, type: 'reorder' },
  { g: 3, title: '関係代名詞 who / which / that', re: /^g3program5-/, type: 'choice' },
  { g: 3, title: '関係代名詞（目的格）・省略', re: /^g3program6-/, type: 'reorder' },
  { g: 3, title: '仮定法（I wish / If 〜）', re: /^g3program7-/, type: 'form', alt: 'choice' },
];

// 定期テストで、その単元の文法に合った形式(あれば)。この単元の問題はこの形式で出す
// (例：所有格・目的格は並べ替えより適語補充、3単現・過去形は語形変化、疑問詞・be動詞は適語選択)
const STAGE_BEST_TYPES = [
  [/^(program1-(aff|neg|q)|g1program4-(aff|neg|q)|program2-(neg|q)|g1program5-(neg|q)|g1program9-be|g1program7-(aff|neg|q))$/, 'choice'],
  [/^(program1-where|program2-when|g1program3-whatcan|g1program4-who|g1program6-why|g1program7-(how|howmeans)|g1program8-wh|g1program9-whprog)$/, 'choice'],
  [/^g1program6-(obj|pos|posp)$/, 'fillin'],
  [/^program2-plural$/, 'form'],
  [/^g1program5-aff$/, 'form'],
  [/^(g1program8-(aff|neg|q)|g1program9-prog)$/, 'form'],
  [/^g1program9-general$/, 'form'],
  [/^g2program1-(enjoystop|likegerund|subjgerund)$/, 'form'],
  [/^g2program2-/, 'choice'],
  [/^g2program6-(comp|sup)$/, 'form'],
  [/^g2program7-(better|best)$/, 'choice'],
  [/^g2program8-/, 'form'],
  [/^(g3program1-experience|g3program2-(completion|continuation))$/, 'form'],
  [/^g3program4-(presentp|pastp)$/, 'form'],
  [/^g3program5-/, 'choice'],
  [/^g3program7-/, 'form'],
  [/^(g2program3-itisto|g2program5-(whto|svoo)|g2program7-howto|g2program6-asas|g3program1-(asktell|itisfor)|g3program3-|g3program4-indirect|g3program6-)/, 'reorder'],
];
function bestTypeOf(st) {
  const hit = STAGE_BEST_TYPES.find(([re]) => re.test(st.key));
  return hit ? hit[1] : null;
}

// 単元ごとの「これがすべてできれば完璧」な問題形式(はじめの2つは定期テストのおまかせで使う)。
// 参考: 中1〜中3の教科書準拠ワーク(書きかえ・適語補充・並べかえ・英作文)、中1〜中3の問題集(誤文訂正・語を入れる位置)、
// 千葉県の公立入試(語形変化・並べかえ)、入試対策の参考書(同意文書きかえ)
const STAGE_RECIPES = [
  [/^getready$/, ['reorder', 'translate']],
  [/^(program1-aff|g1program4-aff)$/, ['choice', 'fillin', 'error', 'reorder', 'translate']],
  [/^(program1-(neg|q)|g1program4-(neg|q))$/, ['rewrite', 'fillin', 'reorder', 'translate']],
  [/^(program1-where|program2-when|g1program3-whatcan|g1program4-who|g1program6-why|g1program7-how|g1program8-wh|g1program9-whprog)$/, ['choice', 'fillin', 'reorder', 'translate']],
  [/^program2-aff$/, ['reorder', 'error', 'rewrite', 'translate']],
  [/^program2-(neg|q)$/, ['rewrite', 'fillin', 'reorder', 'translate']],
  [/^program2-(imperative|lets)$/, ['fillin', 'reorder', 'translate']],
  [/^program2-plural$/, ['form', 'error', 'translate']],
  [/^g1program3-(aff|neg|q)$/, ['reorder', 'rewrite', 'error', 'translate']],
  [/^g1program5-aff$/, ['form', 'error', 'rewrite', 'translate']],
  [/^g1program5-(neg|q)$/, ['choice', 'rewrite', 'error', 'translate']],
  [/^g1program6-(obj|pos|posp)$/, ['fillin', 'choice', 'error', 'translate']],
  [/^g1program7-(aff|neg|q)$/, ['choice', 'rewrite', 'reorder', 'translate']],
  [/^g1program7-(howmeans|candoq)$/, ['choice', 'reorder', 'translate']],
  [/^(g1program8-(aff|neg|q)|g1program9-prog)$/, ['form', 'rewrite', 'error', 'reorder', 'translate']],
  [/^g1program9-general$/, ['form', 'rewrite', 'error', 'translate']],
  [/^g1program9-be$/, ['choice', 'form', 'rewrite', 'translate']],
  [/^g\dpowerup\d$/, ['reorder', 'translate']],
  [/^g2program1-begoingto$/, ['reorder', 'rewrite', 'paraphrase', 'translate']],
  [/^g2program1-will$/, ['rewrite', 'paraphrase', 'reorder', 'translate']],
  [/^g2program1-(enjoystop|likegerund|subjgerund)$/, ['form', 'error', 'paraphrase', 'translate']],
  [/^g2program2-that$/, ['insert', 'choice', 'reorder', 'translate']],
  [/^g2program2-(when|if)$/, ['choice', 'rewrite', 'reorder', 'translate']],
  [/^g2program3-(noun|adverb|adj)$/, ['reorder', 'fillin', 'translate']],
  [/^g2program3-itisto$/, ['reorder', 'paraphrase', 'translate']],
  [/^g2program4-emotion$/, ['reorder', 'fillin', 'translate']],
  [/^g2program4-(must|haveto)$/, ['paraphrase', 'rewrite', 'fillin', 'translate']],
  [/^(g2program5-whto|g2program7-howto)$/, ['reorder', 'fillin', 'translate']],
  [/^g2program5-svc$/, ['choice', 'reorder', 'translate']],
  [/^g2program5-svoo$/, ['reorder', 'paraphrase', 'translate']],
  [/^g2program6-(comp|sup)$/, ['form', 'choice', 'paraphrase', 'reorder', 'translate']],
  [/^g2program6-asas$/, ['reorder', 'paraphrase', 'translate']],
  [/^g2program7-(better|best)$/, ['choice', 'reorder', 'translate']],
  [/^g2program8-/, ['form', 'paraphrase', 'reorder', 'translate']],
  [/^g3program1-(asktell|itisfor)$/, ['reorder', 'fillin', 'translate']],
  [/^(g3program1-experience|g3program2-(completion|continuation))$/, ['form', 'rewrite', 'fillin', 'translate']],
  [/^g3program2-progressive$/, ['rewrite', 'form', 'translate']],
  [/^g3program3-/, ['reorder', 'fillin', 'translate']],
  [/^g3program4-(presentp|pastp)$/, ['form', 'rewrite', 'reorder', 'translate']],
  [/^g3program4-indirect$/, ['rewrite', 'reorder', 'translate']],
  [/^(g3program5-|g3program6-withpronoun)/, ['choice', 'rewrite', 'reorder', 'translate']],
  [/^g3program6-omitted$/, ['insert', 'reorder', 'translate']],
  [/^g3program7-/, ['form', 'rewrite', 'reorder', 'translate']],
];
function recipeOf(st) {
  const hit = STAGE_RECIPES.find(([re]) => re.test(st.key));
  return hit ? hit[1] : ['reorder', 'choice', 'translate'];
}
