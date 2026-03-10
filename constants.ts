
import { Country } from './types';

// Helper to get reliable images for categories to avoid broken links
const IMAGES = {
  luxuryHotel: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1080&auto=format&fit=crop'
  ],
  food: [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1080&auto=format&fit=crop'
  ]
};

// Function to rotate images deterministically
const getImg = (type: 'luxuryHotel' | 'food', index: number) => IMAGES[type][index % IMAGES[type].length];

export const STATIC_COUNTRIES: Country[] = [
  {
    id: 'egypt',
    name: 'مصر',
    englishName: 'Egypt',
    region: 'Arab World',
    description: 'أرض الفراعنة ومهد الحضارات، حيث يلتقي التاريخ بالسحر والغموض. من أهرامات الجيزة الخالدة إلى شواطئ البحر الأحمر الساحرة.',
    heroImage: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'أكتوبر إلى أبريل',
    culturalTips: ['احترم العادات المحلية والملابس المحتشمة', 'جرب الكشري والفول والطعمية', 'المساومة جزء أساسي من الشراء'],
    summerActivities: ['الغوص في الشعاب المرجانية في البحر الأحمر', 'الاستجمام في منتجعات الساحل الشمالي', 'مهرجان العلمين الجديدة', 'رحلات السفاري البحرية في الغردقة'],
    winterActivities: ['رحلة نيلية فاخرة بين الأقصر وأسوان', 'زيارة معابد فيلة وأبو سمبل', 'التخييم في الصحراء البيضاء', 'استكشاف خان الخليلي والقاهرة الفاطمية'],
    landmarks: [
      {
        id: 'pyramids',
        name: 'أهرامات الجيزة',
        category: 'History',
        description: 'إحدى عجائب الدنيا السبع القديمة، تقف شامخة كشاهد على عظمة الهندسة المصرية القديمة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'تحت سماء مصر الصافية، تنتصب الأهرامات كحراس للخلود، تتحدى الزمن وقوانين الطبيعة. عندما تقف أمام الهرم الأكبر، أنت لا تنظر إلى مجرد أحجار متراصة، بل تحدق في طموح البشرية للوصول إلى الآلهة. تقول الأساطير إن النجوم اصطفت بدقة متناهية لتشير إلى قممها لحظة بنائها، وإن ممرات سرية لا تزال تخفي كنوزاً ولعنات لم تُكتشف بعد. صوت الرياح هنا يحمل همسات البنائين القدامى، وكل حجر يروي قصة عرق ودماء وإيمان بحياة أبدية تتجاوز الموت.',
        visitorTips: ['تعال مبكراً جداً (8 صباحاً)', 'ارتد أحذية مريحة للمشي في الرمال', 'شاهد عرض الصوت والضوء ليلاً']
      },
      {
        id: 'luxor-temple',
        name: 'معبد الأقصر',
        category: 'History',
        description: 'مجمع معابد مصري قديم يقع على الضفة الشرقية لنهر النيل.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'مع غروب الشمس، تتحول أعمدة معبد الأقصر إلى عمالقة من نور وظلال، تروي حكاية "أوبت" السنوي حيث كان الإله آمون يغادر الكرنك ليزور هذا المعبد المقدس. النقوش على الجدران ليست مجرد رسومات، بل هي سجل حي لاحتفالات صاخبة بالموسيقى والرقص والقرابين. المشي بين هذه الصروح ليلاً يجعلك تشعر وكأنك في حضرة الملوك العظام رمسيس الثاني وأمنحتب الثالث، حيث التاريخ يتنفس بجانبك.',
        visitorTips: ['الزيارة المسائية أفضل للتصوير', 'يمكنك المشي عبر طريق الكباش']
      },
      {
        id: 'abu-simbel',
        name: 'معبد أبو سمبل',
        category: 'History',
        description: 'معبدان صخريان ضخمان في جنوب مصر.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'في أقصى الجنوب، نحت رمسيس العظيم الجبل ليخلد ذكراه وذكرى محبوبته نفرتاري. المعجزة هنا ليست فقط في ضخامة التماثيل التي تحرس المدخل بنظراتها الثاقبة، بل في تعامد الشمس الهندسي الدقيق الذي يحدث مرتين في العام، مخترقاً ظلام المعبد ليضيء وجه الملك في قدس الأقداس. إنها رسالة فلكية ومعمارية من الماضي السحيق تخبرنا أن الفراعنة فهموا الكون بطريقة لا نزال نحاول استيعابها.',
        visitorTips: ['احجز رحلة الطيران مبكراً', 'حاول زيارته في أيام تعامد الشمس']
      },
      {
        id: 'khan-el-khalili',
        name: 'خان الخليلي',
        category: 'Hidden Gem',
        description: 'سوق قديم نابض بالحياة في القاهرة الإسلامية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'متاهة من الأزقة الضيقة تفوح منها روائح التوابل والعود والبخور، حيث يمتزج صوت الأذان بضجيج الباعة والمشترين. هنا، الزمن توقف في عصر المماليك. كل زاوية، وكل مشربية، وكل دكان نحاس يحكي حكايات من "ألف ليلة وليلة". الجلوس في مقهى الفيشاوي ليس مجرد احتساء للشاي، بل هو استنشاق لروح القاهرة القديمة، حيث جلس الأدباء والفنانون يستلهمون سحر الشرق.',
        visitorTips: ['زر مقهى الفيشاوي التاريخي', 'جرب شاي النعناع المصري']
      },
      {
        id: 'valley-of-kings',
        name: 'وادي الملوك',
        category: 'History',
        description: 'المكان الذي اختاره ملوك الدولة الحديثة ليكون مثواهم الأخير.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'في قلب الجبل الصامت، اختار فراعنة الدولة الحديثة أن يخفوا كنوزهم ومومياواتهم بعيداً عن أعين اللصوص، لكنهم لم يدركوا أنهم يصنعون أعظم متحف مفتوح في العالم. النزول إلى المقابر الملونة بألوان زاهية كأنها رُسمت بالأمس هو رحلة إلى العالم الآخر كما تخيله المصري القديم. هنا، تشعر برهبة الموت وجلال الملكية، وتدرك لماذا سحر هذا الوادي هوارد كارتر حتى اكتشف مقبرة توت عنخ آمون.',
        visitorTips: ['التذكرة تشمل 3 مقابر فقط', 'مقبرة توت عنخ آمون تتطلب تذكرة خاصة']
      }
    ],
    restaurants: [
      {
        name: 'نجيب محفوظ كافيه',
        description: 'مقهى ومطعم تاريخي يقع في قلب خان الخليلي يقدم المأكولات المصرية الأصيلة.',
        cuisine: 'مصري تقليدي',
        rating: 4.5,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'زيتوني',
        description: 'مطعم فاخر في فندق فور سيزونز يقدم بوفيه مصري وعالمي بإطلالة على النيل.',
        cuisine: 'عالمي / مصري',
        rating: 4.8,
        imageUrl: getImg('food', 1)
      },
      {
        name: 'أبو السيد',
        description: 'ديكور كلاسيكي يعود للزمن الجميل مع قائمة طعام تشمل أشهى الأطباق المنزلية المصرية.',
        cuisine: 'مصري',
        rating: 4.6,
        imageUrl: getImg('food', 2)
      }
    ],
    hotels: [
      {
        name: 'ماريوت مينا هاوس',
        stars: 5,
        price: '300$+',
        rating: 9.2,
        description: 'يقع عند سفح الأهرامات مباشرة، مكان تاريخي استضاف الملوك والرؤساء.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'فورسيزونز نايل بلازا',
        stars: 5,
        price: '400$+',
        rating: 9.0,
        description: 'رفاهية مطلقة في قلب القاهرة مع إطلالات ساحرة على نهر النيل.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'سوفيتيل ليجند أولد كتراكت',
        stars: 5,
        price: '350$+',
        rating: 9.6,
        description: 'قصر تاريخي في أسوان، حيث كتبت أغاثا كريستي روايتها الشهيرة.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'المديرة (الأقصر)',
        stars: 4,
        price: '200$+',
        rating: 9.4,
        description: 'فندق بوتيك فريد من نوعه يتميز بالعمارة الشرقية والحدائق الغناء.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'ريكسوس بريميوم سيغيت',
        stars: 5,
        price: '250$+',
        rating: 9.3,
        description: 'منتجع شامل فاخر في شرم الشيخ يضم حديقة مائية وشعاباً مرجانية خاصة.',
        imageUrl: getImg('luxuryHotel', 4)
      }
    ]
  },
  {
    id: 'usa',
    name: 'الولايات المتحدة',
    englishName: 'USA',
    region: 'Americas',
    description: 'أرض الفرص والأحلام، من ناطحات السحاب في نيويورك إلى الطبيعة في الغرب.',
    heroImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['البقشيش إلزامي', 'احترم المساحة الشخصية', 'المواعيد مهمة'],
    summerActivities: ['رحلات الطريق (Road Trips) عبر الطريق 66', 'زيارة المتنزهات الوطنية مثل يلوستون', 'الاستمتاع بشواطئ كاليفورنيا وفلوريدا', 'حضور مباريات البيسبول'],
    winterActivities: ['التزلج في منتجعات آسبن وكولورادو', 'احتفالات الكريسماس في نيويورك', 'زيارة هاواي للهروب من البرد', 'التزلج على الجليد في سنترال بارك'],
    landmarks: [
      {
        id: 'statue-of-liberty',
        name: 'تمثال الحرية',
        category: 'History',
        description: 'الرمز العالمي للحرية والديمقراطية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'تخيل شعور ملايين المهاجرين الذين أبحروا عبر المحيط الأطلسي، منهكين وخائفين، لتكون هذه السيدة الحاملة للشعلة هي أول ما تقع عليه أعينهم، مبشرة بوعد حياة جديدة. ليست مجرد تمثال من النحاس، بل هي حارسة الميناء وأم المنفيين. الوقوف تحت ظلها يجعلك تشعر بنبض الحلم الأمريكي والتاريخ الحي لأمة بنيت على أكتاف الطامحين للحرية.',
        visitorTips: ['احجز تذاكر التاج قبل أشهر', 'استقل العبارة المجانية لجزيرة ستاتن']
      },
      {
        id: 'grand-canyon',
        name: 'جراند كانيون',
        category: 'Nature',
        description: 'أخدود عظيم حفره نهر كولورادو.',
        imageUrl: 'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?q=80&w=2076&auto=format&fit=crop',
        story: 'عندما تقف على حافة هذا الأخدود العظيم، يتلاشى إحساسك بالزمن وتدرك ضآلة الإنسان أمام عظمة الطبيعة. طبقات الصخور الملونة تحكي قصة الأرض لملايين السنين، بينما يتدفق نهر كولورادو في الأسفل كنحتٍ صبور لا يكل. المشهد هنا ليس مجرد منظر طبيعي، بل هو لوحة جيولوجية حية تتغير ألوانها مع كل حركة للشمس، مشهد يخلب الألباب ويحبس الأنفاس.',
        visitorTips: ['شروق الشمس عند نقطة "ماثر"', 'الحافة الجنوبية مفتوحة طوال العام']
      },
      {
        id: 'times-square',
        name: 'تايمز سكوير',
        category: 'Modern',
        description: 'التقاطع التجاري الأكثر شهرة في العالم.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'قلب العالم النابض الذي لا ينام أبداً. هنا، تحيل الشاشات العملاقة الليل إلى نهار ساطع، وتختلط اللغات والأعراق في نهر بشري متدفق. إنه مسرح الفوضى المنظمة، حيث تتنافس العلامات التجارية على انتباهك، وتشعر بأنك في مركز الكون الحديث. الطاقة في هذا المكان كهربائية، صاخبة، ومعدية، تجربة حسية تغمرك بالأضواء والأصوات والحركة.',
        visitorTips: ['زر المكان ليلاً', 'احذر من الشخصيات الكرتونية']
      },
      {
        id: 'yellowstone',
        name: 'منتزه يلوستون',
        category: 'Nature',
        description: 'أول حديقة وطنية في العالم.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'أرض تغلي تحت قدميك، حيث تنفجر المياه الحارة من باطن الأرض لترسم لوحات بألوان قوس قزح حول الينابيع. هنا تتجول الدببة والذئاب والبيسون بحرية كما كانت قبل ظهور البشر. المشي بين السخانات النشطة يجعلك تشعر بقوة البركان النائم تحت المنتزه، تذكير دائم بأن الأرض كوكب حي ومتنفس.',
        visitorTips: ['حافظ على مسافة آمنة من الحيوانات', 'زر نبع "المنشور الكبير"']
      },
      {
        id: 'golden-gate',
        name: 'جسر البوابة الذهبية',
        category: 'Modern',
        description: 'الجسر المعلق الأحمر الشهير في سان فرانسيسكو.',
        imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2089&auto=format&fit=crop',
        story: 'يبرز هذا العملاق الأحمر وسط الضباب الكثيف الذي يلف خليج سان فرانسيسكو كبوابة لعالم آخر. إنه انتصار للإرادة البشرية على قوى الطبيعة، حيث تحدى المهندسون التيارات القوية والرياح العاتية لبناء ما قيل إنه مستحيل. المشي عليه وأنت معلق بين السماء والمحيط يمنحك شعوراً بالحرية والانطلاق لا يضاهى.',
        visitorTips: ['استأجر دراجة واعبر الجسر', 'أفضل الصور من نقطة "Battery Spencer"']
      }
    ],
    restaurants: [
      {
        name: 'Eleven Madison Park',
        description: 'تجربة تذوق نباتية استثنائية في نيويورك (3 نجوم ميشلان).',
        cuisine: 'Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'The French Laundry',
        description: 'أيقونة المطبخ الأمريكي الحديث في وادي نابا.',
        cuisine: 'فرنسي / أمريكي',
        rating: 4.9,
        imageUrl: getImg('food', 4)
      },
      {
        name: 'Joe\'s Pizza',
        description: 'أشهر شريحة بيتزا كلاسيكية في نيويورك.',
        cuisine: 'Street Food',
        rating: 4.7,
        imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop'
      }
    ],
    hotels: [
      {
        name: 'The Plaza New York',
        stars: 5,
        price: '800$+',
        rating: 9.1,
        description: 'أيقونة نيويورك التاريخية المطلة على سنترال بارك، رمز للفخامة.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Bellagio Las Vegas',
        stars: 5,
        price: '300$+',
        rating: 8.9,
        description: 'يشتهر بنوافيره الراقصة وعروضه الفنية وتصميمه الإيطالي.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'The Beverly Hills Hotel',
        stars: 5,
        price: '900$+',
        rating: 9.4,
        description: 'القلعة الوردية، ملاذ مشاهير هوليوود الأسطوري.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Amangiri',
        stars: 5,
        price: '3000$+',
        rating: 9.8,
        description: 'منتجع صحراوي فاخر في يوتا يمتزج مع الطبيعة الصخرية.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: '1 Hotel South Beach',
        stars: 5,
        price: '600$+',
        rating: 9.0,
        description: 'فندق بيئي فاخر في ميامي مع مسابح على السطح وإطلالات محيطية.',
        imageUrl: getImg('luxuryHotel', 3)
      }
    ]
  },
  {
    id: 'uk',
    name: 'المملكة المتحدة',
    englishName: 'UK',
    region: 'Europe',
    description: 'موطن الملوك والأدباء، تمزج بين القلاع العريقة والمدن الحديثة.',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'مايو إلى سبتمبر',
    culturalTips: ['الوقوف في الطابور مقدس', 'الحديث عن الطقس شائع', 'الشاي بالحليب مشروب وطني'],
    summerActivities: ['حضور مهرجان إدنبرة للفنون', 'النزهات في حدائق هايد بارك', 'زيارة السواحل الكورنية', 'مشاهدة بطولة ويمبلدون للتنس'],
    winterActivities: ['أسواق الكريسماس في لندن', 'احتفالات الهوغماناي في اسكتلندا', 'زيارة المتاحف المجانية', 'الجلوس بجانب المدفأة في حانة تقليدية'],
    landmarks: [
      {
        id: 'big-ben',
        name: 'ساعة بيج بن',
        category: 'History',
        description: 'أشهر ساعة في العالم ورمز لندن الخالد.',
        imageUrl: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1965&auto=format&fit=crop',
        story: 'أكثر من مجرد ساعة، إنها نبض لندن الذي لا يتوقف. وقفت شامخة عبر الحروب والقصف، تدق أجراسها لتعلن صمود المدينة في أحلك الأوقات. عندما تسمع دقاتها العميقة تتردد عبر نهر التايمز، تشعر برهبة التاريخ الإمبراطوري. هذا البرج القوطي المهيب ليس مجرد معلم سياحي، بل هو الحارس الأمين للوقت في قلب العاصمة البريطانية.',
        visitorTips: ['أفضل صور من جسر وستمنستر', 'استمع للدقات عند رأس الساعة']
      },
      {
        id: 'stonehenge',
        name: 'ستونهنج',
        category: 'History',
        description: 'دائرة حجرية غامضة تعود لعصور ما قبل التاريخ.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'كيف وصلت هذه الأحجار العملاقة التي تزن أطناناً إلى هذا السهل المعزول قبل آلاف السنين؟ لغز حير العلماء والمؤرخين والسحرة. هل كان معبداً للشمس؟ مقبرة ملكية؟ أم مرصداً فلكياً؟ الوقوف أمام هذه الدائرة الصامتة يملؤك بشعور غامض، وكأن الأحجار تهمس بأسرار طقوس منسية وديانات قديمة عبدت الطبيعة والنجوم.',
        visitorTips: ['احجز التذاكر مسبقاً', 'زر المركز التعريفي']
      },
      {
        id: 'tower-of-london',
        name: 'برج لندن',
        category: 'History',
        description: 'قلعة تاريخية كانت قصراً وسجناً وخزانة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'جدران هذه القلعة مخضبة بدماء الملكات والنبلاء والخونة. هنا أُعدمت آن بولين، وسُجن الأمراء الصغار واختفوا للأبد. تحرس الغربان السوداء هذا المكان بصرامة، وتقول الأسطورة إنه إذا غادرت الغربان، سيسقط التاج وتسقط بريطانيا. بين بريق جواهر التاج الملكي وظلال الزنازين المظلمة، يروي البرج حكاية السلطة والموت في تاريخ إنجلترا.',
        visitorTips: ['انضم لجولة مع حراس "البيفيتر"', 'شاهد جواهر التاج']
      },
      {
        id: 'edinburgh-castle',
        name: 'قلعة إدنبرة',
        category: 'History',
        description: 'حصن تاريخي يسيطر على أفق مدينة إدنبرة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'شامخة فوق صخرة بركانية خامدة، تطل القلعة على المدينة كحارس أبدي. شهدت حصارات وحروباً دموية أكثر من أي مكان آخر في بريطانيا، ومن هنا دافع الأسكتلنديون بشراسة عن استقلالهم. صوت المدفع الذي يطلق يومياً عند الساعة الواحدة يذكر السكان والزوار بأن هذا الحصن لم يكن مجرد قصر، بل كان قلب اسكتلندا العسكري والملكي النابض.',
        visitorTips: ['المناظر من الأسوار خيالية', 'زر كنيسة سانت مارجريت']
      },
      {
        id: 'lake-district',
        name: 'منطقة البحيرات',
        category: 'Nature',
        description: 'منطقة جبلية خلابة ألهمت الشعراء والكتاب.',
        imageUrl: 'https://images.unsplash.com/photo-1473442240418-452f03b7ae40?q=80&w=2070&auto=format&fit=crop',
        story: 'تلال خضراء متموجة، وبحيرات زجاجية تعكس زرقة السماء، وقرى حجرية صغيرة تبدو وكأنها خرجت من كتاب قصص خيالية. هنا وجد الشعراء الرومانسيون إلهامهم، وهنا يمكنك أن تجد السلام بعيداً عن ضجيج العالم. الهدوء هنا ليس مجرد صمت، بل هو موسيقى الطبيعة التي تعيد شحن روحك وتجعلك تقع في حب الريف الإنجليزي.',
        visitorTips: ['قم برحلة بحرية', 'جرب كعكة الزنجبيل']
      }
    ],
    restaurants: [
      {
        name: 'Dishoom',
        description: 'مطعم شهير يقدم المأكولات الهندية بأسلوب مقاهي بومباي القديمة.',
        cuisine: 'هندي / كاجوال',
        rating: 4.8,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'The Fat Duck',
        description: 'مطعم هيستون بلومنثال الشهير بتجربة طعام جزيئية ومبتكرة.',
        cuisine: 'Fine Dining / تجريبي',
        rating: 4.9,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Sketch',
        description: 'مكان أيقوني في لندن يشتهر بديكوره الوردي الغريب والمذهل.',
        cuisine: 'أوروبي حديث',
        rating: 4.7,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'The Ritz London',
        stars: 5,
        price: '900$+',
        rating: 9.3,
        description: 'قمة الكلاسيكية الإنجليزية، وتجربة شاي الظهيرة فيه لا تفوت.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'The Savoy',
        stars: 5,
        price: '750$+',
        rating: 9.2,
        description: 'فندق تاريخي على نهر التايمز، يجمع بين الفخامة الإدواردية والآرت ديكو.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Claridge\'s',
        stars: 5,
        price: '850$+',
        rating: 9.5,
        description: 'جوهرة المايفير، المفضل لدى العائلة المالكة والمشاهير.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'The Balmoral',
        stars: 5,
        price: '500$+',
        rating: 9.1,
        description: 'أيقونة إدنبرة مع برج الساعة الشهير وإطلالة على القلعة.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Gleneagles',
        stars: 5,
        price: '600$+',
        rating: 9.4,
        description: 'منتجع غولف وسبا فاخر في الريف الاسكتلندي.',
        imageUrl: getImg('luxuryHotel', 2)
      }
    ]
  },
  {
    id: 'finland',
    name: 'فنلندا',
    englishName: 'Finland',
    region: 'Europe',
    description: 'أسعد دولة في العالم، وموطن شمس منتصف الليل والشفق القطبي.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'ديسمبر للثلج، يونيو للصيف',
    culturalTips: ['الصمت مقبول', 'السونا مقدسة', 'اخلع الحذاء في المنزل'],
    summerActivities: ['الاستمتاع بظاهرة شمس منتصف الليل', 'استئجار كوخ صيفي بجانب البحيرة', 'مهرجانات الموسيقى في هلسنكي', 'قطف التوت البري في الغابات'],
    winterActivities: ['مطاردة الشفق القطبي في لابلاند', 'التزلج مع حيوانات الرنة والهاسكي', 'زيارة قرية سانتا كلوز', 'تجربة السباحة في الجليد بعد الساونا'],
    landmarks: [
      {
        id: 'northern-lights-lapland',
        name: 'الشفق القطبي',
        category: 'Nature',
        description: 'عرض ضوئي طبيعي يرقص في سماء القطب الشمالي.',
        imageUrl: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?q=80&w=1964&auto=format&fit=crop',
        story: 'في صمت القطب الشمالي المتجمد، تشتعل السماء فجأة بألوان الأخضر والأرجواني الراقصة. تقول الأساطير الفنلندية إنها شرارات تتطاير من ذيل ثعلب ناري يركض عبر الثلوج. الوقوف تحت هذه السماء المشتعلة يجعلك تشعر برهبة كونية، وكأن الطبيعة تقدم عرضاً سحرياً خاصاً لك وحدك، تجربة روحية لا يمكن نسيانها.',
        visitorTips: ['ابتعد عن أضواء المدينة', 'أفضل وقت سبتمبر إلى مارس']
      },
      {
        id: 'santa-claus-village',
        name: 'قرية بابا نويل',
        category: 'Hidden Gem',
        description: 'المقر الرسمي لسانتا كلوز في روفانييمي.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'هنا يعيش سحر الطفولة طوال العام. يمكنك عبور الدائرة القطبية الشمالية ومقابلة سانتا كلوز الحقيقي في مكتبه، ورؤية الأقزام وهم يجهزون الهدايا. المكان يفوح برائحة الزنجبيل والقرفة، وأصوات أجراس الرنة تملأ الهواء. إنها رحلة إلى عالم القصص، حيث يصبح المستحيل ممكناً وتعود طفلاً مرة أخرى.',
        visitorTips: ['اركب عربات الرنة', 'أرسل بطاقة بريدية']
      },
      {
        id: 'helsinki-cathedral',
        name: 'كاتدرائية هلسنكي',
        category: 'History',
        description: 'كاتدرائية بيضاء بقبب خضراء تطل على ساحة مجلس الشيوخ.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'تقف شامخة بلونها الأبيض الناصع كمنارة ترحب بالقادمين من البحر. قبابها الخضراء والذهبية تلمع تحت شمس الصيف وتبدو كقلعة ثلجية أسطورية في الشتاء. درجات السلم المؤدية إليها هي ملتقى العشاق والأصدقاء. داخلها يسود هدوء مهيب، يعكس البساطة والوقار اللوثري، وتعتبر رمزاً لاستقلال فنلندا وهويتها الوطنية.',
        visitorTips: ['الدرج مكان للتجمع', 'الدخول مجاني']
      },
      {
        id: 'suomenlinna',
        name: 'سومينلينا',
        category: 'History',
        description: 'قلعة بحرية تاريخية مبنية على ست جزر.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'بنيت هذه القلعة البحرية العملاقة لحماية فنلندا من الغزوات، وشهدت معارك طاحنة وتغيرت راياتها عبر القرون. اليوم، تحولت المدافع القديمة والأسوار السميكة إلى مكان للسلام والنزهات العائلية. المشي بين جدرانها الصخرية ومخابئها السرية هو رحلة عبر الزمن العسكري، بينما تضرب أمواج البلطيق شواطئها بقوة.',
        visitorTips: ['الوصول بالعبارة', 'يوجد متحف وغواصة قديمة']
      },
      {
        id: 'nuuksio-national-park',
        name: 'حديقة نوكسيو',
        category: 'Nature',
        description: 'غابات وبحيرات خلابة بالقرب من هلسنكي.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'الهروب المثالي إلى الطبيعة الفنلندية النقية، حيث الغابات الكثيفة والبحيرات الزرقاء الصافية. هنا يمكنك سماع صوت الصمت الحقيقي، واستنشاق أنقى هواء في العالم. المشي في مساراتها يشعرك بالاتصال العميق بالأرض، وربما يحالفك الحظ لترى السناجب الطائرة أو تسمع نداء طيور الغابة. إنها ليست مجرد حديقة، بل علاج للروح.',
        visitorTips: ['مسارات المشي محددة', 'جرب الشواء']
      }
    ],
    restaurants: [
      {
        name: 'Olo',
        description: 'مطعم ميشلان في هلسنكي يقدم المطبخ الاسكندنافي الحديث.',
        cuisine: 'نورديك / Fine Dining',
        rating: 4.8,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Savotta',
        description: 'مطعم ريفي يقدم الأطباق الفنلندية التقليدية (لحم الرنة والدب).',
        cuisine: 'فنلندي تقليدي',
        rating: 4.6,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Löyly',
        description: 'مجمع سونا ومطعم بتصميم معماري خشبي رائع على البحر.',
        cuisine: 'عالمي / محلي',
        rating: 4.7,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Kakslauttanen Arctic Resort',
        stars: 4,
        price: '500$+',
        rating: 8.8,
        description: 'أكواخ زجاجية (Igloos) تتيح لك مشاهدة الشفق القطبي من سريرك.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop'
      },
      {
        name: 'Hotel Kämp',
        stars: 5,
        price: '350$+',
        rating: 9.3,
        description: 'الفندق الكبير الوحيد في هلسنكي، تاريخ من الفخامة منذ 1887.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Arctic TreeHouse Hotel',
        stars: 5,
        price: '400$+',
        rating: 9.1,
        description: 'أجنحة عصرية وسط الغابة الثلجية مع واجهات زجاجية بانورامية.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Hotel St. George Helsinki',
        stars: 5,
        price: '300$+',
        rating: 9.2,
        description: 'تصميم نورديك أنيق في مبنى تاريخي مع مجموعة فنية رائعة.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Levin Iglut',
        stars: 5,
        price: '450$+',
        rating: 9.0,
        description: 'أكواخ زجاجية فاخرة على قمة جبل ليفي، مثالية للأزواج.',
        imageUrl: getImg('luxuryHotel', 0)
      }
    ]
  },
  {
    id: 'switzerland',
    name: 'سويسرا',
    englishName: 'Switzerland',
    region: 'Europe',
    description: 'جوهرة جبال الألب، حيث القمم الثلجية والشوكولاتة الفاخرة.',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'يوليو للصيف، يناير للتزلج',
    culturalTips: ['احترم الهدوء', 'التحية بـ Grüezi', 'لا تتأخر عن المواعيد'],
    summerActivities: ['المشي لمسافات طويلة في جبال الألب', 'السباحة في بحيرة جنيف', 'ركوب الدراجات الجبلية', 'حضور مهرجان مونترو للجاز'],
    winterActivities: ['التزلج في زيرمات وسانت موريتز', 'ركوب القطارات البانورامية وسط الثلوج', 'الاسترخاء في المنتجعات الحرارية', 'تجربة الفوندو السويسري الدافئ'],
    landmarks: [
      {
        id: 'matterhorn',
        name: 'ماترهورن',
        category: 'Nature',
        description: 'الجبل الأكثر شهرة وتصويراً في العالم.',
        imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop',
        story: 'ينتصب وحيداً كسن عملاق يخترق السماء، شكله الهرمي المثالي جعله رمزاً للجبال في العالم. تاريخه مليء بقصص البطولة والمآسي للمتسلقين الذين حاولوا ترويضه. عندما تراه عند شروق الشمس وهو يتلون بالبرتقالي، تشعر بهيبة الطبيعة وجلالها الذي يجعلك عاجزاً عن الكلام. إنه ليس مجرد جبل، بل هو تحدي أزلي.',
        visitorTips: ['أفضل رؤية من زيرمات', 'اركب قطار جورنيرجرات']
      },
      {
        id: 'jungfraujoch',
        name: 'يونغفرايوخ',
        category: 'Nature',
        description: 'أعلى محطة قطار في أوروبا.',
        imageUrl: 'https://images.unsplash.com/photo-1499363536502-87642509e31b?q=80&w=1974&auto=format&fit=crop',
        story: 'رحلة بالقطار تخترق قلب الجبل الصخري لتصل بك إلى "قمة أوروبا". فجأة، تجد نفسك في عالم من الجليد الأبدي والقمم البيضاء التي لا تنتهي. الهواء هنا نقي ورقيق، والمشهد يمتد حتى الغابة السوداء في ألمانيا. الوقوف على منصة المشاهدة يجعلك تشعر وكأنك تطفو فوق سقف العالم، في مملكة الثلج الساحرة.',
        visitorTips: ['تذاكر القطار باهظة', 'ارتد ملابس دافئة']
      },
      {
        id: 'lake-geneva',
        name: 'بحيرة جنيف',
        category: 'Nature',
        description: 'واحدة من أكبر البحيرات في أوروبا.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'مياه زرقاء عميقة محاطة بكروم العنب وجبال الألب المغطاة بالثلوج. هذه البحيرة ألهمت الشعراء والموسيقيين لقرون بجمالها الهادئ. القوارب البخارية القديمة تمخر عبابها بأناقة، بينما تعكس المدن الساحلية الفاخرة أضواءها على سطح الماء. إنها مكان يتوقف فيه الزمن لتتأمل جمال الطبيعة ورقي الحياة.',
        visitorTips: ['قم برحلة بالقارب', 'زر مدينة لوزان']
      },
      {
        id: 'chillon-castle',
        name: 'قلعة شيلون',
        category: 'History',
        description: 'قلعة من العصور الوسطى على جزيرة صخرية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'تنتصب هذه القلعة بجمال أخاذ على ضفاف بحيرة جنيف، لكن جدرانها تخفي قصصاً مظلمة عن السجناء والحروب. قبوها الشهير ألهم اللورد بايرون لكتابة قصيدته "سجين شيلون". التجول في قاعاتها وغرفها يأخذك في رحلة إلى زمن الفرسان والدوقات، حيث يمتزج التاريخ العسكري بالفخامة المعمارية.',
        visitorTips: ['استأجر دليلاً صوتياً', 'المنظر من الأبراج مذهل']
      },
      {
        id: 'rhine-falls',
        name: 'شلالات الراين',
        category: 'Nature',
        description: 'أكبر شلالات في أوروبا.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'هدير المياه هنا يصم الآذان، وقوة الطبيعة تتجلى في أبهى صورها حيث يندفع نهر الراين بقوة هائلة فوق الصخور. رذاذ الماء يغطي وجهك وأنت تقترب بالقارب من الصخرة الوسطى التي تتحدى التيار. إنه مشهد يذكرك بقوة الماء وقدرته على نحت الأرض وتشكيلها عبر الزمن.',
        visitorTips: ['اركب القارب للصخرة الوسطى', 'أفضل تدفق في الصيف']
      }
    ],
    restaurants: [
      {
        name: 'Restaurant de l\'Hôtel de Ville',
        description: 'مطعم 3 نجوم ميشلان يعتبر من الأفضل في العالم.',
        cuisine: 'فرنسي / سويسري',
        rating: 4.9,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Haus Hiltl',
        description: 'أقدم مطعم نباتي في العالم (منذ 1898) في زيورخ.',
        cuisine: 'نباتي',
        rating: 4.7,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Le Chat-Botté',
        description: 'مطعم فاخر في جنيف يقدم أطباقاً متوسطية رائعة.',
        cuisine: 'متوسطي / Fine Dining',
        rating: 4.8,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Badrutt\'s Palace',
        stars: 5,
        price: '1000$+',
        rating: 9.6,
        description: 'قصر أسطوري في سانت مورتز، قمة الفخامة الشتوية.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'The Dolder Grand',
        stars: 5,
        price: '800$+',
        rating: 9.4,
        description: 'قلعة تشبه القصص الخيالية تطل على زيورخ وبحيرتها.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Bürgenstock Hotel',
        stars: 5,
        price: '1200$+',
        rating: 9.7,
        description: 'مسبح لا متناهي معلق فوق بحيرة لوسيرن، إطلالة لا تصدق.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Beau-Rivage Palace',
        stars: 5,
        price: '600$+',
        rating: 9.3,
        description: 'أناقة كلاسيكية على ضفاف بحيرة جنيف في لوزان.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'The Chedi Andermatt',
        stars: 5,
        price: '900$+',
        rating: 9.5,
        description: 'مزيج مذهل بين الشاليهات السويسرية والتصميم الآسيوي.',
        imageUrl: getImg('luxuryHotel', 5)
      }
    ]
  },
  {
    id: 'greece',
    name: 'اليونان',
    englishName: 'Greece',
    region: 'Europe',
    description: 'مهد الحضارة الغربية والجزر الساحرة.',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['اليونانيون ودودون', 'هز الرأس للأعلى يعني لا', 'مشاركة الطعام عادة'],
    summerActivities: ['الإبحار بين الجزر اليونانية', 'الاسترخاء على شواطئ ميكونوس', 'مشاهدة غروب الشمس في سانتوريني', 'السباحة في خلجان كريت السرية'],
    winterActivities: ['استكشاف آثار أثينا بدون زحام', 'زيارة القرى الجبلية التقليدية', 'تذوق زيت الزيتون الجديد والمأكولات الشتوية', 'المشي لمسافات طويلة في بيلوبونيز'],
    landmarks: [
      {
        id: 'acropolis',
        name: 'الأكروبوليس',
        category: 'History',
        description: 'قلعة قديمة فوق أثينا تضم البارثينون.',
        imageUrl: 'https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=2070&auto=format&fit=crop',
        story: 'فوق صخرة مقدسة تطل على أثينا، يقف الأكروبوليس كشاهد على ولادة الديمقراطية والفلسفة الغربية. البارثينون بأعمدته الرخامية المتناسبة تماماً ليس مجرد معبد، بل هو تحية للعقل البشري والجمال. المشي بين هذه الأطلال هو مشي على خطى سقراط وأفلاطون، حيث كل حجر يروي قصة مجد وصراع حضارة شكلت العالم كما نعرفه.',
        visitorTips: ['تعال مبكراً', 'زر المتحف الجديد']
      },
      {
        id: 'santorini',
        name: 'سانتوريني',
        category: 'Nature',
        description: 'جزيرة بركانية تشتهر بالمباني البيضاء والقبب الزرقاء.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'جزيرة ولدت من رحم انفجار بركاني هائل، لترتفع من البحر كجوهرة بيضاء وزرقاء. منازلها المعلقة على حافة الجرف البركاني تبدو وكأنها تتحدى الجاذبية. لحظة غروب الشمس في قرية أويا ليست مجرد مشهد يومي، بل هي احتفال كوني حيث تصفق الحشود لجمال الشمس وهي تغرق في بحر إيجة، راسمة لوحة من الألوان المستحيلة.',
        visitorTips: ['شاهد الغروب من القلعة', 'زر الشاطئ الأحمر']
      },
      {
        id: 'meteora',
        name: 'ميتيورا',
        category: 'History',
        description: 'أديرة معلقة على قمم صخرية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'بين السماء والأرض، بنى الرهبان أديرتهم على قمم صخور عمودية شاهقة هرباً من الاضطرابات وبحثاً عن القرب من الله. كيف تمكنوا من نقل المواد وبناء هذه الصروح المعلقة؟ إنها معجزة من الإيمان والصبر. الضباب الذي يلف الصخور في الصباح يجعل المكان يبدو وكأنه يطفو في الهواء، في مشهد روحاني يأخذك بعيداً عن صخب العالم.',
        visitorTips: ['ملابس محتشمة ضرورية', 'استعد للسلالم']
      },
      {
        id: 'delphi',
        name: 'دلفي',
        category: 'History',
        description: 'مركز العالم القديم ومقر العرافة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'هنا كان "سرة العالم" كما اعتقد الإغريق. الملوك والقادة قطعوا مسافات هائلة لسماع نبوءات عرافة دلفي الغامضة التي قررت مصير حروب وإمبراطوريات. الموقع الجبلي المهيب يضيف هالة من القدسية والغموض، حيث تشعر بأن صوت العرافة لا يزال يتردد صداه بين الجبال، يخبرك بأسرار المستقبل.',
        visitorTips: ['اصعد للمسجد', 'زر المتحف']
      },
      {
        id: 'navagio-beach',
        name: 'شاطئ حطام السفينة',
        category: 'Nature',
        description: 'شاطئ منعزل يشتهر بحطام سفينة ومياهه الفيروزية.',
        imageUrl: 'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?q=80&w=1974&auto=format&fit=crop',
        story: 'في خليج مخفي محاط بجدران صخرية شاهقة، يرقد هيكل سفينة مهربين صدئة على رمال بيضاء ناصعة، وكأن البحر لفظها ليروي قصتها. المياه هنا بلون فيروزي كهربائي لا يصدق. الوصول إليه لا يكون إلا بالبحر، مما يجعله ملاذاً سرياً وجميلاً بشكل وحشي، صورة تجسد قوة الطبيعة وغموض البحر.',
        visitorTips: ['الوصول بالقوارب فقط', 'أفضل رؤية من الأعلى']
      }
    ],
    restaurants: [
      {
        name: 'Spondi',
        description: 'مطعم حائز على نجمتي ميشلان في أثينا، يقدم مأكولات فرنسية متوسطية.',
        cuisine: 'Fine Dining',
        rating: 4.8,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Varoulko Seaside',
        description: 'مطعم مأكولات بحرية راقٍ بإطلالة على الميناء في بيرايوس.',
        cuisine: 'مأكولات بحرية',
        rating: 4.7,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'O Kostas',
        description: 'أفضل مكان للسوفلاكي في أثينا، بسيط وشهي.',
        cuisine: 'Street Food',
        rating: 4.9,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Canaves Oia Epitome',
        stars: 5,
        price: '800$+',
        rating: 9.7,
        description: 'فخامة وخصوصية في سانتوريني مع مسابح خاصة وإطلالات على الغروب.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Hotel Grande Bretagne',
        stars: 5,
        price: '500$+',
        rating: 9.3,
        description: 'معلم تاريخي في قلب أثينا مع إطلالة مباشرة على الأكروبوليس.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Blue Palace Elounda',
        stars: 5,
        price: '400$+',
        rating: 9.1,
        description: 'منتجع في كريت يتميز بالأناقة والمناظر الخلابة لجزيرة سبينالونجا.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Cavo Tagoo Mykonos',
        stars: 5,
        price: '900$+',
        rating: 9.0,
        description: 'أشهر فندق في ميكونوس، معروف بمسابح الكهف والحياة الليلية.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Amanzoe',
        stars: 5,
        price: '1500$+',
        rating: 9.8,
        description: 'ملاذ هادئ بتصميم مستوحى من المعابد اليونانية القديمة في بيلوبونيز.',
        imageUrl: getImg('luxuryHotel', 4)
      }
    ]
  },
  {
    id: 'thailand',
    name: 'تايلاند',
    englishName: 'Thailand',
    region: 'Asia',
    description: 'أرض الابتسامات والمعابد الذهبية.',
    heroImage: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2071&auto=format&fit=crop',
    bestTimeToVisit: 'نوفمبر إلى فبراير',
    culturalTips: ['لا تلمس رأس أحد', 'احترم الرهبان', 'الأقدام غير نظيفة'],
    summerActivities: ['زيارة الجزر الشرقية مثل كوه ساموي', 'مهرجانات الفاكهة الاستوائية', 'ركوب الأمواج في بوكيت', 'استكشاف الغابات المطيرة'],
    winterActivities: ['الطقس المثالي في بانكوك وشيانغ ماي', 'الغوص في جزر سيميلان', 'مهرجان الزهور في الشمال', 'الاحتفال برأس السنة الصينية في الحي الصيني'],
    landmarks: [
      {
        id: 'grand-palace-bangkok',
        name: 'القصر الكبير',
        category: 'History',
        description: 'مجمع مباني ملكية في بانكوك.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'عالم مبهر من الذهب والألوان والفسيفساء الدقيقة، حيث كان ملوك سيام يحكمون البلاد. كل زاوية هنا تتلألأ تحت الشمس، وكل تمثال يحرس سراً ملكياً. معبد بوذا الزمردي في القلب هو روح تايلاند المقدسة، مكان يشعرك بالخشوع والجمال في آن واحد. إنه ليس مجرد قصر، بل تجسيد للجنة الأرضية في المعتقدات التايلاندية.',
        visitorTips: ['لباس محتشم صارم', 'تعال مبكراً']
      },
      {
        id: 'phi-phi-islands',
        name: 'جزر في في',
        category: 'Nature',
        description: 'جزر استوائية بمياه زمردية.',
        imageUrl: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1974&auto=format&fit=crop',
        story: 'تنبثق صخور الحجر الجيري العملاقة من مياه البحر الزمردية كأبراج حراسة لجنة استوائية. هنا، الرمال ناعمة كالبودرة والمياه صافية كالكريستال. رغم شهرتها العالمية، لا تزال هذه الجزر تحتفظ بسحر بري غامض، خاصة عندما تبحر بقارب طويل الذيل بين الخلجان المخفية وتكتشف شواطئ لا يمكن الوصول إليها إلا من البحر.',
        visitorTips: ['استأجر قارباً خاصاً', 'خليج مايا مشهور']
      },
      {
        id: 'wat-arun',
        name: 'معبد الفجر',
        category: 'History',
        description: 'معبد بوذي على النهر.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'على ضفاف نهر تشاو فرايا، يقف هذا المعبد المرصع بقطع الخزف الملونة ليعكس ضوء الصباح الأول ببريق ساحر. اسمه "معبد الفجر" يعدك ببداية جديدة. صعود درجاته الحادة هو رحلة رمزية نحو التنوير، وعندما تصل إلى القمة وتشاهد النهر يجري تحتك، تشعر بسلام عميق وجمال بانكوك الخالد.',
        visitorTips: ['منظره عند الغروب رائع', 'اصعد الدرج']
      },
      {
        id: 'ayutthaya',
        name: 'أيوثايا',
        category: 'History',
        description: 'عاصمة قديمة مدمرة.',
        imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop',
        story: 'كانت يوماً أكبر مدينة في العالم، واليوم تقف أطلالها كشاهد صامت على المجد والدمار. المعابد المحترقة وتماثيل بوذا مقطوعة الرؤوس تروي قصة غزو مدمر، لكن رأس بوذا العالق بين جذور شجرة التين يرمز إلى أن الطبيعة والروحانية تنتصران دائماً. التجول هنا هو درس في التاريخ وفناء الحضارات.',
        visitorTips: ['رحلة يومية من بانكوك', 'استأجر دراجة']
      },
      {
        id: 'floating-markets',
        name: 'الأسواق العائمة',
        category: 'Hidden Gem',
        description: 'أسواق تقليدية في القنوات المائية.',
        imageUrl: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2070&auto=format&fit=crop',
        story: 'في قنوات مائية ضيقة، تزدحم القوارب المحملة بالفواكه الاستوائية الملونة والطعام الساخن. ضجيج الباعة، روائح التوابل، وألوان الملابس الزاهية تخلق لوحة حية للحياة التايلاندية التقليدية. هنا تشتري طعامك من قارب إلى قارب، وتستمتع بوجبة نودلز ساخنة وأنت تطفو على الماء، تجربة تأخذك بعيداً عن المراكز التجارية الحديثة.',
        visitorTips: ['دامنون سادواك الأشهر', 'جرب قارب النودلز']
      }
    ],
    restaurants: [
      {
        name: 'Gaggan Anand',
        description: 'تجربة طعام هندي تقدمي ومسرحي في بانكوك.',
        cuisine: 'هندي تقدمي / Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Jay Fai',
        description: 'كشك طعام شارع حاصل على نجمة ميشلان، تشتهر بالعجة بالسرطان.',
        cuisine: 'Street Food / مأكولات بحرية',
        rating: 4.8,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Nahm',
        description: 'يقدم المطبخ التايلاندي التقليدي القديم بأسلوب راقٍ.',
        cuisine: 'تايلاندي',
        rating: 4.7,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Mandarin Oriental Bangkok',
        stars: 5,
        price: '500$+',
        rating: 9.6,
        description: 'أسطورة الضيافة على نهر تشاو فرايا لأكثر من 140 عاماً.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Four Seasons Chiang Mai',
        stars: 5,
        price: '600$+',
        rating: 9.5,
        description: 'منتجع وسط حقول الأرز في شمال تايلاند، هدوء ورفاهية.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Six Senses Yao Noi',
        stars: 5,
        price: '800$+',
        rating: 9.4,
        description: 'فيلات خاصة بمسبح مع إطلالات خيالية على صخور خليج بان ناه.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Rayavadee',
        stars: 5,
        price: '400$+',
        rating: 9.2,
        description: 'يقع في كرابي بين الشواطئ والجبال الجيرية، الوصول بالقارب فقط.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Sri Panwa Phuket',
        stars: 5,
        price: '500$+',
        rating: 9.1,
        description: 'منتجع فاخر على رأس صخري في بوكيت، يشتهر بمسابحه الخاصة.',
        imageUrl: getImg('luxuryHotel', 3)
      }
    ]
  },
  {
    id: 'brazil',
    name: 'البرازيل',
    englishName: 'Brazil',
    region: 'Americas',
    description: 'إيقاع السامبا والشواطئ اللامتناهية.',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'ديسمبر إلى مارس',
    culturalTips: ['التحية بالعناق', 'إشارة الإبهام لأعلى جيدة', 'لا تلبس مجوهرات ثمينة'],
    summerActivities: ['حضور كرنفال ريو دي جانيرو الأسطوري', 'الاسترخاء على شواطئ كوباكابانا وإيبانيما', 'رحلة بالقارب في الأمازون', 'الاحتفال برأس السنة على الشاطئ بملابس بيضاء'],
    winterActivities: ['استكشاف منطقة بانتانال للحياة البرية', 'زيارة المدن الاستعمارية التاريخية', 'مهرجانات الشتاء في الجنوب', 'الاستمتاع بالطقس المعتدل في الشمال'],
    landmarks: [
      {
        id: 'christ-the-redeemer',
        name: 'المسيح الفادي',
        category: 'History',
        description: 'تمثال ضخم يطل على ريو.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'من قمة جبل كوركوفادو، يفتح المسيح ذراعيه ليحتضن مدينة ريو الصاخبة بكل تناقضاتها، من الأحياء الفقيرة إلى الشواطئ الفاخرة. إنه ليس مجرد تمثال خرساني، بل رمز للترحيب والسلام يراقب المدينة بصمت. الصعود إليه عبر الغابة المطيرة يمنحك شعوراً بالسمو، والمنظر من الأعلى يكشف لك جمال ريو الذي يحبس الأنفاس.',
        visitorTips: ['اركب القطار', 'اختر يوماً صافياً']
      },
      {
        id: 'iguazu-falls',
        name: 'شلالات إجوازو',
        category: 'Nature',
        description: 'نظام شلالات هائل.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'هنا، الطبيعة تظهر قوتها المرعبة والجميلة في آن واحد. مئات الشلالات تصب في وقت واحد بصوت مدوٍ يشبه الرعد الدائم. الوقوف في "حنجرة الشيطان" حيث يحيط بك الماء والضباب من كل جانب هو تجربة تجعلك تشعر بصغر حجمك أمام عظمة الخلق. قوس القزح هنا دائم، يزين الضباب المتصاعد من قلب الهاوية.',
        visitorTips: ['الجانب البرازيلي بانورامي', 'زر حديقة الطيور']
      },
      {
        id: 'copacabana-beach',
        name: 'شاطئ كوباكابانا',
        category: 'Modern',
        description: 'أشهر شاطئ في العالم.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'إنه ليس مجرد شاطئ، بل هو مسرح الحياة في ريو. هنا يلعب السكان المحليون كرة القدم بمهارة سحرية، ويستمتع السياح بجوز الهند البارد، وتختلط الموسيقى بصوت الأمواج. الرصيف ذو التموجات السوداء والبيضاء هو أيقونة عالمية. في كوباكابانا، تشعر بنبض البرازيل الحقيقي، الفرح العفوي وحب الحياة.',
        visitorTips: ['اشرب جوز الهند', 'احذر اللصوص']
      },
      {
        id: 'sugarloaf-mountain',
        name: 'جبل رغيف السكر',
        category: 'Nature',
        description: 'جبل جرانيتي مخروطي.',
        imageUrl: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop',
        story: 'صخرة جرانيتية ضخمة ترتفع فجأة من البحر، حارسة لمدخل الخليج. الوصول إليها بالتلفريك المعلق هو مغامرة بحد ذاتها، حيث تتأرجح فوق المحيط والغابات. عند الغروب، تتحول المدينة أسفلك إلى بحر من الأضواء المتلألئة، مشهد رومانسي وساحر يجعل من ريو دي جانيرو "المدينة الرائعة" بحق.',
        visitorTips: ['اشتر التذاكر مسبقاً', 'أفضل للبانوراما']
      },
      {
        id: 'amazon-rainforest',
        name: 'غابات الأمازون',
        category: 'Nature',
        description: 'رئة الأرض.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'عالم أخضر لا نهائي، غامض وخطير وجميل. هنا تتدفق أنهار أكبر من بعض البحار، وتعيش مخلوقات لا توجد في أي مكان آخر. صوت الغابة لا يهدأ أبداً، سيمفونية من أصوات الطيور والحشرات والحيوانات الخفية. دخول الأمازون هو رحلة إلى قلب الكوكب النابض، حيث تدرك أهمية وهشاشة الحياة على الأرض.',
        visitorTips: ['انطلق من ماناوس', 'نم في نزل بيئي']
      }
    ],
    restaurants: [
      {
        name: 'D.O.M.',
        description: 'مطعم الشيف أليكس أتالا الذي يستخدم مكونات الأمازون في أطباق راقية.',
        cuisine: 'برازيلي حديث',
        rating: 4.8,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Maní',
        description: 'مأكولات برازيلية معاصرة ومبتكرة في ساو باولو.',
        cuisine: 'برازيلي',
        rating: 4.7,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Aprazível',
        description: 'مطعم بحديقة استوائية في ريو دي جانيرو يقدم مأكولات محلية.',
        cuisine: 'برازيلي تقليدي',
        rating: 4.6,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Belmond Copacabana Palace',
        stars: 5,
        price: '600$+',
        rating: 9.4,
        description: 'فندق تاريخي أبيض يطل على شاطئ كوباكابانا، رمز الأناقة.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Hotel Fasano Rio',
        stars: 5,
        price: '700$+',
        rating: 9.2,
        description: 'تصميم عصري في إيبانيما، مسبحه على السطح هو الأشهر.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Palácio Tangará',
        stars: 5,
        price: '500$+',
        rating: 9.5,
        description: 'واحة حضرية في ساو باولو محاطة بحديقة استوائية.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Ponta dos Ganchos',
        stars: 5,
        price: '900$+',
        rating: 9.7,
        description: 'منتجع حصري للأزواج على شبه جزيرة خاصة في الجنوب.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Mirante do Gavião',
        stars: 4,
        price: '400$+',
        rating: 9.1,
        description: 'نزل بيئي فاخر في قلب غابات الأمازون بتصميم خشبي فريد.',
        imageUrl: getImg('luxuryHotel', 2)
      }
    ]
  },
  {
    id: 'south-africa',
    name: 'جنوب أفريقيا',
    englishName: 'South Africa',
    region: 'Africa',
    description: 'أمة قوس قزح، حيث الحياة البرية والمحيطات.',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',
    bestTimeToVisit: 'مايو إلى سبتمبر',
    culturalTips: ['تنوع لغوي كبير', 'البقشيش معتاد', 'القيادة على اليسار'],
    summerActivities: ['الاستمتاع بشواطئ كيب تاون', 'ركوب الأمواج في ديربان', 'زيارة مزارع الكروم في ستيلينبوش', 'حفلات الشواء (Braai) في الهواء الطلق'],
    winterActivities: ['مشاهدة الحيتان في هيرمانوس', 'سفاري في حديقة كروجر (أفضل رؤية للحيوانات)', 'ركوب القطار الأزرق الفاخر', 'استكشاف المتاحف والمعارض الفنية'],
    landmarks: [
      {
        id: 'table-mountain',
        name: 'جبل الطاولة',
        category: 'Nature',
        description: 'جبل مسطح القمة يطل على كيب تاون.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'حارس المدينة الصامت ذو القمة المسطحة، يطل على المحيطين الهندي والأطلسي. عندما تغطيه السحب البيضاء، يقول المحليون إن "مفرش الطاولة" قد فُرش. الصعود إليه يكشف لك العالم من منظور الطيور، حيث تلتقي المدينة والطبيعة والبحر في مشهد بانورامي واحد. إنه رمز للصمود والجمال الطبيعي الفريد.',
        visitorTips: ['تحقق من الطقس', 'احجز التلفريك']
      },
      {
        id: 'kruger-national-park',
        name: 'حديقة كروجر',
        category: 'Nature',
        description: 'موطن الخمسة الكبار.',
        imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',
        story: 'هنا أنت الزائر في مملكة الحيوانات، حيث القوانين تضعها الطبيعة وحدها. القيادة في البرية وتتبع آثار الأسود أو مشاهدة قطيع من الأفيال يعبر الطريق هو تجربة تحبس الأنفاس. لا يوجد سياج، فقط الحياة البرية الخام بكل قسوتها وجمالها. في كروجر، تتعلم الصبر والاحترام للكائنات التي تشاركنا هذا الكوكب.',
        visitorTips: ['الفجر والغروب أفضل', 'يمكنك القيادة بنفسك']
      },
      {
        id: 'cape-of-good-hope',
        name: 'رأس الرجاء الصالح',
        category: 'Nature',
        description: 'طرف أفريقيا الجنوبي.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'المكان الذي كان كابوساً للبحارة القدامى بسبب أمواجه العاتية وصخوره الخطرة، أصبح الآن رمزاً للأمل والجمال. الوقوف عند هذه النقطة، حيث تشعر بقوة المحيط تضرب القارة، يمنحك شعوراً بأنك في نهاية العالم. المنارة القديمة لا تزال تراقب الأفق، شاهدة على مئات السنين من الاستكشاف والمغامرة.',
        visitorTips: ['احذر القرود', 'زر شاطئ البطاريق']
      },
      {
        id: 'robben-island',
        name: 'جزيرة روبن',
        category: 'History',
        description: 'سجن مانديلا السابق.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'جزيرة صغيرة كانت رمزاً للقمع والفصل العنصري، حيث قضى نيلسون مانديلا سنوات طويلة في زنزانة ضيقة. لكنها تحولت اليوم إلى رمز لانتصار الروح البشرية والتسامح. الجولة التي يقودها سجناء سابقون ليست مجرد درس في التاريخ، بل هي تجربة عاطفية عميقة تذكرنا بثمن الحرية وقوة الأمل في أحلك الظروف.',
        visitorTips: ['احجز العبارة', 'المرشدون سجناء سابقون']
      },
      {
        id: 'blyde-river-canyon',
        name: 'أخدود نهر بلايد',
        category: 'Nature',
        description: 'أخدود أخضر هائل.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'على عكس الأخاديد الصحراوية الجرداء، هذا الأخدود مكسو بغطاء نباتي أخضر كثيف، مما يجعله واحداً من أجمل العجائب الطبيعية في العالم. التشكيلات الصخرية الغريبة وشلالات المياه المتساقطة تخلق مشهداً خيالياً. الوقوف عند "نافذة الله" والنظر إلى الامتداد اللامتناهي للوادي يجعلك تشعر بالسلام والرهبة.',
        visitorTips: ['طريق البانوراما', 'نافذة الله']
      }
    ],
    restaurants: [
      {
        name: 'La Colombe',
        description: 'مطعم حائز على جوائز عالمية في كيب تاون يقدم تجربة تذوق فرنسية-آسيوية.',
        cuisine: 'Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Wolfgat',
        description: 'مطعم صغير على الساحل يركز على المكونات البحرية المحلية والنباتات البرية.',
        cuisine: 'جنوب أفريقي حديث',
        rating: 4.8,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'The Pot Luck Club',
        description: 'أطباق تاباس عالمية مع إطلالة بانورامية على كيب تاون.',
        cuisine: 'تاباس / عالمي',
        rating: 4.7,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'The Silo Hotel',
        stars: 5,
        price: '1000$+',
        rating: 9.5,
        description: 'فندق فني مذهل بني في صومعة حبوب قديمة فوق متحف Zeitz MOCAA.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'One&Only Cape Town',
        stars: 5,
        price: '700$+',
        rating: 9.2,
        description: 'منتجع حضري في الواجهة البحرية، يجمع بين الفخامة وإطلالات جبل الطاولة.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Singita Lebombo Lodge',
        stars: 5,
        price: '2000$+',
        rating: 9.9,
        description: 'تجربة سفاري فائقة الفخامة في حديقة كروجر، تصميم معاصر وسط البرية.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Ellerman House',
        stars: 5,
        price: '800$+',
        rating: 9.6,
        description: 'قصر خاص في كيب تاون يوفر خصوصية تامة وأفضل مجموعة فنون.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'The Oyster Box',
        stars: 5,
        price: '400$+',
        rating: 9.3,
        description: 'فندق استعماري ساحر على شاطئ ديربان، يتميز باللونين الأحمر والأبيض.',
        imageUrl: getImg('luxuryHotel', 1)
      }
    ]
  },
  {
    id: 'saudi',
    name: 'المملكة العربية السعودية',
    englishName: 'Saudi Arabia',
    region: 'Arab World',
    description: 'قلب الجزيرة العربية النابض بالتاريخ والمستقبل.',
    heroImage: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'نوفمبر إلى فبراير',
    culturalTips: ['احترم أوقات الصلاة', 'الضيافة العربية أساسية', 'لباس محتشم'],
    summerActivities: ['زيارة جبال السودة في أبها للاستمتاع بالجو البارد', 'مهرجانات الطائف للورود والفواكه', 'الغوص في البحر الأحمر في جدة وينبع', 'زيارة المرتفعات الخضراء في الجنوب'],
    winterActivities: ['التخييم الشتوي (الكشتة) في الصحراء', 'موسم الرياض الترفيهي', 'استكشاف آثار العلا ومدائن صالح', 'زيارة المناطق التاريخية في الدرعية'],
    landmarks: [
      {
        id: 'alula',
        name: 'العلا',
        category: 'History',
        description: 'متحف مفتوح ومدائن صالح.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'وسط الصحراء الذهبية، تبرز مدائن صالح كشهادة صامتة على حضارة الأنباط العظيمة. واجهات منحوتة في الجبال بدقة مذهلة، وقبور تحكي قصصاً منسية منذ آلاف السنين. المشي هنا ليلاً، تحت سماء مرصعة بملايين النجوم، يجعلك تشعر بسحر الشرق القديم وغموضه، وكأن الزمن قد عاد بك إلى الوراء.',
        visitorTips: ['احجز الجولات', 'زر صخرة الفيل']
      },
      {
        id: 'masmak-fortress',
        name: 'قصر المصمك',
        category: 'History',
        description: 'حصن طيني تاريخي.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'هذا الحصن الطيني المتواضع في قلب الرياض كان نقطة البداية لتوحيد المملكة. جدرانه السميكة لا تزال تحمل آثار الرمح الذي كسر بوابته في تلك الليلة التاريخية. التجول في أروقته يعطيك لمحة عن الحياة البسيطة والشجاعة الكبيرة التي أسست دولة حديثة، ويربط الماضي بالحاضر المزدهر.',
        visitorTips: ['الدخول مجاني', 'سوق الديرة قريب']
      },
      {
        id: 'historic-jeddah',
        name: 'جدة التاريخية',
        category: 'History',
        description: 'بيوت من الحجر المرجاني ورواشين.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'حارة "البلد" هي روح جدة العتيقة، حيث البيوت المبنية من الحجر المرجاني والرواشين الخشبية المزخرفة التي سمحت لنساء الحي بمراقبة الشارع دون أن يُرين. روائح التوابل والبخور تملأ الأزقة الضيقة، وصوت الباعة يعيدك لزمن كانت فيه هذه المدينة بوابة الحجاج إلى مكة. إنها متحف حي ينبض بالحياة والتجارة.',
        visitorTips: ['زرها مساءً', 'بيت نصيف']
      },
      {
        id: 'edge-of-the-world',
        name: 'حافة العالم',
        category: 'Nature',
        description: 'منحدرات صخرية شاهقة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'عندما تقف على هذه المنحدرات الشاهقة وتنظر إلى الأفق اللامتناهي، تدرك لماذا سميت "حافة العالم". قاع بحر جف منذ ملايين السنين تحول إلى وادٍ سحيق يمتد بمد البصر. الصمت هنا مهيب، لا يقطعه سوى صوت الرياح. إنه المكان المثالي للتأمل والشعور بعظمة الخالق وقوة الطبيعة الجيولوجية.',
        visitorTips: ['تحتاج سيارة دفع رباعي', 'خذ الماء']
      },
      {
        id: 'ithra',
        name: 'مركز إثراء',
        category: 'Modern',
        description: 'تحفة معمارية ثقافية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'بني في نفس الموقع الذي تدفق منه النفط لأول مرة، ليكون منبعاً لنوع آخر من الطاقة: الإبداع البشري. تصميمه المعماري المستقبلي الذي يشبه الحجارة الصحراوية المتراصة يخفي داخله مكتبة ومسرحاً ومتحفاً عالمياً. إثراء هو رمز لتحول المملكة نحو المستقبل، مكان يلتقي فيه الفن والعلم والثقافة.',
        visitorTips: ['المكتبة مذهلة', 'تحقق من الفعاليات']
      }
    ],
    restaurants: [
      {
        name: 'Myazu',
        description: 'مطعم ياباني راقٍ يعتبر من الأفضل في الرياض.',
        cuisine: 'ياباني حديث',
        rating: 4.8,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Suhail',
        description: 'يقدم المأكولات السعودية التقليدية بلمسة عصرية راقية.',
        cuisine: 'سعودي حديث',
        rating: 4.7,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Al Baik',
        description: 'سلسلة مطاعم البروستد الأسطورية في السعودية، تجربة لا بد منها.',
        cuisine: 'Fast Food',
        rating: 4.9,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Habitas AlUla',
        stars: 5,
        price: '600$+',
        rating: 9.5,
        description: 'منتجع فاخر صديق للبيئة وسط وديان العلا الصخرية الساحرة.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'The Ritz-Carlton Riyadh',
        stars: 5,
        price: '500$+',
        rating: 9.2,
        description: 'قصر ملكي تحول لفندق، يتميز بحدائقه الواسعة ومسبحه الداخلي المذهل.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Park Hyatt Jeddah',
        stars: 5,
        price: '400$+',
        rating: 8.9,
        description: 'منتجع وسبا على البحر الأحمر، يجمع بين العمارة الأندلسية والخدمة العصرية.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Banyan Tree AlUla',
        stars: 5,
        price: '1000$+',
        rating: 9.7,
        description: 'فيلات خيام فاخرة بمسابح خاصة وسط الصحراء والجبال.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Fairmont Makkah',
        stars: 5,
        price: '300$+',
        rating: 8.8,
        description: 'برج الساعة الملكي، يوفر أقرب إقامة للحرم المكي الشريف.',
        imageUrl: getImg('luxuryHotel', 0)
      }
    ]
  },
  {
    id: 'uae',
    name: 'الإمارات',
    englishName: 'UAE',
    region: 'Arab World',
    description: 'حيث يعانق المستقبل السماء.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'نوفمبر إلى مارس',
    culturalTips: ['رمضان له قدسية', 'التصوير بحذر', 'البقشيش مقدر'],
    summerActivities: ['عالم فيراري وملاهي ياس المائية', 'التزلج الداخلي في سكي دبي', 'زيارة متحف اللوفر ومتحف المستقبل', 'التسوق في أكبر المولات العالمية'],
    winterActivities: ['سفاري صحراوي وحفلات شواء', 'زيارة القرية العالمية', 'الاسترخاء على شواطئ جميرا والسعديات', 'حضور مهرجانات التسوق والفعاليات الخارجية'],
    landmarks: [
      {
        id: 'burj-khalifa',
        name: 'برج خليفة',
        category: 'Modern',
        description: 'أطول مبنى في العالم.',
        imageUrl: 'https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=2070&auto=format&fit=crop',
        story: 'إبرة فضية تخترق الغيوم وتتحدى قوانين الجاذبية. الصعود إلى قمته ليس مجرد ركوب مصعد، بل هو رحلة إلى سقف العالم. من الأعلى، تبدو ناطحات السحاب الأخرى كألعاب صغيرة، والصحراء والبحر يمتدان في تناغم مذهل. إنه رمز لطموح دبي اللامتناهي ورؤيتها للمستقبل.',
        visitorTips: ['احجز التذاكر', 'وقت الغروب']
      },
      {
        id: 'sheikh-zayed-mosque',
        name: 'جامع الشيخ زايد',
        category: 'Modern',
        description: 'تحفة معمارية إسلامية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'واحة من البياض النقي والهدوء الروحاني. هذا المسجد ليس مجرد مكان للصلاة، بل هو رسالة سلام وتسامح مكتوبة بالرخام والذهب. الثريات الكريستالية العملاقة والسجادة اليدوية الأكبر في العالم تعكس التقدير للفن والجمال. المشي في ساحاته البيضاء يشعرك بالسكينة، وكأنك في قطعة من الجنة.',
        visitorTips: ['زي محتشم', 'الدخول مجاني']
      },
      {
        id: 'louvre-abu-dhabi',
        name: 'اللوفر أبوظبي',
        category: 'Modern',
        description: 'متحف يطفو على الماء.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'تحت قبة عملاقة من المعدن، يتساقط "مطر من النور" ليخلق جواً سحرياً متبدلاً. هذا المتحف العائم يروي قصة الإنسانية المشتركة عبر العصور، جامعاً بين الشرق والغرب. التصميم المعماري بحد ذاته تحفة فنية تتناغم مع البحر والسماء، مكاناً للتأمل في الفن والتاريخ والإبداع البشري.',
        visitorTips: ['خصص 3 ساعات', 'ركوب الكاياك']
      },
      {
        id: 'museum-of-the-future',
        name: 'متحف المستقبل',
        category: 'Modern',
        description: 'مبنى أيقوني بيضاوي.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'مبنى يتحدث لغة الغد، بتصميمه الدائري المغطى بالخط العربي والمدعوم بالذكاء الاصطناعي. هنا، لا تنظر إلى التاريخ، بل تعيش المستقبل. الروبوتات، الفضاء، والتكنولوجيا الحيوية تجتمع لترسم صورة لما يمكن أن تكون عليه البشرية. إنه دعوة للأمل والتفاؤل وللعمل من أجل غد أفضل.',
        visitorTips: ['احجز قبل أسابيع', 'للأطفال والعائلات']
      },
      {
        id: 'palm-jumeirah',
        name: 'نخلة الجميرا',
        category: 'Modern',
        description: 'أكبر جزيرة صناعية.',
        imageUrl: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=2070&auto=format&fit=crop',
        story: 'تحدي الطبيعة ورسم خريطة جديدة للعالم. هذه الجزيرة التي بنيت على شكل نخلة وتُرى من الفضاء هي أعجوبة هندسية. الفنادق الفاخرة والفيلات الخاصة والشواطئ الممتدة تجعلها وجهة للأحلام. التجول فيها يجعلك تدرك أن كلمة "مستحيل" غير موجودة في قاموس دبي.',
        visitorTips: ['اركب المونوريل', 'ذا فيو']
      }
    ],
    restaurants: [
      {
        name: 'Zuma',
        description: 'مطعم ياباني معاصر عصري وحيوي في مركز دبي المالي العالمي.',
        cuisine: 'ياباني حديث',
        rating: 4.8,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Al Muntaha',
        description: 'مطعم فرنسي يقع في قمة برج العرب بإطلالة خيالية.',
        cuisine: 'فرنسي / Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Ravi Restaurant',
        description: 'مطعم باكستاني شعبي شهير جداً في دبي، طعام لذيذ ورخيص.',
        cuisine: 'باكستاني / Street Food',
        rating: 4.7,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Burj Al Arab Jumeirah',
        stars: 7,
        price: '1500$+',
        rating: 9.5,
        description: 'رمز الفخامة العالمية، فندق "السبع نجوم" الوحيد بتصميم الشراع.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Atlantis The Royal',
        stars: 5,
        price: '900$+',
        rating: 9.3,
        description: 'الأيقونة الجديدة في النخلة، تصميم معماري جريء وتجارب فائقة.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Emirates Palace Mandarin Oriental',
        stars: 5,
        price: '600$+',
        rating: 9.4,
        description: 'قصر حقيقي في أبوظبي، يتميز بالقبب الذهبية والحدائق الغناء.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Al Maha Desert Resort',
        stars: 5,
        price: '1200$+',
        rating: 9.8,
        description: 'منتجع صحراوي هادئ داخل محمية دبي، فيلات خاصة مع المها العربي.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Bulgari Resort Dubai',
        stars: 5,
        price: '1000$+',
        rating: 9.2,
        description: 'جزيرة خاصة للرفاهية الإيطالية وتصميم بسيط وأنيق.',
        imageUrl: getImg('luxuryHotel', 5)
      }
    ]
  },
  {
    id: 'turkey',
    name: 'تركيا',
    englishName: 'Turkey',
    region: 'Europe',
    description: 'جسر بين الشرق والغرب.',
    heroImage: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2071&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['اخلع الأحذية', 'الشاي ضيافة', 'المساومة ضرورية'],
    summerActivities: ['السباحة في شواطئ أنطاليا وبودروم', 'رحلة بحرية في مضيق البوسفور', 'ركوب المنطاد في كابادوكيا', 'زيارة الجزر الأميرات'],
    winterActivities: ['التزلج في جبل أولوداغ في بورصة', 'حمام تركي تقليدي للتدفئة', 'زيارة المتاحف والقصور في إسطنبول', 'تجربة شاي الشتاء والسحلب الساخن'],
    landmarks: [
      {
        id: 'hagia-sophia',
        name: 'آيا صوفيا',
        category: 'History',
        description: 'تحفة معمارية تاريخية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'تحت هذه القبة العظيمة، يتردد صدى قرون من التاريخ. كانت كنيسة ثم مسجداً ثم متحفاً ثم مسجداً مرة أخرى. الفسيفساء الذهبية والخطوط العربية تتجاور في تناغم مدهش، تحكي قصة تعاقب الإمبراطوريات. الضوء الذي يتسلل من النوافذ العلوية يضفي هالة من القدسية على المكان، وكأنه يربط السماء بالأرض.',
        visitorTips: ['تجنب أوقات الصلاة', 'غطاء الرأس للنساء']
      },
      {
        id: 'cappadocia',
        name: 'كابادوكيا',
        category: 'Nature',
        description: 'مداخن الجنيات والمدن تحت الأرض.',
        imageUrl: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2070&auto=format&fit=crop',
        story: 'مشهد سريالي وكأنه من كوكب آخر، حيث تنتصب التكوينات الصخرية الغريبة المعروفة بـ "مداخن الجنيات". السكان القدامى حفروا بيوتهم وكنائسهم داخل هذه الصخور، بل وبنوا مدناً كاملة تحت الأرض للاختباء. عند الفجر، تمتلئ السماء بمئات المناطيد الملونة، في مشهد يحبس الأنفاس ويجعلك تشعر وكأنك في حلم.',
        visitorTips: ['ركوب المنطاد', 'فندق كهف']
      },
      {
        id: 'blue-mosque',
        name: 'المسجد الأزرق',
        category: 'History',
        description: 'يشتهر بالبلاط الأزرق.',
        imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=1998&auto=format&fit=crop',
        story: 'بني بتحدٍ معماري لينافس عظمة آيا صوفيا المقابلة له. آلاف القطع من بلاط إزنيق الأزرق تزين جدرانه الداخلية، مما يخلق جواً من الهدوء والجمال السماوي. مآذنه الست تخترق سماء إسطنبول، وساحته الواسعة ترحب بالزوار من كل الأديان. إنه تحفة العمارة العثمانية الكلاسيكية.',
        visitorTips: ['الدخول مجاني', 'مغلق وقت الصلاة']
      },
      {
        id: 'pamukkale',
        name: 'باموكالي',
        category: 'Nature',
        description: 'مدرجات بيضاء وينابيع حارة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'قلعة القطن البيضاء، حيث تتدفق المياه الكلسية الدافئة عبر آلاف السنين لتشكل أحواضاً ومدرجات بيضاء ناصعة. المنظر يبدو وكأنه شلال متجمد أو سحابة هبطت إلى الأرض. السباحة في "مسبح كليوباترا" الأثري القريب، بين الأعمدة الرومانية الغارقة، هو تجربة تجمع بين الاسترخاء والتاريخ.',
        visitorTips: ['امش حافياً', 'اسبح في البركة']
      },
      {
        id: 'topkapi-palace',
        name: 'قصر توبكابي',
        category: 'History',
        description: 'مقر السلاطين.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'من هذا المكان، حكم السلاطين العثمانيون إمبراطورية شاسعة لقرون. القصر مدينة بحد ذاته، مليء بالكنوز والمجوهرات والأسلحة. لكن القسم الأكثر إثارة هو "الحرملك"، حيث عاشت زوجات السلطان وأمهاته وسط مؤامرات وأسرار لا تزال جدران القصر تهمس بها. الإطلالة من الشرفة على مضيق البوسفور هي الأجمل في إسطنبول.',
        visitorTips: ['زر الحرملك', 'إطلالة البوسفور']
      }
    ],
    restaurants: [
      {
        name: 'Nusr-Et',
        description: 'مطعم الستيك الشهير للشيف نصرت (Salt Bae).',
        cuisine: 'ستيك هاوس',
        rating: 4.5,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Mikla',
        description: 'مطعم راقٍ يقدم المطبخ الأناضولي الحديث مع إطلالة على إسطنبول.',
        cuisine: 'تركي حديث',
        rating: 4.7,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Ciya Sofrasi',
        description: 'يقدم أطباقاً تقليدية منسية من جميع أنحاء الأناضول في الجانب الآسيوي.',
        cuisine: 'تركي تقليدي',
        rating: 4.8,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Ciragan Palace Kempinski',
        stars: 5,
        price: '700$+',
        rating: 9.4,
        description: 'قصر عثماني حقيقي على البوسفور، تجربة السلطان.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Four Seasons Bosphorus',
        stars: 5,
        price: '800$+',
        rating: 9.5,
        description: 'قصر تاريخي تم تحويله، يتميز بتراس رائع على الماء.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Museum Hotel Cappadocia',
        stars: 5,
        price: '400$+',
        rating: 9.3,
        description: 'فندق كهف فاخر يضم قطعاً أثرية حقيقية وإطلالة على المناطيد.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Argos in Cappadocia',
        stars: 4,
        price: '300$+',
        rating: 9.2,
        description: 'دير قديم تحول لفندق رومانسي مع إطلالات خلابة.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Mandarin Oriental Bodrum',
        stars: 5,
        price: '1000$+',
        rating: 9.6,
        description: 'منتجع شاطئي فائق الفخامة على ساحل الريفيرا التركية.',
        imageUrl: getImg('luxuryHotel', 4)
      }
    ]
  },
  {
    id: 'france',
    name: 'فرنسا',
    englishName: 'France',
    region: 'Europe',
    description: 'عاصمة الأناقة والفن.',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['تعلم بضع كلمات فرنسية', 'استمتع بالمقاهي', 'تحدث بصوت منخفض'],
    summerActivities: ['الاسترخاء على شواطئ الريفيرا الفرنسية', 'مشاهدة سباق طواف فرنسا', 'النزهات في حقول اللافندر في بروفانس', 'مهرجانات الموسيقى في باريس'],
    winterActivities: ['التزلج في جبال الألب الفرنسية (شامونيه)', 'أسواق الكريسماس في ستراسبورغ', 'زيارة متاحف باريس هرباً من البرد', 'تذوق المعجنات الساخنة في المقاهي'],
    landmarks: [
      {
        id: 'eiffel',
        name: 'برج إيفل',
        category: 'Modern',
        description: 'رمز باريس الحديدي.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'البرج الذي كرهه الباريسيون في البداية أصبح رمز الرومانسية في العالم. هيكله الحديدي المتشابك يرتفع برشاقة ليعانق سماء باريس. عندما يضاء ليلاً ويتلألأ كجوهرة عملاقة، تشعر بسحر "مدينة النور" الحقيقي. الصعود إليه ليس مجرد رؤية بانورامية، بل هو وقوف في قلب أيقونة عالمية شهدت قصص حب لا تحصى.',
        visitorTips: ['احجز مسبقاً', 'اصعد وقت الغروب']
      },
      {
        id: 'louvre',
        name: 'متحف اللوفر',
        category: 'History',
        description: 'أكبر متحف فني في العالم.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'كان قلعة ثم قصراً ملكياً، واليوم هو بيت لأعظم كنوز الفن البشري. الموناليزا بابتسامتها الغامضة تراقب ملايين الزوار، وفينوس دي ميلو تقف بجمالها الخالد. الهرم الزجاجي في الساحة يمزج التاريخ بالمستقبل. التجول في أروقته اللامتناهية هو رحلة عبر تاريخ الإبداع البشري، حيث كل لوحة وكل تمثال يحكي قصة عصر مضى.',
        visitorTips: ['مدخل كاروسيل', 'حدد القاعات']
      },
      {
        id: 'versailles',
        name: 'قصر فرساي',
        category: 'History',
        description: 'رمز الملكية المطلقة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'هنا عاش "الملك الشمس" لويس الرابع عشر في بذخ لا يصدق. قاعة المرايا المتلألئة، والحدائق الهندسية الشاسعة، والنوافير الراقصة، كلها صممت لإبهار العالم وإظهار قوة فرنسا. لكن خلف هذا الجمال تكمن قصة سقوط الملكية وقيام الثورة. المشي في حدائقه يجعلك تتخيل حياة البلاط الملكي بكل ما فيها من ترف ومؤامرات.',
        visitorTips: ['الحدائق واسعة', 'عرض النوافير']
      },
      {
        id: 'mont-saint-michel',
        name: 'جبل القديس ميشيل',
        category: 'History',
        description: 'جزيرة تتوجها دير.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'تظهر كسراب وسط البحر، جزيرة صخرية يعلوها دير قوطي يخترق السماء. مع المد العالي، تنفصل عن العالم وتصبح مملكة منعزلة. الشوارع الضيقة المتعرجة والسلالم الحجرية تأخذك في رحلة صعود روحي ومادي. إنها أعجوبة معمارية وطبيعية تبدو وكأنها خرجت من قصص الفرسان والأساطير.',
        visitorTips: ['تجنب الصيف', 'جرب العجة']
      },
      {
        id: 'champs-elysees',
        name: 'الشانزليزيه',
        category: 'Modern',
        description: 'أشهر شارع في العالم.',
        imageUrl: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=2070&auto=format&fit=crop',
        story: 'طريق المجد والاحتفالات، يمتد من ساحة الكونكورد حتى قوس النصر المهيب. هنا سار المنتصرون، وهنا يحتفل الفرنسيون بأعيادهم الوطنية وانتصاراتهم الرياضية. أشجار الكستناء والمقاهي الفاخرة والمتاجر العالمية تجعل المشي فيه تجربة باريسية بامتياز. إنه ليس مجرد شارع، بل هو واجهة فرنسا للعالم.',
        visitorTips: ['اصعد قوس النصر', 'لادوريه']
      }
    ],
    restaurants: [
      {
        name: 'Guy Savoy',
        description: 'أحد أفضل المطاعم في العالم (3 نجوم ميشلان) في باريس.',
        cuisine: 'فرنسي / Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Le Jules Verne',
        description: 'تناول الطعام داخل برج إيفل مع إطلالة لا مثيل لها.',
        cuisine: 'فرنسي',
        rating: 4.7,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'L\'As du Fallafel',
        description: 'أشهر مكان للفلافل في حي ماريه، بسيط وشهي.',
        cuisine: 'Street Food',
        rating: 4.8,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Ritz Paris',
        stars: 5,
        price: '1800$+',
        rating: 9.8,
        description: 'أسطورة ساحة فاندوم، حيث تجتمع الفخامة والتاريخ والأدب.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Hôtel Plaza Athénée',
        stars: 5,
        price: '1500$+',
        rating: 9.6,
        description: 'الواجهة الحمراء الشهيرة المكسوة بنبات الغرنوقي وإطلالة البرج.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Le Bristol Paris',
        stars: 5,
        price: '1600$+',
        rating: 9.7,
        description: 'قصر باريسي أصيل يشتهر بقططه المقيمة ومطعمه ثلاث نجوم.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Hôtel du Cap-Eden-Roc',
        stars: 5,
        price: '2000$+',
        rating: 9.9,
        description: 'جوهرة الريفيرا الفرنسية، ملاذ النجوم والمشاهير في أنتيب.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Cheval Blanc St-Tropez',
        stars: 5,
        price: '1800$+',
        rating: 9.5,
        description: 'ملاذ هادئ وحصري على شاطئ البحر المتوسط.',
        imageUrl: getImg('luxuryHotel', 3)
      }
    ]
  },
  {
    id: 'italy',
    name: 'إيطاليا',
    englishName: 'Italy',
    region: 'Europe',
    description: 'متحف مفتوح وطعام لذيذ.',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2086&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['لا كابتشينو بعد 11', 'البقشيش غير إلزامي', 'لا تتعجل'],
    summerActivities: ['الاستجمام في ساحل أمالفي وجزيرة كابري', 'استكشاف شواطئ سردينيا الفيروزية', 'حضور عروض الأوبرا في فيرونا', 'ركوب الجندول في البندقية'],
    winterActivities: ['التزلج في جبال الدولوميت', 'زيارة متاحف فلورنسا وروما دون زحام', 'حضور كرنفال البندقية', 'التسوق في ميلانو'],
    landmarks: [
      {
        id: 'colosseum',
        name: 'الكولوسيوم',
        category: 'History',
        description: 'المدرج الروماني العملاق.',
        imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop',
        story: 'هنا كانت روما تستعرض قوتها ووحشيتها. مدرج عملاق شهد صرخات الجماهير ودماء المصارعين وهم يقاتلون من أجل حياتهم. الهندسة المعجزة التي سمحت بإخلاء عشرات الآلاف في دقائق، والأقبية التي احتجزت الوحوش والمقاتلين، كلها تروي قصة الإمبراطورية عظيمة وقاسية. الوقوف في داخله هو مواجهة مباشرة مع عظمة التاريخ الروماني.',
        visitorTips: ['اشتر التذاكر مسبقاً', 'زر المنتدى الروماني']
      },
      {
        id: 'venice-canals',
        name: 'قنوات البندقية',
        category: 'History',
        description: 'مدينة عائمة.',
        imageUrl: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2070&auto=format&fit=crop',
        story: 'مدينة بنيت على الماء في تحدٍ للمستحيل. القنوات هي الشوارع، والجندول هو السيارة، والقصور البيزنطية والقوطية تنعكس على سطح الماء كحلم سحري. الهدوء الذي يخيم عندما تبتعد عن الساحات الرئيسية لا يقطعه سوى صوت المجداف يشق الماء. البندقية ليست مجرد مدينة، بل هي معجزة فنية عائمة تقاوم الزمن والغرق.',
        visitorTips: ['تجنب مطاعم الساحات', 'استخدم الفابوريتو']
      },
      {
        id: 'leaning-tower-pisa',
        name: 'برج بيزا',
        category: 'History',
        description: 'البرج المائل الشهير.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'خطأ هندسي تحول إلى أشهر معلم في العالم. بدأ يميل حتى قبل اكتمال بنائه، وظل يتحدى الجاذبية لقرون. بياض رخامه اللامع وساحة المعجزات الخضراء حوله يخلقان مشهداً جميلاً وغريباً. الصعود إلى قمته المائلة يمنحك شعوراً غريباً بعدم التوازن، لكن الإطلالة والقصة تستحقان المغامرة.',
        visitorTips: ['الصورة التقليدية', 'ساحة المعجزات']
      },
      {
        id: 'pompeii',
        name: 'بومبي',
        category: 'History',
        description: 'مدينة مدفونة تحت الرماد.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'في لحظة واحدة، توقف الزمن هنا. ثار بركان فيزوف ودفن مدينة كاملة تحت الرماد، محتفظاً بتفاصيل الحياة اليومية للرومان كما هي. التجول في شوارعها، ورؤية المخابز والمنازل وحتى بقايا البشر المتحجرة، هو تجربة مؤثرة ومخيفة تذكرنا بقوة الطبيعة وهشاشة الحياة البشرية.',
        visitorTips: ['احضر الماء', 'استعن بمرشد']
      },
      {
        id: 'trevi-fountain',
        name: 'نافورة تريفي',
        category: 'History',
        description: 'أشهر نافورة باروكية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'سيمفونية من الماء والحجر تجسد إله البحر نبتون وعربته. صوت المياه المتدفقة يملأ الساحة الصغيرة ويغطي على ضجيج المدينة. تقول الأسطورة إن رمي عملة معدنية في النافورة بيدك اليمنى من فوق كتفك الأيسر يضمن لك العودة إلى روما يوماً ما. إنها مكان للأحلام والرومانسية والفن الباروكي في أبهى صوره.',
        visitorTips: ['زرها فجراً', 'احذر النشالين']
      }
    ],
    restaurants: [
      {
        name: 'Osteria Francescana',
        description: 'مطعم ماسيمو بوتورا الشهير عالمياً في مودينا.',
        cuisine: 'إيطالي حديث / Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Da Vittorio',
        description: 'مأكولات إيطالية كلاسيكية في أجواء عائلية فاخرة.',
        cuisine: 'إيطالي',
        rating: 4.8,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Antico Vinaio',
        description: 'أشهر ساندويتشات في فلورنسا، الطابور يستحق الانتظار.',
        cuisine: 'Street Food',
        rating: 4.7,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Le Sirenuse',
        stars: 5,
        price: '1500$+',
        rating: 9.7,
        description: 'أيقونة ساحل أمالفي في بوسيتانو، ديكور أحمر مميز وإطلالات ساحرة.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Hotel Danieli',
        stars: 5,
        price: '1200$+',
        rating: 9.2,
        description: 'قصر فينيسي تاريخي قرب ساحة سان ماركو، فخامة قديمة.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Villa d\'Este',
        stars: 5,
        price: '1400$+',
        rating: 9.6,
        description: 'قصر النهضة على بحيرة كومو، حدائق عائمة وأناقة أبدية.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Four Seasons Florence',
        stars: 5,
        price: '1000$+',
        rating: 9.5,
        description: 'واحة في قلب فلورنسا تضم أكبر حديقة خاصة في المدينة.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Hotel de Russie',
        stars: 5,
        price: '900$+',
        rating: 9.3,
        description: 'موقع مميز قرب السلالم الإسبانية في روما، وحديقة سرية رائعة.',
        imageUrl: getImg('luxuryHotel', 2)
      }
    ]
  },
  {
    id: 'japan',
    name: 'اليابان',
    englishName: 'Japan',
    region: 'Asia',
    description: 'كوكب اليابان، تناغم التراث والتكنولوجيا.',
    heroImage: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1000&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['الانحناء تحية', 'هدوء في القطار', 'اخلع الحذاء'],
    summerActivities: ['تسلق جبل فوجي (موسم التسلق)', 'حضور مهرجانات الألعاب النارية (هانابي)', 'زيارة حقول اللافندر في هوكايدو', 'الشواطئ في أوكيناوا'],
    winterActivities: ['التزلج في نيسيكو وهاكوبا (أفضل ثلج في العالم)', 'زيارة قرود الثلج في الينابيع الحارة', 'مهرجان الثلج في سابورو', 'مشاهدة إضاءات الشتاء في طوكيو'],
    landmarks: [
      {
        id: 'fuji',
        name: 'جبل فوجي',
        category: 'Nature',
        description: 'الجبل المقدس.',
        imageUrl: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1000&auto=format&fit=crop',
        story: 'رمز اليابان وروحها المقدسة. شكله المخروطي المثالي المغطى بالثلوج ألهم الفنانين والشعراء لقرون. بالنسبة لليابانيين، هو أكثر من مجرد جبل، إنه إله وشخصية حية. رؤيته وهو يطل من خلف ناطحات سحاب طوكيو أو ينعكس على بحيرة هادئة هي لحظة من الصفاء التام.',
        visitorTips: ['رؤية صباحية', 'تسلق في الصيف']
      },
      {
        id: 'fushimi-inari',
        name: 'فوشيمي إيناري',
        category: 'History',
        description: 'بوابات توري الحمراء.',
        imageUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=2070&auto=format&fit=crop',
        story: 'ممر لا ينتهي من آلاف البوابات القرمزية التي تصعد جبل إيناري المقدس. كل بوابة هي تبرع وشكر للإله إيناري، إله الرزق. المشي عبر هذا النفق الأحمر المتوهج، خاصة مع ضوء الشمس المتسلل، يشعرك بأنك تعبر إلى عالم الأرواح. الثعالب الحجرية تراقبك بصمت، حارسة لهذا المكان الروحاني الفريد.',
        visitorTips: ['مفتوح 24 ساعة', 'اصعد للأعلى']
      },
      {
        id: 'kinkaku-ji',
        name: 'الجناح الذهبي',
        category: 'History',
        description: 'معبد مغطى بالذهب.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'معبد زن بوذي مغطى بالكامل بأوراق الذهب الخالص، يعكس بريقه على البحيرة التي أمامه في مشهد يخطف الأنفاس. يمثل الانسجام التام بين العمارة والطبيعة. في كل موسم، سواء وسط خضرة الصيف أو ثلوج الشتاء، يبدو الجناح الذهبي كجوهرة مشعة ترمز إلى النقاء والجمال الأبدي في الثقافة اليابانية.',
        visitorTips: ['يلمع في الشمس', 'حدائق جميلة']
      },
      {
        id: 'shibuya-crossing',
        name: 'تقاطع شيبويا',
        category: 'Modern',
        description: 'الأكثر ازدحاماً.',
        imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop',
        story: 'عندما تضيء الإشارة الخضراء للمشاة، يتدفق طوفان بشري من كل الاتجاهات في رقصة فوضوية لكنها منظمة بشكل غريب. إنه قلب طوكيو النابض بالحداثة والسرعة. الشاشات العملاقة، أضواء النيون، وضجيج المدينة يخلق طاقة لا مثيل لها. مشاهدة هذا التقاطع هي مشاهدة لنبض الحياة الحضرية في القرن الواحد والعشرين.',
        visitorTips: ['ستاربكس للإطلالة', 'تمثال هاتشيكو']
      },
      {
        id: 'arashiyama',
        name: 'غابة الخيزران',
        category: 'Nature',
        description: 'ممر طبيعي ساحر.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'عندما تدخل هذا الممر، يحجب الخيزران العملاق ضوء الشمس ويخلق عالماً أخضر غامضاً. صوت الرياح وهي تعبر بين سيقان الخيزران له نغمة موسيقية خاصة اعتبرتها الحكومة اليابانية من "الأصوات المائة التي يجب الحفاظ عليها". إنه مكان للتأمل والهروب من الواقع، حيث تشعر بصغر حجمك وسط الطبيعة السامقة.',
        visitorTips: ['تعال فجراً', 'قطار رومانسي']
      }
    ],
    restaurants: [
      {
        name: 'Sukiyabashi Jiro',
        description: 'مطعم السوشي الأسطوري في طوكيو (يتطلب حجزاً تعجيزياً).',
        cuisine: 'سوشي / Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Ichiran Ramen',
        description: 'تجربة رامن فريدة حيث تأكل في مقصورة خاصة للتركيز على الطعم.',
        cuisine: 'رامن',
        rating: 4.7,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Narisawa',
        description: 'مطعم يدمج المطبخ الفرنسي مع المكونات والروح اليابانية (Satoyama).',
        cuisine: 'ياباني حديث / Fine Dining',
        rating: 4.8,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Aman Tokyo',
        stars: 5,
        price: '1200$+',
        rating: 9.6,
        description: 'واحة من السكينة فوق صخب طوكيو، تصميم ياباني بسيط ومذهل.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Hoshinoya Kyoto',
        stars: 5,
        price: '900$+',
        rating: 9.7,
        description: 'ريوكان (نزل) فاخر لا يمكن الوصول إليه إلا بالقارب في أراشيياما.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Park Hyatt Tokyo',
        stars: 5,
        price: '700$+',
        rating: 9.3,
        description: 'الفندق الشهير من فيلم "Lost in Translation"، مناظر ليلية خلابة.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Gora Kadan',
        stars: 5,
        price: '1000$+',
        rating: 9.5,
        description: 'ريوكان تقليدي فاخر في هاكوني مع ينابيع حارة (أونسن) خاصة.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Ritz-Carlton Kyoto',
        stars: 5,
        price: '1100$+',
        rating: 9.6,
        description: 'موقع مميز على نهر كامو، يمزج بين الحداثة وتقاليد كيوتو.',
        imageUrl: getImg('luxuryHotel', 0)
      }
    ]
  },
  {
    id: 'spain',
    name: 'إسبانيا',
    englishName: 'Spain',
    region: 'Europe',
    description: 'شمس وتاريخ وحياة.',
    heroImage: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['العشاء متأخر', 'القيلولة', 'التحية بقبلتين'],
    summerActivities: ['حضور مهرجان الطماطم (La Tomatina)', 'الاستمتاع بشواطئ إيبيزا ومايوركا', 'زيارة قصر الحمراء في غرناطة', 'تذوق التاباس في ساحات مدريد المفتوحة'],
    winterActivities: ['التزلج في جبال سييرا نيفادا', 'استكشاف إشبيلية وقرطبة في جو معتدل', 'أسواق الكريسماس في برشلونة', 'زيارة المتاحف الفنية في مدريد'],
    landmarks: [
      {
        id: 'alhambra',
        name: 'قصر الحمراء',
        category: 'History',
        description: 'جوهرة العمارة الإسلامية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'آخر معاقل الأندلس، قصر يبدو وكأنه نُسج من الخيال والضوء. النقوش العربية الدقيقة التي تغطي كل جدار تهمس بعبارة "لا غالب إلا الله". حدائق العريف وصوت خرير المياه في النوافير يأخذك إلى زمن السلاطين والشعراء. إنه مكان للحنين والجمال، يروي قصة حضارة عظيمة عاشت وأبدعت هنا.',
        visitorTips: ['احجز مسبقاً', 'حي البيازين']
      },
      {
        id: 'sagrada-familia',
        name: 'ساغرادا فاميليا',
        category: 'History',
        description: 'كنيسة غاودي غير المكتملة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'حلم من الحجر لم يكتمل بعد. المهندس المعماري المجنون والعبقري غاودي صممها لتكون "إنجيلاً منحوتاً في الحجر". الأعمدة الداخلية تشبه غابة من الأشجار، والضوء يتدفق عبر الزجاج الملون ليخلق جواً روحانياً ساحراً. إنها ليست مجرد كنيسة، بل هي كائن حي يتنفس الفن والإيمان، ومشروع يتحدى الزمن.',
        visitorTips: ['اصعد الأبراج', 'الإضاءة ظهراً']
      },
      {
        id: 'park-guell',
        name: 'حديقة جويل',
        category: 'Modern',
        description: 'حديقة ألوان غاودي.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'حديقة تبدو وكأنها خرجت من قصة خيالية للأطفال. بيوت تشبه الكعك، تنين مغطى بالفسيفساء الملونة، ومقاعد منحنية كالثعابين. غاودي استخدم الطبيعة كملهم وحول الحجر والسيراميك إلى أشكال عضوية حية. المشي هنا هو نزهة في عقل فنان عبقري رأى العالم بألوان وأشكال مختلفة عن الجميع.',
        visitorTips: ['تذكرة للجزء الأثري', 'استعد للمشي']
      },
      {
        id: 'plaza-mayor',
        name: 'بلازا مايور',
        category: 'History',
        description: 'قلب مدريد.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'شهدت هذه الساحة كل شيء: أسواقاً صاخبة، مصارعة ثيران، محاكم تفتيش، واحتفالات ملكية. اليوم، هي غرفة المعيشة المفتوحة لمدريد، حيث يجتمع الناس تحت الأقواس والشرفات التاريخية. الفنانون، الموسيقيون، والسياح يملأون المكان بالحياة. الجلوس هنا ومراقبة المارة هو درس في التاريخ والثقافة الإسبانية.',
        visitorTips: ['ساندوتش الحبار', 'جميلة في الكريسماس']
      },
      {
        id: 'seville-cathedral',
        name: 'كاتدرائية إشبيلية',
        category: 'History',
        description: 'أكبر كاتدرائية قوطية.',
        imageUrl: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=2071&auto=format&fit=crop',
        story: 'بنيت لتكون ضخمة ومهيبة لدرجة "تجعل من يراها يظن أننا مجانين". تضم ضريح المستكشف كريستوفر كولومبوس وبرج الخيرالدا، الذي كان مئذنة لمسجد قديم. الصعود إلى قمة البرج لا يتم عبر سلالم، بل عبر منحدرات كانت تسمح للمؤذن بالصعود على صهوة جواده. إنها رمز لتداخل الحضارات والأديان في تاريخ إسبانيا.',
        visitorTips: ['اصعد المنحدرات', 'ضريح كولومبوس']
      }
    ],
    restaurants: [
      {
        name: 'El Celler de Can Roca',
        description: 'أحد أشهر المطاعم في العالم في جيرونا، تجربة عائلية مبدعة.',
        cuisine: 'كاتالوني حديث / Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Disfrutar',
        description: 'مطعم في برشلونة يقدم تجربة طعام مليئة بالمفاجآت والمرح.',
        cuisine: 'إبداعي / حديث',
        rating: 4.8,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Botín',
        description: 'أقدم مطعم في العالم (موسوعة غينيس) في مدريد، يشتهر بالخنزير الرضيع.',
        cuisine: 'إسباني تقليدي',
        rating: 4.6,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Marbella Club Hotel',
        stars: 5,
        price: '700$+',
        rating: 9.4,
        description: 'منتجع شاطئي أندلسي فاخر، له تاريخ عريق مع المشاهير.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Hotel Arts Barcelona',
        stars: 5,
        price: '500$+',
        rating: 9.1,
        description: 'ناطحة سحاب على الشاطئ تقدم إطلالات بانورامية على البحر والمدينة.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Mandarin Oriental Barcelona',
        stars: 5,
        price: '600$+',
        rating: 9.3,
        description: 'تصميم داخلي مذهل في موقع مثالي على شارع باسيج دي غراسيا.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Hotel Alfonso XIII',
        stars: 5,
        price: '400$+',
        rating: 9.2,
        description: 'معلم تاريخي في إشبيلية يعكس العمارة الأندلسية بأبهى صورها.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Cap Rocat',
        stars: 5,
        price: '800$+',
        rating: 9.6,
        description: 'قلعة عسكرية قديمة تحولت لفندق بوتيك منعزل في مايوركا.',
        imageUrl: getImg('luxuryHotel', 5)
      }
    ]
  },
  {
    id: 'maldives',
    name: 'المالديف',
    englishName: 'Maldives',
    region: 'Asia',
    description: 'جنة الأرض والمياه الفيروزية.',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065&auto=format&fit=crop',
    bestTimeToVisit: 'نوفمبر إلى أبريل',
    culturalTips: ['بلاد محافظة', 'ممنوع الكحول خارج المنتجعات', 'احترم المرجان'],
    summerActivities: ['ركوب الأمواج في الجزر المرجانية', 'السباحة مع أسماك المانتا راي (موسمها)', 'الاستمتاع بأسعار المنتجعات المنخفضة', 'صيد الأسماك وقت الغروب'],
    winterActivities: ['الاسترخاء في الفيلات المائية الفاخرة', 'رحلات الغوص في المياه الصافية جداً', 'عشاء رومانسي على الشاطئ تحت النجوم', 'رحلات الدلافين عند الغروب'],
    landmarks: [
      {
        id: 'male',
        name: 'ماليه',
        category: 'Modern',
        description: 'العاصمة النابضة بالحياة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'بعيداً عن هدوء المنتجعات، تنبض ماليه بالحياة الحقيقية للمالديفيين. جزيرة صغيرة مكتظة بالألوان والضجيج والدراجات النارية. سوق السمك هنا هو قلب المدينة، حيث تصل قوارب الصيد محملة بخيرات المحيط الطازجة. المسجد الكبير بقبته الذهبية يذكرك بأن هذه الجزر ليست مجرد وجهة سياحية، بل أمة لها تاريخ وثقافة عريقة.',
        visitorTips: ['سوق السمك', 'المسجد الكبير']
      },
      {
        id: 'vaadhoo',
        name: 'جزيرة فادهو',
        category: 'Nature',
        description: 'بحر النجوم المضيء.',
        imageUrl: 'https://images.unsplash.com/photo-1563789031959-4c02bcb41319?q=80&w=1974&auto=format&fit=crop',
        story: 'عندما يحل الظلام، تتحول شواطئ هذه الجزيرة إلى مرآة للسماء، ولكن النجوم هنا تحت قدميك. العوالق النباتية المضيئة تلمع باللون الأزرق الفلوري مع كل حركة للموج، مما يخلق مشهداً خيالياً وكأنك تمشي في الفضاء. إنها ظاهرة بيولوجية طبيعية تبدو وكأنها سحر خالص، لحظة تجعلك تؤمن بالمعجزات.',
        visitorTips: ['ليال مظلمة', 'ظاهرة طبيعية']
      },
      {
        id: 'banana-reef',
        name: 'بنانا ريف',
        category: 'Nature',
        description: 'موقع غوص شهير.',
        imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
        story: 'تحت سطح الماء الهادئ، يختبئ عالم آخر مليء بالحياة والألوان. الشعاب المرجانية التي تشبه الموز هي موطن لآلاف الأسماك الملونة والسلاحف وأسماك القرش الأليفة. الغوص هنا هو الدخول في حوض سمك عملاق مفتوح، حيث تحيط بك الطبيعة من كل جانب في رقصة بطيئة وساحرة.',
        visitorTips: ['للجميع', 'سنوركلينج']
      },
      {
        id: 'maafushi',
        name: 'مافوشي',
        category: 'Modern',
        description: 'جزيرة محلية اقتصادية.',
        imageUrl: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1932&auto=format&fit=crop',
        story: 'هنا يمكنك تجربة المالديف الحقيقية بميزانية معقولة. بدلاً من العزلة الفاخرة، تجد نفسك بين السكان المحليين الودودين، تأكل طعامهم وتتعرف على حياتهم اليومية. الشواطئ جميلة، والرحلات البحرية تنطلق يومياً، لكن الروح هنا مختلفة، أكثر دفئاً وبساطة، وتذكرك بأن الجمال متاح للجميع.',
        visitorTips: ['بيكيني بيتش', 'رحلات صيد']
      },
      {
        id: 'baa-atoll',
        name: 'محمية با أتول',
        category: 'Nature',
        description: 'تجمع المانتا راي.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'محمية المحيط الحيوي لليونسكو، حيث تتجمع المئات من أسماك المانتا راي العملاقة لتتغذى في خليج هانيفارو. السباحة مع هذه العمالقة اللطيفة وهي تحلق في الماء حولك كطيور ضخمة هي تجربة تغير حياتك وتشعرك بالرهبة والاحترام لعظمة المحيطات.',
        visitorTips: ['غطس سطحي فقط', 'مايو لنوفمبر']
      }
    ],
    restaurants: [
      {
        name: 'Ithaa Undersea Restaurant',
        description: 'أول مطعم تحت الماء بالكامل في العالم، تجربة خيالية.',
        cuisine: 'عالمي / Fine Dining',
        rating: 5.0,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'The Lighthouse',
        description: 'مطعم فوق الماء في باروس، يشتهر بإطلالات الغروب والمأكولات البحرية.',
        cuisine: 'مأكولات بحرية',
        rating: 4.8,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Sea.Fire.Salt.',
        description: 'مطعم يقدم شرائح اللحم والمأكولات البحرية المشوية على الملح.',
        cuisine: 'Grill',
        rating: 4.7,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Soneva Jani',
        stars: 5,
        price: '2500$+',
        rating: 9.8,
        description: 'فيلات مائية مع منزلقات وأسقف قابلة للسحب لمشاهدة النجوم.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Gili Lankanfushi',
        stars: 5,
        price: '1500$+',
        rating: 9.7,
        description: 'مفهوم "لا أخبار، لا أحذية"، رفاهية طبيعية وفيلات عائمة ضخمة.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'One&Only Reethi Rah',
        stars: 5,
        price: '1800$+',
        rating: 9.6,
        description: 'الأكثر شهرة بين المشاهير، خصوصية تامة وشواطئ لا متناهية.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Conrad Maldives Rangali Island',
        stars: 5,
        price: '1000$+',
        rating: 9.4,
        description: 'موطن "المرجانة"، أول فيلا فندقية تحت الماء في العالم.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Waldorf Astoria Maldives Ithaafushi',
        stars: 5,
        price: '2000$+',
        rating: 9.5,
        description: 'جزيرة خاصة تضم 11 مطعماً وفيلات شاطئية ومائية واسعة جداً.',
        imageUrl: getImg('luxuryHotel', 4)
      }
    ]
  },
  {
    id: 'morocco',
    name: 'المغرب',
    englishName: 'Morocco',
    region: 'Arab World',
    description: 'مملكة الألوان والروائح، حيث تلتقي الصحراء بالبحر.',
    heroImage: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'مارس إلى مايو',
    culturalTips: ['شرب الشاي بالنعناع', 'المساومة', 'اللباس المحتشم'],
    summerActivities: ['الاسترخاء على شواطئ طنجة وأغادير', 'مهرجان كناوة في الصويرة', 'التخييم في جبال الأطلس هرباً من الحر', 'استكشاف الكهوف والشلالات في أقشور'],
    winterActivities: ['التزلج في منتجع أوكايمدن', 'قضاء ليلة في صحراء مرزوكة', 'الاستمتاع بالحمام المغربي التقليدي', 'استكشاف المدينة القديمة في فاس ومراكش'],
    landmarks: [
      {
        id: 'jemaa-el-fnaa',
        name: 'ساحة جامع الفنا',
        category: 'History',
        description: 'قلب مراكش النابض.',
        imageUrl: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=2073&auto=format&fit=crop',
        story: 'في النهار، هي ساحة سوق عادية، ولكن عند الغروب، تتحول إلى مسرح سحري في الهواء الطلق. الحواة، مروضوا الثعابين، الموسيقيون، ورواة القصص يملأون المكان. الدخان المتصاعد من أكشاك الشواء يختلط بأصوات الطبول والمزامير. إنها ليست مجرد ساحة، بل هي روح المغرب المتجسدة، فوضى جميلة ومغرية تأسر حواسك.',
        visitorTips: ['زر الساحة وقت الغروب', 'راقب جيوبك']
      },
      {
        id: 'chefchaouen',
        name: 'شفشاون',
        category: 'Hidden Gem',
        description: 'المدينة الزرقاء الساحرة.',
        imageUrl: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop',
        story: 'لؤلؤة زرقاء مخبأة بين جبال الريف الوعرة. كل جدار، كل باب، كل درج مصبوغ بظلال لا حصر لها من اللون الأزرق، مما يخلق شعوراً بالهدوء والسكينة وكأنك تمشي في السماء أو تحت البحر. تاريخها كملجأ للأندلسيين يظهر في عمارتها وثقافتها. التجول في أزقتها الضيقة هو علاج بصري ونفسي، بعيداً عن صخب المدن الكبرى.',
        visitorTips: ['استيقظ مبكراً', 'تذوق الجبن']
      },
      {
        id: 'hassan-ii-mosque',
        name: 'مسجد الحسن الثاني',
        category: 'Modern',
        description: 'تحفة معمارية فوق الماء.',
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1978&auto=format&fit=crop',
        story: 'بني جزء منه فوق المحيط الأطلسي ليرمز إلى الآية القرآنية "وكان عرشه على الماء". مئذنته الشاهقة هي الأطول في العالم، مزودة بليزر يشير نحو مكة. التفاصيل الحرفية من الزليج والجص والخشب هي ذروة الفن المغربي. صوت الأمواج وهي تضرب أسفل المسجد أثناء الصلاة يضيف بعداً روحانياً فريداً لهذا الصرح العظيم.',
        visitorTips: ['جولات لغير المسلمين', 'الساحة الخارجية']
      }
    ],
    restaurants: [
      {
        name: 'نوماد (Nomad)',
        description: 'مطبخ مغربي حديث مع إطلالة رائعة على سطح مراكش.',
        cuisine: 'مغربي حديث',
        rating: 4.6,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'La Grande Table Marocaine',
        description: 'تجربة طعام ملكية في فندق رويال منصور.',
        cuisine: 'Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Rick\'s Café',
        description: 'إحياء للمقهى الشهير من فيلم كازابلانكا.',
        cuisine: 'عالمي',
        rating: 4.5,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Royal Mansour Marrakech',
        stars: 5,
        price: '1500$+',
        rating: 9.8,
        description: 'تحفة فنية مغربية، كل ضيف يحصل على رياض (منزل) خاص به.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'La Mamounia',
        stars: 5,
        price: '700$+',
        rating: 9.6,
        description: 'فندق تاريخي أسطوري استضاف تشرشل وشابلن، حدائقه خلابة.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Kasbah Tamadot',
        stars: 5,
        price: '600$+',
        rating: 9.5,
        description: 'ملك للسير ريتشارد برانسون في جبال الأطلس، مناظر لا تصدق.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Amanjena',
        stars: 5,
        price: '900$+',
        rating: 9.4,
        description: 'واحة هادئة مستوحاة من عمارة مراكش القديمة.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Four Seasons Casablanca',
        stars: 5,
        price: '400$+',
        rating: 9.0,
        description: 'منتجع حضري على المحيط، يقدم نسمة هواء منعشة في الدار البيضاء.',
        imageUrl: getImg('luxuryHotel', 3)
      }
    ]
  },
  {
    id: 'germany',
    name: 'ألمانيا',
    englishName: 'Germany',
    region: 'Europe',
    description: 'قلب أوروبا، بلد القلاع والسيارات.',
    heroImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'الصيف والكرسمس',
    culturalTips: ['المواعيد مقدسة', 'احمل كاش', 'إعادة التدوير'],
    summerActivities: ['حضور مهرجانات البيرة والموسيقى', 'التنزه في الغابة السوداء', 'ركوب الدراجات على طول نهر الراين', 'استكشاف بحيرات بافاريا'],
    winterActivities: ['زيارة أسواق الكريسماس الساحرة (Nuremberg, Cologne)', 'التزلج في جبال الألب البافارية', 'زيارة المتاحف في برلين', 'الاستمتاع بالمنتجعات الصحية في بادن بادن'],
    landmarks: [
      {
        id: 'neuschwanstein',
        name: 'قلعة نويشفانشتاين',
        category: 'History',
        description: 'القلعة التي ألهمت ديزني.',
        imageUrl: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1920&auto=format&fit=crop',
        story: 'قلعة الأحلام التي بناها "الملك المجنون" لودفيج الثاني، ليس للحرب، بل ليعيش في عالمه الخيالي من الأوبرا والأساطير الجرمانية. تنتصب فوق تلة وسط جبال الألب البافارية كصورة من كتاب حكايات. مات الملك غامضاً قبل أن تكتمل، لكن قلعته بقيت لتلهم العالم بأسره، بما في ذلك والت ديزني.',
        visitorTips: ['جسر ماري', 'احجز التذاكر']
      },
      {
        id: 'brandenburg-gate',
        name: 'بوابة براندنبورغ',
        category: 'History',
        description: 'رمز الوحدة الألمانية.',
        imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2070&auto=format&fit=crop',
        story: 'كانت يوماً رمزاً للانقسام والحرب الباردة، حيث وقف الجدار العازل أمامها مباشرة. لكن في تلك الليلة التاريخية، صعد الناس فوق الجدار ورقصوا أمام البوابة احتفالاً بالحرية. اليوم، تقف البوابة وتماثيلها البرونزية كشاهد صامت على تاريخ ألمانيا المضطرب وانتصار الوحدة والسلام في النهاية.',
        visitorTips: ['زرها ليلاً', 'مبنى الرايخستاغ']
      },
      {
        id: 'cologne-cathedral',
        name: 'كاتدرائية كولونيا',
        category: 'History',
        description: 'تحفة قوطية نجت من الحرب.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'استغرق بناؤها أكثر من 600 عام، وعندما اكتملت، كانت أطول مبنى في العالم. خلال الحرب العالمية الثانية، سويت مدينة كولونيا بالأرض، لكن الكاتدرائية بقيت واقفة وسط الركام كمعجزة سوداء، مرشدة للطيارين ورمزاً للصمود. أبراجها الشاهقة وزجاجها الملون يحبسان الأنفاس ويشعرانك برهبة الإيمان والعمارة.',
        visitorTips: ['اصعد القمة', 'بجوار المحطة']
      }
    ],
    restaurants: [
      {
        name: 'Hofbräuhaus',
        description: 'أشهر قاعة بيرة ومطعم في ميونخ.',
        cuisine: 'ألماني تقليدي',
        rating: 4.5,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Tim Raue',
        description: 'مطعم آسيوي حديث في برلين (نجمتي ميشلان).',
        cuisine: 'Asian Fusion',
        rating: 4.8,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Mustafas Gemüse Kebap',
        description: 'أشهر دونر كباب في برلين.',
        cuisine: 'Street Food',
        rating: 4.7,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Hotel Adlon Kempinski',
        stars: 5,
        price: '600$+',
        rating: 9.4,
        description: 'بجوار بوابة براندنبورغ مباشرة، تاريخي وأيقوني في برلين.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Bayerischer Hof',
        stars: 5,
        price: '500$+',
        rating: 9.1,
        description: 'فندق فخم في ميونخ، يضم سينما ومطاعم ميشلان.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Brenners Park-Hotel & Spa',
        stars: 5,
        price: '700$+',
        rating: 9.5,
        description: 'منتجع صحي عالمي في بادن بادن، وجهة للاسترخاء التام.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Schloss Elmau',
        stars: 5,
        price: '800$+',
        rating: 9.6,
        description: 'قلعة فاخرة في جبال الألب البافارية، استضافت قمة G7.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Ritz-Carlton Wolfsburg',
        stars: 5,
        price: '400$+',
        rating: 9.2,
        description: 'تصميم عصري في مدينة السيارات، بجوار مصنع فولكس واجن.',
        imageUrl: getImg('luxuryHotel', 2)
      }
    ]
  },
  {
    id: 'australia',
    name: 'أستراليا',
    englishName: 'Australia',
    region: 'Oceania',
    description: 'القارة الحمراء والشواطئ اللامتناهية.',
    heroImage: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2000&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['No worries', 'واقي الشمس', 'بقشيش مرحب به'],
    summerActivities: ['مشاهدة الألعاب النارية في رأس السنة في سيدني', 'الاسترخاء على شاطئ بوندي', 'مهرجان التنس المفتوح في ملبورن', 'الغوص في الحاجز المرجاني العظيم'],
    winterActivities: ['التزلج في جبال فيكتوريا الثلجية', 'استكشاف صحراء "المركز الأحمر" في طقس معتدل', 'مشاهدة الحيتان على الساحل الشرقي', 'زيارة متاحف ومعارض ملبورن'],
    landmarks: [
      {
        id: 'sydney-opera-house',
        name: 'دار أوبرا سيدني',
        category: 'Modern',
        description: 'أشرعة بيضاء على الميناء.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'تحفة معمارية غيرت شكل أستراليا للأبد. أشرعتها البيضاء المتشابكة تبدو وكأنها سفينة تستعد للإبحار في المحيط. كان بناؤها مليئاً بالتحديات والجدل، لكنها اليوم تقف كرمز للإبداع البشري. عند الغروب، يتلون بلاطها الأبيض بألوان السماء، مما يجعلها مشهداً حياً يتنفس مع المدينة.',
        visitorTips: ['جولة خلف الكواليس', 'أوبرا بار']
      },
      {
        id: 'great-barrier-reef',
        name: 'الحاجز المرجاني',
        category: 'Nature',
        description: 'أكبر نظام شعاب في العالم.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'الكائن الحي الوحيد الذي يمكن رؤيته من الفضاء. غابة تحت الماء من الألوان والحياة، تضم آلاف الأنواع من الأسماك والمرجان والسلاحف. الغوص هنا هو الدخول في عالم صامت ولكنه صاخب بالحياة والألوان. إنه تذكير بجمال كوكبنا وهشاشته في آن واحد، كنز طبيعي يجب حمايته.',
        visitorTips: ['جولة من كيرنز', 'غوص']
      },
      {
        id: 'uluru',
        name: 'أولورو',
        category: 'Nature',
        description: 'صخرة حمراء مقدسة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'قلب أستراليا الأحمر، صخرة ضخمة تنبثق من الصحراء المنبسطة وتحمل قدسية عميقة لشعب الأنانغو الأصلي. يتغير لونها بشكل سحري من الأحمر الناري عند الغروب إلى الرمادي الغامق عند الفجر. الكهوف في قاعدتها مليئة برسومات قديمة تروي أساطير الخلق "وقت الحلم". إنه مكان تشعر فيه بروحانية الأرض القديمة.',
        visitorTips: ['شروق الشمس', 'احترم الثقافة']
      }
    ],
    restaurants: [
      {
        name: 'Quay',
        description: 'إطلالة على الأوبرا وطعام أسترالي حديث.',
        cuisine: 'أسترالي حديث',
        rating: 4.9,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Attica',
        description: 'مكونات أصلية وتاريخ السكان الأصليين.',
        cuisine: 'Fine Dining',
        rating: 4.8,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Chin Chin',
        description: 'مأكولات آسيوية في ملبورن.',
        cuisine: 'Asian Fusion',
        rating: 4.6,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Park Hyatt Sydney',
        stars: 5,
        price: '1000$+',
        rating: 9.6,
        description: 'أفضل إطلالة على دار الأوبرا والجسر، فخامة مطلقة في الميناء.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Southern Ocean Lodge',
        stars: 5,
        price: '1500$+',
        rating: 9.8,
        description: 'نزل بيئي فاخر في جزيرة الكنغر، تصميم مذهل على الجرف.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Qualia',
        stars: 5,
        price: '1200$+',
        rating: 9.7,
        description: 'منتجع حصري في جزيرة هاميلتون، بوابة للحاجز المرجاني العظيم.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Longitude 131°',
        stars: 5,
        price: '2000$+',
        rating: 9.5,
        description: 'خيام فاخرة تطل مباشرة على صخرة أولورو المقدسة.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Crown Towers Melbourne',
        stars: 5,
        price: '400$+',
        rating: 9.1,
        description: 'أفخم فندق في ملبورن، جزء من مجمع ترفيهي ضخم.',
        imageUrl: getImg('luxuryHotel', 1)
      }
    ]
  },
  {
    id: 'canada',
    name: 'كندا',
    englishName: 'Canada',
    region: 'Americas',
    description: 'الجمال الطبيعي الخام.',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2011&auto=format&fit=crop',
    bestTimeToVisit: 'الصيف أو الشتاء للتزلج',
    culturalTips: ['التهذيب وقول آسف', 'البقشيش', 'احترم الطبيعة'],
    summerActivities: ['التخييم والمشي في جبال الروكي', 'مشاهدة الدببة والحيتان في كولومبيا البريطانية', 'مهرجان كالجاري ستامبيد', 'زيارة شلالات نياجرا وركوب القارب'],
    winterActivities: ['التزلج في ويسلر وبانف', 'التزلج على الجليد في قناة ريدو بأوتاوا', 'مشاهدة الشفق القطبي في يوكون', 'مهرجان الشتاء في كيبيك'],
    landmarks: [
      {
        id: 'banff-national-park',
        name: 'منتزه بانف',
        category: 'Nature',
        description: 'بحيرات فيروزية وجبال.',
        imageUrl: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop',
        story: 'جوهرة جبال الروكي الكندية. بحيرة لويز بمياهها الفيروزية الصادمة والجبال الجليدية التي تحيط بها تخلق مشهداً يبدو أجمل من أن يكون حقيقياً. الهواء هنا نقي لدرجة تؤلم رئتيك، والحياة البرية وفيرة. إنه المكان الذي تشعر فيه بجمال الكوكب البكر وعظمته، وتدرك لماذا يجب علينا حماية الطبيعة.',
        visitorTips: ['بحيرة لويز', 'زر البلدة']
      },
      {
        id: 'niagara-falls',
        name: 'شلالات نياجرا',
        category: 'Nature',
        description: 'قوة المياه الهادرة.',
        imageUrl: 'https://images.unsplash.com/photo-1533094602577-198d3beab8ea?q=80&w=2070&auto=format&fit=crop',
        story: 'واحدة من أقوى عروض الطبيعة على الأرض. ملايين اللترات من المياه تتدفق كل دقيقة بصوت رعد دائم. ركوب القارب والاقتراب من "حدوة الحصان" يجعلك تبتل برذاذ الشلال وتشعر بقوته الهائلة تهز القارب. ليلاً، تضاء الشلالات بألوان ساحرة، لكن قوتها الخام هي ما سيبقى في ذاكرتك للأبد.',
        visitorTips: ['اركب القارب', 'شاهدها ليلاً']
      },
      {
        id: 'cntower',
        name: 'برج سي إن',
        category: 'Modern',
        description: 'أيقونة تورنتو.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'كان يوماً أطول مبنى في العالم، ولا يزال يسيطر على أفق تورنتو كإبرة خرسانية عملاقة. الصعود إليه بالمصعد الزجاجي يكشف لك المدينة والبحيرة كخريطة حية. لأصحاب القلوب القوية، المشي على الحافة الخارجية هو تجربة أدرينالين خالصة. إنه رمز لتقدم كندا وحداثتها.',
        visitorTips: ['المشي على الحافة', 'أرضية زجاجية']
      }
    ],
    restaurants: [
      {
        name: 'Alo',
        description: 'أفضل مطعم في كندا، فرنسي معاصر.',
        cuisine: 'Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Schwartz\'s Deli',
        description: 'ساندويتشات اللحم المدخن الأسطورية.',
        cuisine: 'Deli',
        rating: 4.7,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Toqué!',
        description: 'رائد المطبخ الكندي الراقي.',
        cuisine: 'كندي معاصر',
        rating: 4.8,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Fairmont Banff Springs',
        stars: 5,
        price: '600$+',
        rating: 9.3,
        description: 'قلعة في جبال الروكي، لقبها "قلعة الشمال".',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Fogo Island Inn',
        stars: 5,
        price: '2000$+',
        rating: 9.9,
        description: 'فندق معماري مذهل في جزيرة نائية بنيوفاوندلاند، تجربة فريدة.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Fairmont Chateau Lake Louise',
        stars: 5,
        price: '700$+',
        rating: 9.4,
        description: 'يطل مباشرة على البحيرة الفيروزية الشهيرة، موقع لا يضاهى.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Ritz-Carlton Montreal',
        stars: 5,
        price: '500$+',
        rating: 9.5,
        description: 'الفندق التاريخي الفاخر حيث قضى إليزابيث تايلور وريتشارد بيرتون شهر العسل.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Four Seasons Toronto',
        stars: 5,
        price: '600$+',
        rating: 9.4,
        description: 'أناقة عصرية في حي يوركفيل الراقي بتورنتو.',
        imageUrl: getImg('luxuryHotel', 0)
      }
    ]
  },
  {
    id: 'india',
    name: 'الهند',
    englishName: 'India',
    region: 'Asia',
    description: 'بلد التناقضات والألوان.',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
    bestTimeToVisit: 'أكتوبر إلى مارس',
    culturalTips: ['الأكل باليد اليمنى', 'اخلع الحذاء', 'المياه المعبأة فقط'],
    summerActivities: ['الهروب إلى جبال الهيمالايا ولاداخ', 'زيارة مزارع الشاي في دارجيلنغ', 'الاستمتاع ببرودة كشمير وبحيرة دال', 'اليوغا والتأمل في ريشيكيش'],
    winterActivities: ['زيارة المثلث الذهبي (دلهي، أغرا، جايبور)', 'الاستمتاع بشواطئ غوا الدافئة', 'رحلة بالقارب في مياه كيرالا الخلفية', 'سفاري النمور في راجاستان'],
    landmarks: [
      {
        id: 'taj-mahal',
        name: 'تاج محل',
        category: 'History',
        description: 'قصيدة من الرخام.',
        imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop',
        story: 'دمعة رخامية على خد الزمن، كما وصفه الشاعر طاغور. بناه الإمبراطور شاه جاهان تخليداً لذكرى زوجته ممتاز محل، ليكون أجمل مقبرة في العالم. الرخام الأبيض يتغير لونه مع ضوء الشمس والقمر، مرصعاً بالأحجار الكريمة. إنه ليس مجرد مبنى، بل هو تجسيد للحب والحزن والجمال المعماري الذي لا يضاهى.',
        visitorTips: ['تعال عند الشروق', 'ممنوع الطعام']
      },
      {
        id: 'varanasi',
        name: 'فاراناسي',
        category: 'History',
        description: 'مدينة مقدسة على الغانج.',
        imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop',
        story: 'أقدم مدينة مأهولة باستمرار في العالم، حيث الحياة والموت يرقصان جنباً إلى جنب على ضفاف نهر الغانج المقدس. طقوس الحرق، الحجاج يغتسلون للتطهر، وقرع الأجراس، وروائح البخور والزهور. فاراناسي هي تجربة مكثفة لكل الحواس، مكان يواجهك بحقائق الوجود ويجعلك تتساءل عن معنى الحياة والروحانية.',
        visitorTips: ['ركوب القارب', 'طقوس الآرتي']
      },
      {
        id: 'jaipur-hawa-mahal',
        name: 'هوا محل',
        category: 'History',
        description: 'قصر الرياح الوردي.',
        imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop',
        story: 'واجهة معمارية مذهلة تشبه خلية النحل، بنوافذها الصغيرة الكثيرة التي سمحت لنساء القصر الملكي بمشاهدة الحياة في الشارع والمهرجانات دون أن يراهن أحد. تصميمه يسمح للرياح بالمرور وتبريد القصر في صيف الهند الحار. هذا القصر الوردي هو رمز لجايبور وللغموض والجمال الذي أحاط بحياة القصور الملكية.',
        visitorTips: ['تصوير من المقاهي', 'قلب السوق']
      }
    ],
    restaurants: [
      {
        name: 'Indian Accent',
        description: 'مطبخ هندي بلمسة عصرية مبتكرة.',
        cuisine: 'هندي حديث',
        rating: 4.9,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Bukhara',
        description: 'تندوري وخبز نان عملاق.',
        cuisine: 'شمال هندي',
        rating: 4.8,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Karim\'s',
        description: 'مأكولات مغولية تقليدية في دلهي.',
        cuisine: 'مغولي',
        rating: 4.6,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Taj Lake Palace',
        stars: 5,
        price: '700$+',
        rating: 9.7,
        description: 'قصر عائم من الرخام الأبيض في أودايبور، رومانسي للغاية.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'The Oberoi Amarvilas',
        stars: 5,
        price: '800$+',
        rating: 9.8,
        description: 'إطلالة لا تحجب على تاج محل من كل غرفة.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Umaid Bhawan Palace',
        stars: 5,
        price: '900$+',
        rating: 9.6,
        description: 'أحد أكبر المساكن الخاصة في العالم، جزء منه فندق ملكي.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Rambagh Palace',
        stars: 5,
        price: '600$+',
        rating: 9.5,
        description: 'جوهرة جايبور، حدائق رائعة وطاووس يتجول بحرية.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'The Leela Palace New Delhi',
        stars: 5,
        price: '400$+',
        rating: 9.3,
        description: 'فخامة حديثة في العاصمة الدبلوماسية.',
        imageUrl: getImg('luxuryHotel', 5)
      }
    ]
  },
  {
    id: 'indonesia',
    name: 'إندونيسيا',
    englishName: 'Indonesia',
    region: 'Asia',
    description: 'أرخبيل الجمال الاستوائي.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    bestTimeToVisit: 'الموسم الجاف',
    culturalTips: ['اليد اليمنى', 'السارونج', 'الابتسامة'],
    summerActivities: ['ركوب الأمواج في بالي', 'تسلق بركان جبل برومو عند الشروق', 'الغوص في جزر جيلي', 'زيارة محميات إنسان الغاب في بورنيو'],
    winterActivities: ['الطقس ماطر ولكن المنتجعات فاخرة', 'استكشاف المعابد القديمة في يوجياكرتا', 'التسوق وتناول الطعام في جاكرتا', 'الاسترخاء في منتجعات أوبود الصحية'],
    landmarks: [
      {
        id: 'bali-ubud',
        name: 'أوبود',
        category: 'Nature',
        description: 'مصاطب الأرز والثقافة.',
        imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
        story: 'القلب الثقافي والروحي لبالي. هنا، تتدفق الحياة بإيقاع الطبيعة البطيء. مصاطب الأرز الخضراء الزمردية تنحدر في الوديان، والمعابد الهندوسية تفوح برائحة البخور والزهور. أوبود هي ملاذ للفنانين والباحثين عن السلام الداخلي، مكان يشفيك بجماله وهدوئه وطاقته الإيجابية.',
        visitorTips: ['شروق الشمس', 'غابة القرود']
      },
      {
        id: 'borobudur',
        name: 'بوروبودور',
        category: 'History',
        description: 'أكبر معبد بوذي.',
        imageUrl: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=2070&auto=format&fit=crop',
        story: 'ماندالا حجرية عملاقة وسط الغابة، ظلت مدفونة تحت الرماد البركاني لقرون حتى أُعيد اكتشافها. الصعود إلى قمته هو رحلة رمزية للوصول إلى النيرفانا. عند شروق الشمس، تبرز الأبراج الجرسية (الستوبا) وسلسلة الجبال البركانية في الخلفية في مشهد روحاني يجعلك تشعر بالسكينة والخشوع أمام عظمة الماضي.',
        visitorTips: ['تذكرة الشروق', 'ملابس مريحة']
      },
      {
        id: 'komodo-island',
        name: 'جزيرة كومودو',
        category: 'Nature',
        description: 'موطن التنانين.',
        imageUrl: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2070&auto=format&fit=crop',
        story: 'كأنك عدت إلى عصر الديناصورات. هذه الجزيرة الجافة والقاسية هي الموطن الوحيد في العالم لتنين الكومودو، أكبر سحلية على وجه الأرض. رؤية هذه الوحوش المفترسة وهي تسير ببطء وثقة في بيئتها الطبيعية تثير الرهبة والخوف. الشواطئ الوردية النادرة تضيف لمسة سريالية لهذا المكان البري والخطير.',
        visitorTips: ['مرشد ضروري', 'شاطئ وردي']
      }
    ],
    restaurants: [
      {
        name: 'Locavore',
        description: 'مكونات محلية وأطباق إبداعية في أوبود.',
        cuisine: 'Modern Indonesian',
        rating: 4.8,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Merah Putih',
        description: 'مأكولات إندونيسية تقليدية وحديثة.',
        cuisine: 'إندونيسي',
        rating: 4.7,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Ibu Oka',
        description: 'خنزير مشوي بالي شهير.',
        cuisine: 'بالي تقليدي',
        rating: 4.5,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Amandari',
        stars: 5,
        price: '900$+',
        rating: 9.6,
        description: 'تصميم قرية بالي تقليدية مطلة على وادي أيونغ، هدوء تام.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Four Seasons Sayan',
        stars: 5,
        price: '800$+',
        rating: 9.5,
        description: 'مدخل درامي عبر جسر معلق، وفيلات وسط الغابة.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Nihi Sumba',
        stars: 5,
        price: '1500$+',
        rating: 9.9,
        description: 'اختير كأفضل فندق في العالم، رفاهية برية في جزيرة نائية.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Mandapa, a Ritz-Carlton Reserve',
        stars: 5,
        price: '1000$+',
        rating: 9.7,
        description: 'تجربة حصرية جداً في أوبود، محاطة بالمعابد والنهر.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'The Mulia',
        stars: 5,
        price: '500$+',
        rating: 9.3,
        description: 'منتجع ضخم على شاطئ نوسا دوا، معروف بمسابحه وتماثيله.',
        imageUrl: getImg('luxuryHotel', 4)
      }
    ]
  },
  {
    id: 'south-korea',
    name: 'كوريا الجنوبية',
    englishName: 'South Korea',
    region: 'Asia',
    description: 'التكنولوجيا والتاريخ والكيمتشي.',
    heroImage: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1974&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['الانحناء', 'كلتا اليدين', 'لا بقشيش'],
    summerActivities: ['الاسترخاء على شواطئ بوسان', 'مهرجان الطين في بوريونغ', 'التخييم والمشي في الجبال', 'تناول البينغسو (الحلوى المثلجة)'],
    winterActivities: ['التزلج في منتجعات بيونغ تشانغ', 'تجربة الساونا الكورية (جيمجيلبانغ)', 'صيد الأسماك في الجليد', 'تناول طعام الشارع الساخن في ميونغ دونغ'],
    landmarks: [
      {
        id: 'gyeongbokgung',
        name: 'قصر جيونج بوك',
        category: 'History',
        description: 'القصر الملكي الرئيسي.',
        imageUrl: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=2070&auto=format&fit=crop',
        story: 'قلب سلالة جوسون الحاكمة، حيث الهندسة المعمارية الخشبية الدقيقة والألوان الزاهية تتناغم مع الجبال في الخلفية. رغم تدميره وإعادة بنائه عبر القرون، لا يزال القصر يحتفظ بهيبته الملكية. رؤية الحراس بملابسهم التقليدية الملونة وهم يقومون بمراسم التبديل تأخذك في رحلة إلى زمن الملوك والنبلاء.',
        visitorTips: ['تغيير الحرس', 'ارتد هانبوك']
      },
      {
        id: 'n-seoul-tower',
        name: 'برج إن سول',
        category: 'Modern',
        description: 'إطلالة بانورامية.',
        imageUrl: 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=2070&auto=format&fit=crop',
        story: 'منارة حديثة تطل على مدينة سيول المترامية الأطراف. ليلاً، يضيء البرج بألوان مختلفة، ويصبح نقطة علامة رومانسية للأزواج الذين يعلقون أقفال الحب على أسواره. الصعود إليه يمنحك نظرة شاملة على كيفية تعايش الطبيعة (جبل نامسان) مع ناطحات السحاب والتكنولوجيا في هذه المدينة الديناميكية.',
        visitorTips: ['تلفريك', 'حمامات بالإطلالة']
      },
      {
        id: 'bukchon-hanok',
        name: 'قرية بوكشون',
        category: 'History',
        description: 'منازل تقليدية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'وسط الغابة الخرسانية لسيول الحديثة، تقع هذه القرية ككبسولة زمنية. مئات المنازل التقليدية (الهانوك) بأسقفها المنحنية وشوارعها الضيقة التي كانت يوماً مسكناً للنبلاء. المشي هنا هو تمرين في الهدوء والجمال، حيث يمكنك لمس الخشب القديم وتخيل الحياة الكورية قبل ظهور ناطحات السحاب.',
        visitorTips: ['التزم الهدوء', 'مقاهي تقليدية']
      }
    ],
    restaurants: [
      {
        name: 'Jungsik',
        description: 'مطبخ كوري جزيئي حديث.',
        cuisine: 'Fine Dining',
        rating: 4.8,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Tosokchon',
        description: 'أفضل سامجيتانج (شوربة دجاج).',
        cuisine: 'كوري تقليدي',
        rating: 4.6,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Myeongdong Kyoja',
        description: 'نودلز وزلابية شهيرة.',
        cuisine: 'Casual',
        rating: 4.7,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'The Shilla Seoul',
        stars: 5,
        price: '400$+',
        rating: 9.3,
        description: 'فندق تاريخي يجمع بين التقاليد الكورية والفخامة العصرية.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Signiel Seoul',
        stars: 5,
        price: '600$+',
        rating: 9.5,
        description: 'يقع في برج لوت وورلد (خامس أطول مبنى)، إطلالات فوق السحاب.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Four Seasons Seoul',
        stars: 5,
        price: '500$+',
        rating: 9.4,
        description: 'تصميم حديث وموقع مركزي قريب من القصور التاريخية.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Paradise City',
        stars: 5,
        price: '350$+',
        rating: 9.1,
        description: 'منتجع ترفيهي ضخم قرب المطار يضم كازينو ومعارض فنية.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Park Hyatt Seoul',
        stars: 5,
        price: '450$+',
        rating: 9.2,
        description: 'تصميم بسيط وأنيق في منطقة جانجنام العصرية.',
        imageUrl: getImg('luxuryHotel', 3)
      }
    ]
  },
  {
    id: 'peru',
    name: 'بيرو',
    englishName: 'Peru',
    region: 'Americas',
    description: 'أرض الإنكا والغموض.',
    heroImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop',
    bestTimeToVisit: 'الموسم الجاف',
    culturalTips: ['شاي الكوكا', 'اطلب الإذن للتصوير', 'المساومة'],
    summerActivities: ['المشي في درب الإنكا', 'زيارة بحيرة تيتيكاكا', 'مهرجان انتي رايمي (مهرجان الشمس)', 'استكشاف غابات الأمازون'],
    winterActivities: ['ركوب الأمواج في الشمال', 'استكشاف صحراء نازكا وخطوطها الغامضة', 'تذوق الطعام في ليما (عاصمة الغذاء)', 'زيارة مدينة أريكيبا البيضاء'],
    landmarks: [
      {
        id: 'machu-picchu',
        name: 'ماتشو بيتشو',
        category: 'History',
        description: 'المدينة المفقودة.',
        imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop',
        story: 'المدينة المفقودة في السحاب، التي بقيت مخفية عن العالم لقرون. كيف تمكن الإنكا من بناء هذه الهياكل الحجرية الدقيقة على قمة جبل وعر دون استخدام العجلة؟ الغموض يلف المكان، والضباب الصباحي يكشف ببطء عن المعابد والمدرجات الزراعية. الوقوف هنا هو وقوف في حضرة التاريخ الغامض والجمال الطبيعي الخالص.',
        visitorTips: ['احجز مسبقاً', 'ختم الجواز']
      },
      {
        id: 'cusco',
        name: 'كوسكو',
        category: 'History',
        description: 'عاصمة الإنكا.',
        imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop',
        story: 'عاصمة إمبراطورية الإنكا ومركز العالم بالنسبة لهم. هنا تندمج الجدران الحجرية القديمة للإنكا مع الكنائس الإسبانية الاستعمارية في مزيج معماري فريد. الشوارع المرصوفة بالحصى، والنساء بملابسهن التقليدية الملونة، وحيوانات اللاما، كلها تجعل كوسكو مدينة تنبض بالتاريخ والهوية.',
        visitorTips: ['تأقلم مع الارتفاع', 'سوق سان بيدرو']
      },
      {
        id: 'rainbow-mountain',
        name: 'جبل قوس قزح',
        category: 'Nature',
        description: 'جبل ملون.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'لوحة فنية رسمتها الجيولوجيا، حيث تظهر طبقات الأرض الملونة بالأحمر والأصفر والأخضر على سفوح الجبال. الصعود إليه شاق بسبب الارتفاع، لكن المكافأة هي منظر لا يصدق يبدو وكأنه من كوكب آخر. إنه دليل على إبداع الطبيعة وقدرتها على إبهارنا بألوانها الخفية.',
        visitorTips: ['لياقة بدنية', 'استأجر حصاناً']
      }
    ],
    restaurants: [
      {
        name: 'Central',
        description: 'أفضل مطعم في العالم، رحلة تذوق.',
        cuisine: 'بيروفي حديث',
        rating: 5.0,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Maido',
        description: 'مطبخ نيكي (ياباني بيروفي).',
        cuisine: 'Fusion',
        rating: 4.9,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Astrid y Gastón',
        description: 'المطعم الذي شهر المطبخ البيروفي.',
        cuisine: 'بيروفي معاصر',
        rating: 4.8,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Belmond Sanctuary Lodge',
        stars: 5,
        price: '1200$+',
        rating: 9.3,
        description: 'الفندق الوحيد الواقع عند مدخل ماتشو بيتشو، وصول حصري.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Monasterio, A Belmond Hotel',
        stars: 5,
        price: '500$+',
        rating: 9.5,
        description: 'دير تاريخي محمي في كوسكو، يجمع بين التاريخ والرفاهية.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Tambo del Inka',
        stars: 5,
        price: '400$+',
        rating: 9.4,
        description: 'منتجع فاخر في الوادي المقدس، محطة قطار خاصة لماتشو بيتشو.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Hotel B',
        stars: 4,
        price: '350$+',
        rating: 9.2,
        description: 'فندق بوتيك فني في منطقة بارانكو البوهيمية في ليما.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Inkaterra Reserva Amazonica',
        stars: 4,
        price: '500$+',
        rating: 9.1,
        description: 'نزل بيئي في قلب الأمازون البيروفي، جسور معلقة ومشاهدة الحياة البرية.',
        imageUrl: getImg('luxuryHotel', 2)
      }
    ]
  },
  {
    id: 'mexico',
    name: 'المكسيك',
    englishName: 'Mexico',
    region: 'Americas',
    description: 'ألوان، احتفالات، وطعام.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'الشتاء',
    culturalTips: ['الغداء متأخر', 'مياه معبأة', 'تعلم الإسبانية'],
    summerActivities: ['السباحة مع أسماك القرش الحوت في هولبوكس', 'زيارة مزارع التكيلا في خاليسكو', 'ركوب الأمواج في بويرتو إسكونديدو', 'استكشاف المدن الاستعمارية في المرتفعات'],
    winterActivities: ['الاحتفال بيوم الموتى (Day of the Dead)', 'مشاهدة هجرة الفراشات الملكية', 'الاسترخاء في شواطئ ريفيرا مايا', 'استكشاف مكسيكو سيتي في طقس لطيف'],
    landmarks: [
      {
        id: 'chichen-itza',
        name: 'تشيتشن إيتزا',
        category: 'History',
        description: 'هرم الكاستيلو.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'هرم "إل كاستيلو" هو تقويم فلكي حجري ضخم بناه المايا بعبقرية لا تصدق. في الاعتدالين الربيعي والخريفي، تخلق ظلال الشمس وهماً بصرياً لثعبان يزحف نزولاً على الدرج. هذا الموقع ليس مجرد أطلال، بل هو دليل على عبقرية الإنسان في ترويض الطبيعة القاسية وتحويلها إلى فن.',
        visitorTips: ['حرارة شديدة', 'السينوتي']
      },
      {
        id: 'tulum',
        name: 'تولوم',
        category: 'History',
        description: 'أطلال مايا على البحر.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'المدينة الوحيدة للمايا التي بنيت على الساحل، حيث تواجه القلعة الحجرية مياه البحر الكاريبي الفيروزية. التباين بين التاريخ الرمادي والطبيعة الزرقاء يخلق مشهداً درامياً. هنا كان المايا يراقبون النجوم والسفن القادمة. السباحة تحت ظل هذه الأطلال القديمة هي تجربة تجمع بين التاريخ والاسترخاء.',
        visitorTips: ['اسبح في الشاطئ', 'حيوانات الكواتي']
      },
      {
        id: 'mexico-city-zocalo',
        name: 'زوكالو',
        category: 'History',
        description: 'قلب العاصمة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'واحدة من أكبر الساحات في العالم، بنيت فوق أطلال معابد الأزتيك. هنا يلتقي تاريخ المكسيك القديم بالاستعمار الإسباني والحداثة. الراقصون بملابس الأزتيك التقليدية، الكاتدرائية الضخمة، والقصر الوطني، كلها تجتمع في هذا الفضاء الواسع. إنه القلب النابض لأمة فخورة بتاريخها المتنوع.',
        visitorTips: ['القصر الوطني', 'جداريات']
      }
    ],
    restaurants: [
      {
        name: 'Pujol',
        description: 'أشهر مطعم مكسيكي، صوص مولي معتق.',
        cuisine: 'Fine Dining',
        rating: 4.9,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Quintonil',
        description: 'مكونات خضراء مبتكرة.',
        cuisine: 'مكسيكي حديث',
        rating: 4.8,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'El Califa',
        description: 'تاكو أصلي راقٍ.',
        cuisine: 'تاكو',
        rating: 4.6,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'Rosewood Mayakoba',
        stars: 5,
        price: '1000$+',
        rating: 9.8,
        description: 'منتجع في ريفيرا مايا يجمع بين الغابة والبحر والقنوات المائية.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'One&Only Palmilla',
        stars: 5,
        price: '1200$+',
        rating: 9.7,
        description: 'رفاهية قديمة في لوس كابوس، خدمة استثنائية ومناظر للمحيط.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Hotel Esencia',
        stars: 5,
        price: '1500$+',
        rating: 9.6,
        description: 'منزل دوقة إيطالية سابقاً، ملاذ أنيق ومنعزل قرب تولوم.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Four Seasons Mexico City',
        stars: 5,
        price: '500$+',
        rating: 9.4,
        description: 'واحة بحديقة داخلية وسط صخب العاصمة مكسيكو سيتي.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Azulik',
        stars: 4,
        price: '600$+',
        rating: 8.9,
        description: 'فندق بيئي شهير في تولوم بتصميم معماري عضوي (بدون كهرباء أحياناً).',
        imageUrl: getImg('luxuryHotel', 1)
      }
    ]
  },
  {
    id: 'jordan',
    name: 'الأردن',
    englishName: 'Jordan',
    region: 'Arab World',
    description: 'جوهرة الشرق والتاريخ.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['الضيافة', 'القهوة العربية', 'الاحتشام'],
    summerActivities: ['السباحة في البحر الميت', 'الغطس في العقبة', 'التخييم في محمية ضانا (جو أبرد)', 'مهرجان جرش للثقافة والفنون'],
    winterActivities: ['استكشاف البتراء ووادي رم (طقس لطيف نهاراً)', 'الينابيع الحارة في ماعين', 'زيارة المتاحف والآثار في عمان', 'الاستمتاع بالمأكولات الشتوية الدافئة'],
    landmarks: [
      {
        id: 'petra',
        name: 'البتراء',
        category: 'History',
        description: 'المدينة الوردية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'المدينة الوردية الضائعة التي نحتت في الصخر قبل ألفي عام. المشي عبر "السيق"، الشق الصخري الضيق، يرفع مستوى الترقب حتى تظهر فجأة "الخزنة" بكل تفاصيلها المذهلة. كيف بنى الأنباط هذه الحضارة وسط الصحراء؟ البتراء ليست مجرد آثار، بل هي دليل على عبقرية الإنسان في ترويض الطبيعة القاسية وتحويلها إلى فن.',
        visitorTips: ['امش كثيراً', 'بتراء ليلاً']
      },
      {
        id: 'wadi-rum',
        name: 'وادي رم',
        category: 'Nature',
        description: 'المريخ على الأرض.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'وادي القمر، حيث الرمال الحمراء والجبال الصخرية الشاهقة تخلق مشهداً يبدو وكأنه من كوكب آخر. هنا سار لورنس العرب، وهنا تم تصوير أفلام عن المريخ. الصمت في وادي رم له صوت خاص، والنجوم في الليل تبدو قريبة لدرجة أنك قد تلمسها. المبيت في خيمة بدوية وتناول "الزرب" هو تجربة تعيدك إلى بساطة الحياة وجمالها.',
        visitorTips: ['جولة جيب', 'نم في خيمة']
      },
      {
        id: 'dead-sea',
        name: 'البحر الميت',
        category: 'Nature',
        description: 'أخفض نقطة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'أخفض نقطة على سطح الأرض، بحر لا تغرق فيه ولا تعيش فيه كائنات. المياه الزيتية الثقيلة والملوحة العالية ترفعك فوق السطح بلا جهد. الطين الغني بالمعادن هو علاج طبيعي للبشرة. المشهد هنا غريب وهادئ، مع جبال الملح البيضاء المتلألئة. إنه سبا طبيعي فريد من نوعه في العالم.',
        visitorTips: ['طين علاجي', 'لا تبلل عينيك']
      }
    ],
    restaurants: [
      {
        name: 'Fakhreldin',
        description: 'مطعم لبناني راقٍ في عمان.',
        cuisine: 'شامي',
        rating: 4.7,
        imageUrl: getImg('food', 5)
      },
      {
        name: 'Sufra',
        description: 'مأكولات أردنية تقليدية.',
        cuisine: 'أردني',
        rating: 4.8,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Hashem',
        description: 'فلافل وحمص أسطوري.',
        cuisine: 'Street Food',
        rating: 4.9,
        imageUrl: getImg('food', 1)
      }
    ],
    hotels: [
      {
        name: 'Kempinski Hotel Ishtar Dead Sea',
        stars: 5,
        price: '300$+',
        rating: 9.2,
        description: 'منتجع فاخر على البحر الميت بتصميم بابلي ومسابح لا متناهية.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Wadi Rum Bubble Luxotel',
        stars: 5,
        price: '350$+',
        rating: 9.4,
        description: 'تجربة النوم تحت النجوم في فقاعات شفافة وسط الصحراء.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'The St. Regis Amman',
        stars: 5,
        price: '400$+',
        rating: 9.3,
        description: 'عنوان الفخامة في العاصمة عمان، خدمة "بتلر" وديكور راقٍ.',
        imageUrl: getImg('luxuryHotel', 4)
      },
      {
        name: 'Movenpick Resort Petra',
        stars: 5,
        price: '250$+',
        rating: 8.9,
        description: 'موقع ممتاز مباشرة عند مدخل مدينة البتراء الأثرية.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'Feynan Ecolodge',
        stars: 3,
        price: '150$+',
        rating: 9.0,
        description: 'نزل بيئي يعمل بالطاقة الشمسية في محمية ضانا، تجربة هادئة.',
        imageUrl: getImg('luxuryHotel', 0)
      }
    ]
  },
  {
    id: 'china',
    name: 'الصين',
    englishName: 'China',
    region: 'Asia',
    description: 'تنين الشرق العظيم، حيث يمتزج التاريخ الإمبراطوري مع ناطحات السحاب المستقبلية.',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'الربيع والخريف',
    culturalTips: ['لا تضع العيدان في الأرز', 'الماء الساخن شائع', 'احترم كبار السن'],
    summerActivities: ['رحلة بحرية في نهر لي (قويلين)', 'زيارة جبال تشانغجياجيه (أفاتار)', 'استكشاف طريق الحرير في الغرب', 'الاستمتاع بحدائق سوتشو التقليدية'],
    winterActivities: ['مهرجان هاربين للجليد والثلج', 'التزلج في منتجعات يابولي', 'الاحتفال برأس السنة الصينية (عيد الربيع)', 'تناول الهوت بوت الساخن في تشنغدو'],
    landmarks: [
      {
        id: 'great-wall',
        name: 'سور الصين العظيم',
        category: 'History',
        description: 'أعظم بناء دفاعي في التاريخ.',
        imageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop',
        story: 'تنين حجري يمتد لآلاف الأميال، يتلوي فوق قمم الجبال الوعرة والوديان العميقة. بني بدماء وعرق الملايين لحماية الإمبراطورية من الغزاة. الوقوف على أحد أبراجه والنظر إلى امتداده اللامتناهي يجعلك تشعر بعظمة الإرادة البشرية. إنه ليس مجرد سور، بل هو رمز للصمود والوحدة الصينية عبر العصور.',
        visitorTips: ['قسم موتيانيو أقل زحاماً', 'تجنب العطلات الوطنية']
      },
      {
        id: 'forbidden-city',
        name: 'المدينة المحرمة',
        category: 'History',
        description: 'القصر الإمبراطوري لمئات السنين.',
        imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2070&auto=format&fit=crop',
        story: 'لأكثر من 500 عام، كان هذا المكان محرماً على عامة الشعب، عالماً سرياً للإمبراطور وحاشيته. القصور ذات الأسقف الذهبية والجدران الحمراء تخفي قصصاً عن السلطة والمؤامرات والحياة المترفة. كل رمز وكل لون هنا له معنى فلسفي. المشي عبر بواباتها هو دخول إلى قلب التاريخ الصيني الإمبراطوري.',
        visitorTips: ['احجز مسبقاً', 'منتزه جينغشان']
      },
      {
        id: 'terracotta-warriors',
        name: 'جيش الطين',
        category: 'History',
        description: 'جيش يحرس الإمبراطور في مماته.',
        imageUrl: 'https://images.unsplash.com/photo-1519923041107-e4dc8d9193da?q=80&w=2070&auto=format&fit=crop',
        story: 'آلاف الجنود، الخيول، والعربات المصنوعة من الطين، كل منهم بوجه ملامح فريدة لا تتكرر، يقفون في صفوف صامتة لحماية الإمبراطور الأول في الحياة الآخرة. اكتشافهم كان صدفة مذهلة، وهم يمثلون هوس الإمبراطور بالخلود وقوة الفن القديم. النظر في وجوههم يجعلك تتساءل عن الحرفيين المجهولين الذين صنعوا هذه المعجزة.',
        visitorTips: ['شيآن', 'المتحف ضخم']
      },
      {
        id: 'the-bund',
        name: 'ذا بوند',
        category: 'Modern',
        description: 'واجهة شنغهاي البحرية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'على ضفة، مباني استعمارية تاريخية تروي قصة ماضي شنغهاي كمركز تجاري عالمي، وعلى الضفة الأخرى، ناطحات سحاب مستقبلية تلامس السحاب وتمثل طموح الصين الجديد. المشي هنا ليلاً هو رحلة عبر الزمن، حيث تضيء أضواء النيون نهر هوانغبو، وتلتقي الأناقة الكلاسيكية بالجرأة العصرية.',
        visitorTips: ['منظر ليلي', 'نفق المشاة']
      },
      {
        id: 'zhangjiajie',
        name: 'حديقة تشانغجياجيه',
        category: 'Nature',
        description: 'جبال أفاتار العائمة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'أعمدة حجرية شاهقة ترتفع من قاع الوادي مغطاة بالخضرة، وتختفي قممها غالباً في السحب والضباب، مما يعطي انطباعاً بأنها تطفو في الهواء. هذا المشهد الخيالي ألهم جبال "باندورا" في فيلم أفاتار. ركوب المصعد الخارجي أو المشي على الجسر الزجاجي هو مغامرة تحبس الأنفاس في قلب الطبيعة الصينية الساحرة.',
        visitorTips: ['جسر زجاجي', 'المصعد الخارجي']
      }
    ],
    restaurants: [
      {
        name: 'Dadong Roast Duck',
        description: 'أفضل بط بكين في العاصمة.',
        cuisine: 'صيني',
        rating: 4.8,
        imageUrl: getImg('food', 0)
      },
      {
        name: 'Haidilao',
        description: 'تجربة هوت بوت مع خدمة استثنائية.',
        cuisine: 'هوت بوت',
        rating: 4.9,
        imageUrl: getImg('food', 1)
      },
      {
        name: 'Din Tai Fung',
        description: 'أشهر زلابية (ديم سوم) في العالم.',
        cuisine: 'تايواني / صيني',
        rating: 4.7,
        imageUrl: getImg('food', 2)
      }
    ],
    hotels: [
      {
        name: 'The Peninsula Shanghai',
        stars: 5,
        price: '600$+',
        rating: 9.6,
        description: 'فخامة كلاسيكية على البوند مع إطلالات لا تضاهى.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Aman Summer Palace',
        stars: 5,
        price: '900$+',
        rating: 9.5,
        description: 'بوابة خاصة للقصر الصيفي في بكين، إقامة ملكية.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Banyan Tree Ringha',
        stars: 5,
        price: '400$+',
        rating: 9.3,
        description: 'منازل تبتية تقليدية في شانغريلا.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Rosewood Beijing',
        stars: 5,
        price: '500$+',
        rating: 9.4,
        description: 'تصميم عصري أنيق في قلب العاصمة.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Amandayan',
        stars: 5,
        price: '800$+',
        rating: 9.2,
        description: 'يطل على مدينة ليجيانج القديمة، هدوء وتاريخ.',
        imageUrl: getImg('luxuryHotel', 4)
      }
    ]
  },
  {
    id: 'new-zealand',
    name: 'نيوزيلندا',
    englishName: 'New Zealand',
    region: 'Oceania',
    description: 'أرض السحابة البيضاء الطويلة، حيث الطبيعة تفوق الخيال.',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'ديسمبر إلى فبراير',
    culturalTips: ['احترم ثقافة الماوري', 'حماية البيئة صارمة', 'القيادة على اليسار'],
    summerActivities: ['المشي في مسار ميلفورد', 'السباحة مع الدلافين في كايكورا', 'القفز بالحبال في كوينزتاون', 'الاسترخاء في شواطئ خليج الجزر'],
    winterActivities: ['التزلج في جبال الألب الجنوبية', 'مشاهدة الحيتان', 'الاستمتاع بالينابيع الحارة في روتوروا', 'مشاهدة النجوم في محمية السماء المظلمة'],
    landmarks: [
      {
        id: 'milford-sound',
        name: 'ميلفورد ساوند',
        category: 'Nature',
        description: 'مضيق بحري مذهل.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'وصفه روديارد كيبلينغ بأنه "أعجوبة الدنيا الثامنة". جدران صخرية عمودية ترتفع مباشرة من المياه المظلمة، وشلالات تتدفق من ارتفاعات شاهقة. عندما تمطر، تظهر آلاف الشلالات المؤقتة، مما يزيد المكان سحراً وغموضاً. الرحلة البحرية هنا هي رحلة إلى بداية الزمن، حيث الطبيعة لا تزال كما كانت منذ آلاف السنين.',
        visitorTips: ['رحلة بحرية', 'احتمال المطر عالي']
      },
      {
        id: 'hobbiton',
        name: 'هوبيتون',
        category: 'Hidden Gem',
        description: 'موقع تصوير أفلام الهوبيت.',
        imageUrl: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2070&auto=format&fit=crop',
        story: 'في قلب تلال ماتاماتا الخضراء، تجد قطعة من "الأرض الوسطى" أصبحت حقيقة. بيوت الهوبيت الصغيرة بأبوابها المستديرة الملونة، والحدائق المزهرة، والحانة الخضراء، كلها تجعلك تشعر وكأنك دخلت في فيلم سينمائي. إنه مكان يثير البهجة والخيال، حيث يمكنك أن تعيش حلم الفانتازيا وتنسى الواقع للحظات.',
        visitorTips: ['احجز الجولة', 'اشرب في الحانة الخضراء']
      },
      {
        id: 'mount-cook',
        name: 'جبل كوك',
        category: 'Nature',
        description: 'أعلى جبل في نيوزيلندا.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'يعرف بلغة الماوري بـ "أوراكي"، وهو الجبل الذي يلامس السماء. قمته المغطاة بالثلوج الدائمة والأنهار الجليدية المحيطة به تشكل مشهداً مهيباً. المنطقة حوله هي محمية سماء مظلمة، مما يعني أن الليل هنا يمتلئ بملايين النجوم التي لا تراها في أي مكان آخر. إنه جنة للمتسلقين ومحبي الطبيعة.',
        visitorTips: ['مسار هوكر فالي', 'مشاهدة النجوم']
      },
      {
        id: 'waitomo-caves',
        name: 'كهوف وايتومو',
        category: 'Nature',
        description: 'كهوف الديدان المضيئة.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'تحت الأرض، يوجد عالم سحري مضاء بآلاف النقاط الزرقاء الصغيرة. ديدان متوهجة نادرة تعيش في سقف الكهف وتخلق مشهداً يشبه سماء الليل المرصعة بالنجوم. الانزلاق في قارب بصمت تام عبر النهر الجوفي المظلم، بينما تضيء الديدان طريقك، هو تجربة هادئة وساحرة تبدو وكأنها من قصة خيالية.',
        visitorTips: ['جولة بالقارب', 'ممنوع التصوير']
      },
      {
        id: 'rotorua',
        name: 'روتوروا',
        category: 'Nature',
        description: 'ينابيع حارة وثقافة ماوري.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'الأرض هنا حية وتتنفس. أعمدة البخار تتصاعد من الأرض، والينابيع الطينية تغلي، ورائحة الكبريت تملأ الهواء. هذه المنطقة الجيوحرارية النشطة هي أيضاً مركز الثقافة الماورية. هنا يمكنك مشاهدة رقصة "الهاكا" القوية وتذوق الطعام المطبوخ في باطن الأرض الساخنة، وفهم العلاقة العميقة بين السكان الأصليين وأرضهم.',
        visitorTips: ['القرية الماورية', 'السبا الطيني']
      }
    ],
    restaurants: [
      {
        name: 'The Grove',
        description: 'طعام نيوزيلندي حديث في أوكلاند.',
        cuisine: 'Fine Dining',
        rating: 4.8,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Fergburger',
        description: 'أشهر برجر في العالم في كوينزتاون.',
        cuisine: 'برجر',
        rating: 4.9,
        imageUrl: getImg('food', 4)
      },
      {
        name: 'Depot Eatery',
        description: 'مأكولات بحرية طازجة وأجواء حيوية.',
        cuisine: 'مأكولات بحرية',
        rating: 4.7,
        imageUrl: getImg('food', 5)
      }
    ],
    hotels: [
      {
        name: 'Huka Lodge',
        stars: 5,
        price: '1500$+',
        rating: 9.8,
        description: 'نزل صيد ملكي على ضفاف نهر وايكاتو.',
        imageUrl: getImg('luxuryHotel', 5)
      },
      {
        name: 'The Farm at Cape Kidnappers',
        stars: 5,
        price: '1200$+',
        rating: 9.7,
        description: 'مزرعة فاخرة على قمة جرف بحري.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'Matakauri Lodge',
        stars: 5,
        price: '1000$+',
        rating: 9.6,
        description: 'إطلالات خلابة على بحيرة واكاتيبو والجبال.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Cordis, Auckland',
        stars: 5,
        price: '300$+',
        rating: 9.2,
        description: 'فخامة حديثة في قلب المدينة.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Eichardt\'s Private Hotel',
        stars: 5,
        price: '1400$+',
        rating: 9.5,
        description: 'أيقونة تاريخية في كوينزتاون.',
        imageUrl: getImg('luxuryHotel', 3)
      }
    ]
  },
  {
    id: 'iceland',
    name: 'آيسلندا',
    englishName: 'Iceland',
    region: 'Europe',
    description: 'أرض النار والجليد، شلالات وبراكين.',
    heroImage: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2070&auto=format&fit=crop',
    bestTimeToVisit: 'الصيف أو الشتاء للشفق',
    culturalTips: ['المياه آمنة للشرب', 'لا بقشيش', 'استحم قبل المسبح'],
    summerActivities: ['استكشاف الطرق الوعرة في المرتفعات', 'مشاهدة الحيتان والطيور البحرية (البفن)', 'تجربة شمس منتصف الليل', 'التخييم بجانب الشلالات'],
    winterActivities: ['صيد الشفق القطبي', 'استكشاف كهوف الجليد الزرقاء', 'الاسترخاء في الينابيع الحارة', 'المشي على الأنهار الجليدية'],
    landmarks: [
      {
        id: 'blue-lagoon',
        name: 'البحيرة الزرقاء',
        category: 'Nature',
        description: 'منتجع صحي جيوحراري بمياه لبنية زرقاء.',
        imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop',
        story: 'وسط حقول الحمم البركانية السوداء، تظهر هذه البحيرة بمياهها الفيروزية الحليبية كواحة من كوكب آخر. البخار المتصاعد يلف المكان بسحابة من الغموض والاسترخاء. المعادن في المياه والطين الأبيض لها خصائص علاجية وتجميلية. السباحة هنا، خاصة في يوم بارد، هي تجربة تجدد الجسد والروح.',
        visitorTips: ['احجز قبل أسابيع', 'ضع ماسك الطين']
      },
      {
        id: 'gullfoss',
        name: 'شلال جولفوس',
        category: 'Nature',
        description: 'الشلال الذهبي.',
        imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070&auto=format&fit=crop',
        story: 'ليس مجرد شلال، بل قوة طبيعية هائلة تسقط على مرحلتين في وادٍ عميق. في الأيام المشمسة، يظهر قوس قزح دائم فوق الرذاذ، مما يعطيه اسمه "الشلال الذهبي". في الشتاء، يتجمد جزئياً ليخلق منحوتات جليدية مذهلة. القصة المحلية تقول إن ابنة مزارع هددت بإلقاء نفسها فيه لمنع بيعه لمستثمر أجنبي، فأنقذته للأبد.',
        visitorTips: ['البس معطف مطر', 'المسار الزلق شتاءً']
      },
      {
        id: 'hallgrimskirkja',
        name: 'كنيسة هالجريم',
        category: 'Modern',
        description: 'كنيسة بتصميم مستوحى من أعمدة البازلت.',
        imageUrl: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?q=80&w=2070&auto=format&fit=crop',
        story: 'ترتفع فوق ريكيافيك كرمح خرساني عملاق، تصميمها يحاكي تدفق الحمم البركانية وأعمدة البازلت الطبيعية في آيسلندا. من الداخل، هي مثال للبساطة اللوثرية والضوء. الصعود إلى البرج يمنحك أفضل إطلالة بانورامية على المدينة الملونة والمحيط والجبال المحيطة.',
        visitorTips: ['اصعد البرج بالمصعد', 'تمثال ليف إريكسون']
      },
      {
        id: 'reynisfjara',
        name: 'الشاطئ الأسود',
        category: 'Nature',
        description: 'رمال سوداء وأعمدة بازلتية.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'شاطئ بجمال قوطي مخيف، حيث الرمال سوداء كالفحم والأمواج هائجة وقوية بشكل لا يرحم. أعمدة البازلت السداسية تصطف كأرغن عملاق في جدار الجبل. الأساطير تقول إن الصخور البحرية البارزة هي ترولات تحجرت عندما ضربتها الشمس. إنه مكان يذكرك بقوة الطبيعة واحترامها.',
        visitorTips: ['احذر الأمواج المفاجئة', 'لا تسبح أبداً']
      },
      {
        id: 'thingvellir',
        name: 'حديقة ثينجفيلير',
        category: 'History',
        description: 'مكان أول برلمان والصدع القاري.',
        imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop',
        story: 'مكان فريد جيولوجياً وتاريخياً. هنا يمكنك المشي بين قارتين، حيث يتباعد اللوح التكتوني لأمريكا الشمالية عن أوراسيا. وهنا أيضاً اجتمع الفايكنج لتأسيس أول برلمان ديمقراطي في العالم عام 930 م. المياه في شق "سيلفرا" صافية لدرجة أنك ترى لمسافة 100 متر تحت الماء.',
        visitorTips: ['امش في الصدع', 'الغطس في سيلفرا']
      }
    ],
    restaurants: [
      {
        name: 'Dill',
        description: 'أول مطعم ميشلان في آيسلندا، نورديك جديد.',
        cuisine: 'آيسلندي حديث / Fine Dining',
        rating: 4.8,
        imageUrl: getImg('food', 2)
      },
      {
        name: 'Grillmarkaðurinn',
        description: 'اللحوم والأسماك المشوية في ديكور بركاني.',
        cuisine: 'Steakhouse / آيسلندي',
        rating: 4.7,
        imageUrl: getImg('food', 3)
      },
      {
        name: 'Bæjarins Beztu Pylsur',
        description: 'كشك الهوت دوج الأكثر شهرة (أكل منه بيل كلينتون).',
        cuisine: 'Street Food',
        rating: 4.9,
        imageUrl: getImg('food', 4)
      }
    ],
    hotels: [
      {
        name: 'The Retreat at Blue Lagoon',
        stars: 5,
        price: '1200$+',
        rating: 9.7,
        description: 'أجنحة فاخرة محاطة بمياه اللاجون الخاصة، قمة الرفاهية.',
        imageUrl: getImg('luxuryHotel', 0)
      },
      {
        name: 'ION Adventure Hotel',
        stars: 4,
        price: '500$+',
        rating: 9.1,
        description: 'فندق بتصميم خرساني وزجاجي يبرز وسط حقول الحمم.',
        imageUrl: getImg('luxuryHotel', 1)
      },
      {
        name: 'Hotel Borg',
        stars: 4,
        price: '400$+',
        rating: 9.0,
        description: 'أناقة الآرت ديكو في قلب ريكيافيك، فندق تاريخي.',
        imageUrl: getImg('luxuryHotel', 2)
      },
      {
        name: 'Deplar Farm',
        stars: 5,
        price: '2500$+',
        rating: 9.9,
        description: 'مزرعة خراف تحولت إلى منتجع فائق الفخامة في الشمال النائي.',
        imageUrl: getImg('luxuryHotel', 3)
      },
      {
        name: 'Fosshotel Glacier Lagoon',
        stars: 4,
        price: '350$+',
        rating: 8.9,
        description: 'موقع مثالي لاستكشاف الأنهار الجليدية والبحيرة الجليدية.',
        imageUrl: getImg('luxuryHotel', 4)
      }
    ]
  }
];