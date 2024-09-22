import React from 'react'
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from '@react-email/components'

interface IWelcomeTemplateProps {
  name: string
}

const WelcomeTemplate = ({ name }: IWelcomeTemplateProps) => {
  return (
    <Html>
      <Preview>Welcome</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text>Hello {name}</Text>
            <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
