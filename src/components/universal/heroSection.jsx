import React from 'react'
import image from './../../assets/heroImage.avif'

const HeroSection = () => {
    return (
        <div style={{'--image-url': `url(${image})`}} 
        className='hero min-h-screen bg-[image:var(--image-url)]'>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Pizza Time</h1>
                    <p className="mb-5">Order your favorite pizza online today!</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection