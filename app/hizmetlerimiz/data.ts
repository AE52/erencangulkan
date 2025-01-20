export interface Service {
  slug: string;
  title_tr: string;
  title_en: string;
  icon: string;
  description_tr: string;
  description_en: string;
  content_tr: string;
  content_en: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: 'aile-hukuku',
    title_tr: 'Aile Hukuku',
    title_en: 'Family Law',
    icon: 'users',
    description_tr: 'Boşanma, nafaka, velayet ve diğer aile hukuku davalarında uzman destek.',
    description_en: 'Expert support in divorce, alimony, custody and other family law cases.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80',
    content_tr: `
      <h2>Aile Hukuku Hizmetlerimiz</h2>
      <p>Aile hukuku alanında uzman ekibimizle, hassas ve karmaşık aile meselelerinde size destek oluyoruz. Boşanma, nafaka, velayet ve diğer aile hukuku davalarında profesyonel hukuki danışmanlık hizmeti sunuyoruz.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>Boşanma davaları ve anlaşmalı boşanma süreçleri</li>
        <li>Nafaka talepleri (iştirak ve yoksulluk nafakası)</li>
        <li>Velayet ve kişisel ilişki tesisi davaları</li>
        <li>Mal rejimi ve mal paylaşımı davaları</li>
        <li>Nişanın bozulması ve maddi-manevi tazminat talepleri</li>
        <li>Evlat edinme ve vesayet işlemleri</li>
        <li>Aile içi şiddet ve koruma kararları</li>
        <li>Tanıma ve tenfiz davaları</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>Aile hukuku davalarında gösterdiğimiz hassasiyet ve profesyonel yaklaşımımızla, müvekkillerimizin haklarını en iyi şekilde koruyoruz. Her vakayı özenle değerlendiriyor ve en uygun çözümü sunuyoruz.</p>

      <h3>Nasıl Çalışıyoruz?</h3>
      <ul>
        <li>Ücretsiz ilk görüşme ile hukuki durumunuzu değerlendiriyoruz</li>
        <li>Her aşamada şeffaf ve açık iletişim kuruyoruz</li>
        <li>Alternatif çözüm yollarını değerlendiriyoruz</li>
        <li>Süreç boyunca 7/24 destek sağlıyoruz</li>
        <li>Gizlilik ve mahremiyete özen gösteriyoruz</li>
      </ul>
    `,
    content_en: `
      <h2>Our Family Law Services</h2>
      <p>With our expert team in family law, we support you in sensitive and complex family matters. We provide professional legal consultancy services in divorce, alimony, custody and other family law cases.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Divorce cases and uncontested divorce processes</li>
        <li>Alimony claims (child support and spousal support)</li>
        <li>Custody and visitation rights cases</li>
        <li>Matrimonial property regime and division of assets</li>
        <li>Broken engagement and compensation claims</li>
        <li>Adoption and guardianship procedures</li>
        <li>Domestic violence and protection orders</li>
        <li>Recognition and enforcement of foreign court decisions</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our sensitivity and professional approach in family law cases, we protect our clients' rights in the best way possible. We carefully evaluate each case and provide the most appropriate solution.</p>

      <h3>How We Work</h3>
      <ul>
        <li>Free initial consultation to evaluate your legal situation</li>
        <li>Transparent and clear communication at every stage</li>
        <li>Evaluation of alternative solutions</li>
        <li>24/7 support throughout the process</li>
        <li>Attention to confidentiality and privacy</li>
      </ul>
    `
  },
  {
    slug: 'is-hukuku',
    title_tr: 'İş Hukuku',
    title_en: 'Labor Law',
    icon: 'briefcase',
    description_tr: 'İşçi-işveren uyuşmazlıklarında ve iş davalarında uzman destek.',
    description_en: 'Expert support in employee-employer disputes and labor cases.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80',
    content_tr: `
      <h2>İş Hukuku Hizmetlerimiz</h2>
      <p>İş hukuku alanında deneyimli ekibimizle, işçi ve işveren uyuşmazlıklarında profesyonel hukuki destek sağlıyoruz. Her türlü iş davası ve işçi-işveren ilişkilerinde uzman danışmanlık hizmeti veriyoruz.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>İşe iade davaları ve fesih süreçleri</li>
        <li>Kıdem ve ihbar tazminatı hesaplamaları ve davaları</li>
        <li>Fazla mesai ve diğer işçilik alacakları davaları</li>
        <li>İş kazası ve meslek hastalığı davaları</li>
        <li>Mobbing (İşyerinde psikolojik taciz) davaları</li>
        <li>Toplu iş hukuku ve sendika uyuşmazlıkları</li>
        <li>İş sözleşmesi hazırlama ve danışmanlık</li>
        <li>İş güvenliği ve işçi sağlığı danışmanlığı</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>İş hukuku alanındaki deneyimimiz ve uzman kadromuzla, müvekkillerimizin haklarını en etkin şekilde koruyoruz. Her vakayı titizlikle inceliyor ve en uygun çözüm stratejisini geliştiriyoruz.</p>

      <h3>Çalışma Prensibimiz</h3>
      <ul>
        <li>Detaylı hukuki analiz ve strateji geliştirme</li>
        <li>Alternatif uyuşmazlık çözüm yöntemlerinin değerlendirilmesi</li>
        <li>Süreç yönetiminde şeffaflık ve düzenli bilgilendirme</li>
        <li>Maliyet-etkin çözümler sunma</li>
        <li>Önleyici hukuki danışmanlık hizmetleri</li>
      </ul>
    `,
    content_en: `
      <h2>Our Labor Law Services</h2>
      <p>With our experienced team in labor law, we provide professional legal support in employee and employer disputes. We offer expert consultancy services in all types of labor cases and employee-employer relations.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Reinstatement cases and termination processes</li>
        <li>Severance and notice pay calculations and litigation</li>
        <li>Overtime and other employee receivables cases</li>
        <li>Work accident and occupational disease cases</li>
        <li>Mobbing (Workplace psychological harassment) cases</li>
        <li>Collective labor law and union disputes</li>
        <li>Employment contract preparation and consultancy</li>
        <li>Occupational health and safety consultancy</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience in labor law and expert staff, we protect our clients' rights most effectively. We carefully examine each case and develop the most appropriate solution strategy.</p>

      <h3>Our Working Principle</h3>
      <ul>
        <li>Detailed legal analysis and strategy development</li>
        <li>Evaluation of alternative dispute resolution methods</li>
        <li>Transparency and regular updates in process management</li>
        <li>Cost-effective solutions</li>
        <li>Preventive legal consultancy services</li>
      </ul>
    `
  },
  {
    slug: 'ceza-hukuku',
    title_tr: 'Ceza Hukuku',
    title_en: 'Criminal Law',
    icon: 'gavel',
    description_tr: 'Ceza davalarında profesyonel savunma ve hukuki danışmanlık.',
    description_en: 'Professional defense and legal consultancy in criminal cases.',
    image: 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80',
    content_tr: `
      <h2>Ceza Hukuku Hizmetlerimiz</h2>
      <p>Ceza Hukuku alanında uzman ekibimizle, her türlü ceza davasında profesyonel savunma ve hukuki danışmanlık hizmeti sunuyoruz. Soruşturma aşamasından yargılama sürecine kadar yanınızdayız.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>Ağır ceza davaları</li>
        <li>Ekonomik suçlar ve yolsuzluk davaları</li>
        <li>Uyuşturucu suçları</li>
        <li>Cinsel suçlar</li>
        <li>Bilişim suçları</li>
        <li>Trafik suçları</li>
        <li>Organize suçlar</li>
        <li>Kabahatler ve idari para cezaları</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>Ceza Hukuku alanındaki deneyimimiz ve uzman kadromuzla, müvekkillerimizin haklarını en etkin şekilde savunuyoruz. Her dosyayı titizlikle inceliyor ve en uygun savunma stratejisini geliştiriyoruz.</p>

      <h3>Savunma Yaklaşımımız</h3>
      <ul>
        <li>Kapsamlı dosya analizi</li>
        <li>Etkin delil toplama ve değerlendirme</li>
        <li>Stratejik savunma planlaması</li>
        <li>Süreç yönetiminde şeffaflık</li>
        <li>7/24 hukuki destek</li>
      </ul>
    `,
    content_en: `
      <h2>Our Criminal Law Services</h2>
      <p>With our expert team in Criminal Law, we provide professional defense and legal consultancy services in all types of criminal cases. We are with you from the investigation phase to the trial process.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Felony cases</li>
        <li>Economic crimes and corruption cases</li>
        <li>Drug offenses</li>
        <li>Sexual offenses</li>
        <li>Cybercrime</li>
        <li>Traffic offenses</li>
        <li>Organized crime</li>
        <li>Misdemeanors and administrative fines</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience and expert staff in Criminal Law, we defend our clients' rights most effectively. We carefully examine each file and develop the most appropriate defense strategy.</p>

      <h3>Our Defense Approach</h3>
      <ul>
        <li>Comprehensive file analysis</li>
        <li>Effective evidence collection and evaluation</li>
        <li>Strategic defense planning</li>
        <li>Transparency in process management</li>
        <li>24/7 legal support</li>
      </ul>
    `
  },
  {
    slug: 'icra-iflas-hukuku',
    title_tr: 'İcra ve İflas Hukuku',
    title_en: 'Enforcement & Bankruptcy Law',
    icon: 'balance-scale',
    description_tr: 'İcra takibi ve iflas davalarında profesyonel hukuki destek.',
    description_en: 'Professional legal support in enforcement proceedings and bankruptcy cases.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80',
    content_tr: `
      <h2>İcra ve İflas Hukuku Hizmetlerimiz</h2>
      <p>İcra ve İflas Hukuku alanında uzman ekibimizle, alacaklı ve borçlu haklarının korunması için profesyonel hukuki destek sağlıyoruz. Her türlü icra takibi ve iflas davalarında yanınızdayız.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>İcra takibi başlatma ve takip süreçleri</li>
        <li>İflas davaları ve tasfiye süreçleri</li>
        <li>Haciz işlemleri ve haciz yolu ile takip</li>
        <li>İtirazın iptali ve kaldırılması davaları</li>
        <li>Menfi tespit ve istirdat davaları</li>
        <li>İstihkak davaları</li>
        <li>Tasarrufun iptali davaları</li>
        <li>Konkordato süreçleri ve danışmanlık</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>İcra ve İflas Hukuku alanındaki deneyimimiz ve profesyonel yaklaşımımızla, müvekkillerimizin haklarını en etkin şekilde koruyoruz. Her dosyayı titizlikle inceliyor ve en uygun çözüm stratejisini geliştiriyoruz.</p>

      <h3>Çalışma Prensibimiz</h3>
      <ul>
        <li>Hızlı ve etkin takip süreci yönetimi</li>
        <li>Düzenli bilgilendirme ve şeffaf iletişim</li>
        <li>Maliyet-fayda analizine dayalı strateji geliştirme</li>
        <li>Alternatif çözüm yollarının değerlendirilmesi</li>
        <li>Kapsamlı hukuki danışmanlık hizmeti</li>
      </ul>
    `,
    content_en: `
      <h2>Our Enforcement & Bankruptcy Law Services</h2>
      <p>With our expert team in Enforcement and Bankruptcy Law, we provide professional legal support for protecting creditor and debtor rights. We are with you in all kinds of enforcement proceedings and bankruptcy cases.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Initiating and following enforcement proceedings</li>
        <li>Bankruptcy cases and liquidation processes</li>
        <li>Seizure procedures and enforcement through seizure</li>
        <li>Objection annulment and removal cases</li>
        <li>Negative declaratory and restitution actions</li>
        <li>Property claim cases</li>
        <li>Annulment of disposition cases</li>
        <li>Concordat processes and consultancy</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience and professional approach in Enforcement and Bankruptcy Law, we protect our clients' rights most effectively. We carefully examine each file and develop the most appropriate solution strategy.</p>

      <h3>Our Working Principle</h3>
      <ul>
        <li>Fast and effective follow-up process management</li>
        <li>Regular updates and transparent communication</li>
        <li>Strategy development based on cost-benefit analysis</li>
        <li>Evaluation of alternative solutions</li>
        <li>Comprehensive legal consultancy service</li>
      </ul>
    `
  },
  {
    slug: 'tazminat-hukuku',
    title_tr: 'Tazminat Hukuku',
    title_en: 'Compensation Law',
    icon: 'hand-holding-usd',
    description_tr: 'Her türlü tazminat davasında hak arama sürecinizde yanınızdayız.',
    description_en: 'We are with you in the process of seeking rights in all kinds of compensation cases.',
    image: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80',
    content_tr: `
      <h2>Tazminat Hukuku Hizmetlerimiz</h2>
      <p>Tazminat Hukuku alanında uzman ekibimizle, maddi ve manevi zararlarınızın tazmini için profesyonel hukuki destek sağlıyoruz. Her türlü tazminat davasında haklarınızı korumak için yanınızdayız.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>İş kazası ve meslek hastalığı tazminatları</li>
        <li>Trafik kazası tazminatları</li>
        <li>Maddi ve manevi tazminat davaları</li>
        <li>Destekten yoksun kalma tazminatı</li>
        <li>Malpraktis (Tıbbi hata) tazminatları</li>
        <li>Haksız fiil tazminatları</li>
        <li>İş hukuku tazminatları</li>
        <li>Kişilik hakları ihlali tazminatları</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>Tazminat Hukuku alanındaki deneyimimiz ve uzman kadromuzla, hak kayıplarının önlenmesi ve adil tazminat miktarlarının belirlenmesi için çalışıyoruz. Her vakayı detaylı inceliyor ve en uygun hukuki stratejiyi geliştiriyoruz.</p>

      <h3>Hizmet Sürecimiz</h3>
      <ul>
        <li>Detaylı zarar tespiti ve hesaplama</li>
        <li>Uzman bilirkişilerle çalışma</li>
        <li>Kapsamlı delil toplama ve analiz</li>
        <li>Alternatif çözüm yollarının değerlendirilmesi</li>
        <li>Süreç boyunca düzenli bilgilendirme</li>
      </ul>
    `,
    content_en: `
      <h2>Our Compensation Law Services</h2>
      <p>With our expert team in Compensation Law, we provide professional legal support for the compensation of your material and moral damages. We are with you to protect your rights in all kinds of compensation cases.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Work accident and occupational disease compensation</li>
        <li>Traffic accident compensation</li>
        <li>Material and moral compensation cases</li>
        <li>Loss of support compensation</li>
        <li>Malpractice compensation</li>
        <li>Tort compensation</li>
        <li>Labor law compensation</li>
        <li>Personal rights violation compensation</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience and expert staff in Compensation Law, we work to prevent loss of rights and determine fair compensation amounts. We examine each case in detail and develop the most appropriate legal strategy.</p>

      <h3>Our Service Process</h3>
      <ul>
        <li>Detailed damage assessment and calculation</li>
        <li>Working with expert witnesses</li>
        <li>Comprehensive evidence collection and analysis</li>
        <li>Evaluation of alternative solutions</li>
        <li>Regular updates throughout the process</li>
      </ul>
    `
  },
  {
    slug: 'miras-hukuku',
    title_tr: 'Miras Hukuku',
    title_en: 'Inheritance Law',
    icon: 'scroll',
    description_tr: 'Miras paylaşımı ve miras davalarında uzman hukuki danışmanlık.',
    description_en: 'Expert legal consultancy in inheritance distribution and inheritance cases.',
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80',
    content_tr: `
      <h2>Miras Hukuku Hizmetlerimiz</h2>
      <p>Miras Hukuku alanında uzman ekibimizle, miras paylaşımı ve miras davalarında profesyonel hukuki danışmanlık hizmeti sunuyoruz. Mirasçıların haklarının korunması için kapsamlı hukuki destek sağlıyoruz.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>Miras paylaşımı ve taksim davaları</li>
        <li>Vasiyetname hazırlama ve iptal davaları</li>
        <li>Miras reddi işlemleri</li>
        <li>Tenkis (Miras payının iadesi) davaları</li>
        <li>Mirasta istihkak davaları</li>
        <li>Mirastan ıskat davaları</li>
        <li>Tereke tespit işlemleri</li>
        <li>Mal paylaşımı anlaşmaları</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>Miras Hukuku alanındaki deneyimimiz ve uzman kadromuzla, mirasçıların haklarını en iyi şekilde koruyoruz. Her vakayı özenle değerlendiriyor ve en uygun çözümü sunuyoruz.</p>

      <h3>Çalışma Metodumuz</h3>
      <ul>
        <li>Detaylı miras analizi ve planlama</li>
        <li>Kapsamlı hukuki danışmanlık</li>
        <li>Uzlaşma odaklı çözüm yaklaşımı</li>
        <li>Süreç yönetiminde şeffaflık</li>
        <li>Düzenli bilgilendirme ve iletişim</li>
      </ul>
    `,
    content_en: `
      <h2>Our Inheritance Law Services</h2>
      <p>With our expert team in Inheritance Law, we provide professional legal consultancy services in inheritance distribution and inheritance cases. We provide comprehensive legal support for protecting the rights of heirs.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Inheritance distribution and division cases</li>
        <li>Will preparation and cancellation cases</li>
        <li>Inheritance rejection procedures</li>
        <li>Reduction of inheritance share cases</li>
        <li>Inheritance claim cases</li>
        <li>Disinheritance cases</li>
        <li>Estate determination procedures</li>
        <li>Property sharing agreements</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience and expert staff in Inheritance Law, we protect the rights of heirs in the best way possible. We carefully evaluate each case and provide the most appropriate solution.</p>

      <h3>Our Working Method</h3>
      <ul>
        <li>Detailed inheritance analysis and planning</li>
        <li>Comprehensive legal consultancy</li>
        <li>Conciliation-focused solution approach</li>
        <li>Transparency in process management</li>
        <li>Regular updates and communication</li>
      </ul>
    `
  },
  {
    slug: 'tuketici-hukuku',
    title_tr: 'Tüketici Hukuku',
    title_en: 'Consumer Law',
    icon: 'shopping-cart',
    description_tr: 'Tüketici haklarının korunması ve tüketici davalarında uzman destek.',
    description_en: 'Expert support in consumer rights protection and consumer cases.',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80',
    content_tr: `
      <h2>Tüketici Hukuku Hizmetlerimiz</h2>
      <p>Tüketici Hukuku alanında uzman ekibimizle, tüketici haklarının korunması ve tüketici davalarında profesyonel hukuki destek sağlıyoruz. Her türlü tüketici uyuşmazlığında yanınızdayız.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>Ayıplı mal ve hizmet davaları</li>
        <li>Tüketici kredisi ve kredi kartı uyuşmazlıkları</li>
        <li>Abonelik sözleşmeleri uyuşmazlıkları</li>
        <li>Mesafeli satış sözleşmeleri</li>
        <li>Devre mülk ve devre tatil sözleşmeleri</li>
        <li>Taksitli satış sözleşmeleri</li>
        <li>Tüketici hakem heyeti başvuruları</li>
        <li>Tüketici mahkemesi davaları</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>Tüketici Hukuku alanındaki deneyimimiz ve uzman kadromuzla, tüketici haklarının etkin bir şekilde korunması için çalışıyoruz. Her vakayı titizlikle inceliyor ve en uygun çözüm yolunu sunuyoruz.</p>

      <h3>Çözüm Odaklı Yaklaşımımız</h3>
      <ul>
        <li>Hızlı ve etkili hukuki destek</li>
        <li>Kapsamlı dosya analizi</li>
        <li>Alternatif çözüm yollarının değerlendirilmesi</li>
        <li>Süreç boyunca düzenli bilgilendirme</li>
        <li>Şeffaf ve anlaşılır iletişim</li>
      </ul>
    `,
    content_en: `
      <h2>Our Consumer Law Services</h2>
      <p>With our expert team in Consumer Law, we provide professional legal support in consumer rights protection and consumer cases. We are with you in all kinds of consumer disputes.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Defective goods and services cases</li>
        <li>Consumer loans and credit card disputes</li>
        <li>Subscription contract disputes</li>
        <li>Distance selling contracts</li>
        <li>Timeshare contracts</li>
        <li>Installment sales contracts</li>
        <li>Consumer arbitration board applications</li>
        <li>Consumer court cases</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience and expert staff in Consumer Law, we work for the effective protection of consumer rights. We carefully examine each case and provide the most appropriate solution.</p>

      <h3>Our Solution-Oriented Approach</h3>
      <ul>
        <li>Fast and effective legal support</li>
        <li>Comprehensive file analysis</li>
        <li>Evaluation of alternative solutions</li>
        <li>Regular updates throughout the process</li>
        <li>Transparent and clear communication</li>
      </ul>
    `
  },
  {
    slug: 'gayrimenkul-hukuku',
    title_tr: 'Gayrimenkul Hukuku',
    title_en: 'Real Estate Law',
    icon: 'building',
    description_tr: 'Gayrimenkul alım-satım ve uyuşmazlıklarında profesyonel hukuki danışmanlık.',
    description_en: 'Professional legal consultancy in real estate transactions and disputes.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80',
    content_tr: `
      <h2>Gayrimenkul Hukuku Hizmetlerimiz</h2>
      <p>Gayrimenkul Hukuku alanında uzman ekibimizle, gayrimenkul alım-satım işlemleri ve uyuşmazlıklarında profesyonel hukuki danışmanlık hizmeti sunuyoruz. Her türlü gayrimenkul hukuku sorununda yanınızdayız.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>Gayrimenkul alım-satım sözleşmeleri</li>
        <li>Kira sözleşmeleri ve uyuşmazlıkları</li>
        <li>Kat mülkiyeti uyuşmazlıkları</li>
        <li>Tapu iptal ve tescil davaları</li>
        <li>İmar hukuku uyuşmazlıkları</li>
        <li>Kamulaştırma davaları</li>
        <li>Gayrimenkul değerleme işlemleri</li>
        <li>Site ve apartman yönetimi danışmanlığı</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>Gayrimenkul Hukuku alanındaki deneyimimiz ve uzman kadromuzla, müvekkillerimizin haklarını en iyi şekilde koruyoruz. Her vakayı detaylı inceliyor ve en uygun çözümü sunuyoruz.</p>

      <h3>Hizmet Anlayışımız</h3>
      <ul>
        <li>Kapsamlı hukuki due diligence</li>
        <li>Risk analizi ve yönetimi</li>
        <li>Proaktif hukuki danışmanlık</li>
        <li>Süreç yönetiminde şeffaflık</li>
        <li>Düzenli bilgilendirme ve raporlama</li>
      </ul>
    `,
    content_en: `
      <h2>Our Real Estate Law Services</h2>
      <p>With our expert team in Real Estate Law, we provide professional legal consultancy services in real estate transactions and disputes. We are with you in all kinds of real estate law issues.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Real estate purchase and sale contracts</li>
        <li>Lease agreements and disputes</li>
        <li>Condominium ownership disputes</li>
        <li>Title deed cancellation and registration cases</li>
        <li>Zoning law disputes</li>
        <li>Expropriation cases</li>
        <li>Real estate valuation procedures</li>
        <li>Site and building management consultancy</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience and expert staff in Real Estate Law, we protect our clients' rights in the best way possible. We examine each case in detail and provide the most appropriate solution.</p>

      <h3>Our Service Understanding</h3>
      <ul>
        <li>Comprehensive legal due diligence</li>
        <li>Risk analysis and management</li>
        <li>Proactive legal consultancy</li>
        <li>Transparency in process management</li>
        <li>Regular updates and reporting</li>
      </ul>
    `
  },
  {
    slug: 'vergi-hukuku',
    title_tr: 'Vergi Hukuku',
    title_en: 'Tax Law',
    icon: 'file-invoice-dollar',
    description_tr: 'Vergi uyuşmazlıkları ve danışmanlık hizmetlerinde uzman destek.',
    description_en: 'Expert support in tax disputes and consultancy services.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80',
    content_tr: `
      <h2>Vergi Hukuku Hizmetlerimiz</h2>
      <p>Vergi Hukuku alanında uzman ekibimizle, vergi uyuşmazlıkları ve danışmanlık hizmetlerinde profesyonel hukuki destek sağlıyoruz. Her türlü vergi hukuku sorununda yanınızdayız.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>Vergi uyuşmazlıkları ve davaları</li>
        <li>Vergi inceleme ve denetim süreçleri</li>
        <li>Vergi cezaları ve uzlaşma görüşmeleri</li>
        <li>Vergi planlaması ve danışmanlık</li>
        <li>KDV ve ÖTV uyuşmazlıkları</li>
        <li>Gümrük vergileri uyuşmazlıkları</li>
        <li>Uluslararası vergi hukuku danışmanlığı</li>
        <li>Transfer fiyatlandırması</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>Vergi Hukuku alanındaki deneyimimiz ve uzman kadromuzla, müvekkillerimizin haklarını en etkin şekilde koruyoruz. Her vakayı titizlikle inceliyor ve en uygun çözüm stratejisini geliştiriyoruz.</p>

      <h3>Çalışma Prensibimiz</h3>
      <ul>
        <li>Proaktif vergi planlaması</li>
        <li>Risk analizi ve yönetimi</li>
        <li>Süreç yönetiminde şeffaflık</li>
        <li>Düzenli bilgilendirme ve raporlama</li>
        <li>Güncel mevzuat takibi</li>
      </ul>
    `,
    content_en: `
      <h2>Our Tax Law Services</h2>
      <p>With our expert team in Tax Law, we provide professional legal support in tax disputes and consultancy services. We are with you in all kinds of tax law issues.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Tax disputes and litigation</li>
        <li>Tax examination and audit processes</li>
        <li>Tax penalties and settlement negotiations</li>
        <li>Tax planning and consultancy</li>
        <li>VAT and SCT disputes</li>
        <li>Customs tax disputes</li>
        <li>International tax law consultancy</li>
        <li>Transfer pricing</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience and expert staff in Tax Law, we protect our clients' rights most effectively. We carefully examine each case and develop the most appropriate solution strategy.</p>

      <h3>Our Working Principle</h3>
      <ul>
        <li>Proactive tax planning</li>
        <li>Risk analysis and management</li>
        <li>Transparency in process management</li>
        <li>Regular updates and reporting</li>
        <li>Current legislation tracking</li>
      </ul>
    `
  },
  {
    slug: 'idare-hukuku',
    title_tr: 'İdare Hukuku',
    title_en: 'Administrative Law',
    icon: 'landmark',
    description_tr: 'İdari işlem ve kararlara karşı hukuki destek ve danışmanlık.',
    description_en: 'Legal support and consultancy against administrative acts and decisions.',
    image: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80',
    content_tr: `
      <h2>İdare Hukuku Hizmetlerimiz</h2>
      <p>İdare Hukuku alanında uzman ekibimizle, idari işlem ve kararlara karşı hukuki destek ve danışmanlık hizmeti sunuyoruz. Kamu kurumları ile olan uyuşmazlıklarınızda yanınızdayız.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>İdari işlemlerin iptali davaları</li>
        <li>Tam yargı davaları</li>
        <li>Kamulaştırma davaları</li>
        <li>İmar hukuku uyuşmazlıkları</li>
        <li>Kamu ihale uyuşmazlıkları</li>
        <li>Memur hukuku ve disiplin soruşturmaları</li>
        <li>Vergi hukuku uyuşmazlıkları</li>
        <li>İdari para cezalarına itiraz</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>İdare Hukuku alanındaki deneyimimiz ve uzman kadromuzla, müvekkillerimizin haklarını en etkin şekilde savunuyoruz. Her dosyayı titizlikle inceliyor ve en uygun stratejiyi geliştiriyoruz.</p>

      <h3>Çalışma Yaklaşımımız</h3>
      <ul>
        <li>Kapsamlı hukuki analiz</li>
        <li>Etkin süreç yönetimi</li>
        <li>Düzenli bilgilendirme</li>
        <li>Alternatif çözüm yollarının değerlendirilmesi</li>
        <li>Uzman kadro ile destek</li>
      </ul>
    `,
    content_en: `
      <h2>Our Administrative Law Services</h2>
      <p>With our expert team in Administrative Law, we provide legal support and consultancy against administrative acts and decisions. We are with you in your disputes with public institutions.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Annulment of administrative acts</li>
        <li>Full remedy actions</li>
        <li>Expropriation cases</li>
        <li>Zoning law disputes</li>
        <li>Public procurement disputes</li>
        <li>Civil servant law and disciplinary investigations</li>
        <li>Tax law disputes</li>
        <li>Appeals against administrative fines</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience and expert staff in Administrative Law, we defend our clients' rights most effectively. We carefully examine each file and develop the most appropriate strategy.</p>

      <h3>Our Working Approach</h3>
      <ul>
        <li>Comprehensive legal analysis</li>
        <li>Effective process management</li>
        <li>Regular updates</li>
        <li>Evaluation of alternative solutions</li>
        <li>Support with expert staff</li>
      </ul>
    `
  },
  {
    slug: 'bilisim-hukuku',
    title_tr: 'Bilişim Hukuku',
    title_en: 'IT Law',
    icon: 'laptop',
    description_tr: 'Dijital dünyada hukuki haklarınızın korunması için uzman destek.',
    description_en: 'Expert support for protecting your legal rights in the digital world.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80',
    content_tr: `
      <h2>Bilişim Hukuku Hizmetlerimiz</h2>
      <p>Bilişim Hukuku alanında uzman ekibimizle, dijital dünyada karşılaşabileceğiniz her türlü hukuki sorunda yanınızdayız. Teknoloji ve internet alanındaki haklarınızı koruyoruz.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>Kişisel verilerin korunması (KVKK) danışmanlığı</li>
        <li>Siber suçlar ve bilişim suçları</li>
        <li>E-ticaret hukuku danışmanlığı</li>
        <li>Sosyal medya hukuku</li>
        <li>Domain ve marka uyuşmazlıkları</li>
        <li>Yazılım ve lisans sözleşmeleri</li>
        <li>İnternet sitesi yasal metinleri hazırlama</li>
        <li>Dijital haklar ve telif hukuku</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>Bilişim Hukuku alanındaki güncel bilgi ve deneyimimizle, dijital dünyadaki haklarınızı en iyi şekilde koruyoruz. Teknolojik gelişmeleri yakından takip ediyor ve hukuki çözümler sunuyoruz.</p>

      <h3>Çalışma Prensibimiz</h3>
      <ul>
        <li>Güncel teknoloji ve hukuk bilgisi</li>
        <li>Proaktif yaklaşım</li>
        <li>Hızlı çözüm üretme</li>
        <li>Sürekli iletişim</li>
        <li>Önleyici hukuki danışmanlık</li>
      </ul>
    `,
    content_en: `
      <h2>Our IT Law Services</h2>
      <p>With our expert team in IT Law, we are with you in any legal issues you may encounter in the digital world. We protect your rights in technology and internet areas.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Personal data protection consultancy</li>
        <li>Cybercrime and IT crimes</li>
        <li>E-commerce law consultancy</li>
        <li>Social media law</li>
        <li>Domain and trademark disputes</li>
        <li>Software and license agreements</li>
        <li>Website legal text preparation</li>
        <li>Digital rights and copyright law</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our current knowledge and experience in IT Law, we protect your rights in the digital world in the best way. We closely follow technological developments and provide legal solutions.</p>

      <h3>Our Working Principle</h3>
      <ul>
        <li>Up-to-date technology and legal knowledge</li>
        <li>Proactive approach</li>
        <li>Quick solution generation</li>
        <li>Continuous communication</li>
        <li>Preventive legal consultancy</li>
      </ul>
    `
  },
  {
    slug: 'yabancilar-hukuku',
    title_tr: 'Yabancılar Hukuku',
    title_en: 'Immigration Law',
    icon: 'passport',
    description_tr: 'Oturma izni, vatandaşlık ve yabancılar hukuku alanında profesyonel destek.',
    description_en: 'Professional support in residence permits, citizenship and foreigners rights.',
    image: 'https://images.unsplash.com/photo-1434123700504-d8cfba6a12c0?q=80',
    content_tr: `
      <h2>Yabancılar Hukuku Hizmetlerimiz</h2>
      <p>Yabancılar Hukuku alanında uzman ekibimizle, Türkiye'de yaşayan veya yaşamayı planlayan yabancılar için kapsamlı hukuki destek sağlıyoruz. Oturma izni, çalışma izni ve vatandaşlık başvurularında yanınızdayız.</p>
      
      <h3>Hizmet Alanlarımız</h3>
      <ul>
        <li>Oturma izni başvuruları ve danışmanlık</li>
        <li>Çalışma izni başvuruları</li>
        <li>Türk vatandaşlığı başvuruları</li>
        <li>Yatırımcı ve girişimci vizeleri</li>
        <li>Öğrenci vizeleri ve izinleri</li>
        <li>Sınır dışı işlemlerine karşı hukuki destek</li>
        <li>Uluslararası koruma başvuruları</li>
        <li>Vize ret kararlarına itiraz</li>
      </ul>

      <h3>Vatandaşlık Başvuru Süreçleri</h3>
      <ul>
        <li>İstisnai vatandaşlık başvuruları</li>
        <li>Yatırım yoluyla vatandaşlık</li>
        <li>Evlilik yoluyla vatandaşlık</li>
        <li>Genel vatandaşlığa geçiş</li>
        <li>Çifte vatandaşlık işlemleri</li>
      </ul>

      <h3>Oturma İzni Türleri</h3>
      <ul>
        <li>Kısa dönem oturma izni</li>
        <li>Uzun dönem oturma izni</li>
        <li>Aile ikamet izni</li>
        <li>Öğrenci ikamet izni</li>
        <li>Yatırımcı ikamet izni</li>
      </ul>

      <h3>Neden Biz?</h3>
      <p>Yabancılar Hukuku alanındaki deneyimimiz ve çok dilli ekibimizle, yabancı müvekkillerimize en iyi hizmeti sunuyoruz. Başvuru süreçlerini profesyonelce yönetiyor ve olumlu sonuç için çalışıyoruz.</p>

      <h3>Çalışma Prensibimiz</h3>
      <ul>
        <li>Çok dilli hizmet</li>
        <li>Hızlı ve etkin süreç yönetimi</li>
        <li>Düzenli bilgilendirme</li>
        <li>Kişiye özel çözümler</li>
        <li>7/24 destek</li>
      </ul>
    `,
    content_en: `
      <h2>Our Immigration Law Services</h2>
      <p>With our expert team in Immigration Law, we provide comprehensive legal support for foreigners living or planning to live in Turkey. We are with you in residence permit, work permit, and citizenship applications.</p>
      
      <h3>Service Areas</h3>
      <ul>
        <li>Residence permit applications and consultancy</li>
        <li>Work permit applications</li>
        <li>Turkish citizenship applications</li>
        <li>Investor and entrepreneur visas</li>
        <li>Student visas and permits</li>
        <li>Legal support against deportation procedures</li>
        <li>International protection applications</li>
        <li>Appeals against visa rejections</li>
      </ul>

      <h3>Citizenship Application Processes</h3>
      <ul>
        <li>Exceptional citizenship applications</li>
        <li>Citizenship by investment</li>
        <li>Citizenship through marriage</li>
        <li>General naturalization</li>
        <li>Dual citizenship procedures</li>
      </ul>

      <h3>Types of Residence Permits</h3>
      <ul>
        <li>Short-term residence permit</li>
        <li>Long-term residence permit</li>
        <li>Family residence permit</li>
        <li>Student residence permit</li>
        <li>Investor residence permit</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>With our experience in Immigration Law and multilingual team, we provide the best service to our foreign clients. We professionally manage application processes and work for positive results.</p>

      <h3>Our Working Principle</h3>
      <ul>
        <li>Multilingual service</li>
        <li>Fast and effective process management</li>
        <li>Regular updates</li>
        <li>Personalized solutions</li>
        <li>24/7 support</li>
      </ul>
    `
  }
]; 