import React from 'react';
import styles from './Services.module.css';
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: 'Venue Setup',
    description: 'Elegant indoor and outdoor setups to match your wedding theme perfectly.',
    icon: '/images/venue-icon.svg',
  },
  {
    title: 'Catering',
    description: 'Delicious custom menus from gourmet cuisine to traditional favorites.',
    icon: '/images/catering-icon.svg',
  },
  {
    title: 'Photography & Videography',
    description: 'Capture every moment with our professional photo and video team.',
    icon: '/images/photography-icon.svg',
  },
  {
    title: 'Decor & Styling',
    description: 'Customized floral, lighting, and table decor to bring your dream to life.',
    icon: '/images/decor-icon.svg',
  },
  {
    title: 'Entertainment',
    description: 'Live bands, DJs, and cultural performances to elevate your celebration.',
    icon: '/images/music-icon.svg',
  },
  {
    title: 'Wedding Planning',
    description: 'Stress-free planning from start to finish with your personal wedding coordinator.',
    icon: '/images/planning-icon.svg',
  },
];

const OurServices = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div className={styles.serviceBox} key={index}>
              <img src={service.icon} alt={service.title} className={styles.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
