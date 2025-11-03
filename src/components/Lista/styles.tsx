import styled from "styled-components";

export const GenerateItemButton = styled.button`
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 0.95em;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(79, 172, 254, 0.3);
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all 0.35s ease;
  z-index: 10;
  letter-spacing: 0.3px;
  backdrop-filter: blur(8px);

  &:hover {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 28px rgba(79, 172, 254, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 15px rgba(79, 172, 254, 0.25);
  }
`;

export const Card = styled.div`
  width: 95%;
  max-width: 400px;
  margin: 50px auto;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.1),
    inset 0 0 30px rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 70px;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15),
      inset 0 0 40px rgba(255, 255, 255, 0.4);
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 0 6px rgba(79, 172, 254, 0.25), 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.08) rotate(2deg);
    box-shadow: 0 0 0 8px rgba(67, 233, 123, 0.3),
      0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const Name = styled.h2`
  font-size: 2em;
  color: #1f2d3d;
  margin-bottom: 20px;
  font-weight: 800;
  width: 100%;
  word-wrap: break-word;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  letter-spacing: 0.5px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const Info = styled.p`
  width: 100%;
  text-align: left;
  padding: 8px 0;
  margin: 0;
  font-size: 0.97em;
  color: #444;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  gap: 8px;
  transition: all 0.25s ease;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;

    strong {
      margin-bottom: 2px;
    }
  }

  strong {
    color: #2c3e50;
    font-weight: 600;
    flex-shrink: 0;
    min-width: 90px;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const LoginInfo = styled(Info)`
  background: linear-gradient(145deg, #f9fafc, #eef1f5);
  border-left: 4px solid #48cae4;
  font-size: 0.9em;
  display: block;
  padding: 14px 12px;
  margin-top: 15px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.04),
    inset 0 1px 4px rgba(255, 255, 255, 0.3);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.07),
      inset 0 1px 6px rgba(255, 255, 255, 0.4);
  }

  & > strong {
    color: #e63946;
    display: block;
    margin-bottom: 6px;
    font-size: 1em;
    font-weight: 700;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
    margin: 10px 0;
  }
`;
