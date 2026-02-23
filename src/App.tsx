import { ArrowUpRight, Instagram, Youtube } from 'lucide-react'
import Ballpit from '@/components/Ballpit'
import DecayCard from '@/components/DecayCard'
import Galaxy from '@/components/Galaxy'
import GlitchText from '@/components/GlitchText'
import Magnet from '@/components/Magnet'
import PrismaticBurst from '@/components/PrismaticBurst'
import ShinyText from '@/components/ShinyText'
import TrueFocus from '@/components/TrueFocus'

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ppanzziri',
    icon: Youtube,
    color: '#4ff4cf',
    desc: '롱폼 + 지출 리포트 브리핑',
    tags: ['DAY LOG', 'SPEND REPORT'],
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ppanzziri',
    icon: Instagram,
    color: '#ff8a2c',
    desc: '릴스 + 스토리 지출 스냅샷',
    tags: ['REELS', 'STORY'],
  },
]

function App() {
  return (
    <main className="relative isolate overflow-x-hidden bg-[#040b16] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(40,176,255,0.22),transparent_34%),radial-gradient(circle_at_84%_0%,rgba(2,255,190,0.2),transparent_24%),radial-gradient(circle_at_50%_76%,rgba(255,120,20,0.16),transparent_40%)]" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <Galaxy
            hueShift={180}
            glowIntensity={0.56}
            saturation={1}
            density={1.18}
            starSpeed={0.9}
            rotationSpeed={0.12}
            mouseInteraction
            mouseRepulsion
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-20 pt-20 md:px-10 md:pt-24">
          <DecayCard width={288} height={360} image="/ppanzziri.png" />

          <div className="mt-10 flex w-full flex-col items-center text-center">
            <GlitchText
              speed={0.85}
              enableOnHover
              className="!mx-0 !text-[clamp(3.4rem,12vw,8.4rem)] !leading-none uppercase tracking-tight"
            >
              PPANZZIRI
            </GlitchText>

            <div className="relative mt-7 space-y-3">
             
              
              <TrueFocus
                sentence="3000만원으로 뺀질거리기"
                manualMode={false}
                blurAmount={5}
                borderColor="#44f0cf"
                glowColor="rgba(68, 240, 207, 0.6)"
                animationDuration={1.2}
                pauseBetweenAnimations={0.9}
                wordClassName="!text-[clamp(1.9rem,6.6vw,4.9rem)] !font-black !tracking-tight !leading-[1.05] text-white"
              />
            </div>


          </div>
        </div>
      </section>

      <section className="relative pb-24 pt-20 md:pb-28 md:pt-24">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="relative overflow-hidden rounded-[36px] border border-cyan-300/30 bg-[#070f1d]/90 shadow-[0_34px_120px_rgba(12,215,200,0.18)]">
            <div className="absolute inset-0 opacity-85">
              <Ballpit
                count={110}
                gravity={0.25}
                friction={0.997}
                wallBounce={0.96}
                maxVelocity={0.14}
                followCursor
                colors={[0x40f1d0, 0x35b0ff, 0xff8a2c, 0x9e7bff]}
              />
            </div>
            <div className="absolute inset-0 opacity-70 mix-blend-screen">
              <PrismaticBurst
                intensity={1.4}
                speed={0.6}
                animationType="hover"
                colors={['#40f1d0', '#35b0ff', '#ff8a2c']}
                rayCount={22}
                distort={6}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_42%)]" />

            <div className="relative z-10 grid min-h-[620px] gap-6 p-6 md:p-8 lg:grid-cols-2 lg:items-end">
              <div className="self-start">
                <ShinyText
                  text="SOCIAL PORTAL"
                  className="text-xs font-semibold tracking-[0.26em] text-cyan-100"
                  speed={2.5}
                />
                <h2 className="mt-3 text-[clamp(1.6rem,4.8vw,3.3rem)] font-black leading-tight text-white">
                  <span className="block">뺀질이의 일상이</span>
                  <span className="block">궁금하다면?</span>
                </h2>
              </div>

              <div className="grid gap-4">
                {socialLinks.map(({ label, href, icon: Icon, color, desc, tags }) => (
                  <Magnet key={`promo-${label}`} padding={120} magnetStrength={1.8} wrapperClassName="w-full">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group block rounded-[26px] border border-white/20 bg-black/35 p-5 backdrop-blur-xl transition hover:border-white/45"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.18em] text-cyan-100/90">PPANZZIRI CHANNEL</p>
                          <h3 className="mt-2 inline-flex items-center gap-2 text-2xl font-black text-white">
                            <Icon size={22} style={{ color }} />
                            {label}
                          </h3>
                          <p className="mt-2 text-sm text-slate-200">{desc}</p>
                        </div>
                        <ArrowUpRight
                          size={20}
                          className="mt-1 text-slate-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map(tag => (
                          <span
                            key={`${label}-${tag}`}
                            className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  </Magnet>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
