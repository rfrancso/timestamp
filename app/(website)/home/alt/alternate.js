import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// Define an Article component for reuse
function Article({ title, author, date, category, imagePath, description, link }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={imagePath}
        alt="Article Image"
        width={500}
        height={300}
        objectFit="cover" // Adjust as needed
        layout="responsive"
      />
      <div className="p-4">
        <p className="text-sm text-gray-500">{category}</p>
        <h2 className="text-xl font-bold my-2">
          {link ? (
            <Link legacyBehavior href={link}><a>{title}</a></Link>
          ) : (
            title
          )}
        </h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="text-sm text-gray-500">
          By {author} · {date}
        </div>
      </div>
    </article>
  );
}


export default function AltHome() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for articles */}
            <Article
              title="2024 Total Solar Eclipse"
              author="Science Daily"
              date="April 8, 2024"
              category="Science"
              imagePath="/solar-eclipse.jpg"
              description="A rare total solar eclipse crossed North America, offering unique opportunities for scientific research and public viewing."
            />

            <Article
              title="CSC429 - Senior Design Success"
              author="University News"
              date="May 1, 2024"
              category="Education"
              imagePath="/csc429.jpg"
              description="All students in the CSC429 senior design class excelled, successfully completing their projects and passing the course."
              link="/csc429"
            />

            <Article
              title="Massive Protests in Argentina Over Education Cuts"
              author="Global News"
              date="April 24, 2024"
              category="Politics"
              imagePath="/protests.jpg"
              description="Huge protests erupted across Argentina in response to severe education budget cuts by the government."
            />

            <Article
              title="AI's Role in Modern Warfare"
              author="Tech Today"
              date="May 15, 2024"
              category="Technology"
              imagePath="/ai-warfare.jpg"
              description="Recent advancements in artificial intelligence are significantly shaping the strategies employed in modern warfare."
              link="/war-fare" // Link to the article page
            />

            <Article
              title="Inflation Crisis Hits Global Economy"
              author="Economic Weekly"
              date="May 10, 2024"
              category="Economy"
              imagePath="/inflation-crisis.jpg"
              description="Countries around the world grapple with soaring inflation rates, impacting living costs and economic stability."
            />

            <Article
              title="Breakthrough in Renewable Energy"
              author="Energy Innovations"
              date="April 20, 2024"
              category="Environment"
              imagePath="/renewable-energy.jpg"
              description="Scientists have achieved a major breakthrough in renewable energy technology, promising a more sustainable future."
            />
          </div>
        </div>
      </main>
    </div>
  );
}
