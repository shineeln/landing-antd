
export type Language = 'mn' | 'en' | 'ko';

export const i18n = {
  mn: {
    nav: {
      product: 'Систем',
      solutions: 'Шийдлүүд',
      why: 'Давуу Тал',
      customers: 'Харилцагчид',
      pricing: 'Үнэ',
      resources: 'Мэдлэг',
      faq: 'FAQ',
      demo: 'Демо Үзэх',
      sms: 'МСЖ',
      docs: 'Бичиг баримт'
    },
    recoveryStages: {
      tag: 'LIFECYCLE MANAGEMENT',
      title: 'Зээл төлүүлэлтийн иж бүрэн үе шат',
      subtitle: 'Зээл олголтоос эхлээд хасалт хийх хүртэлх бүх процессыг DebtPro-оор удирд.',
      stages: [
        {
          id: 'onboarding',
          title: 'Portfolio onboarding',
          label: 'Шинэ зээл',
          desc: 'Зээлийн багцыг системд бүртгэж, анхны төлөв тогтоох үе шат.'
        },
        {
          id: 'pre-delinquent',
          title: 'Pre-delinquent',
          label: 'Хугацаа хэтрэхээс өмнө',
          desc: 'Автомат сануулга, урьдчилсан хяналт.'
        },
        {
          id: 'early',
          title: 'Early collections',
          label: 'Эрт үеийн цуглуулалт',
          desc: 'Зөөлөн арга хэмжээ буюу автомат болон масс мсж илгээх, оператор холбогдож сануулах.'
        },
        {
          id: 'late',
          title: 'Late collections',
          label: 'Хожуу үеийн цуглуулалт',
          desc: 'Ойр дотны хүмүүстэй холбогдох, ажил болон гэрийн хаягаар уулзалтууд хийх, мэдэгдэх хуудас өгөх.'
        },
        {
          id: 'recoveries',
          title: 'Recoveries',
          label: 'Нөхөн төлүүлэх',
          desc: 'Барьцаа хөрөнгө хураах, Шүүх, ШШГ процесс.'
        },
        {
          id: 'sales',
          title: 'Write-off / Sales / Surveillance',
          label: 'Борлуулалт, Хасалт',
          desc: 'Барьцаа хөрөнгүүдийг зарах, Балансаас хасалт хийх, Сангийн зардлаас хаах.'
        }
      ]
    },
    impactMetrics: {
      tag: 'MEASURABLE RESULTS',
      title: 'Бодит Үр Дүн ба Статистик',
      subtitle: 'DebtPro системийг нэвтрүүлснээр танай байгууллагад гарах эерэг өөрчлөлтүүд.',
      items: [
        { label: 'Ажиллагааны ил тод байдал', value: '100', suffix: '%', desc: 'Процесс бүр хяналттай' },
        { label: 'Ажлын цагийн хэмнэлт', value: '40', suffix: '%', desc: 'Автоматжуулалтын үр дүнд' },
        { label: 'Ажилтнуудын сэтгэл ханамж', value: '25', suffix: 'пт', desc: 'Бүтээмж нэмэгдсэнээр' },
        { label: 'Manual ажиллагаа', value: '60', prefix: '-', suffix: '%', desc: 'Гар ажиллагааг хална' },
        { label: 'PTP биелэлт', value: '25', prefix: '+', suffix: '%', desc: 'Амлалт авсан төлөлт' },
        { label: 'Гомдлын тоо', value: '30', prefix: '-', suffix: '%', desc: 'Харилцааны соёл сайжирна' },
        { label: 'Шүүх рүү шилжих кейс', value: '25', prefix: '-', suffix: '%', desc: 'Эрт үеийн төлүүлэлт' },
        { label: 'Харилцагчийн сэтгэл ханамж', value: '20', suffix: 'пт', desc: 'Зөв арга хэмжээ' },
        { label: 'Ажиллагааны зардал', value: '40', prefix: '-', suffix: '%', desc: 'Зардал буурна' },
        { label: 'NPL хувь', value: '1-3', suffix: 'пт', desc: 'Багцын чанар' },
        { label: 'NPE илрүүлэлт', value: '20', prefix: '+', suffix: '%', desc: 'Эрт үеийн оношлогоо' }
      ]
    },
    smsSection: {
      tag: 'OMNICHANNEL AUTOMATION',
      title: 'CallPro-д суурилсан ухаалаг МСЖ',
      subtitle: 'Зээлдэгчийн зан төлөвт суурилсан автомат МСЖ болон Дуут мэдэгдлийн систем. Гараар илгээх шаардлагагүй.',
      features: [
        { title: 'Trigger Logic', desc: 'Хугацаа хэтэрсэн хоногоос хамаарч өөр өөр агуулгатай МСЖ илгээнэ.' },
        { title: 'CallPro Sync', desc: 'Ярианы түүх болон МСЖ-ний хүргэлтийг системээсээ шууд хянана.' },
        { title: 'Mass Messaging', desc: 'Мянга мянган зээлдэгчид нэгэн зэрэг мэдээлэл хүргэх хүчин чадал.' }
      ],
      stats: { delivery: '99.9%', latency: '<2s', volume: '10K+' }
    },
    docSection: {
      tag: 'LEGAL ENGINE',
      title: 'Бичиг баримтын иж бүрэн автоматжуулалт',
      subtitle: 'Нэхэмжлэх, мэдэгдэх хуудас, шүүхийн нэхэмжлэлийг 1-хэн секундэд үүсгэж, хэвлэхэд бэлэн болгоно.',
      features: [
        { title: 'Smart Templates', desc: 'Зээлдэгчийн датаг автоматаар бөглөх ухаалаг загварууд.' },
        { title: 'E-Sign Ready', desc: 'Цахим гарын үсэг болон QR кодоор баталгаажуулах боломж.' },
        { title: 'Legal Archive', desc: 'Үүсгэсэн бүх баримт бичгийг Timeline-д хавсаргаж архивлана.' }
      ],
      impact: '80% ЦАГ ХЭМНЭЛТ'
    },
    pricing: {
      tag: 'PRICING ENGINE',
      title: 'Уян хатан үнийн нөхцөл',
      subtitle: 'Байгууллагын цар хүрээ, багцын хэмжээнд тохирох мэргэжлийн шийдлүүд.',
      free: {
        name: 'Starter (Үнэгүй)',
        price: '0₮',
        period: 'forever',
        desc: 'Гарааны ББСБ болон жижиг багуудад зориулагдсан.',
        features: [
          'Зээлийн үндсэн удирдлага',
          'Гараар дата импортлох',
          '3 хүртэлх ажилтан',
          'Стандарт тайлангийн систем',
          'Мэдээллийн аюулгүй байдал'
        ],
        cta: 'Одоо эхлэх'
      },
      pro: {
        name: 'Enterprise Pro',
        price: 'Тохиролцоно',
        period: 'tailored',
        desc: 'Томоохон Банк, ББСБ-д зориулагдсан цогц үйлдлийн систем.',
        features: [
          'Polaris Core системтэй шууд холбогдох',
          'CallPro: Дуудлага, МСЖ автоматжуулалт',
          'Smart Auto-Allocation алгоритм',
          'Хууль, Шүүхийн иж бүрэн удирдлага',
          'Advanced Migration Analytics',
          'Хязгааргүй ажилтан'
        ],
        cta: 'Демо Захиалах'
      }
    },
    megaMenu: {
      automation: { title: 'Автоматжуулалт', desc: 'Ухаалаг хуваарилалтын алгоритм' },
      analytics: { title: 'Аналитик', desc: 'Зээлийн ангилал, шилжилтийн тайлан' },
      security: { title: 'Интеграц', desc: 'CallPro болон Банкны системүүд' }
    },
    hero: {
      tag: 'THE NEXT-GEN RECOVERY ENGINE',
      title: 'Зээл төлүүлэлтийн нэгдсэн удирдлагын Cockpit',
      subtitle: 'Банк болон ББСБ-ийн зээлийн эргэн төлөлтийг удирдах, хянах, автоматжуулж ажилтнуудын бүтээмжийг нэмэгдүүлэх, гүйцэтгэлийг бодит үнэлэх зорилготой цогц систем.',
      cta: 'Демо Захиалах',
      secondary: 'Шууд Үзэх',
      carousel: {
        dashboard: 'Удирдлагын Төв',
        profile: 'Зээлдэгчийн 360°',
        legal: 'Шүүх, Хуулийн Процесс',
        sms: 'CallPro Интеграц',
        performance: 'Ажилтны KPI'
      }
    },
    whyDebtPro: {
      tag: 'ORGANIZATIONAL VALUE',
      title: 'Байгууллагад өгөх үнэ цэн',
      subtitle: 'Өрсөлдөх давуу талаа бий болгож бусдаас ялгар. Өгөгдөлд суурилан шийдвэр гаргаж эрсдэлээ бууруул.',
      legacy: {
        title: 'Системийн Давуу Тал',
        items: [
          'Харилцагч бүрд тохирсон стратеги хэрэгжүүлнэ',
          'Зөв цагт, зөв сувгаар холбогдож эрсдэлээ удирдана',
          'Зээлийн амьдралын мөчлөгт тохирсон ажиллагаа',
          'Процессоо оновчилж ажилтнуудын бүтээмжийг нэмэгдүүлнэ',
          'Автомат болон гар ажиллагааны уян хатан шийдэл',
          'Ажилтнууд өөрсдийн хүссэнээр тохиргоо хийнэ'
        ]
      },
      advantage: {
        title: 'Бидний өгөх үнэ цэн',
        items: [
          'Технологийн дэвшлийг ашиглан зардлаа бууруул',
          'Ажилтнуудын гүйцэтгэлийг ил тод үнэлж сэтгэл ханамжийг нэмэгдүүл',
          'Бүх төрлийн тайлан, датаг цаг алдалгүй авч хяналтаа чанаржуул',
          'Төлөлтийн зан төлөвт суурилсан оновчтой шийдвэр',
          'Аудит лог, бүртгэлүүдийг бүрэн хянах боломж',
          'Виртуал оператор болон хиймэл оюуны шийдлүүд'
        ]
      }
    },
    reviews: {
      tag: 'TRUSTED BY LEADERS',
      title: 'Салбарын тэргүүлэгчдийн сонголт',
      subtitle: 'Монгол улсын ТОП банк, ББСБ-ууд DebtPro платформыг өдөр тутмын үйл ажиллагаандаа ашиглаж байна.',
      items: [
        {
          name: 'Б. Тулга',
          org: 'ТОП Банк',
          text: 'DebtPro-д шилжсэнээр манай зээлийн багцын чанар 24%-иар сайжирсан. Polaris системтэй шууд холбогддог нь хамгийн том давуу тал.',
          rating: 5
        },
        {
          name: 'Г. Саруул',
          org: 'Финтек ББСБ',
          text: 'CallPro интеграц болон автомат МСЖ нь манай төлүүлэлтийн багийн бүтээмжийг 2 дахин нэмэгдүүлсэн.',
          rating: 5
        },
        {
          name: 'Д. Энхбаяр',
          org: 'Кредит ХЗХ',
          text: 'Шүүхийн процесс болон мэдэгдэх хуудас автоматаар үүсдэг нь бичиг хэргийн ажлыг 80% хөнгөвчилсөн.',
          rating: 5
        }
      ]
    },
    flow: {
      tag: 'SYSTEM ARCHITECTURE',
      title: 'Өгөгдлөөс Үр дүн хүртэл',
      subtitle: 'Зээл төлүүлэлтийн бүх процессыг DebtPro хэрхэн автоматжуулдаг вэ?',
      steps: [
        { title: 'Өгөгдөл Төвлөрүүлэх', desc: 'Polaris системээс датаг шууд импортлоно.' },
        { title: 'Ухаалаг Хуваарилалт', desc: 'Зээлүүдийг ажилтнуудын ачаалал дээр үндэслэн хуваарилна.' },
        { title: 'Харилцах Сувгууд', desc: 'CallPro ашиглан системээс шууд залгах, МСЖ илгээх.' },
        { title: 'Баримт Бичгийн Автоматжуулалт', desc: 'Мэдэгдэх хуудас, Шүүхийн нэхэмжлэлийг систем автоматаар бөглөнө.' },
        { title: 'Тайлан, Дүн Шинжилгээ', desc: 'Төлүүлсэн дүн, ажилтнуудын гүйцэтгэлийг бодит цагт хянана.' }
      ]
    },
    workflow: {
      tag: 'PIPELINE LOGIC',
      title: 'Төлүүлэлтийн нэгдсэн процесс',
      subtitle: 'Дуудлагаас эхлээд Шүүхийн шийдвэр гүйцэтгэх хүртэлх бүх шат дамжлагыг нэг дороос удирдах систем.',
      stages: {
        call: 'Дуудлага',
        sms: 'МСЖ',
        visit: 'Уулзалт',
        legal: 'Хууль',
        court: 'Шүүх',
        bailiff: 'ШШГ',
        recovery: 'Төлөлт'
      },
      status: {
        success: 'Амжилттай',
        pending: 'Хүлээгдэж буй',
        failed: 'Амжилтгүй',
        promised: 'Амлалт авсан'
      }
    },
    excelSection: {
      tag: 'TRANSFORMATION',
      title: 'Эксель бол "хар хайрцаг". DebtPro бол ил тод систем.',
      subtitle: 'Зээл төлүүлэлт бол секундээр хэмжигдэх өгөгдлийн урсгал юм.',
      excel: {
        title: 'Уламжлалт арга (Excel)',
        items: [
          'Датаг гараар зөөж алдаа гаргах',
          'Зээлийн ангиллыг гараар тооцоолох',
          'Агент бүрийн гүйцэтгэлийг хянах боломжгүй',
          'Барьцаа хөрөнгийн мэдээлэл салангид'
        ]
      },
      debtpro: {
        title: 'DebtPro Advanced OS',
        items: [
          'Auto-Allocation: Тэнцүү хуваарилалт',
          'Эрсдэлийн сангийн автомат тооцоолол',
          'CallPro: Системээс шууд залгах',
          'Барьцаа хөрөнгө, Хамаарал бүхий 360° мэдээлэл'
        ]
      }
    },
    contactSection: {
      title: 'Хамтран ажиллах хүсэлт илгээх',
      subtitle: 'Бидэнтэй нэгдэж, төлүүлэлтийн процессоо дараагийн шатанд гаргахад бэлэн үү?',
      name: 'Таны нэр',
      org: 'Байгууллагын нэр',
      email: 'И-мэйл хаяг',
      submit: 'Хүсэлт Илгээх',
      success: 'Таны хүсэлтийг хүлээн авлаа. Бид тун удахгүй холбогдох болно.',
      placeholders: {
        name: 'Овог нэр',
        org: 'Банк, ББСБ-ын нэр',
        email: 'name@company.mn'
      },
      companyInfo: {
        name: 'KCH Solution LLC',
        phone: '77012277',
        email: 'info@kchsolution.mn',
        address: 'Улаанбаатар хот, Монгол улс',
        map: 'Байршил харах'
      }
    },
    stats: {
      npl: 'Нийт зээл',
      today: 'Төлүүлсэн',
      rate: 'Ангилал сайжралт',
      risk: 'Эрсдэлийн сан'
    },
    faq: {
      title: 'Түгээмэл асуултууд',
      items: [
        { q: 'Polaris системтэй хэрхэн холбогддог вэ?', a: 'DebtPro нь Polaris-аас экспортолсон файлыг шууд уншиж, зээлийн ангиллыг автоматаар боддог.' },
        { q: 'CallPro интеграц ямар давуу талтай вэ?', a: 'Ажилтнууд системээс шууд залгах боломжтой бөгөөд ярианы түүх нь харилцагчийн картад бүртгэгддэг.' }
      ]
    },
    finalCta: {
      title: 'Эрсдэлээ орлого болго.',
      subtitle: 'Эрсдэлийг гартаа ав. Зээлийн багцаа эрүүлжүүлж, капиталын эргэлтээ сайжруул. Бид танд тусална.',
      cta: 'Демо Захиалах'
    }
  },
  en: {
    nav: {
      product: 'Platform',
      solutions: 'Solutions',
      why: 'Advantages',
      customers: 'Customers',
      pricing: 'Pricing',
      resources: 'Resources',
      faq: 'FAQ',
      demo: 'Book a Demo',
      sms: 'SMS',
      docs: 'Documents'
    },
    recoveryStages: {
      tag: 'LIFECYCLE MANAGEMENT',
      title: 'End-to-end Recovery Lifecycle',
      subtitle: 'Manage every phase from credit onboarding to final resolution or write-off.',
      stages: [
        {
          id: 'onboarding',
          title: 'Portfolio onboarding',
          label: 'New Credit',
          desc: 'Registering credit portfolios and establishing initial risk status.'
        },
        {
          id: 'pre-delinquent',
          title: 'Pre-delinquent',
          label: 'Pre-overdue Phase',
          desc: 'Automated reminders and proactive monitoring before missed payments.'
        },
        {
          id: 'early',
          title: 'Early collections',
          label: 'Soft Collection',
          desc: 'Automated mass SMS, IVR, and operator calls for short-term delays.'
        },
        {
          id: 'late',
          title: 'Late collections',
          label: 'Hard Collection',
          desc: 'Field visits, legal notices, and coordination with authorized contacts.'
        },
        {
          id: 'recoveries',
          title: 'Recoveries',
          label: 'Asset Recovery',
          desc: 'Asset seizure, court filings, and enforcement procedures.'
        },
        {
          id: 'sales',
          title: 'Write-off / Sales / Surveillance',
          label: 'Resolution',
          desc: 'Collateral sales, portfolio write-offs, and final risk fund clearing.'
        }
      ]
    },
    impactMetrics: {
      tag: 'MEASURABLE RESULTS',
      title: 'Real Impact & Statistics',
      subtitle: 'Expected positive changes in your organization after deploying DebtPro.',
      items: [
        { label: 'Operational Transparency', value: '100', suffix: '%', desc: 'Fully visible audit trails' },
        { label: 'Work Time Saving', value: '40', suffix: '%', desc: 'Via automation logic' },
        { label: 'Employee Satisfaction', value: '25', suffix: 'pts', desc: 'Increased productivity' },
        { label: 'Manual Operations', value: '60', prefix: '-', suffix: '%', desc: 'Human error elimination' },
        { label: 'Promise to Pay (PTP)', value: '25', prefix: '+', suffix: '%', desc: 'Better fulfillment' },
        { label: 'Customer Complaints', value: '30', prefix: '-', suffix: '%', desc: 'Ethical recovery' },
        { label: 'Legal Transition Rate', value: '25', prefix: '-', suffix: '%', desc: 'Pre-court success' },
        { label: 'Customer Satisfaction', value: '20', suffix: 'pts', desc: 'Better UX journey' },
        { label: 'Operational Cost', value: '40', prefix: '-', suffix: '%', desc: 'Lower overhead' },
        { label: 'NPL Ratio Reduction', value: '1-3', suffix: 'pts', desc: 'Portfolio health' },
        { label: 'NPE Detection', value: '20', prefix: '+', suffix: '%', desc: 'Early diagnostics' }
      ]
    },
    smsSection: {
      tag: 'OMNICHANNEL AUTOMATION',
      title: 'Smart SMS via CallPro',
      subtitle: 'Behavioral-based automated SMS and Voice notifications. Zero manual intervention.',
      features: [
        { title: 'Trigger Logic', desc: 'Send tailored messages based on exact overdue aging days.' },
        { title: 'CallPro Sync', desc: 'Track voice history and SMS delivery directly from your cockpit.' },
        { title: 'Mass Messaging', desc: 'Industrial capacity to reach thousands of borrowers simultaneously.' }
      ],
      stats: { delivery: '99.9%', latency: '<2s', volume: '10K+' }
    },
    docSection: {
      tag: 'LEGAL ENGINE',
      title: 'End-to-end Document Automation',
      subtitle: 'Generate notices, invoices, and court filings in 1 second. Ready to print.',
      features: [
        { title: 'Smart Templates', desc: 'Templates that auto-fill with precise borrower and debt data.' },
        { title: 'E-Sign Ready', desc: 'Support for digital signatures and secure QR authentication.' },
        { title: 'Legal Archive', desc: 'Every generated document is automatically archived in the borrower timeline.' }
      ],
      impact: '80% TIME SAVED'
    },
    pricing: {
      tag: 'PRICING ENGINE',
      title: 'Flexible pricing models',
      subtitle: 'Scalable options designed for high-performance financial operations.',
      free: {
        name: 'Starter (Free)',
        price: '$0',
        period: 'forever',
        desc: 'Ideal for small teams and startup cooperatives.',
        features: [
          'Basic Loan Tracking',
          'Manual Data Import (Excel)',
          'Up to 3 Agents',
          'Standard Reporting',
          'Basic Data Security'
        ],
        cta: 'Get Started'
      },
      pro: {
        name: 'Enterprise Pro',
        price: 'Custom',
        period: 'tailored',
        desc: 'Comprehensive OS for large Banks & NBFIs.',
        features: [
          'Direct Polaris Core Integration',
          'CallPro: Voice & SMS Automation',
          'Smart Auto-Allocation Algorithm',
          'End-to-end Legal Automation',
          'Advanced Migration Analytics',
          'Unlimited Agents'
        ],
        cta: 'Request Demo'
      }
    },
    megaMenu: {
      automation: { title: 'Automation', desc: 'Smart portfolio distribution' },
      analytics: { title: 'Analytics', desc: 'Migration & quality reporting' },
      security: { title: 'Integrations', desc: 'CallPro & Banking core sync' }
    },
    hero: {
      tag: 'THE NEXT-GEN RECOVERY ENGINE',
      title: 'The Unified Command Cockpit for Loan Recovery',
      subtitle: 'An intelligent system designed to manage, monitor, and automate loan repayments for Banks and NBFIs while increasing team productivity.',
      cta: 'Book a Demo',
      secondary: 'Live Preview',
      carousel: {
        dashboard: 'Command Center',
        profile: '360° Borrower View',
        legal: 'Legal Process',
        sms: 'CallPro Integration',
        performance: 'Agent Performance'
      }
    },
    whyDebtPro: {
      tag: 'ORGANIZATIONAL VALUE',
      title: 'Value to Organization',
      subtitle: 'Stand out by building a competitive advantage. Reduce risk by making data-driven decisions.',
      legacy: {
        title: 'System Advantages',
        items: [
          'Implement tailored strategies for every client',
          'Manage risk via the right channel at the right time',
          'Repayment behavior tracking & analysis',
          'Optimize processes to boost agent productivity',
          'Seamless blend of manual & auto allocation',
          'Flexible self-service configuration'
        ]
      },
      advantage: {
        title: 'Core Business Value',
        items: [
          'Reduce operational costs using advanced tech',
          'Transparent performance evaluation',
          'Real-time analytics for high-quality control',
          'Proactive risk mitigation strategies',
          'Full audit logs and historical tracking',
          'Virtual agents & AI-powered recovery'
        ]
      }
    },
    reviews: {
      tag: 'TRUSTED BY LEADERS',
      title: 'Industry Testimonials',
      subtitle: 'See how leading financial institutions in Mongolia leverage DebtPro OS.',
      items: [
        {
          name: 'Tulga B.',
          org: 'Major Commercial Bank',
          text: 'Since switching to DebtPro, our portfolio recovery rate increased by 24%. The Polaris sync is seamless.',
          rating: 5
        },
        {
          name: 'Saruul G.',
          org: 'Fintech NBFI',
          text: 'CallPro integration and mass SMS automation doubled our collection team\'s productivity.',
          rating: 5
        },
        {
          name: 'Enkhbayar D.',
          org: 'Credit Cooperative',
          text: 'Automated legal notices reduced our paperwork burden by 80%. Highly efficient.',
          rating: 5
        }
      ]
    },
    flow: {
      tag: 'SYSTEM ARCHITECTURE',
      title: 'From Data to Results',
      subtitle: 'How DebtPro automates every step of the loan recovery process.',
      steps: [
        { title: 'Centralize Information', desc: 'Import data from Polaris core.' },
        { title: 'Intelligent Allocation', desc: 'Automatically distribute loans based on agent workload.' },
        { title: 'Interaction Channels', desc: 'Dial CallPro or send SMS directly from the app.' },
        { title: 'Document Automation', desc: 'Auto-fill notices and court documents based on borrower data.' },
        { title: 'Analytics & Insights', desc: 'Monitor recovery rates and agent performance.' }
      ]
    },
    workflow: {
      tag: 'PIPELINE LOGIC',
      title: 'Unified Recovery Workflow',
      subtitle: 'From initial call to court enforcement—manage every phase within a single intelligent pipeline.',
      stages: {
        call: 'Call',
        sms: 'SMS',
        visit: 'Visit',
        legal: 'Legal',
        court: 'Court',
        bailiff: 'Bailiff',
        recovery: 'Recovery'
      },
      status: {
        success: 'Successful',
        pending: 'Pending',
        failed: 'Failed',
        promised: 'Promised'
      }
    },
    excelSection: {
      tag: 'TRANSFORMATION',
      title: 'Excel is a black box. DebtPro is transparent.',
      subtitle: 'Recovery is a data flow measured in seconds. Excel is a bottleneck.',
      excel: {
        title: 'Legacy (Excel)',
        items: [
          'Manual entry from core banking',
          'Manual risk fund calculation',
          'Zero visibility into agent activity',
          'Fragmented collateral info'
        ]
      },
      debtpro: {
        title: 'DebtPro Advanced OS',
        items: [
          'Auto-Allocation: Fair distribution',
          'Automatic Risk Fund calculation',
          'CallPro: Direct dialing & SMS',
          '360° Collateral & Linkage view'
        ]
      }
    },
    contactSection: {
      title: 'Modernize Your Recovery',
      subtitle: 'Ready to turn bad debt into recovered revenue? Fill out the form below.',
      name: 'Your Name',
      org: 'Organization Name',
      email: 'Email Address',
      submit: 'Request Access',
      success: 'Thank you! We will reach out to schedule your demo.',
      placeholders: {
        name: 'Full Name',
        org: 'Bank or NBFI Name',
        email: 'name@company.com'
      },
      companyInfo: {
        name: 'KCH Solution LLC',
        phone: '77012277',
        email: 'info@kchsolution.mn',
        address: 'Ulaanbaatar, Mongolia',
        map: 'View Location'
      }
    },
    stats: {
      npl: 'Total Portfolio',
      today: 'Collected',
      rate: 'Migration Rate',
      risk: 'Risk Fund'
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does Polaris integration work?', a: 'Simply upload the exported loan report; DebtPro parses categories and risk funds automatically.' },
        { q: 'What are the benefits of CallPro integration?', a: 'Agents click to call from the UI. Every recording is linked to the borrower profile.' }
      ]
    },
    finalCta: {
      title: 'Turn risk into income.',
      subtitle: 'Take risk in your hands. Deploy DebtPro and recover capital with precision.',
      cta: 'Book a Demo'
    }
  },
  ko: {
    nav: {
      product: '플랫폼',
      solutions: '솔루션',
      why: '장점',
      customers: '고객사',
      pricing: '가격',
      resources: '자료실',
      faq: 'FAQ',
      demo: '데모 신청',
      sms: 'SMS',
      docs: '문서'
    },
    recoveryStages: {
      tag: '라이프사이클 관리',
      title: '엔드투엔드 채권 회수 단계',
      subtitle: '신규 대출 온보딩부터 최종 상각 및 매각까지의 모든 프로세스를 관리하세요.',
      stages: [
        {
          id: 'onboarding',
          title: 'Portfolio onboarding',
          label: '신규 대출 등록',
          desc: '대출 포트폴리오를 시스템에 등록하고 초기 리스크 상태를 설정합니다.'
        },
        {
          id: 'pre-delinquent',
          title: 'Pre-delinquent',
          label: '연체 전 단계',
          desc: '자동 알림 및 사전 모니터링을 통해 연체를 방지합니다.'
        },
        {
          id: 'early',
          title: 'Early collections',
          label: '초기 채권 회수',
          desc: '자동 및 대량 SMS/전화 안내를 통해 단기 연체를 관리합니다.'
        },
        {
          id: 'late',
          title: 'Late collections',
          label: '후기 채권 회수',
          desc: '현장 방문, 법적 예고 및 실거주지 확인을 통한 집중 관리를 수행합니다.'
        },
        {
          id: 'recoveries',
          title: 'Recoveries',
          label: '채권 추심 단계',
          desc: '담보물 회수, 소송 제기 및 강제 집행 절차를 진행합니다.'
        },
        {
          id: 'sales',
          title: 'Write-off / Sales / Surveillance',
          label: '상각 및 매각',
          desc: '담보 매각, 대손 처리 및 최종 리스크 펀드 정산을 완료합니다.'
        }
      ]
    },
    impactMetrics: {
      tag: 'MEASURABLE RESULTS',
      title: '측정 가능한 결과 및 통계',
      subtitle: 'DebtPro 도입 후 기대할 수 있는 조직의 긍정적인 변화들입니다.',
      items: [
        { label: '운영 투명성', value: '100', suffix: '%', desc: '모든 기록 가시화' },
        { label: '업무 시간 절약', value: '40', suffix: '%', desc: '자동화 엔진 활용' },
        { label: '직원 만족도', value: '25', suffix: 'pts', desc: '생산성 향상' },
        { label: '수동 작업 감소', value: '60', prefix: '-', suffix: '%', desc: '업무 효율성' },
        { label: 'PTP 이행률', value: '25', prefix: '+', suffix: '%', desc: '약속 상환 증가' },
        { label: '고객 불만 감소', value: '30', prefix: '-', suffix: '%', desc: '윤리적 회수' },
        { label: '법적 절차 전환율', value: '25', prefix: '-', suffix: '%', desc: '조기 회수 성공' },
        { label: '고객 만족도', value: '20', suffix: 'pts', desc: '원활한 소통' },
        { label: '운영 비용 절감', value: '40', prefix: '-', suffix: '%', desc: '비용 최적화' },
        { label: 'NPL 비율 감소', value: '1-3', suffix: 'pts', desc: '포트폴리오 건전성' },
        { label: 'NPE 탐지율', value: '20', prefix: '+', suffix: '%', desc: '조기 진단' }
      ]
    },
    smsSection: {
      tag: 'OMNICHANNEL AUTOMATION',
      title: 'CallPro 기반의 지능형 SMS',
      subtitle: '사용자 행동 기반의 자동 SMS 및 음성 알림. 수동 작업이 필요 없습니다.',
      features: [
        { title: 'Trigger Logic', desc: '연체 일수에 따른 맞춤형 메시지 자동 발송.' },
        { title: 'CallPro Sync', desc: '통화 내역 및 SMS 전송 결과를 시스템에서 직접 확인.' },
        { title: 'Mass Messaging', desc: '수천 명의 대출자에게 동시에 정보를 전달할 수 있는 산업급 용량.' }
      ],
      stats: { delivery: '99.9%', latency: '<2s', volume: '10K+' }
    },
    docSection: {
      tag: 'LEGAL ENGINE',
      title: '종단간 문서 자동화',
      subtitle: '고지서, 영수증, 법원 제출 서류를 1초 만에 생성하고 즉시 인쇄하세요.',
      features: [
        { title: 'Smart Templates', desc: '대출자 데이터를 기반으로 자동 완성되는 템플릿.' },
        { title: 'E-Sign Ready', desc: '전자 서명 및 보안 QR 인증 지원.' },
        { title: 'Legal Archive', desc: '생성된 모든 문서는 대출자 타임라인에 자동으로 보관됩니다.' }
      ],
      impact: '80% 시간 절감'
    },
    pricing: {
      tag: 'PRICING ENGINE',
      title: '유연한 요금제',
      subtitle: '비즈니스 규모에 맞는 최적화된 플랜을 선택하세요.',
      free: {
        name: 'Starter (무료)',
        price: '₩0',
        period: 'forever',
        desc: '소규모 팀 및 스타트업에 적합합니다.',
        features: [
          '기본 대출 추적',
          '수동 데이터 가져오기',
          '3명의 사용자',
          '표준 보고서',
          '기본 보안'
        ],
        cta: '시작하기'
      },
      pro: {
        name: 'Enterprise Pro',
        price: '별도 문의',
        period: 'customized',
        desc: '중대형 금융기관을 위한 종합 OS.',
        features: [
          'Polaris 코어 직접 연동',
          'CallPro: 자동 콜/SMS',
          '스마트 자동 배분 알고리즘',
          '법적 절차 자동화',
          '고급 이동 분석',
          '사용자 무제한'
        ],
        cta: '데모 신청'
      }
    },
    megaMenu: {
      automation: { title: '자동화', desc: '스마트 포트폴리오 배분' },
      analytics: { title: '분석', desc: '이동 및 품질 보고서' },
      security: { title: '통합', desc: 'CallPro 및 뱅킹 코어 연동' }
    },
    hero: {
      tag: 'THE NEXT-GEN RECOVERY ENGINE',
      title: '채권 회수를 위한 통합 커맨드 콕핏',
      subtitle: '은행 및 금융기관을 위한 필수 운영 시스템. Polaris 데이터를 연동하고 CallPro로 프로세스를 자동화하세요.',
      cta: '데모 예약',
      secondary: '라이브 미리보기',
      carousel: {
        dashboard: '커맨드 센터',
        profile: '360° 대출자 보기',
        legal: '법적 절차',
        sms: 'CallPro 통합',
        performance: '상담원 실적'
      }
    },
    whyDebtPro: {
      tag: 'ORGANIZATIONAL VALUE',
      title: '조직에 대한 가치',
      subtitle: '데이터 중심의 의사 결정을 통해 리스크를 관리하세요.',
      legacy: {
        title: '시스템의 장점',
        items: [
          '각 고객에게 맞는 맞춤형 전략 수립',
          '적절한 시기에 적절한 채널을 통한 리스크 관리',
          '상환 행동 데이터 분석 및 활용',
          '상담원의 생산성을 극대화하기 위한 프로세스 최적화',
          '수동 및 자동 배분의 유연한 결합',
          '사용자가 직접 설정 가능한 시스템 구성'
        ]
      },
      advantage: {
        title: '우리가 제공하는 가치',
        items: [
          '첨단 기술을 활용한 운영 비용 절감',
          '투명한 성과 평가 체계 구축',
          '실시간 분석을 통한 고품질 제어 시스템',
          '선제적인 리스크 완화 전략',
          '완벽한 감사 로그 및 이력 관리',
          '가상 상담원 및 AI 기반 회수 솔루션'
        ]
      }
    },
    reviews: {
      tag: 'TRUSTED BY LEADERS',
      title: '산업 전문가의 추천',
      subtitle: '몽골 최고의 금융기관들이 DebtPro OS를 통해 혁신을 경험하고 있습니다.',
      items: [
        {
          name: 'Tulga B.',
          org: '대형 상업 은행',
          text: 'DebtPro 도입 후 회수율이 24% 향상되었습니다. Polaris 연동이 매우 강력합니다.',
          rating: 5
        },
        {
          name: 'Saruul G.',
          org: '핀테크 NBFI',
          text: 'CallPro 통합과 자동 SMS 덕분에 팀의 생산성이 2배 증가했습니다.',
          rating: 5
        },
        {
          name: 'Enkhbayar D.',
          org: '신용 협동조합',
          text: '법적 문서 자동화로 서류 작업 부담이 80% 줄었습니다.',
          rating: 5
        }
      ]
    },
    flow: {
      tag: 'SYSTEM ARCHITECTURE',
      title: '데이터에서 결과까지',
      subtitle: 'DebtPro가 채권 회수의 모든 단계를 자동화하는 방법.',
      steps: [
        { title: '정보 중앙화', desc: 'Polaris 코어에서 데이터를 즉시 가져옵니다.' },
        { title: '지능형 배분', desc: '상담원의 업무량에 따라 대출 건을 자동으로 배분합니다.' },
        { title: '상호작용 채널', desc: '앱에서 직접 CallPro로 전화를 걸거나 SMS를 보냅니다.' },
        { title: '문서 자동화', desc: '대출자 데이터를 기반으로 법적 문서를 자동으로 생성합니다.' },
        { title: '분석 및 인사이트', desc: '실시간 차트를 통해 회수율과 상담원 실적을 모니터링합니다.' }
      ]
    },
    workflow: {
      tag: 'PIPELINE LOGIC',
      title: '통합 회수 워к플로우',
      subtitle: '첫 전화부터 법적 집행까지—단일 지능형 파이프라인에서 관리하세요.',
      stages: {
        call: '전화',
        sms: 'SMS',
        visit: '방문',
        legal: '법무',
        court: '법원',
        bailiff: '집행관',
        recovery: '회수'
      },
      status: {
        success: '성공',
        pending: '대기 중',
        failed: '실패',
        promised: '약속됨'
      }
    },
    excelSection: {
      tag: 'TRANSFORMATION',
      title: '엑셀은 블랙박스입니다. DebtPro는 투명합니다.',
      subtitle: '회수는 초 단위로 측정되는 데이터 흐름입니다.',
      excel: {
        title: '레거시 (엑셀)',
        items: [
          '수동 데이터 입력 오류',
          '수동 리스크 계산',
          '상담원 활동 가시성 제로',
          '파편화된 담보 정보'
        ]
      },
      debtpro: {
        title: 'DebtPro Advanced OS',
        items: [
          'Auto-Allocation: 공정한 배분',
          '자동 리스크 충당금 계산',
          'CallPro: 직접 다이얼링 및 SMS',
          '360° 담보 및 연결성 보기'
        ]
      }
    },
    contactSection: {
      title: '회수 프로세스의 현대화',
      subtitle: '부실 채권을 회수 수익으로 바꿀 준비가 되셨나요?',
      name: '이름',
      org: '조직명',
      email: '이메일 주소',
      submit: '신청하기',
      success: '감사합니다! 데모 일정을 위해 곧 연락드리겠습니다.',
      placeholders: {
        name: '성함',
        org: '은행 또는 금융기관명',
        email: 'name@company.com'
      },
      companyInfo: {
        name: 'KCH Solution LLC',
        phone: '77012277',
        email: 'info@kchsolution.mn',
        address: '몽골, 울란바토르',
        map: '지도 보기'
      }
    },
    stats: {
      npl: '총 포트폴리오',
      today: '회수액',
      rate: '이동률',
      risk: '리스크 펀드'
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        { q: 'How does Polaris integration work?', a: '엑셀 보고서를 업로드하면 DebtPro가 자동으로 분석합니다.' },
        { q: 'What are the benefits of CallPro integration?', a: 'UI에서 바로 전화를 걸 수 있으며 모든 녹음이 대출자 프로필에 기록됩니다.' }
      ]
    },
    finalCta: {
      title: '리스크를 수익으로.',
      subtitle: '리스크를 장악하세요. 스프레드시트 관리는 멈추고 DebtPro로 정밀하게 자본을 회수하세요.',
      cta: '데모 신청'
    }
  }
};
