// 入試対策: 千葉県公立高校入試の形式に合わせた読解問題(オリジナル)。
// level: 'chiba7p'(大問7(1) スライドを使った発表) / 'chiba7n'(大問7(2) お知らせ・広告・ウェブページ) / 'chiba9'(大問9 対話文・空所補充)
var EXAM_READING = typeof EXAM_READING !== 'undefined' ? EXAM_READING : [];
EXAM_READING.push(
  // ===================== 大問7(1) 型: スライドを使った発表 =====================
  {
    id: 'c7p-01', level: 'chiba7p', genre: 'presentation', title: '通学方法とヘルメット',
    text: `Hello, everyone. I'm Haruka. Today I'm going to talk about how we come to school. Last month, I asked all thirty students in our class, "How do you come to school?" Please look at Slide 1. The most popular way is walking. Twelve students walk to school. Nine students come by bike. The number of students who come by bus is twice the number of students who come by train.
I also asked the students who come by bike another question: "Do you always wear a helmet?" Only four of the nine students said "yes." I was surprised. ( A ), I went to see a police officer in our town. She told me that a helmet can protect your head in an accident. Please look at Slide 2. It shows what the police officer told me. In our city, there were thirty-eight bike accidents last year, and more than half of them happened on the way to school or on the way home.
I come to school by bike, too. Before, I sometimes didn't wear my helmet because my hair looked bad after wearing it. But now I wear it every day. My hair is not as important as my life.
Riding a bike is fun, and it is good for the environment. But we must ride safely. From tomorrow, let's wear helmets and protect ourselves. Thank you for listening.`,
    table: [['Slide 1: How do you come to school? (30 students)', 'Students'], ['Walk', '12'], ['Bike', '9'], ['Bus', '( X )'], ['Train', '3']],
    notes: ['helmet ヘルメット', 'police officer 警察官', 'protect 守る', 'accident 事故', 'environment 環境'],
    questions: [
      { type: 'choice', q: 'Slide 1 の（ X ）に入る数として最も適切なものを選びなさい。', options: ['3', '6', '9', '12'], answer: 1 },
      { type: 'choice', q: '本文中の（ A ）に入る語句として最も適切なものを選びなさい。', options: ['But', 'For example', 'Of course', 'So'], answer: 3 },
      { type: 'ea', q: 'プレゼンテーションの後、伊藤先生とハルカが次のような会話をしました。（　）に入る最も適切な英語1語を書きなさい。\nMr. Ito: Haruka, how many of the students who come by bike don\'t always wear a helmet?\nHaruka: (　　) students. I want them to wear one every day.', answer: 'Five' },
      { type: 'choice', q: '本文の内容に合うものとして最も適切なものを選びなさい。', options: ['ハルカのクラスでは、半数以上の生徒が自転車で通学している。', 'ハルカは警察官に頼まれて、このスピーチをすることになった。', '自転車で通学している生徒のうち、いつもヘルメットをかぶっている生徒は4人だけだった。', 'ハルカは今でも、ときどきヘルメットをかぶらずに登校している。'], answer: 2 },
    ],
  },
  {
    id: 'c7p-02', level: 'chiba7p', genre: 'presentation', title: '給食の食べ残しを減らそう',
    text: `Hi, I'm Kenta. Do you finish your school lunch every day? I'm a member of the health committee. In September, we checked the food that students left at lunch in our school. Please look at Slide 1. We left vegetables the most. Fish was second. Many students said, "I don't like the taste of vegetables." Some said, "Eating fish takes too much time because of the bones."
So, we started a project in October. Every Friday, we told everyone about the farmers who grew the vegetables for our lunch. We showed pictures of them working in their fields. We also asked the cooks to cut the fish into smaller pieces. Now please look at Slide 2. In September, we left about 15 kilograms of food every day. In October, it was 11 kilograms, and in November, it was only 8 kilograms. ( A ) Our project worked!
Last week, I visited one of the farmers, Mr. Sato. He said, "I'm glad to hear that. My vegetables are like my children." When I heard that, I understood that a lot of people work hard for our lunch.
There are many people in the world who can't get enough food. But in Japan, a lot of food is thrown away every day. I think we can begin with small things. Let's say "Itadakimasu" with thanks and try to finish our lunch. Thank you.`,
    table: [['Slide 1: Food we left (September)', '%'], ['Vegetables', '40'], ['Fish', '25'], ['Rice', '20'], ['Others', '15']],
    notes: ['committee 委員会', 'left leave(残す)の過去形', 'bone 骨', 'cook 調理員', 'kilogram キログラム', 'thrown away throw away(捨てる)の過去分詞'],
    questions: [
      { type: 'choice', q: 'Slide 2 の内容として最も適切なものを選びなさい。', options: ['9月 約8kg → 10月 約11kg → 11月 約15kg', '9月 約15kg → 10月 約8kg → 11月 約11kg', '9月 約15kg → 10月 約11kg → 11月 約8kg', '9月 約11kg → 10月 約15kg → 11月 約8kg'], answer: 2 },
      { type: 'choice', q: '本文中の（ A ）に入る英文として最も適切なものを選びなさい。', options: ['We left more food than before.', 'The amount of food we left became smaller.', 'The cooks stopped making fish.', 'Students didn\'t like the project.'], answer: 1 },
      { type: 'fill', q: 'プレゼンテーションの後、グリーン先生とケンタが次のような会話をしました。（　）に入る最も適切な英語1語を本文中から抜き出して書きなさい。\nMs. Green: Great presentation, Kenta. Why did students leave fish?\nKenta: Because it took a long time to eat because of the (　　).', answer: 'bones' },
      { type: 'choice', q: '本文の内容に合うものとして最も適切なものを選びなさい。', options: ['ケンタたちは、給食の野菜を育てた農家の人たちのことを全校に紹介した。', 'ケンタたちは、毎週金曜日に農家の人を学校に招いた。', '調理員は、給食に魚を出すのをやめた。', 'サトウさんは、自分の野菜を世界の子どもたちに送っている。'], answer: 0 },
    ],
  },
  {
    id: 'c7p-03', level: 'chiba7p', genre: 'presentation', title: '読書とブックカード',
    text: `Hello. I'm Mai. I'm on the library committee. Do you like reading books? We did a survey about reading in our school. Please look at Slide 1. It shows the percentage of students who read no books last month. Ten percent of the first-year students read no books. In the second year, the number is a little higher. And in the third year, the number is three times as high as in the first year. Students read fewer books as they get older.
Why don't they read? Slide 2 shows the reasons. The most common reason is "I'm too busy with club activities and studying." The second is "I use my smartphone in my free time." I understand those reasons. Third-year students are very busy because they have to study for their entrance exams. ( A ), I was interested in the third reason: "I don't know which book to read." I think we can help those students.
So, our committee started "Book Cards." Each student writes a short message about his or her favorite book on a card. We put the cards next to the books in the library. Now there are more than one hundred cards. Last week, a third-year student told me, "I read a book because of a card. It had only one hundred pages, so I finished it in three days."
Books can take us to places we have never visited. They can also give us new ideas. Even ten minutes a day is enough. Please come to the library and read a card. You may find your next favorite book. Thank you.
Slide 2: Why don't you read books?
1st: I'm too busy. (45%)
2nd: I use my smartphone. (35%)
3rd: I don't know which book to read. (20%)`,
    table: [['Slide 1: Students who read no books last month', '%'], ['1st year', '10'], ['2nd year', '18'], ['3rd year', '( X )']],
    notes: ['committee 委員会', 'survey 調査', 'percentage 割合', 'entrance exam 入学試験'],
    questions: [
      { type: 'choice', q: 'Slide 1 の（ X ）に入る数として最も適切なものを選びなさい。', options: ['18', '20', '28', '30'], answer: 3 },
      { type: 'choice', q: '本文中の（ A ）に入る語句として最も適切なものを選びなさい。', options: ['For example', 'So', 'However', 'First'], answer: 2 },
      { type: 'fill', q: 'プレゼンテーションの後、生徒とマイが次のような会話をしました。（　）に入る最も適切な英語1語を本文中から抜き出して書きなさい。\nStudent: Mai, how did the third-year student find a good book?\nMai: He read a (　　) next to the book in the library.', answer: 'card' },
      { type: 'choice', q: '本文の内容に合うものとして最も適切なものを選びなさい。', options: ['先月本を1冊も読まなかった生徒の割合は、2年生のほうが1年生より低い。', '図書委員会は、好きな本についての短いメッセージをカードに書いてもらう活動を始めた。', '本を読まない理由で最も多かったのは、スマートフォンを使っているからというものだった。', 'マイは、毎日少なくとも1時間は本を読むべきだと言っている。'], answer: 1 },
    ],
  },
  {
    id: 'c7p-04', level: 'chiba7p', genre: 'presentation', title: '外国からの旅行者と英語の地図',
    text: `Hello, everyone. I'm Riku. Have you seen many people from other countries in our city recently? Please look at Slide 1. In 2022, about 20,000 people from abroad visited our city. Two years later, the number was more than twice as large. I wanted to know why they come here, so I talked with some visitors at the station with my friend.
Please look at Slide 2. It shows what the visitors enjoyed the most. Japanese food was the most popular. Many people said that the fresh fish here was delicious. Old temples came second, and the beautiful sea came third. Only a few visitors talked about shopping.
But they also told us about a problem. A woman from Canada said, "Some signs are only in Japanese, so it's hard to find the bus stops." I was surprised because I never thought about ( A ). After that, my friend and I made an English map of the area around the station. We gave it to the tourist information center, and now visitors can get it there for free.
Last Sunday, I saw a family with our map. They found their bus stop easily. I felt very happy. I learned that even students like us can do something for visitors. I want to study English harder and help more people in the future. Thank you.`,
    table: [['Slide 1: Year', 'Visitors from abroad'], ['2022', 'about 20,000'], ['2023', 'about 32,000'], ['2024', 'about 45,000']],
    notes: ['abroad 海外', 'sign 標識・案内板', 'tourist information center 観光案内所', 'for free 無料で'],
    questions: [
      { type: 'choice', q: 'Slide 2 の内容として最も適切なものを選びなさい。', options: ['1位 日本の食べ物　2位 古い寺　3位 美しい海', '1位 日本の食べ物　2位 美しい海　3位 買い物', '1位 古い寺　2位 日本の食べ物　3位 美しい海', '1位 買い物　2位 日本の食べ物　3位 古い寺'], answer: 0 },
      { type: 'choice', q: '本文中の（ A ）に入る語句として最も適切なものを選びなさい。', options: ['the delicious fish in our city', 'the old temples near the station', 'the problem for people who can\'t read Japanese', 'the price of the bus tickets'], answer: 2 },
      { type: 'fill', q: 'プレゼンテーションの後、先生とリクが次のような会話をしました。（　）に入る最も適切な英語1語を本文中から抜き出して書きなさい。\nTeacher: Where can visitors get your map, Riku?\nRiku: At the tourist information (　　). They don\'t have to pay for it.', answer: 'center' },
      { type: 'choice', q: '本文の内容に合うものとして最も適切なものを選びなさい。', options: ['リクは一人で駅に行き、旅行者に話を聞いた。', 'リクたちが作った地図は、観光案内所で売られている。', '2024年に市を訪れた外国人の数は、2022年の2倍より少なかった。', 'カナダから来た女性は、バス停を見つけるのが難しいと言った。'], answer: 3 },
    ],
  },
  {
    id: 'c7p-05', level: 'chiba7p', genre: 'presentation', title: '睡眠時間とスマートフォン',
    text: `Good morning, everyone. I'm Yui. Do you often feel sleepy in class? I do. So I asked the thirty-two students in our class how long they sleep on weekdays. Please look at Slide 1. Only four students sleep for eight hours or more. The largest group sleeps for six to seven hours.
According to a doctor's website, junior high school students need eight to ten hours of sleep every night. That means most of us don't sleep enough. Then why do we go to bed so late? Slide 2 shows the answers. Many students said they watch videos or play games on their phones in bed.
I was one of them. I usually used my phone until midnight. In the morning, I felt tired, and I couldn't think well in class. ( A ). So I decided to try something new for two weeks. I left my phone in the living room at ten o'clock every night. For the first few days, it was hard. But soon I started to fall asleep more quickly. Now I sleep for about eight hours, and I don't feel sleepy in class.
Sleep is important for our bodies and our brains. When we sleep well, we can remember things better. Why don't you put your phone away an hour before you go to bed? Thank you for listening.
Slide 2: Why do you go to bed late?
I watch videos on my phone. (14 students)
I play games. (9 students)
I study. (6 students)
Other reasons (3 students)`,
    table: [['Slide 1: Sleeping time on weekdays (32 students)', 'Students'], ['less than 6 hours', '5'], ['6 to 7 hours', '( X )'], ['7 to 8 hours', '11'], ['8 hours or more', '4']],
    notes: ['sleepy 眠い', 'according to 〜によると', 'midnight 夜の12時', 'fall asleep 寝入る', 'brain 脳', 'put 〜 away 〜を片付ける'],
    questions: [
      { type: 'choice', q: 'Slide 1 の（ X ）に入る数として最も適切なものを選びなさい。', options: ['8', '10', '12', '14'], answer: 2 },
      { type: 'choice', q: '本文中の（ A ）に入る英文として最も適切なものを選びなさい。', options: ['I wanted to change that', 'I didn\'t want to change anything', 'My parents gave me a new phone', 'I enjoyed staying up late'], answer: 0 },
      { type: 'ea', q: 'プレゼンテーションの後、スミス先生とユイが次のような会話をしました。（　）に入る最も適切な英語1語を書きなさい。\nMs. Smith: Yui, why do you think most of us don\'t sleep enough?\nYui: Because junior high school students need eight to ten hours of sleep, but most of us sleep (　　) than that.', answer: 'less' },
      { type: 'choice', q: '本文の内容に合うものとして最も適切なものを選びなさい。', options: ['ユイのクラスでは、8時間以上寝ている生徒が最も多い。', 'ユイは2週間、夜10時にスマートフォンを居間に置くことを試した。', '寝るのが遅くなる理由として、勉強をあげた生徒が最も多かった。', 'ユイは、寝る直前までスマートフォンを使ってもよいと言っている。'], answer: 1 },
    ],
  },
  {
    id: 'c7p-06', level: 'chiba7p', genre: 'presentation', title: '海岸清掃とプラスチック',
    text: `Hello. I'm Sota. Last summer, I joined a beach cleaning event in my town three times. Many people came with their families, and we cleaned the beach for two hours each time. Please look at Slide 1. It shows the kinds of trash we found. Plastic bottles were the most. The second was something people use to carry things when they go shopping. Cans were third.
I was surprised to find so much plastic. A staff member told me that plastic doesn't go back to nature. It breaks into very small pieces, and fish sometimes eat them. Then we may eat those fish. So plastic trash on the beach is a problem ( A ) for sea animals but also for us.
Slide 2 shows the number of people who joined the event. In June, only twelve people came. But in August, more than forty people joined. Why? Some high school students put pictures of the event on the Internet, and many young people saw them.
After the event, I changed some of my habits. Now I always carry my own bottle, and I take my own bag to the supermarket. These are small things, but if everyone does them, there will be less trash on our beaches. The next event will be held on October 5. Why don't you come with me? Thank you.
Slide 2: People who joined the beach cleaning
June: 12 people
July: 23 people
August: 43 people`,
    table: [['Slide 1: Trash we found', '%'], ['Plastic bottles', '38'], ['( X )', '24'], ['Cans', '16'], ['Fishing nets and lines', '12'], ['Others', '10']],
    notes: ['trash ごみ', 'plastic プラスチック', 'staff member スタッフ', 'nature 自然', 'habit 習慣', 'be held 開催される', 'fishing net 漁網'],
    questions: [
      { type: 'choice', q: 'Slide 1 の（ X ）に入るものとして最も適切なものを選びなさい。', options: ['Paper cups', 'Glass bottles', 'Shoes', 'Plastic bags'], answer: 3 },
      { type: 'choice', q: '本文中の（ A ）に入る語句として最も適切なものを選びなさい。', options: ['both', 'not only', 'either', 'as well as'], answer: 1 },
      { type: 'fill', q: 'プレゼンテーションの後、先生とソウタが次のような会話をしました。（　）に入る最も適切な英語1語を本文中から抜き出して書きなさい。\nTeacher: Sota, what do you take with you when you go to the supermarket?\nSota: I take my own (　　). Then I don\'t need plastic ones.', answer: 'bag' },
      { type: 'choice', q: '本文の内容に合うものとして最も適切なものを選びなさい。', options: ['ソウタは、去年の夏に海岸清掃に1回だけ参加した。', '高校生たちがポスターを作り、駅にはってくれた。', '8月の参加者の数は、6月の参加者の数の3倍以上だった。', '次の海岸清掃は8月に行われる。'], answer: 2 },
    ],
  },
  {
    id: 'c7p-07', level: 'chiba7p', genre: 'presentation', title: '高齢者のためのスマートフォン教室',
    text: `Hello, everyone. I'm Nana. My grandmother lives alone in Hokkaido. Last year, she bought a smartphone, but she didn't know how to use it well. When I visited her, I taught her how to make video calls. Now we talk and see each other's faces every Sunday.
Then I wondered, "Do other elderly people in our town have the same problem?" So I did a survey with my classmates. We asked sixty elderly people at the community center some questions. Please look at Slide 1. Forty-five of them have smartphones. But only one third of them said, "I can use it well."
We also asked them what they want to learn. Video calls were the most popular. Taking pictures came next.
So, we decided to hold a smartphone class at the community center. Please look at Slide 2. This is a picture of our first class. Ten elderly people came, and each of us helped one or two people. At first, I was ( A ) because I didn't know how to explain things in easy words. But one man smiled and said, "Take your time. You are a good teacher." His words made me happy.
Through this activity, I learned two things. First, many elderly people want to use new technology. Second, young people can learn a lot from elderly people, too. The man told me many stories about our town fifty years ago. We are going to have this class every month. Thank you.`,
    table: [['Slide 1: Survey (60 elderly people)', 'People'], ['have a smartphone', '45'], ['can use it well', '( X )'], ['want to learn video calls', '22'], ['want to learn taking pictures', '14']],
    notes: ['video call ビデオ通話', 'elderly 年配の', 'survey 調査', 'community center 公民館', 'one third 3分の1', 'hold 開く', 'explain 説明する', 'technology 技術'],
    questions: [
      { type: 'choice', q: 'Slide 1 の（ X ）に入る数として最も適切なものを選びなさい。', options: ['10', '15', '20', '30'], answer: 1 },
      { type: 'choice', q: '本文中の（ A ）に入る語として最も適切なものを選びなさい。', options: ['bored', 'angry', 'sleepy', 'nervous'], answer: 3 },
      { type: 'fill', q: 'プレゼンテーションの後、先生とナナが次のような会話をしました。（　）に入る最も適切な英語1語を本文中から抜き出して書きなさい。\nTeacher: Nana, how often are you going to have the smartphone class?\nNana: Every (　　). We want to help more elderly people.', answer: 'month' },
      { type: 'choice', q: '本文の内容に合うものとして最も適切なものを選びなさい。', options: ['ナナたちは、公民館で60人の高齢者に質問をした。', 'ナナの祖母は、ナナからスマートフォンをもらった。', '高齢者が最も学びたいことは、写真のとり方だった。', '最初の教室には、20人の高齢者が来た。'], answer: 0 },
    ],
  },
  {
    id: 'c7p-08', level: 'chiba7p', genre: 'presentation', title: '米作り体験',
    text: `Hello. I'm Takumi. This year, our class grew rice in a small field near our school. A farmer, Mr. Ito, helped us. Please look at Slide 1. It shows what we did. In May, we planted rice. It was hard to walk in the muddy field, but it was fun. In summer, we pulled out weeds many times. It was very hot, and I wanted to stop. In September, we finally cut the rice. We got about 60 kilograms of rice.
Mr. Ito told us something surprising. Please look at Slide 2. In 1965, one person in Japan ate about 118 kilograms of rice in a year. But now, people eat less than half of that. Mr. Ito said, "Many young people eat bread for breakfast. ( A ), many rice farmers are getting old, and there are not many young people who want to become farmers."
I like bread, too. But after growing rice, I began to think about rice more. One small bowl of rice has about 3,000 grains of rice. Each grain needs many days of hard work. Now I eat rice for breakfast three days a week.
In November, we cooked our rice and ate it with our families. It was the most delicious rice I have ever eaten. I hope more people will eat rice and support the farmers in Japan. Thank you.`,
    table: [['Slide 1: Month', 'What we did'], ['May', 'planted rice'], ['June – August', 'pulled out weeds'], ['September', 'cut the rice (about 60 kg)'], ['November', 'cooked and ate the rice with our families']],
    notes: ['plant 植える', 'muddy どろどろの', 'pull out 引き抜く', 'weed 雑草', 'grain 粒', 'support 支える'],
    questions: [
      { type: 'choice', q: 'Slide 2 の内容として最も適切なものを選びなさい。', options: ['1965年 約50kg → 現在 約118kg', '1965年 約118kg → 現在 約70kg', '1965年 約60kg → 現在 約30kg', '1965年 約118kg → 現在 約50kg'], answer: 3 },
      { type: 'choice', q: '本文中の（ A ）に入る語句として最も適切なものを選びなさい。', options: ['Also', 'For example', 'But', 'Instead'], answer: 0 },
      { type: 'fill', q: 'プレゼンテーションの後、クラスメートとタクミが次のような会話をしました。（　）に入る最も適切な英語1語を本文中から抜き出して書きなさい。\nClassmate: Takumi, how often do you eat rice for breakfast now?\nTakumi: I eat it (　　) days a week.', answer: 'three' },
      { type: 'choice', q: '本文の内容に合うものとして最も適切なものを選びなさい。', options: ['タクミたちは、5月に稲刈りをした。', 'イトウさんは、米作りをしたい若者が増えていると言った。', 'タクミたちは、約60キログラムの米を収穫した。', 'タクミは今、毎朝ご飯を食べている。'], answer: 2 },
    ],
  },

  {
    id: 'c7p-09', level: 'chiba7p', genre: 'presentation', title: '町を訪れる観光客',
    text: `Hello, everyone. I'm Sora. Do you know how many people visit our town, Aoba? Please look at Slide 1. It shows the number of visitors from 2005 to 2020. From 2005 to 2015, the number didn't change much. It was about 20,000 every year. But in 2015, a new station opened near the old castle, and after that, the number suddenly went up. In 2020, about 60,000 people visited our town.
Many visitors come to see the castle and eat soba. However, we found a problem. Look at Slide 2. It shows where the visitors go. Most of them visit only the castle and go home on the ( A ) day. Only a few people stay at hotels in our town, and the shops on the old street are not busy.
So my group made a walking map in English and Japanese. It shows the old street, a soba shop, and a park with a beautiful view of the river. We hope visitors will enjoy walking around and stay longer. We want more people to know the good points of Aoba. Thank you.`,
    table: [['Slide 2: Where do visitors go?', '%'], ['Castle only', '70'], ['Castle and old street', '20'], ['Stay at a hotel in Aoba', '10']],
    notes: ['visitor 訪問者', 'castle 城', 'suddenly 急に', 'view 景色'],
    questions: [
      { type: 'choice', q: '本文の内容に合うように、Slide 1 のグラフとして最も適当なものを選びなさい。', options: ['ア', 'イ', 'ウ', 'エ'], answer: 3,
        graphs: [
          { type: 'line', title: 'Visitors to Aoba', unit: '千人', labels: ['2005', '2010', '2015', '2020'], series: [{ name: '', values: [20, 30, 40, 60] }] },
          { type: 'line', title: 'Visitors to Aoba', unit: '千人', labels: ['2005', '2010', '2015', '2020'], series: [{ name: '', values: [60, 40, 30, 20] }] },
          { type: 'line', title: 'Visitors to Aoba', unit: '千人', labels: ['2005', '2010', '2015', '2020'], series: [{ name: '', values: [20, 40, 60, 40] }] },
          { type: 'line', title: 'Visitors to Aoba', unit: '千人', labels: ['2005', '2010', '2015', '2020'], series: [{ name: '', values: [20, 21, 20, 60] }] },
        ] },
      { type: 'fill', q: '本文中の（ A ）に入る最も適当な英単語1語を書きなさい。', answer: 'same' },
      { type: 'choice', q: '発表のあと、先生とソラが話しています。（　）に入る最も適当なものを選びなさい。\nTeacher: What percent of the visitors stay at hotels in Aoba?\nSora: Only (　　) percent.', options: ['ten', 'twenty', 'seventy', 'ninety'], answer: 0 },
      { type: 'choice', q: '本文の内容に合っている英文として最も適当なものを選びなさい。', options: ['Aoba had about 60,000 visitors every year from 2005 to 2015.', 'A new station near the castle opened in 2015.', 'Most visitors stay at hotels and visit the old street.', "Sora's group made a walking map only in English."], answer: 1 },
    ],
  },
  {
    id: 'c7p-10', level: 'chiba7p', genre: 'presentation', title: '朝ごはんを食べていますか',
    text: `Good morning, everyone. I'm Riku from the health committee. Do you eat breakfast every day? Last month, we asked all the students in our school this question. Please look at Slide 1. It shows the percent of students who eat breakfast every day in each grade. In the first grade, 90% of the students eat breakfast every day. But the number gets ( A ) in the higher grades. In the third grade, only 75% of the students do.
Why don't some students eat breakfast? Look at Slide 2. The most common reason is "I don't have time." The second reason is "I'm not hungry in the morning." Many students in the third grade study until late at night, so they get up late.
Breakfast gives us energy for the morning. When we skip it, we can't think well in class. So, here is our idea. Go to bed thirty minutes earlier. Then you can get up earlier and have time for breakfast. Even a banana or a glass of milk is OK. Let's start tomorrow. Thank you.`,
    table: [["Slide 2: Why don't you eat breakfast?", 'Students'], ["I don't have time.", '38'], ["I'm not hungry.", '25'], ['Others', '12']],
    notes: ['health committee 保健委員会', 'grade 学年', 'reason 理由', 'energy エネルギー', 'skip 抜く'],
    questions: [
      { type: 'choice', q: '本文の内容に合うように、Slide 1 のグラフとして最も適当なものを選びなさい。', options: ['ア', 'イ', 'ウ', 'エ'], answer: 2,
        graphs: [
          { type: 'bar', title: '朝食を毎日食べる生徒', unit: '%', labels: ['1年', '2年', '3年'], series: [{ name: '', values: [75, 82, 90] }] },
          { type: 'bar', title: '朝食を毎日食べる生徒', unit: '%', labels: ['1年', '2年', '3年'], series: [{ name: '', values: [90, 75, 82] }] },
          { type: 'bar', title: '朝食を毎日食べる生徒', unit: '%', labels: ['1年', '2年', '3年'], series: [{ name: '', values: [90, 82, 75] }] },
          { type: 'bar', title: '朝食を毎日食べる生徒', unit: '%', labels: ['1年', '2年', '3年'], series: [{ name: '', values: [82, 90, 75] }] },
        ] },
      { type: 'choice', q: '本文中の（ A ）に入る最も適当な語を選びなさい。', options: ['higher', 'lower', 'bigger', 'longer'], answer: 1 },
      { type: 'ea', q: '発表のあと、先生とリクが話しています。（　）に入る最も適当な英単語1語を書きなさい。\nTeacher: What is your idea for having time for breakfast?\nRiku: We should go to bed thirty minutes (　　).', answer: 'earlier' },
      { type: 'choice', q: '本文の内容に合うものとして最も適当なものを選びなさい。', options: ['リクの学校では、学年が上がるほど朝食を毎日食べる生徒が増えている。', '朝食を食べない理由で最も多いのは「おなかがすいていない」である。', 'リクは、時間がなければバナナや牛乳だけでもよいと言っている。', 'リクは、3年生は朝早く起きて勉強していると言っている。'], answer: 2 },
    ],
  },
  // ===================== 大問7(2) 型: お知らせ・広告・ウェブページ =====================
  {
    id: 'c7p-11', level: 'chiba7p', genre: 'presentation', title: '部活動の人数',
    text: `Hello, everyone. I'm Takumi. Our school has many clubs, and I wanted to know which clubs are popular. So I checked the number of members in each club. Please look at Slide 1. Sports clubs have more members than culture clubs. About 60% of the students are in sports clubs.
Now, look at Slide 2. It shows the four biggest clubs in our school. The soccer club has the most members. It has 32 members. The brass band is the second. It has seven fewer members than the soccer club. The tennis club has 18 members, and the art club has 10 members. The art club is the smallest of the four, but its members won a prize at a city contest last year.
I'm in the art club. We have only ten members, but we enjoy drawing pictures together. Some people think a small club is not fun. But in a small club, everyone can talk a lot and help each other. Big clubs and small clubs are ( A ), but every club has its good points. Thank you.`,
    table: [['Slide 2: The four biggest clubs', 'Members'], ['ⓐ', '32'], ['ⓑ', '25'], ['ⓒ', '18'], ['ⓓ', '10']],
    notes: ['member 部員', 'culture club 文化部', 'brass band 吹奏楽部', 'prize 賞'],
    questions: [
      { type: 'choice', q: '本文の内容に合うように、Slide 2 の ⓐ〜ⓓ に入るものの組み合わせとして最も適当なものを選びなさい。', options: ['ア', 'イ', 'ウ', 'エ'], answer: 1,
        combo: { cols: ['ⓐ', 'ⓑ', 'ⓒ', 'ⓓ'], rows: [['Soccer', 'Tennis', 'Brass band', 'Art'], ['Soccer', 'Brass band', 'Tennis', 'Art'], ['Brass band', 'Soccer', 'Art', 'Tennis'], ['Soccer', 'Brass band', 'Art', 'Tennis']] } },
      { type: 'choice', q: '本文中の（ A ）に入る最も適当な語を選びなさい。', options: ['different', 'same', 'popular', 'famous'], answer: 0 },
      { type: 'ea', q: '発表のあと、先生とタクミが話しています。（　）に入る最も適当な英語1語を書きなさい。\nTeacher: How many members does the brass band have?\nTakumi: It has (　　) members.', answer: 'twenty-five（25）' },
      { type: 'choice', q: '本文の内容に合うものとして最も適当なものを選びなさい。', options: ['タクミの学校では、文化部に入っている生徒のほうが多い。', '美術部の部員は、去年市のコンテストで賞をとった。', 'タクミはテニス部に入っている。', 'タクミは、小さい部活動は楽しくないと考えている。'], answer: 1 },
    ],
  },
  {
    id: 'c7p-12', level: 'chiba7p', genre: 'presentation', title: '人気の給食メニュー',
    text: `Hi, everyone. I'm Nanami from the school lunch committee. Last month, we asked 120 students, "What is your favorite school lunch?" Please look at the slide. Curry and rice is the most popular. Forty students chose it. Fried chicken is the second. It got ten votes fewer than curry and rice. Spaghetti got half as many votes as curry and rice. Fish burgers got the fewest votes of the four, but the cooks told us they are healthy and delicious.
We also asked, "Why do you like it?" Many students said, "Because it reminds me of my mother's cooking." Others said, "Because I can't eat it at home."
Next month, we will have a special lunch day. On that day, the cooks will make the most popular menu. We hope everyone will enjoy it and finish all of their lunch. Let's also say "thank you" to the cooks ( A ) they work hard for us every day.`,
    table: [['Our Favorite School Lunch (120 students)', 'Students'], ['ⓐ', '40'], ['ⓑ', '30'], ['ⓒ', '20'], ['ⓓ', '12'], ['Others', '18']],
    notes: ['committee 委員会', 'vote 票', 'cook 調理員', 'remind 〜 of … 〜に…を思い出させる'],
    questions: [
      { type: 'choice', q: '本文の内容に合うように、スライドの ⓐ〜ⓓ に入るものの組み合わせとして最も適当なものを選びなさい。', options: ['ア', 'イ', 'ウ', 'エ'], answer: 2,
        combo: { cols: ['ⓐ', 'ⓑ', 'ⓒ', 'ⓓ'], rows: [['Curry and rice', 'Spaghetti', 'Fried chicken', 'Fish burgers'], ['Curry and rice', 'Fried chicken', 'Fish burgers', 'Spaghetti'], ['Curry and rice', 'Fried chicken', 'Spaghetti', 'Fish burgers'], ['Fried chicken', 'Curry and rice', 'Fish burgers', 'Spaghetti']] } },
      { type: 'choice', q: '本文中の（ A ）に入る最も適当な語を選びなさい。', options: ['because', 'but', 'if', 'so'], answer: 0 },
      { type: 'choice', q: '発表のあと、先生とナナミが話しています。（　）に入る最も適当なものを選びなさい。\nTeacher: What will the cooks make on the special lunch day?\nNanami: They will make (　　).', options: ['curry and rice', 'fried chicken', 'spaghetti', 'fish burgers'], answer: 0 },
      { type: 'choice', q: '本文の内容に合っている英文として最も適当なものを選びなさい。', options: ['Nanami asked all the students in the school about school lunch.', "Some students like their favorite lunch because they can't eat it at home.", 'Fish burgers got more votes than spaghetti.', 'The special lunch day will be held this month.'], answer: 1 },
    ],
  },
  {
    id: 'c7n-01', level: 'chiba7n', genre: 'notice', title: 'カフェのオープン広告',
    text: `Green Leaf Cafe
Grand Opening on Saturday, April 5!
Open: 8:00 a.m. – 6:00 p.m. (Closed on Wednesdays)
Address: 2-3 Sakura Street (5 minutes from Minami Station on foot)
Opening Week Special (April 5 – April 11)
・Every customer gets a free cookie.
・Bring this paper, and you can get 100 yen off any drink.
・Morning Set (until 10:30 a.m.): toast, salad and a drink
Notes
・Children under 6 can have a glass of orange juice for free.
・You can't use this paper with other discount tickets.
・Please don't bring food from outside.`,
    table: [['Menu', 'Price'], ['Coffee', '350 yen'], ['Tea', '300 yen'], ['Orange juice', '250 yen'], ['Cheesecake', '400 yen'], ['Morning Set', '600 yen']],
    notes: ['grand opening 新規開店', 'customer 客', '100 yen off 100円引き', 'discount 割引'],
    questions: [
      { type: 'fill', q: '広告の内容に合うように、次の英文の（　）に入る最も適切な英語1語を広告の中から抜き出して書きなさい。\nYou can\'t go to the cafe on (　　) because it is closed.', answer: 'Wednesdays' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: Let\'s go to Green Leaf Cafe on April 10. We can use this paper. I want a coffee and a cheesecake.\nB: OK. Then you\'ll pay (　　) yen.', options: ['400', '550', '650', '750'], answer: 2 },
      { type: 'choice', q: '広告の内容に合うものとして最も適切なものを選びなさい。', options: ['このカフェは、駅から歩いて10分かかる。', '午前10時30分以降も、モーニングセットを注文できる。', '外から持ってきた食べ物を店内で食べてもよい。', '5歳の子どもは、オレンジジュースを無料で飲むことができる。'], answer: 3 },
    ],
  },
  {
    id: 'c7n-02', level: 'chiba7n', genre: 'web', title: '海辺の観光列車ツアー',
    text: `Ocean Line – Seaside Train Tour
Enjoy the beautiful sea from the train window!
Tour Days: Saturdays and Sundays in July and August
The train leaves Chuo Station and comes back to Chuo Station.
Tour Plans
・Plan A: Sunrise Train – Watch the sunrise over the sea. Breakfast is included.
・Plan B: Lunch Train – Enjoy fresh fish for lunch. You can get off at Kaigan Station and walk on the beach for 30 minutes.
・Plan C: Star Train – See the stars from the train. The lights in the train are turned off for 15 minutes.
Tickets
・The prices in the table are for people 13 years old and over.
・Children (6–12 years old) pay half price. Children under 6 are free.
・You must buy tickets on this website at least three days before the tour.
・If it rains, Plan C is canceled.`,
    table: [['Plan', 'Time', 'Price'], ['A', '5:00 a.m. – 7:30 a.m.', '4,000 yen'], ['B', '11:00 a.m. – 2:30 p.m.', '6,000 yen'], ['C', '7:30 p.m. – 9:30 p.m.', '3,000 yen']],
    notes: ['sunrise 日の出', 'include 含む', 'get off 降りる', 'half price 半額', 'cancel 中止する'],
    questions: [
      { type: 'fill', q: 'ウェブページの内容に合うように、次の英文の（　）に入る最も適切な英語1語をウェブページの中から抜き出して書きなさい。\nYou have to buy tickets at least (　　) days before the tour.', answer: 'three' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: I\'m fourteen. I want to go on the train tour with my parents and my sister. She is eight. We want to see the sea in the morning and have breakfast on the train.\nB: Then your family will pay (　　) yen for the tickets.', options: ['12,000', '14,000', '16,000', '10,000'], answer: 1 },
      { type: 'choice', q: 'ウェブページの内容に合うものとして最も適切なものを選びなさい。', options: ['プランBでは、海岸駅で降りて30分間浜辺を歩くことができる。', 'ツアーは7月と8月の毎日行われる。', '雨の日には、すべてのプランが中止になる。', 'チケットはツアー当日に中央駅で買うことができる。'], answer: 0 },
    ],
  },
  {
    id: 'c7n-03', level: 'chiba7n', genre: 'notice', title: '町の夏祭りのお知らせ',
    text: `Minato Town Summer Festival
Date: Saturday, August 2 and Sunday, August 3
Place: Minato Park
Time: 3:00 p.m. – 9:00 p.m.
Events
・Fireworks: Sunday only, 8:00 p.m. – 8:30 p.m.
・Bon Dance: both days, 6:00 p.m. – 7:30 p.m. Anyone can join. We lend yukata for free to the first 30 people each day. (Please come to the information tent by 5:00 p.m.)
・Food stands: more than 20 stands
Rules
・There is no parking at the park. Please come by train or bus.
・Please take your trash home.
・If it rains on Saturday, the events on Saturday will move to Sunday. If it rains on Sunday, the fireworks will be held on Monday, August 4.`,
    table: [['Time', 'Stage (Saturday)', 'Stage (Sunday)'], ['3:30 p.m.', 'Minato Junior High Brass Band', 'Kids Dance Show'], ['4:30 p.m.', 'Taiko Drums', 'Minato Junior High Brass Band'], ['5:30 p.m.', 'Magic Show', 'Karaoke Contest']],
    notes: ['fireworks 花火', 'lend 貸す', 'stand 屋台', 'parking 駐車場', 'brass band 吹奏楽部'],
    questions: [
      { type: 'fill', q: 'お知らせの内容に合うように、次の英文の（　）に入る最も適切な英語1語をお知らせの中から抜き出して書きなさい。\nIf you want to wear a yukata for free, you need to go to the information (　　) by 5:00 p.m.', answer: 'tent' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: I want to listen to my sister\'s brass band, and I also want to see the fireworks on the same day.\nB: Then let\'s go to the park on (　　).', options: ['Saturday at 3:00 p.m.', 'Saturday at 5:00 p.m.', 'Sunday at 5:00 p.m.', 'Sunday at 4:00 p.m.'], answer: 3 },
      { type: 'choice', q: 'お知らせの内容に合うものとして最も適切なものを選びなさい。', options: ['花火は土曜日と日曜日の両方に見ることができる。', '車で来る人は、公園の駐車場を使うことができる。', '日曜日に雨が降ったら、花火は月曜日に行われる。', '盆踊りに参加できるのは、浴衣を着ている人だけだ。'], answer: 2 },
    ],
  },
  {
    id: 'c7n-04', level: 'chiba7n', genre: 'notice', title: 'スポーツセンターの夏のレッスン',
    text: `Sakura City Sports Center
Summer Lessons for Junior High School Students
Period: July 22 – August 23
Each lesson is 90 minutes long.
How to Apply
・Send an e-mail to the sports center by July 15.
・Write your name, school, grade and the lesson you want to take.
・If more than 20 students apply for one lesson, we will choose by lottery.
Things to Bring
・Indoor shoes, a towel and something to drink
・For swimming lessons: a swimsuit and a swimming cap
Notes
・You can take up to two kinds of lessons.
・You can rent a tennis racket for 200 yen.`,
    table: [['Lesson', 'Days', 'Start time', 'Fee (for all lessons)'], ['Tennis', 'Monday & Wednesday', '9:00 a.m.', '3,000 yen'], ['Swimming', 'Tuesday & Thursday', '1:00 p.m.', '2,500 yen'], ['Badminton', 'Wednesday & Friday', '2:00 p.m.', '2,000 yen'], ['Table tennis', 'Saturday', '10:00 a.m.', '1,500 yen']],
    notes: ['period 期間', 'apply 申し込む', 'lottery 抽選', 'indoor shoes 室内ばき', 'up to 〜まで', 'rent 借りる', 'fee 料金'],
    questions: [
      { type: 'fill', q: 'お知らせの内容に合うように、次の英文の（　）に入る最も適切な英語1語をお知らせの中から抜き出して書きなさい。\nIf more than 20 students apply for the same lesson, the sports center will choose students by (　　).', answer: 'lottery' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: I want to take two kinds of lessons, but I have club activities every afternoon from Monday to Friday.\nB: Then you should take tennis and (　　).', options: ['swimming', 'badminton', 'table tennis', 'basketball'], answer: 2 },
      { type: 'choice', q: 'お知らせの内容に合うものとして最も適切なものを選びなさい。', options: ['レッスンを申し込むには、7月15日までに電話をする必要がある。', 'テニスラケットを持っていない人は、200円で借りることができる。', '1人3種類までレッスンを受けることができる。', '水泳のレッスンは、週に3回行われる。'], answer: 1 },
    ],
  },
  {
    id: 'c7n-05', level: 'chiba7n', genre: 'notice', title: '夜の水族館イベント',
    text: `Blue Ocean Aquarium – Night Aquarium
Have you ever seen fish at night?
Dates: Every Friday and Saturday in August
Time: 6:00 p.m. – 9:00 p.m. (Last entry: 8:30 p.m.)
Special Programs
・Night Tour with Staff (6:30 p.m. / 7:30 p.m., 30 minutes): Walk through the dark aquarium with a light and learn how fish sleep. Only 15 people can join each tour. Please sign up at the entrance.
・Dolphin Night Show (7:15 p.m., 30 minutes)
・Jellyfish Room: beautiful lights all night
Rules
・Don't use a flash when you take pictures.
・Elementary school students must come with an adult.
・You can't come back in after you leave.`,
    table: [['Ticket', 'Daytime', 'Night'], ['Adults', '2,000 yen', '1,500 yen'], ['Junior high and high school students', '1,200 yen', '1,000 yen'], ['Elementary school students', '800 yen', '500 yen']],
    notes: ['aquarium 水族館', 'entry 入場', 'sign up 申し込む', 'entrance 入口', 'dolphin イルカ', 'jellyfish クラゲ', 'flash (カメラの)フラッシュ'],
    questions: [
      { type: 'fill', q: 'お知らせの内容に合うように、次の英文の（　）に入る最も適切な英語1語をお知らせの中から抜き出して書きなさい。\nOn the night tour, you can learn how fish (　　).', answer: 'sleep' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: Let\'s go to the Night Aquarium. I want to join the night tour and also watch the dolphin show.\nB: Good idea. Then let\'s join the tour at (　　).', options: ['6:00 p.m.', '6:30 p.m.', '7:30 p.m.', '8:00 p.m.'], answer: 1 },
      { type: 'choice', q: 'お知らせの内容に合うものとして最も適切なものを選びなさい。', options: ['ナイトアクアリウムは、8月の毎日開かれている。', '午後8時45分に入館することができる。', '一度外に出ても、もう一度中に入ることができる。', '中学生の夜のチケットは1,000円である。'], answer: 3 },
    ],
  },
  {
    id: 'c7n-06', level: 'chiba7n', genre: 'notice', title: '図書館の本の交換会',
    text: `Midori City Library
Book Exchange Market
Do you have books you have already read? Bring them and exchange them for other books!
Date: Sunday, November 16
Time: 10:00 a.m. – 3:00 p.m.
Place: Meeting Room 2 (2nd floor)
How It Works
1. Bring up to 5 books to the front desk by Friday, November 14.
2. You will get one ticket for each book.
3. On the day of the market, use your tickets to get other books. One ticket = one book.
Books We Can't Take
・Dictionaries and textbooks
・Books with broken pages or with writing in them
・Magazines
Notes
・If you don't have tickets, you can buy books for 50 yen each after 1:00 p.m.
・Books left at the end will be given to elementary schools in the city.`,
    table: [['Time', 'Event'], ['10:00 a.m.', 'Market opens (Room 2)'], ['11:00 a.m.', 'Picture book reading for children (Room 1)'], ['1:00 p.m.', 'Book sale for everyone (50 yen each)'], ['2:00 p.m.', 'Talk by a local writer (Room 1)']],
    notes: ['exchange 交換する', 'front desk 受付', 'broken やぶれた', 'local 地元の'],
    questions: [
      { type: 'fill', q: 'お知らせの内容に合うように、次の英文の（　）に入る最も適切な英語1語をお知らせの中から抜き出して書きなさい。\nBooks that are left at the end of the market will be given to (　　) schools.', answer: 'elementary' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: I took four books to the library on Thursday, but they didn\'t take one of them because it was a dictionary.\nB: So you can get (　　) books at the market with your tickets.', options: ['three', 'two', 'four', 'five'], answer: 0 },
      { type: 'choice', q: 'お知らせの内容に合うものとして最も適切なものを選びなさい。', options: ['交換に出す本は、交換会の当日に持って行けばよい。', '読み終わった雑誌も、交換に出すことができる。', '地元の作家の話は、午後2時から1号室で行われる。', 'チケットがない人は、午前中に1冊50円で本を買える。'], answer: 2 },
    ],
  },
  {
    id: 'c7n-07', level: 'chiba7n', genre: 'notice', title: '動物園の一日飼育員体験',
    text: `Hikari Zoo
One-Day Zookeeper Program
Work with our zookeepers and learn about animals!
Who can join: Students from 10 to 15 years old
Dates: Saturday, March 21 / Sunday, March 22 / Saturday, March 28
Time: 9:00 a.m. – 3:00 p.m. (Lunch is not included.)
Fee: 2,500 yen (This includes the zoo entrance fee.)
What You Will Do
・Clean the animals' rooms
・Make food for the animals
・Give food to the animals (different animals each day – see the table)
How to Join
・Call the zoo (012-345-6789) between 10:00 a.m. and 4:00 p.m. by March 10.
・Only 8 students can join each day.
Please Note
・Wear clothes that can get dirty.
・Bring your lunch and a hat.
・If you are sick, please don't come.`,
    table: [['Date', 'Animals you will give food to'], ['March 21 (Sat)', 'Elephants and giraffes'], ['March 22 (Sun)', 'Penguins and seals'], ['March 28 (Sat)', 'Monkeys and kangaroos']],
    notes: ['zookeeper 飼育員', 'include 含む', 'entrance fee 入園料', 'giraffe キリン', 'seal アザラシ', 'kangaroo カンガルー'],
    questions: [
      { type: 'fill', q: 'お知らせの内容に合うように、次の英文の（　）に入る最も適切な英語1語をお知らせの中から抜き出して書きなさい。\nYou have to bring your lunch and a (　　).', answer: 'hat' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: I\'m thirteen, and my brother is nine. We want to join the program together on March 22 and give food to penguins.\nB: Sorry, but (　　).', options: ['the program on March 22 is for elephants', 'you have to call the zoo on March 22', 'your brother is too young to join it', 'lunch is included in the fee'], answer: 2 },
      { type: 'choice', q: 'お知らせの内容に合うものとして最も適切なものを選びなさい。', options: ['参加費には、動物園の入園料が含まれている。', '申し込みは、3月10日までにメールで行う。', '1日に15人まで参加することができる。', '3月28日の参加者は、ペンギンにえさをあげる。'], answer: 0 },
    ],
  },
  {
    id: 'c7n-08', level: 'chiba7n', genre: 'web', title: 'レンタサイクルのウェブページ',
    text: `Hana City Rental Bikes
See the city by bike!
Where to Rent: Hana Station (East Exit), City Hall, Hana Castle Park
Open: 9:00 a.m. – 6:00 p.m. (Please return your bike by 6:00 p.m.)
How to Rent
・Show something with your name and address on it, like a student ID card.
・Children under 13 must ride with an adult.
・You can return your bike at any of the three places.
Notes
・Electric bikes are popular. Please reserve one on this website by the day before.
・If you return your bike late, you will have to pay 500 yen more.
・Helmets are free. Please wear one.`,
    table: [['Time', 'Regular bike', 'Electric bike'], ['Up to 3 hours', '300 yen', '600 yen'], ['One day', '800 yen', '1,500 yen']],
    notes: ['rent 借りる', 'exit 出口', 'city hall 市役所', 'return 返す', 'student ID card 生徒証', 'electric bike 電動自転車', 'reserve 予約する', 'regular ふつうの'],
    questions: [
      { type: 'fill', q: 'ウェブページの内容に合うように、次の英文の（　）に入る最も適切な英語1語をウェブページの中から抜き出して書きなさい。\nIf you want to use an electric bike, you need to (　　) one on the website by the day before.', answer: 'reserve' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: Tomorrow I\'m going to rent an electric bike at 10:00 a.m. and ride it until 4:00 p.m.\nB: Then you\'ll pay (　　) yen.', options: ['600', '1,200', '1,500', '2,000'], answer: 2 },
      { type: 'choice', q: 'ウェブページの内容に合うものとして最も適切なものを選びなさい。', options: ['自転車は、借りた場所に返さなければならない。', '自転車を返すのが遅れると、500円多く払わなければならない。', '12歳の人は、一人で自転車を借りて乗ることができる。', 'ヘルメットは1個100円で借りることができる。'], answer: 1 },
    ],
  },
  {
    id: 'c7n-09', level: 'chiba7n', genre: 'notice', title: '高校のオープンキャンパス',
    text: `Minami High School Open Campus
For third-year junior high school students and their families
Date: Saturday, August 9
Place: Minami High School (10 minutes from Kita Station on foot)
Program
・Opening Talk by the Principal (Gym)
・Trial Lessons: Choose ONE subject from English, math or science.
・Club Activity Visits: You can visit any club you like.
・School Tour with High School Students
How to Join
・Sign up on our school website by July 31.
・Please choose the morning group or the afternoon group.
Notes
・Bring indoor shoes and a pen.
・You can come in your school uniform.
・Parents can join only the Opening Talk and the School Tour.`,
    table: [['Program', 'Morning Group', 'Afternoon Group'], ['Opening Talk', '9:00 – 9:30', '1:00 – 1:30'], ['Trial Lesson', '9:40 – 10:30', '1:40 – 2:30'], ['Club Activity Visits', '10:40 – 11:30', '2:40 – 3:30'], ['School Tour', '11:40 – 12:10', '3:40 – 4:10']],
    notes: ['principal 校長', 'gym 体育館', 'trial lesson 体験授業', 'sign up 申し込む', 'indoor shoes 室内ばき', 'uniform 制服'],
    questions: [
      { type: 'fill', q: 'お知らせの内容に合うように、次の英文の（　）に入る最も適切な英語1語をお知らせの中から抜き出して書きなさい。\nYou need to bring indoor shoes and a (　　) to the open campus.', answer: 'pen' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: I\'m in the afternoon group. My mother wants to see the school with me, but she has to leave the school at 3:00 p.m.\nB: Then she can join (　　).', options: ['the Opening Talk', 'the Trial Lesson', 'the Club Activity Visits', 'the School Tour'], answer: 0 },
      { type: 'choice', q: 'お知らせの内容に合うものとして最も適切なものを選びなさい。', options: ['体験授業は、英語・数学・理科の中から2つ選ぶことができる。', '学校見学ツアーは、高校の先生が案内する。', '必ず私服で参加しなければならない。', '参加者は、午前と午後のどちらかのグループを選ぶ。'], answer: 3 },
    ],
  },
  {
    id: 'c7n-10', level: 'chiba7n', genre: 'web', title: 'いちご狩りのウェブページ',
    text: `Ichigo Farm – Strawberry Picking
Season: January 10 – May 6
Open: 10:00 a.m. – 3:00 p.m. (Closed on Tuesdays)
Prices (You can eat as many strawberries as you like for 40 minutes.)
・January – March: Adults 2,000 yen / Children (3–12) 1,200 yen
・April – May 6: Adults 1,600 yen / Children (3–12) 1,000 yen
・Children under 3: free
Reservations
・You need to make a reservation on this website.
・Strawberries may run out early. When there are no more strawberries, we will close for the day.
Rules
・Don't take strawberries home. If you want to take some home, you can buy a pack at our shop (500 yen).
・Pets are not allowed in the greenhouses.
Reservations for This Week (○ = You can reserve. △ = Only a few spots are left. × = Full. – = Closed.)`,
    table: [['Date', '10:00 a.m.', '11:30 a.m.', '1:00 p.m.'], ['April 18 (Sat)', '×', '×', '△'], ['April 19 (Sun)', '×', '△', '×'], ['April 20 (Mon)', '○', '○', '○'], ['April 21 (Tue)', '–', '–', '–']],
    notes: ['reservation 予約', 'run out なくなる', 'allow 許す', 'greenhouse ビニールハウス', 'spot 空き・枠'],
    questions: [
      { type: 'fill', q: 'ウェブページの内容に合うように、次の英文の（　）に入る最も適切な英語1語をウェブページの中から抜き出して書きなさい。\nYou can\'t take your pets into the (　　).', answer: 'greenhouses' },
      { type: 'choice', q: '次の対話の（　）に入るものとして最も適切なものを選びなさい。\nA: Let\'s go strawberry picking this weekend. But I have club practice on Sunday until noon.\nB: OK. Then let\'s reserve (　　).', options: ['10:00 a.m. on April 18', '1:00 p.m. on April 18', '11:30 a.m. on April 19', '1:00 p.m. on April 19'], answer: 1 },
      { type: 'choice', q: 'ウェブページの内容に合うものとして最も適切なものを選びなさい。', options: ['2歳の子どもは、料金がかからない。', '4月に大人2人で行くと、料金は合計4,000円である。', '摘んだいちごは、自由に持ち帰ることができる。', '農園は毎週月曜日が休みである。'], answer: 0 },
    ],
  },

  // ===================== 大問9 型: 対話文の空所補充 =====================
  // ===================== 大問8 型: スピーチと話し合い・説明文 =====================
  {
    id: 'c8-01', level: 'chiba8', genre: 'speech', title: 'ビニール傘のゆくえ（スピーチと話し合い）',
    text: `Do you have a plastic umbrella at home? Plastic umbrellas are cheap and easy to buy at convenience stores, so many people buy one when it suddenly starts to rain. [ ア ] But do you know what happens to them after that?
According to one report, about 80 million umbrellas are sold in Japan every year, and many of them are plastic ones. [ イ ] A lot of people leave them on trains or forget them at stores. At one station in Tokyo, more than 300,000 umbrellas are left every year, and most of their owners never come back for them. [ ウ ] Plastic umbrellas are made of several different materials, so it is hard to recycle them. Many of them are burned or buried as waste.
Some companies are trying to solve this problem. One company started an umbrella sharing service. You can borrow an umbrella at a station or a store with your smartphone and return it at another place. [ エ ] It is cheaper than buying a new one, and fewer umbrellas are thrown away. Another company collects lost umbrellas and lends them to people for free on rainy days.
We can also do something. Before we leave home, we can check the weather news. We can carry a small folding umbrella in our bags. If we have a plastic umbrella, we can use it for a long time. A small action can make a big difference.
＜ユイ (Yui) のスピーチを聞いたあとの話し合い＞
Mika: I didn't know that so many umbrellas are thrown away. Why do people buy plastic umbrellas so often?
Ken: I think it's because ( A ).
Yui: I agree. People don't think plastic umbrellas are important, so they often leave them on trains.
Ken: The umbrella sharing service is a good idea. But ( B )?
Yui: You can use an app on your smartphone. It shows the nearest place on a map.
Mika: That's useful. I will carry a folding umbrella in my bag. By doing so, I don't have to ( C ) when it rains.
Yui: Great. Let's tell our classmates about this.`,
    notes: ['plastic umbrella ビニール傘', 'according to 〜 〜によると', 'owner 持ち主', 'material 材料', 'bury 埋める', 'folding umbrella 折りたたみ傘'],
    questions: [
      { type: 'choice', q: '次の英文を入れるのに最も適当な場所を、本文中の〔ア〕〜〔エ〕から選びなさい。\nSo, what happens to these lost umbrellas?', options: ['〔ア〕', '〔イ〕', '〔ウ〕', '〔エ〕'], answer: 2 },
      { type: 'ea', q: '話し合いの内容に合うように、（ A ）に入る言葉を英語で書きなさい。ただし、語の数は10〜15語（. , などの符号は語数に含まない。）とすること。', answer: 'they are cheap and people can buy them easily at convenience stores' },
      { type: 'choice', q: '話し合いの（ B ）に入る英文として適当でないものを選びなさい。', options: ['how can we find a place to borrow one', 'where can we borrow an umbrella', 'how do we know where to return it', 'why did the company stop the service'], answer: 3 },
      { type: 'choice', q: '話し合いの（ C ）に入る最も適当なものを選びなさい。', options: ['buy a new plastic umbrella', 'check the weather news', 'use an app on my smartphone', 'go to the station'], answer: 0 },
      { type: 'choice', q: '本文の内容に合っている英文として最も適当なものを選びなさい。', options: ['About 300,000 umbrellas are sold at one station in Tokyo every year.', 'It is easy to recycle plastic umbrellas because they are made of one material.', 'With the sharing service, people can return an umbrella at a different place.', 'Yui says we should buy a new umbrella every time it rains.'], answer: 2 },
    ],
  },
  {
    id: 'c8-02', level: 'chiba8', genre: 'speech', title: '未来の食べ物としての昆虫（スピーチと話し合い）',
    text: `Have you ever eaten insects? Many people in Japan may say, "No way!" But in some areas of Japan, people have eaten insects like grasshoppers for a long time. [ ア ] Today, I want to talk about insects as food for the future.
The number of people in the world is growing. Some researchers say it will be about 10 billion in 2050. [ イ ] To feed so many people, we will need much more meat. But raising cows needs a lot of land, water, and food. Cows also give off gases that make the earth warmer.
Insects may help us with this problem. [ ウ ] For example, crickets need much less food and water than cows to make the same amount of protein. They can be raised in a small space, even in a city. Insects are also healthy because they have a lot of protein and vitamins.
However, many people don't want to eat insects because of the way they look. So, some companies make cricket powder. They put it into cookies, bread, and pasta. [ エ ] Last month, I tried cricket cookies at a shop near my house, and I liked them. Maybe insects will be on our tables in the future. I think we should keep an open mind about new kinds of food.
＜ダイチ (Daichi) のスピーチを聞いたあとの話し合い＞
Teacher: Daichi said many people don't want to eat insects. What can we do to change their minds?
Aya: I think ( A ).
Ben: That's a good idea. Also, ( B ).
Aya: Daichi, ( C )?
Daichi: They tasted like shrimp. I want to try cricket bread next time.
Teacher: Thank you, everyone. It's important to think about food for the future.`,
    notes: ['insect 昆虫', 'grasshopper バッタ', 'feed 食べ物を与える', 'raise 育てる', 'give off 〜を出す', 'cricket コオロギ', 'protein たんぱく質', 'powder 粉', 'shrimp エビ'],
    questions: [
      { type: 'choice', q: '次の英文を入れるのに最も適当な場所を、本文中の〔ア〕〜〔エ〕から選びなさい。\nYou cannot see the insects in these foods.', options: ['〔ア〕', '〔イ〕', '〔ウ〕', '〔エ〕'], answer: 3 },
      { type: 'ea', q: '話し合いの内容に合うように、（ A ）に入る言葉を英語で書きなさい。ただし、語の数は10〜15語（. , などの符号は語数に含まない。）とすること。', answer: 'we should tell people that insects are healthy and good for the environment' },
      { type: 'choice', q: '話し合いの（ B ）に入る英文として適当でないものを選びなさい。', options: ['we can make delicious dishes with cricket powder', 'we can hold an event to try insect foods', 'we can show that crickets are easy to raise', 'we can say that cows are better for the earth'], answer: 3 },
      { type: 'choice', q: '話し合いの（ C ）に入る最も適当なものを選びなさい。', options: ['where did you buy them', 'how did the cricket cookies taste', 'how many cookies did you eat', 'when did you try them'], answer: 1 },
      { type: 'choice', q: '本文の内容に合っている英文として最も適当なものを選びなさい。', options: ['People in all areas of Japan have eaten insects for a long time.', 'Raising cows needs less land and water than raising crickets.', 'Some companies use cricket powder to make foods like bread.', "Daichi didn't like the cricket cookies because they looked bad."], answer: 2 },
    ],
  },
  {
    id: 'c8-03', level: 'chiba8', genre: 'explanation', title: 'ピクトグラムの話（説明文）',
    text: `When you are at a station or an airport, you can see many small pictures on signs. They show things like toilets, exits, and places to eat. These pictures are called pictograms. People can understand them quickly even if they cannot read the language of the country.
Pictograms became popular in Japan in 1964, when the Olympic Games were held in Tokyo. At that time, many people came to Japan from other countries. [ ア ] Most of them couldn't read Japanese, and not many signs in Japan were written in English. So a group of Japanese designers made pictograms for the sports and for places like toilets and first aid rooms. [ イ ]
Making good pictograms is not easy. A pictogram must be simple, so people can understand it in a second. It must also mean the same thing to people from different cultures. [ ウ ] For example, a picture of a hot spring may look like a hot dish of food to some people. So designers test their pictograms many times before they use them.
Today, pictograms are used all over the world, and they are getting more important. More foreign people are visiting Japan, and pictograms can help them. They can also help small children and people who have difficulty reading. [ エ ] Next time you see a pictogram, think about the people who made it and the people it helps.`,
    notes: ['sign 標識', 'exit 出口', 'designer デザイナー', 'first aid room 救護室', 'culture 文化', 'hot spring 温泉', 'difficulty 困難'],
    questions: [
      { type: 'choice', q: '本文の題名として最も適当なものを選びなさい。', options: ['How to Read Signs in English', 'The Story of Pictograms', 'The History of the Olympic Games', 'How to Draw Pictures'], answer: 1 },
      { type: 'choice', q: '次の英文を入れるのに最も適当な場所を、本文中の〔ア〕〜〔エ〕から選びなさい。\nThis is difficult because people from different countries sometimes see a picture in different ways.', options: ['〔ア〕', '〔イ〕', '〔ウ〕', '〔エ〕'], answer: 2 },
      { type: 'ea', q: '本文の内容に関する次の質問に、英語で答えなさい。\nWhy did Japanese designers make pictograms in 1964?', answer: 'Because many people from other countries couldn\'t read Japanese.' },
      { type: 'choice', q: '本文の内容に合っている英文として最も適当なものを選びなさい。', options: ['Pictograms were first made after the Olympic Games in Tokyo.', 'Before 1964, most signs in Japan were written in English.', 'Designers test their pictograms many times before they use them.', 'Pictograms are only for people from other countries.'], answer: 2 },
    ],
  },
  {
    id: 'c9-01', level: 'chiba9', genre: 'dialogue', title: 'ALTとの会話：夏祭りと花火',
    text: `Ms. Brown: Hi, Ken. What did you do last weekend?
Ken: Hi, Ms. Brown. I went to the summer festival in my town with my family.
Ms. Brown: That sounds nice. 〔①〕
Ken: I ate takoyaki and watched the fireworks. They were beautiful.
Ms. Brown: I've never seen fireworks in Japan. In my country, we usually see fireworks on New Year's Eve.
Ken: Really? 〔②〕
Ms. Brown: No. I'm from Australia. December is in summer there, so it's warm.
Ken: Oh, I forgot that. Our town has another fireworks festival next month. 〔③〕
Ms. Brown: Of course! I'd love to. What should I bring?
Ken: 〔④〕
Ms. Brown: OK. I'll do that. Thank you, Ken.
Ken: You're welcome. See you next month!`,
    notes: ['fireworks 花火', 'New Year\'s Eve 大みそか'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['What did you do there?', 'How did you get there?', 'Who did you go there with?', 'When did it start?'], answer: 0 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['Did you buy fireworks at a shop?', 'Why did you come to Japan?', 'Isn\'t it cold to watch fireworks at that time?', 'How many people live in your country?'], answer: 2 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['Did you go there last year?', 'Would you like to come with us?', 'Can you make takoyaki?', 'Where do you want to go?'], answer: 1 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'You should bring something to drink because it will be hot.' },
    ],
  },
  {
    id: 'c9-02', level: 'chiba9', genre: 'dialogue', title: 'ホストファミリーとの会話：みそ汁',
    text: `Mrs. Smith: Yuka, you look tired. Are you OK?
Yuka: I'm fine, thank you. I just walked a lot today. My class visited a museum.
Mrs. Smith: 〔①〕
Yuka: It was great. I learned a lot about the history of this town.
Mrs. Smith: Good. By the way, tomorrow is Sunday. My sister's family is coming for dinner.
Yuka: Really? 〔②〕
Mrs. Smith: Thank you. You can help me make a salad. Oh, can you cook any Japanese food?
Yuka: Yes, a little. I often make miso soup at home.
Mrs. Smith: Wonderful! 〔③〕
Yuka: Sure. But I don't have any miso. Where can I buy it?
Mrs. Smith: There's an Asian food store near the station. Let's go there tomorrow morning.
Yuka: Thank you. I hope everyone will like it.
Mrs. Smith: I'm sure they will. Tell me, Yuka, why do Japanese people eat miso soup so often?
Yuka: 〔④〕`,
    notes: ['history 歴史', 'Asian アジアの'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['Where is it?', 'How did you get there?', 'Who did you go with?', 'How was it?'], answer: 3 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['Can I help you with anything?', 'What time will they leave?', 'Do they live near here?', 'Will you go out for dinner?'], answer: 0 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['Did you eat it at the museum?', 'Do you want to buy a salad?', 'Could you make it for us tomorrow?', 'Have you ever been to Japan?'], answer: 2 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'Because it is healthy and easy to make at home.' },
    ],
  },
  {
    id: 'c9-03', level: 'chiba9', genre: 'dialogue', title: 'ALTとの会話：英語スピーチコンテスト',
    text: `Mr. Lee: Hi, Aya. You're going to join the English speech contest next month, right?
Aya: Yes, but I'm worried. 〔①〕
Mr. Lee: Don't worry. I'll help you. What is your speech about?
Aya: It's about my grandmother. She is eighty-five years old, but she still works in her rice field.
Mr. Lee: Wow. 〔②〕
Aya: Yes, I've already written it. Here it is.
Mr. Lee: Let me see... It's very good. But it's a little long. You have only five minutes for the speech.
Aya: I see. 〔③〕
Mr. Lee: I think you can cut this part about your school trip. It's not about your grandmother.
Aya: You're right. I'll do that.
Mr. Lee: Good. Now I have one question. Why did you choose your grandmother for your speech?
Aya: 〔④〕`,
    notes: ['contest コンテスト', 'rice field 田んぼ', 'cut 削る'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['I won the contest last year.', 'I\'ve never made a speech in English.', 'I don\'t like my grandmother.', 'The contest was very exciting.'], answer: 1 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['Does she live with you?', 'When did she start working?', 'Can I meet her?', 'Have you written your speech yet?'], answer: 3 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['Which part should I cut?', 'How long is your speech?', 'Who will listen to my speech?', 'Can I make it longer?'], answer: 0 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'Because she shows me that we can enjoy working at any age.' },
    ],
  },
  {
    id: 'c9-04', level: 'chiba9', genre: 'dialogue', title: 'ALTとの会話：学校の掃除',
    text: `Ms. Davis: Daiki, what are you doing?
Daiki: I'm cleaning our classroom. We clean our school every day after lunch.
Ms. Davis: Every day? 〔①〕
Daiki: No, we don't. Students and teachers clean the school together.
Ms. Davis: That's different from my country. In America, cleaning staff usually clean schools.
Daiki: Really? 〔②〕
Ms. Davis: Sometimes, but not every day. We usually just clean our own desks.
Daiki: I think cleaning is good for us. When we clean our school, we take better care of it.
Ms. Davis: I agree. 〔③〕
Daiki: Of course. Here's a broom. Can you clean that corner?
Ms. Davis: Sure. ... Daiki, have you learned anything from cleaning your school?
Daiki: 〔④〕`,
    notes: ['cleaning staff 清掃員', 'take care of 〜を大切にする', 'broom ほうき', 'corner すみ'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['How long does it take?', 'What do you use to clean?', 'Do you have cleaning staff at your school?', 'When did you start doing it?'], answer: 2 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['Is America bigger than Japan?', 'Do students clean anything in your country?', 'What time do they come to school?', 'Where do they live?'], answer: 1 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['Did you clean the gym, too?', 'Who cleans the teachers\' room?', 'Can you show me your new desk?', 'Can I join you?'], answer: 3 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'Yes. I have learned that we should use things carefully.' },
    ],
  },
  {
    id: 'c9-05', level: 'chiba9', genre: 'dialogue', title: 'ホストファミリーとの会話：バスをまちがえた日',
    text: `Mr. Wilson: Hiroto, you came home late today. What happened?
Hiroto: I'm sorry. I took the wrong bus after school.
Mr. Wilson: Oh no. 〔①〕
Hiroto: When I saw the sea. Our house is not near the sea!
Mr. Wilson: Ha-ha. So what did you do then?
Hiroto: I got off the bus and asked an old woman for help. She was very kind. 〔②〕
Mr. Wilson: That was lucky. People here like helping others.
Hiroto: Yes. But I was a little nervous because I couldn't understand her English well at first.
Mr. Wilson: 〔③〕
Hiroto: I asked her to speak more slowly. Then I understood her.
Mr. Wilson: Good job. Next time, please call me when you're in trouble.
Hiroto: OK, I will. But today I learned something important.
Mr. Wilson: What's that?
Hiroto: 〔④〕`,
    notes: ['wrong まちがった', 'get off 降りる', 'nervous 不安な', 'be in trouble 困っている'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['When did you notice it?', 'Where did you buy the ticket?', 'Why did you go to school by bus?', 'How long did you wait for the bus?'], answer: 0 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['She didn\'t answer my question.', 'She asked me the way to the station.', 'She was waiting for her friend.', 'She took me to the right bus stop.'], answer: 3 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['Did you take a taxi?', 'So what did you do?', 'Who taught you English?', 'Was the bus crowded?'], answer: 1 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'It is important to ask for help when I am in trouble.' },
    ],
  },
  {
    id: 'c9-06', level: 'chiba9', genre: 'dialogue', title: 'ALTとの会話：ニュージーランドへの留学',
    text: `Mr. Green: Rina, what are you reading?
Rina: It's a pamphlet about a summer program in New Zealand. 〔①〕
Mr. Green: That's great. How long is the program?
Rina: Two weeks. Students stay with host families and go to a local school.
Mr. Green: 〔②〕
Rina: I want to, but I'm worried about my English. I can't speak it well.
Mr. Green: Don't worry. When I first came to Japan, I couldn't speak Japanese at all.
Rina: Really? 〔③〕
Mr. Green: I tried to talk with people around me every day, even when I made mistakes.
Rina: I see. Then I'll talk with you in English more often.
Mr. Green: Sounds good. By the way, what do you want to do in New Zealand?
Rina: 〔④〕`,
    notes: ['pamphlet パンフレット', 'local 地元の', 'make a mistake まちがえる'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['I\'m not interested in it.', 'It\'s too difficult for me to read.', 'I\'m thinking of joining it.', 'My father bought it in New Zealand.'], answer: 2 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['Are you going to join it?', 'Did you enjoy it?', 'Where is your host family?', 'Do you like cooking?'], answer: 0 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['Why did you come to Japan?', 'Where did you live?', 'Do you like Japanese food?', 'How did you learn it?'], answer: 3 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'I want to make friends at school and learn about their culture.' },
    ],
  },
  {
    id: 'c9-07', level: 'chiba9', genre: 'dialogue', title: 'ALTとの会話：家族へのおみやげ',
    text: `Ms. Hill: Sota, can I ask you something?
Sota: Sure. What is it?
Ms. Hill: I'm going back to Canada for the winter vacation. 〔①〕
Sota: How about a furoshiki? It's a Japanese wrapping cloth.
Ms. Hill: A furoshiki? 〔②〕
Sota: You can wrap many things with it, like boxes and bottles. You can also use it as a bag.
Ms. Hill: That's nice. It's also good for the environment because we can use it again and again.
Sota: Yes. There are many beautiful patterns. 〔③〕
Ms. Hill: Yes, please. Where is the shop?
Sota: It's near Higashi Station. I can take you there on Saturday.
Ms. Hill: Thank you! By the way, which pattern do you like the best?
Sota: 〔④〕`,
    notes: ['wrap 包む', 'cloth 布', 'environment 環境', 'pattern 柄・模様'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['Where did you spend your winter vacation?', 'What should I buy for my family?', 'Have you ever been to Canada?', 'When will you come back to Japan?'], answer: 1 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['How much is it?', 'Who made it?', 'How do you use it?', 'Is it made in Canada?'], answer: 2 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['Shall I show you a good shop?', 'Do you have one?', 'Which one did you buy?', 'Do you know how to wrap it?'], answer: 0 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'I like the wave pattern the best because it looks cool.' },
    ],
  },
  {
    id: 'c9-08', level: 'chiba9', genre: 'dialogue', title: 'ALTとの会話：バスケットボールの試合',
    text: `Mr. Brown: Hi, Takeru. How was your basketball game yesterday?
Takeru: We lost. 〔①〕
Mr. Brown: I'm sorry to hear that. But 48 to 50 was a close game.
Takeru: Yes. I missed an easy shot at the end. We lost because of me.
Mr. Brown: 〔②〕 Basketball is a team sport. Everyone made some mistakes in the game, right?
Takeru: That's true. My teammates said the same thing.
Mr. Brown: When I was a high school student, I was on the basketball team, too.
Takeru: Really? 〔③〕
Mr. Brown: Yes. I lost a lot of games. But after each game, I practiced the things I couldn't do well.
Takeru: I see. I'll practice shooting every day.
Mr. Brown: That's the spirit! What is your goal for the next tournament?
Takeru: 〔④〕`,
    notes: ['close 接戦の', 'miss a shot シュートを外す', 'teammate チームメート', 'spirit 意気込み', 'tournament 大会'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['We won the game easily.', 'I didn\'t play in the game.', 'It was the first game of this year.', 'The score was 48 to 50.'], answer: 3 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['You\'re right.', 'Don\'t think that way.', 'That\'s a good idea.', 'You should stop playing.'], answer: 1 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['Did you play soccer, too?', 'How tall were you?', 'Did you ever lose games?', 'Do you still play it now?'], answer: 2 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'I want to win the tournament with all my teammates.' },
    ],
  },
  {
    id: 'c9-09', level: 'chiba9', genre: 'dialogue', title: 'ALTとの会話：引っこし',
    text: `Ms. Clark: Haruto, I heard your family is going to move.
Haruto: Yes. We're moving to Tokyo next spring because of my father's job.
Ms. Clark: 〔①〕
Haruto: A little. I'll miss my friends here. But I'm also excited.
Ms. Clark: I understand. I grew up in a small town in Ireland, and I moved to a big city when I was fifteen.
Haruto: 〔②〕
Ms. Clark: Not at first. It was too noisy, and I didn't have any friends there.
Haruto: What did you do then?
Ms. Clark: I joined a music club. 〔③〕
Haruto: That's a good idea. I'll join a club soon after I move.
Ms. Clark: Good. Haruto, which do you like better, living in a big city or living in a small town?
Haruto: 〔④〕`,
    notes: ['move 引っこす', 'miss 〜がいなくてさびしく思う', 'grow up 育つ', 'Ireland アイルランド', 'noisy うるさい'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['Are you sad?', 'Where will you live?', 'Is your father a teacher?', 'What will your father do there?'], answer: 0 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['Why did you move there?', 'How many people lived in your town?', 'Do you have any brothers?', 'Did you like living there?'], answer: 3 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['I didn\'t like music at all.', 'I made many friends there.', 'I went back to my town soon.', 'I was too busy to go there.'], answer: 1 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'I like living in a small town better because it is quiet.' },
    ],
  },
  {
    id: 'c9-10', level: 'chiba9', genre: 'dialogue', title: 'ALTとの会話：手作りのお弁当',
    text: `Mr. Taylor: Natsuki, your lunch looks delicious. 〔①〕
Natsuki: Yes, I did. I make my lunch every Saturday when we have club practice.
Mr. Taylor: Wow. What time do you get up?
Natsuki: At six. It takes about thirty minutes to make it.
Mr. Taylor: 〔②〕
Natsuki: Mostly food from dinner. Today, I put in fried chicken from last night and an egg I cooked this morning.
Mr. Taylor: That's smart. I usually buy my lunch at a convenience store.
Natsuki: 〔③〕
Mr. Taylor: Because I can't cook well. Can you teach me an easy dish?
Natsuki: Sure. How about tamagoyaki? You only need eggs, sugar and a little salt.
Mr. Taylor: I'll try it this weekend. Natsuki, why do you make your own lunch?
Natsuki: 〔④〕`,
    notes: ['mostly ほとんどは', 'fried chicken から揚げ', 'smart 賢い', 'dish 料理'],
    questions: [
      { type: 'choice', q: '〔①〕に入る最も適切な英文を選びなさい。', options: ['Where did you buy it?', 'Do you want some of mine?', 'Did you make it yourself?', 'Is it your mother\'s?'], answer: 2 },
      { type: 'choice', q: '〔②〕に入る最も適切な英文を選びなさい。', options: ['What do you put in it?', 'Who taught you cooking?', 'Do you eat breakfast?', 'How much does it cost?'], answer: 0 },
      { type: 'choice', q: '〔③〕に入る最も適切な英文を選びなさい。', options: ['What do you usually buy?', 'Where is the convenience store?', 'How often do you go there?', 'Why do you buy it there?'], answer: 3 },
      { type: 'ea', q: '〔④〕に入る英語を10語程度で書きなさい。', answer: 'Because I like cooking, and it helps my parents a lot.' },
    ],
  },
);
