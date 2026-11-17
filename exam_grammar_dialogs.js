// 入試対策の章ごとの「問答文」: 対話が成り立つように、その章の文法に合う応答を選ぶ(入試対策の参考書の実戦問題の形式)。
// 文はすべてオリジナル。answer は options の番号(0 = ア)
const EXAM_GRAMMAR_DIALOGS = {
  verbs: [
    { lines: [['A', 'Were you at home last night?'], ['B', null]], options: ['Yes, I did.', 'No, I wasn\'t. I was at my uncle\'s house.', 'Yes, you were.', 'No, I don\'t.'], answer: 1, point: 'Were you 〜? には I was / I wasn\'t で答える' },
    { lines: [['A', 'What were you doing when I called you?'], ['B', null]], options: ['I took a bath.', 'I am watching TV.', 'I was cooking dinner.', 'Yes, I was.'], answer: 2, point: '過去進行形でたずねられたら過去進行形で答える' },
    { lines: [['A', 'Did your brother go to the concert?'], ['B', null]], options: ['No, he didn\'t. He was sick.', 'Yes, he goes.', 'No, he wasn\'t.', 'Yes, he did it.'], answer: 0, point: 'Did 〜? には did / didn\'t で答える' },
  ],
  future: [
    { lines: [['A', 'Shall I carry your bag?'], ['B', null]], options: ['Yes, you shall.', 'Yes, please. Thank you.', 'No, I won\'t.', 'Yes, let\'s.'], answer: 1, point: 'Shall I 〜?(〜しましょうか)には Yes, please. / No, thank you.' },
    { lines: [['A', 'Must I finish this report today?'], ['B', null]], options: ['No, you mustn\'t.', 'Yes, you don\'t.', 'No, you don\'t have to. Tomorrow is OK.', 'Yes, I must.'], answer: 2, point: 'Must I 〜? に「その必要はない」と答えるときは No, you don\'t have to.' },
    { lines: [['A', 'Are you going to visit Kyoto this summer?'], ['B', null]], options: ['Yes, I am. I\'ll stay there for a week.', 'Yes, I will go.', 'No, I don\'t.', 'Yes, I went there.'], answer: 0, point: 'Are you going to 〜? には I am / I\'m not で答える' },
  ],
  imperative: [
    { lines: [['A', 'Let\'s play tennis after school.'], ['B', null]], options: ['Yes, I do.', 'Sure, I can\'t.', 'Yes, let\'s. I\'ll bring my racket.', 'No, you don\'t.'], answer: 2, point: 'Let\'s 〜. には Yes, let\'s. / No, let\'s not.' },
    { lines: [['A', 'Don\'t run in the hallway, Ken.'], ['B', null]], options: ['I\'m sorry. I won\'t.', 'Yes, I run.', 'You\'re welcome.', 'No, I didn\'t run.'], answer: 0, point: '注意されたら謝って「もうしません」と答える' },
    { lines: [['A', 'You don\'t like natto, do you?'], ['B', null]], options: ['Yes, I don\'t.', 'No, I don\'t. It smells strange to me.', 'No, I do.', 'Yes, you do.'], answer: 1, point: '付加疑問でも、好きでないなら No, I don\'t.' },
  ],
  questions: [
    { lines: [['A', 'Do you know where Mr. Brown is?'], ['B', null]], options: ['Yes, he is.', 'He is a teacher.', 'Yes. He\'s in the teachers\' room.', 'No, he doesn\'t.'], answer: 2, point: 'Do you know 〜? には Yes / No で答え、場所を続ける' },
    { lines: [['A', 'How long does it take to get to the station?'], ['B', null]], options: ['About ten minutes by bike.', 'It\'s five kilometers.', 'At three o\'clock.', 'By bus.'], answer: 0, point: 'How long does it take 〜? は「時間」を答える' },
    { lines: [['A', 'Which do you like better, cats or dogs?'], ['B', null]], options: ['Yes, I like them.', 'I like dogs better.', 'I like cats very much, too.', 'No, I don\'t.'], answer: 1, point: 'Which 〜, A or B? には Yes / No を使わずに答える' },
  ],
  nouns: [
    { lines: [['A', 'Whose umbrella is this?'], ['B', null]], options: ['It\'s me.', 'It\'s mine. Thank you.', 'Yes, it is.', 'It\'s my.'], answer: 1, point: 'Whose 〜? には mine / yours など「〜のもの」で答える' },
    { lines: [['A', 'Would you like some more tea?'], ['B', null]], options: ['No, thank you. I\'ve had enough.', 'Yes, I would like.', 'Yes, I do.', 'No, you wouldn\'t.'], answer: 0, point: 'Would you like 〜? には Yes, please. / No, thank you.' },
    { lines: [['A', 'How many brothers do you have?'], ['B', null]], options: ['I have a brother.', 'I have two. One lives in Tokyo.', 'Yes, I have.', 'They are fine.'], answer: 1, point: 'How many 〜? には数で答える' },
  ],
  infinitive: [
    { lines: [['A', 'Why did you go to the library?'], ['B', null]], options: ['To return some books.', 'Yes, I did.', 'Because to study.', 'By bike.'], answer: 0, point: 'Why 〜? に「〜するために」と to 〜 で答えることができる' },
    { lines: [['A', 'I\'m hungry. Do you have anything to eat?'], ['B', null]], options: ['Yes. I have some cookies in my bag.', 'No, I don\'t eat.', 'Yes, I\'m hungry, too.', 'I want to eat it.'], answer: 0, point: 'anything to eat「何か食べるもの」' },
    { lines: [['A', 'What do you want to be in the future?'], ['B', null]], options: ['I want to a doctor.', 'I want to be a nurse.', 'Yes, I want.', 'I wanted to be.'], answer: 1, point: 'want to be 〜「〜になりたい」' },
  ],
  gerund: [
    { lines: [['A', 'What do you enjoy doing on weekends?'], ['B', null]], options: ['I enjoy to play soccer.', 'Yes, I enjoy it.', 'I enjoy playing video games with my brother.', 'I enjoyed.'], answer: 2, point: 'enjoy のあとは 〜ing' },
    { lines: [['A', 'Thank you for helping me.'], ['B', null]], options: ['You\'re welcome.', 'Yes, I helped.', 'No, thank you.', 'That\'s right.'], answer: 0, point: 'Thank you for 〜ing. には You\'re welcome.' },
    { lines: [['A', 'How about going shopping tomorrow?'], ['B', null]], options: ['Yes, I went.', 'That sounds good. What time?', 'No, I\'m not.', 'It\'s about shopping.'], answer: 1, point: 'How about 〜ing?(〜するのはどう?)には賛成・反対で答える' },
  ],
  participle: [
    { lines: [['A', 'Who is the boy talking with Ms. Green?'], ['B', null]], options: ['He is talking.', 'Yes, he is.', 'That\'s Tom. He\'s from Canada.', 'He is Ms. Green.'], answer: 2, point: 'the boy talking with 〜「〜と話している男の子」はだれか' },
    { lines: [['A', 'Is this a picture taken in Okinawa?'], ['B', null]], options: ['Yes. I took it last summer.', 'Yes, it takes.', 'No, I don\'t.', 'Yes, I\'m taking it.'], answer: 0, point: 'a picture taken in 〜「〜でとられた写真」' },
    { lines: [['A', 'What language is spoken in Brazil?'], ['B', null]], options: ['They are speaking.', 'Portuguese is.', 'Yes, it is.', 'In Brazil.'], answer: 1, point: '受け身の主語をたずねる疑問文には「〜 is.」で答える' },
  ],
  compare: [
    { lines: [['A', 'Who runs the fastest in your class?'], ['B', null]], options: ['Kenta does.', 'Kenta is.', 'Yes, he does.', 'Kenta runs faster.'], answer: 0, point: 'Who + 一般動詞 〜? には「主語 + does / did.」' },
    { lines: [['A', 'Is your bag bigger than mine?'], ['B', null]], options: ['Yes, it\'s the biggest.', 'No. It\'s as big as yours.', 'No, it isn\'t mine.', 'Yes, I am.'], answer: 1, point: 'as 〜 as …「…と同じくらい〜」' },
    { lines: [['A', 'Which is the most popular sport in Japan?'], ['B', null]], options: ['Yes, it is.', 'I play baseball.', 'I think baseball is.', 'It\'s more popular.'], answer: 2, point: 'Which is 〜? には「〜 is.」で答える' },
  ],
  passive: [
    { lines: [['A', 'When was this temple built?'], ['B', null]], options: ['It built in 1600.', 'It was built about 400 years ago.', 'Yes, it was.', 'They are building it.'], answer: 1, point: 'When was 〜 built? には was built で答える' },
    { lines: [['A', 'Is English taught at your school?'], ['B', null]], options: ['Yes, it is. We have it every day.', 'Yes, it teaches.', 'No, I don\'t.', 'Yes, they do.'], answer: 0, point: 'Is 〜 taught? には it is / it isn\'t で答える' },
    { lines: [['A', 'This cake is delicious. Who made it?'], ['B', null]], options: ['It was made by my sister.', 'It is making.', 'My sister was made.', 'Yes, she did.'], answer: 0, point: '「だれによって」は by 〜' },
  ],
  perfect: [
    { lines: [['A', 'Have you ever been to Hokkaido?'], ['B', null]], options: ['Yes, I went.', 'No, I haven\'t. I want to go there someday.', 'Yes, I do.', 'No, I wasn\'t.'], answer: 1, point: 'Have you ever 〜? には I have / I haven\'t で答える' },
    { lines: [['A', 'How long have you lived in this town?'], ['B', null]], options: ['Since I was five.', 'Two years ago.', 'Yes, I have.', 'Next year.'], answer: 0, point: 'How long 〜? には for 〜 / since 〜 で答える' },
    { lines: [['A', 'Have you finished your homework yet?'], ['B', null]], options: ['Yes, I finished tomorrow.', 'Yes, I did yet.', 'No, not yet. I\'ll do it after dinner.', 'No, I don\'t.'], answer: 2, point: 'No, not yet.「いいえ、まだです」' },
  ],
  relative: [
    { lines: [['A', 'Do you know anyone who can speak Chinese?'], ['B', null]], options: ['Yes. My aunt can. She lived in Beijing.', 'Yes, I can speak.', 'No, I don\'t speak.', 'Yes, it can.'], answer: 0, point: 'anyone who can 〜「〜できるだれか」' },
    { lines: [['A', 'Is this the book you were looking for?'], ['B', null]], options: ['Yes, I was.', 'Yes, it is! Where did you find it?', 'No, I\'m not looking.', 'Yes, you were.'], answer: 1, point: 'the book (that) you were looking for「あなたがさがしていた本」' },
    { lines: [['A', 'What is the name of the dog that is running over there?'], ['B', null]], options: ['It is running.', 'Its name is Pochi.', 'Yes, that is.', 'It\'s over there.'], answer: 1, point: 'the dog that is running 〜 の名前をたずねている' },
  ],
  subjunctive: [
    { lines: [['A', 'If you had a lot of money, what would you do?'], ['B', null]], options: ['I would travel around the world.', 'I will buy a car.', 'I have a lot of money.', 'Yes, I would.'], answer: 0, point: '仮定法の質問には would 〜 で答える' },
    { lines: [['A', 'I can\'t swim.'], ['B', null]], options: ['I wish I can swim.', 'I wish I could swim, too.', 'I wish I swim.', 'If I can swim.'], answer: 1, point: 'I wish I could 〜.「〜できればいいのに」' },
    { lines: [['A', 'It\'s raining. Let\'s stay home.'], ['B', null]], options: ['If it is sunny, we would go.', 'Yes. If it were sunny, we could go to the beach.', 'If it was rain, we stay.', 'No, it doesn\'t.'], answer: 1, point: '仮定法過去: If + 過去形, 主語 + could 〜' },
  ],
  svoc: [
    { lines: [['A', 'What do you call this flower in English?'], ['B', null]], options: ['We call it a sunflower.', 'It calls a sunflower.', 'We call a sunflower it.', 'Yes, we call.'], answer: 0, point: 'call A B「A を B と呼ぶ」' },
    { lines: [['A', 'Why do you look so happy?'], ['B', null]], options: ['Because I look happy.', 'Yes, I\'m happy.', 'This letter from my friend made me happy.', 'I made happy.'], answer: 2, point: 'make A B「A を B にする」' },
    { lines: [['A', 'Could you show me your new bike?'], ['B', null]], options: ['Yes, I could.', 'Sure. It\'s in front of my house.', 'No, you couldn\'t.', 'I show you.'], answer: 1, point: 'Could you 〜?(依頼)には Sure. / Of course.' },
  ],
  prepconj: [
    { lines: [['A', 'When did you start playing the piano?'], ['B', null]], options: ['When I was six years old.', 'For six years.', 'If I am six.', 'Because I like it.'], answer: 0, point: 'When 〜? に接続詞 when で答える' },
    { lines: [['A', 'Shall we go to the park if it\'s sunny tomorrow?'], ['B', null]], options: ['Yes, it will be sunny.', 'Good idea. I\'ll bring some sandwiches.', 'No, I didn\'t.', 'Yes, we shall go.'], answer: 1, point: 'Shall we 〜?(〜しましょうか)には賛成・反対で答える' },
    { lines: [['A', 'I think this movie is boring.'], ['B', null]], options: ['I don\'t think so. It\'s exciting.', 'Yes, I think.', 'I think so, too. It\'s exciting.', 'No, it isn\'t boring, too.'], answer: 0, point: '反対するときは I don\'t think so.' },
  ],
};
if (typeof EXAM_GRAMMAR !== 'undefined') {
  Object.entries(EXAM_GRAMMAR_DIALOGS).forEach(([ch, list]) => {
    if (EXAM_GRAMMAR[ch]) EXAM_GRAMMAR[ch].questions.push(...list.map(d => ({ type: 'dialog', ...d })));
  });
}
