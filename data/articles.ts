interface Article {
  slug_tr: string;
  slug_en: string;
  title_tr: string;
  title_en: string;
  content_tr: string;
  content_en: string;
  date: string;
  image: string;
}

export const articles: Article[] = [
  {
    slug_tr: 'ceza-hukukunda-uzlasma',
    slug_en: 'mediation-in-criminal-law',
    title_tr: 'Ceza Hukukunda Uzlaşma',
    title_en: 'Mediation in Criminal Law',
    date: '2024-03-20',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80',
    content_tr: `
      <h2>Ceza Hukukunda Uzlaşma Nedir?</h2>
      <p>Uzlaşma, belirli suçlarda mağdur ile şüpheli veya sanık arasında anlaşma sağlanması durumunda, ceza davasının sonlandırılmasını sağlayan alternatif bir çözüm yoludur.</p>
      
      <h3>Uzlaşmaya Tabi Suçlar</h3>
      <ul>
        <li>Kasten yaralama (TCK 86/2)</li>
        <li>Taksirle yaralama (TCK 89)</li>
        <li>Konut dokunulmazlığının ihlali (TCK 116)</li>
        <li>Tehdit (TCK 106/1)</li>
        <li>Hırsızlık (TCK 141)</li>
        <li>Dolandırıcılık (TCK 157)</li>
      </ul>

      <h3>Uzlaşma Süreci</h3>
      <p>Uzlaşma süreci şu aşamalardan oluşur:</p>
      <ul>
        <li>Uzlaşma teklifinin yapılması</li>
        <li>Tarafların kabulü</li>
        <li>Uzlaştırmacı atanması</li>
        <li>Görüşmelerin yapılması</li>
        <li>Anlaşma sağlanması veya sağlanamaması</li>
      </ul>

      <h3>Uzlaşmanın Faydaları</h3>
      <ul>
        <li>Dava sürecinin kısalması</li>
        <li>Mağdurun zararının hızlı giderilmesi</li>
        <li>Toplumsal barışa katkı</li>
        <li>Yargı sisteminin iş yükünün azalması</li>
      </ul>
    `,
    content_en: `
      <h2>What is Mediation in Criminal Law?</h2>
      <p>Mediation is an alternative resolution method that allows for the termination of criminal cases when an agreement is reached between the victim and the suspect or defendant in certain crimes.</p>
      
      <h3>Crimes Subject to Mediation</h3>
      <ul>
        <li>Intentional injury (TPC 86/2)</li>
        <li>Negligent injury (TPC 89)</li>
        <li>Violation of dwelling immunity (TPC 116)</li>
        <li>Threat (TPC 106/1)</li>
        <li>Theft (TPC 141)</li>
        <li>Fraud (TPC 157)</li>
      </ul>

      <h3>Mediation Process</h3>
      <p>The mediation process consists of the following stages:</p>
      <ul>
        <li>Making the mediation offer</li>
        <li>Acceptance by parties</li>
        <li>Appointment of mediator</li>
        <li>Conducting meetings</li>
        <li>Reaching or failing to reach an agreement</li>
      </ul>

      <h3>Benefits of Mediation</h3>
      <ul>
        <li>Shorter case duration</li>
        <li>Quick compensation for the victim</li>
        <li>Contribution to social peace</li>
        <li>Reduced workload on the judicial system</li>
      </ul>
    `
  },
  {
    slug_tr: 'bosanma-davalarinda-nafaka',
    slug_en: 'alimony-in-divorce-cases',
    title_tr: 'Boşanma Davalarında Nafaka',
    title_en: 'Alimony in Divorce Cases',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80',
    content_tr: `
      <h2>Boşanma Davalarında Nafaka Türleri</h2>
      <p>Türk Medeni Kanunu'na göre boşanma davalarında üç tür nafaka söz konusudur:</p>
      <ul>
        <li>Tedbir Nafakası</li>
        <li>İştirak Nafakası</li>
        <li>Yoksulluk Nafakası</li>
      </ul>

      <h3>Tedbir Nafakası</h3>
      <p>Boşanma davası açıldığında, dava sonuçlanıncaya kadar geçecek süre için hâkim tarafından belirlenen nafakadır. Eşlerin ekonomik durumları ve ihtiyaçları göz önünde bulundurularak belirlenir.</p>

      <h3>İştirak Nafakası</h3>
      <p>Çocukların bakımı ve eğitimi için ödenen nafakadır. Velayeti olmayan ebeveyn tarafından ödenir ve çocuğun ihtiyaçları doğrultusunda belirlenir.</p>

      <h3>Yoksulluk Nafakası</h3>
      <p>Boşanma sonrasında yoksulluğa düşecek olan tarafa, diğer tarafın mali gücü oranında ödediği nafakadır. Süresiz olabilir veya belirli bir süre için belirlenebilir.</p>
    `,
    content_en: `
      <h2>Types of Alimony in Divorce Cases</h2>
      <p>According to Turkish Civil Law, there are three types of alimony in divorce cases:</p>
      <ul>
        <li>Temporary Alimony</li>
        <li>Child Support</li>
        <li>Poverty Alimony</li>
      </ul>

      <h3>Temporary Alimony</h3>
      <p>This is the alimony determined by the judge for the period until the divorce case is concluded. It is determined by considering the economic conditions and needs of the spouses.</p>

      <h3>Child Support</h3>
      <p>This is the alimony paid for the care and education of children. It is paid by the parent who does not have custody and is determined according to the needs of the child.</p>

      <h3>Poverty Alimony</h3>
      <p>This is the alimony paid by one party to the other who will fall into poverty after divorce, in proportion to their financial power. It can be indefinite or determined for a specific period.</p>
    `
  },
  {
    slug_tr: 'is-kazasi-tazminati',
    slug_en: 'work-accident-compensation',
    title_tr: 'İş Kazası Tazminatı',
    title_en: 'Work Accident Compensation',
    date: '2024-03-10',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80',
    content_tr: `
      <h2>İş Kazası Tazminatı Nedir?</h2>
      <p>İş kazası tazminatı, iş yerinde meydana gelen kazalar sonucu işçinin uğradığı maddi ve manevi zararların karşılanması için işveren tarafından ödenen tazminattır.</p>

      <h3>Tazminat Türleri</h3>
      <ul>
        <li>Maddi Tazminat</li>
        <li>Manevi Tazminat</li>
        <li>Destekten Yoksun Kalma Tazminatı</li>
      </ul>

      <h3>Başvuru Süreci</h3>
      <p>İş kazası meydana geldiğinde yapılması gerekenler:</p>
      <ul>
        <li>Kazanın derhal işverene bildirilmesi</li>
        <li>Sağlık kuruluşuna başvurulması</li>
        <li>SGK'ya bildirim yapılması</li>
        <li>Hukuki sürecin başlatılması</li>
      </ul>
    `,
    content_en: `
      <h2>What is Work Accident Compensation?</h2>
      <p>Work accident compensation is the compensation paid by the employer for material and moral damages suffered by the worker as a result of accidents at the workplace.</p>

      <h3>Types of Compensation</h3>
      <ul>
        <li>Material Compensation</li>
        <li>Moral Compensation</li>
        <li>Loss of Support Compensation</li>
      </ul>

      <h3>Application Process</h3>
      <p>What needs to be done when a work accident occurs:</p>
      <ul>
        <li>Immediate notification to the employer</li>
        <li>Application to healthcare facility</li>
        <li>Notification to Social Security Institution</li>
        <li>Initiation of legal process</li>
      </ul>
    `
  }
]; 