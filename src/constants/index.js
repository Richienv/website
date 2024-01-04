import { h } from "maath/dist/misc-19a3ec46.esm";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    python,
    ml,
    sql,
    docker,
    pandas,
    matplot,
    numpy,
    alvin,
    philbert,
    rangga,
    tableau,
    meta,
    starbucks,
    kambyan,
    tesla,
    shopify,
    fend, 
    allianz,
    carrent,
    jobit,
    tripguide,
    tiktokproject,
    hrproject,
    spotify,
    movie,
    google,
    uoi,
    loan,
    udemy, 
    threejs,
    statistic,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Engineer [ETL]",
      icon: web,
    },
    {
      title: "Data Analyst [Dashboard]",
      icon: mobile,
    },
    {
      title: "Data Scientist [ML]",
      icon: backend,
    },
    {
      title: "Web Developer [Frontend]",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "ml",
      icon: ml,
    },
    {
      name: "Statistic",
      icon: statistic,
    },
    {
      name: "tableau",
      icon: tableau,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "numpy",
      icon: numpy,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "matplot",
      icon: matplot,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "pandas",
      icon: pandas,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Engineer",
      company_name: "Kambyan Network",
      icon: kambyan,
      iconBg: "#E6DEDD",
      date: "July 2022 - Dec 2022",
      points: [
        "Set up a reliable data architecture for a web app, including organizing data, creating databases, APIs, and files.",
        "Led a project to combine data from different apps into one online database, making it easier to use and more efficient.",
        "Handling data in Cloud Storage, Cloud SQL, and BigQuery.",
        "Build a data pipeline using a combination of SQL, Python, and Google Cloud Platform tools.",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Kambyan Network",
      icon: kambyan,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Jun 2023",
      points: [
        "Engineered a predictive algorithm capable of forecasting tree health trajectory, leveraging geospatial data and environmental interactions.",
        "Developed an advanced analytics model to interpret drone-captured data for assessing and visualizing tree health, enhancing user-relevant insights.",
        "Designed and deployed interactive Tableau dashboards for visualizing complex tree health datasets, facilitating intuitive user engagement and data-driven decision-making.",
        "Utilized drone technology in combination with data analytics to detect environmental stress factors on trees, contributing to ecosystem preservation efforts.",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Fend Tech",
      icon: fend,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Jun 2023",
      points: [
        "Creating a visualisation of the model to see the accuracy, recall, and time from different ML Algoritihm.",
        "Create a data collection pipeline and a labeling automation using YOLO & Tenserflow",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Business Executive",
      company_name: "Allianz",
      icon: allianz,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
      points: [
        "Actively managed key client accounts, fostering strong relationships and delivering tailored solutions to meet unique needs, driving sustained sales growth and customer satisfaction.",
        "presenting products and innovative methodologies to clients, adeptly closing deals by effectively communicating value propositions and aligning offerings with client needs.",
        "Utilized sophisticated data visualization tools to track and present sales progress, methodologies, and outcomes, enabling informed decision-making and strategy refinement.",
        "Spearheaded innovative technology-driven strategies to boost sales performance, integrating cutting-edge tools and methodologies for optimizing team productivity.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        " Richie is outstanding data engineer with a keen attention to detail and an unwavering commitment.",
      name: "Alvin Yeoh",
      designation: "SE",
      company: "Mercedes-Benz",
      image: alvin,
    },
    {
      testimonial:
        "I've never met a co-worker who truly cares about their team success like Richie does.",
      name: "Philbert Yanzhe",
      designation: "SE",
      company: "Mercedes-Benz",
      image: philbert,
    },
    {
      testimonial:
        "The most fun and positive person I've ever worked with and impressed by his work ethic.",
      name: "Rangga Handitra",
      designation: "Data Scientist",
      company: "BCA",
      image: rangga,
    },
  ];
  
  const projects = [
    {
      name: "Tik-Tok Video Classification ",
      description:
        "Two tree-based classification models to predict on a held-out validation dataset. The project focus on Machine Learning and use the best recall score and provide executive summary.",
      tags: [
        {
          name: "EDA",
          color: "blue-text-gradient",
        },
        {
          name: "XGBoost",
          color: "green-text-gradient",
        },
        {
          name: "logisticRegression",
          color: "pink-text-gradient",
        },
      ],
      image: tiktokproject,
      source_code_link: "https://github.com/Richienv/TikTok-Project/blob/main/TikTok%20Videos%20Classification%20.ipynb",
    },
    {
      name: "Udemy Attendance Insights",
      description:
      "A static Python Visualization that combined Google Search data and a dataset from Kaggle  to draw insights about course attendance and content demand on the Udemy course hosting platform.",
      tags: [
        {
          name: "BigQuery",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Seaborn",
          color: "pink-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "brown-text-gradient",
        },
      ],
      image: udemy,
      source_code_link: "https://github.com/richiekidnovell/Udemy/blob/main/richie_python_notebook/data_analytic.ipynb",
    },
    {
      name: "Fintech Loan Risk Prediction",
      description:
        "Developed loan risk predictive model with a large and messy dataset, we built a precise logistic regression model with a 72% accuracy rate, focus on handling missing data.",
      tags: [
        {
          name: "EDA",
          color: "blue-text-gradient",
        },
        {
          name: "LogisticRegression",
          color: "green-text-gradient",
        },
        {
          name: "Evaluation",
          color: "pink-text-gradient",
        },
      ],
      image: loan,
      source_code_link: "https://github.com/Richienv/HR-Employee-Project/blob/main/HR%20Employee%20Selection%20Model%20copy.ipynb",
    },
    {
      name: "HR Employee Satisfaction Prediction Model",
      description:
        "determine if the song will be a hit or before promoting it to user. That system will definetely help the platform to be more reliable to it's user.",
      tags: [
        {
          name: "Logistic Regresison",
          color: "blue-text-gradient",
        },
        {
          name: "Decision Tree",
          color: "green-text-gradient",
        },
        {
          name: "Random Forest",
          color: "pink-text-gradient",
        },
      ],
      image: hrproject,
      source_code_link: "https://github.com/Richienv/spotify_project/blob/main/spotify.ipynb",
    },
    {
      name: "Spotify Song Popularity Prediction Model",
      description:
        "Develop 2 ML algorithms, including XGBoost, Logistic Regression, for Song Popularity Prediction withresults indicate XGBoost as a promising approach due to its performance in classification.",
      tags: [
        {
          name: "Logistic Regresison",
          color: "blue-text-gradient",
        },
        {
          name: "XGBOOST",
          color: "green-text-gradient",
        },
        {
          name: "Random Forest",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/Richienv/HR-Employee-Project/blob/main/HR%20Employee%20Selection%20Model%20copy.ipynb",
    },
    {
      name: "Movie Recocommendation System",
      description:
        "Demonstrated its ability to predict user ratings for movies with a satisfactory level of accuracy. The system is designed to be dynamic, improving over time as it learns from new user data.",
      tags: [
        {
          name: "cosine_similarity",
          color: "blue-text-gradient",
        },
        {
          name: "MSE",
          color: "green-text-gradient",
        },
        {
          name: "RMSE",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/Richienv/movie_recommendation/blob/main/reccomender.ipynb",
    },
  ];
  
  const awards = [
    {
      name: "Advanced Data Analytics Professional Certificate  [Google]",
      description:
        "Completed Google Data Analytics Certification, gaining skills in ethical data practices, Python programming, statistical analysis, EDA, machine learning, including regression, classification algorithms, and tree-based models like Random Forest and Boosting.",
      tags: [
        {
          name: "Data Ethics",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Evaluation Metric",
          color: "pink-text-gradient",
        },
        {
          name: "Validation",
          color: "purple-text-gradient",
        },
        {
          name: "Statistical Analysis",
          color: "green-text-gradient",
        },
        {
          name: "Boosting",
          color: "blue-text-gradient",
        },
        {
          name: "Sampling",
          color: "pink-text-gradient",
        },
        {
          name: "EDA",
          color: "purple-text-gradient",
        },
        {
          name: "Confidence Interval",
          color: "blue-text-gradient",
        },
        {
          name: "Classifier",
          color: "green-text-gradient",
        },
        {
          name: "Encoding",
          color: "purple-text-gradient",
        },
        {
          name: "Probability Distribution",
          color: "blue-text-gradient",
        },
        {
          name: "Variable Relationship",
          color: "pink-text-gradient",
        },
      ],
      image: google,
      source_code_link: "https://coursera.org/share/ba273acfff52cf33d90b92f63087906e",
    },
    {
      name: "Text Retrieval & Search Engine [University Of Illinois]",
      description:
      "Certified in Text Retrieval & Search Engine techniques, I specialize in NLP, search algorithms, Inverted Indexes, and Vector Space Models. Proficient in search performance evaluation and advanced Web Search technologies, including collaborative filtering.",
      tags: [
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "Text Access",
          color: "purple-text-gradient",
        },
        {
          name: "Vector Space Model",
          color: "blue-text-gradient",
        },
        {
          name: "Fast Search",
          color: "pink-text-gradient",
        },
        {
          name: "Inverted Index",
          color: "purple-text-gradient",
        },
        {
          name: "Query Likelihood Retrieval",
          color: "blue-text-gradient",
        },
        {
          name: "Multiple Levels Judgement",
          color: "pink-text-gradient",
        },
        {
          name: "Thresehold Learning",
          color: "purple-text-gradient",
        },
        {
          name: "Feedback System",
          color: "blue-text-gradient",
        },
        {
          name: "BM25",
          color: "blue-text-gradient",
        },
        {
          name: "Transformer",
          color: "pink-text-gradient",
        },
      ],
      image: uoi,
      source_code_link: "https://coursera.org/share/ab8075903b53facc20dd834ab947b009",
    },
  
  ];

  export { services, technologies, experiences, testimonials, projects, awards };