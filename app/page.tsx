
import { HomeHero } from "@/components/home-hero";
import { Features } from "@/components/features";
import { Category } from "@/components/categories-section";
import { LatestPosts } from "@/components/latest-posts";
import { MembershipPricing } from "@/components/membership-pricing";
import { CTA } from "@/components/CTA-section";

export default function Home() {
  return (
       <>
        <HomeHero />
        <Features />
        <Category />
        <LatestPosts />
        <MembershipPricing />
        <CTA />
       </>
  );
}
