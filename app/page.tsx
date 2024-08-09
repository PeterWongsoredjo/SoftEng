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
                Seorang mahasiswa Teknik Informatika Institut Teknologi Bandung. Lahir pada tanggal 28 Oktober 2005
                di Semarang. Memiliki ketertarikan dalam bidang pengembangan perangkat lunak dan teknologi blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="MnBnP">
          <div className="MnB-container">
              <div className="MnB-title">
                <p>HOBBIES</p>
              </div>
              <div className="billiard">
                <div className="billiard-image">
                  <img src="Billiard.png" alt="Billiard" />
                </div>
                <div className="billiard-text">
                  <p>BILLIARD</p>
                </div>
              </div>
              <div className="basket">
                <div className="basket-image">
                  <img src="Basket.png" alt="Basketball" />
                </div>
                <div className="basket-text">
                  <p>BASKETBALL</p>
                </div>
              </div>
              <div className="crypto">
                <div className="crypto-image">
                  <img src="Bitcoin.png" alt="" />
                </div>
                <div className="crypto-text">
                  <p>CRYPTOCURRENCY</p>
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
                <img src="KSEP.png" alt="KSEP ITB" />
              </div>
              <div className="KSEP-text">
                <div className="KSEP-title">
                  <p>PTD KSEP 2024</p>
                </div>
                <div className="KSEP-time">
                  <p>Wakil Kepala Divisi Pendidikan</p>
                  <p></p>
                  <p>2024-2025</p>
                </div>
              </div>
            </div>
            <div className="LC">
              <div className="LC-pic">  
                <img src="LC.png" alt="Loyola College" />
              </div>
              <div className="LC-text">
                <div className="LC-title">
                  <p>PAB SMA Kolese Loyola 2024</p>
                </div>
                <div className="LC-time">
                  <p>Staff Acara</p>
                  <p></p>
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