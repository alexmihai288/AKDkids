import { cn } from "@/lib/utils";
import { Atma } from "next/font/google";
import React from "react";
import { Josefin_Sans } from "next/font/google";
import { TranslateText } from "@/components/TranslateText";

const atma = Atma({ subsets: ["latin"], weight: "700" });
const josefin = Josefin_Sans({ subsets: ["latin"], weight: "400" });

export const OurEvents = () => {
  return (
    <>
      <p
        className={cn(
          "text-2xl max-w-[550px] break-words mt-20 border-b-2 border-primaryRed mx-auto w-fit text-center",
          atma.className
        )}
      >
        <TranslateText englishText="Our events" turkishText="Etkinliklerimiz" />
      </p>
      <video
        src="/ad1.mp4"
        controls
        preload="auto"
        playsInline
        className="object-cover w-full h-full min-h-[90vh] md:h-[60vh] max-h-[100vh] brightness-75 mt-10 rounded-3xl"
      ></video>
      <div className="flex flex-col">
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-1 gap-5">
              <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                1
              </div>
              <div>
                <p className={cn(atma.className, "text-xl mb-2.5")}>
                  <TranslateText
                    englishText="Free time activities"
                    turkishText="Serbest zaman etkinlikleri"
                  />
                </p>
                <p
                  className={cn(
                    josefin.className,
                    "text-[#1b0238] tracking-wider"
                  )}
                >
                  <TranslateText
                    englishText="It is the time when children can make their plans, express
                  themselves freely, socialize, experiment, and work with the
                  teacher as a guide. The activities meet the needs of our
                  children to explore, plan, finish what they started,
                  self-motivate themselves and socialize under the supervision
                  of teachers."
                    turkishText="Çocukların planlarını yapabildikleri, kendilerini ifade edebildikleri
                  kendilerini özgürce ifade edebilir, sosyalleşebilir, deney yapabilir ve
                  öğretmen rehber olarak. Faaliyetler öğrencilerimizin ihtiyaçlarını karşılamaktadır.
                  Çocukların keşfetmeleri, plan yapmaları ve başladıkları işi bitirmeleri,
                  kendi kendilerini motive etmeleri ve gözetim altında sosyalleşmeleri
                  öğretmenlerin."
                  />{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-5">
              <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                2
              </div>
              <div>
                <p className={cn(atma.className, "text-xl mb-2.5")}>
                  <TranslateText
                    englishText="Art Events"
                    turkishText="Sanat Etkinlikleri"
                  />
                </p>
                <p
                  className={cn(
                    josefin.className,
                    "text-[#1b0238] tracking-wider"
                  )}
                >
                  <TranslateText
                    englishText="The art events consist of activities that contribute to the
                  development of expressive language, integration with nature,
                  and the skills.."
                    turkishText="Sanat etkinlikleri, Türkiye'nin kültürel ve sanatsal gelişimine katkıda bulunan faaliyetlerden oluşmaktadır.
                  ifade edici dil gelişimi, doğa ile bütünleşme,
                  ve becerileri.."
                  />{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-1 gap-5">
              <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                3
              </div>
              <div>
                <p className={cn(atma.className, "text-xl mb-2.5")}>
                  <TranslateText
                    englishText=" 
                  Language Activities
                  "
                    turkishText="Dil Etkinlikleri"
                  />
                </p>
                <p
                  className={cn(
                    josefin.className,
                    "text-[#1b0238] tracking-wider"
                  )}
                >
                  {" "}
                  <TranslateText
                    englishText=" Sharing times are activities that include poetry, finger
                  games, nursery rhymes, riddles, storytelling, story
                  completion, and story creation.."
                    turkishText=" Paylaşım zamanları, şiir, parmak oyunu
                    oyunlar, tekerlemeler, bilmeceler, hikaye anlatımı, hikaye
                    tamamlama ve hikaye oluşturma.."
                  />
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-5">
              <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                4
              </div>
              <div>
                <p className={cn(atma.className, "text-xl mb-2.5")}>
                  <TranslateText
                    englishText=" 
                  Dramatic Events
                  "
                    turkishText="Dramatik Olaylar"
                  />
                </p>
                <p
                  className={cn(
                    josefin.className,
                    "text-[#1b0238] tracking-wider"
                  )}
                >
                  <TranslateText
                    englishText="Dramatic activities include pretend-play, movement exercises,
                  pantomime, and dramatization activities. Dramatic activities
                  improve children's.."
                    turkishText="Dramatik aktiviteler arasında oyun gibi davranma, hareket alıştırmaları yer alır,
                    pandomim ve dramatizasyon etkinlikleri. Dramatik etkinlikler
                    çocukları iyileştirmek's.."
                  />
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-1 gap-5">
              <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                5
              </div>
              <div>
                <p className={cn(atma.className, "text-xl mb-2.5")}>
                  <TranslateText
                    englishText="
                  Game Events
                  "
                    turkishText="Oyun Etkinlikleri"
                  />
                </p>
                <p
                  className={cn(
                    josefin.className,
                    "text-[#1b0238] tracking-wider"
                  )}
                >
                  {" "}
                  <TranslateText
                    englishText="Game events include playing with natural materials such as
                  sand, clay, water, and mud, covering imaginative games that
                  require creative thinking."
                    turkishText="Oyun etkinlikleri, aşağıdaki gibi doğal malzemelerle oynamayı içerir
                    kum, kil, su ve çamur, yaratıcı oyunları kapsayan
                    yaratıcı düşünmeyi gerektirir."
                  />
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-5">
              <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                6
              </div>
              <div>
                <p className={cn(atma.className, "text-xl mb-2.5")}>
                  <TranslateText
                    englishText="
                  Music Events
                  "
                    turkishText="Müzik Etkinlikleri"
                  />
                </p>
                <p
                  className={cn(
                    josefin.className,
                    "text-[#1b0238] tracking-wider"
                  )}
                >
                  <TranslateText
                    englishText="The music events consist of activities including listening to
                  sound and discrimination, tempo exercises, rhythm tools,
                  singing, creative dance and.."
                    turkishText="Müzik etkinlikleri aşağıdakileri içeren etkinliklerden oluşur
                    ses ve ayırt etme, tempo alıştırmaları, ritim araçları,
                    şarkı söyleme, yaratıcı dans ve.."
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex flex-1 gap-5">
              <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                7
              </div>
              <div>
                <p className={cn(atma.className, "text-xl mb-2.5")}>
                  <TranslateText
                    englishText="
                  Science Activities
                  "
                    turkishText="Bilim Etkinlikleri"
                  />
                </p>
                <p
                  className={cn(
                    josefin.className,
                    "text-[#1b0238] tracking-wider"
                  )}
                >
                  {" "}
                  <TranslateText
                    englishText="The science activities consist of activities that support
                    exploration, ffcuriosity, and scientific process skills,
                    including physical science, mathematics."
                    turkishText=" Bilim faaliyetleri aşağıdakileri destekleyen faaliyetlerden oluşur
                    keşif, merak ve bilimsel süreç becerileri,
                    fizik bilimi, matematik dahil."
                  />
                </p>
              </div>
            </div>
            <div className="flex flex-1 gap-5">
              <div className="self-start bg-primaryRed rounded-full text-white px-5 py-3">
                8
              </div>
              <div>
                <p className={cn(atma.className, "text-xl mb-2.5")}>
                  <TranslateText
                    englishText=" 
                  Literacy Preparation Studies
                  "
                    turkishText="Okuryazarlık Hazırlık Çalışmaları
                    "
                  />
                </p>
                <p
                  className={cn(
                    josefin.className,
                    "text-[#1b0238] tracking-wider"
                  )}
                >
                  <TranslateText
                    englishText="Literacy preparation activities are activities carried out to
                  facilitate the transition of children to primary school and to
                  increase their readiness level.."
                    turkishText="Okuma yazmaya hazırlık faaliyetleri, aşağıdakileri gerçekleştirmek için yürütülen faaliyetlerdir
                    çocukların ilkokula geçişini kolaylaştırmak ve
                    hazırlık seviyelerini arttırmak.."
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
