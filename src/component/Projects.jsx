// function Projects() {
//   return (
//     <section>
//       <h2>Projects</h2>

//       <div className="project-card">
//         <h3>Color Switcher</h3>
//         <p>
//           A React application that dynamically changes the background color 
//           based on user interaction. Built to practice state management 
//           and component re-rendering.
//         </p>
//         <a className="btn" href="https://your-live-link.vercel.app" target="_blank">
//           Live Demo
//         </a>
//         <a href="https://github.com/your-username/color-switcher" target="_blank">
//           GitHub
//         </a>
//       </div>

//     </section>
//   )
// }

// export default Projects


function Projects() {
  const projects = [
    {
      title: "Color Switcher",
      description: "A React app that dynamically changes background color.",
      live: "https://color-switcher.vercel.app",
      github: "https://github.com/your-username/color-switcher"
    },
    {
      title: "Weather App",
      description: "Fetches weather data using API and displays current weather.",
      live: "https://weather-app.vercel.app",
      github: "https://github.com/your-username/weather-app"
    },
    {
      title: "Blog Project",
      description: "A simple blog project built with React and Markdown posts.",
      live: "https://blog-project.vercel.app",
      github: "https://github.com/your-username/blog-project"
    }
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div className="project-card" key={i}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <a className="btn" href={p.live} target="_blank">Live Demo</a>
          <a href={p.github} target="_blank">GitHub</a>
        </div>
      ))}
    </section>
  )
}

export default Projects