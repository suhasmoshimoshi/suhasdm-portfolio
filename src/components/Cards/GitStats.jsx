import styled from "styled-components";
const Wrapper = styled.div`
margin: auto;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`
const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const GithubDIV1 = styled.div`
    
`
export const GithubDIV2 = styled.div`
width: 80%;
    display: flex;
    gap: 40px;

    @media (max-width: 960px) {
        flex-direction: column;
  }
    @media (max-width: 768px) {
    max-width: 380px;
    flex-direction: column;
  }
`
export const LeftGithubDiv = styled.div`  


@media (max-width: 960px) {
    max-width: 400px;
    margin: auto;
  }

@media (max-width: 768px) {
    max-width:  80%;
    margin: auto;
  }
`
export const RightGithubDiv = styled.div`
@media (max-width: 768px) {
    max-width: 380px;
    margin: auto;
  }
@media (max-width: 960px) {
    max-width: 400px;
    margin: auto;
  }
`
export const GithubDiv3 = styled.div`
@media (max-width: 768px) {
    max-width: 380px;
    margin: auto;
  }
@media (max-width: 960px) {
    max-width: 400px;
    margin: auto;
  }
`

export const GitStats = () => {
    return (
        <div>
            <Wrapper>
                <Title>Github Stats</Title>
                <GithubDIV1>
                    <img id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=suhasmoshimoshi&langs_count=8&theme=radical" alt="Shubham's GitHub stats" />
                </GithubDIV1>
               <GithubDIV2>
                    <LeftGithubDiv >
                        <img id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=suhasmoshimoshi&theme=radical" alt="Suhas's GitHub stats" style={{ maxWidth: "100%" }} />
                    </LeftGithubDiv>
                    <RightGithubDiv >
                        <img id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com?user=suhasmoshimoshi&theme=radical" alt="GitHub Streak" style={{ maxWidth: "100%" }} />
                    </RightGithubDiv>
                </GithubDIV2>
                <GithubDiv3 className="react-activity-calendar">
                    <img src="https://ghchart.rshah.org/FE428E/suhasmoshimoshi"  alt="Shubham's Github Contribution" style={{ maxWidth: "100%" }} />
                </GithubDiv3>
            </Wrapper>
        </div>
    );
}