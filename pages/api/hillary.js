export default (req, res) => {
    const fakeJson = {
            twitter_handle: 'hillary',
            tweets: [
                      {
                        id: 11,
                        title: "We're excited to announce a new collaboration with  @RockefellerFdn  &  @HillaryClinton !  Along w/ 25 former presidents, foreign ministers & activists we’re drafting bold recommendations to accelerate progress for women & girls. Report launching in September https://bit.ly/3fLcOFC",
                      },
                      {
                        id: 12,
                        title: "Today—join us!",
                      },
                      {
                        id: 13,
                        title: "Kudos to  @OnwardTogether  partner  @ColorOfChange  & other orgs like  @NAACP  for organizing #StopHateforProfit.   Companies like  @Patagonia  &  @BenAndJerrys  are putting their money where their mouths are to tell Facebook it’s time to stop the spread of lies & bigotry on its platforms.",
                      },
                      {
                        id: 14,
                        title: "What could be worse in Hillary Clinton or Joe Biden's philosophy than betraying your country to a hostile foreign leader? Great question, @StephenAtHome",
                      },
                      {
                        id: 15,
                        title: "We live!!! http://morethanavote.org Thank you to every incredible athlete and artist working to help us pull this together. Change doesn’t happen sitting on the sideline. Use our site to register and join our fight against voter suppression. ✊🏾👑 #MoreThanAVote #BlackLivesMatter"
                    },
                      {
                        id: 16,
                        title: "Today is primary #ElectionDay in Kentucky, New York + Virginia (runoffs in Mississippi, North Carolina + South Carolina). With limited polling places and voters not receiving ballots, it’s important to protect your vote. Call the Election Protection Hotline at 866-OUR-VOTE.",
                      },
                      {
                        id: 17,
                        title: "When Trump lost the trade war, America’s farmers and manufacturing workers lost much more — they lost their livelihoods.",
                      },
                      {
                        id: 18,
                        title: "Again, 120,000 Americans are dead from COVID-19 and the president ordered testing to be slowed down because big numbers would hurt him politically. There aren't words for this level of betrayal.",
                      },
                      {
                        id: 19,
                        title: ". @UNESCO ’s new  @GEMReport  is an urgent call for more inclusive education to make a more inclusive world. Let's answer the call. https://en.unesco.org/gem-report/report/2020/inclusion… #AllMeansAll",
                      },
                      {
                        id: 20,
                        title: "VICTORY THREAD ALERT Police cars revolving lightPolice cars revolving light   Our voting rights lawsuit in Arizona pushed the State to adopt specific measures to ensure that minority voters have fair and equal access to voting this November.   The state will...",
                      }     
              ] 
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(fakeJson))
}