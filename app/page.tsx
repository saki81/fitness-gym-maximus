import { HomeHero } from "@/components/home-hero";
import { Features } from "@/components/features";
import { Category } from "@/components/categories-section";
import { LatestPosts } from "@/components/latest-posts";
import { MembershipPricing } from "@/components/membership-pricing";
import { CTA } from "@/components/CTA-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teretana Teslić | Fitness Centar Maximus",
  description: "Fitness Centar Maximus je moderna teretana u Tesliću, smještena u Sportskoj dvorani Radolinka. Na raspolaganju su vam kvalitetna oprema i prostor za trening snage, poboljšanje kondicije i unapređenje fitnessa, kao i izgradnju mišića.",
}

export default function Home() {
  return (
       <div>
        <HomeHero />
        <Features />
        <Category />
        <LatestPosts />
        <MembershipPricing />
        <CTA />
       </div>
  );
}
