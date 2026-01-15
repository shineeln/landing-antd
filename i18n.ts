
export type Language = 'mn' | 'en' | 'ko';

export const i18n = {
  mn: {
    nav: {
      product: 'Бүтээгдэхүүн',
      solutions: 'Шийдэл',
      why: 'Яагаад DebtPro',
      customers: 'Харилцагчид',
      pricing: 'Үнэ',
      resources: 'Нөөцүүд',
      faq: 'FAQ',
      demo: 'Демо авах',
    },
    megaMenu: {
      automation: { title: 'Автоматжуулалт', desc: 'Зээлийн авто хуваарилалт (Auto-Allocation)' },
      analytics: { title: 'Аналитик', desc: 'Зээлийн ангилал, шилжилтийн тайлан' },
      security: { title: 'Интеграц', desc: 'CallPro болон Polaris системтэй холбогдоно' }
    },
    hero: {
      tag: 'NPL УДИРДЛАГЫН ЦОГЦ СИСТЕМ',
      title: 'Зээл төлүүлэлтийг автоматаар удирдах Cockpit',
      subtitle: 'DebtPro бол Банк, ББСБ-ын зээлийн чанарыг сайжруулах "Mission-Critical" үйлдлийн систем юм. Polaris-аас дата импорт хийж, CallPro-оор автоматжуул.',
      cta: 'Демо захиалах',
      secondary: 'Шууд үзэх',
      carousel: {
        dashboard: 'Гүйцэтгэлийн самбар',
        profile: 'Харилцагчийн 360°',
        legal: 'Хууль, Шүүхийн процесс',
        sms: 'CallPro Интеграц',
        performance: 'Ажилтны KPI'
      }
    },
    whyDebtPro: {
      tag: 'БҮТЭЭГДЭХҮҮНИЙ ДАВУУ ТАЛ',
      title: 'Яагаад DebtPro гэж?',
      subtitle: 'Ерөнхий зориулалтын CRM системүүд борлуулалтад төвлөрдөг. DebtPro бол өр төлүүлэлтийн онцлогт зориулсан тусгай систем юм.',
      legacy: {
        title: 'Ерөнхий CRM системүүд',
        items: [
          'Зөвхөн борлуулалтад зориулагдсан бүтэц',
          'Монгол улсын зээлийн ангиллын ложик байхгүй',
          'CallPro, Polaris-тай холбогдоход хүндрэлтэй',
          'Нэмэлт хөгжүүлэлтийн зардал маш өндөр'
        ]
      },
      advantage: {
        title: 'DebtPro Advanced OS',
        items: [
          'Төлүүлэлтийн процесст суурилсан UI/UX',
          'Polaris датаг шууд унших алгоритм',
          'Шүүхийн процессын иж бүрэн хяналт',
          'Баримт бичиг автоматаар үүсгэх загварууд'
        ]
      },
      benefits: [
        { title: 'Локал Интеграц', desc: 'CallPro болон дотоодын банкны системүүдтэй шууд холбогдоно.' },
        { title: 'Хуулийн нийцэл', desc: 'Монгол улсын банк санхүүгийн хууль тогтоомжид бүрэн нийцсэн.' },
        { title: 'Автоматжуулалт', desc: 'Зээлдэгчийн зан төлөвт суурилсан төлүүлэлтийн дараалал.' }
      ]
    },
    flow: {
      tag: 'SYSTEM FLOW',
      title: 'Өгөгдлөөс Үр дүн хүртэл',
      subtitle: 'Зээл төлүүлэлтийн бүх процессыг DebtPro хэрхэн автоматжуулдаг vэ?',
      steps: [
        {
          id: 0,
          label: 'Data Centralization',
          path: 'Dashboard -> Import Data',
          title: 'Мэдээлэл төвлөрүүлэх',
          desc: 'Polaris болон бусад системээс датаг эксель файлаар оруулна. Систем ангиллыг (Хэвийн, Анхаарал хандуулах г.м) автоматаар тогтооно.'
        },
        {
          id: 1,
          label: 'Smart Distribution',
          path: 'Loan Management -> Auto-Allocation',
          title: 'Ухаалаг хуваарилалт',
          desc: 'Зээлүүдийг ажилтнуудын ачаалал, зээлийн дүн зэргийг харгалзан системийн ложикоор автоматаар хуваарилна.'
        },
        {
          id: 2,
          label: 'Multi-Channel Action',
          path: 'Collection Workspace -> Action Tracking',
          title: 'Харилцах сувгууд',
          desc: 'CallPro ашиглан системээс шууд залгах, МСЖ илгээх. Бүх үйлдэл цаг хугацааны дарааллаар (Timeline) хадгалагдана.'
        },
        {
          id: 3,
          label: 'Legal Automation',
          path: 'Legal Case -> Document Generator',
          title: 'Бичиг баримт автоматжуулалт',
          desc: 'Мэдэгдэх хуудас, Шүүхийн нэхэмжлэлийг бэлэн загварын дагуу автоматаар бөглөж, хэвлэхэд бэлэн болгоно.'
        },
        {
          id: 4,
          label: 'Insights & Reporting',
          path: 'Reports -> Performance Dashboard',
          title: 'Тайлан, дүн шинжилгээ',
          desc: 'Төлүүлсэн дүн, ажилтнуудын гүйцэтгэл, эрсдэлийн санг бодит цаг хугацааны графикуудаар харна.'
        }
      ]
    },
    workflow: {
      tag: 'COLLECTION PIPELINE',
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
      tag: 'LEGACY VS MODERN',
      title: 'Эксель бол хяналтгүй "хар хайрцаг". DebtPro бол иж бүрэн ил тод систем.',
      subtitle: 'Зээл төлүүлэлт бол секундээр хэмжигдэх өгөгдлийн урсгал. Эксель бол мэдээллийн мухардал, харин DebtPro бол хурдасгуур юм.',
      excel: {
        title: 'Уламжлалт арга (Excel)',
        description: 'Төлүүлэлтийн багийг хяналтгүй ажиллуулж, дата алдагдах болон "мэдээллийн нүх" үүсгэх эрсдэлтэй.',
        items: [
          'Polaris-аас датаг гараар зөөж алдаа гаргах',
          'Зээлийн ангиллыг гараар тооцоолох (5-100%)',
          'Агент бүрийн гүйцэтгэлийг хянах боломжгүй',
          'Барьцаа хөрөнгийн мэдээлэл салангид'
        ]
      },
      debtpro: {
        title: 'DebtPro Advanced OS',
        description: 'Бүх датаг нэгдсэн системд төвлөрүүлж, бодит хяналт ба ил тод байдлыг бий болгоно.',
        items: [
          'Auto-Allocation: Зээлийг тэнцүү хуваарилах',
          'Эрсдэлийн сангийн автомат тооцоолол',
          'CallPro: Системээс шууд залгах, МСЖ илгээх',
          'Барьцаа хөрөнгө, Хамаарал бүхий 360° мэдээлэл'
        ]
      },
      table: {
        features: ['Өгөгдлийн хамгаалалт', 'Автомат хуваарилалт', 'CallPro Интеграц', 'Шүүхийн процесс', 'Баримт бичиг үүсгэх'],
        excelValues: ['Байхгүй', 'Гар ажиллагаа', 'Байхгүй', 'Байхгүй', 'Байхгүй'],
        debtproValues: ['AES-256', 'Автомат', 'Байгаа', 'Байгаа', 'Байгаа']
      }
    },
    showcase: {
      allocation: { title: 'Ухаалаг хуваарилалт', benefit: 'Зээлийн багцыг ажилтнуудад дүн болон тоогоор оновчтой хуваарилна.', impact: 'AUTO-DISTRIBUTION' },
      sms: { title: 'МСЖ Автоматжуулалт', benefit: 'Масс болон автомат МСЖ илгээж, хүргэлтийн тайланг бодит хугацаанд хянана.', impact: '99.9% DELIVERY' },
      routing: { title: 'CallPro Интеграц', benefit: 'Системээс шууд залгаж, ярианы түүхийг харилцагчийн картад бүртгэнэ.', impact: 'ONE-CLICK CALL' },
      lockin: { title: 'Баримт бичиг', benefit: 'Нэхэмжлэх, мэдэгдэх хуудсыг системээс бэлэн загвараар хэвлэнэ.', impact: 'DOC AUTOMATION' }
    },
    contactSection: {
      title: 'Хамтран ажиллах хүсэлт илгээх',
      subtitle: 'Бидэнтэй нэгдэж, төлүүлэлтийн процессоо дараагийн шатанд гаргахад бэлэн үү? Мэдээллээ үлдээнэ үү.',
      name: 'Таны нэр',
      org: 'Байгууллагын нэр',
      phone: 'Утасны дугаар',
      email: 'И-мэйл хаяг',
      message: 'Зурвас',
      submit: 'Хүсэлт илгээх',
      success: 'Таны хүсэлтийг хүлээн авлаа. Бид тун удахгүй холбогдох болно.',
      placeholders: {
        name: 'Овог нэр',
        org: 'Банк, ББСБ-ын нэр',
        phone: '9911....',
        email: 'name@company.mn',
        message: 'Танд тулгарч буй асуудал эсвэл хэрэгцээгээ бичнэ үү...'
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
        { q: 'Polaris системтэй хэрхэн холбогддог vэ?', a: 'DebtPro нь Polaris-аас экспортолсон эксель файлыг шууд уншиж, зээлийн ангилал болон хугацаа хэтрэлтийг автоматаар боддог.' },
        { q: 'CallPro интеграц ямар давуу талтай вэ?', a: 'Ажилтнууд системээс шууд залгах боломжтой бөгөөд ярианы бичлэг, түүх нь харилцагчийн "Action Tracking" хэсэгт автоматаар бүртгэгддэг.' }
      ]
    },
    finalCta: {
      title: 'Эрсдэлээ Орлого болго.',
      subtitle: 'Зээлийн багцаа эрүүлжүүлж, капиталын эргэлтээ сайжруул. Бид танд тусална.',
      cta: 'Демо захиалах'
    }
  },
  en: {
    nav: {
      product: 'Product',
      solutions: 'Solutions',
      why: 'Why DebtPro',
      customers: 'Customers',
      pricing: 'Pricing',
      resources: 'Resources',
      faq: 'FAQ',
      demo: 'Book a Demo',
    },
    megaMenu: {
      automation: { title: 'Automation', desc: 'Auto-Allocation by balance or count' },
      analytics: { title: 'Analytics', desc: 'Migration analysis and quality reports' },
      security: { title: 'Integrations', desc: 'CallPro and Polaris connectivity' }
    },
    hero: {
      tag: 'NPL MANAGEMENT OS',
      title: 'Advanced Command Cockpit for Loan Recovery',
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
      tag: 'CORE ADVANTAGES',
      title: 'Why DebtPro?',
      subtitle: 'Traditional CRM systems are built for sales. DebtPro is a specialized Operating System for loan recovery and NPL management.',
      legacy: {
        title: 'Generic CRMs',
        items: [
          'Built for sales pipelines, not recovery',
          'No native Mongolian financial logic',
          'Extremely complex to integrate locally',
          'High customization & overhead costs'
        ]
      },
      advantage: {
        title: 'DebtPro OS',
        items: [
          'UI/UX optimized for high-volume recovery',
          'Native Polaris data mapping engines',
          'End-to-end legal workflow tracking',
          'Automated notice generation templates'
        ]
      },
      benefits: [
        { title: 'Local Integration', desc: 'Seamlessly connects with CallPro and local banking cores.' },
        { title: 'Full Compliance', desc: 'Strict adherence to Mongolian financial regulations.' },
        { title: 'Automation', desc: 'Prioritize collections based on automated rules.' }
      ]
    },
    flow: {
      tag: 'SYSTEM FLOW',
      title: 'From Data to Results',
      subtitle: 'How DebtPro automates every step of the loan recovery process.',
      steps: [
        {
          id: 0,
          label: 'Data Centralization',
          path: 'Dashboard -> Import Data',
          title: 'Centralize Information',
          desc: 'Import data from Polaris via Excel in one click. System auto-categorizes loans (Normal, Caution, etc.).'
        },
        {
          id: 1,
          label: 'Smart Distribution',
          path: 'Loan Management -> Auto-Allocation',
          title: 'Intelligent Allocation',
          desc: 'Automatically distribute loans based on agent workload and balance via advanced system logic.'
        },
        {
          id: 2,
          label: 'Multi-Channel Action',
          path: 'Collection Workspace -> Action Tracking',
          title: 'Interaction Channels',
          desc: 'Dial CallPro or send SMS directly from the app. Every action is tracked in a historical timeline.'
        },
        {
          id: 3,
          label: 'Legal Automation',
          path: 'Legal Case -> Document Generator',
          title: 'Document Automation',
          desc: 'Auto-fill notices and court documents based on borrower data. Ready for instant printing.'
        },
        {
          id: 4,
          label: 'Insights & Reporting',
          path: 'Reports -> Performance Dashboard',
          title: 'Analytics & Insights',
          desc: 'Monitor recovery rates, agent performance, and risk fund provisions through real-time charts.'
        }
      ]
    },
    workflow: {
      tag: 'COLLECTION PIPELINE',
      title: 'End-to-End Collection Workflow',
      subtitle: 'From initial call to court enforcement—manage every phase of recovery within a single intelligent pipeline.',
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
      tag: 'LEGACY VS MODERN',
      title: 'Excel is an uncontrolled "black box". DebtPro is a transparent system.',
      subtitle: 'Loan recovery is data flow measured in seconds. Excel is a bottleneck. DebtPro is the engine.',
      excel: {
        title: 'Legacy (Excel)',
        description: 'Unmonitored recovery teams leading to high data risk and information silos.',
        items: [
          'Manual data entry from core banking systems',
          'Manual risk fund calculation (5-100%)',
          'Zero visibility into agent activity',
          'Fragmented collateral information'
        ]
      },
      debtpro: {
        title: 'DebtPro Advanced OS',
        description: 'Centralized system optimized by automated rules.',
        items: [
          'Auto-Allocation: Fair portfolio distribution',
          'Automatic Risk Fund & Category Calculation',
          'CallPro: Direct dialing & SMS automation',
          '360° Collateral & Family linkage view'
        ]
      },
      table: {
        features: ['Data Security', 'Auto Allocation', 'CallPro Integration', 'Legal Tracking', 'Doc Generation'],
        excelValues: ['None', 'Manual', 'None', 'None', 'None'],
        debtproValues: ['AES-256', 'Automated', 'Included', 'Included', 'Included']
      }
    },
    showcase: {
      allocation: { title: 'Smart Allocation', benefit: 'Distribute portfolios to agents automatically based on balance or count.', impact: 'AUTO-DISTRIBUTION' },
      sms: { title: 'SMS Automation', benefit: 'Trigger mass or automated SMS reminders and track delivery reports in real-time.', impact: '99.9% DELIVERY' },
      routing: { title: 'CallPro Integration', benefit: 'Call directly from the system and auto-log results into action tracking.', impact: 'ONE-CLICK CALL' },
      lockin: { title: 'Doc Automation', benefit: 'Generate legal notices and payment requests from templates instantly.', impact: 'DOC AUTOMATION' }
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
        message: 'Tell us about your recovery needs...'
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
        { q: 'How does Polaris integration work?', a: 'Simply upload the exported loan report; DebtPro parses categories, overdue days, and risk funds automatically.' },
        { q: 'What are the benefits of CallPro integration?', a: 'Agents click to call from the UI. Every recording and duration is linked to the borrower profile for audit.' }
      ]
    },
    finalCta: {
      title: 'Turn Risk into Revenue.',
      subtitle: 'Stop managing debt in spreadsheets. Deploy DebtPro and recover capital with surgical precision.',
      cta: 'Book a Demo'
    }
  },
  ko: {
    nav: {
      product: '제품',
      solutions: '솔루션',
      why: 'DebtPro 선택 이유',
      customers: '고객사',
      pricing: '가격 정책',
      resources: '자료실',
      faq: 'FAQ',
      demo: '데모 신청',
    },
    megaMenu: {
      automation: { title: '자동화', desc: '잔액 또는 수량에 따른 자동 배정' },
      analytics: { title: '분석', desc: '이동 분석 및 품질 보고서' },
      security: { title: '통합', desc: 'CallPro 및 Polaris 연결성' }
    },
    hero: {
      tag: 'NPL 관리 운영체제 (OS)',
      title: '채권 회수를 위한 스마트 관리 시스템',
      subtitle: '은행 및 금융기관을 위한 필수 운영 시스템. Polaris 데이터를 연동하고 CallPro를 통해 회수 프로세스를 자동화하세요.',
      cta: '데모 예약하기',
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
      tag: '주요 이점',
      title: '왜 DebtPro인가요?',
      subtitle: '기존 CRM 시스템은 영업에 특화되어 있습니다. DebtPro는 채권 회수 및 NPL 관리를 위해 설계된 전문 운영 시스템입니다.',
      legacy: {
        title: '일반 CRM',
        items: [
          '회수가 아닌 영업 파이프라인 중심 설계',
          '현지 금융 로직 부재',
          '현지 시스템과의 통합이 매우 복잡함',
          '높은 커스터마이징 및 유지보수 비용'
        ]
      },
      advantage: {
        title: 'DebtPro OS',
        items: [
          '대량 회수 작업에 최적화된 UI/UX',
          '기본 Polaris 데이터 매핑 엔진',
          '종단간 법적 워크플로우 추적',
          '자동 통지서 생성 템플릿'
        ]
      },
      benefits: [
        { title: '현지 시스템 통합', desc: 'CallPro 및 현지 은행 코어 시스템과 원활하게 연결됩니다.' },
        { title: '규정 준수', desc: '금융 규제 및 법적 요구 사항을 엄격히 준수합니다.' },
        { title: '자동화', desc: '자동화된 규칙에 따라 회수 우선순위를 지정합니다.' }
      ]
    },
    flow: {
      tag: '시스템 흐름',
      title: '데이터에서 결과까지',
      subtitle: 'DebtPro가 채권 회수 프로세스의 각 단계를 자동화하는 방법.',
      steps: [
        {
          id: 0,
          label: '데이터 중앙화',
          path: '대시보드 -> 데이터 가져오기',
          title: '정보 통합',
          desc: '클릭 한 번으로 Polaris 데이터를 엑셀로 가져옵니다. 시스템이 대출 카테고리를 자동으로 분류합니다.'
        },
        {
          id: 1,
          label: '스마트 배정',
          path: '대출 관리 -> 자동 배정',
          title: '지능형 배정',
          desc: '고급 시스템 로직을 통해 상담원 업무량과 잔액에 따라 대출을 자동으로 배분합니다.'
        },
        {
          id: 2,
          label: '멀티 채널 액션',
          path: '회수 작업 공간 -> 액션 추적',
          title: '상호작용 채널',
          desc: '앱에서 직접 CallPro 전화를 걸거나 SMS를 보냅니다. 모든 액션은 타임라인에 기록됩니다.'
        },
        {
          id: 3,
          label: '법적 자동화',
          path: '법적 케이스 -> 문서 생성기',
          title: '문서 자동화',
          desc: '대출자 데이터를 기반으로 통지서 및 법원 문서를 자동으로 채웁니다. 즉시 인쇄 가능합니다.'
        },
        {
          id: 4,
          label: '인사이트 및 보고',
          path: '보고서 -> 실적 대시보드',
          title: '분석 및 인사이트',
          desc: '실시간 차트를 통해 회수율, 상담원 실적, 리스크 펀드 충당금을 모니터링합니다.'
        }
      ]
    },
    workflow: {
      tag: '회수 파이프라인',
      title: '종단간 회수 워크플로우',
      subtitle: '초기 전화부터 법원 집행까지—단일 지능형 파이프라인 내에서 회수의 모든 단계를 관리하세요.',
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
      tag: '과거 vs 현재',
      title: '엑셀은 통제되지 않는 "블랙박스"입니다. DebtPro는 투명한 시스템입니다.',
      subtitle: '채권 회수는 초 단위로 측정되는 데이터 흐름입니다. 엑셀은 병목 현상을 일으키지만, DebtPro는 엔진이 됩니다.',
      excel: {
        title: '레거시 (엑셀)',
        description: '모니터링되지 않는 회수 팀으로 인해 높은 데이터 리스크와 정보 사일로가 발생합니다.',
        items: [
          '코어 뱅킹 시스템의 수동 데이터 입력',
          '수동 리스크 펀드 계산 (5-100%)',
          '상담원 활동에 대한 가시성 제로',
          '파편화된 담보 정보'
        ]
      },
      debtpro: {
        title: 'DebtPro Advanced OS',
        description: '자동화된 규칙에 의해 최적화된 중앙 집중식 시스템입니다.',
        items: [
          '자동 배정: 공정한 포트폴리오 배분',
          '자동 리스크 펀드 및 카테고리 계산',
          'CallPro: 직접 다이얼링 및 SMS 자동화',
          '360° 담보 및 가족 관계 보기'
        ]
      },
      table: {
        features: ['데이터 보안', '자동 배정', 'CallPro 통합', '법적 추적', '문서 생성'],
        excelValues: ['없음', '수동', '없음', '없음', '없음'],
        debtproValues: ['AES-256', '자동화됨', '포함됨', '포함됨', '포함됨']
      }
    },
    showcase: {
      allocation: { title: '스마트 배정', benefit: '잔액 또는 수량에 따라 상담원에게 포트폴리오를 자동으로 배분합니다.', impact: '자동 배정' },
      sms: { title: 'SMS 자동화', benefit: '대량 또는 자동 SMS 알림을 트리거하고 실시간으로 수신 보고서를 추적합니다.', impact: '99.9% 도달율' },
      routing: { title: 'CallPro 통합', benefit: '시스템에서 직접 전화를 걸고 결과를 액션 추적에 자동으로 기록합니다.', impact: '원클릭 전화' },
      lockin: { title: '문서 자동화', benefit: '템플릿에서 법적 통지서 및 지불 요청서를 즉시 생성합니다.', impact: '문서 자동화' }
    },
    contactSection: {
      title: '회수 프로세스 현대화',
      subtitle: '부실 채권을 회수 수익으로 바꿀 준비가 되셨나요? 아래 양식을 작성해 주세요.',
      name: '이름',
      org: '조직명',
      phone: '전화번호',
      email: '이메일 주소',
      message: '메시지',
      submit: '액세스 요청',
      success: '감사합니다! 데모 일정을 잡기 위해 곧 연락드리겠습니다.',
      placeholders: {
        name: '성함',
        org: '은행 또는 금융기관명',
        phone: '전화번호',
        email: 'name@company.com',
        message: '필요하신 회수 서비스에 대해 알려주세요...'
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
        { q: 'Polaris 통합은 어떻게 작동하나요?', a: '내보낸 대출 보고서를 업로드하기만 하면 됩니다. DebtPro가 카테고리, 연체 일수, 리스크 펀드를 자동으로 분석합니다.' },
        { q: 'CallPro 통합의 장점은 무엇인가요?', a: '상담원이 UI에서 바로 전화를 걸 수 있습니다. 모든 녹음과 통화 시간은 감사를 위해 대출자 프로필에 연결됩니다.' }
      ]
    },
    finalCta: {
      title: '리스크를 수익으로 바꾸세요.',
      subtitle: '스프레드시트로 부채를 관리하지 마세요. DebtPro를 도입하고 정밀하게 자본을 회수하세요.',
      cta: '데모 예약하기'
    }
  }
};
