import { meta } from "@/lib/constants"
import { getPosts } from "@/lib/posts"
import { BlogPostPreview } from "@/ui/BlogPostPreview"
import { IntersectionSwap } from "@/ui/IntersectionSwap"
import { Nav } from "@/ui/Nav"
import { NextMark } from "@/ui/NextMark"
import { ProfileImageLarge } from "@/ui/ProfileImage"
import { SiteHeader } from "@/ui/SiteHeader"
import { VercelMark } from "@/ui/VercelMark"
import { VideoPostPreview } from "@/ui/VideoPostPreview"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: meta.tagline,
  description: meta.description.de,
}

export default async function Page() {
  const { posts } = getPosts()

  return (
    <>
      <IntersectionSwap nav={<SiteHeader />}>
        <div className="space-y-8">
          <div className="flex items-center space-x-6">
            <ProfileImageLarge />

            <div className="mt-2">
              <h1 className="text-3xl font-semibold leading-none text-rose-100/90">
                Meshu
              </h1>
              <h2
                className="mt-2 items-center space-y-2 text-lg font-medium leading-none text-rose-100/50 lg:mt-0 lg:flex lg:space-y-0 lg:space-x-2">
                <div className="whitespace-nowrap">Software Engineer at</div>
                <div className="flex space-x-2">
                  <a
                    className="group flex items-center space-x-1.5"
                    href="https://codeculture.de/"
                  >
                    <div
                      className="mb-1 h-6 w-6 rounded-md bg-black p-[7px] text-white shadow-lg shadow-rose-900/60 ring-2 ring-rose-400/20 group-hover:shadow-xl group-hover:shadow-rose-700 group-hover:ring-rose-400/30">
                      <VercelMark />
                    </div>
                    <div className=" group-hover:text-rose-100/90">Codeculture Chemnitz</div>
                  </a>
                </div>
              </h2>
            </div>
          </div>

          <div className="text-xl text-rose-100/90">{meta.description.de}</div>

          <Nav />
        </div>
      </IntersectionSwap>

      <div className="mt-10 space-y-10 block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <div className="grid flex space-x-2 text-base text-rose-100/50">
          <h3 className="pb-5 text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90">
            Berufliche Erfahrung
          </h3>

          <div className="flex flex-col space-x-0 space-y-4">
            <div className="flex flex-row space-x-10 text-base">
              <div className="flex-none w-30">
                <h3>07.2023 - Heute</h3>
              </div>
              <div className="flex-1 w-60">
                <h3 className="text-rose-100/80">Codeculture - Software Entwickler</h3>
                <p>Chemnitz, Germany</p>

                <p className="mt-5 content">
                  In den letzten mehreren Sprints habe ich bei der Entwicklung skalierbarer, verteilter Software mit
                  Golang, Magento, Strapi / Apollo GraphQL und Angular für Lösungen mit einer großen Nutzerzahl
                  mitgewirkt. Darüber hinaus habe ich zur Entwicklung mobiler Anwendungen unter Verwendung cross-platform
                  Sprachen wie Flutter/Ionic-Vue beigetragen.
                </p>
              </div>
            </div>

            <div className="flex flex-row space-x-6 text-base">
              <div className="flex-none w-30">
                <h3>02.2022 - 05.2023</h3>
              </div>
              <div className="flex-1 w-60">
                <h3 className="text-rose-100/80">Prismade Labs GmbH - Software Entwickler</h3>
                <p>Chemnitz, Germany</p>

                <p className="mt-5 content">
                  Entwicklung von Mobil- und Web-Applikationen mit TypeScript (React, Redux, Vue). Arbeit an einem Automatisierungsprojekt mit TypeScript,
                  AWS Lambda-Funktionen, DynamoDB, S3-Bucket und Jenkins. Erstellung mehrerer einseitiger Anwendungen für verschiedene Kunden.
                  Arbeit in einem internen Entwicklungsprojekt (Decoder-Entwicklung) als integraler Teil des Scrum-Teams, das in Sprints arbeitet.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="mt-10 space-y-10 block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <div className="grid flex space-x-2 text-base text-rose-100/50">
          <h3 className="pb-5 text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90">
            Ausbildung
          </h3>

          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-7 text-base">
              <div className="flex-none w-30">
                <h3>10.2019 - 10.2023</h3>
              </div>
              <div className="flex-1 w-60">
                <h3 className="text-rose-100/80">Technische Universität Chemnitz</h3>
                <p>Master of Science, Web Engineering</p>

                <p className="mt-5 content">
                  Entwurf Verteilter Systeme, Software Service Engineering,    Sicherheit Verteilter Software, Cloud und Web-Techniken.
                </p>
              </div>
            </div>

            <div className="flex flex-row space-x-6 text-base">
              <div className="flex-none w-30">
                <h3>06.2013 - 06.2018</h3>
              </div>
              <div className="flex-1 w-60">
                <h3 className="text-rose-100/80">United International University</h3>
                <p>Bachelor of Science, Computer Science and Engineering</p>
                <p className="mt-5 content">Machine Learning, Object Oriented Programming</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="mt-10 space-y-10 block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <h3 className="text-xl text-base text-base-100/50">Project</h3>
      </div>

      <div className="space-y-10">
        {posts.map((post) => {
          if (post.type === "Post") {
            return <BlogPostPreview key={post.slug} {...post} />
          }
        })}
      </div>
    </>
  )
}
