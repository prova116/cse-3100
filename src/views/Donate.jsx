import './Donate.css'; // Ensure this is linked properly to your project

const Donate = () => {
  return (
    <div className="donate-container container mt-5">
      <h2 className="donate-header">Donate to Purrfect Adoption</h2>
      <p className="donate-description">
        Your support helps us provide food, shelter, and medical care for cats in need. Every contribution, no matter how small, makes a big difference in improving their lives and helping them find a loving home.
      </p>

      <div className="donate-impact-section">
        <h3 className="impact-header">How Your Donation Helps</h3>
        <ul className="impact-list">
          <li><strong>Food & Supplies:</strong> Your donation helps provide nutritious food, litter, and toys for the cats.</li>
          <li><strong>Medical Care:</strong> Your support allows us to cover medical expenses such as vaccinations, neutering/spaying, and treatments for sick cats.</li>
          <li><strong>Shelter:</strong> Your generosity ensures a safe and warm place for the cats while they wait to be adopted.</li>
          <li><strong>Adoption Services:</strong> Your contribution helps cover the costs of finding and matching the perfect families for the cats.</li>
        </ul>
      </div>

      {/* Payment Methods */}
      <div className="donate-methods-section">
        <h3 className="methods-header">Donate Using the Following Methods</h3>
        <div className="donation-methods">
          {/* Bkash */}
          <div className="donation-method">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/68/BKash_logo.svg/225px-BKash_logo.svg.png"
              alt="Bkash Logo"
              className="donate-logo"
            />
            <h4>Bkash</h4>
            <p>Donate instantly using Bkash, one of the most popular mobile financial services in Bangladesh.</p>
            <a
              href="https://www.bkash.com"
              className="btn btn-donate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate via Bkash
            </a>
          </div>

          {/* Nagad */}
          <div className="donation-method">
            <img
              src="data:image/jpeg;base64,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"
              alt="Nagad Logo"
              className="donate-logo"
            />
            <h4>Nagad</h4>
            <p>Donate via Nagad for fast and secure payments within Bangladesh.</p>
            <a
              href="https://www.nagad.com.bd"
              className="btn btn-donate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate via Nagad
            </a>
          </div>

          {/* Rocket */}
          <div className="donation-method">
            <img
              src="https://play-lh.googleusercontent.com/sDY6YSDobbm_rX-aozinIX5tVYBSea1nAyXYI4TJlije2_AF5_5aG3iAS7nlrgo0lk8"
              alt="Rocket Logo"
              className="donate-logo"
            />
            <h4>Rocket</h4>
            <p>If you're outside Bangladesh, you can donate securely via Rocket, another popular mobile financial service.</p>
            <a
              href="https://www.rocket.com.bd"
              className="btn btn-donate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate via Rocket
            </a>
          </div>

          {/* Credit/Debit Cards */}
          <div className="donation-method">
            <img
              src="https://www.visa.co.in/content/dam/VCOM/regional/ap/images/smb-hub/icon-smb-hub-card-enrollment.jpg"
              alt="Visa Logo"
              className="donate-logo"
            />
            <h4>Credit/Debit Cards</h4>
            <p>Donate using Visa, MasterCard, or other credit cards via our online payment system.</p>
            <a
              href="https://www.visa.com"
              className="btn btn-donate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate via Credit Card
            </a>
          </div>
        </div>
      </div>

      <div className="donate-instructions">
        <h4>How to Donate</h4>
        <p>
          Donating is easy! Simply click the button below for your preferred payment method. After clicking the link, follow the instructions provided by the payment service to complete your donation. 
          If you need assistance, please feel free to reach out to us.
        </p>
      </div>

      <div className="thank-you-message mt-5">
        <h5 className="thank-you-text">Thank you for your support!</h5>
        <p>
          With your generous donation, you are helping us make a positive impact in the lives of these cats. We are truly grateful for your kindness and commitment to animal welfare.
        </p>
      </div>
    </div>
  );
};

export default Donate;
