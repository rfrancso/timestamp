import React from 'react';
import Image from 'next/image';
import Head from 'next/head'; // For setting the page title

export default function CSC429Page() {
  return (
    <>
      <Head>
        <title>CSC429 - Senior Design Success</title>
      </Head>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}>
        <h1 style={{ textAlign: 'center' }}>CSC429 - Senior Design Success</h1>
        <Image src="/csc429.jpg" alt="CSUDH Campus" width={800} height={450} layout="responsive" />
        <p style={{ textAlign: 'center' }}>Published on May 1, 2024 by University News</p>
        <div style={{ textIndent: '2em', lineHeight: '1.6' }}>
          <p>All students in the CSC429 senior design class excelled, successfully completing their projects and passing the course. This course explores various facets of engineering and technology, allowing students to apply theoretical knowledge in practical, real-world projects.</p>
          <p>This years projects were particularly notable for their innovative approach to solving real-world problems. Each project group tackled unique challenges, demonstrating exceptional problem-solving skills and creativity.</p>
          <p>The culmination of the course was a showcase where students presented their projects to an audience of industry professionals and academics. The feedback was overwhelmingly positive, with several projects receiving interest from potential investors.</p>
          <p>This success story is a testament to the hard work and dedication of the students and the faculty who guided them. It highlights the importance of hands-on learning and real-world application in education.</p>
        </div>
      </div>
    </>
  );
}
