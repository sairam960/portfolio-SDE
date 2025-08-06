"use client"

import { experiences } from '@/lib/data'
import { motion } from 'framer-motion'

/**
 * Accessible vertical timeline for experience section.
 */
export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-black py-16">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-300 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
        >
          Work Experience
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          My professional journey and the experiences that shaped my career in software development.
        </motion.p>
        <ol className="relative border-l-4 border-primary-500 dark:border-primary-700">
          {experiences.map((exp, idx) => (
            <motion.li
              key={exp.id}
              className="mb-14 ml-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Dot */}
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-primary-500 dark:bg-primary-700 rounded-full ring-4 ring-white dark:ring-black shadow-lg">
                <span className="text-lg font-bold text-white dark:text-primary-200">{exp.company[0]}</span>
              </span>

              <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-xl shadow-soft border border-gray-200 dark:border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-primary-800 dark:text-primary-200">
                      {exp.position} <span className="text-gray-500 font-normal">· {exp.company}</span>
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.duration}</span>
                </div>
                <ul className="mt-4 mb-3 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 rounded-full bg-primary-400 inline-block" />
                      <span className="text-gray-800 dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
