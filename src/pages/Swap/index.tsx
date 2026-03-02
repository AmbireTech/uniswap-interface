import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

import chromeLogo from '../../assets/images/chrome.webp'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`

const PageWrapper = styled.div`
  display: flex;
  // align-items: center;
  justify-content: center;
  // min-height: calc(100vh - 72px);
  padding: 10rem 16px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}
`

const Card = styled.div`
  width: 40rem;
  background: #16181f;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  overflow: hidden;
  animation: ${fadeUp} 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
`

const Body = styled.div`
  padding: 24px 24px 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`

const BrandName = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.01em;
`

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
  margin: 0 0 8px;
  line-height: 1.25;
`

const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 22px;
  max-width: 400px;
`

const CTAButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 18px;
  background: #d7ff00;
  border-radius: 11px;
  text-decoration: none;
  color: #0f1200;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: opacity 0.15s ease, transform 0.15s ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
    opacity: 0.8;
  }
`

const HelpLink = styled.a`
  margin-top: 14px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.28);
  text-decoration: none;

  &:hover {
    color: rgba(255, 255, 255, 0.55);
  }
`

export default function DeprecatedSwapPage() {
  return (
    <PageWrapper>
      <Card>
        <Body>
          <LogoRow>
            <LogoImg src="https://www.ambire.com/logo.svg" alt="Ambire" />
            <BrandName>Ambire Wallet</BrandName>
          </LogoRow>

          <Title>The web wallet has been discontinued</Title>

          <Subtitle>Ambire now lives in your browser as an extension. More features, more power.</Subtitle>
          <CTAButton
            href="https://chromewebstore.google.com/detail/ambire-web3-wallet/ehgjhhccekdedpbkifaojjaefeohnoea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={chromeLogo} alt="Chrome Logo" width={40} />
            Get the Ambire Extension For Chrome
          </CTAButton>
          <HelpLink
            href="https://help.ambire.com/hc/en-us/articles/13346339183516"
            target="_blank"
            rel="noopener noreferrer"
          >
            More info about the extension →
          </HelpLink>
        </Body>
      </Card>
    </PageWrapper>
  )
}
