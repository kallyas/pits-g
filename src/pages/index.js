import { ThemeProvider } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { graphql, withPrefix, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import * as media from "../style/media";
import * as colors from "../style/colors";
import * as fonts from "../style/fonts";
import { track, plan, hire, themes } from "../style/themes";
import * as text from "../ui/text";
import { Brands } from "../ui/brands";
import * as Button from "../ui/button";
import * as List from "../ui/list";
import ImageText from "../ui/card/ImageText";
import { SectionBlock } from "../ui/section/SectionBlock";
import { LayoutGlobal } from "../components/layouts/LayoutGlobal";
import { Carousel } from "../ui/carousel/Carousel";
import { Hire, Plan, Track } from "../ui/logos";

// markup
const IndexPage = () => {
  console.log(typeof themes);
  return (
    <LayoutGlobal
      title={"Pits Inc"}
      description={
        "We take the stress out of time tracking, project-planning, and hiring. Designed by and for teams that work from anywhere."
      }
      // ogImage={require('assets/toggl-global-main.jpg').default}
    >
      <Hero background={colors.darkPurple}>
        <ProductCardGrid>
          <HeroTitle>
            <text.H1 color={colors.yellow}>
              Meet P I T S. Three products;{" "}
              <Link to="/mission/">
                <H1Rotalic>One</H1Rotalic> mission
              </Link>
            </text.H1>
            <text.H4>
              We build work tools to elevate productivity and eliminate stress.
            </text.H4>
          </HeroTitle>

          <ThemeProvider theme={track}>
            <ProductCardTrack>
              <ProductCardTitle>
                {/* <Track /> */}
                <text.H2 size="small" color={colors.darkPurple}>
                  Effortless time tracking and reporting
                </text.H2>
                <text.P2 color={colors.fadedPurple}>
                  Save time and money with the time tracker trusted by more than
                  70,000 organizations.
                </text.P2>

                <StaticImage
                  formats={["auto", "webp", "avif"]}
                  src={"./assets/icon-toggltrack.png"}
                  alt={"Toggl Track icon"}
                  width={95}
                  placeholder="none"
                  objectFit="contain"
                />
              </ProductCardTitle>
              <ProductCardButtons>
                <Button.Primary as={Link} to="/track/signup/">
                  Start tracking for free
                </Button.Primary>
                <Button.Secondary
                  as={Link}
                  to="/track/"
                  caretDirection="right"
                  color={colors.pink80}
                >
                  Or explore Toggl Track
                </Button.Secondary>
              </ProductCardButtons>

              <ProductQuote>
                <text.P2 color={colors.fadedPurple}>
                  “Toggl Track is really good for me, because at the end of the
                  day, I can say how much time I spent on each area of my life.”
                </text.P2>
                <text.P3 color={colors.fadedPurpleAlt}>
                  — Serena Williams, Professional Tennis Icon
                </text.P3>
              </ProductQuote>
            </ProductCardTrack>
          </ThemeProvider>

          <ThemeProvider theme={plan}>
            <ProductCardPlan>
              <ProductCardTitle>
                {/* <Plan /> */}
                <text.H2 size="small">Simple team and project planning</text.H2>
                <text.P2>
                  Plan, track, and deliver work on time without burnout.
                </text.P2>

                <StaticImage
                  formats={["auto", "webp", "avif"]}
                  src={"./assets/icon-togglplan.png"}
                  alt={"Toggl Plan icon"}
                  width={95}
                  placeholder="none"
                  objectFit="contain"
                />
              </ProductCardTitle>
              <ProductCardButtons>
                <Button.Primary as="a" href="https://plan.toggl.com/#signup">
                  Start planning for free
                </Button.Primary>
                <Button.Secondary
                  as="a"
                  href={withPrefix("/plan")}
                  caretDirection="right"
                  color={colors.violet60}
                >
                  Or explore Toggl Plan
                </Button.Secondary>
              </ProductCardButtons>
            </ProductCardPlan>
          </ThemeProvider>

          <ThemeProvider theme={hire}>
            <ProductCardHire>
              <ProductCardTitle>
                {/* <Hire /> */}
                <text.H2 size="small">
                  Modern candidate screening and skills testing
                </text.H2>
                <text.P2>
                  Evaluate job applicants on their skills, hire top talent
                  effortlessly.
                </text.P2>

                <StaticImage
                  formats={["auto", "webp", "avif"]}
                  src={"./assets/icon-togglhire.png"}
                  alt={"Toggl Hire icon"}
                  width={95}
                  placeholder="none"
                  objectFit="contain"
                />
              </ProductCardTitle>
              <ProductCardButtons>
                <Button.Primary
                  as="a"
                  href="https://hire.toggl.com/admin/signup"
                >
                  Start hiring for free
                </Button.Primary>
                <Button.Secondary
                  as="a"
                  href={withPrefix("/hire")}
                  caretDirection="right"
                  color={colors.orange60}
                >
                  Or explore Toggl Hire
                </Button.Secondary>
              </ProductCardButtons>
            </ProductCardHire>
          </ThemeProvider>
        </ProductCardGrid>
      </Hero>

      <SocialProof background={colors.darkPurple}>
        <text.UppercaseOneLiner color={colors.almostWhite}>
          Trusted by over 6 million users across 120 countries
        </text.UppercaseOneLiner>
        <Brands
          image={
            <StaticImage
              src="./assets/logos-index.png"
              alt="Company logos: Amazon, Uber, Spotify, LinkedIn, AirBNB, Buzzfeed, Netflix, Wise"
              width={1030}
              formats={["auto", "webp", "avif"]}
              placeholder="none"
              objectFit="contain"
            />
          }
          mobileImage={
            <StaticImage
              src="./assets/logos-mobile-index.png"
              alt="Company logos: Amazon, Uber, Spotify, LinkedIn, AirBNB, Buzzfeed, Netflix, Wise"
              width={450}
              formats={["auto", "webp", "avif"]}
              placeholder="none"
              objectFit="contain"
            />
          }
        />
        <StaticImage
          src="./assets/badges.png"
          alt="Awards Toggl has gained: GetApp Category Leaders 2021, Top 100 Software Products, Top 50 Products for HR"
          width={480}
          formats={["auto", "webp", "avif"]}
          placeholder="none"
          objectFit="contain"
        />
      </SocialProof>

      <BrandDetails />

      <CarouselSection background={colors.fadedPurpleAlt}>
        <CarouselWrapper>
          <Carousel
            title="We want to help you run a better business"
            subtitle={
              <React.Fragment>
                While there's no one right way to do things, there are many
                tried-and-tested ways. Check out our{" "}
                <Link to="/track/productivity-resources/">resources</Link>, our{" "}
                <Link to="/fun-and-games/">games</Link>, and our{" "}
                <a href={withPrefix("/blog/")}>blog</a> for tips and tricks on
                better work.
              </React.Fragment>
            }
          >
            <Link to="/track/time-management/">
              <ImageText
                title="Time Management Hub"
                paragraph="Our guide to everything you need to know about time management"
                image={
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src={"../assets/resource-time-management-hub.jpg"}
                    alt={"Time Management Hub by Toggl Track"}
                    width={670}
                    sizes="(max-width: 490px) 360px, (min-width: 800px) 360px, 670px"
                    placeholder="none"
                  />
                }
              />
            </Link>

            <a href={withPrefix("/plan/blueprint-the-expectations-game/index")}>
              <ImageText
                title="The Expectations Game"
                paragraph="The secret behind any happy collaboration usually lies in the skill of managing expectations"
                image={
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="./assets/resource-blueprint.jpg"
                    alt={"The Expectations Game Blueprint"}
                    width={670}
                    sizes="(max-width: 490px) 360px, (min-width: 800px) 360px, 670px"
                    placeholder="none"
                  />
                }
              />
            </a>

            <a href="https://ebook.hire.toggl.com/">
              <ImageText
                title="Hiring Remotely"
                paragraph="Hiring Remotely: A Practical Guide"
                image={
                  <StaticImage
                    formats={["auto", "webp", "avif"]}
                    src="./assets/resource-hiring-remotely.jpg"
                    alt={"Hiring Remotely Online Guide"}
                    width={670}
                    sizes="(max-width: 490px) 360px, (min-width: 800px) 360px, 670px"
                    placeholder="none"
                  />
                }
              />
            </a>
          </Carousel>
        </CarouselWrapper>
      </CarouselSection>

      <SectionBlock center background={colors.fadedPurple}>
        <MissionSection>
          <text.H2 color={colors.lightBeige}>
            Everyone works <Rotalic>differently</Rotalic>.
          </text.H2>
          <text.P2 color={colors.lightBeige}>
            It is why our fully-remote team is commited to flexible work and to
            building tools that fit into any workflow.
          </text.P2>
          <Button.Primary as={Link} to="/mission/">
            Read about Toggl's mission
          </Button.Primary>
        </MissionSection>
      </SectionBlock>
    </LayoutGlobal>
  );
};

const BrandDetails = () => {
  const [selectedTab, selectTab] = React.useState("track");
  const activateTrack = React.useCallback(() => selectTab("track"), []);
  const activatePlan = React.useCallback(() => selectTab("plan"), []);
  const activateHire = React.useCallback(() => selectTab("hire"), []);

  return (
    <ProductDetails background={colors.lightBeige}>
      <ThemeProvider
        theme={
          selectedTab === "track" ? track : selectTab === "hire" ? hire : plan
        }
      >
        <Tabs>
          <Tab active={selectedTab === "track"}>
            <button onClick={activateTrack}>Toggl Track</button>
          </Tab>
          <Tab active={selectedTab === "plan"}>
            <button onClick={activatePlan}>Toggl Plan</button>
          </Tab>
          <Tab active={selectedTab === "hire"}>
            <button onClick={activateHire}>Toggl Hire</button>
          </Tab>
        </Tabs>

        {selectedTab === "track" && (
          <TabItem>
            <TabItemText>
              <LogoWrapper>
                <Link to={"/track/"}>
                  <Track />
                </Link>
              </LogoWrapper>
              <text.P2 color={colors.darkPurple}>
                Voted the top time tracking software for individuals and
                organizations
              </text.P2>
              <BenefitList>
                <List.CheckItem>
                  Track project and client profitability with detailed time
                  reporting.
                </List.CheckItem>
                <List.CheckItem>
                  Fits seamlessly with your existing workflow thanks to 100+
                  integrations.
                </List.CheckItem>
                <List.CheckItem>
                  Catch team burnout before it's too late.
                </List.CheckItem>
              </BenefitList>
              <Button.Primary as={Link} to="/track/">
                Explore Toggl Track
              </Button.Primary>
              <StaticImage
                formats={["auto", "webp", "avif"]}
                src={"./assets/badge-track.png"}
                alt={"Awards and ratings that Toggl Track has received"}
                height={105}
                placeholder="none"
                objectFit="contain"
                objectPosition="left"
              />
            </TabItemText>
            <TabItemQuote>
              <StaticImage
                src="../assets/cs-team-sweatandco.jpg"
                alt="Photo of a Sweat+Co team member with a dog"
                width={550}
                height={300}
                formats={["auto", "webp", "avif"]}
                objectFit="cover"
              />
              <Quote>
                <h5>
                  “Toggl Track <Rotalic>increased our profitability</Rotalic> by
                  at least 20%. We found out where the team was spending too
                  much time on clients.”
                </h5>
                <text.P3 color={colors.fadedPurple}>
                  —{" "}
                  <Link to="/track/customers/mister-sweat/">
                    Sweat+Co, Public Relations Agency
                  </Link>
                </text.P3>
              </Quote>
            </TabItemQuote>
          </TabItem>
        )}

        {selectedTab === "plan" && (
          <TabItem>
            <TabItemText>
              <LogoWrapper>
                <Link to={"/plan/"}>
                  <Plan />
                </Link>
              </LogoWrapper>
              <text.P2 color={colors.darkPurple}>
                Simple, visual timelines for project teams to plan and get work
                done
              </text.P2>
              <BenefitList>
                <List.CheckItem>
                  Schedule, collaborate, and get projects done without the
                  last-minute rush.
                </List.CheckItem>
                <List.CheckItem>
                  Visualize and distribute work efficiently across your team to
                  avoid burnout.
                </List.CheckItem>
                <List.CheckItem>
                  Stay on top of work with a clear overview of your team's
                  schedule.
                </List.CheckItem>
              </BenefitList>
              <Button.Primary as={Link} to="/plan/">
                Explore Toggl Plan
              </Button.Primary>

              <StaticImage
                formats={["auto", "webp", "avif"]}
                // src={'./assets/badge-plan.png'}
                alt={"Awards and ratings that Toggl Plan has received"}
                height={93}
                placeholder="none"
                objectFit="contain"
                objectPosition="left"
              />
            </TabItemText>
            <TabItemQuote>
              <StaticImage
                src="./assets/case-study-plan.jpg"
                alt="Profile photo of Pärtel Vurma, CEO of design studio Velvet"
                width={550}
                height={300}
                formats={["auto", "webp", "avif"]}
                objectFit="cover"
              />
              <Quote>
                <h5>
                  “Excel was clunky, complicated and didn’t update in real-time.
                  With Toggl Plan’s shared timelines, everyone is{" "}
                  <Rotalic>on the same page</Rotalic> and no one is overwhelmed
                  even when juggling several projects at once.”
                </h5>
                <text.P3 color={colors.fadedPurple}>
                  —{" "}
                  <a href={withPrefix("/plan/customer-stories/buzzfeed")}>
                    BuzzFeed, Digital Media Company
                  </a>
                </text.P3>
              </Quote>
            </TabItemQuote>
          </TabItem>
        )}

        {selectedTab === "hire" && (
          <TabItem>
            <TabItemText>
              <LogoWrapper>
                <Link to={"/hire/"}>
                  <Hire />
                </Link>
              </LogoWrapper>
              <text.P2 color={colors.darkPurple}>
                Laser-focused skills testing to help you hire smarter, faster,
                fairer
              </text.P2>
              <BenefitList>
                <List.CheckItem>
                  Automate hours of mindless CV screening by switching to skills
                  tests.
                </List.CheckItem>
                <List.CheckItem>
                  Easily identify candidates with the right skillsets to avoid
                  bad hires.
                </List.CheckItem>
                <List.CheckItem>
                  Guarantee positive candidate experience with instant feedback.
                </List.CheckItem>
              </BenefitList>
              <Button.Primary as={Link} to="/hire/">
                Explore Toggl Hire
              </Button.Primary>

              <StaticImage
                formats={["auto", "webp", "avif"]}
                src={"./assets/badge-hire.png"}
                alt={"Awards and ratings that Toggl Hire has received"}
                height={55}
                placeholder="none"
                objectFit="contain"
                objectPosition="left"
              />
            </TabItemText>
            <TabItemQuote>
              <StaticImage
                src="./assets/case-study-hire.jpg"
                alt="Profile photo of Emil, Head of International Sales at Listonic"
                width={550}
                height={300}
                formats={["auto", "webp", "avif"]}
                objectFit="cover"
              />
              <Quote>
                <h5>
                  “Toggl Hire helped us quickly test attitude and skills before
                  even talking to candidates. This greatly improved our process
                  and made us confident that we always chose the{" "}
                  <Rotalic>best person</Rotalic> for the job.”
                </h5>
                <text.P3 color={colors.fadedPurple}>
                  —{" "}
                  <a
                    href={withPrefix(
                      "/hire/customer-story/listonic-masters-unbiased-hiring"
                    )}
                  >
                    Listonic, Shopping List App
                  </a>
                </text.P3>
              </Quote>
            </TabItemQuote>
          </TabItem>
        )}
      </ThemeProvider>
    </ProductDetails>
  );
};

const Hero = styled(SectionBlock)`
  overflow: hidden;
`;

const HeroTitle = styled.div`
  color: ${(p) => p.theme.primary};
  margin: 70px 0 30px;
  width: 95%;
  h1 {
    line-height: 1.3;
    font-size: clamp(5rem * 0.45, 4.8vw, 4.5rem);
  }
  h4 {
    margin: 20px 0 10px;
    width: 90%;
  }
  a {
    color: ${colors.yellow};
    &:hover {
      font-family: ${fonts.gtHaptikMediumRotalic};
      color: ${colors.almostWhite};
    }
  }
`;

const H1Rotalic = styled.span`
  font-family: ${fonts.gtHaptikMediumRotalic};
  color: ${colors.almostWhite};
`;

const ProductCardGrid = styled.div`
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }
`;

const ProductCard = styled.div`
  background: ${colors.fadedPurple};
  position: relative;
  align-self: start;
  margin: 30px 0;
  p {
    font-size: 18px;
  }
  ${media.mq[0]} {
    padding: 25px;
  }
  ${media.mq[1]} {
    padding: 45px;
    &::after {
      position: absolute;
      transform: scale(0.9);
      width: 70px;
      z-index: 10;
    }
  }
`;

const ProductQuote = styled.div`
  p:nth-of-type(1) {
    font-family: ${fonts.gtHaptikMedium};
    margin: 40px 0 10px;
    ${media.mq[1]} {
      margin-top: 50px;
    }
  }
  p:nth-of-type(2) {
    font-size: 14px;
  }
`;

const ProductCardHire = styled(ProductCard)`
  ${media.mq[1]} {
    &::after {
      bottom: 5px;
      right: -50px;
    }
  }
  @media (min-width: 1100px) {
    margin-top: -20px;
  }
`;
const ProductCardPlan = styled(ProductCard)`
  @media (min-width: 1100px) {
    &::after {
      top: 20px;
      right: -20px;
    }
    margin-top: -160px;
  }
`;
const ProductCardTrack = styled(ProductCard)`
  background: ${colors.beige};
  ${media.mq[1]} {
    &::after {
      width: 70px;
      top: -60px;
      right: -50px;
    }
  }
  @media (min-width: 1100px) {
    margin-top: 120px;
  }
`;

const ProductCardTitle = styled.div`
  h2 {
    margin: 15px 0 10px;
    ${text.heading3};
  }

  ${media.mq[0]} {
    display: grid;
    grid-template-columns: 1fr 45px;
    column-gap: 20px;
    svg {
      height: 25px;
      margin-top: 10px;
    }
    .gatsby-image-wrapper {
      grid-row: 1;
      grid-column: 2;
      align-self: start;
    }
    h1,
    p {
      grid-column: 1 / -1;
    }
  }
  @media (min-width: 500px) {
    grid-template-columns: 1fr 65px;
    .gatsby-image-wrapper {
      grid-row: 1 / 4;
    }
    h1,
    p {
      grid-column: 1 / 2;
    }
    svg {
      height: 40px;
      margin-top: 0;
    }
  }
  ${media.mq[1]} {
    grid-template-columns: 1fr 85px;
  }
`;

const ProductCardButtons = styled.div`
  margin-top: 15px;
  a {
    margin: 25px auto 10px;
    @media (min-width: 500px) {
      display: inline-flex;
      margin: 10px 20px 0 0;
    }
  }
`;

const SocialProof = styled(SectionBlock)`
  text-align: center;
  padding-top: 0 !important;
  p {
    margin-bottom: 25px;
  }
  .gatsby-image-wrapper {
    margin: 20px auto;
    width: 100%;
    max-width: 1050px;
  }
`;

const LogoWrapper = styled.div`
  svg {
    height: 30px;
    ${media.mq[1]} {
      height: 40px;
    }
  }
`;

const Rotalic = styled.span`
  font-family: ${fonts.gtHaptikMediumRotalic};
  color: ${(p) => p.theme.primary};
`;

const ProductDetails = styled(SectionBlock)`
  padding-top: 30px !important;
  ${media.mq[1]} {
    padding: 30px 50px 50px;
  }
  ${media.mq[2]} {
    padding-bottom: 75px;
  }
  > div {
    max-width: calc(1200px - 40px);
  }
`;

const Tab = styled.li`
  flex: auto;
  text-align: center;
  list-style: none;
  border-bottom: 2px solid;
  ${text.defaultText};
  ${media.mq[1]} {
    flex: 1;
    ${text.heading4};
  }
  ${(p) => p.active && `color: ${p.theme.primary};`}

  button {
    padding: 15px;
    cursor: pointer;
    color: inherit;
    background: none;
    border: none;
    outline: none;
    height: 100%;
    width: 100%;
  }
`;

const Tabs = styled.ul`
  display: flex;
  margin: 0 0 30px;
  padding: 0;
  color: ${colors.darkPurple};
`;

const TabItem = styled.div`
  color: ${colors.darkPurple};
  ${media.mq[1]} {
    display: flex;
  }
  .gatsby-image-wrapper {
    width: 100%;
    margin: 40px 0 20px;
  }
`;

const TabItemText = styled.div`
  li {
    ${text.paragraph2};
    font-size: 18px;
  }
  p {
    margin: 15px 0 25px;
    font-family: ${fonts.gtHaptikMedium};
    font-size: 18px;
  }
  ${Button.Primary} {
    display: inline-flex;
  }
  ${media.mq[1]} {
    padding: 30px 60px 0 0;
    flex: 1.5;
  }
  ${media.mq[2]} {
    flex: 1.3;
  }
`;

const TabItemQuote = styled.div`
  ${media.mq[1]} {
    flex: 1;
  }
`;

const BenefitList = styled.ul`
  padding-left: 0;
  margin: 20px 0 30px;
  ${media.mq[1]} {
    margin-top: 30px;
  }
  li {
    margin-bottom: 5px !important;
  }
  svg path {
    fill: ${(p) => p.theme.primary};
    stroke: ${(p) => p.theme.primary};
  }
`;

const Quote = styled.div`
  h5 {
    ${text.defaultText};
    font-size: 1.3rem;
    line-height: 1.35;
    color: ${colors.darkPurple};
  }
  p {
    text-align: right;
    margin-top: 15px;
    a {
      color: ${colors.darkPurple70};
      text-decoration: underline;
      &:hover {
        color: ${(p) => p.theme.primary};
      }
    }
  }
`;

const CarouselWrapper = styled.div`
  padding: 20px 0;
  ${media.mq[1]} {
    padding-left: 20px;
  }
`;

const CarouselSection = styled(SectionBlock)`
  overflow: hidden;
  padding-right: 0 !important;
`;

const MissionSection = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px 0;
  h2 {
    margin-bottom: 15px;
  }
  a {
    margin: 30px auto 0;
    width: max-content;
  }
`;
export default IndexPage;
