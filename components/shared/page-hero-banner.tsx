
type PageHeroBannerProps = {
    title: string;
    description?: string;
}


export function PageHeroBanner({ title, description }: PageHeroBannerProps) {

    return (
        <section className="pt-26 px-4">
        <div className="max-w-6xl container mx-auto rounded-[32px] bg-gradient-to-br from-[#be7b22] to-[#dba258] text-white py-6 md:py-10 px-6 md:px-16">
         <div className="max-w-4xl mx-auto text-center">
          
          {/* Dekoracija */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-20 bg-white/40" />
            
            <div className="flex items-center gap-1">
              <div className="h-3 w-1 rounded-full bg-white" />
              <div className="h-6 w-1 rounded-full bg-white" />
              <div className="h-8 w-1 rounded-full bg-white" />
              <div className="h-1 w-6 rounded-full bg-white" />
              <div className="h-8 w-1 rounded-full bg-white" />
              <div className="h-6 w-1 rounded-full bg-white" />
              <div className="h-3 w-1 rounded-full bg-white" />
            </div>

            <div className="h-px w-20 bg-white/40" />
          </div>

          {/* Naslov */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-6">
             { title }
          </h1>
          <h3 className="md:text-xl font-medium tracking-wide">{description}</h3>
        </div>
      </div>
    </section>

    )
}

