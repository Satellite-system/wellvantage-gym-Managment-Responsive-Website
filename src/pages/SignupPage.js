import React, { useState } from "react";
import "./../styles/SignupPage.css";
import wellvantageImg from "./../assets/images/wellvantage.svg";
import googleIcon from "./../assets/icons/google.svg";
import InputBoxComponent from "../components/InputBoxComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./../firebase"; // Adjust path as needed

function SignUpPage() {
  const [googleSigned, setGoogleSigned] = useState(false);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // The signed-in user info.
      const user = result.user;
      console.log("User signed in:", user);
      setGoogleSigned(true);
    } catch (error) {
      // Handle Errors here.
      console.error("Google Sign-In Error:", error.message);
    }
  };

  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log("User signed out.");
  //       // Update state or redirect
  //     })
  //     .catch((error) => {
  //       console.error("Logout Error:", error.message);
  //     });
  // };

  return (
    <div className="container">
      <div className="leftBox">
        <img
          src={wellvantageImg}
          alt="wellvantage logo"
          className="wellvantageLogo"
        />
      </div>

      <div className="rightBox">
        {!googleSigned ? (
          <div className="rightBoxSignUp">
            <p className="title">Sign Up</p>
            <p className="subTitle">
              Welcome! Manage, Track and Grow your Gym with Wellvantage.
            </p>

            <div className="signUpBox" onClick={() => signInWithGoogle()}>
              <img src={googleIcon} alt="google Icon" className="googleIcon" />
              <span className="signupTxt">Continue with Google</span>
            </div>
          </div>
        ) : (
          <div className="rightBoxDetails">
            <p className="title2">Details</p>
            <p className="subTitle2">Let’s build your gym’s digital HQ! 🏋️‍♂️</p>

            <p className="formTitleTxt">
              Enter your name, address & contact so we can tailor everything for
              your business.
            </p>

            <div className="inputBoxes">
              <InputBoxComponent title="Gym Name" required={true} />
              <InputBoxComponent
                title="Gym Owner’s First Name"
                subTitle="(will have access to all features of the app)"
                required={true}
              />
              <InputBoxComponent title="Last Name" required={true} />
              <InputBoxComponent title="Address Line 1" required={true} />
              <InputBoxComponent title="Address Line 2" required={true} />
              <InputBoxComponent title="City" required={true} />
              <InputBoxComponent title="State" required={true} />
              <InputBoxComponent title="Country" required={true} />
            </div>

            <div className="bottomContainerBox">
              <label class="round-checkbox">
                <input type="checkbox" id="policyCheckBox" name="policy" />
                <span class="checkmark"></span> I agree to the Privacy Policy.
              </label>

              <ButtonComponent title="Next" onClick={() => navigate("/home")} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
