'use client';

import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: "Sitecore Certification",
    slug: "sitecore-certification",
    image: "https://cdn.shopaccino.com/igmguru/categories/sitecore-developer-training-146443588315912_s.png?v=531",
  },
  {
    title: "Cloud Computing",
    slug: "cloud-computing",
    image: "https://cdn.shopaccino.com/igmguru/categories/colud-computing-146479015978456_s.png?v=531",
  },
  {
    title: "Big Data",
    slug: "big-data",
    image: "https://cdn.shopaccino.com/igmguru/categories/big-data-146504616938870_s.png?v=531",
  },
  {
    title: "Agile and Scrum",
    slug: "agile-scrum",
    image: "https://cdn.shopaccino.com/igmguru/categories/agile-and-scrum-146561529301933_s.png?v=531",
  },
  {
    title: "Project Management",
    slug: "project-management",
    image: "https://cdn.shopaccino.com/igmguru/categories/project-management-146598115966861_s.png?v=531",
  },
  {
    title: "Salesforce",
    slug: "salesforce",
    image: "https://cdn.shopaccino.com/igmguru/categories/salesforce-certification-147115496210272_s.png?v=531",
  }
];

export default function CourseGrid() {
  return (
    <>
      <motion.div
        className="grid-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {courses.map((course, index) => (
          <a key={index} href={`/courses/${course.slug}`} className="card">
            <div className="icon-box">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="content">
              <p className="title">{course.title}</p>
              <span className="view-all">View all</span>
            </div>
          </a>
        ))}
      </motion.div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 40px;
        }

        .card {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          text-decoration: none;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
        }

        .card:hover {
          background-color: #fff5ec;
          transform: translateY(-4px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
        }

        .icon-box {
          width: 100px;
          height: 100px;
          background: #f0f6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          flex-shrink: 0;
        }

        .icon-box img {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        .content {
          padding: 20px;
          flex: 1;
        }

        .title {
          font-size: 16px;
          font-weight: 600;
          color: #111;
          margin: 0;
        }

        .view-all {
          display: inline-block;
          margin-top: 6px;
          font-size: 14px;
          color: #f26c00;
          border-bottom: 1px solid #f26c00;
          width: fit-content;
        }

        @media (max-width: 1100px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .grid-container {
            grid-template-columns: 1fr;
          }

          .card {
            flex-direction: column;
            text-align: center;
          }

          .icon-box {
            width: 100%;
            height: 140px;
          }

          .content {
            padding: 10px 20px 20px;
          }
        }
      `}</style>
    </>
  );
}
