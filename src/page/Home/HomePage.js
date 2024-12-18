import React from 'react'
import { Hero } from "./components/Hero"
import { FeaturedProducts } from './components/FeaturedProducts'
import { Testimonials } from './components/Testimonials'
import { Faqs } from './components/Faqs'

export const HomePage = () => {


    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Testimonials />
            <Faqs />
        </main>
    )
}
