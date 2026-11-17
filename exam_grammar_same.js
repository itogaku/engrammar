// 入試対策の章ごとの「下線部とほぼ同じ意味の語句」: [ ] の部分と入れかえても同じ意味の文になる語句を書く
// (入試対策の参考書の「文の書きかえ」の形式)。文はすべてオリジナル。answers の最初が模範解答、ほかは別解
const EXAM_GRAMMAR_SAME = {
  verbs: [
    { en: 'We [had a good time] at the party last night.', answers: ['enjoyed ourselves'], point: 'have a good time = enjoy oneself「楽しく過ごす」' },
    { en: 'I [went to school on foot] this morning.', answers: ['walked to school'], point: 'go to 〜 on foot = walk to 〜「歩いて行く」' },
    { en: 'She [was absent from] school yesterday.', answers: ["didn't come to", 'did not come to'], point: 'be absent from 〜「〜を休む」= 〜に来なかった' },
  ],
  future: [
    { en: 'You [are able to] swim in this river in summer.', answers: ['can'], point: 'be able to 〜 = can 〜「〜できる」' },
    { en: 'She [has to] get up early tomorrow.', answers: ['must'], point: 'have / has to 〜 = must 〜「〜しなければならない」' },
    { en: '[Will you] open the window?', answers: ['Can you', 'Could you', 'Would you'], point: '依頼の Will you 〜? = Can / Could / Would you 〜?' },
    { en: 'You [don\'t have to] hurry.', answers: ['need not', "needn't"], point: "don't have to 〜 = need not 〜「〜する必要はない」" },
  ],
  imperative: [
    { en: '[You must not] take pictures in this museum.', answers: ["Don't", 'Do not'], point: "You must not 〜. = Don't 〜.「〜してはいけない」" },
    { en: '[Shall we] go to the park after lunch?', answers: ["Why don't we"], point: "Shall we 〜? = Why don't we 〜?「〜しませんか」" },
  ],
  questions: [
    { en: 'Do you know [his age]?', answers: ['how old he is'], point: '間接疑問 how old he is「彼が何歳か」= his age' },
    { en: 'Please tell me [the way to] the station.', answers: ['how to get to', 'how to go to'], point: 'the way to 〜 = how to get to 〜「〜への行き方」' },
    { en: '[Why don\'t we] go shopping this afternoon?', answers: ['Shall we'], point: "Why don't we 〜? = Shall we 〜?「〜しませんか」" },
  ],
  nouns: [
    { en: '[A lot of] children came to the festival.', answers: ['Many'], point: 'a lot of 〜 = many 〜(数えられる名詞)' },
    { en: 'This is [my pen].', answers: ['mine'], point: 'my pen = mine「私のもの」' },
    { en: 'There were [more than] ten students in the room.', answers: ['over'], point: 'more than 〜 = over 〜「〜より多い」' },
  ],
  infinitive: [
    { en: 'I went to the library [because I wanted to] study.', answers: ['to'], point: '目的を表す不定詞 to 〜「〜するために」' },
    { en: 'Please tell me [what I should] buy for her.', answers: ['what to'], point: 'what I should 〜 = what to 〜「何を〜すべきか」' },
    { en: '[Reading] English books is difficult for me.', answers: ['To read'], point: '動名詞 = 名詞的用法の不定詞「〜すること」' },
    { en: 'I [have nothing] to do today.', answers: ["don't have anything", 'do not have anything'], point: 'have nothing to do = don\'t have anything to do「することが何もない」' },
  ],
  gerund: [
    { en: 'My hobby is [to take] pictures.', answers: ['taking'], point: '補語の to 〜 = 〜ing「〜すること」' },
    { en: '[How about] going to the movies?', answers: ['What about'], point: 'How about 〜ing? = What about 〜ing?「〜するのはどう?」' },
    { en: 'She [swims well].', answers: ['is a good swimmer', 'is good at swimming'], point: 'swim well = be a good swimmer = be good at swimming' },
  ],
  participle: [
    { en: 'Look at the boy [who is running] in the park.', answers: ['running'], point: '〈who + be動詞 + 〜ing〉= 現在分詞の後置修飾' },
    { en: 'I have a bag [which was made] in Italy.', answers: ['made'], point: '〈which + be動詞 + 過去分詞〉= 過去分詞の後置修飾' },
    { en: 'The girl [with] long hair is my sister.', answers: ['who has', 'that has'], point: 'with 〜「〜を持った」= who has 〜' },
  ],
  compare: [
    { en: 'Tom is [taller than any other boy] in his class.', answers: ['the tallest boy'], point: '比較級 + than any other 〜 = 最上級「いちばん〜」' },
    { en: 'This box is [not as heavy as] that one.', answers: ['lighter than'], point: 'not as heavy as 〜 = lighter than 〜' },
    { en: 'I like soccer [better than any other sport].', answers: ['the best'], point: 'better than any other 〜 = the best「いちばん好き」' },
  ],
  passive: [
    { en: 'This song [is loved by] many young people.', answers: ['is popular among', 'is popular with'], point: 'be loved by 〜「〜に愛されている」≒ be popular among 〜「〜に人気がある」' },
  ],
  perfect: [
    { en: 'I [have been to] Nara three times.', answers: ['have visited'], point: 'have been to 〜「〜へ行ったことがある」= have visited 〜' },
    { en: 'I [have never been to] Kyoto.', answers: ['have never visited'], point: 'have never been to 〜 = have never visited 〜' },
  ],
  relative: [
    { en: 'This is a picture [painted by Nancy].', answers: ['which Nancy painted', 'that Nancy painted'], point: '過去分詞の後置修飾 = 関係代名詞(目的格)+ 主語 + 動詞' },
    { en: 'Tom is a boy [who has] blue eyes.', answers: ['with'], point: 'who has 〜 = with 〜「〜を持った」' },
    { en: 'The cake [my mother made] was delicious.', answers: ['made by my mother'], point: '〈名詞 + 主語 + 動詞〉= 過去分詞の後置修飾 made by 〜' },
  ],
  subjunctive: [
    { en: '[I\'m sorry I can\'t] play the piano.', answers: ['I wish I could'], point: '残念な事実 = I wish I could 〜「〜できればいいのに」' },
  ],
  svoc: [
    { en: '[The name of this cat is] Tama.', answers: ['We call this cat'], point: 'call A B「A を B と呼ぶ」' },
  ],
  prepconj: [
    { en: 'We couldn\'t play soccer [because of the rain].', answers: ['because it was raining', 'because it rained'], point: 'because of 〜(前置詞)= because + 主語 + 動詞(接続詞)' },
    { en: '[At the age of ten], I started playing the piano.', answers: ['When I was ten'], point: 'at the age of 〜 = when I was 〜「〜歳のとき」' },
  ],
};
if (typeof EXAM_GRAMMAR !== 'undefined') {
  Object.entries(EXAM_GRAMMAR_SAME).forEach(([ch, list]) => {
    if (EXAM_GRAMMAR[ch]) EXAM_GRAMMAR[ch].questions.push(...list.map(d => ({ type: 'same', ...d })));
  });
}
