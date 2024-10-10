import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <>
      <section class="navbar_style text_style w-100 start-0 bottom-0 position-relative">
        <footer>
          <div class="border-bottom container">
            <div class="d-flex justify-content-between  row">
              <div class="mt-3 mb-1 col-md-3">
                <div class="row">
                  <NavLink className="navbar-brand" to="/">
                    DevDiaries
                  </NavLink>
                </div>
                <div class="row">
                  <p class="text-white pt-3 fs-6 ">
                    Welcome to devDiaries, your go-to platform for insightful blogs. We provide a space to learn, share,
                    and grow in the tech industry. Join our community, contribute your knowledge, and stay updated with
                    the latest technology.
                  </p>
                </div>
                <div class="row">
                  <div class="my-3 d-flex">
                    <a href="" class="me-1 border rounded-circle " title="facebook" target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-facebook"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="white"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/tech_superior_consulting/"
                      target="_blank"
                      rel="noreferrer"
                      class="mx-1 border rounded-circle "
                      title="instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-instagram"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="white"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                        <circle cx="12" cy="12" r="3"></circle>
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                      </svg>
                    </a>
                    <a
                      href="https://www.google.com/search?q=tech+superior+consulting&amp;rlz=1C1IMSH_enIN1044IN1044&amp;sxsrf=APwXEdfYT00Q89dQ8wb23OTXlvSAQ6tLiw%3A1684931940247&amp;ei=ZAVuZO_MDurb4-EPrf2ygAU&amp;ved=0ahUKEwjvjpPO_I3_AhXq7TgGHa2-DFAQ4dUDCA8&amp;uact=5&amp;oq=tech+superior+consulting&amp;gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAWEB4yAggmMhkILhCABBDHARCvARCXBRDcBBDeBBDgBBgBOgQIABBHOgoIABBHENYEELADOgcIIxCKBRAnOgUIJhCLA0oECEEYAFDhB1izCmDIDWgBcAJ4AIABiQKIAbsDkgEFMC4xLjGYAQCgAQHIAQO4AQPAAQHaAQYIARABGBQ&amp;sclient=gws-wiz-serp"
                      target="_blank"
                      rel="noreferrer"
                      class="mx-1 border rounded-circle "
                      title="google"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-google"
                        width="29"
                        height="29"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="white"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" class="mx-2 border rounded-circle " title="twitter">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-brand-x "
                      >
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                      </svg>
                    </a>
                    <a href="" rel="noreferrer" target="_blank" class="mx-1 border rounded-circle " title="linkedIn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-brand-linkedin"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="white"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <line x1="8" y1="11" x2="8" y2="16"></line>
                        <line x1="8" y1="8" x2="8" y2="8.01"></line>
                        <line x1="12" y1="16" x2="12" y2="11"></line>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-3 mb-1  col-md-6">
                <div class="row">
                  <h4 class="text-center">Find Us</h4>
                </div>
                <div class="">
                  <div class="d-flex justify-content-between">
                    <div class="first-row">
                      <h6 class="location-tsc">Head Office - Gurugram</h6>
                      <p class="mt-2 para-margin para-font text-white" role="button">
                        <span class="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="footer_iconColor__be1N5"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="11" r="3"></circle>
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                          </svg>
                        </span>
                        812 P, Sector 47, <span class="para-font footer_socialPin__U4Z5t">Gurugram </span>
                        <p class="para-font ms-4 footer_locationDelhi__X3Gus">Haryana 122018</p>
                      </p>
                      <p class="my-0 text-white footer_socialContect__CmosY" role="button">
                        <span class="me-1"></span>
                        <a href="" class="text-white text-decoration-none">
                          blogs@devDiaries.com
                        </a>
                      </p>
                      <p class="my-0 text-white" role="button">
                        <span class="me-1">{/* Add icon */}</span>
                        <a href="" class="text-white text-decoration-none">
                          +91 9990839648
                        </a>
                      </p>
                      <p class="my-0 text-white">
                        <span class="me-1">{/* ADD ICON */}</span>
                        <a href="" class="text-white para-font text-decoration-none">
                          +91 9211139060
                        </a>
                      </p>
                      <p class="mt-0 text-white ">
                        {/* <span class="me-1">ADD Icon</span> */}
                        <a href="" class="text-white   text-decoration-none">
                          devDiaries@gmail.com
                        </a>
                      </p>
                    </div>

                    <div class="second-row">
                      <h6 class="location-tsc">Dehradun</h6>
                      <p class="mt-2 para-bottom para-font text-white" role="button">
                        <span class="me-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="footer_iconColor__be1N5"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="11" r="3"></circle>
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                          </svg>
                        </span>
                        308, 3rd Floor, Plot No. 21{' '}
                        <p class="ms-4 para-font footer_loctionDehradun__8g9dm">Chrysler Tech Centre, IT Park,</p>
                        <p class="ms-4 para-font footer_loctionDehradun__8g9dm">Sahastradhara Road, Dehradun</p>
                        <p class="ms-4 para-font footer_loctionDehradun__8g9dm">Uttarakhand - 248013</p>
                      </p>
                      <h6 class="location-delhi">Delhi</h6>
                      <p class="my-2 para-font text-white" role="button">
                        <span class="me-1">{/* add icon */}</span>
                        A-21, <span class="para-font footer_socialPin__U4Z5t">Green Park Extension,</span>
                        <p class="para-font ms-4 footer_locationDelhi__X3Gus">New Delhi- 110016</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-3 mb-1 col-md-2">
                <div class="row">
                  <h4 class="">Useful Links</h4>
                  <div class="row">
                    <div class="mt-4 row">
                      <div class="my-2 useful-mobile " role="button">
                        About
                      </div>
                      <div class="my-2 useful-mobile " role="button">
                        Engagement
                      </div>
                      <div class="my-2 useful-mobile " role="button">
                        Careers
                      </div>
                      <div class="my-2 useful-mobile " role="button">
                        Contact Us
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-3 px-1 container">
            <div class="d-flex justify-content-between footer_copyrightDiv__RiDlE row">
              <div class="col-md-6">
                <small class="">
                  © Copyright : <b>dev Diaries Pvt Ltd</b>. All Rights Reserved
                </small>
              </div>
              <div class="d-flex justify-content-end   col-md-6">
                <div class="mx-2 " role="button">
                  Privacy Policy
                </div>
                <div class="mx-2 " role="button">
                  Terms &amp; Conditions
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
export default Footer;
