import { useLanguage } from "@/hooks/use-language";

export interface EducationModelsType {
  imageUrl: string;
  englishTitle: string;
  turkishTitle: string;
  englishChildren: React.ReactNode;
  turkishChildren: React.ReactNode;
  englishDescription: string;
  turkishDescription: string;
}

export interface EducationModelType {
  location: string;
  phoneNumber: string;
  email: string;
}

export interface GalleryImagesType {
  imageUrl: string;
}

export const EducationModels = [
  {
    imageUrl:
      "https://utfs.io/f/a0394c4a-6b39-4093-84e5-e3bbfa21c6a5-705kdz.jpg",
    englishTitle: "Authentic Education Model",
    turkishTitle: "Otantik Eğitim Modeli",
    englishChildren: (
      <p>
        AKD Kids is a Markalar Birligi organization. Institutions affiliated
        with Markalar Birligi are the first and only pre-school education
        institutions in Turkey that use the European Language Portfolio.
        Adopting the eclectic approach, it exhibits a unique model intertwined
        with Bilingual Education.
      </p>
    ),
    turkishChildren: (
      <p>
        Bu eğitim modeli ile çocuklar bireysel olarak kendi gelişim
        özelliklerine göre eğitim almaktadır. AKD Kids bir Markalar Birliği
        kuruluşudur. Markalar Birliğine bağlı olan kurumlar Türkiye’ de Avrupa
        Dil Portfolyosunu ilk ve tek kullanan okul öncesi eğitim kurumlarıdır.
        Eklektik yaklaşımı ele alarak Bilingual Eğitimle iç içe özgün bir model
        sergilemektedir.
      </p>
    ),
    englishDescription:
      "AKD Kids, as a Markalar Birligi institution, pioneers pre-school education in Turkey by implementing the European Language Portfolio. Our approach is eclectic, blending seamlessly with Bilingual Education to offer a distinctive and unparalleled educational model.",
    turkishDescription:
      "Bir Markalar Birliği kurumu olarak AKD Kids, Avrupa Dil Portföyünü uygulayarak Türkiye'de okul öncesi eğitime öncülük etmektedir. Yaklaşımımız eklektiktir, farklı ve benzersiz bir eğitim modeli sunmak için Çift Dilli Eğitim ile sorunsuz bir şekilde harmanlanır.",
  },
  {
    imageUrl:
      "https://utfs.io/f/4615aeda-944b-4cb2-baac-26336f438648-705kdy.jpg",
    englishTitle: "Features Of Our Program",
    turkishTitle: "Programımızın Özellikleri",
    englishChildren: (
      <p>
        Our AKD Kids authentic education program • Is child-based. • Connects
        nature and the child. • Views English as not a branch class but a part
        of the child&apos;s life. • Is science-based. • Raises creative
        children. • Supports the development of social skills by providing
        social environments with large group activities. • Views the family as a
        part of education. • Is based on individual differences and needs. •
        Supports children&apos;s self-confidence with a carefully planned
        system. • Aims to raise self-confident, creative, and curious
        individuals. • Provides the opportunity for each child to pursue their
        interests. • Views the teacher as a guide. • With the respect model,
        develops respect for the community and the universe in the child. •
        Prepares the child&apos;s body, mind, and spirit as a whole for primary
        school classes and life. AKD Kids Program, a program that does not lag
        behind the times while creating a spiral, partnership-aware education,
        and prevents children from being &quot;left behind&quot; or &quot;pushed
        forward&quot; by focusing on the most successful learning skill of the
        child.
      </p>
    ),
    turkishChildren: (
      <p>
        • Çocuk temellidir. • Doğa ve çocuğu birbirine bağlar. • İngilizce
        dersini bir branş dersi olarak değil, çocuğun hayatının bir parçasıdır
        olarak görür. • Bilim temellidir. • Yaratıcı çocuklar yetiştirir. •
        Büyük grup etkinlikleri ile sosyal ortamlar sağlayarak sosyal
        becerilerin gelişimini destekler. • Aileyi eğitimin bir parçası olarak
        görür. • Bireysel farklılıkları ve ihtiyaçları esas alır. • Özenle
        planlanmış bir sistem ile çocukların öz güvenlerini destekler. • Kendine
        güvenen, yaratıcı ve meraklı bireyler yetiştirmeyi hedefler. •
        Bireyselliği teşvik eder. • Her çocuğun kendi ilgi alanlarını takip
        etmesine fırsat sağlar. • Öğretmenleri rehber konumunda görür. • Meraklı
        zihinler ve bağımsız düşünürler yaratmayı hedefler. • Saygı modeli ile
        çocukta topluluğa ve evrene karşı saygı geliştirilir. • Çocuğun
        bedenini, zihnini ve ruhunu bir bütün olarak ilköğretim sınıflarına ve
        hayata hazırlar. Çağın gerisinde kalmayan, sarmal, ortaklık bilinci
        yaratan, çocukların “geride bırakılması” ya da “ileri itilmesini”
        engelleyen bir program olan AKD Kids Program’ ı çocuğun en başarılı
        öğrenme becerisine odaklanır.
      </p>
    ),
    englishDescription:
      "Our AKD Kids education program: Child-based, nature-connected, English as integral, science-based, fostering creativity, social skill development, family involvement, tailored to individual needs, promoting self-confidence, nurturing curiosity, guided learning, fostering respect, holistic preparation for school and life. AKD Kids Program ensures inclusive, forward-looking education, prioritizing each child's learning success.",
    turkishDescription:
      "AKD Kids eğitim programımız: Çocuk temelli, doğayla bağlantılı, İngilizceyi bütünleştiren, bilim temelli, yaratıcılığı teşvik eden, sosyal beceri gelişimi, aile katılımı, bireysel ihtiyaçlara göre uyarlanmış, özgüveni teşvik eden, merakı besleyen, rehberli öğrenme, saygıyı teşvik eden, okula ve hayata bütünsel hazırlık. AKD Çocuk Programı, her çocuğun öğrenme başarısına öncelik vererek kapsayıcı, ileriye dönük bir eğitim sağlar.",
  },
  {
    imageUrl:
      "https://utfs.io/f/50731d7b-3225-474a-b3bd-96018b9401d2-705kdx.jpg",
    englishTitle: "Our Collaboration",
    turkishTitle: "İşbirliğimiz",
    englishChildren: (
      <p>
        In each of our institutions, we work together with our children to
        discover a country, examine a work of art, and meet a scientist every
        month. Thus, by supporting the creative thinking skills of our children,
        who are born scientists, we guide them to meet different cultures,
        establish hypotheses, and acquire mathematical thinking skills.
      </p>
    ),
    turkishChildren: (
      <p>
        {" "}
        Her kurumumuzda çocuklarımızla birlikte ortak bir çalışma yürüterek her
        ay bir ülkeyi keşfediyor, bir sanat eseri inceliyor, bir bilim insanını
        tanıyoruz. Böylece doğuştan bir bilim insanı olan çocuklarımızın
        yaratıcı düşünme becerilerini destekleyerek, farklı kültürlerle
        tanışmalarına, hipotez kurmalarına, matematiksel düşünme becerileri
        kazanmalarına rehberlik ediyoruz.
      </p>
    ),
    englishDescription:
      "At AKD Kids, English is integral to our full-time education program. Tailored to our institution, our foreign language curriculum, led by expert English-speaking staff, immerses children in English from a young age. Customized workbooks, aligned with age groups, meet European educational standards exclusively for our students.",
    turkishDescription:
      "AKD Kids'te İngilizce, tam zamanlı eğitim programımızın ayrılmaz bir parçasıdır. Kurumumuza özel olarak hazırlanan yabancı dil müfredatımız, İngilizce konuşan uzman personel tarafından yönetilmekte ve çocukları küçük yaşlardan itibaren İngilizceye alıştırmaktadır. Yaş gruplarına göre uyarlanmış özel çalışma kitapları, öğrencilerimiz için özel olarak Avrupa eğitim standartlarını karşılamaktadır.",
  },
  {
    imageUrl:
      "https://utfs.io/f/02a902b3-e486-4a27-b193-3bdbdf7108ed-705kdw.jpg",
    englishTitle: "Our Foreign Language Education",
    turkishTitle: "Çift Dil, Çift Öğretmen",
    englishChildren: (
      <p>
        In our AKD Kids institutions, English is included in the full-time
        education program. The program is specific to our institutions and is a
        foreign language education program prepared with our expert staff whose
        native language is English. Children learn English as a mother language,
        realizing that they need to speak a different language to communicate
        with their teacher. Our workbooks, which are designed in accordance with
        the age groups within our language education, are designed only for our
        institutions and have been created with an educational approach that
        meets European standards.
      </p>
    ),
    turkishChildren: (
      <p>
        AKD Kids kurumlarımızda İngilizce tam gün olarak eğitim programının
        içerisinde yer alır. Program kurumlarımıza özgü olup anadili İngilizce
        olan uzman kadromuz ile hazırlanmış bir yabancı dil eğitim programıdır.
        Çocuklar günlük yaşamlarında yer alan İngilizceyi, öğretmenleriyle
        iletişime geçmek için farklı bir dilde konuşmaları gerektiğini fark
        ederek bir anadil olarak öğrenirler. Dil eğitimimiz bünyesinde yer alan
        yaş gruplarına uygun olarak tasarlanmış çalışma kitaplarımız yalnızca
        kurumlarımız için tasarlanmış olup Avrupa standartlarında bir eğitim
        anlayışıyla oluşturulmuştur.
      </p>
    ),
    englishDescription:
      "The European Language Portfolio (ELP) serves as a personal record for language learning and self-assessment. Registered under selected institutions with Council of Europe approval, our active ELP is listed in the European Council database (2012.R0006), endorsed by American Culture. As the sole Turkish organization with Council of Europe-approved portfolios, American Culture has embedded ELP principles in its curriculum since 2004, aiding teachers in guiding our children through ELP initiation and evaluation.",
    turkishDescription:
      "Avrupa Dil Portfolyosu (ELP), dil öğrenimi ve öz değerlendirme için kişisel bir kayıt görevi görür. Avrupa Konseyi onaylı seçilmiş kurumlar altında kayıtlı olan aktif ELP'miz, Amerikan Kültür tarafından onaylanan Avrupa Konseyi veritabanında (2012.R0006) listelenmiştir. Avrupa Konseyi onaylı portfolyolara sahip tek Türk kuruluşu olan Amerikan Kültür, 2004 yılından bu yana ELP ilkelerini müfredatına yerleştirmiş ve öğretmenlere ELP başlatma ve değerlendirme yoluyla çocuklarımıza rehberlik etmelerinde yardımcı olmuştur.",
  },
  {
    imageUrl:
      "https://utfs.io/f/266f07c3-2f8a-47be-8f79-5a4d49d85116-705kdv.jpg",
    englishTitle: "European Language Portfolio",
    turkishTitle: "Avrupa Dil Portföyü",
    englishChildren: (
      <p>
        The European Language Portfolio (ELP), in essence, is a personal file
        where individuals can follow their language learning processes and
        evaluate themselves. ELP is registered in the name of selected
        institution with the approval of the Council of Europe. The active ELP
        we use in our institutions is registered in the European Council
        database with the number 2012.R0006 on behalf of American Culture.
        American Culture is the only organization in Turkey that has a portfolio
        approved by the Council of Europe. American Culture is an institution
        that has established the principles of the European Language Portfolio
        in its courses and pre-school education institutions since 2004 and has
        been able to integrate it into its foreign language education.
        Accordingly, teachers guide our children during and after the initiation
        and evaluation of the European Language Portfolio.
      </p>
    ),
    turkishChildren: (
      <p>
        {" "}
        Avrupa Dil Portfolyosu, özünde bireylerin dil öğrenim süreçlerini takip
        edip kendilerini değerlendirebilecekleri kişisel bir dokümandır. Avrupa
        Konseyi onayında seçilmiş kurumlar adına kayıtlıdır. Amerikanca Kültür
        adına 2012.R0006 numarası ile Avrupa Konseyi veri tabanında kayıtlıdır.
        Amerikanca Kültür, Türkiye’de kendi alanında kendi adına Avrupa Konseyi
        tarafından onaylanmış portfolyoya sahip olan tek kuruluştur. Amerikanca
        Kültür, 2004 yılından beri Avrupa Dil Portfolyosu’nun mantığını
        kurslarında ve okul öncesi eğitim kurumlarında oturtmuş ve yabancı dil
        eğitimlerine entegre edebilmiş bir kurumdur. Öğretmenler, çocuklarımıza
        Avrupa Dil Portfolyosu’nu değerlendirme aşamasında ve sonrasında
        rehberlik etmektedirler.
      </p>
    ),
    englishDescription:
      "We view children's education as inseparable from family involvement. Thus, we craft monthly bulletins in both English and Turkish, curated by our experts for parents. These bulletins feature comprehensive programs for children, including monthly, weekly, and daily activities, music lessons, QR codes, English vocabulary, family-oriented activities, and educational recommendations for both parents and children.",
    turkishDescription:
      "Çocuk eğitiminin aile katılımından ayrılamayacağını düşünüyoruz. Bu nedenle, uzmanlarımız tarafından ebeveynler için hazırlanan aylık bültenleri hem İngilizce hem de Türkçe olarak hazırlıyoruz. Bu bültenlerde aylık, haftalık ve günlük aktiviteler, müzik dersleri, QR kodlar, İngilizce kelime dağarcığı, aile odaklı aktiviteler ve hem ebeveynler hem de çocuklar için eğitim önerileri gibi çocuklara yönelik kapsamlı programlar yer alıyor.",
  },
  {
    imageUrl:
      "https://utfs.io/f/11f0f29e-8e6d-4c38-aa3a-cf3bcffed192-705kdu.jpg",
    englishTitle: "Our Family Newsletter",
    turkishTitle: "Aile Katılımı",
    engllishChildren: (
      <p>
        We cannot think of children independent of family education on this path
        we proceed with the understanding that education as a whole. For this
        reason, we prepare two bulletins, one in English and one in Turkish,
        with our experts for our parents every month. In this bulletin, there
        are monthly, weekly and daily programs for children, the music they
        learn and QR codes, the English words we learn, examples of activities
        that can be done with the family in parallel with the school, and family
        and child education recommendations.
      </p>
    ),
    turkishChildren: (
      <p>
        Eğitim bir bütündür anlayışıyla ilerlediğimiz bu yolda aile eğitiminden
        bağımsız çocuklar düşünemiyoruz. Bu sebeple her ay velilerimiz için
        uzmanlarımız ile İngilizce ve Türkçe olmak üzere iki bülten
        hazırlıyoruz. Bu bültende çocukların aylık, haftalık ve günlük
        programları, öğrendikleri müzikler ve QR kodları, öğrenimini
        gerçekleştirdiğimiz İngilizce kelimeler, aile ile yapılabilecek okul ile
        paralel olarak ilerleyen etkinlik örnekleri ve aile ve çocuk eğitim
        tavsiyeleri yer almaktadır.
      </p>
    ),
    englishDescription:
      "We integrate family education into our holistic approach to child development. Monthly bulletins, in English and Turkish, curated by our experts, provide comprehensive programs, including music lessons, English vocabulary, and family activities, fostering a collaborative learning environment between home and school.",
    turkishDescription:
      "Aile eğitimini çocuk gelişimine yönelik bütünsel yaklaşımımıza entegre ediyoruz. Uzmanlarımız tarafından hazırlanan İngilizce ve Türkçe aylık bültenler, müzik dersleri, İngilizce kelime bilgisi ve aile etkinlikleri gibi kapsamlı programlar sunarak ev ve okul arasında işbirliğine dayalı bir öğrenme ortamını teşvik ediyor.",
  },
] as EducationModelsType[];

export const EducationModelnfo = [
  {
    location: "Mareşal Fevzi Çakmak Mah. 447 St. No:17 - Merkez/AFYON",
    phoneNumber: "0507 626 26 90",
    email: "maresal@akdkids.com",
  },
  {
    location: "Erkmen Cumhuriyet Mah. Fidankent St. No:3 Erkmen/AFYON",
    phoneNumber: "0555 161 55 10",
    email: "uykent@akdkids.com",
  },
  {
    location: "Triovista Mansions, 2nd Stage - Center/AFYON",
    phoneNumber: "0555 161 55 10",
    email: "triovista@akdkids.com",
  },
] as EducationModelType[];

export const MainGalleryImages = [
  {
    imageUrl: "https://utfs.io/f/a76e603a-3f97-4eff-9bef-b679258791e1-2i2.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/e24a554b-6c30-431b-b4f6-689f0a1568f6-2i3.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/5f8504ef-8eee-42ff-b460-2ad2d9683ce0-2i4.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/da38ad96-f979-48c3-bc5d-986e686bbf86-2i5.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/aeae28b6-89da-4340-94c1-1522d55546dc-2i7.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/7fd5edf1-8ae4-47d9-a3c6-c10b26eee1ff-2i8.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/c27eb4bd-e287-4684-9546-c3d50085d12d-2i9.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/a4795fb1-c6b6-4ed5-bb44-790de9e901b6-2ia.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/6f1c9920-a12a-4e66-bce1-535825b862d7-25l2.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/3b52fc92-bdfd-4f32-82d6-fb47fd42b515-25l3.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/203c8d0c-c452-433b-a87c-4d453f3ce4b3-25l4.jpg",
  },
] as GalleryImagesType[];

export const MareşalGalleryImages = [
  {
    imageUrl: "https://utfs.io/f/1cd04b55-6be3-4cb9-bd28-87dd480890d3-2nc.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/95a51a4f-94f7-4b93-bba2-dc2b0a955090-2n9.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/f12ac433-32b1-4021-95cd-a4ddda5b93d0-2na.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/afb76bc9-780e-4164-8d5f-eec4ffb1e849-2nb.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/6cde3870-c559-4d77-8557-28dd1bbdd5d1-2n8.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/0992188f-fd3d-4770-b8b8-c4b697f94131-2nd.jpg",
  },
] as GalleryImagesType[];

export const UydukentGalleryImages = [
  {
    imageUrl: "https://utfs.io/f/a2e76db6-e83a-444d-8d09-f6334ce3e621-39.8.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/8ec2f873-2f0c-4d88-968b-c656e98e9857-2u5.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/a3eb2af0-467e-4656-99e0-ec32c916dc10-2u6.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/2b677040-8e49-402e-be31-7815d64d0fc6-2u7.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/98ffa516-5128-41a7-9bab-0a4171b58ef4-2u8.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/45900416-fdad-4fbf-a074-75c9e0a29857-2u9.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/9c7eb15a-d8de-4e2f-a5dd-ffe986c0007f-2ua.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/a546d7a9-a637-44f7-a985-aebfd6e0bff1-2u4.jpg",
  },
] as GalleryImagesType[];

export const TriovistaGalleryImages = [
  {
    imageUrl: "https://utfs.io/f/b2c75194-5d86-4b59-b090-6caf7f32674e-2t9.jpg",
  },
  {
    imageUrl:
      "https://utfs.io/f/c6c774ed-1532-4f23-9450-afd982e84b8c-1sqbj7.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/bbe2724c-d952-4f65-a9be-b5fe29fea291-2tb.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/c817426b-2048-4d8f-a223-25fc066d3ec7-2tc.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/135e2806-a944-4411-8226-ffb86003df71-2td.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/dd92aa75-844a-4ab3-97b7-726089aee2f7-2te.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/ec9e1cc3-d9b4-4379-a184-d57c514800f0-2tf.jpg",
  },
  {
    imageUrl: "https://utfs.io/f/14334799-6ebd-4e60-af11-f06b514af982-2tg.jpg",
  },
] as GalleryImagesType[];
