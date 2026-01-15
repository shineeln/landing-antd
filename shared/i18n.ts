
import { Language } from './types';

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
      subtitle: 'DebtPro бол Банк, ББСБ-ын зээлийн багцыг эрүүлжүүлэх "Mission-Critical" үйлдлийн систем юм. Polaris-аас дата уншиж, CallPro-оор автоматжуул.',
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
      tag: 'CORE DIFFERENTIATOR',
      title: 'Яагаад DebtPro гэж?',
      subtitle: 'DebtPro бол борлуулалтын CRM биш, харин өр төлүүлэлтийн онцлогт зориулагдсан мэргэжлийн "Operating System" юм.',
      legacy: {
        title: 'Уламжлалт CRM',
        items: [
          'Зөвхөн борлуулалтад төвлөрсөн бүтэц',
          'Зээлийн ангиллын ложик байхгүй',
          'Дотоодын системүүдтэй холбогдоход хүндрэлтэй',
          'Нэмэлт хөгжүүлэлтийн зардал өндөр'
        ]
      },
      advantage: {
        title: 'DebtPro Advanced OS',
        items: [
          'Төлүүлэлтэд оновчлогдсон UI/UX',
          'Polaris датаг шууд унших алгоритм',
          'Хууль, Шүүхийн нэгдсэн хяналт',
          'Баримт бичиг автоматаар үүсгэх загвар'
        ]
      },
      benefits: [
        { title: 'Локал Интеграц', desc: 'CallPro болон банкны системүүдтэй шууд холбогдоно.' },
        { title: 'Бүрэн Нийцэл', desc: 'Монгол улсын санхүүгийн хууль тогтоомжид нийцсэн.' },
        { title: 'Автоматжуулалт', desc: 'Зээлдэгчийн зан төлөвт суурилсан төлүүлэлт.' }
      ],
      useCases: {
        title: 'Салбарын шийдлүүд',
        bank: {
          title: 'Арилжааны Банкууд',
          desc: 'Томоохон багц зээлийн ангилал, шилжилтийн тайланг автоматаар бодож, эрсдэлийн санг тогтооно.'
        },
        nbfi: {
          title: 'ББСБ ба Хадгаламж зээл',
          desc: 'Бичил зээлийн төлүүлэлтийг бүрэн автоматжуулж, үйл ажиллагааны зардлыг 40% бууруулна.'
        }
      }
    },
    reviews: {
      tag: 'TRUSTED BY LEADERS',
      title: 'Салбарын тэргүүлэгчдийн сонголт',
      subtitle: 'Монгол улсын ТОП банк, ББСБ-ууд DebtPro платформыг өдөр тутмын үйл ажиллагаандаа ашиглаж байна.',
      items: [
        {
          name: 'Б. Тулга',
          position: 'Эрсдэлийн удирдлагын газар',
          org: 'ТОП Банк',
          text: 'DebtPro-д шилжсэнээр манай зээлийн багцын чанар 24%-иар сайжирсан. Polaris системтэй шууд холбогддог нь хамгийн том давуу тал.',
          rating: 5
        },
        {
          name: 'Г. Саруул',
          position: 'Гүйцэтгэх захирал',
          org: 'Финтек ББСБ',
          text: 'CallPro интеграц болон автомат МСЖ нь манай төлүүлэлтийн багийн бүтээмжийг 2 дахин нэмэгдүүлсэн.',
          rating: 5
        },
        {
          name: 'Д. Энхбаяр',
          position: 'Ахлах хуульч',
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
        {
          id: 0,
          label: 'Data Centralization',
          path: 'Dashboard -> Import',
          title: 'Өгөгдөл Төвлөрүүлэх',
          desc: 'Polaris системээс датаг шууд импортлоно. Систем зээлийн ангиллыг автоматаар тогтооно.'
        },
        {
          id: 1,
          label: 'Smart Distribution',
          path: 'Management -> Allocation',
          title: 'Ухаалаг Хуваарилалт',
          desc: 'Зээлүүдийг ажилтнуудын ачаалал болон дүн дээр үндэслэн алгоритмаар хуваарилна.'
        },
        {
          id: 2,
          label: 'Multi-Channel Action',
          path: 'Collection -> Action',
          title: 'Харилцах Сувгууд',
          desc: 'CallPro ашиглан системээс шууд залгах, МСЖ илгээх. Бүх үйлдэл Timeline-д хадгалагдана.'
        },
        {
          id: 3,
          label: 'Legal Automation',
          path: 'Legal -> Document Gen',
          title: 'Баримт Бичгийн Автоматжуулалт',
          desc: 'Мэдэгдэх хуудас, Шүүхийн нэхэмжлэлийг систем автоматаар бөглөж, хэвлэхэд бэлэн болгоно.'
        },
        {
          id: 4,
          label: 'Insights & Reporting',
          path: 'Reports -> Dashboard',
          title: 'Тайлан, Дүн Шинжилгээ',
          desc: 'Төлүүлсэн дүн, ажилтнуудын гүйцэтгэлийг бодит цагийн графикаар хянана.'
        }
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
        description: 'Төлүүлэлтийн багийг хяналтгүй ажиллуулж, дата алдагдах өндөр эрсдэлтэй.',
        items: [
          'Датаг гараар зөөж алдаа гаргах',
          'Зээлийн ангиллыг гараар тооцоолох',
          'Агент бүрийн гүйцэтгэлийг хянах боломжгүй',
          'Барьцаа хөрөнгийн мэдээлэл салангид'
        ]
      },
      debtpro: {
        title: 'DebtPro Advanced OS',
        description: 'Бүх датаг нэгдсэн системд төвлөрүүлж, бодит хяналт бий болгоно.',
        items: [
          'Auto-Allocation: Тэнцүү хуваарилалт',
          'Эрсдэлийн сангийн автомат тооцоолол',
          'CallPro: Системээс шууд залгах',
          'Барьцаа хөрөнгө, Хамаарал бүхий 360° мэдээлэл'
        ]
      },
      table: {
        features: ['Өгөгдлийн хамгаалалт', 'Автомат хуваарилалт', 'CallPro Интеграц', 'Шүүхийн процесс', 'Баримт бичиг үүсгэх'],
        excelValues: ['Байхгүй', 'Гар ажиллагаа', 'Байхгүй', 'Байхгүй', 'Байхгүй'],
        debtproValues: ['AES-256', 'Автомат', 'Тийм', 'Тийм', 'Тийм']
      }
    },
    showcase: {
      allocation: { title: 'Ухаалаг Хуваарилалт', benefit: 'Зээлийн багцыг ажилтнуудад оновчтой хуваарилна.', impact: 'AUTO-DISTRIBUTION' },
      sms: { title: 'МСЖ Автоматжуулалт', benefit: 'Автомат МСЖ илгээж, хүргэлтийн тайланг хянана.', impact: '99.9% DELIVERY' },
      routing: { title: 'CallPro Интеграц', benefit: 'Системээс шууд залгаж, ярианы түүхийг бүртгэнэ.', impact: 'ONE-CLICK CALL' },
      lockin: { title: 'Баримт Бичиг', benefit: 'Нэхэмжлэх, мэдэгдэх хуудсыг системээс хэвлэнэ.', impact: 'DOC AUTOMATION' }
    },
    contactSection: {
      title: 'Хамтран ажиллах хүсэлт илгээх',
      subtitle: 'Бидэнтэй нэгдэж, төлүүлэлтийн процессоо дараагийн шатанд гаргахад бэлэн үү?',
      name: 'Таны нэр',
      org: 'Байгууллагын нэр',
      phone: 'Утасны дугаар',
      email: 'И-мэйл хаяг',
      message: 'Зурвас',
      submit: 'Хүсэлт Илгээх',
      success: 'Таны хүсэлтийг хүлээн авлаа. Бид тун удахгүй холбогдох болно.',
      placeholders: {
        name: 'Овог нэр',
        org: 'Банк, ББСБ-ын нэр',
        phone: '9911....',
        email: 'name@company.mn',
        message: 'Хэрэгцээ шаардлагаа бичнэ үү...'
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
      title: 'Эрсдэлээ Орлого болго.',
      subtitle: 'Зээлийн багцаа эрүүлжүүлж, капиталын эргэлтээ сайжруул. Бид танд тусална.',
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
      subtitle: 'The mission-critical operating system for Banks and NBFIs. Import data from Polaris and automate recovery with CallPro.',
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
      tag: 'CORE DIFFERENTIATOR',
      title: 'Why DebtPro?',
      subtitle: 'Unlike generic CRMs, DebtPro is a specialized Operating System designed for the high-stakes world of debt recovery.',
      legacy: {
        title: 'Legacy CRMs',
        items: [
          'Sales-focused pipelines (Not recovery)',
          'No native financial classification logic',
          'Complex local integration barriers',
          'High maintenance & dev overhead'
        ]
      },
      advantage: {
        title: 'DebtPro OS',
        items: [
          'UI/UX optimized for high-volume collections',
          'Native Polaris data mapping engine',
          'End-to-end legal & court tracking',
          'Automated notice generation templates'
        ]
      },
      benefits: [
        { title: 'Local Integration', desc: 'Direct connectivity with CallPro and local banking cores.' },
        { title: 'Full Compliance', desc: 'Adheres to all Mongolian financial regulations.' },
        { title: 'Automation', desc: 'Behavioral-based collection workflows.' }
      ],
      useCases: {
        title: 'Industry Solutions',
        bank: {
          title: 'Commercial Banks',
          desc: 'Automated migration reporting and risk fund provisioning for massive retail portfolios.'
        },
        nbfi: {
          title: 'NBFIs & Cooperatives',
          desc: 'End-to-end micro-loan automation using SMS triggers and CallPro integration.'
        }
      }
    },
    reviews: {
      tag: 'TRUSTED BY LEADERS',
      title: 'Industry Testimonials',
      subtitle: 'See how leading financial institutions in Mongolia leverage DebtPro OS.',
      items: [
        {
          name: 'Tulga B.',
          position: 'Head of Risk',
          org: 'Major Commercial Bank',
          text: 'Since switching to DebtPro, our portfolio recovery rate increased by 24%. The Polaris sync is seamless.',
          rating: 5
        },
        {
          name: 'Saruul G.',
          position: 'CEO',
          org: 'Fintech NBFI',
          text: 'CallPro integration and mass SMS automation doubled our collection team\'s productivity.',
          rating: 5
        },
        {
          name: 'Enkhbayar D.',
          position: 'Senior Counsel',
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
        {
          id: 0,
          label: 'Data Centralization',
          path: 'Dashboard -> Import',
          title: 'Centralize Information',
          desc: 'Import data from Polaris core. System auto-categorizes loans (Normal, Caution, etc.).'
        },
        {
          id: 1,
          label: 'Smart Distribution',
          path: 'Management -> Allocation',
          title: 'Intelligent Allocation',
          desc: 'Automatically distribute loans based on agent workload via advanced system logic.'
        },
        {
          id: 2,
          label: 'Multi-Channel Action',
          path: 'Collection -> Action',
          title: 'Interaction Channels',
          desc: 'Dial CallPro or send SMS directly from the app. Every action is tracked in real-time.'
        },
        {
          id: 3,
          label: 'Legal Automation',
          path: 'Legal -> Document Gen',
          title: 'Document Automation',
          desc: 'Auto-fill notices and court documents based on borrower data. Ready to print.'
        },
        {
          id: 4,
          label: 'Insights & Reporting',
          path: 'Reports -> Dashboard',
          title: 'Analytics & Insights',
          desc: 'Monitor recovery rates and agent performance through real-time charts.'
        }
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
        description: 'Unmonitored teams leading to high data risk and information silos.',
        items: [
          'Manual entry from core banking',
          'Manual risk fund calculation',
          'Zero visibility into agent activity',
          'Fragmented collateral info'
        ]
      },
      debtpro: {
        title: 'DebtPro Advanced OS',
        description: 'Centralized system optimized by automated rules.',
        items: [
          'Auto-Allocation: Fair distribution',
          'Automatic Risk Fund calculation',
          'CallPro: Direct dialing & SMS',
          '360° Collateral & Linkage view'
        ]
      },
      table: {
        features: ['Security', 'Auto Allocation', 'CallPro Integration', 'Legal Tracking', 'Doc Generation'],
        excelValues: ['None', 'Manual', 'None', 'None', 'None'],
        debtproValues: ['AES-256', 'Automated', 'Yes', 'Yes', 'Yes']
      }
    },
    showcase: {
      allocation: { title: 'Smart Allocation', benefit: 'Distribute portfolios to agents automatically based on balance.', impact: 'AUTO-DISTRIBUTION' },
      sms: { title: 'SMS Automation', benefit: 'Trigger mass SMS reminders and track delivery in real-time.', impact: '99.9% DELIVERY' },
      routing: { title: 'CallPro Integration', benefit: 'Call directly from the system and auto-log results.', impact: 'ONE-CLICK CALL' },
      lockin: { title: 'Doc Automation', benefit: 'Generate legal notices from templates instantly.', impact: 'DOC AUTOMATION' }
    },
    contactSection: {
      title: 'Modernize Your Recovery',
      subtitle: 'Ready to turn bad debt into recovered revenue? Fill out the form below.',
      name: 'Your Name',
      org: 'Organization Name',
      phone: 'Phone Number',
      email: 'Email Address',
      message: 'Message',
      submit: 'Request Access',
      success: 'Thank you! We will reach out to schedule your demo.',
      placeholders: {
        name: 'Full Name',
        org: 'Bank or NBFI Name',
        phone: 'Phone Number',
        email: 'name@company.com',
        message: 'Tell us about your needs...'
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
      title: 'Turn Risk into Revenue.',
      subtitle: 'Stop managing debt in spreadsheets. Deploy DebtPro and recover capital with precision.',
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
      tag: 'CORE DIFFERENTIATOR',
      title: '왜 DebtPro인가요?',
      subtitle: '일반 CRM과 달리 DebtPro는 채권 회수라는 특수한 목적을 위해 설계된 전문 운영 시스템입니다.',
      legacy: {
        title: '레거시 CRM',
        items: [
          '영업 중심의 파이프라인 (회수 부적합)',
          '금융 분류 로직 부재',
          '현지 시스템 연동의 어려움',
          '높은 유지보수 비용'
        ]
      },
      advantage: {
        title: 'DebtPro OS',
        items: [
          '대량 회수에 최적화된 UI/UX',
          '기본 Polaris 데이터 매핑 엔진',
          '종단간 법적 추적 기능',
          '자동 통지서 생성 템플릿'
        ]
      },
      benefits: [
        { title: '현지 통합', desc: 'CallPro 및 현지 뱅킹 코어와 직접 연결됩니다.' },
        { title: '규제 준수', desc: '모든 금융 규제 사항을 준수합니다.' },
        { title: '자동화', desc: '행동 기반의 채권 회수 워크플로우.' }
      ],
      useCases: {
        title: '산업별 솔루션',
        bank: {
          title: '상업 은행',
          desc: '대규모 리테일 포트폴리오를 위한 자동 이동 보고 및 리스크 관리.'
        },
        nbfi: {
          title: '비은행 금융기관',
          desc: 'SMS 트리거 및 CallPro 통합을 통한 소액 대출 자동화.'
        }
      }
    },
    reviews: {
      tag: 'TRUSTED BY LEADERS',
      title: '산업 전문가의 추천',
      subtitle: '몽골 최고의 금융기관들이 DebtPro OS를 통해 혁신을 경험하고 있습니다.',
      items: [
        {
          name: 'Tulga B.',
          position: '리스크 관리 총괄',
          org: '대형 상업 은행',
          text: 'DebtPro 도입 후 회수율이 24% 향상되었습니다. Polaris 연동이 매우 강력합니다.',
          rating: 5
        },
        {
          name: 'Saruul G.',
          position: 'CEO',
          org: '핀테크 NBFI',
          text: 'CallPro 통합과 자동 SMS 덕분에 팀의 생산성이 2배 증가했습니다.',
          rating: 5
        },
        {
          name: 'Enkhbayar D.',
          position: '수석 고문',
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
        {
          id: 0,
          label: 'Data Centralization',
          path: '대시보드 -> 가져오기',
          title: '정보 중앙화',
          desc: 'Polaris 코어에서 데이터를 즉시 가져옵니다. 시스템이 자동으로 대출을 분류합니다.'
        },
        {
          id: 1,
          label: 'Smart Distribution',
          path: '관리 -> 배분',
          title: '지능형 배분',
          desc: '상담원의 업무량에 따라 대출 건을 자동으로 배분합니다.'
        },
        {
          id: 2,
          label: 'Multi-Channel Action',
          path: '회수 -> 액션',
          title: '상호작용 채널',
          desc: '앱에서 직접 CallPro로 전화를 걸거나 SMS를 보냅니다.'
        },
        {
          id: 3,
          label: 'Legal Automation',
          path: '법무 -> 문서 생성',
          title: '문서 자동화',
          desc: '대출자 데이터를 기반으로 법적 문서를 자동으로 생성합니다.'
        },
        {
          id: 4,
          label: 'Insights & Reporting',
          path: '보고서 -> 대시보드',
          title: '분석 및 인사이트',
          desc: '실시간 차트를 통해 회수율과 상담원 실적을 모니터링합니다.'
        }
      ]
    },
    workflow: {
      tag: 'PIPELINE LOGIC',
      title: '통합 회수 워크플로우',
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
        description: '관리되지 않는 팀과 데이터 리스크가 발생합니다.',
        items: [
          '수동 데이터 입력 오류',
          '수동 리스크 계산',
          '상담원 활동 가시성 제로',
          '파편화된 담보 정보'
        ]
      },
      debtpro: {
        title: 'DebtPro Advanced OS',
        description: '자동화된 규칙에 의해 최적화된 중앙 시스템.',
        items: [
          'Auto-Allocation: 공정한 배분',
          '자동 리스크 충당금 계산',
          'CallPro: 직접 다이얼링 및 SMS',
          '360° 담보 및 연결성 보기'
        ]
      },
      table: {
        features: ['보안', '자동 배분', 'CallPro 통합', '법적 추적', '문서 생성'],
        excelValues: ['없음', '수동', '없음', '없음', '없음'],
        debtproValues: ['AES-256', '자동화', '지원', '지원', '지원']
      }
    },
    showcase: {
      allocation: { title: '스마트 배분', benefit: '잔액에 따라 상담원에게 포트폴리오를 자동 배분합니다.', impact: 'AUTO-DISTRIBUTION' },
      sms: { title: 'SMS 자동화', benefit: '대량 SMS 알림을 트리거하고 실시간으로 수신을 추적합니다.', impact: '99.9% DELIVERY' },
      routing: { title: 'CallPro 통합', benefit: '시스템에서 바로 전화를 걸고 결과를 기록합니다.', impact: 'ONE-CLICK CALL' },
      lockin: { title: '문서 자동화', benefit: '템플릿에서 법적 문서를 즉시 생성합니다.', impact: 'DOC AUTOMATION' }
    },
    contactSection: {
      title: '회수 프로세스의 현대화',
      subtitle: '부실 채권을 회수 수익으로 바꿀 준비가 되셨나요?',
      name: '이름',
      org: '조직명',
      phone: '전화번호',
      email: '이메일 주소',
      message: '메시지',
      submit: '신청하기',
      success: '감사합니다! 데모 일정을 위해 곧 연락드리겠습니다.',
      placeholders: {
        name: '성함',
        org: '은행 또는 금융기관명',
        phone: '전화번호',
        email: 'name@company.com',
        message: '필요한 사항을 알려주세요...'
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
      subtitle: '스프레드시트 관리는 멈추고 DebtPro로 정밀하게 자본을 회수하세요.',
      cta: '데모 신청'
    }
  }
};
