import resume from './resume.png';
import crypto from './crypto.png';
import vtbif from './vtbif.png';
import github from './github.png';
import nlpres from './nlpres.png';
import emotion from './emotion.jpeg';
import movie from './movie.jpeg'
const ProjectData = [
    
    {
      title: 'Resume Maker',
      desc: 'A Dynamic Resume Generating website made with ReactJS. Feature include Local Storage System, that saves your data even on page refresh.',
      img: resume,
      link: 'https://github.com/Balaji91221/resumer-builder',
      tags: ['React', 'Redux'],
      featured: 'ResumeBulder',
      category: ['Web', 'React']
    },
    {
      title: 'CryptoWorld',
      desc: 'Cryptoworld is a web app that helps user to see price with historical chart and news of cryptocurrency',
      img: crypto,
      link: 'https://github.com/Balaji91221/cryptoworld-react-app-master',
      tags: ['React', 'Redux Toolkit'],
      featured: null,
      category: ['Web', 'React']
    },
    {
      title: 'Github-User-Finder',
      desc: 'A React app for fetching GitHub user info with Auth0 authentication, Material-UI, React Google Charts, toast notifications, and React Router.',
      img: github,
      link: 'https://github.com/Balaji91221/Github-User-Fider',
      tags: ['React', 'Oauth','Material UI'],
      featured: null,
      category: ['Web', 'React']
    },
    {
      title: 'VTBIF',
      desc: 'A platform showcasing the Vitap Business Incubation and Foundation(VT-BIF), supporting tech startups with resources. ',
      img: vtbif,
      link: 'https://github.com/Balaji91221/vtbif',
      tags: ['React', 'bootstrap','Flowbit UI'],
      featured: 'VTBIF',
      category: ['Web', 'React']
    },
    {
      title: 'Resume Screening App',
      desc: ' This is a web application designed to automate the process of screening resumes using Natural Language Processing (NLP) techniques. The app predicts the category of a resume based on its content, allowing recruiters to quickly filter through large numbers of resumes. ',
      img: nlpres,
      link: 'https://github.com/Balaji91221/resume-screening-app',
      tags: ['Python', 'NLP',],
      featured: null,
      category: ['ML/NLP/DL','Python']
    },
    {
      title: 'Text-based Emotion Detection',
      desc: 'This project aims to classify the emotions expressed in text data using machine learning techniques. The dataset contains text samples labeled with emotions such as joy, sadness, fear, anger, surprise, neutral, disgust, and shame.',
      img: emotion,
      link: 'https://github.com/Balaji91221/emotion-based-text-classifier',
      tags: ['Python', 'NLP',],
      featured: null,
      category: ['ML/NLP/DL','Python']
    },
    {
      title: 'Movies Recommder System',
      desc: 'Movie Recommendation System! This project, developed using Streamlit, pandas, and the Movie Database (TMDb) API, offers users personalized movie recommendations based on their preferences.',
      img: movie,
      link: 'https://github.com/Balaji91221/movies-recommder-system',
      tags: ['Python', 'NLP',],
      featured: null,
      category: ['ML/NLP/DL','Python']
    },
  ]


export default ProjectData

export{}

