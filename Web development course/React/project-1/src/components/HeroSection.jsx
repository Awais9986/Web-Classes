function HeroSection({btn1Text, btn2Text}){
  return (
     <div className="hero-section">
              <div className="badge">
              Think about incorporating? <span>
                <svg width="16" height="16" fill="none"><path stroke="#1E1F25" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path></svg>
              </span>
            </div>

            <h1>Magically simplify accounting and taxes</h1>
            <p>Automated bookkeeping, effortless tax filing, real time insights. Set up in 10 mins. Back to building by 8:23pm.</p>
             <div className="btn-container">
              <button className='btn'>{btn1Text}</button>
              <button className='btn-secondary'>{btn2Text}
              <svg width="16" height="16" fill="none"><path stroke="#1E1F25" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path></svg>

              </button>
            </div>
            <p className="small-text">
              Currently for US-based Delaware C-Corps.


            </p>
            </div>

  )
}

export default HeroSection