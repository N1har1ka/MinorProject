import React, { useEffect, useState } from 'react';
import './WorkerDashboard.css'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function WorkerDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Plumbing Job', description: 'Fix a leaking pipe', status: 'Available' },
    { id: 2, title: 'Electrical Job', description: 'Install new light fixtures', status: 'Available' },
  ]);

  const [bids, setBids] = useState([
    { id: 1, jobTitle: 'Painting Job', amount: '$200', status: 'Pending' },
    { id: 2, jobTitle: 'Roof Repair', amount: '$500', status: 'Accepted' },
  ]);
  const [name, setName] = useState('John Doe'); // Replace with actual user data
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  useEffect(() => {
    if (
      name !== 'John Doe' ||
      profilePhoto ||
      location !== '' ||
      phoneNumber !== '' ||
      email !== '' ||
      address !== ''
    ) {
      setIsEdited(true);
    } else {
      setIsEdited(false);
    }
  }, [name, profilePhoto, location, phoneNumber, email, address]);

  const handleSaveProfile = () => {
    // Add logic to save profile information and photo
    console.log('Profile saved:', {
      name,
      profilePhoto,
      location,
      phoneNumber,
      email,
      address,
    });
    setIsEdited(false); // Reset the edited state after saving
  };


  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file)); // Preview image
  };
  const triggerFileInput = () => {
    document.getElementById('photoInput').click();
  };
  const renderContent = () => {
    switch (activeSection) {
      case 'clientList':
        return (
          <section className="client-list">
            <h2>Client List</h2>
            {/* Add content related to clients' needs here */}
            <p>Clients looking for workers will be listed here.</p>
            <section className="jobs-section">
        <h2>Available Jobs</h2>
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <button>Apply</button>
            </li>
          ))}
        </ul>
      </section>
          </section>
          
        );
      case 'contractorList':
        return (
          <section className="contractor-list">
            <h2>Contractor List</h2>
            {/* Add content related to contractors' requirements here */}
            <p>Contractors looking for workers will be listed here.</p>
            <section className="jobs-section">
        <h2>Available Jobs</h2>
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <button>Apply</button>
            </li>
          ))}
        </ul>
      </section>
          </section>
        );
      case 'dashboard':
      default:
        return (
          <>
      <section className="profile-header">
              <div className="greeting">
                <h3>Hi, {name}</h3>
              </div>
              <div className="header-photo">
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Profile" className="header-img" />
                ) : (
                  <FaUserCircle size={40} />
                )}
              </div>
      </section>
      <div className='dashboard-content'>
      <section className="bids-section">
        <h2>My Bids</h2>
        <ul>
          {bids.map((bid) => (
            <li key={bid.id}>
              <h3>{bid.jobTitle}</h3>
              <p>Bid Amount: {bid.amount}</p>
              <p>Status: {bid.status}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="profile-section">
              <div className="profile-card">
                <div className="profile-photo">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Profile" className="profile-img" />
                  ) : (
                    <FaUserCircle size={100} />
                  )}
                </div>
                <input
                  type="file"
                  id="photoInput"
                  style={{ display: 'none' }}
                  onChange={handlePhotoChange}
                />
                <button className="edit-photo" onClick={triggerFileInput}>
                  Add/Edit Photo
                </button>
                
                <div className="profile-info">
                  <div className="profile-field">
                    <label>Name:</label>
                    <input 
                      type="text" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div className="profile-field">
                    <label>Location:</label>
                    <input 
                      type="text" 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)} 
                      placeholder="Enter location" 
                    />
                  </div>
                  <div className="profile-field">
                    <label>Phone Number:</label>
                    <input 
                      type="text" 
                      value={phoneNumber} 
                      onChange={(e) => setPhoneNumber(e.target.value)} 
                      placeholder="Enter phone number" 
                    />
                  </div>
                  <div className="profile-field">
                    <label>Email:</label>
                    <input 
                      type="email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      placeholder="Enter email" 
                    />
                  </div>
                  <div className="profile-field">
                    <label>Address:</label>
                    <input 
                      type="text" 
                      value={address} 
                      onChange={(e) => setAddress(e.target.value)} 
                      placeholder="Enter address" 
                    />
                  </div>
                </div>
                <button
                  className="save-profile"
                  onClick={isEdited ? handleSaveProfile : null}
                  style={{ backgroundColor: isEdited ? 'green' : 'grey' }}
                >
                  {isEdited ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
            </section>
          </div>
          </>
        );
    }
  };

  return (
    <div className="worker-dashboard">
      <nav className="navbar">
        <div className="logo" onClick={() => setActiveSection('dashboard')}>
        <Link to="/">
           <div className='ulli1'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.5EBcdJl3ADM-KQyAn25JaQHaH3&pid=Api&P=0&h=180' width={50} height={50}/>
            <p>EzHire</p>
           </div>
          </Link>
        </div>
        <div className="nav-links">
          <button onClick={() => setActiveSection('clientList')}>Client List</button>
          <button onClick={() => setActiveSection('contractorList')}>Contractor List</button>
          <button onClick={() => setActiveSection('dashboard')}>Dashboard</button>
        </div>
      </nav>
      
      <main>
        {renderContent()}
      </main>
    </div>
  );
}
