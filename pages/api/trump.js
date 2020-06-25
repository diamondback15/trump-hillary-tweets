export default (req, res) => {
    const fakeJson = {
            twitter_handle: 'realDonaldTrump',
            tweets: [
              {
                id: 11,
                title: "President @realDonaldTrump on the destroying of statues: “Not going to happen while I’m here.”",
              },
              {
                id: 12,
                title: "President @realDonaldTrump : The 20 most dangerous American cities are Democrat run",
              },
              {
                id: 13,
                title: "Today, President @realDonaldTrump signed a historic child welfare executive order, bringing all adoption partners to the table, including faith-based organizations & houses of worship, to support our goal of creating a permanent & safe home for every child waiting in foster care.",
              },
              {
                id: 14,
                title: "The left is determined to tear down America's cultural heritage and history. Not on President @realDonaldTrump's watch.",
              },
              {
                id: 15,
                title: "Achieving the best outcomes for vulnerable children and families in America is a priority for both President @realDonaldTrump and @FLOTUS. How the President's historic child welfare executive order will strengthen our foster care system: http://45.wh.gov/5yKBD8",
              },
              {
                id: 16,
                title: "This is beautiful and will have an enormously positive impact on both foster children and the parents who want to adopt them.  Thank you, @realDonaldTrump! Quote Tweet",
              },
              {
                id: 17,
                title: "“How Trump Is Making Black America Great Again, The Untold Story Of Black Advancement in the Era of Trump.” By Horace Cooper  A great new book!",
              },
              {
                id: 18,
                title: "Great!  Appeals Court Upholds Justice Departments Request To Drop Criminal Case Against General Michael Flynn!",
              },
              {
                id: 19,
                title: "A GREAT DAY IN ARIZONA!",
              },
              {
                id: 20,
                title: "It is ashame that Congress doesn’t do something about the lowlifes that burn the American Flag. It should be stopped, and now!",
              }     
      ] 
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(fakeJson))
}