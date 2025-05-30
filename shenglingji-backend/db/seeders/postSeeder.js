const { Post, User, PostImage, PostVideo } = require('../../src/models');

// 植物帖子数据
const plantPosts = [
  {
    title: "生石花，\"屁股会蹦花\"",
    content: "#植物微观世界# #神奇植物# #生石花# #那些奇奇怪怪的植物们# #搞笑配音#",
    mediaType: "video",
    imageUrl: "/uploads/images/plant-1.png",
    videoUrl: "/uploads/images/plant-1.mp4"
  },
  {
    title: "沙漠惊现\"蓝色鸡腿\"｜稀有沙生植物蓝棱柱",
    content: "蓝棱柱（Cipocereus bradei）\n因通体灰蓝、棱角分明的柱状茎干而得名，\n堪称\"沙漠中的蓝宝石\"，\n仙人掌界的\"高冷系颜值担当\"\n全身灰蓝自带「冷白皮滤镜」\n棱角分明+黑刺炸毛，\n赛博朋克风拉满，\n夏夜开奶白花，\n暗香浮动仅绽放1晚。\n#植物# #景观# #植物设计#\n#植物科普# #沙生植物# #神奇植物#\n#植物的世界# #仙人掌# #奇特的植物#\n#闯入我生活的新奇植物#",
    mediaType: "image",
    imageUrl: "/uploads/images/plant-2.png"
  },
  {
    title: "最大最臭的诅咒之花：大王花",
    content: "#植物的故事# #植物科普# #植物冷知识# #不一样的花# #独一无二的花#",
    mediaType: "video",
    imageUrl: "/uploads/images/plant-3.png",
    videoUrl: "/uploads/images/plant-3.mp4"
  },
  {
    title: "每天认识一种植物丨狸尾豆",
    content: "在自然界的万千植物中，狸尾豆以其独特的名字和形态吸引了我们的注意，它们因其花穗柔软而毛茸茸，酷似狸猫的尾巴，因此得名。\n基础信息\n• 学名：Uraria lagopodioides L.\n• 别名：兔尾草、狗尾豆、猫尾豆、猴尾豆、象豆\n• 科：豆科\n• 属：狸尾豆属\n形态特征\n狸尾豆是一种一年生草本植物，它的植株不高，通常在40厘米左右，但它们以群体的形式生长，形成了一片片绿色的小丘。叶片细长，边缘有锯齿，给人一种清新脱俗的感觉。最吸引人的是它的花序，它们从叶腋中抽出，形似狸猫的尾巴，因此得名。这些花序上覆盖着细软的绒毛，随风轻轻摇曳，如同小动物的尾巴在摆动，非常可爱。\n生长习性\n狸尾豆对环境的适应性很强，它们可以在多种气候条件下生长，无论是炎热的夏季还是寒冷的冬季，都能看到它们的身影。它们喜欢阳光充足的环境，但也能忍受半阴。狸尾豆对土壤的要求不高，无论是肥沃的土壤还是贫瘠的土地，它们都能生长，但排水良好的土壤更有利于它们的生长。\n用途与价值\n狸尾豆不仅外观吸引人，还具有一定的药用价值。在传统医学中，狸尾豆的全草被用来治疗一些疾病，如消肿和驱虫。此外，狸尾豆的花序也是园林中一道亮丽的风景线，它们可以单独种植，也可以与其他植物搭配，形成丰富多彩的景观。\n栽培与护理\n栽培狸尾豆相对简单，它们对环境的适应性强，不需要特别的照顾。在种植时，选择阳光充足的地方，确保土壤排水良好。在生长季节，适量的浇水和施肥可以促进它们的生长。由于狸尾豆的自播能力较强，它们可以在适宜的环境中自我繁殖，形成自然的群落。\n#生活美学# #动植物挖掘官# #不懂就问有问必答# #植物# #每天认识一种植物# #每天认识一种花# #神奇植物# #植物小知识#",
    mediaType: "image",
    imageUrl: "/uploads/images/plant-4.png"
  },
  {
    title: "科学家发现一种新蘑菇",
    content: "科学家最近发现了一种新蘑菇，颜色呈醒目的蓝色。这种蘑菇名为 Mycena subcyanocephala，最早是在 2019 年 12 月发表的一篇论文中描述的。它是由台湾师范大学和国立自然科学博物馆的研究人员在台湾发现的。\n蓝蘑菇是世界上最小的蘑菇之一，高度只有 1 毫米左右。它生长在腐朽的木头上，喜欢潮湿的环境。蘑菇盖的蓝色是由一种叫做蓝藻蓝蛋白的色素引起的，这种色素也存在于一些藻类和蓝藻中。这种颜色可以在成熟的蘑菇中持续存在，尽管它可能会褪成淡蓝色或灰白色。\n这一新物种的发现为真菌王国增添了多样性和美丽。研究人员希望他们的发现能激发人们对这些微小而迷人的生物的更多兴趣和保护努力。\n2023 年 10 月，另一项研究显示，一些小蘑菇，包括 M. subcyanocephala，可以寄居在活植物上，甚至与它们形成互利关系。这表明，在有利条件下，小蘑菇正在进化，从独特的非生物植物材料分解者转变为活植物的寄居者。\n图片来源：Eric Cho（cho_fungi - Instagram 评论区）\n文字来源：Earth Unreal",
    mediaType: "image",
    imageUrl: "/uploads/images/plant-5.png"
  },
  {
    title: "会跳舞的小白兔狸藻",
    content: "一群勤快的小白兔狸藻，果然还是需要一些光照才能爆兔兔呀#食虫植物# #植物生长日记# #狸藻# #小白兔狸藻#",
    mediaType: "image",
    imageUrl: "/uploads/images/plant-6.png"
  },
  {
    title: "No.67#每日一植#风铃草🌼",
    content: "宝子们，今天来分享超美的风铃草啦🎐\n🌸外观：风铃草的花朵宛如小巧精致的铃铛，俏皮地悬挂在细长的花茎上，微风拂过，仿佛能听见它们轻轻碰撞发出的悦耳声响。花色丰富多样，有清新淡雅的蓝色、浪漫迷人的粉色、纯洁无暇的白色等。每一朵花都有独特的纹理，花瓣微微卷曲，像是精心雕琢的艺术品，在绿叶衬托下，愈发显得灵动可爱。\n🌱生长习性：风铃草偏好凉爽、光照充足的环境，不过也能忍受一定程度的半阴。它对土壤要求不算苛刻，疏松肥沃、排水良好的土壤最适合它扎根生长。它就像个不挑环境的小仙子，只要条件不太差，都能努力绽放美丽。\n💡养护要点：浇水要遵循见干见湿原则，别让土壤太干或太湿，不然风铃草会不开心哦。施肥不用太频繁，生长旺季适当补充稀薄肥料，就能助力它茁壮成长。日常要注意通风，预防病虫害来袭。\n宝子们，有没有被风铃草的独特魅力吸引呢？要是你打算养一盆风铃草，最关心它哪方面的养护问题呀🧐快来评论区聊聊～\n#风铃草# #花卉养护# #室内植物# #庭院花卉# #室内绿植# #植物# #每天认识一种植物#",
    mediaType: "image",
    imageUrl: "/uploads/images/plant-7.png"
  },
  {
    title: "小白兔狸藻丨你见过\"食肉植物\"小白兔？",
    content: "💚名称：小白兔狸藻\n💚季节：花期6月（白色花朵）、8月（蓝色花朵）\n💚原产地：原产南非\n-\n💚小白兔狸藻的\"三度一法\"\n喜水度：⭐⭐⭐⭐\n喜光度：⭐⭐\n耐热度：⭐⭐⭐\n食肉法：狸藻是具有可活动囊状捕虫结构的小型食虫植物，能将小生物吸入囊中，并消化吸收\n-\n💚自身价值\n小白兔狸藻因其可爱的花型而得名，小白兔狸藻是最受欢迎的陆生狸藻之一\n🌿 科研价值\n由于其特殊的食虫习性，也是科学家研究食虫植物生理和生态学的重要对象\n🌼观赏价值\n其可爱的小白兔形态深受人们喜爱，是一种非常受欢迎的观赏植物，尤其是水族箱或者玻璃瓶中的微型景观\n-\n♻️图片来源于网络\n❤️欢迎走进 @Plants pharmacy 真不二 的世界，尽情期待更多关于植物的故事吧～\n#小白兔狸藻# #植物# #植物科普# #闯入我生活的新奇植物# #鲜花分享# #花都开好了# #每周一花# #点缀生活的鲜花#",
    mediaType: "image",
    imageUrl: "/uploads/images/plant-8.png"
  }
];

// 动物帖子标题和内容
const animalPosts = [
  {
    title: "可以光合作用的奇妙生物丨叶羊",
    content: "叶羊，学名Costasiella kuroshimae，是一种生活在海洋中的小型软体动物，是海蛞蝓家族的一员，腹足纲无楯目海兔科海兔螺属。因其外形酷似陆地上的小绵羊，故得名\"叶羊\"。\n\n形态特征\n叶羊的体型非常小，成年个体体长仅约5毫米。它们有着软绵绵的身体和毛茸茸的触角，以及小而明亮的眼睛，这些特征让它们看起来非常像卡通中的小绵羊。叶羊的贝壳已经退化，只剩下一层透明的薄壳皮，通常呈白色并带有珍珠光泽。\n\n生活习性\n叶羊主要分布在日本、印度尼西亚和菲律宾的海域。它们喜欢生活在海水清澈、水流畅通、海藻丛生的环境中。叶羊以海藻为食，通过进食藻类，它们能够吸收食物中的叶绿素，并将其转化为自身的一部分，这一过程被称为盗食质体（kleptoplasty）。\n\n光合作用\n叶羊是世界上少有的可以进行光合作用的动物之一。它们通过盗食质体的方式，将进食到体内的叶绿素转化为自己所用，从而为自己制造养分。这种能力使得叶羊能够在阳光下进行光合作用，为自己合成所需的营养物质。\n\n生长发育\n叶羊在孵化后，身体最初是透明的，直到开始进食藻类后，体色才开始慢慢变化，最终变成绿色，这意味着它们已经发育成熟。它们的寿命相对较短，一般只能存活一年左右。\n\n繁殖方式\n叶羊是雌雄同体的生物，繁殖方式为异体受精。它们的交配行为相当特别，有时几只甚至十几只叶羊会进行连锁式的交配。交配后，叶羊会排出受精卵，这些卵会形成细长如绳索状的卵索带。\n\n环境影响\n叶羊对海水水质的要求非常高，海水污染会严重影响它们的生存。随着人类活动的扩大，叶羊的生存空间正在逐渐缩小，许多海域的叶羊已经因为污染而绝迹。\n\n#动植物挖掘官# #有趣的动植物# #自然的精灵# #叶羊# #海蛞蝓# #每天认识一种动物# #神奇动物# #神奇动物在小红书# #地球不只是人类的地球# #奇幻海洋生物#"
  },
  {
    title: "世界上最快乐的动物-Quokka （短尾矮袋鼠）",
    content: "短尾矮袋鼠是袋鼠科的一员，是一种小型袋鼠，同家猫一般大小，只生活在澳大利亚。因其圆胖呆萌的外表，常常被人们称为\"世界上最快乐的动物\"。"
  },
  {
    title: "每天认识一种有趣动物｜威廉多彩海蛞蝓",
    content: "威廉多彩海蛞蝓\n『深海蓝色精灵』\n🍊拉丁学名:Chromodoris willani\n🍊别名:威廉海兔\n🍊栖息环境:栖息于珊瑚礁区浅海，以海绵为食。\n🍊外形特征:威廉多彩海蛞蝓体长可达9厘米，触角及外鳃为淡蓝色，上面有许多白点。身体周缘为白色，中央为淡蓝色，淡蓝色外围为蓝黑色环带，身体中央有一些黑色斑点及短纵线。腹部两边也有纵斑及纵走带。\n🥶冷知识:海蛞蝓是科学家发现的第一种可生成植物色素叶绿素的动物。为了保护自己，它身着可变化的\"迷彩服\"，爬到什么环境里都能随机应变。不过，当它们在遭遇敌害难以逃脱时便会分泌出带有毒素和紫色的液体，前者可使敌害神经麻醉而失去攻击力，后者犹如\"烟幕弹\"，从而趁机逃遁。海蛞蝓是雌雄同体的，春天是其繁殖季节。\n#科普# #生物# #动物# #有趣冷知识# #海洋动物# #奇妙的动物# #和大自然亲密接触#"
  },
  {
    title: "结巴鸟|每天认识一种奇妙动物041",
    content: "蓝脚鲣鸟是鹈形目鲣鸟科鲣鸟属鸟类，又叫结巴鸟。\n嘴粗壮，近似圆锥形，上下嘴缘都为锯齿状；嘴喙上没有鼻孔；喉囊发达；翅膀狭窄，长而尖；脖子粗壮。\n鸟喙为暗绿色、蓝色或灰色；眼晴呈黄色，雌鸟的瞳孔较雄鸟稍大；脸上的皮肤黝黑并有奇异的眼袋；头部和颈部有浓重的棕色和白色条纹；翅膀、尾巴和下体为黑褐色，背面和腹部羽毛为白色；脚蹼为蓝色。\n蓝脚鲣鸟的长相非常滑稽，乍看之下就像小丑一样，极具特色，是加拉帕戈斯群岛色彩最丰富的鸟类之一。已成为濒危鸟类，被列为中国国家二级保护动物。\n主要食物为鱼类，如沙丁鱼、凤尾鱼、鲭鱼以及一些鱿鱼和飞鱼等。\n蓝脚鲣鸟主要分布在美国南加利福尼亚到秘鲁北面的太平洋地区，喜欢栖息于热带海洋、海岬和岛屿上。除了繁殖期以外，大多数时间都在海上活动。\n#和大自然亲密接触# #鸟类# #鸟类科普# #野生动物# #神奇动物# #奇妙动物# #万物皆有灵性# #科普# #动物科普# #萌宠# #动物园# #动物世界# #人与自然# #动物# #动物百科# #鸟类图鉴# #亲子教育# #搞笑图片#"
  },
  {
    title: "每天认识一种有趣动物｜狞猫",
    content: "『凶狠的美丽野猫』\n🍊拉丁学名：Caracal caracal\n🍊外文名：Caracal cat\n🍊别称：狞猫因栖息在干旱地带，又被称为沙漠猞猁。\n🍊分类：界 动物界、门 脊索动物门、纲 哺乳纲、目 食肉目、科 猫科、属 狞猫属、种 狞猫、亚门 脊椎动物亚门、亚属 猫亚属、亚纲 兽亚纲、亚科 猫亚科、亚种 9亚种\n🍊驯养：狞猫很容易被驯服，在伊朗和印度等国曾被当作猎猫，在美国，它们又成了圈养于家中的宠物。它们性情温顺，能很快适应和人类一起生活。\n🍊栖息环境：狞猫主要分布在非洲以及亚洲的西部、中部和南部等地。狞猫栖息在森林、多石的高山、热带稀树草原和灌木丛林地一带，常在洞穴和岩石裂缝中休息。\n🍊生活习性：狞猫是夜行性动物，喜欢独居，擅长爬树，领域性较强，跳跃能力较强，不爱叫，偶尔发出和豹相似的叫声，白天躺在洞穴中，半夜外出捕猎。狞猫主要以大小哺乳动物和鸟类等为食，有时会袭击家畜。\n🍊繁殖方式：狞猫全年可繁殖，妊娠期为68-81天，每胎2-3只。在人工饲养下狞猫寿命可达19年。\n#保护动物# #奇妙生物圈# #动物# #小动物# #科普# #生物# #动物# #猫# #狞猫# #灵感# #素材# #福瑞控# #和大自然亲密接触# #绘画素材#"
  },
  {
    title: "每天了解一种趣味动物👀炉管海绵",
    content: "🌿中文名：炉管海绵\n🌿英文名：stove-pipe sponge\n🍀炉管海绵是一种海生生物，它凸出的眼睛、宽宽的大嘴、蓝色的外表，都像极了甜饼怪。\n🍀据英国《每日邮报》2013年9月22日报道，摄影师Mauricio Handler在加勒比海水域潜水时，意外拍到一种罕见动物—炉管海绵(stove-pipe sponge)。画面中，一只炉管海绵张大管状的眼睛和嘴巴，十分怪异恐怖，让人想起了美国儿童节目《芝麻街》中张大眼睛和嘴巴吃饼干的玩偶的样子，但炉管海绵可不喜欢吃饼干，而是以浮游生物为生。\n🍀谈起这段神奇的邂逅，摄影师毛利西奥说：\"我是无意中发现这个不寻常的海洋生物的。看到它时，我非常吃惊，从来没有人拍过这个东西。我把它翻过来摆成个更像人物的造型拍了下来。\"\n#和大自然亲密接触# #动物百科# #动物科普# #奇妙生物圈# #奇妙的动物# #动物# #海洋生物# #海洋动物# #炉管海绵# #邂逅海洋动物# #惊艳我的海洋动物# #神奇动物# #自然教育# #亲子教育# #趣味知识科普# #涨知识# #分享知识#"
  },
  {
    title: "变装精灵～",
    content: "———\n中文名：白鼬\n英文名：Stoat\n拉丁名：Mustela erminea\n命名作者：林奈Linnaeus, 1758\n.\n界：动物界 Animalia\n门：脊索动物门 Chordata\n纲：哺乳纲 Mammalia\n目：食肉目 Carnivora\n科：鼬科 Mustelidae\n属：鼬属 Mustela\n📍分布范围：分布于从欧洲和前苏联到达日本和北美北部以及中国的黑龙江、内蒙古、甘肃、吉林、新疆、辽宁等地\n🕊️外形特征：形似黄鼬，身体细长，四肢短小；体长25～35厘米，尾长6～10厘米；毛色随季节变化，夏季背部毛色为灰棕色，腹部为白色，足背为灰白色；冬季除了尾部毛黑色，全身纯白。\n🪺繁殖方式：白鼬发情期约在5～6月，孕期9～10个月，每产8～12崽，哺乳期30～40天，幼崽由雌雄共同抚育，寿命3～4年。\n🍒食物：夜行，一般单独活动，以鼠、鸟、兔、鱼等为食，也吃植物、浆果等，捕捕能力顶端，听觉、十分灵敏。\n🌳栖息地：多见于森林地区到荒漠、及3000米以上的高山林区。草原草甸、沼泽地、河谷地以及半荒漠的沙丘及耕作地，会用大象、蟑螂和气味标记自己的领地，它们不会自己筑巢，而是占领其他动物的洞穴。\n✅保护级别：IUCN3.1 无危（LC），白鼬的食物以对人类有害的啮齿动物为主，已被列入中国《国家保护的有益的或者有重要经济、科学研究价值的陆生野生动物名录》。\n#白鼬##小白鼬##可爱小动物##自然美学##自然教育##自然科普# #地球生物# #神奇生物##动物##保护动物##动物科普##博物学#"
  },
  {
    title: "每天了解一种趣味动物👀紫貂",
    content: "🌿中文名：紫貂\n🌿拉丁学名：Martes zibellina\n🌿别称：黑貂、林貂、貂、貂鼠、赤貂、大叶子\n🍀形态特征：紫貂四肢短健，但躯体细长；后肢比前肢稍长，前后肢均具五趾，具肉垫；弯曲的利爪有半伸缩性；眼睛大而有神，耳壳大且直立，略呈三角形；尾巴粗大而尾毛蓬松，鼻部中央有明显纵沟，耳下缘有双层附耳；通体毛色基本一致，为黑褐色或黄褐色，稍掺有白色针毛；头部具不明显或不规则的黄白色喉斑。\n🍀分布范围：紫貂分布于中国黑龙江的大兴安岭、小兴安岭、老爷岭、张广才岭、完达山、吉林的长白山、辽宁的林海雪原，以及新疆北部的阿尔泰山地等地。在芬兰、日本、韩国、朝鲜、蒙古、波兰、俄罗斯也有分布。栖息于海拔800-1600米气候寒冷的针阔叶混交林和亚寒带针叶林中。\n🍀生活习性：紫貂善于攀树，行动敏捷灵巧，活动于密林深处。筑巢于石缝、树洞及树根下；通常营定居生活，但因食物的丰度和气候变化而常游荡迁移，亦常住简单的临时休息的巢穴。除交配期外，多独居；其视、听敏锐，行动快捷，一受惊扰，瞬间便消失在树林中。昼夜均能活动觅食，但以夜间居多。食物短缺时，白天也出来猎食，活动范围在5-10平方公里之内。多在地上捕捉猎物，攀援爬树也很灵活。冬季食物短缺时，就迁移到低山地带，待天气转暖时再返回。\n🍀保护现状：列入中国《国家重点保护野生动物名录》（2021年2月5日）一级。\n#和大自然亲密接触# #动物百科# #动物科普# #动物# #野生动物# #紫貂# #自然教育# #亲子教育# #奇妙的动物# #趣味知识科普#"
  },
  {
    title: "每天了解一种趣味动物👀水滴鱼",
    content: "🌿中文名：水滴鱼\n🌿拉丁学名：Psychrolutes marcidus\n🌿别名：忧伤鱼、波波鱼、软隐棘杜父鱼\n🍀形态特征：水滴鱼全身没有骨头和肌肉，全身成凝胶状；体态延长，头部宽大而向后渐细小；头部没有棱棘；脑颅上有发达的骨弓，骨弓上无骨棘；眼间宽阔，大于眼睛的直径；身体上没有鱼鳞；口大，上下颌有数列圆锥状齿；皮肤松垮，腹鳍很小，背鳍通常连续，棘常隐于皮下。\n🍀栖息环境：水滴鱼生活在澳大利亚和塔斯马尼亚沿岸600~1200米的海底当中，水压比海平面高数十倍，人类很难达到其栖息地，所以很少被发现。\n🍀趣味新闻：为了保护濒危的丑陋动物，英国动物保护人士想了一个办法：发起\"没有最丑，只有更丑\"的\"选丑\"比赛。这场比赛结果出炉，生活在大洋深处的怪鱼水滴鱼\"荣登\"榜首。\n#和大自然亲密接触# #海洋生物# #海洋动物# #惊艳我的海洋动物# #奇妙生物圈# #大自然# #奇妙的动物# #动物百科# #神奇动物# #惊艳我的海洋动物# #神奇动物在这里# #自然教育# #知识分享# #趣味知识科普# #知识科普# #涨知识#"
  },
  {
    title: "每天了解一种动物｜象鼩",
    content: "🍭中文名：象鼩\n🍭别名：跳鼩\n🍡象鼩生活在非洲的热带森林中，象鼩身形像松鼠，但更小巧。它们会不停地奔跑于地面或爬上树寻找昆虫蠕虫、小型脊椎动物和果实。象鼩的脚趾外张，爪子锋利，非常适合抓住树皮或岩石；而且它们的长尾巴可以起到平衡作用。象鼩一般手捧食物坐着吃，这种做法可以使它们更好地防御鸟类、蛇和细尾象鼩等天敌的偷袭。\n🍡象鼩白天在其领域周围用其强壮的后腿和长尾像袋鼠一样跳跃寻食。主要是吃昆虫及其他细小的生物，尤其是甲虫、蜘蛛、蠕虫、蚁及白蚁，大部份都是从叶子堆中找到，另外它们亦会吃一些种子及嫩枝。有些种类也以植物的芽、浆果和其他部分为食。\n🍡象鼩并非高度群居的动物，很多都是一对生活的，共同保护领土。它们会用臭腺来划分自己的领地。东非象鼩属会在泥土挖像袋狸款式的细小圆锥穴，但其他的则会利用天然裂缝或以树叶筑巢。象鼩占据各种栖息地．从岩质的小山到草地、森林下的地面等的高纬度的森林地带。\n#和大自然亲密接触# #动物百科# #可爱动物# #保护动物# #动物科普# #治愈系动物# #奇妙生物圈# #有趣的动物# #野生动物# #动物#"
  }
];

// 生成随机的帖子内容
const generatePostContent = (type) => {
  const baseContent = type === 1
    ? "这是我发现的一种植物，它有着美丽的外形和独特的生长习性。喜欢在阳光充足的环境中生长，需要适当的水分和养分。"
    : "这是我观察到的一种动物，它有着独特的生活习性和行为模式。在自然环境中，它们扮演着重要的生态角色。";

  const additionalContent = [
    "希望大家能帮忙鉴定一下具体的种类。",
    "对这方面有研究的朋友可以分享一下经验吗？",
    "这个发现让我非常兴奋，想和大家一起分享。",
    "关注生物多样性保护很重要，希望更多人能参与进来。",
    "如果有更多相关信息，欢迎在评论区交流。"
  ];

  return `${baseContent} ${additionalContent[Math.floor(Math.random() * additionalContent.length)]}`;
};

// 帖子图片URL
const plantImageUrls = [
  '/uploads/images/plant-1.jpg',
  '/uploads/images/plant-2.jpg',
  '/uploads/images/plant-3.jpg',
  '/uploads/images/plant-4.jpg',
  '/uploads/images/plant-5.jpg',
  '/uploads/images/plant-6.jpg',
  '/uploads/images/plant-7.jpg',
  '/uploads/images/plant-8.jpg',
  '/uploads/images/plant-9.jpg',
  '/uploads/images/plant-10.jpg'
];

const animalImageUrls = [
  '/uploads/images/animal-1.jpg',
  '/uploads/images/animal-2.jpg',
  '/uploads/images/animal-3.jpg',
  '/uploads/images/animal-4.jpg',
  '/uploads/images/animal-5.jpg',
  '/uploads/images/animal-6.jpg',
  '/uploads/images/animal-7.jpg',
  '/uploads/images/animal-8.jpg',
  '/uploads/images/animal-9.jpg',
  '/uploads/images/animal-10.jpg'
];

// 帖子视频URL
const videoUrls = [
  '/uploads/videos/video-1.mp4',
  '/uploads/videos/video-2.mp4',
  '/uploads/videos/video-3.mp4'
];

// 地理位置
const locations = [
  '北京市海淀区',
  '上海市浦东新区',
  '广州市天河区',
  '深圳市南山区',
  '杭州市西湖区',
  '成都市锦江区',
  '重庆市渝中区',
  '西安市雁塔区',
  '南京市鼓楼区',
  '武汉市武昌区'
];

// 随机选择数组中的一个元素
const randomPick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// 随机数字生成
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 随机生成帖子数据
const generatePosts = async () => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      console.log('没有用户数据，无法创建帖子');
      return;
    }

    // 获取动物用户ID（更新用户名引用）
    const dongwuUser = users.find(user => user.username === '动物君');
    const dongwuUserId = dongwuUser ? dongwuUser.id : users[0].id;

    const posts = [];
    const postImages = [];
    const postVideos = [];

    // 创建植物帖子
    for (let i = 0; i < plantPosts.length; i++) {
      const plantPost = plantPosts[i];
      const post = {
        id: `post-plant-${i + 1}`,
        title: plantPost.title,
        content: plantPost.content,
        type: 1, // 植物类型为1
        mediaType: plantPost.mediaType,
        likes: Math.floor(Math.random() * 1000),
        views: Math.floor(Math.random() * 5000),
        userId: users[Math.floor(Math.random() * users.length)].id,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        updatedAt: new Date()
      };
      posts.push(post);

      // 为植物帖子添加图片
      postImages.push({
        postId: post.id,
        imageUrl: `http://localhost:3000${plantPost.imageUrl}`,
        position: 0,
        description: plantPost.title,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      // 如果是视频帖子，添加视频信息
      if (plantPost.mediaType === 'video' && plantPost.videoUrl) {
        postVideos.push({
          postId: post.id,
          videoUrl: `http://localhost:3000${plantPost.videoUrl}`,
          coverUrl: `http://localhost:3000${plantPost.imageUrl}`,
          duration: Math.floor(Math.random() * 300) + 30, // 30-330秒
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    }

    // 创建动物图片帖子
    for (let i = 0; i < 10; i++) {
      const animalPost = animalPosts[i];
      const post = {
        id: `post-animal-${i + 1}`,
        title: animalPost.title,
        content: animalPost.content,
        type: 2, // 动物类型为2
        mediaType: 'image',
        likes: Math.floor(Math.random() * 800),
        views: Math.floor(Math.random() * 4000),
        userId: users[Math.floor(Math.random() * users.length)].id, // 随机分配用户
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        updatedAt: new Date()
      };
      posts.push(post);

      // 移除ID字段，让数据库自动生成
      postImages.push({
        postId: post.id,
        imageUrl: `http://localhost:3000/uploads/images/animal-${i + 1}.png`,
        position: 0,
        description: animalPost.title,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // 创建视频帖子
    for (let i = 1; i <= 10; i++) {
      const isPlant = i <= 5;
      const postType = isPlant ? 1 : 2; // 植物为1，动物为2
      const category = isPlant ? 'plant' : 'animal';
      const post = {
        id: `post-video-${i}`,
        title: `${isPlant ? '植物' : '动物'}视频分享 ${i}`,
        content: `精彩的${isPlant ? '植物生长' : '动物行为'}视频，记录了美好的瞬间。视频编号：${i}`,
        type: postType,
        mediaType: 'video',
        coverImage: `http://localhost:3000/uploads/images/${category}_video_cover_${i}.jpg`,
        mediaUrl: `http://localhost:3000/uploads/videos/${category}_video_${i}.mp4`,
        likes: Math.floor(Math.random() * 1500),
        views: Math.floor(Math.random() * 8000),
        userId: users[Math.floor(Math.random() * users.length)].id,
        createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        updatedAt: new Date()
      };
      posts.push(post);

      // 移除ID字段，让数据库自动生成
      postVideos.push({
        postId: post.id,
        videoUrl: `http://localhost:3000/uploads/videos/${category}_video_${i}.mp4`,
        coverUrl: post.coverImage,
        duration: Math.floor(Math.random() * 300) + 30, // 30-330秒
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // 批量插入数据
    await Post.bulkCreate(posts);
    await PostImage.bulkCreate(postImages);
    await PostVideo.bulkCreate(postVideos);

    console.log(`成功创建 ${posts.length} 个帖子（${postImages.length} 个图片帖子，${postVideos.length} 个视频帖子）`);
  } catch (error) {
    console.error('创建帖子数据失败:', error.message);
    throw error;
  }
};

module.exports = generatePosts;