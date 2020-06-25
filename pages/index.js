import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getTrumpTweets, getHillaryTweets } from '../redux/actions/feedActions'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Footer from '../components/footer'

const S = {}

S.ButtonGroup = styled.div`
   margin-top: 2rem;
   background: transparent;
   border: none;
`

S.ButtonTrump = styled.button`
  border-radius: 100px;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  background: red;
  color: white;
  margin: .5rem;
`

S.ButtonHillary = styled.button`
  border-radius: 100px;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  background: blue;
  color: white;
  margin: .5rem;
`

S.Row = styled.div`
  display: grid;
`

S.Col = styled.div`
  padding: 1rem 2rem;
  margin: 10px;
  border-radius: 10px;
  max-width: 500px;
`

S.Tweets = styled.div`
  padding: 1rem 1.2rem;
  background: #eee;
  margin-bottom: 1rem;
  font-size: 14px;
  line-height: 1.6;
  text-align: left;
  border-radius: 5px;
`

S.Main = styled.main`
  text-align: center;
`

const Index = props => {
  const [toggleTrumpHillary, setToggleTrumpHillary] = useState(true)
  const { trumpTweets, hillaryTweets, getTrumpTweets, getHillaryTweets } = props

  useEffect(() => {
    getTrumpTweets()
    getHillaryTweets()
  }, [])
  
  return (
    <div className="container">
      <Head>
        <title>Trump vs Hillary</title>
      </Head>
      <S.Main>
        <h1 className="title">
          Trump vs Hillary
        </h1>
        <div>
            <S.ButtonGroup>
              <S.ButtonTrump onClick={() => setToggleTrumpHillary(true)}>Select Trump Tweets</S.ButtonTrump>
              <S.ButtonHillary onClick={() => setToggleTrumpHillary(false) }>Select Hillary Tweets</S.ButtonHillary>
            </S.ButtonGroup>
            <S.Row>
              { toggleTrumpHillary ? (
              <S.Col>
                  <h2>Trump</h2>
                  { trumpTweets?.map( val => {
                    return <S.Tweets key={ val.id }>{val.title}</S.Tweets>
                  }) }
              </S.Col>
              ) : ( 
              <S.Col>
                <h2>Hillary</h2>
                { hillaryTweets?.map( val => {
                  return <S.Tweets key={ val.id }>{val.title}</S.Tweets>
                }) }
              </S.Col>)}
            </S.Row>              
        </div>
      </S.Main>
      <Footer />
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


const mapStateToProps = state => ({
  trumpTweets: state.feed.trumpTweets,
  hillaryTweets: state.feed.hillaryTweets
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getTrumpTweets,
    getHillaryTweets
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
