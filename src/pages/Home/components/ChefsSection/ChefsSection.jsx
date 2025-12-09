import React from 'react'
import styles from './chefsSection.module.css'

const ChefsSection = () => {
  return (
    <section className={styles.section} >
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 id="chefs-title" className={styles.title}>Little Lemon</h1>
          <p className={styles.description}>
            Behind every exquisite dish at Little Lemon stands a team of culinary artists. 
            Our chefs are the heart and soul of our kitchen, blending years of international 
            expertise with a genuine passion for creating memorable experiences. They meticulously 
            source the freshest local ingredients and infuse them with innovative techniques, 
            transforming each plate into a masterpiece. For them, cooking is not just a 
            profession—it's a lifelong dedication to delighting your senses and celebrating 
            the art of flavor.
          </p>
        </div>
        <div className={styles.images}>
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
            alt="Chef preparing food in the kitchen" 
            className={`${styles.chefImg} ${styles.chefImgLeft}`} 
          />
          <img 
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
            alt="Chef presenting a beautifully plated dish" 
            className={`${styles.chefImg} ${styles.chefImgRight}`} 
          />
        </div>
      </div>
    </section>
  )
}

export default ChefsSection