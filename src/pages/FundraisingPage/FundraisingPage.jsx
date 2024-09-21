import React, { useEffect, useState } from "react";
import "./FundraisingPage.css";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import { BsArrowDownShort } from "react-icons/bs";
import Icon from "../../assets/Icon.svg";
import Amount from "../../pages/Amount/Amount";
// import Modal from "../../pages/Modal/Modal";
import Tree from "../../assets/Tree.svg";
import Header from "../../components/Header/Header";
import Modal from "../../components/Payment/Modal";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allCampaigns } from "../../Global/slice";
import useLocalStorage from "use-local-storage";
import toast, { Toaster } from "react-hot-toast";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const FundraisingPage = () => {
  const [pay, setPay] = useState(false);
  const { id } = useParams();

  console.log(id);

  const [data, setData] = useState(null);
  const [cam, setCam] = useState();
  const [oneData, setOneData] = useLocalStorage();
  const [datas, setdatas] = useState({});
  const [loading, setloading] = useState(true);
  const [loadingScreen, setloadingScreen] = useState(true);
  const dispatch = useDispatch();
  // console.log(id)

  const main = useSelector((state) => state.kindraise.allCampaigns);
  // console.log(main, "main")
  const get = () => {
    const url = "https://kindraise.onrender.com/api/v1/getallcampaigns";
    setloading(true);
    axios
      .get(url)
      .then((res) => {
        // setOneData(res.data, "check")
        setOneData(res?.data?.allCampaigns);
        
        // setOneData(res?.data?.allCampaigns);
        console.log(oneData, "oneData");
        const nae = oneData.filter((data) => data.ev == id);
        console.log(nae[0], "nae");
        setdatas(nae[0]);
        setloading(false);
        console.log(datas, "datas");
        // console.log(oneData, "one")
        console.log(res?.data?.allCampaigns, "all");
      })
      .catch((err) => {
        console.log(err); // Set the error message
        setloading(false);
      });
  };

  useEffect(() => {
    get();
    // setOneData(us)
  }, []);
  // console.log(data, "data")

  // setOneData(data.filter((e)=>e.id == id))
  const [amount, setAmount] = useState("");
  const [amntBtn, setAmntBtn] = useState(false);
  const [bank, setBank] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const menuData = data.filter((e)=> e.ev === ev)
  // console.log(menuData)



  // pk_test_cX9ZLV4ty3SErvh4DVDwhcfwqc1Pov81yst1d2PL

  const paymentData = {
    amount,
    bank,
    name,
    email,
    message,
  };
  // console.log(paymentData)

  const donor = [
    {
      name: "Anonymous",
      date: "02/01/2024",
      amount: "10,000",
    },
    {
      name: "Chidi Benson",
      date: "02/01/2024",
      amount: "20,000",
    },
    {
      name: "Jack Samuel",
      date: "02/01/2024",
      amount: "2,000",
    },
    {
      name: "Lucy Eze",
      date: "02/01/2024",
      amount: "15,000",
    },
  ];

  const num = () => {
    console.log(Date.now());
  };

  const max = 2000;
  const current = 1000;
  const percentage = (current / max) * 100;
  // console.log(pay)

  //   function payKorapay() {
  //     window.Korapay.initialize({
  //         key: "pk_juigfweofyfewby732gwo8923e",
  //         reference: "your-unique-reference",
  //         amount: 3000,
  //         currency: "NGN",
  //         customer: {
  //           name: "John Doe",
  //           email: "john@doe.com"
  //         },
  //         onClose: function () {
  //           // Handle when modal is closed
  //         },
  //         onSuccess: function (data) {
  //           // Handle when payment is successful
  //         },
  //         onFailed: function (data) {
  //           // Handle when payment fails
  //         }
  //         ...
  //     });
  // }

  function payKorapay() {
    window.Korapay.initialize({
      key: import.meta.env.VITE_Public_Key,
      reference: `kindraiser_${Date.now()}`,
      amount: 2000,
      currency: "NGN",
      customer: {
        name: "jack",
        email: "jack@gmail.com",
      },
      onClose: function () {
        // Handle when modal is closed
        close
      },
      onSuccess: function (data) {

        // Handle when payment is successful
      },
      onFailed: function (data) {
        // Handle when payment fails
      },
    });
  }

  const close =()=>{
    toast.success("ended")
    setPay(false);
  }

  return (
    <>
      <div className="fundRaiseBody">
        {
          loading ? <LoadingScreen/>:null
        }
        
        {pay ? (
          <Modal
            setMessage={setMessage}
            setEmail={setEmail}
            setName={setName}
            setBank={setBank}
            setAmount={setAmount}
            setPay={setPay}
          />
        ) : null}
        <div className="fund-head">
          <Header />
        </div>
        <div className="fundRaiseTitleBox">
          <h2>{loading ? "..." : <>{datas?.title}</>}</h2>
          <div>{loading ? "..." : <>{datas?.subtitle}</>}</div>
        </div>
        <div className="fundMainContentBox">
          <div className="fundMainContentWrapper">
            <div className="fundContentBox">
              <div className="fundContentInBox">
                <img src={datas?.profilePic} alt="pic" />
              </div>

              <div className="fundRaiseTrackBox">
                <div className="fundRaiseTrackMoney">
                  <h2>₦{loading ? "..." : <>{datas?.totalRaised?.toLocaleString()}</>}</h2>
                  <div>raised of ₦{datas?.Goal?.toLocaleString()} goal</div>
                </div>
                <div className="trackBox">
                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${(datas?.totalRaised / datas?.Goal) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="fundRaiseNoDonor">
                  {loading ? "..." : <>{datas?.supporters}</>} Donors
                </div>
              </div>

              <div className="fundRaiseOrgName">
                <div className="fundRaiseOrgCard">
                  <div className="orgImg">{loading ? "..." : <>{datas?.npo?.organizationName[0]}</>}</div>
                  <div>
                    <div className="fundRaiseOgBy">Organized by</div>
                    <div className="fundOrgName">
                      {loading ? "..." : <>{datas?.npo?.organizationName}</>}
                    </div>
                  </div>
                </div>
                <div className="fundRaiseOrgVerified">verified</div>
              </div>

              {/* <div className="donateBoxMedia">
              <div className="bonateInBox">
                <button
                  className="fundRaiseDonateBtn"
                  onClick={() => setPay(true)}
                >
                  Donate
                </button>
                <button className="fundRaiseShareBtn">
                  Share with friends
                </button>
              </div>
            </div> */}

              <div className="fundRaiseStoryBox">
                <h2>Story</h2>
                <div className="fundRaiseStory">{loading ? "..." : <>{datas?.story}</>}</div>
                <div className="showMoreStories">
                  show more <BsArrowDownShort />
                </div>
              </div>

              <div className="fundRaiseDonorBox">
                <h2>Donors</h2>
                <div className="fundDonorWrapper">
                  {donor.map((e) => (
                    <div className="fundDonor">
                      <div className="fundRaiseNameBox">
                        <div className="fundRaiseIconBox">
                          <img src={Icon} alt="" />
                        </div>
                        <div className="fundRaiseName">
                          <div className="fundRaiseUserName">{e.name}</div>
                          <div className="fundRaiseUserdate">{e.date}</div>
                        </div>
                      </div>
                      <div className="fundRaiseAmountBox">₦{e.amount}</div>
                    </div>
                  ))}
                </div>
                <div className="fundRaiseSeeAll" onClick={() => Nav("/donor")}>
                  <span>See All</span>
                </div>
              </div>
              <div className="fundRaiseUpdateBox">
                <h2>Update</h2>
                <div>No updates for this Campaigns just yet</div>
              </div>
            </div>
            <div className="donateBox">
              <div className="bonateInBox">
                {datas?.status == "inactive" ? (
                  <button
                    disabled={true}
                    className="disabled"
                    onClick={() => setPay(true)}
                  >
                    Donate
                  </button>
                ) : (
                  <button
                    className="fundRaiseDonateBtn"
                    onClick={payKorapay}
                  >
                    Donate
                  </button>
                )}
                <button
                  className="fundRaiseShareBtn"
                  onClick={() => setShareModal(true)}
                >
                  Share with friends
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster/>
    </>
  );
};

export default FundraisingPage;
