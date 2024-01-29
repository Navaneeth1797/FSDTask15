// Importing necessary modules and components from React and react-router-dom
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All from "./Components/All";
import Fsd from "./Components/Fsd";
import Ds from "./Components/Ds";
import Cs from "./Components/Cs";
import Career from "./Components/Career";
// Main App component
function App() {
  // Sample data for different categories
  let data = [
    // ... (data array containing objects with information about articles)
    {
      title:
        "9 Important Things of Color Theory in UI Design That You Shouldn't Miss",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Important-Things-of-Color-Theory-in-UI-Design.webp",
      description:
        "In User Interface (UI) Design, nothing is co-incidental or meaningless. Whatever you do or add",
      source: "https://www.guvi.in/blog/color-theory-in-ui-design/",
    },
    {
      title: "UI/UX Designer Job Description: Know-It-All",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/UX-Designer-Job-Description_-Know-It-All.webp",
      description:
        "Have you ever been frustrated by shopping apps that make you wait and kill your",
      source: "https://www.guvi.in/blog/ui-ux-designer-job-description/",
    },
    {
      title: "Software Testing vs. Quality Assurance (QA)",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Software-Testing-vs.-Quality-Assurance-QA-01.png",
      description:
        "When it comes to making computer programs and apps, two important things are making sure",
      source: "https://www.guvi.in/blog/software-testing-vs-quality-assurance/",
    },
    {
      head: "fullstack",
      title: "Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      description:
        "When youre hiring a full-stack developer, what are the most important things you look for?",
      source:
        "https://www.guvi.in/blog/assessing-soft-skills-in-full-stack-developers/",
    },
    {
      head: "fullstack",
      title: "7 Best Full-Stack Development Online Courses [2024]",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      description:
        "Today's world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      source:
        "https://www.guvi.in/blog/best-full-stack-development-online-courses/",
    },
    {
      head: "fullstack",
      title: "Best Books to Learn Full-Stack Development",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      description:
        "Are you interested in becoming a full-stack developer but not sure where to start? In",
      source:
        "https://www.guvi.in/blog/best-books-to-learn-full-stack-development/",
    },
    {
      head: "fullstack",
      title: "Best Full-Stack Development Project Ideas in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      description:
        "When you give your resume to any potential recruiter, the first thing that they check",
      source: "https://www.guvi.in/blog/full-stack-development-project-ideas/",
    },
    {
      head: "fullstack",
      title:
        "The Ultimate Guide to Real-World Full-Stack Development Applications",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png",
      description:
        "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can",
      source:
        "https://www.guvi.in/blog/top-must-know-full-stack-development-applications/",
    },
    {
      head: "datascience",
      title: "Best Data Science Books to Learn in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      description:
        "Today, we're going to talk about something really cool: data science. It's all about using",
      source: "https://www.guvi.in/blog/data-science-books-to-learn/",
    },
    {
      head: "fullstack",
      title: "Top Differences: Full Stack Developer vs Software Engineer 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      description:
        "A Full Stack Developer is a tech all-rounder. They work on both the front and",
      source:
        "https://www.guvi.in/blog/full-stack-developer-vs-software-engineer/",
    },
    {
      head: "datascience",
      title: "Top Product-Based Companies for Data Scientists in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is",
      source:
        "https://www.guvi.in/blog/top-product-based-companies-for-data-scientists/",
    },
    {
      head: "datascience",
      title:
        "Extraordinary Data Science Projects for Beginners As Well as Veterans",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
      source: "https://www.guvi.in/blog/data-science-projects/",
    },
    {
      head: "datascience",
      title: "10 Best Data Science Online Courses for Beginners | 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners-768x384.webp",
      description:
        "In today's rapidly evolving digital landscape, Data Science has emerged as one of the most",
      source:
        "https://www.guvi.in/blog/best-data-science-courses-for-beginners/",
    },
    {
      head: "datascience",
      title:
        "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/must-watch-data-science-focused-youtube-channels-768x402.webp",
      description:
        "Data science has become one of the most sought-after skills in the current job market.",
      source:
        "https://www.guvi.in/blog/top-7-must-watch-data-science-youtube-channels/",
    },
    {
      head: "datascience",
      title: "Data Science Webinars and Workshops",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-768x402.webp",
      description:
        "In today's world, it's becoming increasingly important to be knowledgeable in the field of data",
      source: "https://www.guvi.in/blog/data-science-webinars-and-workshops/",
    },
    {
      head: "cybersecurity",
      title: "What Is Hacking? Types of Hacking & More",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      description:
        "Have you ever wondered what hacking is all about? It's a big deal in today's",
      source: "https://www.guvi.in/blog/what-is-hacking/",
    },
    {
      head: "cybersecurity",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      description:
        "n the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      source: "https://www.guvi.in/blog/top-non-coding-jobs-in-cybersecurity/",
    },
    {
      head: "cybersecurity",
      title:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      description:
        "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
      source: "https://www.guvi.in/blog/coding-for-cybersecurity/",
    },
    {
      head: "cybersecurity",
      title: "8 Different Types of Cybersecurity and Threats Involved",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-768x432.png",
      description:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
      source: "https://www.guvi.in/blog/types-of-cybersecurity/",
    },
    {
      head: "cybersecurity",
      title: "Top 7 Cyber Security Attacks in Real Life",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact-768x240.jpg",
      description:
        "Cyber security attacks are the type of actions that are designed to destroy, steal, modify",
      source: "https://www.guvi.in/blog/cyber-security-attacks-in-real-life/",
    },
    {
      head: "cybersecurity",
      title: "How Is Cyber Security Important To Our Lives?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png",
      description:
        "Cybersecurity is an exact solution that is sought either by a billionaire with a massive",
      source: "https://www.guvi.in/blog/why-should-you-learn-cyber-security/",
    },
    {
      head: "career",
      title: "A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/1-768x402.webp",
      description:
        "With the growing concerns of digital security increasing day by day, organizations turn to ethical",
      source: "https://www.guvi.in/blog/ethical-hacker-resume-tips/",
    },
    {
      head: "career",
      title: "Best Product-Based Companies for AI Engineers in 2024",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-Product-Based-Companies-for-AI-Engineers.png",
      description:
        "There was a time when AI was the future. Well, it has now become our",
      source:
        "https://www.guvi.in/blog/top-product-based-companies-for-ai-engineers/",
    },
    {
      head: "career",
      title: "What Are the Different Roles in a Product-Based Company?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Different-Roles-in-a-Product-Based-Company.webp",
      description:
        "As we go about our daily routines, we interact with different products that have become",
      source:
        "https://www.guvi.in/blog/different-roles-in-a-product-based-company/",
    },
    {
      head: "career",
      title: "Best 11 Product-Based Companies for Product Managers in India ",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
      description:
        "Who is a product manager? What are the best product-based companies for product managers in",
      source:
        "https://www.guvi.in/blog/product-based-companies-for-product-managers/",
    },
    {
      head: "career",
      title:
        "Product-based Company Vs Service-based Company: Which is Best Choice?",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-based-Company-Vs-Service-based-Company.webp",
      description:
        "Deciding between joining a product-based company vs a service-based company can be pretty challenging when",
      source:
        "https://www.guvi.in/blog/product-based-company-vs-service-based-company/",
    },
    {
      head: "career",
      title: "Top 10 Product-Based Companies in India",
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp",
      description:
        "The world of game development has been booming in recent years as the importance of",
      source:
        "https://www.guvi.in/blog/product-based-companies-for-game-developers/",
    },
  ];
  return (
    <>
      {/* Setting up React Router for navigation */}
      <BrowserRouter>
        {/* Including the Navbar component for navigation */}
        <Navbar />

        {/* Defining Routes for different sections of the application */}
        <Routes>
          {/* Route for displaying all articles */}
          <Route path="/all" element={<All data={data} />} />

          {/* Route for displaying fullstack development articles */}
          <Route path="/fullstack-development" element={<Fsd data={data} />} />

          {/* Route for displaying data science articles */}
          <Route path="/data-science" element={<Ds data={data} />} />

          {/* Route for displaying cyber security articles */}
          <Route path="/cyber-security" element={<Cs data={data} />} />

          {/* Route for displaying career-related articles */}
          <Route path="/career" element={<Career data={data} />} />

          {/* Default route, redirecting to the "all" section if the URL is not recognized */}
          <Route path="*" element={<Navigate to="/all" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
