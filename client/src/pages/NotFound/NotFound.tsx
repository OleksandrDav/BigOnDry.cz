import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const twinkle = keyframes`
  from { opacity: 0.2; }
  to { opacity: 1; }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #3a1c71);
  background-size: 400% 400%;
  animation: ${gradientBackground} 15s ease infinite;
  color: white;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  text-align: center;
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Star = styled.div<{ size: number; left: number; top: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: white;
  border-radius: 50%;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  animation: ${twinkle} ${props => 2 + props.delay}s ease-in-out infinite alternate;
  opacity: 0.2;
`;

const Astronaut = styled.div`
  width: 150px;
  height: 150px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="256" fill="%23FFD700"/><circle cx="256" cy="256" r="200" fill="%23FFEEAA"/><circle cx="200" cy="200" r="30" fill="%23333"/><circle cx="300" cy="200" r="30" fill="%23333"/><path d="M200 300 Q256 350 300 300" fill="none" stroke="%23333" stroke-width="10" stroke-linecap="round"/></svg>');
  background-size: contain;
  margin-bottom: 2rem;
  animation: ${float} 6s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.7));

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  margin: 0;
  background: linear-gradient(to right, #fff, #ccc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0 2rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HomeButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
    z-index: -1;
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3
    });
  }
  return stars;
};

const NotFoundPage: React.FC = () => {
  const stars = generateStars(100);

  return (
    <PageContainer>
      <StarsContainer>
        {stars.map(star => (
          <Star
            key={star.id}
            size={star.size}
            left={star.left}
            top={star.top}
            delay={star.delay}
          />
        ))}
      </StarsContainer>
      
      <Astronaut />
      <Title>404</Title>
      <Subtitle>
        Houston, we have a problem! The page you're looking for is lost in space.
      </Subtitle>
      <HomeButton onClick={() => window.location.href = '/'}>
        Return to Earth
      </HomeButton>
    </PageContainer>
  );
};

export default NotFoundPage;