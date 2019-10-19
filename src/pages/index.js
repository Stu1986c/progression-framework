// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>ENSEK's Career Progression Framework</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              This is where we keep the progression frameworks we use at ENSEK.
            </DescriptionText>
            <DescriptionText>
              Progression frameworks are tools that help us evaluate and pay our
              staff consistently, and help people understand how to progress in
              their work.
            </DescriptionText>
            <DescriptionText>
              We&apos;ve put them here for everyone at ENSEK to use.
            </DescriptionText>
            <DescriptionText>
              We&apos;ll be adding more frameworks as we build them, and
              updating existing ones as we grow, so expect things to change
              around here!
            </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
