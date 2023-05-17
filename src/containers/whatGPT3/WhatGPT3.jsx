import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import config from '../../config';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Wilderness Adventures Hub" text={config.whatis} />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="NFT Payments" text="Embrace the future of payments with Wilderness Adventures Hub as we proudly accept Web 3.0 payments, ensuring seamless and secure transactions for your ultimate convenience." />
      <Feature title="Safaris" text="Embark on captivating safaris with Wilderness Adventures Hub and immerse yourself in the wonders of untamed wilderness. Explore diverse landscapes, encounter magnificent wildlife, and create lifelong memories in the heart of nature's grandeur" />
      <Feature title="Rooms" text="Experience comfort and tranquility with Wilderness Adventures Hub's exceptional room accommodations. Rest and rejuvenate in our thoughtfully designed rooms, offering a peaceful sanctuary amidst the wilderness. Whether it's cozy lodges, luxury tents, or charming cabins, we provide the perfect retreat for you to unwind after your thrilling adventures" />
      <Feature title="Foods" text="Indulge in delectable cuisine with Wilderness Adventures Hub and savor the flavors of the wilderness. From mouthwatering local delicacies to international favorites, our diverse food offerings are crafted to delight your taste buds and provide nourishment for your wilderness escapades" />
      <Feature title="Activities" text="Engage in exhilarating activities with Wilderness Adventures Hub and add an extra dose of excitement to your wilderness journey. From thrilling hikes to thrilling wildlife encounters, our carefully curated activities offer unforgettable experiences that cater to every adventurer's passion and curiosity." />
    </div>
  </div>
);

export default WhatGPT3;
