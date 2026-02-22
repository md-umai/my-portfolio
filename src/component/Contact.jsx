// function Contact() {
//   return (
//     <section>
//       <h2>Contact</h2>

//       <p>
//         I'm currently open to junior frontend or full-stack opportunities.
//         Feel free to reach out 👇
//       </p>

//       <div style={{ marginTop: "20px" }}>
//         <p><strong>Email:</strong> Mdumairuk1@email.com</p>
//         <p><strong>Location:</strong> Manchester, UK</p>
//       </div>

//       <div style={{ marginTop: "20px" }}>
//         <a 
//           className="btn" 
//           href="mailto:Mdumairuk1@email.com"
//         >
//           Send Email
//         </a>

//         <a 
//           href="https://github.com/your-username" 
//           target="_blank"
//           style={{ marginLeft: "10px" }}
//         >
//           GitHub
//         </a>
//       </div>
//     </section>
//   )
// }

// export default Contact

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>I'm open to junior frontend or full-stack roles. Reach out 👇</p>
      <div style={{ marginTop: "20px" }}>
        <p><strong>Email:</strong> Mdumairuk1@gmail.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/your-link" target="_blank">View Profile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/your-username" target="_blank">View Profile</a></p>
        <p><strong>Location:</strong> United Kingdom</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <a className="btn" href="mailto:Mdumairuk1@gmail.com">Send Email</a>
      </div>
    </section>
  )
}

export default Contact