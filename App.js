import "./Styles.css";
function Pages() {
  return (
    <>
      <div>
        <div className="card">
          <img className="dot" src="pic.png" alt="MyPic" />
          <div className="Inter-Variable">
            <h2 className="name">Adjei Emmanuel</h2>

            <h3 className="location">Kumasi, Ghana</h3>
          </div>
          <p className="description">"Pastor and Web developer"</p>
          <div className="Inter-Variable">
            <ul className="pages">
              <li>
                <a
                  className="github"
                  target="_blank rel=noopener"
                  href="https://github.com/adjeiemmanuel"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="youtube"
                  target="_blank rel=noopener"
                  href="https://www.youtube.com/@OURJOYCREATION"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  className="tiktok"
                  target="_blank rel=noopener"
                  href="https://www.tiktok.com/@adjei_emma7?_t=8qLWCQeAN77&_r=1"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  target="_blank rel=noopener"
                  href="https://www.instagram.com/adjeiemma9"
                >
                  Intstagram
                </a>
              </li>
              <li>
                <a
                  className="facebook"
                  target="_blank rel=noopener"
                  href="https://www.facebook.com/share/K1kzzSSut6gwDBaL/?mibextid=LQQJ4d"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return <Pages />;
}
