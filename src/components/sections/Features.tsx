import React from "react";
import FeatureCard from "../cards/FeatureCard";
import {
  faChain,
  faChartArea,
  faChartBar,
  faChartLine,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const featuresList = [
    // {
    //   title: "Data-Powered Web Solution",
    //   //desc: "Turning Data into Dynamic Web Experiences: We specialize in crafting web solutions that seamlessly integrate data, delivering interactive and insightful user experiences.",
    //   desc: "Turning Data into Dynamic Web Experiences: Crafting web solutions that seamlessly integrate with your data.",
    // },
    // {
    //   title: "Visualize Your Data",
    //   //desc: "Bringing Data to Life: Our expertise lies in crafting captivating data visualizations that make complex information easy to understand and appreciate.",
    //   desc: "Bringing Data to Life: Creating captivating data visualizations that simplify complex information.",
    // },
    // // {
    // //   title: "Real-time Data Mastery",
    // //   //desc: "Harnessing the Power of Data in Real-Time: We build responsive platforms that empower you to monitor, analyze, and act on data as it unfolds.",
    // //   desc: "Harnessing Real-Time Data Power: Building responsive platforms for monitoring and analyzing data in real-time.",
    // // },
    // {
    //   title: "Data-Enhanced Web Presence",
    //   //desc: "Elevating Your Web Presence with Data: Our data-enhanced websites engage and inform users, making your web presence truly impactful.",
    //   desc: "Elevating Web Presence with Data: Engaging and informing users with data-enhanced websites.",
    // },
    // {
    //   title: "Performance Optimization",
    //   //desc: "Fast, Flawless, and Functional: We optimize web applications for lightning-fast performance, ensuring an exceptional user experience.",
    //   desc: "Fast, Flawless Web Performance: Optimizing web applications for lightning-fast, user-friendly experiences.",
    // },
    // {
    //   title: "Insightful Data Dashboards",
    //   //desc: "Unveiling Insights at a Glance: We create interactive data dashboards that provide a clear, real-time view of your data, empowering decision-makers.",
    //   desc: "Clear Insights at a Glance: Designing interactive data dashboards for informed decision-making.",
    // },

    {
      icon: faChartBar,
      title: "Uncover Impactful Insights",
      desc: "Utilizing statistical modeling and data mining techniques to uncover trends, patterns and actionable insights from complex data.",
    },

    {
      icon: faDesktop,
      title: "Building Intuitive Interfaces",
      desc: "Developing responsive, user-friendly web applications and dashboards that bring data to life for users and stakeholders.",
    },

    {
      icon: faChartLine,
      title: "Telling Compelling Stories",
      desc: "Creating interactive data visualizations that intuitively communicate key information and insights to diverse audiences.",
    },

    {
      icon: faChain,
      title: "Seamless Data Connectivity",
      desc: "Integrating disparate data sources into cloud-based tools and applications for unified analytics and reporting.",
    },

    {
      icon: faChartArea,
      title: "Actionable Predictive Modeling",
      desc: "I build, evaluate and implement machine learning models to uncover predictive insights from data.",
    },
  ];

  return (
    <section id="features" className="pt-12">
      {/* <hr className="h-px max-w-screen-xl mx-auto bg-gray-200 border-0" /> */}
      <div className="max-w-screen-xl m-auto px-4 py-8 lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-primary-900 sm:text-4xl">
            What I Do
          </h2>
          <p
            className="mt-4 font-normal
            text-base
            sm:text-lg
          text-gray-500"
          >
            Empowering Data-Driven Web Solutions!
          </p>
        </div>
        <div
          className="flex flex-row flex-wrap  
        items-center justify-center
        xl:gap-12 lg:gap-12 gap-4"
        >
          {featuresList.map((items, index) => (
            <FeatureCard
              key={index}
              title={items.title}
              desc={items.desc}
              iconName={items.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
