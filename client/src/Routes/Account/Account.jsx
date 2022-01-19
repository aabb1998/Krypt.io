import React from "react";
import "./Account.css";
import Navbar from "./../../Components/Navbar/Navbar";
import { Footer, MailingList } from "../../Components";
import profilePic from "../../assets/profile-pic.png";
import { useUserAuth } from "../../Context/UserAuthContext";
import { useState } from "react";
import PasswordReset from "./PasswordReset";

const Account = () => {
	const { user, updateName, updateUserEmail, resetPass, updateProfilePic } =
		useUserAuth();
	const [newUser, setNewUser] = useState("");
	const [newEmail, setNewEmail] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [photoUrl, setPhotoUrl] = useState("");

	const handleSubmit = async () => {
		try {
			if (newUser) {
				await updateName(newUser);
			}
			if (newEmail) {
				await updateUserEmail(newEmail);
			}

			window.location.reload();
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleProfilePic = async () => {
		try {
			await updateProfilePic(photoUrl);
		} catch (error) {
			console.log(error.message);
		}
		window.location.reload();
	};

	const handlePassReset = () => {
		setShowModal(true);
	};

	const handleModalClose = () => {
		setShowModal(false);
	};

	return (
		<div className="account__profile">
			<Navbar />
			<div className="account__profile-section">
				<PasswordReset
					show={showModal}
					handleClose={handleModalClose}
					handleOpen={handlePassReset}
				/>
				<div className="account__profile-header">
					<h2>Account Settings</h2>
				</div>
				<div className="account__profile-main">
					<div className="account__profile-details">
						<div className="account__details">
							<div className="account__details-header">
								<h4>Avatar</h4>
							</div>
							<div className="account__detail-info">
								<img
									style={{ borderRadius: "36px" }}
									src={user.photoURL}
									alt=""
								/>
								<input
									placeholder="Photo Url"
									className="photoUrlInput"
									onChange={(e) =>
										setPhotoUrl(e.target.value)
									}
								/>
								<button
									onClick={handleProfilePic}
									className="account__avatar-btn"
								>
									Edit Avatar
								</button>
							</div>
						</div>
					</div>
					<div className="account__profile-details">
						<div className="account__details">
							<div className="account__details-header">
								<h4>Display Name</h4>
							</div>
							<div className="account__detail-info">
								<input
									onChange={(e) => setNewUser(e.target.value)}
									type="text"
									placeholder={user.displayName}
								/>
							</div>
						</div>
					</div>
					<div className="account__profile-details">
						<div className="account__details">
							<div className="account__details-header">
								<h4>Email Address</h4>
							</div>
							<div className="account__detail-info">
								<input
									onChange={(e) =>
										setNewEmail(e.target.value)
									}
									type="email"
									placeholder={user.email}
								/>
							</div>
						</div>
					</div>
					<div className="account__save-Btn">
						<button
							onClick={handleSubmit}
							style={
								!newUser && !newEmail
									? {
											cursor: "not-allowed",
											pointerEvents: "none",
											backgroundColor: "#e5e5e5",
									  }
									: null
							}
						>
							Save
						</button>
					</div>
				</div>
				<div className="account__passReset">
					<div className="account__passReset-header">
						<h5>Password</h5>
						<span>
							Set a unique password to protect your personal
							account.
						</span>
					</div>
					<div className="account__passReset-Btn">
						<button onClick={handlePassReset}>
							Change Password
						</button>
					</div>
				</div>
			</div>
			<MailingList />
			<Footer />
		</div>
	);
};

export default Account;
