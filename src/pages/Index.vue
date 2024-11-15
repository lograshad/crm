<script>
import Insights from "~/components/molecules/cards/Insights.vue";
import ArrowRightIcon from "~/components/icons/ArrowRightIcon.vue";
import FAQs from "~/components/molecules/FAQs.vue";
export default {
  components: {
    Insights,
    ArrowRightIcon,
    FAQs,
  },
  metaInfo: {
    title: "CRMinder - AI-Powered Lead Qualification Assistant",
  },
  data() {
    return {
      starterPlan,
      professionalPlan,
      enterprisePlan,
      faqItems,
    };
  },
};
const starterPlan = [
  "Up to 3 users",
  "100 leads/month",
  "Basic AI scoring",
  "Team collaboration features",
];
const professionalPlan = [
  "Up to 10 users",
  "1,000 leads/month",
  "Advanced AI scoring",
  "Team collaboration features",
  "Multiple CRM integrations",
  "Team collaboration features",
];
const enterprisePlan = [
  "Unlimited users",
  "Unlimited leads",
  "Custom AI training",
  "Priority support",
  "API access",
];
const faqItems = [
  {
    title: "How accurate is the AI lead scoring? ",
    content:
      "Our AI model has achieved 92% accuracy in identifying high-potential leads, based on analyzing millions of social media interactions. It continuously learns and improves from your team’s feedback.",
  },
  {
    title: "How do I track my order?",
    content: "You can track your order by...",
  },
  {
    title: "Can I purchase items in bulk?",
    content: "Yes, you can purchase items in bulk by...",
  },
];
</script>

<template>
  <Layout>
    <!-- hero section -->
    <section class="flex xl:flex-row flex-col items-center justify-center xl:justify-between mt-14">
      <div>
        <p class="text-customHeroBlack text-sm md:text-lg font-medium mb-2 uppercase text-center xl:text-left">
          Let AI Qualify Them for You
        </p>
        <h1 class="text-3xl md:w-3/4 mx-auto xl:mx-0 xl:w-2/3 md:text-6xl text-customHeroBlack2 font-bold leading-110 mb-3 text-center xl:text-left">
          Stop Drowning in
          Social Media Leads.
        </h1>
        <p class="text-grey-400 md:w-4/5 mx-auto xl:mx-0 xl:w-3/4 text-sm md:text-lg mb-6 text-center xl:text-left">
          Transform your browser into an AI-powered lead qualification engine.
          Save
          43% of your prospecting time without leaving social media.
        </p>
        <button
          class="bg-primary text-white text-base font-medium py-2 px-5 rounded-lg mb-3 text-center mx-auto flex xl:block xl:mx-0"
        >
          Start Free Trial
        </button>
        <p class="text-grey-400 text-base md:text-sm xl:text-left text-center">
          14-day free trial. No credit card required.
        </p>
      </div>
      <g-image alt="hero" src="~/assets/heroImg.png" width="391" height="469"  class="xl:mt-0 mt-14"/>
    </section>
    <!-- what we are solving -->
    <section class="mt-32" id="features">
      <h2 class="text-center capitalize text-2xl md:text-5xl font-bold mb-4">
        What we are solving
      </h2>
      <p class="text-sm md:text-xl text-grey-300 text-center">
        Your Social Media is a Gold Mine of Qualified Leads… If You Know Where
        to Look”
      </p>
      <div class="flex xl:flex-row flex-col items-center xl:mt-40">
        <div>
          <div class="text-primary uppercase text-xl font-semibold mb-4 xl:block hidden">
            Problems you face
          </div>
          <ul>
            <li class="text-grey-400 font-medium py-6 text-sm md:text-base xl:border-t border-grey-300">
              Spending hours manually
              analyzing social interactions?
            </li>
            <li class="text-grey-400 font-medium py-6 text-sm md:text-base border-t border-grey-300">
               Missing hot leads while they go cold?
            </li>
            <li class="text-grey-400 font-medium py-6 text-sm md:text-base border-t border-grey-300">
              Tired of copying and pasting into your CRM?
            </li>
          </ul>
        </div>
        <div class="relative xl:flex-1 flex xl:mt-0 mt-48 justify-center">
          <div>
            <h3 class="text-2xl md:text-4xl font-bold mb-5">Meet CRMinder</h3>
            <p class="text-grey-400 text-base md:text-lg text-center">
              Your AI-Powered Lead <br />
              Qualification Assistant
            </p>
          </div>
          <div
            class="custom-box1"
          >
            <Insights
              color="#EDEFF6"
              shadowColor="#8F9BAF2E"
              rate="43"
              insight="Less Time Prospecting"
              textColor="#162450"
            />
          </div>
          <div
            class="custom-box2"
          >
            <Insights
              color="#FEEFFA"
              shadowColor="#EEDFEA"
              rate="43"
              insight="More Qualified Leads"
              textColor="#501641"
              position="-top-[130%] right-[15%]"
            />
          </div>
          <div
            class="custom-box3"
          >
            <Insights
              color="#DFF5E5"
              shadowColor="#D0E5D5"
              rate="43"
              insight="Less Manual Data Entry"
              textColor="#165025"
              position="-bottom-[90%] right-[10%]"
            />
          </div>
          <div
          class="custom-box4"
          >
            <Insights
              color="#F5F0E0"
              shadowColor="#E7DFC9"
              rate="43"
              insight="Hours Saved Per Week"
              textColor="#504216"
              position="-bottom-[170%] left-[30%]"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="border-[#E0E0FF] border rounded-xl bg-lightBlue p-5 md:p-12 mt-52">
      <p class="text-grey-400 text-sm md:text-base">
        CRMinder sits right in your Chrome browser, analyzing every social
        interaction in real-time. While you browse LinkedIn and Twitter, our AI
        quietly qualifies leads, scores their potential, and syncs everything to
        your CRM.
      </p>
      <button
        class="flex items-center gap-3 rounded-lg bg-primary py-3 px-4 mt-5"
      >
        <span class="text-white text-sm md:text-base">Get Early Access Now</span>
        <ArrowRightIcon />
      </button>
    </div>
    <section class="mt-32 flex xl:flex-row flex-col gap-5">
      <div class="w-[40%]">
        <div
          class="text-sm w-fit border-primary border rounded-lg py-1 px-2 font-p-3 md:medium"
        >
          Features
        </div>
        <h3 class="text-2xl md:text-4xl font-bold mt-3">
          Everything You Need to Convert Social Browsers Into Buyers
        </h3>
        <p class="text-base text-grey-300 text-sm mt-5">
          Early Access Special Offer” Join our exclusive beta program and lock
          in p-3 md:lifetime savings of 35%
        </p>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div class="p-6 rounded-lg border border-[#D6D6D6] h-[166px]">
          <div class="text-lg font-bold text-[#0D0D0D]">AI Analysis</div>
          <p class="text-base text-grey-300 text-sm">
            Instant Lead Scoring Smart AI analyzes engagement patterns and
            conversation context to identify your hottest p-3 md:leads.
          </p>
        </div>
        <div
          class="p-6 rounded-lg border border-[#D6D6D6] h-[166px] xl:-mt-[18px]"
        >
          <div class="text-lg font-bold text-[#0D0D0D]">Seamless Integration</div>
          <p class="text-base text-grey-300 text-sm">
            Works With Your Stack Direct integration with HubSpot CRM - more platforms coming soon.
          </p>
        </div>
        <div class="p-6 rounded-lg border border-[#D6D6D6] h-[166px]">
          <div class="text-lg font-bold text-[#0D0D0D]">One-Click Qualification</div>
          <p class="text-base text-grey-300 text-sm">
            Zero Learning Curve Qualify leads with a single click while browsing. No new tabs, no complex workflows.</p>
        </div>
        <div
        style="box-shadow: 0px 30px 90px 0px #0000001A"
          class="p-6 rounded-lg bg-orange-100 xl:-mt-[18px] shadow-[0px_30px_90px_0px_#0000001A]"
        >
          <div class="text-lg font-bold text-orange-400">Early Access Special Offer</div>
          <p class="text-base text-grey-300 text-sm">
            Join our exclusive beta program and lock in lifetime savings of 35%
          </p>
          <button
            class="flex items-center gap-3 rounded-lg bg-orange-400 py-3 px-4 mt-5"
          >
            <span class="text-white text-base">Claim your spot</span>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
    <section class="mt-32 flex xl:flex-row flex-col gap-5">
      <div class="w-[40%]">
        <div
          class="text-sm w-fit border-primary border rounded-lg py-1 px-2 font-medium"
        >
          How it works
        </div>
        <h3 class="text-2xl md:text-4xl font-bold mt-3">
          Qualify More Leads in 4 Simple Steps
        </h3>
        <button
          class="flex items-center gap-3 rounded-lg bg-primary py-3 px-4 mt-5"
        >
          <span class="text-white text-sm md:text-base">Watch 2-minute demo</span>
          <ArrowRightIcon />
        </button>
      </div>
      <div class="flex flex-col gap-7">
        <div
          class="p-3 md:p-6 rounded-2xl border border-[#D6D6D6] flex md:flex-row flex-col items-start gap-6"
        >
          <g-image src="~/assets/step1.png" width="208" height="168" />
          <div>
            <div class="text-lg font-bold text-[#0D0D0D]">Step 1</div>
            <p class="text-base text-grey-300 text-sm">
              Install the Chrome Extension Just click ‘Add to Chrome’ and you’re ready to start. No complex setup required.
            </p>
          </div>
        </div>
        <div
          class="p-3 md:p-6 rounded-2xl border border-[#D6D6D6] flex md:flex-row flex-col items-start gap-6"
        >
          <g-image src="~/assets/step2.png" width="208" height="168" />
          <div>
            <div class="text-lg font-bold text-[#0D0D0D]">Step 2</div>
            <p class="text-base text-grey-300 text-sm">
              Browse Social Media Normally Use LinkedIn and Twitter as you always do. CRMinder works silently in the background.
            </p>
          </div>
        </div>
        <div
          class="p-3 md:p-6 rounded-2xl border border-[#D6D6D6] flex md:flex-row flex-col items-start gap-6"
        >
          <g-image src="~/assets/step3.png" width="208" height="168" />
          <div>
            <div class="text-lg font-bold text-[#0D0D0D]">Step 3</div>
            <p class="text-base text-grey-300 text-sm">
              Let AI Qualify Your Leads Our AI analyzes engagement patterns, conversation context, and buyer intent signals in real-time.
            </p>
          </div>
        </div>
        <div
          class="p-3 md:p-6 rounded-2xl border border-[#D6D6D6] flex md:flex-row flex-col items-start gap-6"
        >
          <g-image src="~/assets/step4.png" width="208" height="168" />
          <div>
            <div class="text-lg font-bold text-[#0D0D0D]">Step 4</div>
            <p class="text-base text-grey-300 text-sm">
              Convert More Efficiently Get instant lead scores and sync qualified prospects to your CRM with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-32">
      <div
        class="text-sm w-fit border-grey-400 text-grey-400 border rounded-lg py-1 px-2 font-medium text-center mx-auto"
      >
        Testimonial
      </div>
      <h3 class="text-2xl md:text-4xl font-bold mt-3 text-center">
        What Forward-Thinking Sales Teams Are Saying
      </h3>
      <div
        class="flex flex-col xl:flex-row items-center mt-14 gap-10 mx-auto justify-center max-w-[80%]"
      >
        <div
          class="rounded-xl border-[#E0E0FF] border px-3 py-5 bg-lightBlue"
        >
          <p
            class="text-grey-300 text-center text-sm md:text-base pb-4 border-b border-[#E0E0FF]"
          >
            CRMinder helped us identify qualified leads we were completely
            missing. Our team’s productivity shot up by 40% in the first month
            alone.
          </p>
          <p class="text-center text-base font-semibold">Sarah Chen</p>
          <p class="text-grey-300 text-base text-center">
            Sales Director, TF Solutions
          </p>
          <g-image
            src="~/assets/avatar1.png"
            width="80"
            height="80"
            class="rounded-full mx-auto mt-2"
          />
        </div>
        <div
          class="rounded-xl border-[#E0E0FF] border px-3 py-5 bg-lightBlue"
        >
          <p
            class="text-grey-300 text-center text-sm md:text-base pb-4 border-b border-[#E0E0FF]"
          >
          The AI is scary good at spotting potential buyers. We’ve cut our prospecting time in half and our conversion rates have never been better
          </p>
          <p class="text-center text-base font-semibold">Michael Rodriguez</p>
          <p class="text-grey-300 text-base text-center">
            Lead  Manager, Growth Agency
          </p>
          <g-image
            src="~/assets/avatar2.png"
            width="80"
            height="80"
            class="rounded-full mx-auto mt-2"
          />
        </div>
        <div
          class="rounded-xl border-[#E0E0FF] border px-3 py-5 bg-lightBlue"
        >
          <p
            class="text-grey-300 text-center text-sm md:text-base pb-4 border-b border-[#E0E0FF]"
          >
            CRMinder helped us identify qualified leads we were completely
            missing. Our team’s productivity shot up by 40% in the first month
            alone.
          </p>
          <p class="text-center text-base font-semibold">Sarah Chen</p>
          <p class="text-grey-300 text-base text-center">
            Sales Director, TF Solutions
          </p>
          <g-image
            src="~/assets/avatar3.png"
            width="80"
            height="80"
            class="rounded-full mx-auto mt-2"
          />
        </div>
      </div>
    </section>
    <section class="mt-32">
      <div
        class="text-sm w-fit border-grey-400 text-grey-400 border rounded-lg py-1 px-2 font-medium text-center mx-auto"
      >
        Demo
      </div>
      <h3 class="text-3xl md:text-4xl font-bold mt-3 text-center">
        See CRMinder in Action
      </h3>
      <p class="text-base text-grey-400 text-center mt-3">
        Watch how CRMinder transforms your social media browsing into an
        efficient lead qualification machine
      </p>
      <g-image
        src="~/assets/inAction.png"
        width="759"
        height="400"
        class="mx-auto rounded-2xl mt-16 mb-14"
      />
      <div>
        <div class="grid grid-cols-2 md:flex items-center justify-center gap-3 mb-2">
          <span class="py-1 px-2 col-span-2 text-center rounded-xl text-xs md:text-sm text-primary bg-purple-400"
            >Real-time lead scoring as you browse</span
          >
          <span class="py-1 px-2 rounded-xl text-xs md:text-sm text-center text-pink-100 bg-pink-400"
            >One-click CRM integration</span
          >
          <span class="py-1 px-2 rounded-xl text-xs md:text-sm text-center text-green-100 bg-green-400"
            >Smart engagement analysis</span
          >
        </div>
        <div class="flex items-center justify-center gap-3">
          <span class="py-1 px-2 rounded-xl text-xs md:text-sm text-center text-brown-100 bg-brown-400"
            >Automated lead enrichment
          </span>
          <span class="py-1 px-2 rounded-xl text-xs md:text-sm text-center text-maroon-100 bg-maroon-400"
            >Team collaboration tools</span
          >
        </div>
      </div>
      <h4 class="text-2xl font-bold text-center my-10">
        Ready to Transform Your Lead Qualification?
      </h4>
      <button
        class="py-2 px-3 rounded-xl bg-primary text-center text-base text-white flex mx-auto"
      >
        Start Free Trial
      </button>
      <p class="text-grey-400 text-sm mt-5 text-center">
        14-day free trial. No credit card required.
      </p>
    </section>
    <section class="mt-32" id="pricing">
      <div class="text-primary text-sm text-center">Pricing Table</div>
      <h3 class="text-2xl md:text-4xl font-bold mt-3 mb-6 text-center">
        Choose the Perfect Plan for Your Team
      </h3>
      <div class="rounded-2xl bg-customBlue p-3 md:p-6 w-[75%] mx-auto mb-20">
        <div class="text-primary text-base md:text-2xl font-medium text-center">
          🚀 ...Launch Special.... Lock in 35% lifetime discount
        </div>
        <p class="text-sm md:text-base text-grey-400 text-center">
          Early access members lock in these prices for life
        </p>
      </div>
      <div class="w-[80%] justify-center mx-auto flex xl:flex-row flex-col gap-4 items-stretch">
        <div
          class="border-[#D6D6D6] border rounded-xl px-4 py-6 min-h-full flex-1 flex flex-col"
        >
          <div class="text-2xl font-500">Starter Plan</div>
          <p class="text-base font-light text-grey-300 mt-3">
            Perfect for individuals & small teams
          </p>
          <div class="flex items-start">
            <span class="text-2xl font-medium">$</span>
            <div>
              <span class="text-5xl">29</span>
              <span class="text-grey-400">
                <span class="text-2xl font-medium line-through">40</span>
                <span class="text-sm font-medium">/month</span>
              </span>
            </div>
          </div>
          <ul
            class="flex flex-col gap-2 py-3 mt-3 border-t border-[#D6D6D6] flex-grow"
          >
            <li
              v-for="(item, index) in starterPlan"
              :key="index"
              class="flex items-center gap-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                  stroke="#616161"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-grey-400">{{ item }}</span>
            </li>
          </ul>
          <button
            class="bg-primary w-full text-white rounded-lg mt-10 text-center p-3"
          >
            Start Free Trial
          </button>
        </div>
        <div
          class="border-[#D6D6D6] border rounded-xl px-4 py-6 min-h-full flex-1 flex flex-col"
        >
          <div class="text-2xl font-500">Proffessional Plan</div>
          <p class="text-base font-light text-grey-300 mt-3">
            Small Ideal for growing sales teams
          </p>
          <div class="flex items-start">
            <span class="text-2xl font-medium">$</span>
            <div>
              <span class="text-5xl">79</span>
              <span class="text-grey-400">
                <span class="text-2xl font-medium line-through">90</span>
                <span class="text-sm font-medium">/month</span>
              </span>
            </div>
          </div>
          <ul
            class="flex flex-col gap-2 py-3 mt-3 border-t border-[#D6D6D6] flex-grow"
          >
            <li
              v-for="(item, index) in professionalPlan"
              :key="index"
              class="flex items-center gap-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                  stroke="#616161"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-grey-400">{{ item }}</span>
            </li>
          </ul>
          <button
            class="bg-primary w-full text-white rounded-lg mt-10 text-center p-3"
          >
            Start Free Trial
          </button>
        </div>
        <div
          class="border-[#D6D6D6] border rounded-xl px-4 py-6 min-h-full flex-1 flex flex-col"
        >
          <div class="text-2xl font-500">Enterprise Plan</div>
          <p class="text-base font-light text-grey-300 mt-3">
            Enterprise Plan
          </p>
          <div class="flex items-start">
            <div>
              <span class="text-5xl">Custom</span>
              <span class="text-grey-400">
              </span>
            </div>
          </div>
          <ul
            class="flex flex-col gap-2 py-3 mt-3 border-t border-[#D6D6D6] flex-grow"
          >
            <li
              v-for="(item, index) in enterprisePlan"
              :key="index"
              class="flex items-center gap-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                  stroke="#616161"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-grey-400">{{ item }}</span>
            </li>
          </ul>
          <button
            class="bg-primary w-full text-white rounded-lg mt-10 text-center p-3"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
    <!-- FAQs section -->
    <section class="mt-32 flex xl:flex-row flex-col gap-12 md:px-20">
      <div>
        <div class="font-bold text-2xl md:text-4xl">FAQ's</div>
        <p class="text-grey-300 font-medium text-base mt-4">
          You can reach out to us at crminder@gmail.com
        </p>
      </div>
      <div class="flex-1">
        <FAQs :items="faqItems" />
      </div>
    </section>
  </Layout>
</template>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
