'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button, buttonVariants } from '../components/ui/button'


export default function Hero() {

  return (
    <div className="bg-white mx-auto z-10">
      
      <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden rounded-xl mb-4 before:absolute before:inset-0 before:bg-black/50 before:z-0 "
      style={{
        backgroundImage: `url('src/assets/pics/two-women-wearing-safety-glasses-standing-in-a-met-2023-11-27-05-15-15-utc.jpg')`, backgroundSize: 'cover',
   backgroundPosition: 'center',
     }}>
    
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 z[-10] transform-gpu overflow-hidden blur-3xl sm:-top-80" 
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', 
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff3a75] to-[#14cef3] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="relative z-10 text-white mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
          
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
            Gain Skills, Earn Income, and Grow Your Path Forward
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-100 sm:text-xl/8">
            We’re a skills-first platform offering paid apprenticeships to help you reach your potential. No resumes, no barriers—just real opportunities and a brighter future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="bg-lime-400 text-slate-900 text-lg hover:bg-lime-600">
              <a
                href="/signup"

              >
                Sign Up
              </a>
              </Button>
              
              <a href="/login" className="text-sm/6 font-semibold ">
                Or login if you have an account <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff3a75] to-[#14cef3] opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
