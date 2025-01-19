export interface Article {
  slug: string;
  title_tr: string;
  title_en: string;
  excerpt_tr: string;
  excerpt_en: string;
  content_tr: string;
  content_en: string;
  date: string;
  image: string;
  author: string;
}

export const articles: Article[] = [
  {
    slug: 'bosanma-davalarinda-nafaka',
    title_tr: 'Boşanma Davalarında Nafaka',
    title_en: 'Alimony in Divorce Cases',
    excerpt_tr: 'Boşanma davalarında nafaka türleri, hesaplanması ve güncel yargı kararları hakkında detaylı bilgi.',
    excerpt_en: 'Detailed information about types of alimony in divorce cases, calculation methods, and current judicial decisions.',
    content_tr: `
      <h2>Nafaka Nedir?</h2>
      <p>Nafaka, aile hukukunda eşlerden birinin diğerine veya çocuklarına yapmakla yükümlü olduğu maddi yardımdır. Türk Medeni Kanunu'na göre nafaka çeşitli türlerde olabilir:</p>
      
      <ul>
        <li>Tedbir Nafakası</li>
        <li>İştirak Nafakası</li>
        <li>Yoksulluk Nafakası</li>
      </ul>

      <h2>Nafaka Türleri</h2>
      
      <h3>1. Tedbir Nafakası</h3>
      <p>Boşanma davası açıldıktan sonra, dava sonuçlanıncaya kadar geçecek süre için hâkim tarafından belirlenen nafaka türüdür. Bu nafaka, ekonomik açıdan zayıf olan eşin ve varsa çocukların geçimini sağlamak amacıyla verilir.</p>

      <h3>2. İştirak Nafakası</h3>
      <p>Çocukların bakımı ve eğitimi için ödenen nafaka türüdür. Velayet kendisine verilmeyen eşin ödemekle yükümlü olduğu bu nafaka, çocuğun eğitimi tamamlanıncaya kadar devam eder.</p>

      <h3>3. Yoksulluk Nafakası</h3>
      <p>Boşanma sonucunda yoksulluğa düşecek olan tarafa, diğer tarafın mali gücü oranında ödediği nafakadır. Süresiz olarak verilebileceği gibi, belirli bir süre için de belirlenebilir.</p>

      <h2>Nafaka Miktarının Belirlenmesi</h2>
      <p>Nafaka miktarı belirlenirken şu kriterler göz önünde bulundurulur:</p>
      
      <ul>
        <li>Tarafların ekonomik durumu</li>
        <li>Çalışma güçleri</li>
        <li>Yaşam standartları</li>
        <li>Sosyal durumları</li>
      </ul>

      <blockquote>
        Yargıtay'ın yerleşik içtihatlarına göre, nafaka miktarı belirlenirken hem nafaka alacaklısının ihtiyaçları hem de nafaka yükümlüsünün mali gücü dikkate alınmalıdır.
      </blockquote>
    `,
    content_en: `
      <h2>What is Alimony?</h2>
      <p>Alimony is the financial support that one spouse is obligated to provide to the other spouse or children in family law. According to Turkish Civil Law, there are various types of alimony:</p>
      
      <ul>
        <li>Temporary Alimony</li>
        <li>Child Support</li>
        <li>Poverty Alimony</li>
      </ul>

      <h2>Types of Alimony</h2>
      
      <h3>1. Temporary Alimony</h3>
      <p>This is the type of alimony determined by the judge for the period from the filing of the divorce case until its conclusion. This alimony is provided to support the economically weaker spouse and any children during this period.</p>

      <h3>2. Child Support</h3>
      <p>This is the type of alimony paid for the care and education of children. This alimony, which the spouse who is not granted custody is obligated to pay, continues until the child's education is completed.</p>

      <h3>3. Poverty Alimony</h3>
      <p>This is the alimony paid by one party to the other who would fall into poverty as a result of divorce, in proportion to their financial capability. It can be granted indefinitely or for a specific period.</p>

      <h2>Determining the Amount of Alimony</h2>
      <p>The following criteria are considered when determining the amount of alimony:</p>
      
      <ul>
        <li>Economic status of the parties</li>
        <li>Working capacity</li>
        <li>Living standards</li>
        <li>Social status</li>
      </ul>

      <blockquote>
        According to the established jurisprudence of the Supreme Court, both the needs of the alimony creditor and the financial capacity of the alimony debtor must be taken into account when determining the amount of alimony.
      </blockquote>
    `,
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80',
    author: 'Av. Eren Can Gülkan'
  },
  {
    slug: 'is-kazasi-tazminati',
    title_tr: 'İş Kazası Tazminatı',
    title_en: 'Work Accident Compensation',
    excerpt_tr: 'İş kazası durumunda işçinin hakları, tazminat hesaplaması ve başvuru süreçleri hakkında bilgilendirme.',
    excerpt_en: 'Information about worker\'s rights in case of work accidents, compensation calculation, and application processes.',
    content_tr: `
      <h2>İş Kazası Nedir?</h2>
      <p>İş kazası, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu'nun 13. maddesinde tanımlanmıştır. Buna göre iş kazası:</p>
      
      <ul>
        <li>İşyerinde bulunduğu sırada,</li>
        <li>İşveren tarafından yürütülmekte olan iş nedeniyle,</li>
        <li>Görevli olarak işyeri dışında başka bir yere gönderilmesi nedeniyle asıl işini yapmaksızın geçen zamanlarda,</li>
        <li>Emziren kadın sigortalının, iş mevzuatı gereğince çocuğuna süt vermek için ayrılan zamanlarda,</li>
        <li>İşverence sağlanan bir taşıtla işin yapıldığı yere gidiş gelişi sırasında meydana gelen kazalardır.</li>
      </ul>

      <h2>İş Kazası Sonrası Haklar</h2>
      
      <h3>1. Geçici İş Göremezlik Ödeneği</h3>
      <p>İş kazası geçiren sigortalıya, tedavi süresince çalışamadığı her gün için SGK tarafından geçici iş göremezlik ödeneği verilir.</p>

      <h3>2. Sürekli İş Göremezlik Geliri</h3>
      <p>İş kazası sonucu meslekte kazanma gücünü en az %10 oranında kaybeden sigortalıya, sürekli iş göremezlik geliri bağlanır.</p>

      <h3>3. Maddi ve Manevi Tazminat</h3>
      <p>İş kazası geçiren işçi, işverene karşı maddi ve manevi tazminat davası açabilir. Bu tazminatlar şunları kapsar:</p>
      
      <ul>
        <li>Tedavi giderleri</li>
        <li>Kazanç kaybı</li>
        <li>Çalışma gücünün azalması veya yitirilmesi nedeniyle doğan kayıplar</li>
        <li>Ekonomik geleceğin sarsılmasından doğan kayıplar</li>
      </ul>

      <blockquote>
        İş kazası tazminatı davalarında zamanaşımı süresi, kaza tarihinden itibaren 10 yıldır. Ancak, ceza gerektiren bir fiil sonucu meydana gelmişse, ceza zamanaşımı süresi uygulanır.
      </blockquote>
    `,
    content_en: `
      <h2>What is a Work Accident?</h2>
      <p>A work accident is defined in Article 13 of Social Insurance and General Health Insurance Law No. 5510. According to this, a work accident occurs:</p>
      
      <ul>
        <li>While at the workplace,</li>
        <li>Due to work being carried out by the employer,</li>
        <li>During times spent without performing their main work due to being sent to another location on duty,</li>
        <li>During times allocated for breastfeeding mothers to nurse their children as per labor legislation,</li>
        <li>During commute to and from the workplace in transportation provided by the employer.</li>
      </ul>

      <h2>Rights After a Work Accident</h2>
      
      <h3>1. Temporary Incapacity Allowance</h3>
      <p>The insured person who has had a work accident receives temporary incapacity allowance from SSI for each day they cannot work during treatment.</p>

      <h3>2. Permanent Incapacity Income</h3>
      <p>Permanent incapacity income is granted to the insured person who loses at least 10% of their professional earning capacity as a result of a work accident.</p>

      <h3>3. Material and Moral Compensation</h3>
      <p>A worker who has had a work accident can file a material and moral compensation lawsuit against the employer. These compensations cover:</p>
      
      <ul>
        <li>Treatment expenses</li>
        <li>Loss of earnings</li>
        <li>Losses due to reduction or loss of working capacity</li>
        <li>Losses arising from the disruption of economic future</li>
      </ul>

      <blockquote>
        The statute of limitations in work accident compensation cases is 10 years from the date of the accident. However, if it occurred as a result of a criminal act, the criminal statute of limitations applies.
      </blockquote>
    `,
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80',
    author: 'Av. Eren Can Gülkan'
  },
  {
    slug: 'ceza-hukukunda-uzlasma',
    title_tr: 'Ceza Hukukunda Uzlaşma',
    title_en: 'Mediation in Criminal Law',
    excerpt_tr: 'Ceza hukukunda uzlaşma kurumu, kapsamı, süreci ve avantajları hakkında detaylı bilgilendirme.',
    excerpt_en: 'Detailed information about the institution of mediation in criminal law, its scope, process, and advantages.',
    content_tr: `
      <h2>Uzlaşma Nedir?</h2>
      <p>Uzlaşma, Ceza Muhakemesi Kanunu'nda düzenlenen alternatif bir uyuşmazlık çözüm yoludur. Bu yöntem ile bazı suçlarda, mağdur ile şüpheli veya sanık arasında anlaşma sağlanarak, yargılama yapılmadan uyuşmazlığın çözülmesi amaçlanır.</p>

      <h2>Uzlaşma Kapsamındaki Suçlar</h2>
      <p>Aşağıdaki suçlarda uzlaşma yoluna gidilebilir:</p>
      
      <ul>
        <li>Kasten yaralama (TCK 86/2)</li>
        <li>Taksirle yaralama (TCK 89)</li>
        <li>Konut dokunulmazlığının ihlali (TCK 116)</li>
        <li>Çocuğun kaçırılması ve alıkonulması (TCK 234)</li>
        <li>Ticari sır, bankacılık sırrı veya müşteri sırrı niteliğindeki bilgi veya belgelerin açıklanması (TCK 239)</li>
      </ul>

      <h2>Uzlaşma Süreci</h2>
      
      <h3>1. Uzlaşma Teklifi</h3>
      <p>Cumhuriyet savcısı veya mahkeme tarafından taraflara uzlaşma teklifinde bulunulur. Taraflar teklifi kabul ederse süreç başlar.</p>

      <h3>2. Uzlaştırmacı Görevlendirilmesi</h3>
      <p>Uzlaştırmacı olarak bir avukat veya hukuk öğrenimi görmüş bir kişi görevlendirilir.</p>

      <h3>3. Görüşmeler</h3>
      <p>Uzlaştırmacı, taraflarla ayrı ayrı veya birlikte görüşmeler yaparak anlaşma zemini arar.</p>

      <h2>Uzlaşmanın Avantajları</h2>
      <p>Uzlaşma kurumunun sağladığı faydalar:</p>
      
      <ul>
        <li>Dava sürecinden daha hızlı sonuç alınması</li>
        <li>Mağdurun zararının hızlı bir şekilde giderilmesi</li>
        <li>Şüpheli/sanık açısından ceza almama avantajı</li>
        <li>Yargı sisteminin iş yükünün azalması</li>
      </ul>

      <blockquote>
        Uzlaşma, hem mağdurun zararının giderilmesi hem de failin topluma kazandırılması açısından önemli bir kurumdur. Onarıcı adalet anlayışının bir yansıması olan bu kurum, ceza adaleti sistemimizde giderek daha fazla önem kazanmaktadır.
      </blockquote>
    `,
    content_en: `
      <h2>What is Mediation?</h2>
      <p>Mediation is an alternative dispute resolution method regulated in the Criminal Procedure Code. This method aims to resolve disputes without trial by reaching an agreement between the victim and the suspect or defendant in certain crimes.</p>

      <h2>Crimes Within the Scope of Mediation</h2>
      <p>Mediation can be pursued in the following crimes:</p>
      
      <ul>
        <li>Intentional injury (TPC 86/2)</li>
        <li>Negligent injury (TPC 89)</li>
        <li>Violation of dwelling immunity (TPC 116)</li>
        <li>Kidnapping and detention of a child (TPC 234)</li>
        <li>Disclosure of information or documents qualifying as trade secrets, banking secrets, or customer secrets (TPC 239)</li>
      </ul>

      <h2>Mediation Process</h2>
      
      <h3>1. Mediation Offer</h3>
      <p>The public prosecutor or court makes a mediation offer to the parties. If the parties accept the offer, the process begins.</p>

      <h3>2. Appointment of Mediator</h3>
      <p>A lawyer or person with legal education is appointed as mediator.</p>

      <h3>3. Meetings</h3>
      <p>The mediator seeks common ground through separate or joint meetings with the parties.</p>

      <h2>Advantages of Mediation</h2>
      <p>Benefits provided by the institution of mediation:</p>
      
      <ul>
        <li>Faster results compared to the trial process</li>
        <li>Quick compensation of the victim's damages</li>
        <li>Advantage of avoiding punishment for the suspect/defendant</li>
        <li>Reduction in the workload of the judicial system</li>
      </ul>

      <blockquote>
        Mediation is an important institution both in terms of compensating the victim's damages and reintegrating the perpetrator into society. This institution, which is a reflection of restorative justice understanding, is gaining increasing importance in our criminal justice system.
      </blockquote>
    `,
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80',
    author: 'Av. Eren Can Gülkan'
  }
]; 