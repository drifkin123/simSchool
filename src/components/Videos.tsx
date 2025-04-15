import React from 'react';
import styles from '../styles/Videos.module.css';

interface VideoItem {
  title: string;
  url: string;
  thumbnail: string;
}

interface ResourceItem {
  title: string;
  description: string;
  pdfUrl: string;
}

const Videos: React.FC = () => {
  const videos: VideoItem[] = [
    {
      title: 'About simSchool',
      url: 'https://youtu.be/-1gOe8gPNdE',
      thumbnail: 'https://img.youtube.com/vi/-1gOe8gPNdE/maxresdefault.jpg'
    },
    {
      title: 'Learning to Teach in simSchool',
      url: 'https://youtu.be/AAf-QCA7K7g',
      thumbnail: 'https://img.youtube.com/vi/AAf-QCA7K7g/maxresdefault.jpg'
    },
    {
      title: 'Understanding Observation Reports',
      url: 'https://youtu.be/QLy4Oqjwc5A',
      thumbnail: 'https://img.youtube.com/vi/QLy4Oqjwc5A/maxresdefault.jpg'
    },
    {
      title: 'What To Do When: Students Raise their Hands',
      url: 'https://youtu.be/QEWmWDzmTgQ',
      thumbnail: 'https://img.youtube.com/vi/QEWmWDzmTgQ/maxresdefault.jpg'
    },
    {
      title: 'What To Do When: Students Aren\'t Gaining Academically',
      url: 'https://youtu.be/YUxl2iXhqWE',
      thumbnail: 'https://img.youtube.com/vi/YUxl2iXhqWE/maxresdefault.jpg'
    }
  ];

  const resources: ResourceItem[] = [
    // {
    //   title: 'Resource Title',
    //   description: 'Resource description',
    //   pdfUrl: 'https://drive.google.com/...'
    // }
  ];

  return (
    <div className={styles.videosContainer}>
      <section className={styles.section}>
        <h1>Video Resources</h1>
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoCard}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <div className={styles.thumbnailContainer}>
                  <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
                  <div className={styles.playButton}>
                    <svg viewBox="0 0 24 24" width="48" height="48">
                      <path d="M8 5v14l11-7z" fill="white" />
                    </svg>
                  </div>
                </div>
                <h3>{video.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h1>PDF Resources</h1>
        <div className={styles.resourceGrid}>
          {resources.map((resource, index) => (
            <div key={index} className={styles.resourceCard}>
              <a href={resource.pdfUrl} target="_blank" rel="noopener noreferrer">
                <div className={styles.pdfIcon}>
                  <svg viewBox="0 0 24 24" width="48" height="48">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="#FF0000" />
                  </svg>
                </div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Videos; 