import React, { useState } from "react";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
const Appointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      Phone,
      country,
      message,
    }

    console.log(data);
    if (!data) {
      alert("Please Enter All Fields");
      return;
    }
    setShowModal(true);
  };

  const closeModel = () => {
    setShowModal(false);
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
    setCountry("");
  };
  return (
    <div className="w-full bg-heroBg text-white p-10">
      <div className="container mx-auto">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6 items-center lg:w-4/5">
          <div className=" ">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Make an Appointment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="bg-green-950 h-10 p-3 flex items-center rounded-full justify-center w-10">
                    <PermIdentityOutlinedIcon fontSize="small" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-300">
                      24 Hours Services
                    </h4>
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quae,
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-950 h-10 p-3 flex items-center rounded-full justify-center w-10">
                    <BusinessCenterOutlinedIcon fontSize="small" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-300">
                      Expert Therapy
                    </h4>
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quae,
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
                <div className="flex gap-4">
                  <div className="bg-green-950 h-10 p-3 flex items-center rounded-full justify-center w-10">
                    <PhoneCallbackOutlinedIcon fontSize="small" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-300">
                      High Quality Care
                    </h4>
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quae,
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-950 h-10 p-3 flex items-center rounded-full justify-center w-10">
                    <LanguageOutlinedIcon fontSize="small" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-300">
                      Trusted Clinic
                    </h4>
                    <p className="text-slate-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quae,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 ">
            <form className="" onSubmit={handleSubmit}>
              <h2 className="font-bold text-xl text-black">Book Appointment</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 my-2">
                <div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="border-b-2 p-2 text-black w-full outline-none"
                    placeholder="Name"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="border-b-2 p-2 text-black focus:ring-2 focus:border-b-black   w-full outline-none my-3"
                    placeholder="Contact Number"
                  />
                </div>
                <div>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="email"
                    className="border-b-2 outline-none w-full p-2 text-black"
                    placeholder="Email"
                  />
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    className="border-b-2 my-3 text-black w-full p-2 outline-none"
                    placeholder="Country"
                  />
                </div>
              </div>
              <div>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  name=""
                  placeholder="Message"
                  className="w-full text-black border-b-2 p-2"
                  id=""
                ></textarea>
                <button
                  className="bg-buttonBg p-2 w-full shadow-md rounded-md my-3"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {
        showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-90">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <h2 className="text-black">Thank You!!</h2>
              <p className="text-black">Thank You,{name} for submitting your query</p>
              <button
              onClick={closeModel}
              className="mt-4 px-4 py-2 bg-primary  rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Appointment;
