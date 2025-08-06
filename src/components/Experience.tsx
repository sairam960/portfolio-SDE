"use client"
import { experiences } from '@/lib/data'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Experience() {
  return (
    <section id="experience" className="relative bg-white dark:bg-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-300 mb-8 text-center">
          Work Experience
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-16 text-center">
          My professional journey and the experiences that shaped my career in software development.
        </p>
        <div className="relative flex justify-center">
          {/* Animated Center Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 rounded-full z-0"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ minHeight: "100%" }}
          />
          <div className="w-full flex flex-col gap-16 z-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={exp.id} className="relative flex items-center w-full">
                  <div className={`flex-1 flex ${isLeft ? "justify-end pr-6" : "justify-start pl-6"} md:items-center`}>
                    {isLeft && (
                      <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 max-w-md"
                      >
                        <div className="flex flex-col items-end gap-2">
                          <Image
                            src={exp.image} // Add image field in data!
                            alt={exp.company + " logo"}
                            width={96}
                            height={96}
                            className="rounded-lg shadow-md mb-2"
                          />
                          <div className="w-full">
                            <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200">{exp.position}</h3>
                            <span className="text-primary-500 dark:text-primary-400">{exp.company}</span>
                            <div className="text-xs text-gray-400 mb-2">{exp.duration}</div>
                            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc pl-5 mb-2">
                              {exp.description.map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map(t => (
                                <span key={t} className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 px-2 py-0.5 rounded-full text-xs">{t}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  {/* Center dot */}
                  <div className="z-20 flex flex-col items-center">
                    <span className="w-7 h-7 rounded-full bg-white dark:bg-neutral-800 border-4 border-primary-500 flex items-center justify-center shadow-md text-primary-700 dark:text-primary-300 text-lg font-bold">
                      {exp.company[0]}
                    </span>
                  </div>
                  <div className={`flex-1 flex ${!isLeft ? "justify-start pl-6" : "justify-end pr-6"} md:items-center`}>
                    {!isLeft && (
                      <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 max-w-md"
                      >
                        <div className="flex flex-col items-start gap-2">
                          <Image
                            src={exp.image}
                            alt={exp.company + " logo"}
                            width={96}
                            height={96}
                            className="rounded-lg shadow-md mb-2"
                          />
                          <div className="w-full">
                            <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200">{exp.position}</h3>
                            <span className="text-primary-500 dark:text-primary-400">{exp.company}</span>
                            <div className="text-xs text-gray-400 mb-2">{exp.duration}</div>
                            <ul className="text-gray-700 dark:text-gray-300 text-sm list-disc pl-5 mb-2">
                              {exp.description.map((d, i) => (
                                <li key={i}>{d}</li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map(t => (
                                <span key={t} className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 px-2 py-0.5 rounded-full text-xs">{t}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
