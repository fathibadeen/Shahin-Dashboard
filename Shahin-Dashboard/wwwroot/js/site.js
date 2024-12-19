<script>
    document.addEventListener("DOMContentLoaded", function () {
            const mainContent = document.querySelector("#main-content");
    const navLinks = document.querySelectorAll(".nav-item");

            navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior
            const url = this.getAttribute("href").substring(1); // Get the link's href without #

            // Load content dynamically based on the clicked link
            fetchContent(url);

            // Update active link
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
            });

    // Function to fetch and display content dynamically
    function fetchContent(page) {
                if (page === "dashboard") {
        mainContent.innerHTML = ` 
          
  
                    `;
                } else if (page === "companies") {
        mainContent.innerHTML = `
    <link href="css/company.css" rel="stylesheet">

  <h1 class="section-title">My Companies</h1>
  
  <div class="profile-card">
    <div class="info-row">
      <div class="info-column">
        <div class="info-group">
          <h2 class="info-label">Company Name</h2>
          <div class="info-value" tabindex="0">Diamond Document Company is a joint stock company</div>
        </div>
      </div>
      
            <div class="info-column">
                <div class="info-group">
                <h2 class="info-label">Company CR</h2>
                <div class="info-value" tabindex="0">1010432657</div>
                </div>
            </div>
            </div>
<br/>
    <div class="info-row">
      <div class="info-column">
        <h2 class="info-label">Company Address</h2>
        <div class="info-value" tabindex="0">Saudi Arabia, Riyadh, Al Rabie</div>
      </div>

      <div class="contact-group">
        <h2 class="info-label">Email</h2>
        <div class="info-value" tabindex="0">Iahmedkh7@gmail.com</div>
      </div>
    </div>

    <div class="mobile-group">
      <h2 class="info-label">Mobile Number</h2>
      <div class="info-value" tabindex="0">0555555555</div>
    </div>
  </div>
                    `;
                } else if (page === "Policies") {
        mainContent.innerHTML = `
                        <link href="css/pol.css" rel="stylesheet">

                   <header class="dashboard-header">
            <h1 class="dashboard-title">Policies</h1>
        </header>

        <section class="policies-overview" aria-label="Policy Status Overview">
            <div class="status-wrapper">
                <div class="status-container">
                    <div class="status-grid" role="tablist">
                        <button class="status-card status-card--active" role="tab" aria-selected="true" aria-controls="valid-policies" id="valid-tab">
                            <div class="status-icon" aria-hidden="true"></div>
                            <span class="status-text">Valid Policies (0)</span>
                        </button>

                        <button class="status-card" role="tab" aria-selected="false" aria-controls="expiring-policies" id="expiring-tab">
                            <div class="status-icon">
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f677404f20769676e8d9a43c00f3b8c6743278387c07745847d9e1fa87c3751?placeholderIfAbsent=true&apiKey=453406a16b6a4076a7bffe0d96a90661" alt="" aria-hidden="true" width="60" height="60">
                            </div>
                            <span class="status-text">Policies Expiring Soon (0)</span>
                        </button>

                        <button class="status-card" role="tab" aria-selected="false" aria-controls="expired-policies" id="expired-tab">
                            <div class="status-icon">
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d40a7fc9e982042e4027ffe686d2754e12902319e6f46d149cf1a196903f087?placeholderIfAbsent=true&apiKey=453406a16b6a4076a7bffe0d96a90661" alt="" aria-hidden="true" width="60" height="60">
                            </div>
                            <span class="status-text">Expired Policies (0)</span>
                        </button>
                    </div>

                    <div class="empty-state" role="status" aria-live="polite">
                        There Is No Policy
                    </div>
                </div>
            </div>
        </section>
                    `;
                      } else if (page === "requests") {
        mainContent.innerHTML = `
                       <link href="css/pol.css" rel="stylesheet">

                   <header class="dashboard-header">
            <h1 class="dashboard-title">Cancel requests</h1>
        </header>

        <section class="policies-overview" aria-label="Policy Status Overview">
            <div class="status-wrapper">
                <div class="status-container">
                    <div class="status-grid" role="tablist">
                       

                    <div class="empty-state" role="status" aria-live="polite">
                        There Is No requests
                    </div>
               
                    `;
                } else if (page === "quotations") {
        mainContent.innerHTML = `
                        <link href="css/qu.css" rel="stylesheet">

                    <h1 class="page-title">Quotations</h1>
                    <section class="quotations-box" aria-labelledby="quotations-title">
                        <div class="actions-container">
                            <div class="button-group">
                                <button class="action-button" type="button">
                                    <img src="assets/img/pol2.svg" alt="" class="nav-icon" aria-hidden="true">
                                    Issue Policy Offer
                                </button>
                                <button class="action-button2" type="button">
                                    <img src="assets/img/pol3.svg" alt="" class="nav-icon" aria-hidden="true">
                                    Members Add Offer
                                </button>
                            </div>
                            <div class="empty-state" role="status">
                                You Have No Active Quotes
                            </div>
                    </section>
                </div>
           

                      `   } else if (page === "receipts") {
        mainContent.innerHTML = `
                        <link href="css/pol.css" rel="stylesheet">

                   <header class="dashboard-header">
            <h1 class="dashboard-title">receipts</h1>
        </header>

        <section class="policies-overview" aria-label="Policy Status Overview">
            <div class="status-wrapper">
                <div class="status-container">
                    <div class="status-grid" role="tablist">
                       

                    <div class="empty-state" role="status" aria-live="polite">
                        There Is No receipts
                    </div>
                </div>
            </div>
        </section>

                      `}
                
            }

    // Initialize with the dashboard content
    fetchContent("dashboard");
        });
</script>