import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Comments from 'components/Comments'
import Chart from 'components/Chart'

const Blog = () => {
  return (
    <Layout pageName="nyheter">
      <Helmet>
        <title>Nyheter</title>
      </Helmet>
      <Container type="timeline" className="text-center">
        <h1>Tidslinje</h1>
        <p>Tidslinje över rapporterade fall i Sverige</p>
        <br />
        <div>
          <h3>29 Februari 2020</h3>
          <li>
            SR Ekot rapporterar 1 nytt fall av coronaviruset (
            <a
              className="sourceLink"
              href="https://sverigesradio.se/artikel/7418762"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <li>
            SR Ekot rapporterar 1 nytt fall av coronaviruset (
            <a
              className="sourceLink"
              href="https://sverigesradio.se/sida/artikel.aspx?programid=97&artikel=7418659"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <h3>28 Februari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 4 nya fall av coronaviruset (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/fler-fall-upptackta-av-covid-19/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>{' '}
          <h3>27 Februari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 5 nya fall av coronaviruset (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/inbjudan-till-presstraff-ytterligare-fall-av-covid-19-i-flera-regioner2/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>{' '}
          <h3>26 Februari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 1 nytt fall av coronaviruset (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/nytt-bekraftat-fall-av-covid-19/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>{' '}
          <h3>31 Januari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 1 nytt fall av coronaviruset (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/januari/bekraftat-fall-av-nytt-coronavirus-i-sverige/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>{' '}
        </div>
        <br />
        <br />

        <h1>Utveckling</h1>
        <p>Graf över antal fall i Sverige</p>
        <Container className="chart-container">
          <Container className="chart">
            <Chart />
          </Container>
        </Container>
      </Container>
    </Layout>
  )
}

export default Blog
