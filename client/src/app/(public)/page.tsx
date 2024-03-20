import { Button } from "@/components/ui/button";
import { CarouselHero } from "@/components/my";
import Sponsors from "@/components/my/sponsors/Sponsors";

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24">
        <a href="/about" className="inline-flex items-center rounded-lg bg-rose-600 text-gray-100 bg-muted px-4 mb-1 py-1 text-base font-medium">
          <span className="sm:hidden">Descubre mas de nosotros</span>
          <span className="hidden sm:inline ">
            Descubre más sobre nosotros como empresa →
          </span>
        </a>
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-8xl lg:leading-[1.1]">
          Encuentra Tu Próximo Desafío Laboral
        </h1>
        <span
          className="max-w-[750px] text-center text-lg  text-gray-400 sm:text-2xl"
          style={{ display: "inline-block", verticalAlign: "block", textDecoration: "inherit", maxWidth: "570px" }}
        >Encuentra una variedad de oportunidades laborales adaptadas a tus habilidades e intereses</span>


        <div className="flex gap-4 mt-6">
          <Button variant={"secondary"}>
            Descubre más
          </Button>
          <Button variant={"default"}>
            Contáctanos
          </Button>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <Sponsors />
      </div>
    </>
  );
}
