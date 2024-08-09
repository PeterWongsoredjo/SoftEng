import './styles.css';

const Home = () => {
  return (
    <>
      <main className="main">
        <div className="PAD">
        </div>
        <div className="profile">
          <div className="profile-pic">
          <img
            className="profile-image"
            src="/foto_diri.jpg"
            alt="Foto Diri"
          />
          </div>
          <div className="Name-container">
            <div className="profile-name">
              <p className="Nama">
                Peter Wongsoredjo
              </p>
            </div>
            <div className="profile-desc">
              <p className="Deskripsi">
                An Informatics Engineering student at the Institute Technology of Bandung. Born October 28, 2005
                in Semarang, Indonesia. Has an interest in software engineering and cryptography.
              </p>
            </div>
          </div>
        </div>
        <div className="MnBnP">
          <div className="MnB-container">
              <div className="MnB-title">
                <p>HOBBIES</p>
              </div>
              <div className="MnB">
                <div className="MnB-pics">
                  <img className='rotating-img' src="Billiard.png" alt="Billiard" />
                  <img className='rotating-img' src="Basket.png" alt="Basketball" />
                  <img className='rotating-img' src="Bitcoin.png" alt="Bitcoin" />
                  </div>
                <div className="MnB-text">
                    <span>BILLIARD</span>
                    <span>BASKETBALL</span>
                    <span>CRYPTOCURRENCY</span>
                  </div>
                </div>
              </div>
          <div className="Pencapaian-container">
            <div className="Pencapaian-title">
              <p>PENCAPAIAN</p>
            </div>
            <div className="Penc-1">
              <p>GATAU</p>
            </div>
            <div className="Penc-2">
              <p>BINGUNG</p>
            </div>
            <div className="Penc-3">
              <p>WKWKWKWKW</p>
            </div>
          </div>
        </div>
        <div className="PnK">
          <div className="PnK-title">
            <p>PROJECTS</p>
          </div>
          <div className="KSEP-LC">
            <div className="KSEP">
              <div className="KSEP-pic">
                <img style={{height:160, width:200}} src="KSEP.png" alt="KSEP ITB" />
              </div>
              <div className="KSEP-text">
                <div className="KSEP-title">
                  <p>KSEP ITB</p>
                </div>
                <div className="KSEP-time">
                  <p>Staff of Research and Curriculum Development</p>
                  <p>2024</p>
                </div>
              </div>
            </div>
            <div className="LC">
              <div className="LC-pic">  
                <img style={{height:160, width:128}} src="LC.png" alt="Loyola College" />
              </div>
              <div className="LC-text">
                <div className="LC-title">
                  <p>PAB SMA Kolese Loyola 2024</p>
                </div>
                <div className="LC-time">
                  <p>Staff of Events</p>
                  <p>2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="PTD-INFEST">
            <div className="PTD">
              <div className="PTD-pic">
                <img style={{height:160, width:160}} src="PTD.png" alt="PTD KSEP" />
              </div>
              <div className="PTD-text">
                <div className="PTD-title">
                  <p>PTD KSEP ITB 2024</p>
                </div>
                <div className="PTD-time">
                  <p>Deputy Head of Education</p>
                  <p>2024 - 2025</p>
                </div>
              </div>
            </div>
            <div className="INFEST">
              <div className="INFEST-pic">  
                <img style={{height:160, width:160}} src="INFEST.png" alt="INFEST ITB" />
              </div>
              <div className="INFEST-text">
                <div className="INFEST-title">
                  <p>INFEST ITB 2024</p>
                </div>
                <div className="INFEST-time">
                  <p>Staff of Operations</p>
                  <p>2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Referral">
          <div className="Personal">
            <div className="WA">
              <div className="WA-img">
                <img src="WA.png" alt="WhatsApp" />
              </div>
              <div className="WA-text">
                <p>+62 813-5960-6896</p>
              </div>
            </div>
            <div className="IG">
              <div className="IG-img">
                <img src="IG.png" alt="Instagram" />
              </div>
              <div className="IG-text">
                <p>pepewongsoredjo</p>
              </div>
            </div>
            <div className="LN">
              <div className="LN-img">
                <img src="LN.png" alt="Line" />
              </div>
              <div className="LN-text">
                <p>peterwongsoredjo28</p>
              </div>
            </div>
          </div>
          <div className="Professional">
            <div className="EM">
              <div className="EM-img">
                <img src="EM.png" alt="Gmail" />
              </div>
              <div className="EM-text">
                <p>peterwongsoredjo@gmail.com</p>
              </div>
            </div>
            <div className="LI">
              <div className="LI-img">
                <img src="LI.png" alt="LinkedIn" />
              </div>
              <div className="LI-text">
                <p>Peter Wongsoredjo</p>
              </div>
            </div>
            <div className="GH">
              <div className="GH-img">
                <img src="GH.png" alt="GitHub" />
              </div>
              <div className="GH-text">
                <p>PeterWongsoredjo</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;