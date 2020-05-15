import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "iamdaz.com"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./bender-over-there-compressor.png" alt="Welcome to iamdaz.com" />
        <h1>
          Hola{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my little piece of the Internet - a sandbox for fiddling in.</p>
        <p>
          This is a Gatsby site, mastered in github and running on Netlify CMS. 
      Check out how fast it is on <Link to="https://gtmetrix.com/">GTMetrix</Link>.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Blog is this way...</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
