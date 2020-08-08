import React from "react"
import { PageStyled } from "../utils"

export default function HomePage() {
  return (
    <PageStyled id="home-page">
      <div className="main-content">
        <Content />
      </div>
    </PageStyled>
  )
}

const Content = () => {
  return (
    <div className="content">
      <h1>Inicio</h1>
      <h2>Bienvenido</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet
        dolorum, a nostrum fugiat iusto perferendis voluptatem obcaecati
        cupiditate ab ad officiis sunt asperiores odio maiores tenetur id quam
        pariatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quaerat
        ex voluptates cupiditate eius ratione facilis incidunt veniam sint
        doloremque molestias laborum, suscipit excepturi, aspernatur id natus
        consectetur corrupti quibusdam!
      </p>
      <p>
        Perferendis maiores dicta sunt rem! Officiis enim voluptas dolores eum
        dolorum possimus nesciunt. Sequi et perspiciatis quidem architecto
        veniam? Porro id assumenda repudiandae corrupti sunt eligendi laboriosam
        reprehenderit, nobis dolor!
      </p>
      <p>
        Ratione, cumque unde esse quod blanditiis placeat sunt perspiciatis
        dolorem fugit vel pariatur mollitia ipsam. Nobis quam necessitatibus ex,
        impedit laborum dignissimos illo itaque porro alias vel. Vero, eaque
        sit.
      </p>
      <p>
        Magni similique consequatur laborum iste quas quidem, ipsum
        exercitationem dolore recusandae sint quo quisquam atque iusto, facere
        tenetur perferendis officia veniam sequi itaque vero velit minus error
        vitae quasi. Hic!
      </p>
    </div>
  )
}
