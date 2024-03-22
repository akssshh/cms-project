import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
       <div className="hero-center">
        <div className="hero-title">
            <h1>Contentful CMS</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas atque fugiat repellat nam eos in recusandae sed consectetur dolore tenetur delectus exercitationem accusantium sequi alias molestiae, quod a temporibus. Eos debitis perferendis vitae. Error numquam dolorum soluta, ipsum magni eligendi ducimus nemo consectetur neque reprehenderit. Explicabo ducimus debitis sit quos.</p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman and the browser" className='img' />
        </div>
       </div>
    </section>
  )
}

export default Hero